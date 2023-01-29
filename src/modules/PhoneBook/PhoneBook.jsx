import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import { Box } from './PhoneBook.staled';
import items from 'modules/items';

class PhoneBook extends Component {
  state = {
    contacts: [...items],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length)
      // items && items.length
      this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmit = ({ name, number }) => {
    const id = nanoid();

    const contact = {
      id: id,
      name: name,
      number: number,
    };
    if (
      this.state.contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      // contacts: prevState.contacts.concat(contact),
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
    if (!filter) {
      return contacts;
    }
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
