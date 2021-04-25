import React from 'react';
import { useQuery } from '@apollo/client';
import StudyPlanRequests from '../../graphql/study_plan_requests';
import CenterLoader from '../CenterLoader';
import PlanCard from './PlanCard';
import { H6 } from 'ui-neumorphism';

export default function PlansView() {
  const { loading, error, data } = useQuery(StudyPlanRequests.GET_ALL, {
    fetchPolicy: 'network-only'
  });

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.studyPlans.length ? (
        data.studyPlans.map(plan => (
          <PlanCard key={`plan-${plan.id}`} {...plan} />
        ))
      ) : (
        <H6 style={{ width: '100%', textAlign: 'center' }}>
          No Plans. Click the plus button to add one!
        </H6>
      )}
    </div>
  );
}
