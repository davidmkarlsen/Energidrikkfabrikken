using Energidrikkfabrikken.Data;
using Microsoft.AspNetCore.Mvc;
using Energidrikkfabrikken.Models;
using Microsoft.EntityFrameworkCore;

namespace Energidrikkfabrikken.Controllers;

public class EnergydrinkController : Controller
{
    private readonly ApplicationDbContext _db;

    public EnergydrinkController(ApplicationDbContext db)
    {
        _db = db;
    }
    
    public IActionResult Index(int? energydrinkId)
    {
        if (energydrinkId == null || energydrinkId == 0)
        {
            return NotFound();
        }

        Energydrink energydrinkFromDb = _db.Energydrinks.Find(energydrinkId);

        if (energydrinkFromDb == null)
        {
            return NotFound();
        }
        
        List<EnergyIngredientVm> objEnergyIngredientList = 
            _db.EnergyIngredientVm
                .Include(x => x.Ingredient)
                .Include(x => x.Energydrink)
                .ThenInclude(x => x.EnergyCategories)
                .ThenInclude(x => x.Category)
                .ToList();

        List<EnergyIngredientVm> chosenEnergyIngredientList = new List<EnergyIngredientVm>();
        
        
        foreach (var energyIngredient in objEnergyIngredientList)
        {
            if (energyIngredient.Energydrink == energydrinkFromDb)
            {
                chosenEnergyIngredientList.Add(energyIngredient);
            }
        }
        
        return View(chosenEnergyIngredientList);
    }
}