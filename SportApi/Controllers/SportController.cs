using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace SportApi.Controllers
{

    [Route("api/[controller]")]
    public class SportController : Controller
    {
        private readonly SportDbContext _db;

        public SportController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Sport> Sports { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<Sport>> GetAllAsync()
        {
            var list = await _db.Sport.FromSql("ReadSport").ToListAsync();
            return list;
        }

        [HttpGet("{id}")]
        public async Task<Sport> GetAsync(int id)
        {
            return await _db.Sport.FromSql($"ReadSportByID {id}").FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<Sport> InsertAsync([FromBody]Sport sport)
        {
            return await _db.Sport.FromSql($"AddSport {sport.SportName}").FirstOrDefaultAsync();
            
        }

        [HttpPut("{id}")]
        public async Task<IList<Sport>> UpdateAsync([FromBody] Sport sport)
        {
            return await _db.Sport.FromSql($"UpdateSport {sport.SportID}, {sport.SportName}").ToListAsync();
           
        }

        [HttpDelete("{id}")] 
        public async Task<IList<Sport>> Delete(int id)
        {
            return await _db.Sport.FromSql($"DeleteSport {id}").ToListAsync();
        }



    }
}