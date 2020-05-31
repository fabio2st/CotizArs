import * as React from 'react';
import { connect } from "react-redux";
import { fetchMoneda } from "./moneda-actions";

interface Props_redux  {
    dispatch: <T>(action: any) => T
    error
    loading
    moneda
}
interface IState { }

class Comp2 extends React.Component<Props_redux, IState> {
  componentDidMount() {
    this.props.dispatch(fetchMoneda());
  }

  render() {
    const { error, loading, moneda } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {moneda.map(moneda =>
          <li key={moneda.name}>{moneda.precio}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  moneda: state.moneda.item,
  loading: state.moneda.loading,
  error: state.moneda.error
});

//export var MonedaList: React.ComponentClass<{}> = connect(mapStateToProps)(Comp2);
