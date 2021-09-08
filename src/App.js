function App() {
  return (
    //<div className="App" />
    <div>
      Hello React
      <Potato />
    </div>
    
  );
  
  }
function Potato(){
  return (
      <h3>I love potato</h3> //html이 아닌 jsx
  );
}

export default App;