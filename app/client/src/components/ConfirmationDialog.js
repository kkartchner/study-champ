import { useMutation } from '@apollo/client';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  Dialog
} from 'ui-neumorphism';

export default function DeleteConfirmation({
  message,
  mutation,
  objectId,
  openButton,
  cacheQuery
}) {
  const [open, setOpen] = useState(false);

  const [performMutation, { loading, error, data }] = useMutation(mutation);

  const onCancel = () => {
    setOpen(false);
  };

  const onDelete = () => {
    performMutation({ variables: { id: objectId } });
    onCancel();
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{openButton}</div>
      <Dialog maxWidth={500} width='90%' visible={open} onClose={onCancel}>
        <Card>
          <CardHeader title={'Are you sure?'} />
          <CardContent>{message}</CardContent>
          <CardAction>
            <Grid container justify='flex-end' spacing={1}>
              <Grid item>
                <Button onClick={onCancel}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button onClick={onDelete}>Delete</Button>
              </Grid>
            </Grid>
          </CardAction>
        </Card>
      </Dialog>
    </>
  );
}
