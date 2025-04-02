import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledSignIn } from "./style.ts";

export const SignIn = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // 보안강화 (아이디 정규식)
  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9]{3,12}$/;
    if (regex.test(id)) {
      setIdCheck(true);
    } else {
      setIdCheck(false);
    }
  };

  // 보안강화 (비밀번호 정규식)
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (regex.test(password)) {
      setpasswordCheck(true);
    } else {
      setpasswordCheck(false);
    }
  };

  // 성공여부 알림
  const onclickConfirmButton = () => {
    if (id === id && password === password) {
      alert("환영합니다");
      navigate("/home");
    } else {
      alert("로그인 실패");
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
          <br />
          <h1>로그인</h1>
        </div>

        {/* 아이디 */}
        <div className="si-warpper-content">
          <div className="si-warpper-input">아이디</div>
          <div className="inputWrap">
            <input
              type="text"
              className="inputid"
              placeholder="아이디를 입력하세요."
              value={id}
              onChange={handleId}
            />
          </div>

          {/* 에러메세지 (아이디) */}
          <div className="si-warpper-error">
            {!idCheck && id.length > 0 && (
              <div>4 ~ 12자리 사이의 아이디입니다.</div>
            )}
          </div>

          {/* 비밀번호 */}
          <div style={{ marginTop: "26px" }} className="si-warpper-input">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="inputpw"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePassword}
            />
          </div>

          {/* 에러메세지 (비밀번호) */}
          <div className="si-warpper-error">
            {!passwordCheck && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
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
