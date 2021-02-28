import { Switch, Route } from 'react-router-dom';

import { book } from './book';

import { Main } from './../pages/main';

export const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        
        <Route exact path={book.root}>
          <Main />
        </Route>
     
      </Switch>
    </>
  );
};