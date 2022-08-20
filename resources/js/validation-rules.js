import { defineRule } from 'vee-validate';
import * as yup  from 'yup';

defineRule('required', value => {
    if (!value || !value.length) {
      return 'Este campo es obligatorio';
    }
    return true;
});

defineRule('email', value => {
    //El campo está vacío, debe pasar
    if (!value || !value.length) {
      return true;
    }
    // Verifique si el correo electrónico
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
      return 'Este campo debe ser un correo electrónico válido';
    }
    return true;
});

defineRule('minLength', (value, [limit]) => {
    // El campo está vacío, por lo que debe pasar
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `Este campo debe ser al menos ${limit} caracteres`;
    }
    return true;
});

defineRule('minMax', (value, [min, max]) => {
    // El campo está vacío, por lo que debe pasar
    if (!value || !value.length) {
      return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
      return `Este campo debe ser mayor que ${min}`;
    }
    if (numericValue > max) {
      return `esteCampoDebeSerMenorQue ${max}`;
    }
    return true;
});

