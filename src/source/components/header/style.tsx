import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 0 calc(16px + 66 * ((100vw - 320px) / (1920 - 320)));
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background: #1F2326;
  color: white;

  .header__left-side {
    color: blue;
  }

  .header__left-side {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logotips {
    display: flex;
    align-items: center;
  }

  .riot-games {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-line {
    width: 1px;
    height: 28px;
    background: #FFFFFF;
    margin: 0 calc(16px + 24 * ((100vw - 320px) / (1920 - 320)));
  }

  .valorant {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 100%;
    max-width: 850px;
    margin-left: calc(16px + 40 * ((100vw - 320px) / (1920 - 320)));
    
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      color: #FFFFFF;
      font-family: Montserrat, sans-serif;
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: 11px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  .nav__dropdown {
    display: flex;
    align-items: center;
  }

  .nav__droplist-icon {
    margin-left: 8px;
  }

  .user-profile {
    display: flex;
    align-items: center;
    margin-left: 32px;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-right: 4px;

    p {
      margin-left: 16px;
      color: #FFFFFF;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .user-settings {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    cursor: pointer;

    &:hover .user-settings__droplist {
      width: 8px;
      height: 7px;
    }
  }
`;