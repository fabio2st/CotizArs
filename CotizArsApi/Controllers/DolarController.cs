using Microsoft.AspNetCore.Mvc;
using CotizArs.Models;

namespace CotizArs.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class DolarController : CotizacionController
    {
        public DolarController(CambioTodayService cambioTodayService) : base(cambioTodayService)
        {
            cambioTodayService.SetMonedaDolar();
        }
    }
}