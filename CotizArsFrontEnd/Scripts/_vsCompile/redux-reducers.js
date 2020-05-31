"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneda_reducers = void 0;
var redux_actions_1 = require("./redux-actions");
var monedaInitialState = {
    nombreMoneda: '',
    precio: 0
};
function moneda_reducers(state, action) {
    if (state === void 0) { state = monedaInitialState; }
    switch (action.type) {
        case redux_actions_1.FETCH_MONEDA_BEGIN:
            return __assign(__assign({}, state), { loading: true, error: null });
        case redux_actions_1.FETCH_MONEDA_SUCCESS:
            return __assign(__assign(__assign({}, state), action.data), { loading: false });
        case redux_actions_1.FETCH_MONEDA_FAILURE:
            return __assign(__assign({}, state), { loading: false, error: action.payload.error, items: [] });
        default:
            return state;
    }
}
exports.moneda_reducers = moneda_reducers;
//# sourceMappingURL=redux-reducers.js.map