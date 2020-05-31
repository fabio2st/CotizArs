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
var moneda_actions_1 = require("./moneda-actions");
var initialState = {
    items: [],
    loading: false,
    error: null
};
function monedaReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case moneda_actions_1.FETCH_MONEDA_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return __assign(__assign({}, state), { loading: true, error: null });
        case moneda_actions_1.FETCH_MONEDA_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return __assign(__assign({}, state), { loading: false, items: action.payload.products });
        case moneda_actions_1.FETCH_MONEDA_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return __assign(__assign({}, state), { loading: false, error: action.payload.error, items: [] });
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
exports.default = monedaReducer;
//# sourceMappingURL=moneda-reducers.js.map