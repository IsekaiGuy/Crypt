import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";

const App = () => {
  return (<div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
  </div>)
}

export default App;
