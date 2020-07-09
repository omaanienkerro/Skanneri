import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';
import ProductNotFound from '../productNotFound';
import { HistoryDisplay } from '../history';

const Main = () => (
  <main className="main__wrapper">
    <Switch>
      <Route exact path='/' component={CameraHandler}/>
      <Route exact path='/tuote/404' component={ProductNotFound} />
      <Route exact path='/tuote/:id' component={ProductDisplay}/>
      <Route exact path='/historia' component={HistoryDisplay} />
    </Switch>
  </main>
);

export default Main;
