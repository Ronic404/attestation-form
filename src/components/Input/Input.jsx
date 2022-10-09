import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { capitalizeText } from '../../utils/capitalizeText';
import { phoneMask } from '../../utils/phoneMask';

import { ReactComponent as CrossIcon } from '../../assets/icons/Cross.svg';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input(props) {
  const {
    className, value, label, placeholder, type, error, maxLength, capitalize, onChange,
  } = props

  const [isBlockFocused, setIsBlockFocused] = useState(false);
  const [isLabelFocused, setIsLabelFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const refInput = useRef(null);

  useEffect(() => {
    if (type === 'date') {
      setInputType('text');
    }
  }, []);

  useEffect(() => {
    if (value) {
      setIsLabelFocused(true);
    }
  }, [value]);

  const handleFocusBlock = () => {
    setIsBlockFocused(true);
    setIsLabelFocused(true);
    refInput.current?.focus();
  };

  const handleBlurBlock = () => {
    setIsBlockFocused(false);
    if (!value) {
      setIsLabelFocused(false);
    }
  };

  const handleChangeInput = (event) => {
    let { value } = event.target
    if (capitalize) value = capitalizeText(value)
    if (type === 'tel') value = phoneMask(event, refInput)
    onChange(value)
  }

  const handleFocusInput = () => {
    if (type === 'date') {
      setInputType('date');
    }
  }

  const handleBlurInput = () => {
    if (type === 'date' && !value) {
      setInputType('text');
    }
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
        {label && <p className={cx('label', { label_focus: isLabelFocused, label_active: !isBlockFocused && value })}>{label}</p>}
        <input
          ref={refInput}
          className={cx('input', { input_capitalize: capitalize })}
          value={value}
          type={inputType}
          placeholder={isBlockFocused && placeholder ? placeholder : ''}
          maxLength={maxLength}
          max={type === 'date' ? '9999-01-01' : undefined}
          onChange={handleChangeInput}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
        />
        <CrossIcon className={cx('icon', { icon_hide: !isBlockFocused })} onClick={() => onChange('')} />
      </div>
      {error && <p className={cx('error-text')}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.number,
  capitalize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
  error: '',
  maxLength: undefined,
  capitalize: false,
};

export default Input;
