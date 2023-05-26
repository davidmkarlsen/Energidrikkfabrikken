using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Energidrikkfabrikken.Models;

public class ContactInput
{
    public int ContactInputId { get; set; }
    
    [Required(ErrorMessage = "Fornavn må legges til")]
    [DisplayName("Fornavn")]
    public string FirstName { get; set; }
    
    [Required(ErrorMessage = "Etternavn må legges til")]
    [DisplayName("Etternavn")]
    public string LastName { get; set; }
    
    [Required(ErrorMessage = "Poststed må legges til")]
    [DisplayName("Poststed")]
    public string County { get; set; }
    
    [Required(ErrorMessage = "Postnummer må legges til")]
    [DisplayName("Postnummer")]
    public int PostNumber { get; set; }
    
    [Required(ErrorMessage = "Gateadresse må legges til")]
    [DisplayName("Gateadresse")]
    public string StreetAddress { get; set; }
    
    [Required(ErrorMessage = "Telefonnummer må legges til")]
    [DisplayName("Telefonnummer")]
    public int PhoneNumber { get; set; }
    
    [Required(ErrorMessage = "Email må legges til")]
    public string Email { get; set; }
    
    [Required(ErrorMessage = "Beskjed må legges til")]
    [MinLength(15, ErrorMessage = "Meldingen må være minst 15 karakterer")]
    [MaxLength(400, ErrorMessage = "Meldingen kan være maks 400 karakterer")]
    [DisplayName("Beskjed")]
    public string Message { get; set; }
}