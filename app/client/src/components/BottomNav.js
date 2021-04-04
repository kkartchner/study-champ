import React from 'react';
import Icon from '@mdi/react';
import { Card, IconButton } from 'ui-neumorphism';
import { mdiFlagCheckered, mdiFormatListChecks } from '@mdi/js';
import { useHistory } from 'react-router';

export default function BottomNav() {
  const history = useHistory();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 10
      }}
    >
      <IconButton
        text={false}
        size='large'
        onClick={() => {
          history.push('/tasks');
        }}
      >
        <Icon path={mdiFormatListChecks} size={1} />
      </IconButton>
      <IconButton
        text={false}
        size='large'
        onClick={() => {
          history.push('/plans');
        }}
      >
        <Icon path={mdiFlagCheckered} size={1} />
      </IconButton>
    </div>
  );
}
