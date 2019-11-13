import React from 'react';
import {
  addNewsItem,
  deleteNewsItem
} from "../../../action";
import {connect} from "react-redux";

class NewsItems extends React.Component {

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
      });

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
  };

  render() {
    const {items} = this.props;
    console.log(items, '-------------')
    return (
        <React.Fragment>
          <div>
            {
              items.map(({id, text, img}) => {
                return <div key={id} className='admin-news'>
                  <img src={img} alt=''/>
                  <p>{text}</p>
                  <div className='admin-btn' onClick={()=> this.props.deleteNewsItem(id)}>Удалить</div>
                </div>
              })
            }
          </div>
          <textarea onChange={(e)=>this.setState({text: e.target.value})} placeholder='Text for news..'>

          </textarea>

          <input onChange={this.addFoto} type='file'/><br/>
          <div className='admin-btn' onClick={()=> {
            if(this.state.text && this.state.img && this.state.imgType) {

              this.props.addNewsItem(this.state.text, this.state.img, this.state.imgType, items.length)
            }
          }}>Добавить новость</div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.news
});

const mapDispatchToProps = dispatch => {
  return {
    addNewsItem: (text, img, imgType, id) => {
      dispatch(addNewsItem(text, img, imgType, id))
    },
    deleteNewsItem: (id) => {
      dispatch(deleteNewsItem(id))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsItems);

