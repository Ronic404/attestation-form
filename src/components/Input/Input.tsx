import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames/bind';

import { capitalizeText } from '../../utils/capitalizeText';

import { ReactComponent as CrossIcon } from '../../assets/icons/Cross.svg';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'>

interface IInputProps extends HTMLInputProps {
  label: string
  error?: string
  capitalize?: boolean
  mask?: (event: ChangeEvent<HTMLInputElement>, refInput: React.RefObject<HTMLInputElement>) => string
  onChange: (value: string) => void
  onBlur?: () => void
}

function Input(props: IInputProps) {
  const {
    className,
    value,
    label,
    placeholder,
    type = 'text',
    error,
    maxLength,
    capitalize = false,
    mask,
    onChange,
    onBlur,
  } = props

  // eslint-disable-next-line
  const [_, setIsTooLong] = useState<boolean>(false);
  const [isBlockFocused, setIsBlockFocused] = useState<boolean>(false);
  const [isLabelFocused, setIsLabelFocused] = useState<boolean>(false);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      setIsLabelFocused(true);
    }
  }, [value]);

  const handleFocusBlock = (): void => {
    setIsBlockFocused(true);
    setIsLabelFocused(true);
    refInput.current?.focus();
  };

  const handleBlurBlock = (): void => {
    setIsBlockFocused(false);
    if (!value) {
      setIsLabelFocused(false);
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    let { value } = event.target
    setIsTooLong(false)
    if (maxLength && (value.length > maxLength)) {
      // @ts-ignore
      if (event.nativeEvent.data) {
        value = `${value.substring(0, maxLength)}...`
        setIsTooLong(true)
      } else {
        value = value.split('...')[0].substring(0, maxLength)
        setIsTooLong(false)
      }
    }
    if (capitalize) value = capitalizeText(value)
    if (mask) value = mask(event, refInput)
    onChange(value)
  }

  const handleBlurInput = (): void => {
    onBlur?.()
  }

  return (
    <div className={cx('component', className, { component_error: error })}>
      <div
        className={cx('block', { block_focus: isBlockFocused })}
        onFocus={handleFocusBlock}
        onBlur={handleBlurBlock}
        tabIndex={1}
        role="textbox"
      >
        {label &&
          <label
            htmlFor={label}
            className={cx('label', { label_focus: isLabelFocused, label_active: !isBlockFocused && value })}
          >{label}</label>
        }
        <input
          id={label}
          ref={refInput}
          className={cx('input', { input_capitalize: capitalize })}
          value={value}
          type={type}
          placeholder={isBlockFocused && placeholder ? placeholder : ''}
          max={type === 'date' ? '9999-01-01' : undefined}
          onChange={handleChangeInput}
          onBlur={handleBlurInput}
        />
        <CrossIcon className={cx('icon', { icon_hide: !isBlockFocused })} onClick={() => onChange('')} role="button" />
      </div>
      {error && <p className={cx('error-text')}>{error}</p>}
    </div>
  );
}

export default memo(Input);
