/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "#graphql\n  query AllDogs {\n    allDogs {\n      id\n      name\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n      }\n    }\n  }\n": types.AllDogsDocument,
    "#graphql\n  query Breeds {\n    allBreeds {\n      id\n    name\n    origin\n    }\n  }\n": types.BreedsDocument,
    "#graphql\n  query Dog($id: ID!) {\n    Dog(id: $id) {\n      id\n      name\n      born\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n        origin\n      }\n    }\n  }\n": types.DogDocument,
    "#graphql\n  mutation UpdateDog {\n    __typename ## TODO: Mutation mit Argumenten\n  }\n": types.UpdateDogDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  query AllDogs {\n    allDogs {\n      id\n      name\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["#graphql\n  query AllDogs {\n    allDogs {\n      id\n      name\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  query Breeds {\n    allBreeds {\n      id\n    name\n    origin\n    }\n  }\n"): (typeof documents)["#graphql\n  query Breeds {\n    allBreeds {\n      id\n    name\n    origin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  query Dog($id: ID!) {\n    Dog(id: $id) {\n      id\n      name\n      born\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n        origin\n      }\n    }\n  }\n"): (typeof documents)["#graphql\n  query Dog($id: ID!) {\n    Dog(id: $id) {\n      id\n      name\n      born\n      Image {\n        id\n        src\n        attribution\n      }\n      Breed {\n        id\n        name\n        origin\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n  mutation UpdateDog {\n    __typename ## TODO: Mutation mit Argumenten\n  }\n"): (typeof documents)["#graphql\n  mutation UpdateDog {\n    __typename ## TODO: Mutation mit Argumenten\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;