import React, {useState, useEffect} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    { name : 'About' },
    { name: 'Projects' },
    { name: 'Contact' }
]);
const [currentPage, setCurrentPage] = useState(pages[0]);

useEffect(() => {
    document.title = `edmer :: ${currentPage.name}`
});
  
  return (
   //return pages here for single page func and validation
   <div>
            <Nav 
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <main>
                {currentPage.name === 'About' && <About />}
                {currentPage.name === 'Project' && <Project />}
                {currentPage.name === 'Resume' && <Resume />}
                {currentPage.name === 'Contact' && <Contact />}
                {/* <About></About>
                <Project></Project> */}
                
            </main>
            <Footer />
        </div>
  );
}

export default App;
