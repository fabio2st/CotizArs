using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CotizArs.Models;
using CotizArsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CotizArsApi.Controllers
{
    public abstract class CotizacionController : ControllerBase
    {
        private readonly IApiRestServiceClient apiRestServiceCliente;
        public CotizacionController(IApiRestServiceClient apiRestServiceCliente)
        {
            this.apiRestServiceCliente = apiRestServiceCliente;
        }
        [HttpGet]
        public async Task<ActionResult<MonedaAdapter>> GetMonedaCotizacion()
        {
            Moneda moneda = await apiRestServiceCliente.GetMoneda();
            MonedaAdapter monedaAdapter = new MonedaAdapter(moneda);
            monedaAdapter.Moneda = apiRestServiceCliente.MonedaBehaviour.GetDescripcion();
            //monedaAdapter.Precio = cambioTodayService.MonedaBehaviour.Format(monedaAdapter.Precio);
            return monedaAdapter;
        }
    }
}