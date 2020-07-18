using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Offsys.Server.Models;
using Offsys.Server.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace Offsys.Server.Services
{
    public class OrderService : IOrderService
    {
        private readonly IWebHostEnvironment _webHostingEnvironment;
        private List<City> availableCombinations = CityUtil.GetExampleData();
        private List<Order> storedOrders = new List<Order>();

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
            if (_webHostingEnvironment.IsDevelopment())
            {
                Order o = new Order();
                City c = (City)JsonConvert.DeserializeObject(order);

                o.city = c.id;
                o.total = c.squares * c.price;
                o.square = c.squares;
                foreach (Service s in c.services)
                {
                    if (s.selected)
                    {
                        o.selected.Append(s.id);
                    }
                }

                return o.total > 0 ? JsonConvert.SerializeObject(o) : "ERROR";
            }
            else
            {
                // database implementation
                return false ? "TODO" : "ERROR";
            }
        }
    }
}
