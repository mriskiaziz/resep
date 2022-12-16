import axios from "axios";

export const GET_EXAMPLE = "GET_EXAMPLE";
export const GET_DETAIL = "GET_DETAIL";

export const getExample = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_EXAMPLE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://masak-apa-tomorisakura.vercel.app/api/recipes/1",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: GET_EXAMPLE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: GET_EXAMPLE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetail = (key) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_DETAIL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://masak-apa-tomorisakura.vercel.app/api/recipe/"+key,
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: GET_DETAIL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: GET_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
