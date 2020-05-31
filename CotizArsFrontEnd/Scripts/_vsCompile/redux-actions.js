"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMonedaSuccess = exports.fetchMonedaFailure = exports.fetchMonedaBegin = exports.FETCH_MONEDA_FAILURE = exports.FETCH_MONEDA_SUCCESS = exports.FETCH_MONEDA_BEGIN = void 0;
//export const RECEIVE_MONEDA = 'RECEIVE_MONEDA';
exports.FETCH_MONEDA_BEGIN = 'FETCH_MONEDA_BEGIN';
exports.FETCH_MONEDA_SUCCESS = 'FETCH_MONEDA_SUCCESS';
exports.FETCH_MONEDA_FAILURE = 'FETCH_MONEDA_FAILURE';
exports.fetchMonedaBegin = function () { return ({
    type: exports.FETCH_MONEDA_BEGIN
}); };
exports.fetchMonedaFailure = function (error) { return ({
    type: exports.FETCH_MONEDA_FAILURE,
    payload: { error: error }
}); };
function fetchMonedaSuccess(data) {
    return {
        type: exports.FETCH_MONEDA_SUCCESS,
        data: data
    };
}
exports.fetchMonedaSuccess = fetchMonedaSuccess;
//# sourceMappingURL=redux-actions.js.map