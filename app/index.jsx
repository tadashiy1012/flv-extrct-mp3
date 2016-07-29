import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import SelectFlv from './containers/SelectFlv.jsx';
import SelectOut from './containers/SelectOut.jsx';
import ExtractButton from './containers/ExtractButton.jsx';

const Main = () => (
  <div>
    <h1>flv-extrct-mp3</h1>
    <hr />
    <SelectFlv />
    <SelectOut />
    <ExtractButton />    
  </div>
);

const store = createStore(reducer);

render(
  <Provider store={store}><Main /></Provider>,
  document.getElementById('root')
);