import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { IconButton } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import PlanForm from './components/Plans/PlanForm';
import PlansView from './components/Plans/PlansView';
import TasksView from './components/Tasks/TasksView';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/tasks'>
            <MainPage title='Tasks'>
              <TasksView />
            </MainPage>
          </Route>

          <Route path='/plans'>
            <MainPage title='Plans' action={<PlanForm />}>
              <PlansView />
            </MainPage>
          </Route>

          <Route path='/'>
            <Redirect to={'/tasks'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
