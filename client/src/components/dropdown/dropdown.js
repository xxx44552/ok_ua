import React from 'react';
import './dropdownStyles.scss';

const DropDown = (props) => {
    return(
        <div className="dropdown-inner">
            <div className="dropdown-border">
                <p className="call-back">Зворотній дзвінок</p>
                <p className="client-number">Ваш номер телефону</p>
                <div className="actions">
                    <input className="input" placeholder="0679663223" />
                    <button className="confirm-number" onClick={props.callBackOnClose}></button>
                </div>
            </div>
        </div>
    )
};

export default DropDown;