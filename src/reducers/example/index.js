import { GET_EXAMPLE, GET_DETAIL } from "../../actions/exampleAction";

const initialState = {
  getExampleResult: false,
  getExampleLoading: false,
  getExampleError: false,

  getDetailResult: false,
  getDetailLoading: false,
  getDetailError: false,
};

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXAMPLE:
      return {
        ...state,
        getExampleResult: action.payload.data,
        getExampleLoading: action.payload.loading,
        getExampleError: action.payload.errorMessage,
      };

    case GET_DETAIL:
      return {
        ...state,
        getDetailResult: action.payload.data,
        getDetailLoading: action.payload.loading,
        getDetailError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default ExampleReducer;
