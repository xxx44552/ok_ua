import React, { Component } from 'react';
import './styles/SliderSection.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlideItem from './MainSlideItem';
import PreviewSlideItem from './PreviewSlideItem';
import SectionArticle from './SectionArticle';
import { connect } from 'react-redux';




class SliderSection extends Component {
    settingsMainSlider = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    speed: 500,
                    fade: false
                }
            }
        ]
    };
    settingsPreviewSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    state = {
        nav1: null,
        nav2: null
    };
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
                                <SectionArticle textContent={this.props.project.title} />
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
                                    {this.props.project.items.map((item) =>
                                        <MainSlideItem image={item.img} title={item.title} text={item.text} id={item.id} />
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section carousel__section">
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
                                    {this.props.project.items.map((item) =>
                                        <PreviewSlideItem image={item.img} title={item.title} text={item.text} id={item.id}/>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

const mapStateToProps = state => ({
    project: state.data.project,

});

export default connect(
    state => ({
        project: state.data.project
    })
)(SliderSection);
