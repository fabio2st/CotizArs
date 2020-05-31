const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nombre}</td>
                <td>{row.precio}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const MonedasTable = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    {this.getTable()}
                </tbody>
            </table>
            <div>Actualizado: {Date()}</div>
        </div >
    )
}