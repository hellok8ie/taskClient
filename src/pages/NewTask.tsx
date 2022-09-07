import React, { useContext } from "react";
import { IonPage } from "@ionic/react"
import { useState } from "react";
import { TasksContext } from "../data/TasksContext";
import { TaskContextType } from '../types/taskType';


const AddNewTask: React.FC = () => {

    const { addTask } = useContext(TasksContext) as TaskContextType

    let [ newTask, setNewTask ] = useState({
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
        console.log(newTask)
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