import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import { Label, Input, Form } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    this.resetState();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label htmlFor={this.nameId}>
          Name
          <Input
            id={this.nameId}
            value={this.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
          />
        </Label>
        <Label htmlFor={this.numberId}>
          Number
          <Input
            id={this.numberId}
            value={this.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Number"
            required
          />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
