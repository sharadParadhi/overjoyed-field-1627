
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
import Signup from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import Cart from "../pages/Cart"

function Allroutes(props){
    

return (
    <>
    




<Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/clothing" element={<Clothing/>}/>
        <Route  path="/shoes" element={<Shoes/>}/>
        <Route path="/dresses" element={<Dresses/>}/>
        <Route path="wedding" element={<Wedding/>}></Route>
        <Route path="/Accessories" element={<Accessories/>}></Route>
        <Route path="/furniture" element={<HomeFurniture/>}></Route>
        <Route path="/beauty" element={<BeautyWellness/>}></Route>
        <Route path="/gifts" element={<GiftsCandless/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>  
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>   
       
</Routes>
</>
)
}

export default Allroutes