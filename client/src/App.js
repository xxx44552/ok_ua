import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import fetchDataAction from './fetchData';
import { BrowserRouter, Route } from "react-router-dom";
import Index from './components/login'
import Admin from './components/admin'
import Test from "./test";
import Header from './components/header/Header'
import './commonStyles/commonStyles.scss'
import MainInfo from './components/mainInfo/MainInfo'
import Tasks from './components/tasks/Tasks';
import JoinModal from './components/joinModal/joinModal'


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

      <BrowserRouter>
        <Route exact={true} path='/login' render={()=>
            <Index update={this.update}/>
        }/>
        <Route exact={true} path='/admin' render={()=>
            <Admin />
        }/>
        <Route exact={true} path='/' render={()=>
            <div className="container-main">
              <div className="background-for-modal">
                <Header/>
                <MainInfo/>
                <JoinModal/>
                <Tasks/>
              </div>

              
              {/* <Test/>
              {
                tasks.map(({id, text, img}) => {
                  return <div key={id}>
                    <img alt='pic' src={img}/>
                    <p>{text}</p>
                  </div>
                })
              } */}
            </div>
        }/>
      </BrowserRouter>
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

