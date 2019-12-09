import React from 'react';
import { connect } from 'react-redux';
import './tasks.scss';
import JoinModal from '../joinModal/joinModal';
import WriteToUsModal from '../writeToUsModal/writeToUsModal';
import CharContribModal from '../charContribModal/charContribModal';

class Tasks extends React.Component {

    state = {
        modalIsOpened: false,
        writeToUsModalIsOpened: false,
        charContribIsOpened: false
    };

    handleOpen = () => this.setState({ modalIsOpened: true })
    handleClose = () => this.setState({ modalIsOpened: false })
    handleWriteToUsOpen = () => this.setState({ writeToUsModalIsOpened: true })
    handleWriteToUsClose = () => this.setState({ writeToUsModalIsOpened: false })
    handleCharContribOpen = () => this.setState({ charContribIsOpened: true })
    handleCharContribClose = () => this.setState({ charContribIsOpened: false })


    render() {
        return(
            <>
                <div className="tasks-wrapper">
                    <h1 className="task-title">{this.props.taskTitle}</h1>
                    <div className="task-list">
                        {this.props.tasks.map(({img,text,id}) => {
                            return(
                                <div className="task" key={id}>
                                    <img src={img} alt="task-img"/>
                                    <p>{text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="buttons">
                        <button className="char-contrib" onClick={this.handleCharContribOpen}>Зробити благодійний внесок</button>
                        <button className="signIn" onClick={this.handleOpen}>Приєднатися</button>
                        <button className="help" onClick={this.handleWriteToUsOpen}>Отримати допомогу</button>

                        {!!this.state.modalIsOpened &&
                            (
                                <JoinModal
                                onClose={this.handleClose}
                                />
                            )
                        }
                        {!!this.state.writeToUsModalIsOpened &&
                            (
                                <WriteToUsModal
                                writeToUsModalonClose={this.handleWriteToUsClose}
                                />
                            )
                        }
                        {!!this.state.charContribIsOpened &&
                            (
                                <CharContribModal
                                charContribOnClose={this.handleCharContribClose}
                                />
                            )
                        }

                    </div>
                </div>
            </>
        )
    }
};

export default connect(
    state => ({
        taskTitle: state.data.task.title,
        tasks: state.data.task.data
    })
)(Tasks)