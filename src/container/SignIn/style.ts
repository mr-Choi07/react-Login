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
    margin-top : 150px;
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
    margin-top: 20px;
    margin-bottom : 60px;
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
    margin-top: 120px;
    border: none;
    height: 0.3px;
    width: 100%;
  }
  
  a {
    position : relative;
    text-decoration: none;
    font-weight: 800 !important;
    color:rgb(0, 0, 255);
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