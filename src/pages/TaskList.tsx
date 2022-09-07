import { IonButton, IonCheckbox, IonContent, IonHeader, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TasksContext } from '../data/TasksContext';
import { TaskContextType } from '../types/taskType';

const TaskList: React.FC = () => {

  const { tasks, deleteTask } = useContext(TasksContext) as TaskContextType;

  function handleDelete(id:any) {
      deleteTask(id)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>Incomplete</IonLabel>
          </IonListHeader>

                {
                    tasks.map((t) => {
                      return (
                      <div>
                        {t.completed == false && 
                          <>
                          <IonItem>
                            <IonLabel>
                              {t.title}<br></br>
                              <Link to={`/edittask/${t._id}`}>Edit</Link>
                            </IonLabel>
                            <button onClick={handleDelete.bind(this, t._id)}>Delete Task</button>
                            <IonCheckbox slot="end" checked={t.completed} ></IonCheckbox>
                          </IonItem>
                          </>}
                      </div>
                      )
                    })
                  }
          <IonItemDivider/>
          <IonListHeader>
            <IonLabel>Completed</IonLabel>
          </IonListHeader>
                  {
                    tasks.map((t) => {
                      return (
                      <div>
                        {t.completed && 
                          <>
                          <IonItem>
                            <IonLabel>{t.title}</IonLabel>
                            <IonCheckbox slot="end" checked={t.completed}></IonCheckbox>
                          </IonItem>
                          </>}
                      </div>
                      )
                    })
                  }
          
        </IonList>

        <IonItemDivider/>
        <IonButton expand='full' color="secondary" href='/newtask'>Add Task</IonButton>
                  
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
