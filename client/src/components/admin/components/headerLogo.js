import React from 'react';
import {setHeaderLogo, setHeaderLogoType} from "../../../action";
import {connect} from "react-redux";

class HeaderLogo extends React.Component {

  constructor() {
    super();

    this.state = {
      error: ''
    }

  }

  addFoto = (e) => {

    let img = e.target.files;
    if(img[0].type === 'image/jpeg' || img[0].type === 'image/png') {
      this.props.setHeaderLogoType(img[0].type.replace(/image\//, ''))

      let reader = new FileReader();
      reader.readAsDataURL(img[0]);

      reader.onload = (e) => {
        this.props.setHeaderLogo(e.target.result);
        this.setState({
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
    return (
        <div>
          <img alt='pic' src={this.props.formHeaderLogo ? this.props.formHeaderLogo : this.props.headerLogo}/>
          {
            this.state.error ?
                <p>{this.state.error}</p> : null
          }
          <input onChange={this.addFoto} type='file'/>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  headerLogo: state.data.header.logo,
  formHeaderLogo: state.form.header.logo
});

const mapDispatchToProps = dispatch => {
  return {
    setHeaderLogo: (img) => {
      dispatch(setHeaderLogo(img))
    },
    setHeaderLogoType: (imgType) => {
      dispatch(setHeaderLogoType(imgType))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderLogo);
