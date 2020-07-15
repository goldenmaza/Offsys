namespace Offsys.Server.Services
{
    public interface IOrderService
    {
        string getCities();
        string GetCityDetails(int id);
        string ProcessOrder(string order);
    }
}
