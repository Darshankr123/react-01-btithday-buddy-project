import React from "react";

const SinglePerson = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="person-img" />
      <div>
        <h4>{name}</h4>
        <h5>{age}</h5>
      </div>
    </article>
  );
};

export default SinglePerson;
