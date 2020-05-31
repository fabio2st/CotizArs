using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public class MonedaAdapter
    {
        private Moneda imoneda;
        public MonedaAdapter(Moneda imoneda)
        {
            this.imoneda = imoneda;
        }
        public string Moneda { get ; set; }
        public string Precio { get => String.Format("{0:F2}", imoneda.Valor); }
    }
}
