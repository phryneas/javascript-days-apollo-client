import { useFragment, useMutation } from "@apollo/client";
import { graphql } from "./gql";
import { BreedsDropdown } from "./BreedsDropdown";

// prettier-ignore
const dogFragment = graphql(`#graphql
  fragment EditDogFragment on Dog {
      id
      name
      born
      Image {
        id
        src
        attribution
      }
      Breed {
        id
        name
        origin
      }
  }
`)

// prettier-ignore
const updateDogMutation = graphql(`#graphql
  mutation UpdateDog($id: ID!, $name: String!, $breedId: ID! ) {
    updateDog(id: $id, name: $name, breed_id: $breedId){
      id
      name
      Breed {
        id
      }
    }
  }
`);

export function EditDog({ id, onSave }: { id: string; onSave?: () => void }) {
  const { data } = useFragment({
    fragment: dogFragment,
    from: { __typename: "Dog", id },
  });

  const [updateDog] = useMutation(updateDogMutation, {
    refetchQueries: ["AllDogs"],
  });

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const breedId = ev.currentTarget.breed.value;
    const name = ev.currentTarget.dogName.value;

    updateDog({
      variables: {
        id,
        name,
        breedId,
      },
    });

    onSave?.();
  }

  return (
    <article>
      <h2>Edit {data?.name}</h2>
      <img src={data?.Image?.src} alt={data?.Image?.attribution} />

      <form onSubmit={onSubmit}>
        <label>
          Breed: <BreedsDropdown defaultValue={data?.Breed?.id} />
        </label>
        <label>
          Name:
          <input type="text" name="dogName" defaultValue={data?.name} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
}

EditDog.fragments = { dog: dogFragment };
