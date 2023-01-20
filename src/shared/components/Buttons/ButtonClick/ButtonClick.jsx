import PropTypes from 'prop-types';
import { Btn } from '../Button.styled.js';

const ButtonClick = ({ children, type, onClick }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

export default ButtonClick;

ButtonClick.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
};

ButtonClick.defaultProps = {
  type: 'button',
};
