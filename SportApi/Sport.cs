using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class Sport
    {
        [Key]
        public int SportID { get; set; }
        [Required, StringLength(20)]
        public string SportName { get; set; }
    }
}
