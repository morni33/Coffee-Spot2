

/* import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm'; */
import { useState } from "react";
import DiscussionPost from "../components/DiscussionPost";
import ShopList from "../components/ShopList";

const Home = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const clickOnList = (shop) => {
    setSelectedShop(shop);
    console.log(shop)
  }

  return (
    <main>
      <div className="flex-row">
        <div className="flex-column-side">
          <ShopList clickOnList={clickOnList} />
        </div>
        <div className="flex-column-center justify-center">
          <DiscussionPost selectedShop={selectedShop} />
        </div>
        <div className="flex-column-side">
          <p>Third column</p>
        </div>
      </div>

    </main>
  );
};

export default Home;
