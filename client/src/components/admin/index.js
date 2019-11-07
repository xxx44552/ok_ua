import React from 'react';
import {connect} from "react-redux";
import './style.sass'
import {setTel, setEmail} from "../../action";


class Admin extends React.Component {

  constructor() {
    super();

    this.state = {
      error: '',
      fb: null,
      insta: null,
      youtube: null,
      email: null,
      headerTitle: null,
      headerText: null,
      headerLogo: null
    }
  }

  changeValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  addFoto = (e, state) => {
    let img = e.target.files;
    if(img[0].type === 'image/jpeg' || img[0].type === 'image/png') {
      this.setState({
        [state]: img[0].type
      })
      let reader = new FileReader();
      reader.readAsDataURL(img[0]);

      reader.onload = (e) => {
        this.setState({
          error: '',
          [state]: e.target.result
        }, console.log(e.target.result))
      }
    }else {
      this.setState({
        error: 'Неверное расширение фото (jpeg, png)'
      })
    }
  }

  changeData(e) {
    e.preventDefault();
    const form = {
      fb: this.state.fb,
      insta: this.state.insta,
      youtube: this.state.youtube,
      tel: this.props.formTel,
      email: this.props.formEmail,
      headerTitle: this.state.headerTitle,
      headerText: this.state.headerText,
      headerLogo: this.state.headerLogo
    }
    console.log(this.state.fb)
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
    const { fb, insta, youtube, tel, email, headerTitle, headerText, headerLogo } = this.props;
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
              <input onChange={this.changeValue} name='fb' type='text' defaultValue={fb}/>
            </div>
            <div>
              <label>Insta - </label>
              <input onChange={this.changeValue} name='insta' type='text' defaultValue={insta} />
            </div>
            <div>
              <label>Youtube - </label>
              <input onChange={this.changeValue} name='youtube' type='text' defaultValue={youtube} />
            </div>
            <h2>Header</h2>
            <div>
              <label>Header title - </label>
              <input onChange={this.changeValue} name='headerTitle' type='text' defaultValue={headerTitle} />
            </div>
            <div>
              <label>Header text - </label>
              <textarea onChange={this.changeValue} name='headerText' defaultValue={headerText}></textarea>
            </div>
            <div>
              <p>Header logo</p>
              <img alt='pic' src={headerLogo}/>
              <input onChange={this.addFoto} type='file'/>
            </div>
            <hr />
            <input onChange={this.changeValue}  type='submit' value='Сохранить'/>
          </form>
          <p>{this.props.formEmail}</p>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  fb: state.data.social.fb,
  insta: state.data.social.insta,
  youtube: state.data.social.youtube,
  tel: state.data.tel,
  formTel: state.form.tel,
  email: state.data.email,
  formEmail: state.form.email,
  headerTitle: state.data.header.title,
  headerText: state.data.header.text,
  headerLogo: state.data.header.logo
});

const mapDispatchToProps = dispatch => {
  return {
    setTel: (tel) => {
      dispatch(setTel(tel))
    },
    setEmail: (email) => {
      dispatch(setEmail(email))
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);

