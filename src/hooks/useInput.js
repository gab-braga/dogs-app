import React from 'react';

const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGEX_CPF = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;
const REGEX_CEP = /^\d{5}-?\d{3}$/;

export default (initial, options) => {
  const [value, setValue] = React.useState(initial);
  const [error, setError] = React.useState(null);

  function onChange(event) {
    const { value } = event.target;
    setValue(value);
    if (error) validate(value);
  }

  function onBlur(event) {
    const { value } = event.target;
    validate(value);
  }

  function validate(value) {
    const { required, regex, pattern } = options;
    if (required && !value) {
      setError('Este campo é obrigatório.');
    } else if (regex && regex instanceof RegExp && !regex.test(value)) {
      setError('Por favor, verifique o formato e tente novamente.');
    } else if (pattern && pattern === 'email' && !REGEX_EMAIL.test(value)) {
      setError('Por favor, insira um endereço de e-mail válido.');
    } else if (pattern && pattern === 'cpf' && !REGEX_CPF.test(value)) {
      setError('Por favor, insira um endereço de e-mail válido.');
    } else if (pattern && pattern === 'cep' && !REGEX_CEP.test(value)) {
      setError('Por favor, insira um endereço de e-mail válido.');
    } else {
      setError(null);
      return true;
    }
    return false;
  }

  return { value, error, onChange, onBlur, validate: () => validate(value) };
};
