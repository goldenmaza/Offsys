namespace Offsys.Server.Models
{
    public class Order
    {
        public int city { get; set; }
        public float total { get; set; }
        public float square { get; set; }
        public int[] selected { get; set; }
    }
}
