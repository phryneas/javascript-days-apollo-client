import { useState } from "react";
import { AllDogs } from "./AllDogs";
import { Dog } from "./Dog";

function App() {
  const [selectedDog, setSelectedDog] = useState("1");

  return (
    <>
      <aside>
        <AllDogs onSelect={setSelectedDog} />
      </aside>
      <main>
        <Dog id={selectedDog} />
      </main>
    </>
  );
}

export default App;
