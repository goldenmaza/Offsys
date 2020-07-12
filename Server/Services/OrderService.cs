using Microsoft.AspNetCore.Mvc;
using Offsys.Server.Models;
using Offsys.Server.Utilities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Offsys.Server.Services
{
    public class OrderService : IOrderService
    {
        private List<City> availableCombinations = null;

        public OrderService()
        {
            availableCombinations = CityUtil.GetExampleData();
        }

        public async Task<IActionResult> getCities()
        {
            throw new NotImplementedException();
        }

        public async Task<IActionResult> GetCityDetails(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<IActionResult> ProcessOrder(string order)
        {
            throw new NotImplementedException();
        }
    }
}
