import { CharactersList } from './interface';

import phoenix from '../../assets/phoenix.png';
import phoenix1 from '../../assets/skills/phoenix1.svg';
import phoenix2 from '../../assets/skills/phoenix2.svg';
import phoenix3 from '../../assets/skills/phoenix3.svg';
import phoenix4 from '../../assets/skills/phoenix4.svg';

import jett from '../../assets/jett.png';
import jett1 from '../../assets/skills/jett1.svg';
import jett2 from '../../assets/skills/jett2.svg';
import jett3 from '../../assets/skills/jett3.svg';
import jett4 from '../../assets/skills/jett4.svg';

import sova from '../../assets/sova.png';
import sova1 from '../../assets/skills/sova1.svg';
import sova2 from '../../assets/skills/sova2.svg';
import sova3 from '../../assets/skills/sova3.svg';
import sova4 from '../../assets/skills/sova4.svg';

import sage from '../../assets/sage.png';
import sage1 from '../../assets/skills/sage1.svg';
import sage2 from '../../assets/skills/sage2.svg';
import sage3 from '../../assets/skills/sage3.svg';
import sage4 from '../../assets/skills/sage4.svg';

export const characters:CharactersList[] = [
  {
    name: 'PHOENIX',
    nationality: 'United Kingdom',
    img: phoenix,
    skills: [
      phoenix1,
      phoenix2,
      phoenix3,
      phoenix4
    ],
    className: 'phoenix-bg',
  },
  {
    name: 'JETT',
    nationality: 'South Korea',
    img: jett,
    skills: [jett1, jett2, jett3, jett4],
    className: 'jett-bg',
  },
  {
    name: 'SOVA',
    nationality: 'Russia',
    img: sova,
    skills: [sova1, sova2, sova3, sova4],
    className: 'sova-bg',
  },
  {
    name: 'SAGE',
    nationality: 'China',
    img: sage,
    skills: [sage1, sage2, sage3, sage4],
    className: 'sage-bg',
  },
];