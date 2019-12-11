import React, {useState} from 'react';
import './dropdownStyles.scss';
import useFeedBack from "../../customHooks/useFeedback";

const DropDown = (props) => {

    const [status, setStatus] = useState(false);
    const [err, setErr] = useState({});

    const {
        onChangeUserPhone,
        userPhone} = useFeedBack();


    function sendMail(e) {
        setErr({
            'border-color': 'red'
        });

        e.preventDefault();

        if(!userPhone) return;

        const form = {
            phone: userPhone,
            phoneInfo: 'Заказ обратного звонка'
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
                props.callBackOnClose();
            }, 1000);
        })
    }

    return(
        <div className="dropdown-inner">
            <form onSubmit={(e) => sendMail(e)} className="dropdown-border">
                <p className="call-back">Зворотній дзвінок</p>
                <p className="client-number">Ваш номер телефону</p>
                <div className="actions">
                    {status ?
                        <p>Отправка...</p>
                        :
                        <>
                            <input onChange={onChangeUserPhone} style={userPhone ? null : err} className="input" placeholder="0679663223" />
                            <button className="confirm-number"></button>
                        </>
                    }
                </div>
            </form>
        </div>
    )
};

export default DropDown;
