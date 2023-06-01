import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import aspectRatio from '../aspectRatioOptions.json';
export default function ProjectSettings() {
  console.log(aspectRatio[0].name);
    const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(aspectRatio[0].name);
  const [selectedIcon, setSelectedIcon] = useState(aspectRatio[0].icon);
  const [selectedRatio, setSelectedRatio] = useState(aspectRatio[0].aspectRatio);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
aspectRatio.map((drop1)=>drop1)
  const handleOptionSelect = (name,icon,ratio) => {
    setSelectedName(name);
    setSelectedIcon(icon);
    setSelectedRatio(ratio);
    setIsOpen(false);
  };
    return (
        <div>
            <h2>Project Settings</h2>
            {/* <form>
  <label for="aspectRatio">Size</label><br/>
  <select name="aspectRatio"defaultValue={"youtube"} id="aspectRatio">
    <option value="youtube"><img style={{width:'28px',height:'25px'}}src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png'/>Youtube</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  
</form> */}

<div className="custom-dropdown">
      <div className="dropdown-toggle " onClick={handleToggle}>
      <img style={{width:'20px',height:'18px',marginRight:'10px'}} src={selectedIcon} alt="Option" /> 
      {selectedName}
      <span style={{color:'#8d8e95ab',marginLeft:'8px'}}>({selectedRatio})</span>
        
        {/* Replace "path_to_image" with the actual path to your image */}
        
        {/* <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span> */}
      </div>
    <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
    {aspectRatio.map((drop)=> <div className="dropdown-item" onClick={() => handleOptionSelect(drop.name,drop.icon,drop.aspectRatio)}>
       <img style={{width:'20px',height:'18px',marginRight:'10px'}}src={drop.icon}/> {drop.name} <span style={{color:'#8d8e95ab',marginLeft:'8px'}}>({drop.aspectRatio})</span>
        </div>)}
        
      </div>
    </div>

        </div>
    )
}
