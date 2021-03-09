import styled from 'styled-components';

import { ArrowProps, Direction } from './interface';

// Arrow Style
const StyledI = styled.i<{direction: Direction}> `
	border: solid #333;
	border-width: 0 5px 5px 0;
	display: inline-block;
	padding: 3px;
	height: 20px;
	width: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.4;
	}

	transform: ${({ direction }) => direction === 'left' ? 'rotate(135deg)' : 'rotate(-45deg)'};

	${({ direction }) => direction === 'left' ? 'margin-left: 1em;' : 'margin-right: 1em;'}
`;

export const Arrow: React.FC<ArrowProps> = ({ onClick, direction }) => {
  return (
    <div onClick={onClick}>
      <StyledI direction={direction} />
    </div>
  );
};
