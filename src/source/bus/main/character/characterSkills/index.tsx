import styled from 'styled-components';

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
  border: 1.3px solid #F8F8F8;

  .skill {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #383e42;
    }
  }
`;

type CharacterSkillsProps = {
  skills: string[],
};

export const CharacterSkills: React.FC<CharacterSkillsProps> = ({ skills }) => {
  const skillsJSX = skills.map((item, index) => <div key={index} className={'skill'}>{item}</div>);
  
  return (
    <Skills>
      {skillsJSX}
    </Skills>
  );
};