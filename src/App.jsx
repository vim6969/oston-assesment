import './App.css';
import ClassroomPrograms from './components/ClassroomPrograms';
import ContactForm from './components/ContactForm';
import Courses from './components/Courses';
import ELearn from './components/ELearn';
import HomeBanner from './components/HomeBanner';
import MapDiscover from './components/MapDiscover';
import Mastermind from './components/Masterminds';
import Navbar from './components/Navbar';
import PageBreak from './components/PageBreak';
import Results from './components/Results';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <Results/>
      <PageBreak/>
      <Courses/>
      <ContactForm/>
      <MapDiscover/>
      <Mastermind/>
      <ELearn/>
      <ClassroomPrograms/>
      <Testimonial/>
      <Services/>
      <Footer/>
      
    </div>
  );
}

export default App;
