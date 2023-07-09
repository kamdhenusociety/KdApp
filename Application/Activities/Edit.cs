using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities;
public class Edit
{
    public class Command:IRequest{
        public Activity? Activity { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private DataContext _context;
        private readonly IMapper _mapper;
        public Handler(DataContext context,IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await _context.Activities.FindAsync(request.Activity?.Id ?? throw new ArgumentException("Activity cannot be null.")) 
                            ?? throw new ArgumentException($"Activiy with id {request.Activity.Id} not found.");

            _mapper.Map(request.Activity,activity);                            
                      
            await _context.SaveChangesAsync();

            return Unit.Value;
        }
    }

}
