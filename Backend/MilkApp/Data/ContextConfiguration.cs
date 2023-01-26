using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Backend.MilkApp.Models;
using Newtonsoft.Json;

namespace Backend.MilkApp.Data;

public class ContextConfiguration : IEntityTypeConfiguration<Product>
{
	public void Configure(EntityTypeBuilder<Product> builder)
	{
		builder.HasData(
			SeedMilkProductData()
		);
	}

	public List<Product> SeedMilkProductData()
	{
		var milkProducts = new Seed();
		using (var r = new StreamReader(@"Data/milk.json"))
		{
			var json = r.ReadToEnd();
			milkProducts = JsonConvert.DeserializeObject<Seed>(json);
		}

		return milkProducts.InitialProduct.ToList();
	}
}