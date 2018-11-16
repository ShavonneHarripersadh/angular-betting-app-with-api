using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SportApi
{
    public class UserDetails
    {
        [Key]
        public int UserID { get; set; }
        [Required, StringLength(20)]
        public string Username { get; set; }

        [Required,StringLength(20)]
        public string Password { get; set; }

        public decimal Balance { get; set; }


    }
}
