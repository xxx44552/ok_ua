import React from 'react';
import {
  addProjectItem,
  deleteProjectItem
} from "../../../action";
import {connect} from "react-redux";

class ProjectItems extends React.Component {

  constructor() {
    super();

    this.state = {
      img: null,
      imgType: null,
      text: null,
      title: null,
      error: ''
    }
  }


  addFoto = (e) => {
    console.log(1)
    let img = e.target.files;
    if(img[0].type === 'image/jpeg' || img[0].type === 'image/png') {

      this.setState({
        imgType: img[0].type.replace(/image\//, '')
      })

      let reader = new FileReader();
      reader.readAsDataURL(img[0]);

      reader.onload = (e) => {

        this.setState({
          img: e.target.result,
          error: ''
        }, console.log(e.target.result))
      }
    }else {
      this.setState({
        error: 'Неверное расширение фото (jpeg, png)'
      }, console.log(this.state.error))
    }
  }

  render() {
    const {items} = this.props;
    console.log(items)
    return (
        <React.Fragment>
          <div className='admin-project-wrap'>
            {
              items.map(({id, title, text, img}) => {
                return <div key={text} className='admin-project'>
                  <img src={img} alt=''/>
                  <p>{title}</p>
                  <p>{text}</p>
                  <div className='admin-btn' onClick={()=> this.props.deleteProjectItem(id)}>Удалить</div>
                </div>
              })
            }
          </div>
          <div className='add-block'>
            <p>Добавить проект</p>
            <input onChange={(e)=>this.setState({title: e.target.value})} type='text' placeholder='Title for project..' /><br/>
            <textarea onChange={(e)=>this.setState({text: e.target.value})} placeholder='Text for project..'></textarea>
            <input onChange={this.addFoto} type='file'/><br/>
            <div className='admin-btn' onClick={()=> {
              if(this.state.title && this.state.text && this.state.img && this.state.imgType) {

                this.props.addProjectItem(this.state.title, this.state.text, this.state.img, this.state.imgType, items.length)
              }
            }}>Добавить</div>
          </div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.project.items
});

const mapDispatchToProps = dispatch => {
  return {
    addProjectItem: (title, text, img, imgType, id) => {
      dispatch(addProjectItem(title, text, img, imgType, id))
    },
    deleteProjectItem: (id) => {
      dispatch(deleteProjectItem(id))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectItems);

