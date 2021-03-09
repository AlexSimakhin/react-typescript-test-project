import styled from 'styled-components';

import { BulletProps } from './interface';

// Bullet style
const StyledBullet = styled.li<{active: boolean}>`
	cursor: pointer;
	height: 15px;
	width: 15px;
	background-color: #333;
	border-radius: 50%;
	display: inline-block;
	margin: 0 2px;

	${({ active }) => (!active ? 'opacity: 0.5' : '')};
`;

export const Bullet: React.FC<BulletProps> = ({ index, setSlide, activeIndex }) => {
  const updateSlide = () => {
    setSlide(index);
  };

  return (
    <StyledBullet key={index} active={index === activeIndex} onClick={updateSlide} />
  );
};
