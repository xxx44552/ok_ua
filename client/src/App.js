import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import fetchDataAction from './fetchData';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './components/login'
import Admin from './components/admin'
import Test from "./test";
import OurProjects from './components/OurProjects';

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
    const { pending, error, tasks, teem, statistic, map } = this.props;

    if(pending) return <p>Загрузка</p>;
    if(error) return <p>{error}</p>;

    return (
      <BrowserRouter>
        <Route exact={true} path='/login' render={()=>
            <Index update={this.update}/>
        }/>
        <Route exact={true} path='/admin' render={()=>
            <Admin />
        }/>
        <Route exact={true} path='/' render={()=>
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
            <OurProjects statistic={this.props.statistic} map={map} team={teem}/>
            </div>
        }/>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  pending: state.pending,
  tasks: state.data.task.data,
  statistic: state.data.statistic,
  teem: state.data.teem,
  map: state.data.map

});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData: fetchDataAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

