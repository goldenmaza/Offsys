using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Offsys.Server.Services
{
    public interface IOrderService
    {
        Task<IActionResult> getCities();
        Task<IActionResult> GetCityDetails(string id);
        Task<IActionResult> ProcessOrder(string order);
    }
}
