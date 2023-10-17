import { useState } from "react";
import { AllDogs } from "./AllDogs";
import { Dog } from "./Dog";

function App() {
  const [selectedDog, setSelectedDog] = useState("1");

  return (
    <>
      <aside></aside>
      <main>
        <AllDogs onSelect={setSelectedDog} />
      </main>
    </>
  );
}

export default App;
