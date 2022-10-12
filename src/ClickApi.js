import React from "react";
import { connect } from "react-redux";
import { fetchData } from "./Action";

const ClickApi = (props) => {
  const clickHandle = () => {
    props.fetchData2();
  };
  console.log(props.users);
  return (
    <div>
      <button onClick={clickHandle}>fetch</button>
      <>
        {props.users.map((item) => (
          <p>{item.name}</p>
        ))}
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData2: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickApi);
