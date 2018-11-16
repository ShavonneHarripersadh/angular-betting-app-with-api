using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class Tournament
    {
        [Key]
        public int TournamentID { get; set; }
        [Required,StringLength(20)]
        public string TournamentName { get; set; }

        [ForeignKey("Country")]
        public int CountryID { get; set; }
        
    }
}
