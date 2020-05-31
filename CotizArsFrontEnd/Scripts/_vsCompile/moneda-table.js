var _this = this;
var TableBody = function (props) {
    var rows = props.characterData.map(function (row, index) {
        return (React.createElement("tr", { key: index },
            React.createElement("td", null, row.nombre),
            React.createElement("td", null, row.precio)));
    });
    return React.createElement("tbody", null, rows);
};
var MonedasTable = function (props) {
    return (React.createElement("div", null,
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null)),
            React.createElement("tbody", null, _this.getTable())),
        React.createElement("div", null,
            "Actualizado: ",
            Date())));
};
//# sourceMappingURL=moneda-table.js.map