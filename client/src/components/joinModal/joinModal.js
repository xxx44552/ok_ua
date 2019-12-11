import React, {useState} from 'react';
import './joinModalStyles.scss';
import useFeedBack from './../../customHooks/useFeedback';


const JoinModal = (props) => {


    const [status, setStatus] = useState(false);
    const [err, setErr] = useState({});

    const {
        onChangeUserEmail,
        onChangeFirstName,
        onChangeLastName,
        onChangeUserPhone,
        userEmail,
        userPhone,
        lastName,
        firstName} = useFeedBack();


    function sendMail(e) {
        setErr({
            'border-color': 'red'
        });

        e.preventDefault();

        if(!firstName || !userEmail || !userPhone) return;

        const form = {
            firstName,
            lastName,
            email: userEmail,
            phone: userPhone
        };
        fetch('/mail', {
            method: 'post',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setStatus(true);
            setTimeout(()=> {
                props.onClose()
            }, 1000);
        })
    }

    return(

            <div className="join-modal-background">
                <div className="join-modal-wrapper">
                    <form className= "join-modal-container" onSubmit={e=>sendMail(e)}>
                        <p className="join-title">Приєднатися</p>
                        <div className="full-name">
                            <div className="name">
                                <p>Ім'я</p>
                                <input onChange={onChangeFirstName} defaultValue={props.firstName} style={firstName ? null : err} className="name-input" placeholder="Ім'я"/>
                            </div>
                            <div className="surname">
                                <p>Прізвище</p>
                                <input onChange={onChangeLastName} defaultValue={props.lastName} className="surname-input" placeholder="Прізвище"/>
                            </div>
                        </div>
                        <div className="phone-number">
                            <p>Ваш номер телефону</p>
                            <input onChange={onChangeUserPhone} defaultValue={props.phone} style={userPhone ? null : err} className="phone-input" placeholder="Ваш номер телефону"/>
                        </div>
                        <div className="email">
                            <p>E-mail</p>
                            <input onChange={onChangeUserEmail} defaultValue={props.email} style={userEmail ? null : err} className="email-input" placeholder="E-mail"/>
                        </div>
                        {
                            status ?
                                <p>Отправка...</p>
                                :
                                <div className="join-buttons">
                                    <button className="receive-notify">Отримувати оновлення</button>
                                    <button className="receive-notify-mobile" onClick={props.onClose}>Отримувати оновлення</button>
                                    <button className="cancel" onClick={props.onClose}>Відмінити</button>
                                </div>
                        }
                    </form>
                </div>
            </div>


    )
};


export default JoinModal;


