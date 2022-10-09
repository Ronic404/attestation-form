import { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { useInput } from '../../hooks/useInput';

import { getDate } from '../../utils/getDate';
import {
  maxDate, minDate, regexValidator, require,
} from '../../utils/validators';

import { REGEX } from '../../constants/regex';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

const FORM_CONFIG = {
  name: {
    validators: [require],
  },
  phone: {
    validators: [require, regexValidator(REGEX.phone)],
  },
  email: {
    validators: [require, regexValidator(REGEX.email)],
  },
  date: {
    validators: [require, minDate('01.01.2010'), maxDate(getDate(new Date()))],
  },
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName, errorName] = useInput(FORM_CONFIG.name.validators, isSubmitted)
  const [phone, setPhone, errorPhone] = useInput(FORM_CONFIG.phone.validators, isSubmitted)
  const [email, setEmail, errorEmail] = useInput(FORM_CONFIG.email.validators, isSubmitted)
  const [date, setDate, errorDate] = useInput(FORM_CONFIG.date.validators, isSubmitted)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    const errors = errorName || errorPhone || errorEmail || errorDate

    if (isSubmitted && !errors) {
      console.log(name.trim(), phone.trim(), email.trim(), date.trim())
    }
  }

  return (
    <div className={cx('app')}>
      <form className={cx('form')} onSubmit={handleSubmitForm}>
        <h2 className={cx('title')}>Форма</h2>

        <Input
          className={cx('input')}
          value={name}
          label="ФИО"
          placeholder="Введите ФИО"
          error={errorName}
          maxLength={50}
          capitalize
          onChange={setName}
        />

        <Input
          className={cx('input')}
          value={phone}
          label="Телефон"
          placeholder="Введите телефон"
          type="tel"
          error={errorPhone}
          onChange={setPhone}
        />

        <Input
          className={cx('input')}
          value={email}
          label="Email"
          placeholder="Введите email"
          maxLength={30}
          error={errorEmail}
          onChange={setEmail}
        />

        <Input
          className={cx('input')}
          value={date}
          label="Дата"
          placeholder="Введите дату"
          type="date"
          error={errorDate}
          onChange={setDate}
        />

        <Button
          className={cx('button')}
          isSubmit
        >Продолжить</Button>
      </form>
    </div>
  );
}

export default App;
