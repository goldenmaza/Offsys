using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Offsys.Server.Services;

namespace Offsys.Server.API
{
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
        [Route("cities")]
        public async Task<string> GetCities()
        {
            return await Task.FromResult(_orderService.getCities());
        }

        [HttpGet]
        [Route("cities/{id}")]
        public async Task<string> GetCityDetails([FromRoute] string id)
        {
            return await _orderService.GetCityDetails(id);
        }

        [HttpGet]
        [Route("process/{order}")]
        public async Task<string> ProcessOrder([FromRoute] string order)
        {
            return await _orderService.ProcessOrder(order);
        }
    }
}
