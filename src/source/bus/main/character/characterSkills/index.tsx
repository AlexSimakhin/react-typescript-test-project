import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const Skills = styled.div`
  position: fixed;
  z-index: 999;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 75px;
  width: inherit;
  transform: translate(15px,15px);
  background: #1F2326;
  border: 2px solid #F8F8F8;

  .skill {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #383e42;
    }

    svg {
      width: 50%;
      height: 50%;

      path {
        fill: #F8F8F8;

        &.active {
          fill: #1F2326;
        }
      }
    }
  }
`;

type CharacterSkillsProps = {
  skills: any[],
};

export const CharacterSkills: React.FC<CharacterSkillsProps> = ({ skills }) => {
  const skillsJSX = skills.map((item, index) => {
    return (
      <ReactSVG src={item} className={'skill'} key={index} />
    );
  });
  
  return (
    <Skills>
      {skillsJSX}
    </Skills>
  );
};