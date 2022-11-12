import React from "react";
// This is a contact card component 

// it contains name and mobile number
const ContactCard = (props) => {
    console.log(props);
    const { id, name, mobile } = props.contact
    return (
        <div className="list w-[300px]  rounded-md mb-5  shadow-md shadow-blue-500 flex flex-row items-center   ">
                <div className="contact w-4/5 my-3 mr-3 px-5">
                    <div className="header break-all text-left">{name}</div>
                    <div className="text-left break-all">{mobile}</div>
                </div>

                <i onClick={() => props.clickHandler(id)} className="fa-solid w-1/5 text-red-600 fa-trash px-4"></i>

            </div>

    )
}
export default ContactCard