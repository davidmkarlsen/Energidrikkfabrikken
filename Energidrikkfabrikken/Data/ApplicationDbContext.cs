using Energidrikkfabrikken.Models;
using Microsoft.EntityFrameworkCore;

namespace Energidrikkfabrikken.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Category> Categories { get; set; }
}