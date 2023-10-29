import { useState } from "react";
import data from "./data.js";
import SinglePerson from "./SinglePerson.jsx";
import List from "./List.jsx";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => setPeople([])}
        >
          clear
        </button>
      </section>
    </main>
  );
};
export default App;
