import { mdiDotsVertical } from '@mdi/js';
import Icon from '@mdi/react';
import dayjs from 'dayjs';
import {
  Body2,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  H6,
  IconButton
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
        <Body2>
          {points} pages by {dayjs(endDate).format('MMM D, YYYY')} (
          {wholePointsPerDay + extraPoints / totalStudyDays} pgs/study day
          starting on {dayjs(startDate).format('MMM D, YYYY')})
        </Body2>
      </CardContent>
    </Card>
  );
}
