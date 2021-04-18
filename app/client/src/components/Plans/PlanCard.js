import { Grid } from '@material-ui/core';
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
import StudyPlanRequests from '../../graphql/study_plan_requests';
import ConfirmationDialog from '../ConfirmationDialog';
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

  const percentComplete = Math.round((furthestCompletedPoint / points) * 100);

  const options = [
    <PlanForm plan={{ id, title, points, studyDaysString, startDate, endDate }}>
      Edit Plan
    </PlanForm>,
    <ConfirmationDialog
      objectId={id}
      mutation={StudyPlanRequests.DELETE}
      cacheQuery={StudyPlanRequests.GET_ALL}
      message='Deleting this study plan is a permanent action.'
      confirmButtonText='Delete'
    >
      Delete Plan
    </ConfirmationDialog>,
    <ConfirmationDialog
      objectId={id}
      mutation={StudyPlanRequests.START_FRESH}
      cacheQuery={StudyPlanRequests.GET_ALL}
      message="Starting fresh will recalculate the study tasks from today's date"
      confirmButtonText='Start Fresh'
    >
      Start Fresh
    </ConfirmationDialog>
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
    </>
  );
}
