using Energidrikkfabrikken.Data;
using Energidrikkfabrikken.Models;
using Microsoft.AspNetCore.Mvc;

namespace Energidrikkfabrikken.Controllers;

public class ContactController : Controller
{
    private readonly ApplicationDbContext _db;

    public ContactController(ApplicationDbContext db)
    {
        _db = db;
    }

    public IActionResult Index()
    {
        return View();
    }
    
    [HttpPost]
    public IActionResult Index(ContactInput contactInput)
    {
        if (ModelState.IsValid) 
        {
            _db.ContactInputs.Add(contactInput);
            _db.SaveChanges();  
            
            return RedirectToAction("Index");
        }
        
        return View(contactInput);
    }
}