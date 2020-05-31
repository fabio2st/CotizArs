using Microsoft.AspNetCore.Mvc;
using CotizArsApi.Models;

namespace CotizArsApi.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class EuroController : CotizacionController
    {
        public EuroController(IApiRestServiceClient apiRestServiceClient) : base(apiRestServiceClient)
        {
            apiRestServiceClient.SetMonedaEuro();
        }
    }
}