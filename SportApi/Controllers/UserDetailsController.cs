using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace SportApi.Controllers
{
    [Route("api/[controller]")]
    public class UserDetailsController : Controller
    {
        private readonly SportDbContext _db;

        public UserDetailsController(SportDbContext db)
        {
            _db = db;
        }

        public IEnumerable<UserDetails> UserDetails { get; private set; }


        [HttpGet]
        public async Task<IEnumerable<UserDetails>> GetAllAsync()
        {
            var list = await _db.UserDetails.FromSql("ReadUserDetails").ToListAsync();
            foreach (var v in list)
            {
                v.Password = SecurePassword.Decrypt(v.Password);
            }
            
            return list;
        }

        [HttpGet("{username},{password}")]
        public async Task<UserDetails> GetAsync(string username, string password)
        {
            password = SecurePassword.Encrypt(password);
            return await _db.UserDetails.FromSql($"ReadUserDetailsByLogin {username}, {password}").FirstOrDefaultAsync();

        }


        [HttpPost]
        public async Task<UserDetails> InsertAsync([FromBody]UserDetails user)
        {
            user.Password = SecurePassword.Encrypt(user.Password);
            return await _db.UserDetails.FromSql($"AddUserDetails {user.Username}, {user.Password}").FirstOrDefaultAsync();

        }

        [HttpPut("{id}")]
        public async Task<UserDetails> InsertBalAsync([FromBody]UserDetails user)
        {
            
            return await _db.UserDetails.FromSql($"UpdateUserBalance {user.UserID},{user.Balance}").FirstOrDefaultAsync();

        }



        public static string EncodePasswordToBase64(string password)
        {
            byte[] bytes = Encoding.Unicode.GetBytes(password);
            byte[] inArray = HashAlgorithm.Create("SHA1").ComputeHash(bytes);
            return Convert.ToBase64String(inArray);
        }


    }
}