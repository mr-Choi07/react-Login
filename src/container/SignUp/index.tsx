import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledSignUp } from "./style.ts";
import axios from "axios";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [idConfirm, setIdConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatched, setIsMatched] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  // 보안강화(아이디 정규식)
  const handleId = (e) => {
    setUsername(e.target.value);
    const regex = /^[a-zA-Z0-9]{3,12}$/;
    if (regex.test(Username)) {
      setIdCheck(true);
    } else {
      setIdCheck(false);
    }
  };

  // 보안강화(이메일 정규식)
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  // 보안강화(비밀번호 정규식)
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (regex.test(password)) {
      setpasswordCheck(true);
    } else {
      setpasswordCheck(false);
    }
  };

  // 아이디 중복 유효성 검사
  const handleIdConfirm = (e) => {
    setIdConfirm(e.target.value);
    if (Username === e.target.value) {
      setIsMatched(true);
    } else {
      setIsMatched(true);
    }
  };

  // 비밀번호 재입력 유효성 검사
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password === e.target.value) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  };

  const config = {
    method : "post",
    url : "http://192.172.136.197:8090/v1/auth/register",
    data : {
      email : email,
      username : Username,
      password : password
    },
    headers : {
       "Content-Type": "application/json",
       "Accept": "application/json;charset=UTF-8"
    }
  };

  // 회원가입완료 알림
  const onClickConfirmButton = async () => {

    console.log("보내는 데이터:", config.data);
    const response = await axios(config);
    
    alert("회원가입이 완료되었습니다.");
    navigate("/signin");
  };

  useEffect(() => {
    if (emailCheck && passwordCheck && isMatched) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [emailCheck, passwordCheck, isMatched]);

  return (
    <StyledSignUp>
      <div className="si-warpper">
        <div className="si-warpper-title">
          <h1>회원가입</h1>
        </div>

        {/* 이메일 */}
        <div className="si-warpper-content">
          <div className="si-warpper-input">이메일 주소</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="이메일 주소를 입력하세요."
              value={email}
              onChange={handleEmail}
            />
          </div>

          {/* 에러메세지(이메일) */}
          <div className="si-warpper-error">
            {!emailCheck && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          {/* 아이디 */}
          <div style={{ marginTop: "26px" }}>
            <div className="si-warpper-input">아이디</div>
            <div className="inputWrap">
              <input
                type="text"
                className="input"
                placeholder="4 ~ 12자리 사이의 아이디"
                value={Username}
                onChange={handleId}
              />
            </div>
          </div>

          {/* 에러메세지(아이디) */}
          <div className="si-warpper-error">
            {!idCheck && Username.length > 0 && (
              <div>4 ~ 12자리 사이의 아이디를 입력해주세요.</div>
            )}
          </div>

          {/* 비밀번호 */}
          <div style={{ marginTop: "26px" }} className="si-warpper-input">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePassword}
            />
          </div>

          {/* 에러메세지(비밀번호) */}
          <div className="si-warpper-error">
            {!passwordCheck && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div style={{ marginTop: "26px" }} className="si-warpper-input">
            비밀번호 확인
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 재입력해주세요."
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>

          {/* 에러메세지(비밀번호) */}
          <div className="si-warpper-error">
            {!isMatched && <div>비밀번호가 올바르지 않습니다.</div>}
          </div>
        </div>

        {/* 가입 */}
        <div className="si-warpper-button">
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="si-warpper-bottom"
          >
            가입
          </button>
        </div>

        <hr />
        <div className="si-warpper-sign">
          <div className="si-warpper-stitle">
            계정이 있으신가요? <Link to="/signin">로그인하기</Link>
          </div>
        </div>
      </div>
    </StyledSignUp>
  );
};
