using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Offsys.Server.Models;
using Offsys.Server.Utilities;
using System;
using System.Collections.Generic;

namespace Offsys.Server.Services
{
    public class OrderService : IOrderService
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private List<City> availableCombinations = CityUtil.GetExampleData();

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
            Dictionary<int, string> cities = new Dictionary<int, string>();

            foreach (City city in availableCombinations)
            {
                cities.Add(city.id, city.name);
            }

            return JsonConvert.SerializeObject(cities);
        }

        public string GetCityDetails(int id)
        {
            return JsonConvert.SerializeObject(availableCombinations[id]);
        }

        public string ProcessOrder(string order)
        {
            throw new NotImplementedException();
        }
    }
}
