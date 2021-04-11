import { Grid, Menu } from '@material-ui/core';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Body2,
  Card,
  CardContent,
  CardHeader,
  H6,
  ProgressCircular
} from 'ui-neumorphism';
import ThreeDotMenu from '../ThreeDotMenu';
import PlanForm from './PlanForm';

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

  const [anchorEl, setAnchorEl] = useState(null);

  const percentComplete = (furthestCompletedPoint / points) * 100;

  const options = [
    <PlanForm plan={{ title, points, studyDaysString, startDate, endDate }}>
      Edit Plan
    </PlanForm>,
    <span>Delete Plan</span>,
    <span>Start Fresh</span>
  ];

  return (
    <>
      <Card>
        <CardHeader
          title={<H6>{title}</H6>}
          action={<ThreeDotMenu options={options} />}
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
      <Menu></Menu>
    </>
  );
}
