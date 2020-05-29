using Microsoft.AspNetCore.Mvc;
using CotizArs.Models;

namespace CotizArs.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class EuroController : CotizacionController
    {
        public EuroController(CambioTodayService cambioTodayService) : base(cambioTodayService)
        {
            cambioTodayService.SetMonedaEuro();
        }
    }
}