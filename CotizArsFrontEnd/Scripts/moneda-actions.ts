export const FETCH_MONEDA_BEGIN = 'FETCH_MONEDA_BEGIN';
export const FETCH_MONEDA_SUCCESS = 'FETCH_MONEDA_SUCCESS';
export const FETCH_MONEDA_FAILURE = 'FETCH_MONEDA_FAILURE';

export const fetchMonedaBegin = () => ({
    type: FETCH_MONEDA_BEGIN
});

export const fetchMonedaSuccess = MONEDA => ({
    type: FETCH_MONEDA_SUCCESS,
    payload: { MONEDA }
});

export const fetchMonedaFailure = error => ({
    type: FETCH_MONEDA_FAILURE,
    payload: { error }
});

export function fetchMoneda() {
    return dispatch => {
        dispatch(fetchMonedaBegin());
        return fetch("https://localhost:5001/cotizacion/dolar")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchMonedaSuccess(json.products))
                    .then();
                return json.products;
            })
            .catch(error => dispatch(fetchMonedaFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}