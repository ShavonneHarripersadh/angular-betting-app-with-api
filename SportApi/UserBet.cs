using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class UserBet
    {
        [Key]
        public int BetID { get; set; }

        [ForeignKey("UserDetails")]
        public int UserID { get; set; }

        [ForeignKey("BetType")]
        public int BetTypeID { get; set; }

        public decimal Stake { get; set; }

        public decimal PotentialPayout { get; set; }

        public bool Result { get; set; }
    }
}
