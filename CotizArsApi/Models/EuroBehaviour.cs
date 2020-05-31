using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public class EuroBehaviour : IMonedaBehaviour
    {
         public string GetId()
        {
            return "EUR";
        }       public string Format(decimal value)
        {
            return String.Format("${0:C,es-ES}", value);
        }
        public string GetDescripcion()
        {
            return "Euro";
        }
    }
}
