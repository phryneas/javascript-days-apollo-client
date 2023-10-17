import { useMutation, useQuery } from "@apollo/client";
import { dogQuery } from "./Dog";
import { graphql } from "./gql";
import { BreedsDropdown } from "./BreedsDropdown";

// prettier-ignore
const updateDogMutation = graphql(`#graphql
  mutation UpdateDog {
    __typename ## TODO: Mutation mit Argumenten
  }
`);

export function EditDog({ id, onSave }: { id: string; onSave?: () => void }) {
  const { loading, data } = useQuery(dogQuery, { variables: { id } });

  // TODO: useMutation hier verwenden

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const breedId = ev.currentTarget.breed.value;
    const name = ev.currentTarget.dogName.value;

    // TODO: Mutation aufrufen

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
