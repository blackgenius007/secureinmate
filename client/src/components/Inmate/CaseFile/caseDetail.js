import React, { useState } from 'react';

const inmateData = [
  { id: 1, name: 'John Doe', caseNumber: '12345', details: 'Details for John Doe' },
  // Add more inmate data as needed
];

const InmateSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the inmateData based on the search term
    const filteredResults = inmateData.filter((inmate) => {
      return inmate.name.toLowerCase().includes(term.toLowerCase()) ||
             inmate.caseNumber.includes(term);
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or case number"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {searchResults.map((inmate) => (
          <li key={inmate.id}>
            <div>
              <strong>Name:</strong> {inmate.name}
            </div>
            <div>
              <strong>Case Number:</strong> {inmate.caseNumber}
            </div>
            <div>
              <strong>Details:</strong> {inmate.details}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InmateSearchComponent;
