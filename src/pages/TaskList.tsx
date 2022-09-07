import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import {TasksContext} from '../data/TasksContext';
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

          {
            tasks.map((t) => {
              return (
              <div>
                <IonItem>
                  <IonLabel>{t.title}</IonLabel>
                </IonItem>
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
