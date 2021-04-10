import gql from 'graphql-tag';

const GET_ALL = gql`
  query GetStudyPlans {
    studyPlans {
      id
      title
      points
      studyDaysString
      startDate
      endDate
      createdAt
      updatedAt
      furthestCompletedPoint
      totalStudyDays
      wholePointsPerDay
      extraPoints
    }
  }
`;

// const UPDATE = gql`
//   mutation UpdateIsComplete($id: ID!, $isComplete: Boolean!) {
//     updateStudyTask(id: $id, isComplete: $isComplete) {
//       id
//     }
//   }
// `;

const StudyPlanRequests = {
  GET_ALL
  // UPDATE
};

export default StudyPlanRequests;
