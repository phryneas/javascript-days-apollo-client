import { Suspense, useState, useTransition } from "react";
import { AllDogs } from "./AllDogs";
import { Dog } from "./Dog";

function App() {
  const [selectedDog, setSelectedDog] = useState("1");
  const [transitioning, startTransition] = useTransition();

  return (
    <>
      <aside>
        <AllDogs onSelect={(id) => startTransition(() => setSelectedDog(id))} />
      </aside>
      <main style={transitioning ? { opacity: 0.5 } : {}}>
        <Suspense fallback={<p>Loading with Suspense...</p>}>
          <Dog id={selectedDog} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
