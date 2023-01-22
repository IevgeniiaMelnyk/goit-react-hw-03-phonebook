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
      // contacts: prevState.contacts.concat(contact),
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.contacts === this.state.contacts);
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findByName = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.showFilterContacts();

    return (
      <>
        <Section secondTitle="Phone Book">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>
        <Section secondTitle="Contacts">
          <Box>
            <Filter
              onChange={this.findByName}
              value={this.state.filter}
              text="Find contacts by name"
            />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </Box>
        </Section>
      </>
    );
  }
}

export default PhoneBook;
