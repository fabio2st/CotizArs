using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public abstract class Moneda : IMoneda
    {
        public decimal Valor { get; set; }
        public DateTime UltimaActualizacion { get; set; }
        public string GetCotizacion()
        {
            return Format( "Ars {0:D2} ({1:D})", Valor, UltimaActualizacion) ;
        }
    }
}
