import { Grid } from '@material-ui/core';
import { mdiFlagCheckered, mdiFormatListChecks } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { useHistory } from 'react-router';
import { IconButton } from 'ui-neumorphism';

export default function BottomNav() {
  const history = useHistory();

  return (
    <Grid
      container
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        margin: 0,
        height: '8vh'
      }}
      spacing={2}
      justify='center'
    >
      <Grid item>
        <IconButton
          text={false}
          size='large'
          onClick={() => {
            history.push('/tasks');
          }}
        >
          <Icon path={mdiFormatListChecks} size={1} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          text={false}
          size='large'
          onClick={() => {
            history.push('/plans');
          }}
        >
          <Icon path={mdiFlagCheckered} size={1} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
