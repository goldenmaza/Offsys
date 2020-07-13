using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Offsys.Server.Services
{
    public interface IOrderService
    {
        string getCities();
        Task<string> GetCityDetails(string id);
        Task<string> ProcessOrder(string order);
    }
}
