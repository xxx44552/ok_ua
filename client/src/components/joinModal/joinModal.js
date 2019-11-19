import React from 'react';
import './joinModalStyles.scss';

class JoinModal extends React.Component {
    render(props) {
        return(

            <form onSubmit={(e) => e.preventDefault()}>
                <div className="join-modal-background">
                    <div className="join-modal-wrapper">
                        <div className= "join-modal-container">
                            <p className="join-title">Приєднатися</p>
                            <div className="full-name">
                                <div className="name">
                                    <p>Ім'я</p>
                                    <input className="name-input" name='modal_first_name' placeholder="Ім'я"/>
                                </div>
                                <div className="surname">
                                    <p>Прізвище</p>
                                    <input className="surname-input" name='modal_last_name' placeholder="Прізвище"/>
                                </div>
                            </div>
                            <div className="phone-number">
                                <p>Ваш номер телефону</p>
                                <input className="phone-input" name='modal_phone' placeholder="Ваш номер телефону"/>
                            </div>
                            <div className="email">
                                <p>E-mail</p>
                                <input className="email-input" name='modal_email' placeholder="E-mail"/>
                            </div>
                            <div className="join-buttons">
                                <input type='submit' value='Отримувати оновлення' className="receive-notify" />
                                <button className="cancel" onClick={this.props.onClose}>Відмінити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}



export default JoinModal;