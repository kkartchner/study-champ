import { Grid } from '@material-ui/core';
import { mdiDotsVertical } from '@mdi/js';
import Icon from '@mdi/react';
import dayjs from 'dayjs';
import {
  Body2,
  Card,
  CardContent,
  CardHeader,
  H6,
  IconButton,
  ProgressCircular
} from 'ui-neumorphism';

export default function PlanCard(props) {
  const {
    id,
    title,
    points,
    studyDaysString,
    startDate,
    endDate,
    createdAt,
    updatedAt,
    furthestCompletedPoint,
    totalStudyDays,
    wholePointsPerDay,
    extraPoints,
    studyTasks,
    ...rest
  } = props;

  const percentComplete = (furthestCompletedPoint / points) * 100;
  return (
    <Card>
      <CardHeader
        title={<H6>{title}</H6>}
        action={
          <IconButton>
            <Icon path={mdiDotsVertical} size={1} />
          </IconButton>
        }
        style={{ marginBottom: -10 }}
      />
      <CardContent style={{ paddingBottom: 10 }}>
        <Grid container justify='space-around' alignItems='center'>
          <Grid item>
            <Body2>
              {points} pages by {dayjs(endDate).format('MMM D, YYYY')} (
              {wholePointsPerDay + extraPoints / totalStudyDays} pgs/study day
              starting on {dayjs(startDate).format('MMM D, YYYY')})
            </Body2>
          </Grid>
          <Grid item>
            <ProgressCircular
              value={percentComplete}
              size={64}
              width={6}
              color='var(--error)'
            >
              {percentComplete}%
            </ProgressCircular>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
