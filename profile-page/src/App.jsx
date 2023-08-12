import './App.css';
import info from "./profileinfo";
import Profilepic from "./components/Profilepic";
import Description from "./components/Description";
import Detailbox from "./components/Detailbox";
import Imagetext from "./components/Imagetext";



function profilefunction(detail){
  return(
    <Profilepic 
      id={detail.id}
      key={detail.id}
      name={detail.username}
      email={detail.email}
      img={detail.image}
    />
  );

}

function App() {
  return (
    <div className="App">
    <div className='profile'>
    <div className='profileimg'>
      {info.map(profilefunction)}
    </div>
    <div className='desc'>
      <Description/>
    </div>
    <div className='detailbox'>
      <Detailbox />
      <Detailbox />
      <Detailbox />
    </div>
    <div className='imagetext'>
      <Imagetext/>
      <Imagetext/>
      <Imagetext/>

    </div>

    </div>
    </div>
  );
}

export default App;
