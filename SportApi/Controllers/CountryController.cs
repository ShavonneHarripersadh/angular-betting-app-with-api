using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        private readonly SportDbContext _db;

        public CountryController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Country> Countrys { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<Country>> GetAllAsync()
        {
            var list = await _db.Country.FromSql("ReadCountry").ToListAsync();
            return list;
        }

        [HttpGet("{id}")]
        public async Task<Country> GetAsync(int id)
        {
            return await _db.Country.FromSql($"ReadCountryByID {id}").FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<Country> InsertAsync([FromBody]Country country)
        {
            return await _db.Country.FromSql($"AddCountry {country.CountryName}, {country.SportID}").FirstOrDefaultAsync();          
        }

        [HttpPut("{id}")]
        public async Task<IList<Country>> UpdateAsync([FromBody]Country country)
        {
            return await _db.Country.FromSql($"UpdateCountry {country.CountryID}, {country.CountryName}").ToListAsync(); ;
           
        }

        [HttpDelete("{id}")]
        public async Task<IList<Country>> Delete(int id)
        {
            return await _db.Country.FromSql($"DeleteCountry {id}").ToListAsync();
        }
    }
}