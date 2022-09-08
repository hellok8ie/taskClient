import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TasksContext } from '../data/TasksContext';
import { TaskContextType } from '../types/taskType';
import { trash, pencil } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const TaskList: React.FC = () => {

  //FUNCTIONS/VARIABLES FOR TASKLIST
  const { tasks, addTask, deleteTask } = useContext(TasksContext) as TaskContextType;
  const history = useHistory();


  function handleDelete(id:any) {
      deleteTask(id)
  }

  function handleEditNav(id:any) {
    history.push(`/edittask/${id}`)
  }

  // FUNCTIONS/VARIABLES FOR MODAL DIALOG

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

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

  function handleSubmit() {
    modal.current?.dismiss(input.current?.value, 'confirm');
    addTask(newTask)
    setNewTask({_id: null, title: "", completed: false})
  };

  return (

    // CODE FOR TASKLIST PAGE

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
                          <IonItemSliding>

                            <IonItem>
                              <IonLabel>
                                {t.title}<br></br>
                                {/* <Link to={`/edittask/${t._id}`}>Edit</Link> */}
                              </IonLabel>
                              <IonCheckbox slot="end" checked={t.completed}></IonCheckbox>
                            </IonItem>
                            
                            <IonItemOptions side="end">
                              <IonItemOption color="warning">
                                <IonIcon slot="icon-only" icon={pencil} onClick={handleEditNav.bind(this, t._id)} />
                              </IonItemOption>
                              <IonItemOption color="danger">
                                <IonIcon slot="icon-only" icon={trash} onClick={handleDelete.bind(this, t._id)} />
                              </IonItemOption>
                            </IonItemOptions>

                          </IonItemSliding>
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
                          <IonItemSliding>

                          <IonItem>
                            <IonLabel>{t.title}</IonLabel>
                            <IonCheckbox slot="end" checked={t.completed}></IonCheckbox>
                          </IonItem>

                          <IonItemOptions side="end">
                              <IonItemOption color="danger">
                                <IonIcon slot="icon-only" icon={trash} onClick={handleDelete.bind(this, t._id)} />
                              </IonItemOption>
                            </IonItemOptions>

                          </IonItemSliding>
                          </>}
                      </div>
                      )
                    })
                  }
          
        </IonList>

        <IonItemDivider/>
        <IonButton expand='full' color="secondary" id='open-modal'>Add Task</IonButton>

      {/* CODE FOR MODAL DIALOG COMPONENT*/}

      <IonContent className="ion-padding">

      <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>New Task</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={handleSubmit}>
                  Create
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
            <input placeholder="Enter task" type="text" name="title" value={newTask.title} onChange={handleChange} />
            </IonItem>
          </IonContent>
        </IonModal>
      </IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default TaskList;
