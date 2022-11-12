//import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactCard from './ContactCard';
// import { uuid } from 'uuidv4';
// import { v4 as uuidv4 } from 'uuid';

const { v4: uuidv4 } = require('uuid');
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
      //console.log(contact);
      setContacts([...contacts,{ id : uuidv4(), ...contact}])
  }
  //filter contacts based on delete button clicked or not
  // this function takes id arg of contact whose delete button is cliked
  const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) =>{
        return contact.id !== id;

      })
      setContacts(newContactList)
  }
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);
  // retrive contacts from local storage when page loads
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    
    if(retriveContacts) {
      //console.log("this is retrive contacts");
      //console.log(retriveContacts);
      setContacts(retriveContacts)
     
    };
  },[])
  // store in local storage
  useEffect(() => {
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  
  return (
    <div className="App flex flex-col items-center">
      
      
        <Header/>

        <AddContact AddContactHandler={AddContactHandler} />
        
        <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
        
      </div>

    
  );
}

export default App;
