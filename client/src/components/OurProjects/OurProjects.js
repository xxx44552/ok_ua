import React, { Component } from 'react';
import './styles/OurProjects.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from './media/image-15.png';


class OurProjects extends Component {
    settingsMainSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    settingsPreviewSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    };
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        return (
            <>
                <section className="section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <h3 className="section__article">Наші проекти</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section__colored">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <Slider
                                    {...this.settingsMainSlider}
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                    className="carousel__item--main"
                                >
                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--main" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--main">
                                                    <h4 className="carousel__article carousel__article--main">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;<br></br>
                                                        ініціювання та підтримка наукових досліджень
                                                </p>
                                                    <p className="carousel__paragraph">
                                                        екологічних, культурних, соціальних, духовних та інших проблем сучасності у взаємодії людей з навколишнім середовищем;<br></br>
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                                                </p>
                                                    <a href="#" className="carousel__button carousel__button--main">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--main" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--main">
                                                    <h4 className="carousel__article carousel__article--main">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;<br></br>
                                                        ініціювання та підтримка наукових досліджень
                                                </p>
                                                    <p className="carousel__paragraph">
                                                        екологічних, культурних, соціальних, духовних та інших проблем сучасності у взаємодії людей з навколишнім середовищем;<br></br>
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                                                </p>
                                                    <a href="#" className="carousel__button carousel__button--main">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--main" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--main">
                                                    <h4 className="carousel__article carousel__article--main">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;<br></br>
                                                        ініціювання та підтримка наукових досліджень
                                                </p>
                                                    <p className="carousel__paragraph">
                                                        екологічних, культурних, соціальних, духовних та інших проблем сучасності у взаємодії людей з навколишнім середовищем;<br></br>
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                                                </p>
                                                    <a href="#" className="carousel__button carousel__button--main">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <Slider
                                    {...this.settingsPreviewSlider}
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={2}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    className="carousel__item--preview"
                                >

                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--preview" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--preview">
                                                    <h4 className="carousel__article carousel__article--preview">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                </p>
                                                    <a href="#" className="carousel__button carousel__button--preview">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--preview" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--preview">
                                                    <h4 className="carousel__article carousel__article--preview">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                </p>
                                                    <a href="#" className="carousel__button carousel__button--preview">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="section__row">
                                            <div className="section__col section__col--w-50">
                                                <img className="carousel__image carousel__image--preview" src={Image}></img>
                                            </div>
                                            <div className="section__col section__col--w-50">
                                                <div className="carousel__wrap carousel__wrap--preview">
                                                    <h4 className="carousel__article carousel__article--preview">Будівельно-реставраційний проект</h4>
                                                    <p className="carousel__paragraph">
                                                        сприяння розробці та реалізації будівельних та реставраційних проектів екологічного та культурного напрямку;
                </p>
                                                    <a href="#" className="carousel__button carousel__button--preview">Дізнатися</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default OurProjects;
