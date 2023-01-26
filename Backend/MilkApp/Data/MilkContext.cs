using System;
using System.Collections.Generic;
using Backend.MilkApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
namespace Backend.MilkApp.Data;
    public partial class MilkContext : DbContext
    {
        public MilkContext(DbContextOptions<MilkContext> options) : base(options)
        {
        }
        public DbSet<Product> Product { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ContextConfiguration());
        }
    }
