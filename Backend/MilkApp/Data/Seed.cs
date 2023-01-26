using Backend.MilkApp.Models;
using Newtonsoft.Json;

namespace Backend.MilkApp.Data;

public class Seed
{
	[JsonProperty("results")] 
	public ICollection<Product> InitialProduct { get; set; }
}