import gql from 'graphql-tag';

const BASIC_INFO_FRAGMENT = gql`
  fragment BasicStudyPlan on StudyPlan {
    id
    title
    points
    studyDaysString
    startDate
    endDate
  }
`;

const FULL_PLAN_FRAGMENT = gql`
  fragment FullStudyPlan on StudyPlan {
    ...BasicStudyPlan
    createdAt
    updatedAt
    furthestCompletedPoint
    totalStudyDays
    wholePointsPerDay
    extraPoints
  }
  ${BASIC_INFO_FRAGMENT}
`;

const GET_ALL = gql`
  query GetStudyPlans {
    studyPlans {
      ...FullStudyPlan
    }
  }
  ${FULL_PLAN_FRAGMENT}
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
      ...BasicStudyPlan
    }
  }
  ${BASIC_INFO_FRAGMENT}
`;

const DELETE = gql`
  mutation DeleteStudyPlan($id: ID!) {
    deleteStudyPlan(id: $id) {
      id
    }
  }
`;

const START_FRESH = gql`
  mutation StartFresh($id: ID) {
    startFresh(id: $id) {
      ...FullStudyPlan
    }
  }
  ${FULL_PLAN_FRAGMENT}
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
  CREATE,
  DELETE,
  START_FRESH
  // UPDATE
};

export default StudyPlanRequests;
