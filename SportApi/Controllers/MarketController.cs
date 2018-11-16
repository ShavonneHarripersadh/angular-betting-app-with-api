using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class MarketController : Controller
    {
        private readonly SportDbContext _db;

        public MarketController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Market> Markets { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<Market>> GetAllAsync()
        {
            var list = await _db.Market.FromSql("ReadMarket").ToListAsync();
            return list;
        }


        [HttpPost]
        public async Task<Market> InsertAsync([FromBody]Market market)
        {
            return await _db.Market.FromSql($"AddMarket {market.MarketName}, {market.EventID}").FirstOrDefaultAsync();

        }

        [HttpPut("{id}")]
        public async Task<IEnumerable<Market>> UpdateAsync([FromBody]Market market)
        {
            return await _db.Market.FromSql($"UpdateMarket {market.MarketID}, {market.MarketName}").ToListAsync();

        }

        [HttpDelete("{id}")]
        public async Task<IEnumerable<Market>> Delete(int id)
        {
            return await _db.Market.FromSql($"DeleteMarket {id}").ToListAsync();
        }
    }
}