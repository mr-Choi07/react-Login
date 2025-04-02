import styled from "styled-components";

export const StyledSignIn = styled.div`
  .si-warpper {
    position: absolute;
    top: 100px;
    bottom: 0;
    width: 400px;
    height: 600px;
    padding: 0 20px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

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
      margin-top: 10px;
      color: #ef0000;
      font-size: 12px;
      height : 10px;
      margin-bottom : 50px
    }
    &-button {
      flex: 1 0 1;
      margin-top: 20px;
    }

    &-bottom {
      background-color: blue;
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

    &-register {
      flex: 1 0 1;
      margin-top: 5px;
      text-align: center;
    }

    &-rtitle {
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

  .inputid {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  .inputpw {
    width: 100%;
    outline: none;
    border: none;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
  }

  hr {
    position : relative;
    background-color: #dadada;
    margin-top: 100px;
    border: none;
    height: 0.3px;
    width: 100%;
  }
  
  a {
    position : relative;
    text-decoration: none;
    font-weight: 800 !important;
    color: #0000ff;
    cursor: pointer;
    text-align: center;
  }
`;
