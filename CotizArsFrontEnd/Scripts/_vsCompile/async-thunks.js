"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneCotizacion = void 0;
var redux_actions_1 = require("./redux-actions");
var domain_task_1 = require("domain-task");
function getOneCotizacion(monedaNombre) {
    return function (dispatch, getState) {
        dispatch(redux_actions_1.fetchMonedaBegin());
        var uri = 'https://localhost:5001/cotizacion/' + monedaNombre;
        var moneda = domain_task_1.fetch(uri, { method: 'get' })
            .then(handleErrors)
            .then(function (response) { return response.json(); })
            .then(function (data) { dispatch(redux_actions_1.fetchMonedaSuccess(data)); })
            //.catch(() => { }); 
            .catch(function (error) { return dispatch(redux_actions_1.fetchMonedaFailure(error)); });
    };
}
exports.getOneCotizacion = getOneCotizacion;
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
//# sourceMappingURL=async-thunks.js.map