import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, selectedMovie, numberOfTickets });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Book Movie Tickets</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
       
        <div>
          <label htmlFor="tickets" className="block mb-1">Number of Tickets:</label>
          <input
            type="number"
            id="tickets"
            value={numberOfTickets}
            onChange={(e) => setNumberOfTickets(parseInt(e.target.value))}
            min="1"
            max="10"
            required
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Book Tickets</button>
      </form>
    </div>
  );
}

export default Form;
