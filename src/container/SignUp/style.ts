import styled from "styled-components";

export const StyledSignUp = styled.div`
  .si-warpper {
    position: absolute;
    top: 100px;
    bottom: 0;
    width: 400px;
    height: 700px;
    padding: 0 20px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-top : 150px;

    &-input {
      font-size: 12px;
      font-weight: 600;
      color: white;
    }

    &-title {
      text-align: center;
      color: white;
    }

    &-error {
      margin-top: 8px;
      color: #ef0000;
      height : 5px;
      font-size: 12px;
    }
    &-button {
      flex: 1 0 1;
      margin-top: 20px;
    }

    &-bottom {
      background-color: #0000ff;
      width: 100%;
      height: 48px;
      border: none;
      font-weight: 700;
      border-radius: 64px;
      color: white;
      cursor: pointer;
    }

    &-bottom:disabled {
      background-color: #dadada;
      color: white;
    }

    &-sign {
      flex: 1 0 1;
      margin-top: 5px;
      text-align: center;
    }

    &-stitle {
      font-size: 14px;
      font-weight: 400;
      color: #919191;
      text-align: center;
    }
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  hr {
    background-color: #dadada;
    margin-top: 60px;
    border: none;
    height: 0.3px;
    width: 100%;
  }

  a {
    text-decoration: none;
    font-weight: 800 !important;
    color: #0000ff !important;
    cursor: pointer;
    text-align: center;
  }

    height: 1300px;
    background-color: rgb(41, 65, 171);
    background-image: url(https://www-growth.scdn.co/static/home/bursts.svg);
    background-size: 175%;
    background-position: 46% 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
