using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class TournamentController : Controller
    {
        private readonly SportDbContext _db;

        public TournamentController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Tournament> Tournaments { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<Tournament>> GetAllAsync()
        {
            var list = await _db.Tournament.FromSql("ReadTournament").ToListAsync();
            return list;
        }

        [HttpGet("{id}")]
        public async Task<Tournament> GetAsync(int id)
        {
            return await _db.Tournament.FromSql($"ReadTournamentByID {id}").FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<Tournament> InsertAsync([FromBody]Tournament tournament)
        {
            return await _db.Tournament.FromSql($"AddTournament {tournament.TournamentName}, {tournament.CountryID}").FirstOrDefaultAsync();
            
        }

        [HttpPut("{id}")]
        public async Task<IEnumerable<Tournament>> UpdateAsync([FromBody]Tournament tournament)
        {
            return await _db.Tournament.FromSql($"UpdateTournament {tournament.TournamentID}, {tournament.TournamentName}").ToListAsync() ;
            
        }

        [HttpDelete("{id}")]
        public async Task<IEnumerable<Tournament>> Delete(int id)
        {
            return await _db.Tournament.FromSql($"DeleteTournament {id}").ToListAsync();
        }
    }
}