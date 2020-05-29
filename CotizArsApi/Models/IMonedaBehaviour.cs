using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArs.Models
{
    public interface IMonedaBehaviour
    {
        string GetId();
        string GetDescripcion();
        String Format(decimal value);
        //Moneda Serializar(string json);
    }
}
