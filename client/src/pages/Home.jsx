import { useQuery } from '@apollo/client';

/* import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm'; */

import { QUERY_THOUGHTS } from '../utils/queries';
import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

import { useParams } from 'react-router-dom';
import { useState } from "react";
import DiscussionPost from "../components/DiscussionPost";
import ShopList from "../components/ShopList";

const Home = () => {
  const [ selectedShop, setSelectedShop ] = useState(null);

  const { thoughtId } = useParams();

  /* const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {}; */
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  const clickOnList = (shop) => {
    setSelectedShop(shop);
    console.log(shop)
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className="flex-row">
        <div className="flex-column-side">
          <ShopList clickOnList={clickOnList} />
        </div>
        <div className="flex-column-center justify-center">
          <DiscussionPost selectedShop={selectedShop} thoughtId={thoughtId} />
        </div>
        <div className="flex-column-side">
          <p>Third column</p>
        </div>
      </div>
      
    </main>
  );
};

export default Home;
