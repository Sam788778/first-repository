import './App.css';
import Container from './components/container/container.jsx'

function App({ products }){
  return (
    <div className="App">
      <Container products={products}/>
    </div>
  );
}

export default App;