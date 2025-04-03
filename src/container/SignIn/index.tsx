import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledSignIn } from "./style.ts";
import axios from "axios";

export const SignIn = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [notAllow, setNotAllow] = useState(true);


  // 보안강화 (아이디 정규식)
  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    const regex = /^[a-zA-Z0-9]{3,12}$/;
    setIdCheck(regex.test(value));
  };

  // 보안강화 (비밀번호 정규식)
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    setpasswordCheck(regex.test(value));
  };

  const config = {
    method : "post",
    url : "http://192.172.136.197:8090/v1/auth/login",
    data : {
      username : Username,
      password : password
    },
    headers : {
       "Content-Type": "application/json",
       "Accept": "application/json;charset=UTF-8",

    }

  };
  // 성공여부 알림
  const onclickConfirmButton = async () => {
  try {
    console.log("보내는 데이터:", config.data);
    const response = await axios(config);

    if (response.data.isSuccess) {
      alert("환영합니다");
      navigate("/home");
    } else {
      alert("로그인 실패");
    }
  } catch (error) {
    console.error("로그인 실패:", error.response?.data);
    alert(error.response?.data?.message || "로그인 실패");
  }
};

  // 아이디 비밀번호 입력확인
  useEffect(() => {
    if (idCheck && passwordCheck) {
      setNotAllow(false);
    } else {
      setNotAllow(true);
    }
  }, [idCheck, passwordCheck]);

  return (
    <StyledSignIn>
      <div className="si-warpper">
        <div className="si-warpper-title">
          <h1>로그인</h1>
        </div>

        {/* 아이디 */}
        <div className="si-warpper-content">
          <div className="si-warpper-input">아이디</div>
          <div className="inputWrap">
            <input
              type="text"
              name="username"
              className="inputid"
              placeholder="아이디를 입력하세요."
              value={Username}
              onChange={handleUsername}
            />
          </div>

          {/* 비밀번호 */}
          <div style={{ marginTop: "26px" }} className="si-warpper-input">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              name="password"
              className="inputpw"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={handlePassword}
            />
          </div>

          {/* 로그인 */}
          <div className="si-warpper-button">
            <button
              onClick={onclickConfirmButton}
              disabled={notAllow}
              className="si-warpper-bottom"
            >
              로그인
            </button>
          </div>
        </div>
        <hr />
        <div className="si-warpper-register">
          <div className="si-warpper-rtitle">
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </div>
        </div>
      </div>
    </StyledSignIn>
  );
};
