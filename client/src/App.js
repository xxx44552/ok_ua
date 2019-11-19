import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import fetchDataAction from './fetchData';
import { BrowserRouter, Route } from "react-router-dom";
import Admin from './components/admin'
<<<<<<< HEAD
import Test from "./test";
<<<<<<< HEAD
import SliderSection from "./components/SliderSection/SliderSection"
import OurProjects from './components/OurProjects';
=======
import Header from './components/header/Header'
import './commonStyles/commonStyles.scss'
import MainInfo from './components/mainInfo/MainInfo'
import Tasks from './components/tasks/Tasks';
import JoinModal from './components/joinModal/joinModal'
import WriteToUsModal from './components/writeToUsModal/writeToUsModal'
import CharContribModal from './components/charContribModal/charContribModal'
>>>>>>> Header
=======
import Header from "./components/header/Header.js";
import MainInfo from "./components/mainInfo/MainInfo";
import SliderSection from "./components/SliderSection/SliderSection"
import OurProjects from './components/OurProjects';
import Login from './components/login/';
import News from './components/News/News';
import Youtube from './components/Youtube/Youtube';
import Spinner from './components/spinner'
>>>>>>> c6f3d8d68e2433071b97b6188d4c3a370c8db7df

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      sliders: []
    }
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();

  }


  render() {
    const { pending, error, tasks, teem, statistic, map } = this.props;

    if (pending) return <Spinner/>
    if (error) return <p>{error}</p>;

    return (

      <BrowserRouter>
        <Route exact={true} path='/login' render={() =>
          <Login />
        } />
        <Route exact={true} path='/admin' render={() =>
          <Admin />
        } />
        <Route exact={true} path='/' render={() =>
          <>
            <div className="container-main">
              <div className="background-for-modal" >
                <Header/>
                <MainInfo/>
              </div>
            </div>
            <News news={this.props.news} />
            <Youtube />
            <SliderSection sliderState={this.state.sliders}/>
            <div className="wrapper">
<<<<<<< HEAD
            <OurProjects statistic={this.props.statistic} map={map} team={teem}/>
        <Route exact={true} path='/login' render={()=>
            <Index update={this.update}/>
        }/>
        <Route exact={true} path='/admin' render={()=>
            <Admin />
        }/>
        <Route exact={true} path='/' render={()=>
            <div className="container-main">
              <div className="background-for-modal" >
                <Header/>
                <MainInfo/>
                {/* <WriteToUsModal/> */}
                {/* <CharContribModal/> */}
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
=======
              <OurProjects statistic={this.props.statistic} map={map} team={teem}/>
            </div>
          </>
        } />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  pending: state.pending,
  tasks: state.data.task.data,
  project: state.data.project,
  statistic: state.data.statistic,
  teem: state.data.teem,
  map: state.data.map,
  news: state.data.news
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData: fetchDataAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

