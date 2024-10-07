using Microsoft.AspNetCore.Mvc;

namespace NetApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok("GET all products - .NET API");
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        return Ok($"GET product {id} - .NET API");
    }

    [HttpPost]
    public IActionResult Create()
    {
        return Ok("POST new product - .NET API");
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id)
    {
        return Ok($"PUT update product {id} - .NET API");
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return Ok($"DELETE product {id} - .NET API");
    }
}
