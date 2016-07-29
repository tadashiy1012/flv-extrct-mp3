import React from 'react';
import {connect} from 'react-redux';
import {setDone} from '../actions';

const button = ({src, out, handleClick, result}) => (
  <div>
    <button onClick={() => {
      if (src !== '' && out !== '') { handleClick(src, out); }
    }}>extract</button>
    <br />
    <p>{result}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    src: state.src,
    out: state.out,
    result: state.result
  };
};

const mapDispatchToProps = (dispatch) => {
  const handleClick = (src, out) => {
    const remote = window.require('electron').remote;
    remote.require('./util').extract(src, out).then(() => {
      dispatch(setDone('ok'));
    });
  };
  return {
    handleClick: handleClick
  };
};

const ExtractButton = connect(mapStateToProps, mapDispatchToProps)(button);

export default ExtractButton;