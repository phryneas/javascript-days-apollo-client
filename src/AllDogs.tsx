import { useQuery } from "@apollo/client";
import { graphql } from "./gql";

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
export function AllDogs({ onSelect }: { onSelect?: (id: string) => void }) {
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
