
import './App.css';
import Banner from './components/Banner';

import request from './request'
import Navbar from './components/Navbar';




import Row from './components/Row'
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Banner/>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchActionMovies}/>
      <Row title="Action Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      
     

    
    </div>
    
  );
}

export default App;
