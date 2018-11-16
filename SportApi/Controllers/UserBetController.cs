using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class UserBetController : Controller
    {
        private readonly SportDbContext _db;

        public UserBetController(SportDbContext db)
        {
            _db = db;
        }

        public IList<Event> Events { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<UserBet>> GetAllAsync()
        {
            var list = await _db.UserBet.FromSql("ReadUserBet").ToListAsync();
            return list;
        }


        [HttpPost]
        public async Task<UserBet> InsertAsync([FromBody]UserBet user)
        {

            return await _db.UserBet.FromSql($"AddUserBet {user.UserID}, {user.BetTypeID}, {user.Stake}, {user.PotentialPayout},{user.Result}").FirstOrDefaultAsync();

        }


    }
}