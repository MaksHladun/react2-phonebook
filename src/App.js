import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form'
import ContactList from './Components/Contacts/ContactList';
import Filter from './Components/Filter/Filter';
import './App.css';

class App extends Component {
   state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
   }
  
  formSubmitHandler =({ name, number })=>{
    if(this.dontAddContacts(name)){
      alert(`${name} is already in contacts`);
      return
    }
    const newContact = { id: uuidv4(), name, number };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
    
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  dontAddContacts =(name)=>{
    name = name.toLowerCase();
    return (
      this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(name),
      ).length > 0
    );
  }

  filterContact =()=>{
    const contactFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter),
    );
  }
  
  deleteContact = (contactId)=>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }
  
  render() {

    return (
      <div className='container'>
      <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}/>
      
        <h1>Contacts</h1>
        <Filter onChange={this.changeFilter} />
        <ContactList book={this.filterContact()} 
        deleteClick={this.deleteContact}/>
     
      </div>


    )
  }
}

export default App;
