using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    interface IMoneda
    {
        decimal Valor { get; set; }
        DateTime UltimaActualizacion { get; set; }
        string GetCotizacion();
    }
}
