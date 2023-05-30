using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class EnergyCategoryVm
{
    [Key]
    public int EnergyCategoryVmId { get; set; }
    
    [Required]
    public Energydrink Energydrink { get; set; }
    
    [Required]
    public Category Category { get; set; }
}