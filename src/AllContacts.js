import React, { useState } from "react";
import { SimpleModal } from "./Modal";

function AllContacts({ Users, toggleState }) {
  const [userId, setUserId] = useState();
  const [searchTerm, seSearchTerm] = useState();

  const toggleUser = (index) => {
    setUserId(index);
  };

  const listOfContacts = Users
    //search
    ?.filter((value) => {
      if (searchTerm === undefined) {
        return value;
      } else if (
        value.name.last.toLowerCase().includes(searchTerm?.toLowerCase())
      ) {
        return value;
      } else if (
        value.name.first.toLowerCase().includes(searchTerm?.toLowerCase())
      ) {
        return value;
      }
    })
    //sort by last name
    .sort((a, b) => (a.name.last > b.name.last) - (a.name.last < b.name.last))
    .map((User, index) => {
      return (
        <h3 key={index} onClick={() => toggleUser(User.name.last)}>
          <SimpleModal
            surname={User.name.last}
            name={User.name.first}
            phone={User.phone}
            street={User.location.street.name}
            city={User.location.city}
            country={User.location.country}
          />
        </h3>
      );
    });

  return (
    <div>
      <div
        className={toggleState === 0 ? "content  active-content" : "content"}
      >
        <p>
          <input
            type="text"
            onChange={(event) => {
              seSearchTerm(event.target.value);
            }}
            placeholder="search..."
            className="search"
          />
          {listOfContacts}
        </p>
      </div>
    </div>
  );
}

export default AllContacts;
