import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Form as FForm } from 'react-final-form';
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
  onSubmit = values => alert(JSON.stringify(values)),
  formProps,
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
          <FForm onSubmit={onSubmit} {...formProps}>
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <CardContent>{children}</CardContent>
                <CardAction>
                  <Grid container justify='flex-end' spacing={1}>
                    <Grid item>
                      <Button onClick={onCancel}>Cancel</Button>
                    </Grid>
                    <Grid item>
                      <Button onClick={handleSubmit}>Submit</Button>
                    </Grid>
                  </Grid>
                </CardAction>
              </form>
            )}
          </FForm>
        </Card>
      </Dialog>
    </>
  );
}
