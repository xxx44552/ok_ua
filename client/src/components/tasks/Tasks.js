import React from 'react'
import { connect } from 'react-redux'
import './tasks.scss'

function Tasks(props) {
    return(
        <>
            <div className="tasks-wrapper">
                <h1 className="task-title">{props.taskTitle}</h1>
                <div className="task-list">
                    {props.tasks.map(({img,text,id}) => {
                        return(
                            <div className="task" key={id}>
                                <img src={img}/>
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="buttons">
                    <button className="char-contrib">Зробити благодійний внесок</button>
                    <button className="signIn">Приєднатися</button>
                    <button className="help">Отримати допомогу</button>
                </div>
            </div>
        </>
    )
};

export default connect(
    state => ({
        taskTitle: state.data.task.title,
        tasks: state.data.task.data,
    })
)(Tasks)