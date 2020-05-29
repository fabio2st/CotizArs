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
var redux_actions_1 = require("./redux-actions");
var monedaInitialState = {
    moneda: '',
    precio: ''
};
function moneda_reducers(state, action) {
    if (state === void 0) { state = monedaInitialState; }
    switch (action.type) {
        case redux_actions_1.RECEIVE_MONEDA:
            return __assign(__assign({}, state), action.data);
        default:
            return state;
    }
}
exports.moneda_reducers = moneda_reducers;
//# sourceMappingURL=redux-reducers.js.map