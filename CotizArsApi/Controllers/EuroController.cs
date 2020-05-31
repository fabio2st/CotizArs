using Microsoft.AspNetCore.Mvc;
using CotizArsApi.Models;

namespace CotizArsApi.Controllers
{
    [ApiController]
    [Route("cotizacion/[controller]")]
    public class EuroController : CotizacionController
    {
        public EuroController(CambioTodayApiRestClient apiRestServiceClient) : base(apiRestServiceClient)
        {
            apiRestServiceClient.SetMonedaEuro();
        }
    }
}