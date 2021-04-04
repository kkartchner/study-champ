import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Plans from './components/Plans/Plans';
import TaskContainer from './components/Tasks/TaskContainer';
import Title from './components/Title';

function App() {
  return (
    <div style={{ padding: 30 }}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/tasks'>
            <Title title='Tasks' />
            <TaskContainer />
          </Route>

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
