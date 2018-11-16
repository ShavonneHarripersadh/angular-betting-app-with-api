using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class SportDbContext :DbContext
    {
        public SportDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Sport> Sport { get; set; }
        public DbSet<Country> Country { get; set; }
        public DbSet<Tournament> Tournament { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<Market> Market { get; set; }
        public DbSet<BetType> BetType { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<UserBet> UserBet { get; set; }

    }
}
