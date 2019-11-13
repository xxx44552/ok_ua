import React from 'react';
import {
  addStatisticItem,
  deleteStatisticItem
} from "../../../action";
import {connect} from "react-redux";

class StatisticItems extends React.Component {

  constructor() {
    super();

    this.state = {
      img: null,
      imgType: null,
      text: null,
      count: null,
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
              items.map(({id, text, count, img}) => {
                return <div key={id} className='admin-statistic'>
                  <img src={img} alt=''/>
                  <p>{text}</p>
                  <p>{count}</p>
                  <div className='admin-btn' onClick={()=> this.props.deleteStatisticItem(id)}>Удалить</div>
                </div>
              })
            }
          </div>
          <input onChange={(e)=>this.setState({text: e.target.value})} placeholder='Text for statistic..'/><br/>
          <input onChange={(e)=>this.setState({count: e.target.value})} type='number' placeholder='Number for statistic..'/>

          <input onChange={this.addFoto} type='file'/><br/>
          <div className='admin-btn' onClick={()=> {
            if(this.state.text && this.state.count && this.state.img && this.state.imgType) {

              this.props.addStatisticItem(this.state.text, this.state.count, this.state.img, this.state.imgType, items.length)
            }
          }}>Добавить блок</div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.statistic
});

const mapDispatchToProps = dispatch => {
  return {
    addStatisticItem: (text, count, img, imgType, id) => {
      dispatch(addStatisticItem(text, count, img, imgType, id))
    },
    deleteStatisticItem: (id) => {
      dispatch(deleteStatisticItem(id))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticItems);

