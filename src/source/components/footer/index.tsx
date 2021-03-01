import { Link } from 'react-router-dom';

import { StyledFooter } from './style';

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Link to={'//github.com/AlexSimakhin'} target={'_blank'} rel={'noreferrer'} className={'author'}>
        Alexandr Simakhin — React TypeScript Test Work.
        </Link>
      <Link to={'//www.figma.com/community/file/828904636600001452'} target={'_blank'} rel={'noreferrer'} className={'figma-partner'}>
        Figma Template.
        </Link>
    </StyledFooter>
  );
};