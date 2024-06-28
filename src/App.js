import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footor";
import Allroutes from "./components/Allroutes";
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box bg={"#FAFAFA"}>
        <Navbar />
        <Allroutes />
        <Footer />
      </Box>
    </>
  );
}

export default App;
