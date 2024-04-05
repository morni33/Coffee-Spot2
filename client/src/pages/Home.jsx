// import { useQuery } from '@apollo/client';

/* import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm'; */

// import { QUERY_THOUGHTS } from '../utils/queries';

import DiscussionPost from "../components/DiscussionPost";
import ShopList from "../components/ShopList";



const Home = () => {
  /* const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || []; */

  return (
    <main>
      <div className="flex-row">
        <div className="flex-column-side">
          <ShopList />
        </div>
        <div className="flex-column-center justify-center">
          <DiscussionPost />
        </div>
        <div className="flex-column-side">
          <p>Third column</p>
        </div>
      </div>
      
    </main>
  );
};

export default Home;
