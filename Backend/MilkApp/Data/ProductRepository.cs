using System;
using Backend.MilkApp.Models;

namespace Backend.MilkApp.Data;

public class ProductRepository : IProductRepository
{
	private readonly MilkContext _context;

	public ProductRepository(MilkContext context)
	{
		_context = context;
	}
}