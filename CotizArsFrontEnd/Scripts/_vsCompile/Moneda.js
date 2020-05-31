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
exports.Moneda = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var async_thunks_1 = require("./async-thunks");
var Comp = /** @class */ (function (_super) {
    __extends(Comp, _super);
    function Comp(props) {
        var _this = _super.call(this, props) || this;
        _this.monedas = ['Dolar', 'Euro', 'Real'];
        _this.precios = [0, 0, 0];
        return _this;
    }
    Comp.prototype.componentDidMount = function () {
        this.getAllCotizaciones();
    };
    Comp.prototype.componentWillUnmount = function () {
        clearTimeout(this.intervaloDeActualizacion);
    };
    Comp.prototype.getAllCotizaciones = function () {
        for (var x = 0; x < this.monedas.length; x++) {
            this.props.dispatch(async_thunks_1.getOneCotizacion(this.monedas[x].toLowerCase()));
        }
        this.intervaloDeActualizacion = setTimeout(this.getAllCotizaciones.bind(this), 5000);
    };
    Comp.prototype.render = function () {
        this.setCotizaciónActualizada();
        return (this.MonedaTable());
    };
    Comp.prototype.setCotizaciónActualizada = function () {
        var _this = this;
        var index = this.monedas.findIndex(function (value) { return value.toUpperCase() == _this.props.moneda.toUpperCase(); });
        if (index != undefined)
            this.precios[index] = this.props.precio;
    };
    Comp.prototype.MonedaTable = function () {
        return React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null)),
                React.createElement("tbody", null, this.getTable())),
            React.createElement("div", null,
                "Actualizado: ",
                Date()));
    };
    Comp.prototype.getTable = function () {
        var _this = this;
        return (this.monedas.map(function (item, i) { return (React.createElement("tr", null,
            React.createElement("td", null,
                item,
                ": "),
            React.createElement("td", null,
                "$ ",
                _this.precios[i]))); }));
    };
    ;
    return Comp;
}(React.Component));
exports.Moneda = react_redux_1.connect(function (state) { return __assign({}, state); })(Comp);
//# sourceMappingURL=Moneda.js.map