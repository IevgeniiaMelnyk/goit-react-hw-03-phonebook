import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ onChange, value, text }) => {
  const filterId = nanoid();

  return (
    <>
      <Label htmlFor={filterId}>
        {text}
        <Input
          id={filterId}
          type="text"
          name="filter"
          placeholder="Name"
          value={value}
          onChange={onChange}
        ></Input>
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
