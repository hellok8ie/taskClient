import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TasksContext from '../data/TasksContext';

const TaskList: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonList>

        <TasksContext.Consumer>

        {
          ( {tasks} ) => {
            return (
              <>
              {console.log(tasks)}
              </>
            )
          }
        }


          {/* {
            tasks.map((t:Object) => {
              return ( 
              
              <div>
                <IonItem>
                  <IonLabel>Title</IonLabel>
                </IonItem>
              </div>
              )
            })
          } */}

        </TasksContext.Consumer>
          
        </IonList>
      

      </IonContent>
    </IonPage>
  );
};

export default TaskList;
