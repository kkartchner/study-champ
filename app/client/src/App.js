import { mdiFormatListChecks } from '@mdi/js';
import Icon from '@mdi/react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  Divider,
  IconButton
} from 'ui-neumorphism';
import BottomNav from './components/BottomNav';
import PlansContainer from './components/Plans/PlansContainer';
import TasksContainer from './components/Tasks/TasksContainer';
import Title from './components/Title';
import 'ui-neumorphism/dist/index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/tasks'>
            <Card flat style={{ margin: 10 }}>
              <CardHeader>
                <Title title='Tasks' />
              </CardHeader>
              <CardContent style={{ overflowY: 'scroll', height: '78vh' }}>
                <TasksContainer />
              </CardContent>
              <CardAction>
                <BottomNav />
              </CardAction>
            </Card>
          </Route>

          <Route path='/plans'>
            <Title title='Plans' />
            <PlansContainer />
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
