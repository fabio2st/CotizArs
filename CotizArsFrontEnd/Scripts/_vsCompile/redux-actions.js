"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiveMonedaData = exports.RECEIVE_MONEDA = void 0;
exports.RECEIVE_MONEDA = 'RECEIVE_MONEDA';
function receiveMonedaData(data) {
    return {
        type: exports.RECEIVE_MONEDA,
        data: data
    };
}
exports.receiveMonedaData = receiveMonedaData;
//# sourceMappingURL=redux-actions.js.map