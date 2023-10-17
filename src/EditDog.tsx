import { useMutation, useQuery } from "@apollo/client";
import { dogQuery } from "./Dog";
import { graphql } from "./gql";

// prettier-ignore
const breedsQuery = graphql(`#graphql
  query Breeds {
    allBreeds {
      id
      name
    }
  }
`);

function BreedsDropdown({ defaultValue }: { defaultValue?: string }) {
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

// prettier-ignore
const updateDogMutation = graphql(`#graphql
  mutation UpdateDog($id: ID!, $name: String, $breedId: ID) {
    updateDog(id: $id, name: $name, breed_id: $breedId) {
      id
      Breed {
        id
      }
      name
    }
  }
`);

export function EditDog({ id, onSave }: { id: string; onSave?: () => void }) {
  const { loading, data } = useQuery(dogQuery, { variables: { id } });

  const [mutate] = useMutation(updateDogMutation);

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const breedId = ev.currentTarget.breed.value;
    const name = ev.currentTarget.dogName.value;
    await mutate({
      variables: {
        id,
        breedId,
        name,
      },
      // refetchQueries: ["AllDogs", "Dog"],
    });
    onSave?.();
  }

  if (loading) return <p>Loading...</p>;

  return (
    <article>
      <h2>Edit {data?.Dog?.name}</h2>
      <img src={data?.Dog?.Image?.src} alt={data?.Dog?.Image?.attribution} />

      <form onSubmit={onSubmit}>
        <label>
          Breed: <BreedsDropdown defaultValue={data?.Dog?.Breed?.id} />
        </label>
        <label>
          Name:
          <input type="text" name="dogName" defaultValue={data?.Dog?.name} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
}
