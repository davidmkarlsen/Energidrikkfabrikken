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
    
    [Required]
    public int TotalKcalPer100Ml { get; set; }
    
    public ICollection<EnergyIngredientVm> EnergyIngredients { get; set; }
    
    public string? ImageURL { get; set; }
}