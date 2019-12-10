import React, {useState} from 'react';
import './writeToUsModalStyles.scss'
import useFeedBack from "../../customHooks/useFeedback";

const WriteToUsModal = (props) => {
    const [status, setStatus] = useState(false);

    const {
        onChangeUserEmail,
        onChangeFirstName,
        onChangeLastName,
        onChangeUserPhone,
        onChangeUserMess,
        userMess,
        userEmail,
        userPhone,
        lastName,
        firstName} = useFeedBack();


    function sendMail(e) {
        e.preventDefault();
        const form = {
            firstName,
            lastName,
            email: userEmail,
            phone: userPhone,
            mess: userMess
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
                props.writeToUsModalonClose()
            }, 1000);
        })
    }
    return (
        <div className="writeToUs-modal-background">
            <div className="writeToUs-modal-wrapper">
                <form onSubmit={(e)=>sendMail(e)} className="writeToUs-modal-container">
                    <p className="writeToUs-title">Зворотній зв'язок</p>
                    <div className="full-name">
                        <div className="name">
                            <p>Ім'я</p>
                            <input onChange={onChangeFirstName} className="name-input" placeholder="Ім'я" />
                        </div>
                        <div className="surname">
                            <p>Прізвище</p>
                            <input onChange={onChangeLastName} className="surname-input" placeholder="Прізвище" />
                        </div>
                    </div>
                    <div className="phone-number">
                        <p>Ваш номер телефону</p>
                        <input onChange={onChangeUserPhone} className="phone-input" placeholder="Ваш номер телефону" />
                    </div>
                    <div className="email">
                        <p>E-mail</p>
                        <input onChange={onChangeUserEmail} className="email-input" placeholder="E-mail" />
                    </div>
                    <div className="massage-text">
                        <textarea onChange={onChangeUserMess} className="massage-text-area" placeholder="Текст повідомлення" />
                    </div>
                    {
                        status ?
                            <div className="send-buttons">
                                <p>Отправка...</p>
                            </div>

                            :
                            <div className="send-buttons">
                                <button className="send-massage">Відправити повідомлення</button>
                                <button className="cancel" onClick={props.writeToUsModalonClose}>Відмінити</button>
                            </div>
                    }
                </form>
                <form onSubmit={(e)=>sendMail(e)} className="writeToUs-modal-container-mobile">
                    <p className="writeToUs-title-mobile">Зворотній зв'язок</p>
                    <div className="full-name-mobile">
                        <div className="name-mobile">
                            <p className="contact-item-title">Ім'я</p>
                            <input onChange={onChangeFirstName} className="name-input-mobile" placeholder="Ім'я" />
                        </div>
                        <div className="surname-mobile">
                            <p className="contact-item-title">Прізвище</p>
                            <input onChange={onChangeLastName} className="surname-input-mobile" placeholder="Прізвище" />
                        </div>
                    </div>
                    <div className="phone-number-mobile">
                        <p className="contact-item-title">Ваш номер телефону</p>
                        <input onChange={onChangeUserPhone} className="phone-input-mobile" placeholder="Ваш номер телефону" />
                    </div>
                    <div className="email-mobile">
                        <p className="contact-item-title">E-mail</p>
                        <input onChange={onChangeUserEmail} className="email-input-mobile" placeholder="E-mail" />
                    </div>
                    <div className="massage-text-mobile">
                        <textarea onChange={onChangeUserMess} className="massage-text-area-mobile" placeholder="Текст повідомлення" />
                    </div>
                    {
                        status ?

                            <div className="send-buttons-mobile">
                                <p>Отправка...</p>
                            </div>
                            :
                            <div className="send-buttons-mobile">
                                <button className="send-massage-mobile" onClick={props.writeToUsModalonClose}>Відправити повідомлення</button>
                            </div>
                    }

                </form>
            </div>
        </div>
    )
}

export default WriteToUsModal;
