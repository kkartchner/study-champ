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

export default function Modal({
  title,
  children,
  openButton,
  onSubmit,
  ...rest
}) {
  const [open, setOpen] = useState(false);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{openButton}</div>
      <Dialog maxWidth={500} width='90%' visible={open} onClose={onCancel}>
        <Card>
          <CardHeader title={title} />
          <CardContent>{children}</CardContent>
          <CardAction>
            <Grid container justify='flex-end' spacing={1}>
              <Grid item>
                <Button onClick={onCancel}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button onClick={onSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </CardAction>
        </Card>
      </Dialog>
    </>
  );
}
