import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 데모데이터
const User = {
    id: 'test',
    password: 'test1234!'
}

// 로그인 페이지
export default function SignIn() {
  const navigate = useNavigate();
  const [id , setId] = useState('');
  const [idCheck, setIdCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // 보안강화(비밀번호 정규식)
  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9]{4,12}$/;
    if (regex.test(id)) {
        setIdCheck(true);
    } else {
        setIdCheck(false);
    }
  }

  // 보안강화(비밀번호 정규식)
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = 
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(password)) {
        setpasswordCheck(true);
    } else {
        setpasswordCheck(false);
    }
  }

  // 성공여부 알림
  const onclickConfirmButton = () => {
    if (id === User.id && password === User.password) {
        alert('로그인 성공!');
        navigate("/home");
    } else {
        alert('로그인 실패!');
    }
  }

  // 이메일 비밀번호 입력확인
  useEffect(() => {
    if (idCheck && passwordCheck) {
        setNotAllow(false);
    } else {
        setNotAllow(true);
    }
  }, [idCheck, passwordCheck]);

  return (
    <div className="Sign-container">
      <div className="titleWrap">
        <br />
        <h1>로그인</h1>
      </div>

      {/* 이메일 */}
      <div className="content-Wrap">
        <div className="inputTitle">아이디</div>
        <div className="inputWrap">
          <input 
          type="text"
          className="input" 
          placeholder="아이디를 입력하세요."
          value={id}
          onChange={handleId}/>
        </div>
      </div>
      
      {/* 비밀번호 */}
      <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
      <div className="inputWrap">
        <input 
          type="password"
          className="input" 
          placeholder='영문, 숫자, 특수문자 포함 8자 이상'
          value={password}
          onChange={handlePassword}/>
      </div>

      {/* 에러메세지(비밀번호) */}
      <div className="errorMessageWrap">
        {
          !passwordCheck && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
      </div>
      
      {/* 로그인 */}
      <div className='buttonWrap'>
        <button onClick={onclickConfirmButton} disabled={notAllow} className="bottomButton">
          로그인
        </button>
      </div>
      
      <hr/>
      <div className='registerWrap'>
        <div className='registerTitle'>
          계정이 없으신가요? <Link to="/signup">가입하기</Link>
        </div>
      </div>
    </div>

    
  );
    
}




