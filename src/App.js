import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./modules/Home/Home";
import Header from "./components/header/Header"
import Details from "./modules/details/Details";
import Login from "./modules/login/Login";
import Register from "./modules/login/Register";
import AccountInfo from "./modules/account/AccountInfo";
import Footer from "./components/footer/Footer";
import Create from "./components/create/Create";

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/account" element={<AccountInfo/>}/>
        <Route exact path="/create" element={<Create/>}/>
      
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
