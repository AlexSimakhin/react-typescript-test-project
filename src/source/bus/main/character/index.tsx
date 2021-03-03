import styled, { css } from 'styled-components';

import { CharacterSkills } from './characterSkills';

import { CharactersList } from './../interface';

const CharacterPicture = styled.div<{ image: string }>`
  position: absolute;
  z-index: 99;
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

  &.phoenix-bg {
    background-size: 205%;
    background-position: -90px -60px;
    transition: 1s;

    &:hover {
      background-position: calc(-116px - (60px)) -60px;
      background-size: 235%;
    }
  }

  &.jett-bg {
    background-size: 175%;
    background-position: -35px 8px;
    transition: 1s;

    &:hover {
      background-position: -60px 8px;
      background-size: 205%;
    }
  }

  &.sova-bg {
    background-size: 270%;
    background-position: -155px -5px;
    transition: 1s;

    &:hover {
      background-position: -200px -5px;
      background-size: 300%;
    }
  }

  &.sage-bg {
    background-size: 260%;
    background-position: -210px -30px;
    transition: 1s;

    &:hover {
      background-position: -270px -30px;
      background-size: 290%;
    }
  }
  
`;

type CharacterProps = {
  character: CharactersList,
};

export const Character: React.FC<CharacterProps> = ({ character }) => {
  const { name, nationality, img, skills, className } = character;
  return (
    <div className={'char-list'}>
      <div className={'char-card'}>
        <h3>{name}</h3>
        <p>{nationality}</p>

        <CharacterSkills skills={skills} />
        <CharacterPicture className={className} image={img} />

      </div>
    </div>
  );
};