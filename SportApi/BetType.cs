using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class BetType
    {
        [Key]
        public int BetTypeID { get; set; }
        [StringLength(20)]
        public string Description { get; set; }

        public decimal PriceOne { get; set; }

        public decimal PriceTwo { get; set; }

        public decimal Draw { get; set; }

        [ForeignKey("Market")]
        public int MarketID { get; set; }
    }
}
