using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class Category
{
    public int CategoryId { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    public ICollection<EnergyCategoryVm> EnergyCategories { get; set; }
}