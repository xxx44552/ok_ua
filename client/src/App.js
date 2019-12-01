import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import fetchDataAction from './fetchData';
import { BrowserRouter, Route } from "react-router-dom";
import Admin from './components/admin'
import Header from "./components/header/Header.js";
import MainInfo from "./components/mainInfo/MainInfo";
import Tasks from "./components/tasks/Tasks";
import SliderSection from "./components/SliderSection/SliderSection"
import OurProjects from './components/OurProjects';
import Login from './components/login/';
import News from './components/News/News';
import Youtube from './components/Youtube/Youtube';
import Footer from './components/Footer/Footer';
import Spinner from './components/spinner'


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
                <Tasks/>
              </div>
            </div>
            <News news={this.props.news} />
            <Youtube youtube={this.props.youtube} />
            <SliderSection sliderState={this.state.sliders}/>
            <div className="wrapper">
              <OurProjects statistic={this.props.statistic} map={map} team={teem}/>
            </div>
            <Footer />
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
  news: state.data.news,
  youtube: state.data.youtube
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData: fetchDataAction
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

