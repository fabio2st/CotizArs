using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public class RealBehaviour : IMonedaBehaviour
    {
         public string GetId()
        {
            return "BRL";
        }
        public string GetDescripcion()
        {
            return "Real";
        }
        public string Format(decimal value)
        {
            return String.Format("{0:C,pt-BR}", value);
        }

    }
}
