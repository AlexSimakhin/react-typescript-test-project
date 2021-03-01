import { StyledMain } from './style';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Agents } from './agents';

import bgImage from '../../assets/background-img.png';

import { characters } from './agentsList';

export const Main: React.FC = () => {
  return (
    <>
      <Header />

      <StyledMain bgImage={bgImage}>

        <Agents charactersList={characters} />
        
        <div className={'bg-image'}></div>

      </StyledMain>

      <Footer />
    </>
  );
};