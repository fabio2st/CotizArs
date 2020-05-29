using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public class CambioTodayService
    {
        private IMonedaBehaviour monedaBehaviour;
        public void SetMonedaDolar()
        {
            monedaBehaviour = new DolarBehaviour();
        }
        public void SetMonedaEuro()
        {
            monedaBehaviour = new EuroBehaviour();
        }
        public void SetMonedaReal()
        {
            monedaBehaviour = new RealBehaviour();
        }
        public IMonedaBehaviour MonedaBehaviour { get => monedaBehaviour; }
        public HttpClient HttpClient { get; }
        private string sufixAddress = "/ARS/json?quantity=1&key=4430|Fsd5MtGMpaRBF8gLGNB5NT6kw90f0^6K";
        public CambioTodayService(HttpClient httpClient)
        {
            httpClient.BaseAddress = new Uri("https://api.cambio.today/v1/quotes/");
            HttpClient = httpClient;
        }
        public async Task<Moneda> GetMoneda()
        {
            var httpString = monedaBehaviour.GetId() + sufixAddress;
            var stringTask = await HttpClient.GetStringAsync(httpString);
            JsonDocument document = JsonDocument.Parse(stringTask);
            JsonElement root = document.RootElement;
            JsonElement result = root.GetProperty("result");
            var cotizacion = JsonSerializer.Deserialize<Moneda>(result.GetRawText());
            return cotizacion; //moneda.Serializar(result.GetRawText());
        }
    }
}
