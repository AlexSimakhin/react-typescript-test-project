export interface BulletComponentProps {
    isActive: boolean;
    onClick: () => void;
}

export interface BulletProps {
    index: number;
    setSlide: (index: number) => void;
    activeIndex: number;
}
