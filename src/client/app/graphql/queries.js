import gql from 'graphql-tag';

const PlacesQuery =
  gql`
    query Places($location: String)
      {
        places(location: $location)
          {
            name,
            id,
            address
          }
      }
  `

const BreweriesQuery =
  gql`
    query Breweries
      {
        breweries
          {
            name
            streetAddress,
            locality,
            region,
            postalCode,
            phone,
            website,
            latitude,
            longitude,
          }
      }
  `

export { PlacesQuery, BreweriesQuery }
