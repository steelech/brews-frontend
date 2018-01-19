import gql from 'graphql-tag';

const BreweriesQuery =
  gql`
    query Breweries($location: String, $radius: Float)
      {
        breweries(location: $location, radius: $radius)
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
            distance
          }
      }
  `

export { BreweriesQuery }
