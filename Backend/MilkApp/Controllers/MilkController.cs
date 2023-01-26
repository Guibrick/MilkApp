using Backend.MilkApp.Models;
using Backend.MilkApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.MilkApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MilkController : ControllerBase
{
    private readonly MilkContext _context;

    public MilkController(MilkContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        if (_context.Product != null) return Ok(_context.Product.ToList());
        return NotFound();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetOne(string id)
    {
        var latte = _context.Product.FirstOrDefault(l => l.id == id);
        if (latte != null) return Ok(latte);
        return NotFound();
    }
}

