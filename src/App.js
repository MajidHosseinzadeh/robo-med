import './App.css';
import Doctors from './Components/Doctors/doctors';
import Email from './Components/Email/email';
import Facilities from './Components/Facilities/facilities';
import Feature from './Components/Features/feature';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/navbar';
import Patient from './Components/Patient/patient';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Feature/>
      <Facilities/>
      <Patient/>
      <Doctors/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
