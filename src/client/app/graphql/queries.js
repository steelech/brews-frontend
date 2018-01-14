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

export { PlacesQuery }
