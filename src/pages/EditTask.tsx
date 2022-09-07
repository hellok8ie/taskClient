import { IonPage } from "@ionic/react"
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { TasksContext } from "../data/TasksContext";
import { TaskContextType } from "../types/taskType";


const EditTask: React.FC = () => {

    const { editTask } = useContext(TasksContext) as TaskContextType;
    let { id } = useParams() as any;
    const navigate = useHistory();

    let [ editedTask, setEditedTask ] = useState({
        _id: id,
        title: "",
        completed: false
    })

    function handleChange(event:any) {
        setEditedTask((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event:any) {
        event.preventDefault();
        editTask(editedTask)
        navigate.push('/')
    };

    return (
        <IonPage>
            <form onSubmit={handleSubmit}>
            <h1>Edit Task</h1>
            <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
            <br></br>
            <button>Edit Task</button>
        </form>

        </IonPage>
    )
}

export default EditTask;