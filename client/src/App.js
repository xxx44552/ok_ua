import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import fetchDataAction from './fetchData';
import Test from "./test";

class App extends React.Component{

  constructor() {
    super();

    this.state = {

    }
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    
  }


  render() {
    const { pending, error, tasks } = this.props;

    if(pending) return <p>Загрузка</p>;
    if(error) return <p>{error}</p>;

    return (
        <div className="wrapper">

          <Test/>
          {
            tasks.map(({id, text, img}) => {
              return <div key={id}>
                <img alt='pic' src={img}/>
                <p>{text}</p>
              </div>
            })
          }
        </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  pending: state.pending,
  tasks: state.data.task.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData: fetchDataAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

