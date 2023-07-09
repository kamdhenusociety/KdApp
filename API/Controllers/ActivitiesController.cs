using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;
public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Activity>>> GetActivities()
    {
        return  Ok(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        try{
            return Ok(await Mediator.Send(new Details.Query(){Id = id}));
        }
        catch(Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
        try{
            return Ok(await Mediator.Send(new Create.Command(){Activity = activity}));
        }
        catch(Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id,Activity activity)
    {
        try
        {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command(){Activity = activity}));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(Guid id)
    {
        try
        {
            return Ok(await Mediator.Send(new Delete.Command(){Id = id}));
        }
        catch (Exception ex)
        {
            
            return BadRequest(ex.Message);
        }
    }
}
