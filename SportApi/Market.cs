using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class Market
    {
        [Key]
        public int MarketID { get; set; }

        [Required, StringLength(20)]
        public string MarketName { get; set; }

        [ForeignKey("Event")]
        public int EventID { get; set; }
    }
}
