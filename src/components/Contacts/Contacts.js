import React from 'react';
import ContactsItem from '../ContactsItem/ContactsItem'

function Contacts ({contacts,onRemoveContact}){
    return(
        <div>
            <ul>
                {contacts.map(({id,name,number})=>(
                    <ContactsItem 
                        key={id}
                        name={name}
                        number={number}
                        onRemove={()=>onRemoveContact(id)}
                    />
                ))}
            </ul>                
        </div>
    )
}

export default Contacts;
