import React, { Component } from 'react';
import './styles/OurProjects.scss'
import TeamMateCard from './TeamMateCard'
import backImg from './media/background-image.png';
import CharityButton from './CharityButton';
import SectionArticle from './SectionArticle';
import IFrameMap from './IFrameMap';
import CounterCard from './CounterCard';
import { connect } from 'react-redux';

function OurProjects(props){
        return (
            <>
                <section className="section counter__section" style={{ backgroundImage: 'url(' + backImg + ')' }}>
                    <div className="counter__section--overlay"></div>
                    <div className="section__container counter__container">
                        <div className="section__row counter__row--adaptive" style={{ justifyContent: 'space-around' }}>
                            {props.statistic.map((item)=>
                                <div className="section__col counter__col--adaptive">
                                    <CounterCard id={item.id} img={item.img} text={item.text} count={item.count}/>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="section charity__section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100 charity__col">
                                <CharityButton />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <SectionArticle textContent={'Наша команда'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section team__section section__colored">
                    <div className="section__container">
                    <div className="section__row team__row team__row--adaptive">
                        {props.team.map((item)=>
                            <div className="section__col team__col--adaptive">
                                <TeamMateCard img={item.img} position={item.prof} name={item.name} id={item.id} social={item.social}/>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="section map-article__section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <SectionArticle textContent={props.map.title} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section map__section">
                    <div className="section__container">
                        <div className="section__row">
                            <div className="section__col section__col--w-100">
                                <IFrameMap coord={props.map.coordinates} />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )  
}

export default connect(
    state => ({
        statistic: state.data.statistic,
        teem: state.data.teem,
        map: state.data.map
    })
)(OurProjects);


