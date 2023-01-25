import React from 'react'
import './Login.css';





export default function login() {
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
                    />
                </div>
                <div className="errorMessage">
                    <div>올바른 아이디를 입력해주세요.</div>
                </div>

                <div style={{ marginTop: "26px"}} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type='password'
                        className="input"
                        placeholder='영문대소문자, 숫자, 특수문자 포함 8자 이상 입력'
                    />
                </div>
                <div className="errorMessage">
                    <div>영문대소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                </div>
            </div>
            <button className='bottomButton'>
                확인
            </button>

        </div>
    )
}
