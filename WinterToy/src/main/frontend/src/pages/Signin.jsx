import React, { useEffect, useState } from 'react';
import './Signin.css';
import axios from 'axios';


function Signin() {

    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');


    const [nameValid, setNameValid] = useState(false)
    const [idValid, setIdValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)
    const [notAllow, setNotAllow] = useState(true)


    const onSubmitHandler =  (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/user/signup',
            {
                userName: userName,
                userId: userId,
                password: password,
            })
            .then(() => {
                console.log("씨발 들어왔다");
            })

            .catch(function (error) {
                console.log("{userName, userId, password}");
            });
    }




    const handleName = (e) => {
        setUserName(e.target.value);
        const regex =
            new RegExp(/^[가-힣]{2,5}$/)
        if (regex.test(userName)) {
            setNameValid(true);
        } else {
            setNameValid(false);
        }
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
        if(nameValid && idValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [nameValid , idValid , pwValid]);




    return (
        <div className='page'>
            <div className="titleWrap">
                회원 가입
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이름</div>
                <div className="inputWrap">
                    <input
                        type='text'
                        className="input"
                        placeholder='홍길동'
                        value={userName}
                        onChange={handleName}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !nameValid && userName.length > 0 && (
                            <div>올바른 이름을 입력해주세요.</div>
                        )
                    }
                </div>

                <div style={{ marginTop: "26px"}} className="inputTitle">아이디</div>
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
    );
}



export default Signin;