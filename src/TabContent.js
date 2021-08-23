import React, { useState } from "react";
import { LETTERS } from "./utils";
import { SimpleModal } from "./Modal";

export const TabContent = ({ Users, toggleState }) => {
  const [userId, setUserId] = useState();
  const [searchTerm, seSearchTerm] = useState();

  const toggleUser = (index) => {
    setUserId(index);
  };

  const content = LETTERS.map((letter, i) => {
    //list of contacts with first letter equal to clicked letter
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
      //filter those with first letter
      .filter((user) => user.name.last[0] === letter.toUpperCase())
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
      <div
        className={
          toggleState === i + 1 ? "content  active-content" : "content"
        }
      >
        <h2 className="letter">{letter.toUpperCase()}</h2>
        <p>
          {" "}
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
    );
  });
  return content;
};

export default TabContent;
