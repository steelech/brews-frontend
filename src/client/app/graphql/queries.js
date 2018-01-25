import gql from 'graphql-tag';

const BreweriesQuery =
  gql`
    query Breweries($location: String, $radius: Float)
      {
        breweries(location: $location, radius: $radius)
          {
            id,
            name
            streetAddress,
            locality,
            region,
            postalCode,
            phone,
            website,
            latitude,
            longitude,
            distance,
            formattedAddress,
            rating
          }
      }
  `

export { BreweriesQuery }
