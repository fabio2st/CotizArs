"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCotizacion = void 0;
var redux_actions_1 = require("./redux-actions");
var domain_task_1 = require("domain-task");
function getOneCotizacion(monedaNombre) {
    return function (dispatch, getState) {
        var uri = 'https://localhost:5001/cotizacion/' + monedaNombre;
        var moneda = domain_task_1.fetch(uri, { method: 'get' })
            .then(function (response) { return response.json(); })
            .then(function (data) { dispatch(redux_actions_1.receiveMonedaData(data)); })
            .catch(function () { });
        domain_task_1.addTask(moneda);
    };
}
exports.getOneCotizacion = getOneCotizacion;
//# sourceMappingURL=async-thunks.js.map