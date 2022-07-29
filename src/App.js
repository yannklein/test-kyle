import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Data from "./Data";

export default function App() {
  const listOfCards = Data.map((CardsData) => {
    return <Cards items={CardsData} />;
  });
  console.log(listOfCards);
  return (
    <main>
      <Navbar />
      <div className="list-cards">{listOfCards}</div>
    </main>
  );
}
