import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_SHOPS = gql`
  query GetShops {
    shops {
      id
      name
    }
  }
`;

const ShopList = ({ clickOnList }) => {
  const { loading, error, data } = useQuery(GET_SHOPS);
  const shops = data?.shops || []
  console.log(shops)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex-column">
      {loading ? "" : shops.map(({ id, name }) => (
        <button key={id} className="btn" onClick={() => clickOnList(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ShopList;
