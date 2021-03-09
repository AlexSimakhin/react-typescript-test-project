export type Direction = 'left' | 'right';

export interface ArrowComponentProps {
    direction: Direction;
    onClick: () => void;
}

export interface ArrowProps {
    direction: Direction;
    onClick: () => void;
}

