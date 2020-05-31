using CotizArsApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public class IApiRestServiceClient
    {
        private IMonedaBehaviour monedaBehaviour;
        HttpClient HttpClient { get; }
        string sufixAddress = "/ARS/json?quantity=1&key=4430|Fsd5MtGMpaRBF8gLGNB5NT6kw90f0^6K";
        public IApiRestServiceClient(HttpClient httpClient)
        {
            httpClient.BaseAddress = new Uri("https://api.cambio.today/v1/quotes/");
            HttpClient = httpClient;
        }        
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
        public async Task<Moneda> GetMoneda()
        {
            string stringTask = await GetStringTask();
            JsonElement result = GetJsonElementResult(stringTask);
            return JsonDeserializeMoneda(result);
        }
        private static Moneda JsonDeserializeMoneda(JsonElement result)
        {
            return JsonSerializer.Deserialize<Moneda>(result.GetRawText());
        }
        private static JsonElement GetJsonElementResult(string stringTask)
        {
            JsonDocument document = JsonDocument.Parse(stringTask);
            JsonElement root = document.RootElement;
            JsonElement result = root.GetProperty("result");
            return result;
        }
        private async Task<string> GetStringTask()
        {
            var httpString = monedaBehaviour.GetId() + sufixAddress;
            return await HttpClient.GetStringAsync(httpString);
        }
    }
}
