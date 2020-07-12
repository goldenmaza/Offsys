using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Offsys.Server.Services;

namespace Offsys.Server.API
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;
        private readonly IOrderService _orderService;

        public OrderController(ILogger<OrderController> logger, IOrderService orderService)
        {
            _logger = logger;
            _orderService = orderService;
        }

        [HttpGet]
        [Route("api/cities")]
        public async Task<IActionResult> GetCities()
        {
            var cities = await _orderService.getCities();
            if (cities == null)
            {
                return NotFound("GetCities failure");
            }
            return Ok(cities);
        }

        [HttpGet]
        [Route("api/cities/{id}")]
        public async Task<IActionResult> GetCityDetails([FromRoute] string id)
        {
            var details = await _orderService.GetCityDetails(id);
            if (details == null)
            {
                return NotFound("GetCityDetails failure");
            }
            return Ok(details);
        }

        [HttpGet]
        [Route("api/process/{order}")]
        public async Task<IActionResult> ProcessOrder([FromRoute] string order)
        {
            var status = await _orderService.ProcessOrder(order);
            if (status == null)
            {
                return NotFound("ProcessOrder failure");
            }
            return Ok(status);
        }
    }
}
