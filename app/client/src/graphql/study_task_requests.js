import gql from 'graphql-tag';

const GET_ALL = gql`
  query GetStudyTasks {
    studyTasks {
      id
      startPoint
      endPoint
      dueDate
      studyPlan {
        id
        title
      }
      isComplete
    }
  }
`;

const UPDATE = gql`
  mutation UpdateIsComplete($id: ID!, $isComplete: Boolean!) {
    updateStudyTask(id: $id, isComplete: $isComplete) {
      id
      isComplete
    }
  }
`;

const StudyTaskRequests = {
  GET_ALL,
  UPDATE
};

export default StudyTaskRequests;
