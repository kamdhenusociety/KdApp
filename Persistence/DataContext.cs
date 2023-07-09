using System.Data;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;
public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Activity>()
            .Property(x => x.Date)
            .HasDefaultValueSql("GETUTCDATE()");

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Activity> Activities => Set<Activity>();
}
