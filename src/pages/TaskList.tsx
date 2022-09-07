import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { TasksContext } from '../data/TasksContext';
import { TaskContextType } from '../types/taskType';

const TaskList: React.FC = () => {

  const { tasks } = useContext(TasksContext) as TaskContextType;

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
                            <IonLabel>{t.title}</IonLabel>
                            <IonCheckbox slot="end" checked={t.completed} ></IonCheckbox>
                          </IonItem>
                          </>}
                      </div>
                      )
                    })
                  }

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
      
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
