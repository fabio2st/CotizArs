using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public class Moneda
    {
        enum monedas{
            Dolar,
            Euro,
            Real
        }
        [JsonPropertyName("value")]
        public decimal Valor { get; set; }
        [JsonPropertyName("updated")]
        public DateTime UltimaActualizacion { get; set; }
    }
}