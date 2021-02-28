import { NavItem } from './navItem/index';

interface MenuList {
  name: string
  droplist: boolean
}

const menuList: MenuList[] = [
  { name: 'GAME', droplist: false},
  { name: 'CHAMPIONS', droplist: false },
  { name: 'NEWS', droplist: true },
  { name: 'PATCH NOTES', droplist: false },
  { name: 'DISCOVER', droplist: true },
  { name: 'ESPORTS', droplist: false },
  { name: 'UNIVERSE', droplist: false },
  { name: 'SHOP', droplist: false },
  { name: 'SUPPORT', droplist: false }
];

export const Navigation: React.FC = () => {
  const listTSX = menuList.map(({name, droplist}) => {
    return (
      <NavItem
        key={name}
        title={name}
        droplist={droplist}
      />
    );
  });

    return (
      <nav className={'nav'}>
        <ul>
          {listTSX}
        </ul>
      </nav>
    );
  };