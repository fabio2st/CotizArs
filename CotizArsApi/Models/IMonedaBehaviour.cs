using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CotizArsApi.Models
{
    public interface IMonedaBehaviour
    {
        string GetId();
        string GetDescripcion();
        string Format(decimal value);
        //Moneda Serializar(string json);
    }
}
