import { ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'

const cx = classNames.bind(styles);

interface IInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
}

function Button(props: IInputProps) {
  const {
    className,
    children,
    color = 'primary',
    type = 'button',
    onClick,
  } = props

  return (
    <button
      className={cx('button', `button_${color}`, className)}
      type={type}
      onClick={onClick}
    >{children}</button>
  );
}

export default memo(Button);
