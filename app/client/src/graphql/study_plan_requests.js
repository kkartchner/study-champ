import gql from 'graphql-tag';

const FRAGMENT = gql`
  fragment StudyPlan on StudyPlan {
    id
    title
    points
    studyDaysString
    startDate
    endDate
  }
`;

const GET_ALL = gql`
  query GetStudyPlans {
    studyPlans {
      ...StudyPlan
      createdAt
      updatedAt
      furthestCompletedPoint
      totalStudyDays
      wholePointsPerDay
      extraPoints
    }
  }
  ${FRAGMENT}
`;

const CREATE = gql`
  mutation CreateStudyPlan(
    $title: String
    $points: Int
    $studyDaysString: String
    $startDate: ISO8601Date
    $endDate: ISO8601Date
  ) {
    createStudyPlan(
      title: $title
      points: $points
      studyDaysString: $studyDaysString
      startDate: $startDate
      endDate: $endDate
    ) {
      ...StudyPlan
    }
  }
  ${FRAGMENT}
`;
// const UPDATE = gql`
//   mutation UpdateIsComplete($id: ID!, $isComplete: Boolean!) {
//     updateStudyTask(id: $id, isComplete: $isComplete) {
//       id
//     }
//   }
// `;

const StudyPlanRequests = {
  GET_ALL,
  CREATE
  // UPDATE
};

export default StudyPlanRequests;
