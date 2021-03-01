import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 calc(16px + 66 * ((100vw - 320px) / (1920 - 320)));
  background: rgb(255, 255, 255);

  a {
    font-size: 12px;
    color: #1F2326;
    opacity: 0.5;
    transition: 1s cubic-bezier(0.23, 1, 0.320, 1);

    &:hover {
      font-size: 12px;
      color: #FF4656;
      opacity: 1;
    }
  }

  .author {
    margin-right: 16px;
  }
`;