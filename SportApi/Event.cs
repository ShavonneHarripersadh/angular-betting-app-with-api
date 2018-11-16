using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class Event
    {
        [Key]
        public int EventID { get; set; }

        [Required,StringLength(20)]
        public string EventName { get; set; }

        public DateTime Date { get; set; }

        [ForeignKey("Tournament")]
        public int TournamentID { get; set; }
       
    }
}
