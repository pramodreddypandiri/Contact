import React from "react";
import ContactCard from "./ContactCard";

// this component contains all contact cards takes contact as props
const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        //console.log(contact);
        return (
            <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id} />
        )
    } 
    )
    return (
        <div className="flex flex-col items-start my-3">
            <h2 className="text-left text-xl my-3 font-semibold ">Contact list</h2>
            
                {renderContactList}
            
        </div>



    )
}
export default ContactList