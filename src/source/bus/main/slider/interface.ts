export interface SliderProps {
    activeIndex?: number;
    auto?: number;
    children?: React.ReactNode[];
    hasArrows?: boolean;
    hasBullets?: boolean;
    onSlideChange?: (slide: number) => void;
    setSlideCustom?: (slide: number) => number;
    slidesAtOnce?: number;
}
