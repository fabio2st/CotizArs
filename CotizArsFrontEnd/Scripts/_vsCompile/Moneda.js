"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var React = require("react");
var react_redux_1 = require("react-redux");
var async_thunks_1 = require("./async-thunks");
var Comp = /** @class */ (function (_super) {
    __extends(Comp, _super);
    function Comp(props) {
        return _super.call(this, props) || this;
    }
    Comp.prototype.componentDidMount = function () {
        this.getData();
    };
    Comp.prototype.componentWillUnmount = function () {
        clearTimeout(this.interval);
    };
    Comp.prototype.getData = function () {
        this.props.dispatch(async_thunks_1.retrieveMonedaData());
        this.interval = setTimeout(this.getData.bind(this), 5000);
    };
    Comp.prototype.render = function () {
        var _a = this.props, moneda = _a.moneda, precio = _a.precio;
        var content = null;
        if (moneda) {
            content =
                [
                    React.createElement("div", null, "Datos de CotizAr:"),
                    React.createElement("div", null,
                        "Moneda: ",
                        moneda),
                    React.createElement("div", null,
                        "Precio: ",
                        precio),
                ];
        }
        else
            content = [React.createElement("div", null, "Esperando datos de CotizAr")];
        //var update = [<div>Actualizado: {this.state.}</div>];
        return React.createElement("div", null, content);
    };
    return Comp;
}(React.Component));
exports.Moneda = react_redux_1.connect(function (state) { return __assign({}, state); })(Comp);
//# sourceMappingURL=Moneda.js.map