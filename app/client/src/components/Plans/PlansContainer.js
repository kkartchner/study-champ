import React from 'react';
import { useQuery } from '@apollo/client';
import StudyPlanRequests from '../../graphql/study_plan_requests';
import CenterLoader from '../CenterLoader';
import PlanCard from './PlanCard';

export default function PlansContainer() {
  const { loading, error, data } = useQuery(StudyPlanRequests.GET_ALL);

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.studyPlans.map(plan => (
        <PlanCard key={`plan-${plan.id}`} {...plan} />
      ))}
    </div>
  );
}
