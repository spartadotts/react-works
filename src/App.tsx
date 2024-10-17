import "./App.css";
import data from "./components/nav-menu/data"
/* import Accordian from "./components/accordian/Accordian";
import Randomgen from "./components/color-gen/Randomgen";
import Imagslider from "./components/imageSlider/Imageslider";
import StarRating from "./components/star-rating/Starrating"; */
/* import LoadMore from "./components/loadMore/Loadmore"; */
import NavBar from "./components/nav-menu/NavBar";
import { MenuItem } from "./components/nav-menu/interface";

function App() {
  return (
    <div>
{/*       <Accordian />
      <Randomgen />
      <StarRating input={5} />
      <Imagslider url={"https://picsum.photos/v2/list?page=1&"} limit={10} /> */}
      {/* <LoadMore/> */}
      <NavBar menu={data as MenuItem[]}/>
    </div>
  );
}

export default App;
