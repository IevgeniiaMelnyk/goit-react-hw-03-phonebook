import PropTypes from 'prop-types';
import { Btn } from '../Button.styled.js';

const ButtonSubmit = ({ children, type, onSubmit }) => {
  return (
    <Btn onSubmit={onSubmit} type={type}>
      {children}
    </Btn>
  );
};

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  onSubmit: PropTypes.func,
};
