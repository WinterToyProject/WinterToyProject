import React, { useEffect, useState } from 'react';
import './Signin.css';
import axios from 'axios';


function Signin() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');


    const [nameValid, setNameValid] = useState(false)
    const [idValid, setIdValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)
    const [notAllow, setNotAllow] = useState(true)
    /*const [posts, setPosts] = useState([]);*/


    /*const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/user/signup');
        setName(response.data);
        setId(response.data);
        setPw(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);*/


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const name = e.target.value;
        const id = e.target.value;
        const pw = e.target.value;
        await axios.post('http://localhost:8080/user/signup', {name, id, pw});
        /*fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                name,
                id,
                pw,
        })
        }) */
    };



    const handleName = (e) => {
        setName(e.target.value);
        const regex =
            new RegExp(/^[가-힣]{2,5}$/)
        if (regex.test(name)) {
            setNameValid(true);
        } else {
            setNameValid(false);
        }
    }
    const handleId = (e) => {
        setId(e.target.value);
        const regex =
            /^[a-z0-9_]{4,12}$/;
        if (regex.test(id)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
            /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,24}$/;
        if (regex.test(pw)) {
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
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !nameValid && name.length > 0 && (
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
                        value={id}
                        onChange={handleId}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !idValid && id.length > 0 && (
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
                        value={pw}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessage">
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문대소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                    }
                </div>
            </div>

            <form onSubmit={onSubmitHandler}>
                <button disabled={notAllow} className='bottomButton'>
                    확인
                </button>
            </form>
        </div>
    );
}


export default Signin;