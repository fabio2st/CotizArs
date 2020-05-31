using Microsoft.AspNetCore.Mvc;
using CotizArsApi.Models;

namespace CotizArsApi.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class RealController : CotizacionController
    {
        public RealController(CambioTodayApiRestClient apiRestClient) : base(apiRestClient)
        {
            apiRestClient.SetMonedaReal();
        }    
    }
}