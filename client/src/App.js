import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./testItem";

class App extends React.Component{

  constructor() {
    super();

    this.state = {
      data: null,
      img: null,
      testTitle: '',
      task: []
    }

  }

  componentDidMount() {
    fetch('/api')
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res,
            img: res.header.logo,
            testTitle: res.header.title,
            task: res.task.data
          })
        })

  }

  render() {
    const { testTitle, data, img, task } = this.state;
    console.log(data, '-----------')
    console.log(task, '-----------')
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <img src={img} alt=''/>
            <div className="wrap">
              {
                task.map(({text, img}) => {
                  return <Test key={img} text={text} img={img} />
                })
              }
            </div>
            <h2>{testTitle}</h2>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
