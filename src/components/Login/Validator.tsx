import React, { useState } from 'react';

function Validator() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [passValid, setPasswordValid] = useState(false);
    const [validationMessage, setValidationMessage] = useState('');

    {/* validacion formato email */}
    const ValidEmail = (email: string) =>{
        const regex =  /^[a-zA-Z0-9._%+-]+@ucreativa.com$/;
        return regex.test(email);
    }
    {/* validacion contraseña vacia */}
    const ValidPass = (password: string) => {
        return password.trim() !== '';
      };

    
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
      };


      {/* evento Onclick para el boton Login */}
      const handleClick = () => {
        const isEmailValid = ValidEmail(email);
        const isPasswordValid = ValidPass(password);
    
        setEmailValid(emailValid);
        setPasswordValid(passValid);
    
        if (!isEmailValid || !isPasswordValid) {
          setValidationMessage('Email o contraseña inválida');
        } else {
          setValidationMessage('Redireccionando...');
        }
      };
    
  return (
    <>
    <div className="form-outline form-white mb-4">
        <input type="email" id="Email" className="form-control form-control-lg" value={email} onChange={handleEmail} />
        <label className="form-label" htmlFor="typeEmailX" >Email</label>

    </div>
    <div className="form-outline form-white mb-4">
        <input type="password" id="Pass" className="form-control form-control-lg" value={password} onChange={handlePass}/>
        <label className="form-label" htmlFor="typePasswordX">Password</label>
        
    </div>
    <div className="form-outline form-white mb-4">
    {validationMessage && <span>{validationMessage}</span>}
    </div>
    
    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleClick} >Login</button>
    </>
  )
}

export default Validator