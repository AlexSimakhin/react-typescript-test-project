import styled from 'styled-components';

export const StyledMain = styled.main<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: calc(100vh - 135px);
  background: #FF4656;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.2;
    background: url(${props => props.bgImage}) no-repeat;
    background-position: center center;
    background-size: cover;
    mix-blend-mode: multiply;
  }

  .section {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    padding: 0 calc(16px + 66 * ((100vw - 320px) / (1920 - 320)));
  }

  .title-block {
    width: 142px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 80px 0 0;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font: 500 calc(50px + 54 * ((100vh - 640px) / (1080 - 640))) 'Druk', sans-serif;
    line-height: 136px;
    letter-spacing: 0.1em;

    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);

    transform: rotateZ(90deg);

    &:hover {
      cursor: default;
    }
  }

  .char-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .character-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  } */

  .char-card {
    position: relative;
    display: flex;
    width: 300px;
    height: 667px;
    overflow: hidden;
  }

  .char-card::after {
    content: '';
    position: absolute;
    width: 1100%;
    height: 1100%;
    top: 20px;
    left: -550%;
    background: #1F2326;
    transform-origin: 50% 0;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .char-card h3 {
    position: fixed;
    z-index: 9999;
    /* z-index: 9; */

    font: 500 48px 'Druk', sans-serif;
    letter-spacing: 0.1em;

    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);

    transform-origin: 0 100%;
    transform: translate(-30px, -30px) rotateZ(90deg);

    &:hover {
      cursor: default;
    }
  }

  .char-card p {
    position: absolute;
    z-index: 8888;
    /* z-index: 8; */

    font: 500 16px 'Druk', sans-serif;
    letter-spacing: 0.1em;
    color: #FF4656;

    transform-origin: 0 100%;
    transform: translate(30px, 10px) rotateZ(90deg);

    &:hover {
      cursor: default;
    }
  }
`;