import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(props) {
  const {
    className, children, color, isSubmit, onClick,
  } = props

  return (
    <button
      className={cx('button', `button_${color}`, className)}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
    >{children}</button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: '',
  color: 'primary',
  isSubmit: false,
  onClick: () => {},
};

export default Button;
