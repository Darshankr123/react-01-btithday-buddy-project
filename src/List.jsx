import React from "react";
import SinglePerson from "./SinglePerson";

const List = ({ people }) => {
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
