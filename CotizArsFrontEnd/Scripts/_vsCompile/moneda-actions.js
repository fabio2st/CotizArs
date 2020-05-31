"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMoneda = exports.fetchMonedaFailure = exports.fetchMonedaSuccess = exports.fetchMonedaBegin = exports.FETCH_MONEDA_FAILURE = exports.FETCH_MONEDA_SUCCESS = exports.FETCH_MONEDA_BEGIN = void 0;
exports.FETCH_MONEDA_BEGIN = 'FETCH_MONEDA_BEGIN';
exports.FETCH_MONEDA_SUCCESS = 'FETCH_MONEDA_SUCCESS';
exports.FETCH_MONEDA_FAILURE = 'FETCH_MONEDA_FAILURE';
exports.fetchMonedaBegin = function () { return ({
    type: exports.FETCH_MONEDA_BEGIN
}); };
exports.fetchMonedaSuccess = function (MONEDA) { return ({
    type: exports.FETCH_MONEDA_SUCCESS,
    payload: { MONEDA: MONEDA }
}); };
exports.fetchMonedaFailure = function (error) { return ({
    type: exports.FETCH_MONEDA_FAILURE,
    payload: { error: error }
}); };
function fetchMoneda() {
    return function (dispatch) {
        dispatch(exports.fetchMonedaBegin());
        return fetch("https://localhost:5001/cotizacion/dolar")
            .then(handleErrors)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            dispatch(exports.fetchMonedaSuccess(json.products))
                .then();
            return json.products;
        })
            .catch(function (error) { return dispatch(exports.fetchMonedaFailure(error)); });
    };
}
exports.fetchMoneda = fetchMoneda;
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
//# sourceMappingURL=moneda-actions.js.map