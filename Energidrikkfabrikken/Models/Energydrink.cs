using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class Energydrink
{
    public int EnergydrinkId { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public Category Category { get; set; }
    
    [Required]
    public string About { get; set; }
    
    [Required]
    public bool AvailableInBigSize { get; set; }
    
    [Required]
    public bool AvailableInSmallSize { get; set; }
    
    [Required]
    public bool IsSugarFree { get; set; }
    
    public ICollection<Ingredient> Ingredients { get; set; }
}