
/* import './App.css' */
import Accordian from './components/accordian/Accordian'
import Randomgen from './components/color-gen/Randomgen'
import StarRating from './components/star-rating/Starrating'

function App() {

  return (

    <div>
      <Accordian/>
      <Randomgen/>
      <StarRating input={10}/>
    </div>
  )
}

export default App
