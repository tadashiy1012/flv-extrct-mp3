import React from 'react';
import {connect} from 'react-redux';
import {setOut} from '../actions';

const select = ({value, handleClick}) => (
  <div>
    <span>out:</span>
    <span>
      <input type="text" value={value} />
    </span>
    <span>
      <button onClick={handleClick}>select out</button>
    </span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    value: state.out
  };
};

const mapDispatchToProps = (dispatch) => {
  const handleClick = () => {
    const remote = window.require('electron').remote;
    remote.require('./util').openDir().then((resp) => {
      dispatch(setOut(resp[0]));
    });
  };
  return {
    handleClick: handleClick
  };
};

const SelectOut = connect(mapStateToProps, mapDispatchToProps)(select);

export default SelectOut;