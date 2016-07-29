import React from 'react';
import {connect} from 'react-redux';
import {setSrc} from '../actions';

const select = ({value, handleClick}) => (
  <div>
    <span>src:</span>
    <span>
      <input type="text" value={value} />
    </span>
    <span>
      <button onClick={handleClick}>select flv</button>
    </span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    value: state.src
  };
};

const mapDispatchToProps = (dispatch) => {
  const handleClick = () => {
    const remote = window.require('electron').remote;
    remote.require('./util').openFile().then((resp) => {
      dispatch(setSrc(resp[0]));
    });
  };
  return {
    handleClick: handleClick
  };
};

const SelectFlv = connect(mapStateToProps, mapDispatchToProps)(select);

export default SelectFlv;