import { Link } from 'react-router-dom';

import { book } from './../../navigation/book';

import { StyledHeader } from './style';

import riotLogo from '../../assets/RiotGamesLogo.svg';
import valorantLogo from '../../assets/ValorantLogo.svg';
import droplistIcon from '../../assets/droplistIcon.svg';
import userAvatar from '../../assets/UserAvatar.png';

import { Navigation } from './navigation/index';


export const Header: React.FC = () => {
  const user = {
    name: 'Alex',
    avatar: userAvatar,
  };

  const { name, avatar } = user;
  
  return (
    <StyledHeader>
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

      <div className={'user-profile'}>

        <Link to={'/'} className={'user-info'}>
          <img className={'user-avatar'} src={avatar} alt={'Avatar'} />
          <p>{name}</p>
        </Link>

        <div className={'user-settings'}>
          <img className={'user-settings__droplist'} src={droplistIcon} alt={'Settings'} />
        </div>

      </div>
    </StyledHeader>
  );
};