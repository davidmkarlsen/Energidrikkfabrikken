using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class EnergyIngredientVm
{
    [Key]
    public int EnergyIngredientVmId { get; set; }
    
    [Required]
    public Energydrink Energydrink { get; set; }
    
    [Required]
    public Ingredient Ingredient { get; set; }
    
    public string? Amount { get; set; } 
}