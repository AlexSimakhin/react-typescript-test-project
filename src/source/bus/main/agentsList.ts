import { CharactersList } from './interface';

import phoenix from '../../assets/phoenix.png';
import jett from '../../assets/jett.png';
import sova from '../../assets/sova.png';
import sage from '../../assets/sage.png';


export const characters:CharactersList[] = [
  {
    name: 'PHOENIX',
    nationality: 'United Kingdom',
    img: phoenix,
    skills: ['1', '2', '3', '4'],
  },
  {
    name: 'JETT',
    nationality: 'South Korea',
    img: jett,
    skills: ['1', '2', '3', '4'],
  },
  {
    name: 'SOVA',
    nationality: 'Russia',
    img: sova,
    skills: ['1', '2', '3', '4'],
  },
  {
    name: 'SAGE',
    nationality: 'China',
    img: sage,
    skills: ['1', '2', '3', '4'],
  }
];