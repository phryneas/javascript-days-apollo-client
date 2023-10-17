import { useQuery } from "@apollo/client";
import { graphql } from "./gql";

// prettier-ignore
// graphql(`#graphql`);

// prettier-ignore
const breedsQuery = graphql(`#graphql
  query Breeds {
    allBreeds {
      id
    name
    origin
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
