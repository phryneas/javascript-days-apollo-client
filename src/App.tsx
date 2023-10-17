import { useQuery } from "@apollo/client";
import { graphql } from "./gql";
import { useState } from "react";

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

// prettier-ignore
const AllDogsQuery = graphql(`#graphql
  query AllDogs {
    allDogs {
      id
      name
      Image {
        id
        src
        attribution
      }
      Breed {
        id
        name
      }
    }
  }
`);

function AllDogs({ onSelect }: { onSelect?: (id: string) => void }) {
  const { loading, data } = useQuery(AllDogsQuery);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.allDogs?.map((dog) => (
        <li key={dog?.id} onClick={() => onSelect?.(dog!.id)}>
          <h2>{dog?.name}</h2>
          <p>the {dog?.Breed?.name}</p>
          <img src={dog?.Image?.src} alt={dog?.Image?.attribution} />
        </li>
      ))}
    </ul>
  );
}

// prettier-ignore
const dogQuery = graphql(`#graphql
  query Dog($id: ID!) {
    Dog(id: $id) {
      id
      name
      Breed {
        id
        name
        origin
      }
      Image {
        id
        src
        attribution
      }
    }
  }
`);

function Dog({ id }: { id: string }) {
  const { loading, data } = useQuery(dogQuery, { variables: { id } });

  if (loading) return <p>Loading...</p>;

  return (
    <article>
      <h2>{data?.Dog?.name}</h2>
      <img src={data?.Dog?.Image?.src} alt={data?.Dog?.Image?.attribution} />

      <p>
        <strong>Breed:</strong> {data?.Dog?.Breed?.name}
      </p>
      <p>
        <strong>Breed Origin:</strong> {data?.Dog?.Breed?.origin}
      </p>
    </article>
  );
}

export default App;
