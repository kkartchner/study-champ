import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Plans from './components/Plans/Plans';
import TaskContainer from './components/Tasks/TaskContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/tasks' component={TaskContainer} />

          <Route path='/plans' component={Plans} />

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
