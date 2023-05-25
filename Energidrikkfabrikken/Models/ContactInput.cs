using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class ContactInput
{
    public int ContactInputId { get; set; }
    
    [Required]
    [DisplayName("Fornavn")]
    public string FirstName { get; set; }
    
    [Required]
    [DisplayName("Etternavn")]
    public string LastName { get; set; }
    
    [Required]
    [DisplayName("Poststed")]
    public string County { get; set; }
    
    [Required]
    [MaxLength(4)]
    [DisplayName("Postnummer")]
    public int PostNumber { get; set; }
    
    [Required]
    [DisplayName("Gateadresse")]
    public string StreetAddress { get; set; }
    
    [Required]
    [MaxLength(9)]
    [DisplayName("Telefonnummer")]
    public int PhoneNumber { get; set; }
    
    [Required]
    public string Email { get; set; }
    
    [Required]
    [MaxLength(200)]
    [DisplayName("Beskjed")]
    public string Message { get; set; }
}