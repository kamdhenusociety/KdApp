using Application.Activities;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;
public static class ApplicationServiceExtension
{
    public static IServiceCollection AddServices(this IServiceCollection services,IConfiguration configuration)
    {
        // Add services to the container.
        services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddDbContext<DataContext>(option => {
            option.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddCors(opt => {
            opt.AddPolicy("CorsPolicy", policy => {
                policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:5173");
            });
        });
        services.AddMediatR(typeof(List.Handler));
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);

        return services;
    }

    public static WebApplication ConfigureApplication(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors("CorsPolicy");
        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;

        try
        {
            var context = services.GetRequiredService<DataContext>();
            context.Database.MigrateAsync();
            Seed.SeedData(context).GetAwaiter();
        }
        catch (Exception ex)
        {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex,"An error occured during migration");
        }
        return app;
    }
}
