import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { TasksContext } from "../data/TasksContext";
import { TaskContextType } from "../types/taskType";
import { arrowBack } from 'ionicons/icons';


const EditTask: React.FC = () => {

    const { editTask } = useContext(TasksContext) as TaskContextType;
    let { id } = useParams() as any;
    const navigate = useHistory();

    let [ editedTask, setEditedTask ] = useState({
        _id: id,
        title: "",
        completed: false
    });

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
            <IonContent>
            <IonHeader>
                <IonToolbar color='tertiary'>
                    <IonButtons slot="start">
                        <IonBackButton text="" icon={arrowBack} defaultHref="/"/>
                    </IonButtons>
                <IonTitle>Edit Task</IonTitle>
                </IonToolbar>
            </IonHeader>
            <form onSubmit={handleSubmit}>
                <br/>
                <br/>
                
                <label>Update task below:</label>
                <br/>
                <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
                <br/>
                <br/>
                <IonButton expand="block" color='tertiary'>Edit Task</IonButton>
            </form>
            </IonContent>
        </IonPage>
    )
}

export default EditTask;