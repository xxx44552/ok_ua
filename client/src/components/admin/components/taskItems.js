import React from 'react';
import {
  addTaskItem
} from "../../../action";
import {connect} from "react-redux";

class TaskItems extends React.Component {

  constructor() {
    super();

    this.state = {
      img: null,
      imgType: null,
      text: null,
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
    return (
      <React.Fragment>
        <div>
          {
            items.map(({id, text, img}) => {
              return <div key={text} className='admin-task'>
                <img src={img} alt=''/>
                <p>{text}</p>
              </div>
            })
          }
        </div>
        <input onChange={(e)=>this.setState({text: e.target.value})} type='text' placeholder='Text for task..' /><br/>
        <input onChange={this.addFoto} type='file'/><br/>
        <div className='admin-btn' onClick={()=> {
          if(this.state.text && this.state.img && this.state.imgType) {
            this.props.addTaskItem(this.state.text, this.state.img, this.state.imgType)
          }
        }}>Добавить задание</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.task.data.concat(state.form.task.data)
});

const mapDispatchToProps = dispatch => {
  return {
    addTaskItem: (text, img, imgType) => {
      dispatch(addTaskItem(text, img, imgType))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskItems);

