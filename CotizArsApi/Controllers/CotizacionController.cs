using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CotizArsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CotizArsApi.Controllers
{
    public abstract class CotizacionController : ControllerBase
    {
        public readonly IApiRestClient apiRestClient;
        public CotizacionController(IApiRestClient apiRestCliente)
        {
            this.apiRestClient = apiRestCliente;
        }
        [HttpGet]
        public async Task<ActionResult<MonedaAdapter>> GetMonedaCotizacion()
        {
            Moneda moneda = await apiRestClient.GetMoneda();
            MonedaAdapter monedaAdapter = new MonedaAdapter(moneda);
            monedaAdapter.NombreMoneda = apiRestClient.MonedaBehaviour.GetDescripcion();
            return monedaAdapter;
        }
    }
}