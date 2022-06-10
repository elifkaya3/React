import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  // const username="Metallica"
  // const name="james"
  // const surname="hetfild"
  // const img="https://upload.wikimedia.org/wikipedia/commons/b/b7/Metallica_logo.png"

  // return (
  //   <div>
  //     <User username={username} name={name} surname={surname}
  //     img={img}/>
  //   </div>
  // );
  return(
    <div onclick={() => {
      console.log("div clicked")
  }}>
      <h1>WissenAkademi</h1>
      <form onSubmit={e=>{
          e.preventDefault();
          console.log("submit gerçekleşti");
      }}>
          name:<input name='isim' onChange={(e)=>{
              console.log("something wrote",e.target.value)
              }}/>
      </form>
  </div>
  )
}

export default App;
