"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("./redux-actions");
var domain_task_1 = require("domain-task");
function retrieveMonedaData() {
    return function (dispatch, getState) {
        var moneda = domain_task_1.fetch('https://localhost:5001/cotizacion/dolar', { method: 'get' })
            .then(function (response) { return response.json(); })
            .then(function (data) { dispatch(redux_actions_1.receiveMonedaData(data)); })
            .catch(function () { });
        domain_task_1.addTask(moneda);
    };
}
exports.retrieveMonedaData = retrieveMonedaData;
//# sourceMappingURL=async-thunks.js.map