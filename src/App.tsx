import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { TasksProvider } from './data/TasksProvider';

/*Pages*/
import TaskList from './pages/TaskList';
import AddNewTask from './pages/AddNewTask';
import EditTask from './pages/EditTask';

setupIonicReact();

const App: React.FC = () => (

  <TasksProvider>
  <IonApp>
    <IonReactRouter>

      <IonRouterOutlet>

        <Route exact path="/tasks" component={TaskList}></Route>
        <Route exact path="/newtask" component={AddNewTask}/>
        <Route exact path="/edittask/:id" component={EditTask}/>

        <Route exact path="/">
          <Redirect to="/tasks" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
  </TasksProvider>

);

export default App;
