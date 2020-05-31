using Microsoft.AspNetCore.Mvc;
using CotizArs.Models;
using CotizArsApi.Models;

namespace CotizArsApi.Controllers
{
    [ApiController]
    [Route("cotizacion/[Controller]")]
    public class DolarController : CotizacionController
    {
        public DolarController(CambioTodayApiRestClient apiRestServiceClient) : base(apiRestServiceClient)
        {
            apiRestServiceClient.SetMonedaDolar();
        }
    }
}