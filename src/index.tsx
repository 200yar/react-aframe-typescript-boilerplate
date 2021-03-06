import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import {PagIndexCmp} from './pagIndex/PagIndexCmp';
import {Pag2DVideoCmp} from "./pag2DVideo/Pag2DVideoCmp";
import {Pag3DModel} from "./pag3DModel/Pag3DModel";
import {Pag360VideoCmp} from "./pag360Video/Pag360VideoCmp";
import './index.css';

// Global variable used to open info dialog only on first visit
declare global {
  interface Window { isFirstVisit: boolean; }
}
window.isFirstVisit = true;

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={ PagIndexCmp } />
      <Route path="/2dvideo" component ={ Pag2DVideoCmp }/>
      <Route path="/3dmodel" component ={ Pag3DModel }/>
      <Route path="/360video" component ={ Pag360VideoCmp }/>
    </div>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);

