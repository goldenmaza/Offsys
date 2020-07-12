using System.Collections.Generic;

namespace Offsys.Server.Models
{
    public class City
    {
        public int id { get; set; }
        public string name { get; set; }
        public float price { get; set; }
        public List<Service> services { get; set; }
    }
}
