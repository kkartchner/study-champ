import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'ui-neumorphism/dist/index.css';
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
            <MainPage title='Plans'>
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
