using Microsoft.AspNetCore.Mvc;
using CotizArs.Models;
using CotizArsApi.Models;

namespace CotizArsApi.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class DolarController : CotizacionController
    {
        public DolarController(IApiRestServiceClient apiRestServiceClient) : base(apiRestServiceClient)
        {
            apiRestServiceClient.SetMonedaDolar();
        }
    }
}