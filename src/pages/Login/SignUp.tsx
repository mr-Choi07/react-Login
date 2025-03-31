import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// 로그인 페이지
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isMatched, setIsMatched] = useState(true);
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setpasswordCheck] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
 
    const navigate = useNavigate();
    
    // 보안강화(이메일 정규식)
    const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(email)) {
        setEmailCheck(true);
    } else {
        setEmailCheck(false);
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

  // 비밀번호 재입력 유효성 검사
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatched(password === e.target.value);
  };
  
  // 회원가입완료 알림
  const onClickConfirmButton = () => {
    alert('회원가입이 완료되었습니다.')
    navigate('/');
  }

    useEffect(() => {
        if (emailCheck && passwordCheck) {
            setNotAllow(false);
            return;
        } else {
            setNotAllow(true);
        }
    }, [emailCheck, passwordCheck]);

  return (
    <div className="Sign-container">
        <div className='titleWrap'>
            <h1>회원가입</h1>
        </div>

        {/* 이메일 */}
        <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div className="inputWrap">
                <input 
                    type="text"
                    className="input" 
                    placeholder="이메일 주소를 입력하세요."
                    value={email}
                    onChange={handleEmail}/>
            </div>

            {/* 에러메세지(이메일) */}
            <div className="errorMessageWrap">
                {
                    !emailCheck && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                )}
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

            {/* 비밀번호 확인 */}
            <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호 확인</div>
            <div className="inputWrap">
                <input 
                    type="password"
                    className="input" 
                    placeholder='비밀번호를 재입력해주세요.'
                    value={confirmPassword}
                    onChange={handleConfirmPassword}/>
            </div>

            {/* 에러메세지(비밀번호) */}
            <div className="errorMessageWrap">
                {
                    !isMatched &&(
                    <div>비밀번호가 올바르지 않습니다.</div>  
                )}
            </div> 
        </div>

    {/* 가입 */}
    <div className='buttonWrap'>
        <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            가입
        </button>
    </div>
        
        <hr/>
        <div className='signinWrap'>
            <div className='loginTitle'>
                계정이 있으신가요? <Link to="/signin">로그인하기</Link>
            </div>
        </div>
    </div>
  )

}
