import { Link } from 'react-router-dom';

import { book } from './../../navigation/book';

import riotLogo from '../../img/RiotGamesLogo.svg';
import valorantLogo from '../../img/ValorantLogo.svg';
import { Navigation } from './navigation/index';


export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__left-side'}>

        <div className={'logotips'}>

          <Link to={book.root} className={'riot-games'}>
            <img
              src={riotLogo}
              alt={'Riot'}
            />
          </Link>

          <div className={'logo-line'}></div>

          <Link to={book.root} className={'valorant'}>
            <img
              src={valorantLogo}
              alt={'Valorant'}
            />
          </Link>

        </div>

        <Navigation />

      </div>

      {/* <UserProfile /> */}
    </header>
  );
};