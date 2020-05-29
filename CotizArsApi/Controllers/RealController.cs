using Microsoft.AspNetCore.Mvc;
using CotizArs.Models;

namespace CotizArs.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class RealController : CotizacionController
    {
        public RealController(CambioTodayService cambioTodayService) : base(cambioTodayService)
        {
            cambioTodayService.SetMonedaReal();
        }    
    }
}