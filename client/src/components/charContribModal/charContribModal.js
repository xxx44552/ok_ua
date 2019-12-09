import React from 'react';
import './charContribModalStyle.scss';

const CharContribModal = (props) => {
    return (
        <div className="charity-modal-background">
            <div className="charity-modal-wrapper">
                <div className="inner-background1">
                    <img className="char-background" src="static/char_contrib.svg" alt="char-img"/>
                </div>
                <div className="charity-modal-container">
                    <div className="charity-title">
                        <p>Банківські реквізити для благодійного внеску</p>
                    </div>
                    <div className="charity-title-mobile">
                        <p>Банківські реквізити для благодійного внеску</p>
                    </div>
                    <div className="payment-info-wrapper">
                        <div className="recipient">
                            <span>Отримувач коштів:</span>
                            <span>Укрпатент</span>
                        </div>
                        <div className="recipient-code">
                            <span>Код отримувача:</span>
                            <span>31032378</span>
                        </div>
                        <div className="id-code">
                            <span>Індивідуальний податковий номер:</span>
                            <span>310323726552</span>
                        </div>
                        <div className="bank">
                            <span>Банк отримувача:</span>
                            <span>АБ «Укргазбанк» м. Київ</span>
                        </div>
                        <div className="bank-code">
                            <span>Код банку:</span>
                            <span>320478</span>
                        </div>
                        <div className="beneficiary-account">
                            <span>Рахунок отримувача (діє включно до 12.01.2020):</span>
                            <span>26008268812</span>
                        </div>
                        <div className="number-beneficiary-account">
                            <span>Рахунок отримувача (IBAN):</span>
                            <span>UA093204780000000026008268812</span>
                        </div>
                        <button className="gratitude" onClick={props.charContribOnClose}>
                            Дякуємо за допомогу!
                        </button>
                    </div>

                    <div className="payment-info-mobile-wrapper">
                        <div className="recipient-mobile">
                            <span className="list-title">Отримувач коштів:</span>
                            <span>Укрпатент</span>
                        </div>
                        <div className="recipient-code-mobile">
                            <span className="list-title">Код отримувача:</span>
                            <span>31032378</span>
                        </div>
                        <div className="id-code-mobile">
                            <span className="list-title">Індивідуальний податковий номер:</span>
                            <span>310323726552</span>
                        </div>
                        <div className="bank-mobile">
                            <span className="list-title">Банк отримувача:</span>
                            <span>АБ «Укргазбанк» м. Київ</span>
                        </div>
                        <div className="bank-code-mobile">
                            <span className="list-title">Код банку:</span>
                            <span>320478</span>
                        </div>
                        <div className="beneficiary-account-mobile">
                            <span className="list-title">Рахунок отримувача (діє включно до 12.01.2020):</span>
                            <span>26008268812</span>
                        </div>
                        <div className="number-beneficiary-account-mobile">
                            <span className="list-title">Рахунок отримувача (IBAN):</span>
                            <span>UA093204780000000026008268812</span>
                        </div>
                        <button className="gratitude-mobile" onClick={props.charContribOnClose}>
                            Дякуємо за допомогу!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharContribModal;