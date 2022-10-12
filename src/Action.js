import { USER } from "./Type";

export const fetchData = () => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        dispatch(
          //   type: USER,
          //   payload: res,
          fetchUrers(res)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchUrers = (data) => {
  return {
    type: USER,
    payload: data,
  };
};
