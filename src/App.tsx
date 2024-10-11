
/* import './App.css' */
import Accordian from './components/accordian/Accordian'
import Randomgen from './components/color-gen/Randomgen'
import Imagslider from './components/imageSlider/Imageslider'
import LoadMore from './components/loadMore/Loadmore'
import StarRating from './components/star-rating/Starrating'

function App() {

  return (

    <div>
      <Accordian/>
      <Randomgen/>
      <StarRating input={5}/>
      <Imagslider url = {"https://picsum.photos/v2/list?page=1&"} limit={10}/>
      <LoadMore/>
    </div>
  )
}

export default App
