# Grober Ablauf:

## GraphQL basics

- Repo auschecken
- `npm install`
- `npm run db`
- http://localhost:3010/ im Browser oeffnen, Queries und Mutations ausprobieren, Konzepte verstehen

## Apollo Client Basics

- neuen `ApolloClient` erstellen, `ApolloProvider` einrichten
- Beispiel anschauen: `useQuery` hook fuer eine Liste von Hunden
- kurzer Blick auf das, was der GraphQL Codegen im Hintergrund macht (`yarn codegen --watch`)
- Nachprogrammieren: `useQuery` Hook um Details fuer einen einzelnen Hund abzurufen (Variablen verwenden!)
- "Hund editieren" Seite erstellen: `useMutation` um Daten eines Hundes zu updaten
  - Beobachtungen: Rueckgabewerte der Mutation updaten den Cache
    - den normalisierten Cache angucken
  - Alternative: `refetchQueries`

## Advanced

- im Breed-Dropdown: extrahieren eines Fragmentes - ist jetzt ueberall in der App verfuegbar.
- Hunde-Geburtsdatum kommt haesslich aus dem InMemoryCache.
  - fieldPolicy mit `read` anlegen und das Datum formattieren
- erstellen eines Links, um mittels `context` einzelne Queries langsamer zu machen => spielen mit Loading-States

## Modern

- switchen eines `useQuery` hooks zum `useSuspenseQuery` hook
- Einfuehren einer `Suspense` boundary
- vergleichen
- `useTransition` ausprobieren.

## Ein echtes Projekt: Der Spotify Showcase

- Projekt klonen: https://github.com/apollographql/spotify-showcase
- Arbeiten mit echten Daten statt fake Daten: Spotify App unter https://developer.spotify.com/dashboard anlegen
- Um zu gucken was im Router passiert (sehr cool!): Account bei https://studio.apollographql.com und den "Demo-Graph" anlegen lassen - der ist direkt fuer diese Seite
  - ggf. noetig: in der Router Config (Settings -> Cloud Router) im yaml Introspection aktivieren:
  ```yaml
  supergraph:
    introspection: true
  ```
- Secrets und URL in `.env.development.local` hinterlegen≈
- Wir schauen uns die App zusammen an.
  Interessante Sachen:
  - Fragment Colocation
  - Suspense Boundaries
  - kuenstlich verzoegerte Requests (im Query `@synthetics(timeout: 1000)` Direktive zu beliebigen Feldern hinzufuegen)
