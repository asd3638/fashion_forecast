import React, {useState} from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import api from '../Api/api'

function SigninForm() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setNick] = useState('');
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputNick = (e) => {
        setNick(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        api.post('auth/join', {
            email: inputEmail,
            password: inputPw,
            nickName: inputNick
        })
        .then(res => {
            if(res.data === "dup_email"){
               console.log("중복된 이메일")
            } else if(res.data === "dup_nickname"){
                console.log("중복된 닉네임")
            } else if(res.data === "success"){
                //회원가입 성공
            }
        })
        .catch()
    }
    const handleCancel = () => {
        // 다시 홈 화면으로 돌아가기
        document.location.href = '/home';
    }
    return (
        <Card className="signinCard">
            <Card.Header className="text-center" as="h5">회원가입</Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일주소</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={inputEmail} onChange={handleInputEmail}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" value={inputPw} onChange={handleInputPw}>
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type="text" placeholder="Enter nickname" value={inputNick} onChange={handleInputNick}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" value={inputPw} onChange={handleInputPw}>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div style={{marginLeft: "150px"}}>
                        <Button variant="outline-primary" size="sm" type="submit">
                            가입하기
                        </Button>
                        <Button style={{marginLeft: '10px'}} variant="outline-primary" size="sm" onClick={handleCancel}>
                            취소
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};
export default SigninForm;