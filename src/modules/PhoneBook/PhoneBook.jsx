import { nanoid } from 'nanoid';
import { Component } from 'react';
import Section from 'shared/components/Section/Section';
import ButtonClick from 'shared/components/Buttons/ButtonClick/ButtonClick';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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
    this.setState(prevState => ({
      contacts: prevState.contacts.concat(contact),
    }));
    form.reset();
  };

  render() {
    return (
      <>
        <Section secondTitle="Phone Book">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section secondTitle="Contacts">
          <Filter title="Find contacts by name" />
          <ul>
            {this.state.contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <p>{number}</p>
                  <ButtonClick type="button">Delete contact</ButtonClick>
                </li>
              );
            })}
          </ul>
        </Section>
      </>
    );
  }
}

export default PhoneBook;
