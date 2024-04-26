import Home from './pages/Home';
import { BrowserRouter as Router ,
  Routes, Route,

} from 'react-router-dom'
import PlaceDetail from './pages/PlaceDetail';
import AddPlace from './pages/AddPlace';

function App() {
  return (
    <>
      <Router>
      <Routes>

        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/place-detail/:id" element={ <PlaceDetail /> }/>
        <Route exact path="/add-place" element={ <AddPlace /> }/>





      </Routes>
    </Router>
    </>
  );
}

export default App;
