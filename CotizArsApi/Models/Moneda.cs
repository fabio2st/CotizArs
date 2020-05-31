using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public class Moneda
    {
        [JsonPropertyName("value")]
        public decimal Valor { get; set; }
        [JsonPropertyName("updated")]
        public DateTime UltimaActualizacion { get; set; }
    }
}