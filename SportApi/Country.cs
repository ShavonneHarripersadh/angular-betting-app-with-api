using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class Country
    {
        [Key]
        public int CountryID { get; set; }
        [Required,StringLength(20)]
        public string CountryName { get; set; }

        [ForeignKey("Sport")]
        public int SportID { get; set; }
       
    }
}
