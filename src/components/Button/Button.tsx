import { ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'

const cx = classNames.bind(styles);

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'default'
}

function Button(props: IButtonProps) {
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
