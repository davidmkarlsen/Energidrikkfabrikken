using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class Ingredient
{
    public int IngredientId { get; set; }
    
    [Required]
    public string Name { get; set; }
}