using Offsys.Server.Models;
using System.Collections.Generic;

namespace Offsys.Server.Utilities
{
    public sealed class CityUtil
    {
        private static readonly string[] availableCities = new string[] {
            "Stockholm",
            "Uppsala"
        };
        private static readonly string[] availableServices = new string[] {
            "Fönsterputs",
            "Balkongstädning",
            "Bortforsling av skräp"
        };
        private static readonly float[] availablePrices = new float[] {
            55f,
            65f,
            150f,
            300f,
            400f
        };

        public static List<City> GetExampleData()
        {
            List<City> cityList = new List<City>();

            //Stockholm specific services and their matching prices...
            List<Service> services = new List<Service>();
            Service stockholmService = new Service();
            stockholmService.id = 0;
            stockholmService.name = availableServices[0];
            stockholmService.price = availablePrices[3];
            services.Add(stockholmService);
            stockholmService = new Service();
            stockholmService.id = 1;
            stockholmService.name = availableServices[1];
            stockholmService.price = availablePrices[2];
            services.Add(stockholmService);
            City stockholmCity = new City();
            stockholmCity.id = 0;
            stockholmCity.name = availableCities[0];
            stockholmCity.price = availablePrices[1];
            stockholmCity.services = services;

            //Uppsala specific services and their matching prices...
            services = new List<Service>();
            Service uppsalaService = new Service();
            uppsalaService.id = 0;
            uppsalaService.name = availableServices[0];
            uppsalaService.price = availablePrices[3];
            services.Add(uppsalaService);
            uppsalaService = new Service();
            uppsalaService.id = 1;
            uppsalaService.name = availableServices[1];
            uppsalaService.price = availablePrices[2];
            services.Add(uppsalaService);
            uppsalaService = new Service();
            uppsalaService.id = 2;
            uppsalaService.name = availableServices[2];
            uppsalaService.price = availablePrices[4];
            services.Add(uppsalaService);
            City uppsalaCity = new City();
            uppsalaCity.id = 1;
            uppsalaCity.name = availableCities[1];
            uppsalaCity.price = availablePrices[0];
            uppsalaCity.services = services;

            cityList.Add(stockholmCity);
            cityList.Add(uppsalaCity);

            return cityList;
        }
    }
}
