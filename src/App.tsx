import { Suspense, useState, useTransition } from "react";
import { AllDogs } from "./AllDogs";
import { Dog } from "./Dog";

function App() {
  const [selectedDog, setSelectedDog] = useState("1");
  const [transitioning, startTransition] = useTransition();

  function onDogSelected(id: string) {
    startTransition(() => {
      setSelectedDog(id);
    });
  }

  return (
    <>
      <aside>
        <AllDogs onSelect={onDogSelected} />
      </aside>
      <main style={{ opacity: transitioning ? 0.5 : 1 }}>
        <Suspense fallback={<>Loading State!!!</>}>
          <Dog id={selectedDog} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
