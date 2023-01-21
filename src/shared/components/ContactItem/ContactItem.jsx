import PropTypes from 'prop-types';
import ButtonClick from '../Buttons/ButtonClick/ButtonClick';
import { Text } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <ButtonClick type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </ButtonClick>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
