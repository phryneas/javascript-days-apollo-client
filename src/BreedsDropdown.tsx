import { useQuery } from "@apollo/client";
import { graphql } from "./gql";

// prettier-ignore
graphql(`#graphql
  fragment BreedsFragment on Breed {
    id
    name
    origin
  }
`);

// prettier-ignore
const breedsQuery = graphql(`#graphql
  query Breeds {
    allBreeds {
      ...BreedsFragment
    }
  }
`);

export function BreedsDropdown({ defaultValue }: { defaultValue?: string }) {
  const { loading, data } = useQuery(breedsQuery);
  if (loading) return <p>Loading...</p>;
  return (
    <select name="breed" defaultValue={defaultValue}>
      {data?.allBreeds?.map((breed) => (
        <option key={breed?.id} value={breed?.id}>
          {breed?.name}
        </option>
      ))}
    </select>
  );
}
