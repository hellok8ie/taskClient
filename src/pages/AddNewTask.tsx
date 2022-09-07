import React, { useContext } from "react";
import { IonPage } from "@ionic/react"
import { useState } from "react";
import { TasksContext } from "../data/TasksContext";
import { TaskContextType } from '../types/taskType';
import { useHistory } from "react-router";


const AddNewTask: React.FC = () => {

    const { addTask } = useContext(TasksContext) as TaskContextType;
    const navigate = useHistory();

    let [ newTask, setNewTask ] = useState({
        _id: null,
        title: "",
        completed: false
    });

    function handleChange(event:any) {
        setNewTask((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event:any) {
        event.preventDefault();
        addTask(newTask)
        navigate.push('/')
    };

    return (
        <IonPage>
        <form onSubmit={handleSubmit}>
            <h1>New Task</h1>
            <input placeholder="Enter task" type="text" name="title" value={newTask.title} onChange={handleChange} />
            <br></br>
            <button>Create New Task</button>
        </form>
        </IonPage>
     )
}

export default AddNewTask;