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

export default function ConfirmationDialog({
  message,
  mutation,
  objectId,
  confirmButtonText = 'Confirm',
  children
}) {
  const [open, setOpen] = useState(false);

  const [performMutation, { loading, error, data }] = useMutation(mutation);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    performMutation({ variables: { id: objectId } }).then(() => {
      window.location.reload(); // TODO: Replace with a component reload instead
    });
    handleClose();
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog maxWidth={500} width='90%' visible={open} onClose={handleClose}>
        <Card>
          <CardHeader title={'Are you sure?'} />
          <CardContent>{message}</CardContent>
          <CardAction>
            <Grid container justify='flex-end' spacing={1}>
              <Grid item>
                <Button onClick={handleClose}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button onClick={handleConfirm}>{confirmButtonText}</Button>
              </Grid>
            </Grid>
          </CardAction>
        </Card>
      </Dialog>
    </>
  );
}
