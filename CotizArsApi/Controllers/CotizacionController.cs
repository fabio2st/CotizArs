using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CotizArs.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CotizArs.Controllers
{
    public class CotizacionController : ControllerBase
    {
        private readonly CambioTodayService cambioTodayService;
        public CotizacionController(CambioTodayService cambioTodayService)
        {
            this.cambioTodayService = cambioTodayService;
        }
        [HttpGet]
        public async Task<ActionResult<MonedaAdapter>> Get()
        {
            Moneda moneda = await cambioTodayService.GetMoneda();
            MonedaAdapter monedaAdapter = new MonedaAdapter(moneda);
            monedaAdapter.Moneda = cambioTodayService.MonedaBehaviour.GetDescripcion();
            //monedaAdapter.Precio = cambioTodayService.MonedaBehaviour.Format(monedaAdapter.Precio);
            return monedaAdapter;
        }
    }
}