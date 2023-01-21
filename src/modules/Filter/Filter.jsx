import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ title, value, onChange }) => {
  return (
    <>
      <Label>
        {title}
        <Input
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
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
