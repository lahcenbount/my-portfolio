import React from 'react';
import MessageCard from './components/admin/MessageCard';

function Admin() {
  const messages = [
    {
      id: 1, // Added an id for the key prop
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      message: 'Hello, I am interested in your services. Please contact me at your earliest convenience.'
    },

    {
      id: 2, // Added an id for the key prop
      name: 'AAA BB',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      message: 'Hello, I am interested in your services. Please contact me at your earliest convenience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div>




        {
          messages.map((msg) => ( 
            <MessageCard
              name={msg.name}
              email={msg.email}
              phone={msg.phone}
              message={msg.message}
            />
           )
          )
        }



      </div>
    </div>
  );
}

export default Admin;