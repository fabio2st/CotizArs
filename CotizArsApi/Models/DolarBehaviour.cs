using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public class DolarBehaviour : IMonedaBehaviour
    {
        public string GetId()
        {
            return "USD";
        }
         public string GetDescripcion()
        {
            return "Dolar";
        }       
        public string Format(decimal value)
        {
            return String.Format("{0:C,en-US}", value);
        }

    }
}
