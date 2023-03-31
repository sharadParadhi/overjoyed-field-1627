
import { Link,Routes,Route} from "react-router-dom"
import Home from "../pages/home"
import Wedding from "../pages/wedding"
import Clothing from "../pages/clothing"
import Accessories from "../pages/accessories"
import Dresses from "../pages/dresses"
import Shoes from "../pages/shoes"
import HomeFurniture from "../pages/home&furniture"
import BeautyWellness from "../pages/beauty&wellness"
import GiftsCandless from "../pages/gifts&candles"

function Allroutes(props){

<Routes>
        <Route  path="/" element={Home}/>
        <Route  path="/clothing" element={Clothing}/>
        <Route  path="/shoes" element={Shoes}/>
        <Route path="/dresses" element={Dresses}/>
        
    </Routes>
}

export default Allroutes