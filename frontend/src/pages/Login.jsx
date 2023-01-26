import React, { useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios';





function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');


    const [idValid, setIdValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)
    const [notAllow, setNotAllow] = useState(true)


    const onSubmitHandler =  (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/user/login',
            {
                userId: userId,
                password: password,
            })
            .then((response) => {
                console.log(response);
                alert('로그인에 성공했습니다');
                localStorage.setItem('id', response.data.id)
                localStorage.setItem('pw', response.data.password)
                document.location.href = '/'
                
                
            })

            .catch(function (error) {
                alert('로그인에 실패했습니다!');
            });
    }

    const handleId = (e) => {
        setUserId(e.target.value);
        const regex =
            /^[a-z0-9_]{4,12}$/;
        if (regex.test(userId)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }
    const handlePw = (e) => {
        setPassword(e.target.value);
        const regex =
            /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,24}$/;
        if (regex.test(password)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    useEffect(() => {
        if(idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [idValid , pwValid]);






    return (
    <div className='page'>
            <div className="titleWrap">
                로그인
            </div>
            <div className="contentWrap">
                <div className="inputTitle">아이디</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input"
                        placeholder='4~12자 영문소문자, 숫자 입력'
                        value={userId}
                        onChange={handleId}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !idValid && userId.length > 0 && (
                            <div>올바른 아이디를 입력해주세요.</div>
                        )
                        
                    }
                    
                </div>

                <div style={{ marginTop: "26px"}} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type='password'
                        className="input"
                        placeholder='영문대소문자, 숫자, 특수문자 포함 8자 이상 입력'
                        value={password}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !pwValid && password.length > 0 && (
                            <div>영문대소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                    }
                </div>
            </div>
            <button disabled={notAllow} onClick={onSubmitHandler} className='bottomButton'>
                확인
            </button>

        </div>
    )
}

export default Login;
