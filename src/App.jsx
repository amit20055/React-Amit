import Header,{Top,Bottom, Left} from "./Header";

function App(){
  return(
    <div>
         <h1>First Component</h1>
         <Color/>
         <Fruit/>
         <Header/>
         <Top/>
         <Bottom/>
         <Left/>
        
         
    </div>
    
  )
}

function Fruit(){
  return(
    <h1>Apple</h1>
  )
}
function Color(){
  return(
    <h1>Red color</h1>
  )
}
export default App;