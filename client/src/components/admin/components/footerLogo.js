import React from 'react';
import {setFooterLogo, setFooterLogoType} from "../../../action";
import {connect} from "react-redux";

class FooterLogo extends React.Component {

  constructor() {
    super();

    this.state = {
      error: ''
    }

  }

  addFoto = (e) => {

    let img = e.target.files;
    if(img[0].type === 'image/jpeg' || img[0].type === 'image/png') {
      this.props.setFooterLogoType(img[0].type.replace(/image\//, ''))

      let reader = new FileReader();
      reader.readAsDataURL(img[0]);

      reader.onload = (e) => {
        this.props.setFooterLogo(e.target.result);
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
        <div className='footer-logo-wrap'>
          <p>Footer logo img</p>
          <img alt='pic' src={this.props.formFooterLogo ? this.props.formFooterLogo : this.props.footerLogo}/>
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
  footerLogo: state.data.footer.logo,
  formFooterLogo: state.form.footer.logo
});

const mapDispatchToProps = dispatch => {
  return {
    setFooterLogo: (img) => {
      dispatch(setFooterLogo(img))
    },
    setFooterLogoType: (imgType) => {
      dispatch(setFooterLogoType(imgType))
    },
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterLogo);
