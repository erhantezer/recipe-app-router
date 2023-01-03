import React, { useState } from 'react'
import { 
  FormContainer, 
  Header, 
  LoginContainer, 
  StyledButton, 
  StyledForm, 
  StyledImg, 
  StyledInput

} from './Login.style';
import mealSvg from "../../assets/meal.svg";
import {useNavigate} from "react-router-dom"

const Login = () => {
 const [formValues, setFormValues] =useState({
    username:"",
    password:"",
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(formValues));
    setFormValues({
      username:"",
      password:""
    })
    navigate(-1)
  }

  const handleChange= (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg}/>
        <Header>{"<E.T/> "}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput 
          type="text" 
          name='username'
          placeholder="username" 
          required 
          value={formValues.username}
          onChange={handleChange}
          />
          <StyledInput 
          type="password" 
          placeholder="password" 
          required
          name='password'
          value={formValues.password}
          onChange={handleChange}
          />
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login