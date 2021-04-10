import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import PlansContainer from './components/Plans/PlansContainer';
import TasksContainer from './components/Tasks/TasksContainer';
import Title from './components/Title';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/tasks'>
            <Title title='Tasks' />
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
              <TasksContainer />
            </div>
          </Route>

          <Route path='/plans'>
            <Title title='Plans' />
            <PlansContainer />
          </Route>

          <Route path='/'>
            <Redirect to={'/tasks'} />
          </Route>
        </Switch>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
