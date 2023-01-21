import { Component } from 'react';
import { nanoid } from 'nanoid';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit/ButtonSubmit';
import { Label, Input, Form } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const id = nanoid();
    const contact = {
      id: id,
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    form.reset();
    this.props.onSubmit(contact);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
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
        <Label>
          Number
          <Input
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
