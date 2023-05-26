using Energidrikkfabrikken.Data;
using Energidrikkfabrikken.Models;
using Microsoft.AspNetCore.Mvc;

namespace Energidrikkfabrikken.Controllers;

public class EnergydrinksListController : Controller
{
    private readonly ApplicationDbContext _db;

    public EnergydrinksListController(ApplicationDbContext db)
    {
        _db = db;
    }

    public IActionResult Index()
    {
        List<Energydrink> objEnergydrinksList = _db.Energydrinks.ToList();
        
        return View(objEnergydrinksList);
    }
}