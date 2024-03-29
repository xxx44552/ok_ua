import React, { Component } from 'react';
import '../styles/OurProjects.scss';
import { connect } from 'react-redux';
import SectionArticle from '../SliderSection/SectionArticle';

function Footer(props) {
    return (
        <>
            <section className="section footer__section">
                <div className="section__container footer__container">
                    <div className="section__row footer__row">
                        <div className="section__col footer__col footer__col-1">
                            <h4 className="footer__article footer__article--left">Контакти</h4>
                            <div className="footer__contact-wrap">
                                <svg className="footer__contact-icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4544 13.9829L16.1008 11.6293C15.4534 10.9819 14.3945 10.9819 13.7471 11.6293L12.679 12.6974C12.1889 13.1876 11.3889 13.1876 10.8941 12.6974L6.25165 8.05958C5.75688 7.56481 5.75688 6.76948 6.25165 6.27471L7.31979 5.20657C7.96715 4.55921 7.9764 3.50494 7.31979 2.85296L4.96618 0.508591C4.31882 -0.138769 3.25992 -0.138769 2.61257 0.508591C2.13167 0.980238 1.97445 1.13745 1.75713 1.35016C-0.582616 3.6899 -0.582616 7.50007 1.75713 9.83982L9.10928 17.192C11.4536 19.5363 15.2546 19.541 17.5989 17.192L18.4544 16.3365C19.1017 15.6892 19.1017 14.6349 18.4544 13.9829ZM3.39864 1.28542C3.61597 1.06809 3.9674 1.06809 4.18472 1.28542L6.53834 3.62979C6.75567 3.84712 6.75567 4.19854 6.53834 4.41587L6.1453 4.80891L3.0056 1.67384L3.39864 1.28542ZM9.89073 16.4105L2.53858 9.05836C0.730599 7.24575 0.628871 4.402 2.2334 2.47379L5.36384 5.59961C4.54077 6.53366 4.57776 7.95322 5.46557 8.84103L10.1034 13.4835C10.9912 14.3713 12.4108 14.4083 13.3449 13.5853L16.4753 16.7157C14.5517 18.3156 11.7126 18.2324 9.89073 16.4105ZM17.6683 15.5551L17.2753 15.9481L14.1356 12.8084L14.5286 12.4154C14.7459 12.1981 15.0974 12.1981 15.3147 12.4154L17.6683 14.769C17.8856 14.9863 17.8856 15.3377 17.6683 15.5551Z" fill="black" />
                                </svg>
                                <a className="footer__contact-link" href="tel:+380674345652">+38(067) 434 56 52</a>
                            </div>
                            <div className="footer__contact-wrap">
                                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.67969 0C2.99658 0 0 2.99658 0 6.67969C0 7.92285 0.343262 9.13818 0.997314 10.1912L6.29932 18.7356C6.40137 18.8979 6.57764 19 6.77246 19H6.7771C6.97192 19 7.15283 18.8979 7.25024 18.731L12.4177 10.103C13.0347 9.0686 13.3594 7.88574 13.3594 6.67969C13.3594 2.99658 10.3628 0 6.67969 0ZM11.4622 9.53247L6.76318 17.3718L1.9436 9.60669C1.40088 8.72998 1.104 7.71875 1.104 6.67969C1.104 3.60889 3.60889 1.104 6.67969 1.104C9.75049 1.104 12.2507 3.60889 12.2507 6.67969C12.2507 7.68628 11.9771 8.66968 11.4622 9.53247Z" fill="black" />
                                    <path d="M6.67969 3.33984C4.83813 3.33984 3.33984 4.83813 3.33984 6.67969C3.33984 8.50732 4.81494 10.0195 6.67969 10.0195C8.56763 10.0195 10.0195 8.48877 10.0195 6.67969C10.0195 4.83813 8.52124 3.33984 6.67969 3.33984ZM6.67969 8.91553C5.4458 8.91553 4.44385 7.91357 4.44385 6.67969C4.44385 5.45044 5.45044 4.44385 6.67969 4.44385C7.90894 4.44385 8.91089 5.45044 8.91089 6.67969C8.91089 7.89038 7.93213 8.91553 6.67969 8.91553Z" fill="black" />
                                </svg>
                                <a className="footer__contact-link">{props.footer.address}</a>
                            </div>
                            <div className="footer__contact-wrap">
                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0.55H17C17.8008 0.55 18.45 1.19919 18.45 2V11.793C18.45 12.5938 17.8008 13.243 17 13.243H2C1.19919 13.243 0.55 12.5938 0.55 11.793V2C0.55 1.19919 1.19919 0.55 2 0.55Z" stroke="black" stroke-width="1.1" />
                                    <path d="M1 1.5L7 7.14706M18 1.5L12 7.14706M18 13L12 7.14706M12 7.14706L10.8707 8.2099C10.1006 8.9347 8.89937 8.9347 8.12927 8.2099L7 7.14706M7 7.14706L1 13" stroke="black" stroke-width="1.2" />
                                </svg>
                                <a className="footer__contact-link" href="mailto:akp.shevchenko@gmail.com">akp.shevchenko@gmail.com</a>
                            </div>
                        </div>
                        <div className="section__col footer__col footer__col-2">
                            <img src={props.footer.logo} className="footer__logo"></img>
                        </div>
                        <div className="section__col footer__col footer__col-3">
                            <h4 className="footer__article footer__article--right">Ми в соцмережах</h4>
                            <div className="footer__social-wrap">
                                <a className="footer__social-link" target="_blank" href={props.social.fb}>
                                    <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.46886 20 0 15.4945 0 10C0 4.46886 4.46886 0 10 0C15.4945 0 20 4.46886 20 10C20 15.4945 15.4945 20 10 20ZM10 1.06227C5.09158 1.06227 1.06227 5.09158 1.06227 10C1.06227 14.9084 5.05494 18.9377 10 18.9377C14.9084 18.9377 18.9377 14.9451 18.9377 10C18.9377 5.09158 14.9084 1.06227 10 1.06227Z" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.42491 10.0366L8.42491 15.8242C8.42491 15.8974 8.49817 15.9707 8.57143 15.9707H10.7326C10.8059 15.9707 10.8791 15.8974 10.8791 15.8242L10.8791 9.96336H12.4542C12.5275 9.96336 12.6007 9.89009 12.6007 9.81683L12.7473 8.05859C12.7473 7.98533 12.674 7.91207 12.6007 7.91207L10.8791 7.91207V6.66665C10.8791 6.37361 11.1355 6.1172 11.4286 6.1172H12.6374C12.7106 6.1172 12.7839 6.04394 12.7839 5.97068V4.21244C12.7839 4.13918 12.7106 4.06592 12.6374 4.06592H10.6227C9.41392 4.06592 8.46154 5.0183 8.46154 6.22709V7.9487H7.39927C7.32601 7.9487 7.25275 8.02196 7.25275 8.09522V9.85347C7.25275 9.92672 7.32601 9.99999 7.39927 9.99999H8.42491V10.0366Z" />
                                    </svg>

                                </a>
                                <a className="footer__social-link" target="_blank" href={props.social.insta}>
                                    <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0738 6.90039C8.3764 6.90039 6.97418 8.3026 6.97418 10C6.97418 11.6974 8.3764 13.0997 10.0738 13.0997C11.7712 13.0997 13.1734 11.6974 13.1734 10C13.1734 8.3026 11.8081 6.90039 10.0738 6.90039ZM10.0738 11.9926C8.9668 11.9926 8.08119 11.107 8.08119 10C8.08119 8.89301 8.9668 8.0074 10.0738 8.0074C11.1808 8.0074 12.0664 8.89301 12.0664 10C12.0664 11.107 11.1808 11.9926 10.0738 11.9926Z" />
                                        <path d="M12.583 3.61621L7.56456 3.61621C5.46124 3.61621 3.76382 5.31363 3.76382 7.41695L3.76382 12.4354C3.76382 14.5387 5.46124 16.2361 7.56456 16.2361H12.583C14.6863 16.2361 16.3838 14.5387 16.3838 12.4354V7.41695C16.3469 5.31363 14.6494 3.61621 12.583 3.61621ZM15.166 12.4354C15.166 13.8745 13.9852 15.0553 12.5461 15.0553L7.56456 15.0553C6.12545 15.0553 4.94464 13.8745 4.94464 12.4354L4.94464 7.41695C4.94464 5.97783 6.12545 4.79702 7.56456 4.79702L12.583 4.79702C14.0221 4.79702 15.2029 5.97783 15.2029 7.41695L15.2029 12.4354H15.166Z" />
                                        <path d="M13.3948 7.41693C13.8024 7.41693 14.1328 7.08651 14.1328 6.67892C14.1328 6.27133 13.8024 5.94092 13.3948 5.94092C12.9872 5.94092 12.6568 6.27133 12.6568 6.67892C12.6568 7.08651 12.9872 7.41693 13.3948 7.41693Z" />
                                        <path d="M10 0C4.50185 0 0 4.50185 0 10C0 15.5351 4.50185 20 10 20C15.5351 20 20 15.4982 20 10C20 4.50185 15.5351 0 10 0ZM10 19.0775C5.01845 19.0775 0.95941 15.0184 0.95941 10.0369C0.95941 5.05535 5.01845 0.99631 10 0.99631C14.9815 0.99631 19.0406 5.05535 19.0406 10.0369C19.0775 14.9815 14.9815 19.0775 10 19.0775Z" />
                                    </svg>

                                </a>
                                <a className="footer__social-link" target="_blank" href={props.social.youtube}>
                                    <svg className="footer__social-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.46886 20 0 15.4945 0 10C0 4.46886 4.46886 0 10 0C15.4945 0 20 4.46886 20 10C20 15.4945 15.4945 20 10 20ZM10 1.06227C5.09157 1.06227 1.06227 5.09157 1.06227 10C1.06227 14.9084 5.05494 18.9377 10 18.9377C14.9084 18.9377 18.9377 14.9451 18.9377 10C18.9377 5.09157 14.9084 1.06227 10 1.06227Z" />
                                        <path d="M15.9707 8.49818C15.9707 7.06961 14.8352 5.93408 13.4066 5.93408L6.73994 5.93408C5.31137 5.93408 4.17584 7.06961 4.17584 8.49818L4.17584 11.6117C4.17584 13.0403 5.31137 14.1758 6.73994 14.1758L13.4066 14.1758C14.8352 14.1758 15.9707 13.0403 15.9707 11.6117V8.49818ZM11.7949 10.1832L9.15753 11.6484C9.04764 11.7216 8.93775 11.6117 8.93775 11.5018V8.49818C8.93775 8.35166 9.04764 8.2784 9.15753 8.35166L11.8315 9.89013C11.9048 9.96339 11.9048 10.1465 11.7949 10.1832Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="section__row footer__row">
                        <div className="section__col section__col--w-100 footer__col">
                            <nav className="footer__nav">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item"><a className="footer__nav-link" href="#">Про нас</a></li>
                                    <li className="footer__nav-item"><a className="footer__nav-link" href="#">Новини</a></li>
                                    <li className="footer__nav-item"><a className="footer__nav-link" href="#">Проекти</a></li>
                                    <li className="footer__nav-item"><a className="footer__nav-link" href="#">Контакти</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bottom__section section__colored">
                <div className="section__container">
                    <div className="section__row">
                        <div className="section__col section__col--w-100">
                            <p className="bottom__text">{props.copy}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section footer__section--adaptive">
                <div className="section__container">
                    <div className="section__row">
                        <div className="section__col section__col--w-100">
                            <SectionArticle textContent={'Контакти'} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section contacts__section--adaptive section__colored">
                <div className="section__container">
                    <div className="section__row">
                        <div className="section__col section__col--w-100">
                            <div className="footer__contact-wrap">
                                <svg className="footer__contact-icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4544 13.9829L16.1008 11.6293C15.4534 10.9819 14.3945 10.9819 13.7471 11.6293L12.679 12.6974C12.1889 13.1876 11.3889 13.1876 10.8941 12.6974L6.25165 8.05958C5.75688 7.56481 5.75688 6.76948 6.25165 6.27471L7.31979 5.20657C7.96715 4.55921 7.9764 3.50494 7.31979 2.85296L4.96618 0.508591C4.31882 -0.138769 3.25992 -0.138769 2.61257 0.508591C2.13167 0.980238 1.97445 1.13745 1.75713 1.35016C-0.582616 3.6899 -0.582616 7.50007 1.75713 9.83982L9.10928 17.192C11.4536 19.5363 15.2546 19.541 17.5989 17.192L18.4544 16.3365C19.1017 15.6892 19.1017 14.6349 18.4544 13.9829ZM3.39864 1.28542C3.61597 1.06809 3.9674 1.06809 4.18472 1.28542L6.53834 3.62979C6.75567 3.84712 6.75567 4.19854 6.53834 4.41587L6.1453 4.80891L3.0056 1.67384L3.39864 1.28542ZM9.89073 16.4105L2.53858 9.05836C0.730599 7.24575 0.628871 4.402 2.2334 2.47379L5.36384 5.59961C4.54077 6.53366 4.57776 7.95322 5.46557 8.84103L10.1034 13.4835C10.9912 14.3713 12.4108 14.4083 13.3449 13.5853L16.4753 16.7157C14.5517 18.3156 11.7126 18.2324 9.89073 16.4105ZM17.6683 15.5551L17.2753 15.9481L14.1356 12.8084L14.5286 12.4154C14.7459 12.1981 15.0974 12.1981 15.3147 12.4154L17.6683 14.769C17.8856 14.9863 17.8856 15.3377 17.6683 15.5551Z" fill="black" />
                                </svg>
                                <a className="footer__contact-link" href="tel:+380674345652">+38(067) 434 56 52</a>
                            </div>
                            <div className="footer__contact-wrap">
                                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.67969 0C2.99658 0 0 2.99658 0 6.67969C0 7.92285 0.343262 9.13818 0.997314 10.1912L6.29932 18.7356C6.40137 18.8979 6.57764 19 6.77246 19H6.7771C6.97192 19 7.15283 18.8979 7.25024 18.731L12.4177 10.103C13.0347 9.0686 13.3594 7.88574 13.3594 6.67969C13.3594 2.99658 10.3628 0 6.67969 0ZM11.4622 9.53247L6.76318 17.3718L1.9436 9.60669C1.40088 8.72998 1.104 7.71875 1.104 6.67969C1.104 3.60889 3.60889 1.104 6.67969 1.104C9.75049 1.104 12.2507 3.60889 12.2507 6.67969C12.2507 7.68628 11.9771 8.66968 11.4622 9.53247Z" fill="black" />
                                    <path d="M6.67969 3.33984C4.83813 3.33984 3.33984 4.83813 3.33984 6.67969C3.33984 8.50732 4.81494 10.0195 6.67969 10.0195C8.56763 10.0195 10.0195 8.48877 10.0195 6.67969C10.0195 4.83813 8.52124 3.33984 6.67969 3.33984ZM6.67969 8.91553C5.4458 8.91553 4.44385 7.91357 4.44385 6.67969C4.44385 5.45044 5.45044 4.44385 6.67969 4.44385C7.90894 4.44385 8.91089 5.45044 8.91089 6.67969C8.91089 7.89038 7.93213 8.91553 6.67969 8.91553Z" fill="black" />
                                </svg>
                                <a className="footer__contact-link">{props.footer.address}</a>
                            </div>
                            <div className="footer__contact-wrap">
                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 0.55H17C17.8008 0.55 18.45 1.19919 18.45 2V11.793C18.45 12.5938 17.8008 13.243 17 13.243H2C1.19919 13.243 0.55 12.5938 0.55 11.793V2C0.55 1.19919 1.19919 0.55 2 0.55Z" stroke="black" stroke-width="1.1" />
                                    <path d="M1 1.5L7 7.14706M18 1.5L12 7.14706M18 13L12 7.14706M12 7.14706L10.8707 8.2099C10.1006 8.9347 8.89937 8.9347 8.12927 8.2099L7 7.14706M7 7.14706L1 13" stroke="black" stroke-width="1.2" />
                                </svg>
                                <a className="footer__contact-link" href="mailto:akp.shevchenko@gmail.com">akp.shevchenko@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bottom__section--adaptive">
                <div className="section__container">
                    <div className="section__row bottom__row--adaptive">
                        <div className="section__col">
                            <button className="bottom__button">
                                <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="2" rx="1" fill="#A6A8A9" />
                                    <rect y="8" width="32" height="2" rx="1" fill="#A6A8A9" />
                                    <rect y="16" width="32" height="2" rx="1" fill="#A6A8A9" />
                                </svg>
                            </button>
                        </div>
                        <div className="section__col">
                        <img src={props.footer.logo} className="footer__logo"></img>
                        </div>
                        <div className="section__col">
                            <button className="bottom__button">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#A6A8A9" />
                                    <circle cx="3.5" cy="26.5" r="3.5" fill="#A6A8A9" />
                                    <circle cx="26.5" cy="14.5" r="3.5" fill="#A6A8A9" />
                                    <path d="M3.5 3.5L26.5 14.5L3.5 27" stroke="#A6A8A9" stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default connect(
    state => ({
        footer: state.data.footer,
        copy: state.data.copy,
        social: state.data.social
    })
)(Footer);