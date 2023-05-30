using Energidrikkfabrikken.Models;
using Microsoft.EntityFrameworkCore;

namespace Energidrikkfabrikken.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Category> Categories { get; set; }
    public DbSet<Energydrink> Energydrinks { get; set; }
    
    public DbSet<EnergyCategoryVm> EnergyCategoryVm { get; set; }

    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<ContactInput> ContactInputs { get; set; }
    public DbSet<EnergyIngredientVm> EnergyIngredientVm { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>().HasData(
            new Category { CategoryId = 1, Name = "Tropisk" },
            new Category { CategoryId = 2, Name = "Ekstra søt" },
            new Category { CategoryId = 3, Name = "Fruktbombe" },
            new Category { CategoryId = 4, Name = "Sur" },
            new Category { CategoryId = 5, Name = "Ekstra koffein" }
        );
    }
}