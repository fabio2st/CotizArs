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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moneda_actions_1 = require("./moneda-actions");
var Comp2 = /** @class */ (function (_super) {
    __extends(Comp2, _super);
    function Comp2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comp2.prototype.componentDidMount = function () {
        this.props.dispatch(moneda_actions_1.fetchMoneda());
    };
    Comp2.prototype.render = function () {
        var _a = this.props, error = _a.error, loading = _a.loading, moneda = _a.moneda;
        if (error) {
            return React.createElement("div", null,
                "Error! ",
                error.message);
        }
        if (loading) {
            return React.createElement("div", null, "Loading...");
        }
        return (React.createElement("ul", null, moneda.map(function (moneda) {
            return React.createElement("li", { key: moneda.name }, moneda.precio);
        })));
    };
    return Comp2;
}(React.Component));
var mapStateToProps = function (state) { return ({
    moneda: state.moneda.item,
    loading: state.moneda.loading,
    error: state.moneda.error
}); };
//export var MonedaList: React.ComponentClass<{}> = connect(mapStateToProps)(Comp2);
//# sourceMappingURL=monedaList.js.map