import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ title }) => {
  return (
    <>
      <Label>
        {title}
        <Input type="text" name="name" placeholder="Name"></Input>
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
