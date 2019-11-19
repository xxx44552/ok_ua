import React from 'react';
import {
  addTeemItem,
  deleteTeemItem
} from "../../../action";
import {connect} from "react-redux";

class TeemItems extends React.Component {

  constructor() {
    super();

    this.state = {
      img: null,
      imgType: null,
      name: null,
      prof: null,
      error: '',
      social: {
        fb: null,
        instagram: null,
        in: null
      }
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
              items.map(({id, img, prof, name, social}) => {
                return <div key={id} className='admin-project'>
                  <img src={img} alt=''/>
                  <p>{name}</p>
                  <p>{prof}</p>
                  <div className="teem-social">
                    <p>FB: {social.fb}</p>
                    <p>Insta: {social.instagram}</p>
                    <p>IN: {social.in}</p>
                  </div>
                  <div className='admin-btn' onClick={()=> this.props.deleteTeemItem(id)}>Удалить</div>
                </div>
              })
            }
          </div>
          <div className='add-block'>
            <p>Добавить участника</p>
            <input onChange={(e)=>this.setState({name: e.target.value})} type='text' placeholder='Name..' /><br/>
            <input onChange={(e)=>this.setState({prof: e.target.value})} type='text' placeholder='Prof..' /><br/>
            <input onChange={(e)=>this.setState({social: {...this.state.social, fb: e.target.value}})} type='text' placeholder='fb..' /><br/>
            <input onChange={(e)=>this.setState({social: {...this.state.social, instagram: e.target.value}})} type='text' placeholder='insta..' /><br/>
            <input onChange={(e)=>this.setState({social: {...this.state.social, in: e.target.value}})} type='text' placeholder='in..' /><br/>
            <input onChange={this.addFoto} type='file'/><br/>
            <div className='admin-btn' onClick={()=> {
              if(this.state.name && this.state.prof && this.state.img && this.state.imgType) {

                this.props.addTeemItem(this.state.name, this.state.prof, this.state.img, this.state.imgType, this.state.social, items.length)
              }
            }}>Добавить</div>
          </div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.teem
});

const mapDispatchToProps = dispatch => {
  return {
    addTeemItem: (name, prof, img, imgType, social, id) => {
      dispatch(addTeemItem(name, prof, img, imgType, social, id))
    },
    deleteTeemItem: (id) => {
      dispatch(deleteTeemItem(id))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeemItems);

