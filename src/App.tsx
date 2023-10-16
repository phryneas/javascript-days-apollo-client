import { TypedDocumentNode, gql, useQuery } from "@apollo/client";
import { useState } from "react";

function App() {
  const [selectedDog, setSelectedDog] = useState(1);

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

const AllDogsQuery: TypedDocumentNode<{
  allDogs: {
    id: number;
    name: string;
    Image: {
      id: number;
      src: string;
      attribution: string;
    };
    Breed: {
      id: number;
      name: string;
    };
  }[];
}> = gql`
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
`;

function AllDogs({ onSelect }: { onSelect?: (id: number) => void }) {
  const { loading, data } = useQuery(AllDogsQuery);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data?.allDogs?.map((dog) => (
        <li key={dog.id} onClick={() => onSelect?.(dog.id)}>
          <h2>{dog.name}</h2>
          <p>the {dog.Breed.name}</p>
          <img src={dog.Image.src} alt={dog.Image.attribution} />
        </li>
      ))}
    </ul>
  );
}

const dogQuery: TypedDocumentNode<{
  Dog: {
    id: number;
    name: string;
    Breed: {
      id: number;
      name: string;
      origin: string;
    };
    Image: {
      id: number;
      src: string;
      attribution: string;
    };
  };
}> = gql`
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
`;

function Dog({ id }: { id: number }) {
  const { loading, data } = useQuery(dogQuery, { variables: { id } });

  if (loading) return <p>Loading...</p>;

  return (
    <article>
      <h2>{data?.Dog?.name}</h2>
      <img src={data?.Dog?.Image.src} alt={data?.Dog?.Image.attribution} />

      <p>
        <strong>Breed:</strong> {data?.Dog?.Breed.name}
      </p>
      <p>
        <strong>Breed Origin:</strong> {data?.Dog?.Breed.origin}
      </p>
    </article>
  );
}

export default App;
