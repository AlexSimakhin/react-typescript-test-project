import { Slider } from '../slider';

import { Character } from '../character';
import { CharactersList } from './../interface';

type AgentsProps = {
  charactersList: CharactersList[],
};

export const Agents: React.FC<AgentsProps> = ({ charactersList }) => {
  const onSlideChange = (index: any) => console.log(`changed to slide ${index}`);

  const charactersListJSX = charactersList.map(item => {
    return (
      <Character key={item.name} character={item} />
    );
  });

  return (
    <section className={'section'}>

      <div className={'title-block'}>
        <h1 className={'title'}>AGENTS</h1>
      </div>

      
      <Slider
        slidesAtOnce={4}
        activeIndex={0}
        onSlideChange={onSlideChange}
      >
        {charactersListJSX}
      </Slider>
      

    </section>
  );
};