import React from 'react';
import {
  addYoutubeItem,
  deleteYoutubeItem
} from "../../../action";
import {connect} from "react-redux";

class YoutubeItems extends React.Component {

  constructor() {
    super();

    this.state = {
      link: null,
      text: null,
      error: ''
    }

  }



  render() {
    const {items} = this.props;

    return (
        <React.Fragment>
          <div className='admin-youtube-wrap'>
            {
              items.map(({id, text, link}) => {
                return <div key={id} className='admin-youtube'>
                  <p>{text}</p>
                  <iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <div className='admin-btn' onClick={()=> this.props.deleteYoutubeItem(id)}>Удалить</div>
                </div>
              })
            }
          </div>
          <div className='add-block'>
            <textarea onChange={(e)=>this.setState({text: e.target.value})} placeholder='Text for slide..'></textarea>
            <input type='text' onChange={(e)=>this.setState({link: e.target.value})} placeholder='Link..'/><br/>


            <div className='admin-btn' onClick={()=> {
              if(this.state.text && this.state.link) {

                this.props.addYoutubeItem(this.state.text, this.state.link, items.length)
              }
            }}>Добавить</div>
          </div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.data.youtube
});

const mapDispatchToProps = dispatch => {
  return {
    addYoutubeItem: (text, link, id) => {
      dispatch(addYoutubeItem(text, link, id))
    },
    deleteYoutubeItem: (id) => {
      dispatch(deleteYoutubeItem(id))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YoutubeItems);

