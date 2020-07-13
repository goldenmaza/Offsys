using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Offsys.Server.Models;
using Offsys.Server.Utilities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Offsys.Server.Services
{
    public class OrderService : IOrderService
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private List<City> availableCombinations = null;

        public OrderService(IWebHostEnvironment webHostingEnvironment)
        {
            _webHostingEnvironment = webHostingEnvironment;
            if (_webHostingEnvironment.IsDevelopment())
            {
                availableCombinations = CityUtil.GetExampleData();
            }
            else
            {
                // database implementation
            }
        }

        public string getCities()
        {
            List<string> cities = new List<string>();

            foreach (City city in availableCombinations)
            {
                cities.Add(city.name);
            }

            return JsonConvert.SerializeObject(cities);
        }

        public Task<string> GetCityDetails(string id)
        {
            throw new NotImplementedException();
        }

        public Task<string> ProcessOrder(string order)
        {
            throw new NotImplementedException();
        }
    }
}
