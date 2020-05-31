using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public interface IApiRestClient
    {
        //HttpClient HttpClient { get; }
        IMonedaBehaviour MonedaBehaviour { get; }
        void SetMonedaDolar();
        void SetMonedaEuro();
        void SetMonedaReal();
        Task<Moneda> GetMoneda();
    }
}
