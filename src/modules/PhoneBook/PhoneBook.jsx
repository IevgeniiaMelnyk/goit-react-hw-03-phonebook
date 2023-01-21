import { Component } from 'react';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import { Box } from './PhoneBook.staled';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.concat(contact),
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findByName = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };

  render() {
    return (
      <>
        <Section secondTitle="Phone Book">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>
        <Section secondTitle="Contacts">
          <Box>
            <Filter
              title="Find contacts by name"
              value={this.state.filter}
              onChange={this.findByName}
            />
            <ContactList
              contacts={this.state.contacts}
              onDeleteContact={this.deleteContact}
            />
          </Box>
        </Section>
      </>
    );
  }
}

export default PhoneBook;
