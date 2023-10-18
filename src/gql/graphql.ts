/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date type */
  Date: { input: any; output: any; }
};

export type Breed = {
  __typename?: 'Breed';
  Dogs?: Maybe<Array<Maybe<Dog>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  origin: Scalars['String']['output'];
};

export type BreedFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  origin_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type BreedInput = {
  name: Scalars['String']['input'];
  origin: Scalars['String']['input'];
};

export type Dog = {
  __typename?: 'Dog';
  Breed?: Maybe<Breed>;
  Image?: Maybe<Image>;
  born: Scalars['Date']['output'];
  breed_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  image_id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DogFilter = {
  born?: InputMaybe<Scalars['Date']['input']>;
  born_gt?: InputMaybe<Scalars['Date']['input']>;
  born_gte?: InputMaybe<Scalars['Date']['input']>;
  born_lt?: InputMaybe<Scalars['Date']['input']>;
  born_lte?: InputMaybe<Scalars['Date']['input']>;
  born_neq?: InputMaybe<Scalars['Date']['input']>;
  breed_id?: InputMaybe<Scalars['ID']['input']>;
  breed_id_neq?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image_id?: InputMaybe<Scalars['ID']['input']>;
  image_id_neq?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type DogInput = {
  born: Scalars['Date']['input'];
  breed_id: Scalars['ID']['input'];
  image_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type Image = {
  __typename?: 'Image';
  Dogs?: Maybe<Array<Maybe<Dog>>>;
  attribution: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  src: Scalars['String']['output'];
};

export type ImageFilter = {
  attribution?: InputMaybe<Scalars['String']['input']>;
  attribution_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  src?: InputMaybe<Scalars['String']['input']>;
  src_neq?: InputMaybe<Scalars['String']['input']>;
};

export type ImageInput = {
  attribution: Scalars['String']['input'];
  src: Scalars['String']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBreed?: Maybe<Breed>;
  createDog?: Maybe<Dog>;
  createImage?: Maybe<Image>;
  createManyBreed?: Maybe<Array<Maybe<Breed>>>;
  createManyDog?: Maybe<Array<Maybe<Dog>>>;
  createManyImage?: Maybe<Array<Maybe<Image>>>;
  removeBreed?: Maybe<Breed>;
  removeDog?: Maybe<Dog>;
  removeImage?: Maybe<Image>;
  updateBreed?: Maybe<Breed>;
  updateDog?: Maybe<Dog>;
  updateImage?: Maybe<Image>;
};


export type MutationCreateBreedArgs = {
  name: Scalars['String']['input'];
  origin: Scalars['String']['input'];
};


export type MutationCreateDogArgs = {
  born: Scalars['Date']['input'];
  breed_id: Scalars['ID']['input'];
  image_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateImageArgs = {
  attribution: Scalars['String']['input'];
  src: Scalars['String']['input'];
};


export type MutationCreateManyBreedArgs = {
  data?: InputMaybe<Array<InputMaybe<BreedInput>>>;
};


export type MutationCreateManyDogArgs = {
  data?: InputMaybe<Array<InputMaybe<DogInput>>>;
};


export type MutationCreateManyImageArgs = {
  data?: InputMaybe<Array<InputMaybe<ImageInput>>>;
};


export type MutationRemoveBreedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveDogArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBreedArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDogArgs = {
  born?: InputMaybe<Scalars['Date']['input']>;
  breed_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  image_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateImageArgs = {
  attribution?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  src?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  Breed?: Maybe<Breed>;
  Dog?: Maybe<Dog>;
  Image?: Maybe<Image>;
  _allBreedsMeta?: Maybe<ListMetadata>;
  _allDogsMeta?: Maybe<ListMetadata>;
  _allImagesMeta?: Maybe<ListMetadata>;
  allBreeds?: Maybe<Array<Maybe<Breed>>>;
  allDogs?: Maybe<Array<Maybe<Dog>>>;
  allImages?: Maybe<Array<Maybe<Image>>>;
};


export type QueryBreedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllBreedsMetaArgs = {
  filter?: InputMaybe<BreedFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllDogsMetaArgs = {
  filter?: InputMaybe<DogFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllImagesMetaArgs = {
  filter?: InputMaybe<ImageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllBreedsArgs = {
  filter?: InputMaybe<BreedFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllDogsArgs = {
  filter?: InputMaybe<DogFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllImagesArgs = {
  filter?: InputMaybe<ImageFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type AllDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDogsQuery = { __typename?: 'Query', allDogs?: Array<{ __typename?: 'Dog', id: string, name: string, Image?: { __typename?: 'Image', id: string, src: string, attribution: string } | null, Breed?: { __typename?: 'Breed', id: string, name: string } | null } | null> | null };

export type BreedsQueryVariables = Exact<{ [key: string]: never; }>;


export type BreedsQuery = { __typename?: 'Query', allBreeds?: Array<{ __typename?: 'Breed', id: string, name: string, origin: string } | null> | null };

export type DogQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DogQuery = { __typename?: 'Query', Dog?: { __typename?: 'Dog', id: string, name: string, born: any, Image?: { __typename?: 'Image', id: string, src: string, attribution: string } | null, Breed?: { __typename?: 'Breed', id: string, name: string, origin: string } | null } | null };

export type EditDogFragmentFragment = { __typename?: 'Dog', id: string, name: string, born: any, Image?: { __typename?: 'Image', id: string, src: string, attribution: string } | null, Breed?: { __typename?: 'Breed', id: string, name: string, origin: string } | null };

export type UpdateDogMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  breedId: Scalars['ID']['input'];
}>;


export type UpdateDogMutation = { __typename?: 'Mutation', updateDog?: { __typename?: 'Dog', id: string, name: string, Breed?: { __typename?: 'Breed', id: string } | null } | null };

export const EditDogFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditDogFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"born"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"attribution"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Breed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]}}]} as unknown as DocumentNode<EditDogFragmentFragment, unknown>;
export const AllDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"attribution"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Breed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AllDogsQuery, AllDogsQueryVariables>;
export const BreedsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Breeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allBreeds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]}}]} as unknown as DocumentNode<BreedsQuery, BreedsQueryVariables>;
export const DogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Dog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Dog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EditDogFragment"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"born"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"attribution"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Breed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditDogFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Dog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"born"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"attribution"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Breed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]}}]} as unknown as DocumentNode<DogQuery, DogQueryVariables>;
export const UpdateDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"breedId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"breed_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"breedId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Breed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDogMutation, UpdateDogMutationVariables>;