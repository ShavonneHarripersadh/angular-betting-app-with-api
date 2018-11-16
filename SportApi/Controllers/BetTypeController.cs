using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class BetTypeController : Controller
    {
        private readonly SportDbContext _db;

        public BetTypeController(SportDbContext db)
        {
            _db = db;
        }

        public IList<BetType> BetTypes { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<BetType>> GetAllAsync()
        {
            var list = await _db.BetType.FromSql("ReadBetType").ToListAsync();
            return list;
        }


        [HttpPost]
        public async Task<BetType> InsertAsync([FromBody]BetType bt)
        {
            return await _db.BetType.FromSql($"AddBetType {bt.Description}, {bt.PriceOne}, {bt.PriceTwo} ,{bt.Draw},{bt.MarketID}").FirstOrDefaultAsync();

        }

        [HttpPut("{id}")]
        public async Task<IEnumerable<BetType>> UpdateAsync([FromBody]BetType bt)
        {
            return await _db.BetType.FromSql($"UpdateBetType {bt.BetTypeID}, {bt.PriceOne},{bt.PriceTwo},{bt.Draw}").ToListAsync();

        }

        [HttpDelete("{id}")]
        public async Task<IEnumerable<BetType>> Delete(int id)
        {
            return await _db.BetType.FromSql($"DeleteBetType {id}").ToListAsync();
        }
    }
}