import React from 'react';
import {connect} from "react-redux";
import './style.sass'
import {
  setTel, setEmail, setSocialFb, setSocialInsta, setSocialYoutube, setHeaderText, setHeaderTitle, setTaskTitle,
  setProjectTitle
} from "../../action";
import HeaderLogo from "./components/headerLogo";
import TaskItems from "./components/taskItems";
import NewsItems from "./components/newsItems";
import YoutubeItems from "./components/youTubeItems";
import ProjectItems from "./components/projectItems";
import StatisticItems from "./components/statisticItems";


class Admin extends React.Component {

  constructor() {
    super();

    this.state = {
      error: '',
      // fb: null,
      // insta: null,
      // youtube: null,
      // email: null,
      // headerTitle: null,
      // headerText: null,
      // headerLogo: null
    }
  }

  changeValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  changeData(e) {
    e.preventDefault();
    const form = {
      fb: this.props.formFb,
      insta: this.props.formInsta,
      youtube: this.props.formYoutube,
      tel: this.props.formTel,
      email: this.props.formEmail,
      headerTitle: this.props.formHeaderTitle,
      headerText: this.props.formHeaderText,
      headerLogo: this.props.formHeaderLogo,
      headerLogoType: this.props.formHeaderLogoType,
      taskTitle: this.props.formTaskTitle,
      taskData: this.props.formTaskData,
      deleteTaskItem: this.props.deleteTaskItem,
      newsData: this.props.formNewsData,
      deleteNewsItem: this.props.deleteNewsItem,
      youtubeData: this.props.formYoutubeData,
      deleteYoutubeItem: this.props.deleteYoutubeItem,
      projectTitle: this.props.formProjectTitle,
      projectData: this.props.formProjectData,
      deleteProjectItem: this.props.deleteProjectItem,
      statisticData: this.props.formStatisticData,
      deleteStatisticItem: this.props.deleteStatisticItem,
    };

    fetch('/api', {
      method: 'put',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(() => console.log('Замена', JSON.stringify(form)))
      .catch(err => console.error(err))
  }

  render() {
    const { fb, insta, youtube, tel, email, headerTitle, headerText, taskTitle, projectTitle } = this.props;
    return (
      <>
        <div className="admin">
          <form onSubmit={this.changeData.bind(this)}>
            <h2>Tel</h2>
            <div>
              <label>Tel - </label>
              <input onChange={(e)=>this.props.setTel(e.target.value)} name='tel' type='text' defaultValue={tel}/>
            </div>
            <h2>Email</h2>
            <div>
              <label>Email - </label>
              <input onChange={(e)=>this.props.setEmail(e.target.value)} name='email' type='text' defaultValue={email}/>
            </div>
            <h2>Social</h2>
            <div>
              <label>FB - </label>
              <input onChange={(e)=>this.props.setSocialFb(e.target.value)} name='fb' type='text' defaultValue={fb}/>
            </div>
            <div>
              <label>Insta - </label>
              <input onChange={(e)=>this.props.setSocialInsta(e.target.value)} name='insta' type='text' defaultValue={insta} />
            </div>
            <div>
              <label>Youtube - </label>
              <input onChange={(e)=>this.props.setSocialYoutube(e.target.value)} name='youtube' type='text' defaultValue={youtube} />
            </div>
            <h2>Header</h2>
            <div>
              <label>Header title - </label>
              <input onChange={(e)=>this.props.setHeaderTitle(e.target.value)} name='headerTitle' type='text' defaultValue={headerTitle} />
            </div>
            <div>
              <label>Header text - </label>
              <textarea onChange={(e)=>this.props.setHeaderText(e.target.value)} name='headerText' defaultValue={headerText}></textarea>
            </div>
            <div>
              <p>Header logo</p>
              <HeaderLogo/>
            </div>
            <h2>Task</h2>
            <div>
              <div>
                <label>Task title - </label>
                <input onChange={(e)=>this.props.setTaskTitle(e.target.value)} name='taskTitle' type='text' defaultValue={taskTitle} />
                <TaskItems/>
              </div>
            </div>
            <h2>News</h2>
            <NewsItems/>
            <h2>YouTube</h2>
            <YoutubeItems/>
            <h2>Project</h2>
              <label>Project title - </label>
              <input onChange={(e)=>this.props.setProjectTitle(e.target.value)} name='projectTitle' type='text' defaultValue={projectTitle} />
              <ProjectItems/>
            <h2>Statistic</h2>
            <StatisticItems/>
            <hr />
            <input className='admin-save' onChange={this.changeValue}  type='submit' value='Сохранить'/>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  fb: state.data.social.fb,
  formFb: state.form.social.fb,
  insta: state.data.social.insta,
  formInsta: state.form.social.insta,
  youtube: state.data.social.youtube,
  formYoutube: state.form.social.youtube,
  tel: state.data.tel,
  formTel: state.form.tel,
  email: state.data.email,
  formEmail: state.form.email,
  headerTitle: state.data.header.title,
  formHeaderTitle: state.form.header.title,
  headerText: state.data.header.text,
  formHeaderText: state.form.header.text,
  headerLogo: state.data.header.logo,
  formHeaderLogo: state.form.header.logo,
  formHeaderLogoType: state.form.header.logo_type,
  taskTitle: state.data.task.title,
  formTaskTitle: state.form.task.title,
  formTaskData: state.form.task.data,
  deleteTaskItem: state.form.task.deleteItem,
  formNewsData: state.form.news.data,
  deleteNewsItem: state.form.news.deleteItem,
  formYoutubeData: state.form.youtube.data,
  deleteYoutubeItem: state.form.youtube.deleteItem,
  projectTitle: state.data.project.title,
  formProjectTitle: state.form.project.title,
  formProjectData: state.form.project.items,
  deleteProjectItem: state.form.project.deleteItem,
  formStatisticData: state.form.statistic.data,
  deleteStatisticItem: state.form.statistic.deleteItem,

});

const mapDispatchToProps = dispatch => {
  return {
    setTel: (tel) => {
      dispatch(setTel(tel))
    },
    setEmail: (email) => {
      dispatch(setEmail(email))
    },
    setSocialFb: (fb) => {
      dispatch(setSocialFb(fb))
    },
    setSocialInsta: (insta) => {
      dispatch(setSocialInsta(insta))
    },
    setSocialYoutube: (youtube) => {
      dispatch(setSocialYoutube(youtube))
    },
    setHeaderTitle: (title) => {
      dispatch(setHeaderTitle(title))
    },
    setHeaderText: (text) => {
      dispatch(setHeaderText(text))
    },
    setTaskTitle: (title) => {
      dispatch(setTaskTitle(title))
    },
    setProjectTitle: (title) => {
      dispatch(setProjectTitle(title))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);

