// Validates emails before submitting
export const validateEmail = (setForgotPasswordError, email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      if (email.length < 5 && 
        !email.startsWith('#') && !email.startsWith('@') && !email.startsWith('!')  &&  !email.startsWith('$') &&
        !email.startsWith('%') && !email.startsWith('^') && !email.startsWith('&') && !email.startsWith('*') &&
        !email.startsWith('(') && !email.startsWith(')') && !email.startsWith('-') && !email.startsWith('_') &&
        !email.startsWith('+') && !email.startsWith('=') && !email.startsWith('`') && !email.startsWith('~') &&
        !email.startsWith('{') && !email.startsWith('}') && !email.startsWith('\\') && !email.startsWith('|') &&
        !email.startsWith(';') && !email.startsWith(':') && !email.startsWith('"') && !email.startsWith("'") &&
        !email.startsWith('<') && !email.startsWith('>') && !email.startsWith(',') && !email.startsWith('.') &&
        !email.startsWith('/') && !email.startsWith('?') && !email.startsWith('0') && !email.startsWith('1') && 
        !email.startsWith('2') && !email.startsWith('3') && !email.startsWith('4') && !email.startsWith('5') && 
        !email.startsWith('6') && !email.startsWith('7') && !email.startsWith('8') && !email.startsWith('9')
        ){
        setForgotPasswordError(false);
      }else {
        setForgotPasswordError(true);
      }
    } else {
      setForgotPasswordError(false);
    }
  }

  // Validates password before submitting
  export const validatePassword = (password, setHasUpper, setHasLower, setHasSymbol, setHasNumber, setHasEightChar) => {

    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;

    const uppercasePassword =   uppercaseRegExp.test(password);
    const lowercasePassword =   lowercaseRegExp.test(password);
    const digitsPassword =      digitsRegExp.test(password);
    const specialCharPassword = specialCharRegExp.test(password);
    const minLengthPassword =   minLengthRegExp.test(password);
    
    uppercasePassword ? setHasUpper(true) : setHasUpper(false);
    lowercasePassword ? setHasLower(true) : setHasLower(false);
    digitsPassword ? setHasNumber(true) : setHasNumber(false);
    specialCharPassword ? setHasSymbol(true) : setHasSymbol(false);
    minLengthPassword ? setHasEightChar(true) : setHasEightChar(false);
    
  }