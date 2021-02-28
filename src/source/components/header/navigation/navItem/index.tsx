import { Link } from 'react-router-dom';
import { book } from './../../../../navigation/book';

import droplistIcon from '../../../../img/droplistIcon.svg';

type NavItemProps = {
  title: string,
  droplist: boolean,
};

export const NavItem: React.FC<NavItemProps> = ({title, droplist}) => {
  return (
    <Link to={book.root} className={'nav__dropdown'} >
      {title}
      {droplist && <img className={'nav__droplist-icon'} src={droplistIcon} alt={'Droplist'} /> }
    </Link>
  );
};