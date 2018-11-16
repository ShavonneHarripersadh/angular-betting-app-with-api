using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly SportDbContext _db;

        public EventController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Event> Events { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<Event>> GetAllAsync()
        {
            var list = await _db.Event.FromSql("ReadEvent").ToListAsync();
            return list;
        }

        [HttpGet("{id}")]
        public async Task<Event> GetAsync(int id)
        {
            return await _db.Event.FromSql($"ReadEventByID {id}").FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<Event> InsertAsync([FromBody]Event eventOne)
        {
            return await _db.Event.FromSql($"AddEvent {eventOne.EventName}, {eventOne.TournamentID}").FirstOrDefaultAsync();
            
        }

        [HttpPut("{id}")]
        public async Task<IEnumerable<Event>> UpdateAsync([FromBody]Event eventOne)
        {
            return await _db.Event.FromSql($"UpdateEvent {eventOne.EventID}, {eventOne.EventName}").ToListAsync();
            
        }

        [HttpDelete("{id}")]
        public async Task<IEnumerable<Event>> Delete(int id)
        {
            return await _db.Event.FromSql($"DeleteEvent {id}").ToListAsync();
        }
    }
}