import { FormEvent, useReducer, useState } from 'react';
import classNames from 'classnames/bind';

import Input from '../Input';
import Button from '../Button';

import { useInput } from '../../hooks/useInput';

import { getDate } from '../../utils/getDate/getDate';
import { dateMask, nameMask, phoneMask } from '../../utils/masks';
import { regexValidator, requireValidator, dateValidator } from '../../utils/validators';

import {
  REGEX_DATE, REGEX_EMAIL, REGEX_NAME, REGEX_PHONE,
} from '../../constants/regex';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

const FORM_CONFIG = {
  name: {
    validators: [
      requireValidator('Обязательное поле'),
      regexValidator(REGEX_NAME, 'Неверный формат, пример: Иванов Иван'),
    ],
    mask: nameMask,
    dirty: false,
  },
  phone: {
    validators: [
      requireValidator('Обязательное поле'),
      regexValidator(REGEX_PHONE, 'Неверный формат, пример: +7 (123) 123-12-12'),
    ],
    mask: phoneMask,
    dirty: false,
  },
  email: {
    validators: [
      requireValidator('Обязательное поле'),
      regexValidator(REGEX_EMAIL, 'Неверный формат, пример: htc-cs@mail.ru'),
    ],
    dirty: false,
  },
  date: {
    validators: [
      requireValidator('Обязательное поле'),
      regexValidator(REGEX_DATE, 'Неверный формат, пример: 01.01.2020'),
      dateValidator(
        { date: '01.01.2010', error: 'Слишком маленькая дата' },
        { date: getDate(new Date()), error: 'Слишком большая дата' },
        'Неверный день или месяц',
      ),
    ],
    mask: dateMask,
    dirty: false,
  },
}

function App() {
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [name, setName, errorName] = useInput(FORM_CONFIG.name.validators)
  const [phone, setPhone, errorPhone] = useInput(FORM_CONFIG.phone.validators)
  const [email, setEmail, errorEmail] = useInput(FORM_CONFIG.email.validators)
  const [date, setDate, errorDate] = useInput(FORM_CONFIG.date.validators)

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setIsSubmitted(true)
    const errors = errorName || errorPhone || errorEmail || errorDate

    if (isSubmitted && !errors) {
      // Так как данные никуда не уходят, просто вывожу их в консоль
      // eslint-disable-next-line no-console
      console.log(name.trim().substring(0, 50), phone.trim(), email.trim().substring(0, 30), date.trim())
    }
  }

  const handleInputBlur = (name: keyof typeof FORM_CONFIG) => {
    FORM_CONFIG[name].dirty = true
    forceUpdate()
  }

  return (
    <div className={cx('app')}>
      <form className={cx('form')} onSubmit={handleSubmitForm}>
        <h2 className={cx('title')}>Форма</h2>

        <Input
          className={cx('input')}
          value={name}
          label="ФИО"
          placeholder="Иванов Иван Иванович"
          error={isSubmitted || FORM_CONFIG.name.dirty ? errorName : ''}
          maxLength={50}
          capitalize
          mask={FORM_CONFIG.name.mask}
          onChange={setName}
          onBlur={() => handleInputBlur('name')}
        />

        <Input
          className={cx('input')}
          value={phone}
          label="Телефон"
          placeholder="+7 (123) 123-12-12"
          type="tel"
          error={isSubmitted || FORM_CONFIG.phone.dirty ? errorPhone : ''}
          mask={FORM_CONFIG.phone.mask}
          onChange={setPhone}
          onBlur={() => handleInputBlur('phone')}
        />

        <Input
          className={cx('input')}
          value={email}
          label="Email"
          placeholder="htc-cs@mail.ru"
          maxLength={30}
          error={isSubmitted || FORM_CONFIG.email.dirty ? errorEmail : ''}
          onChange={setEmail}
          onBlur={() => handleInputBlur('email')}
        />

        <Input
          className={cx('input')}
          value={date}
          label="Дата"
          placeholder="01.01.2010"
          error={isSubmitted || FORM_CONFIG.date.dirty ? errorDate : ''}
          mask={FORM_CONFIG.date.mask}
          onChange={setDate}
          onBlur={() => handleInputBlur('date')}
        />

        <Button
          className={cx('button')}
          type="submit"
        >Продолжить</Button>
      </form>
    </div>
  );
}

export default App;
