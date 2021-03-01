import styled, { css } from 'styled-components';

import { CharacterSkills } from './characterSkills';

import { CharactersList } from './../interface';

const CharacterPicture = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${props =>
    props.image &&
    css`
      background: url(${props.image}) no-repeat;
    `
  };

  background-size: 205%;
  background-position: -90px -60px;
  transition: 1s;

  &:hover {
    background-position: -116px -60px;
    background-size: 215%;
  }
`;

type CharacterProps = {
  character: CharactersList,
};

export const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, nationality, img, skills } = character;
  return (
    <div className={'char-list'}>
      <div className={'char-card'}>
        <h3>{name}</h3>
        <p>{nationality}</p>

        <CharacterSkills skills={skills} />
        <CharacterPicture image={img} />

      </div>
    </div>
  );
};