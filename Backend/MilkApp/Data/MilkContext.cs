using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Backend.MilkApp.Models;

    public class MilkContext : DbContext
    {
        public MilkContext(DbContextOptions<MilkContext> options) : base(options)
        { }

        public DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=Milk;User Id=sa;Password=Stockholm-9876;trustServerCertificate=True;");
        }
    }