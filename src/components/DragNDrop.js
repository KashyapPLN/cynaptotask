import React, { useEffect, useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import EditorToolBar from './EditorToolBar';


export default function DragNDrop() {
  const [cond,setCond]=useState(10);
  const [reading,setReading]=useState(60);
   const [temp,setTemp]=useState('');
   const [counter,setCounter]=useState(2);
   const [innerDivId,setInnerDivId]=useState('');
   const maxVal = 300;
   let val = reading;
  const markings = [];
 
  function adjustParentHeight() {
  console.log("adjustparentheight")
  }

  function adjustDivHeight() {
    var div = $('#mediaContainer');
    div.css('height', 'auto');
  
    var contentHeight = div.prop('scrollHeight');
    div.css('height', contentHeight + 'px');
  }
  
  
  


function addDraggableVideoFile(){
   console.log("hello hi ")
  $("#add-mediaLargeBtn").hide();
   var mediaFile = $('<div id="mediaFile1"></div>');
     $('#mediaContainer').append(mediaFile); 
     console.log("mediaContainer height is",$('#mediaContainer').height())
     $('#mediaFile1').draggable({containment:'#mediaContainer',snap:true,
     snapMode:'outer',snapTolerance:30
     ,stop: function(event, ui) {
      adjustDivHeight();
      adjustParentHeight();
    }}).resizable({ghost:true,handles:"e,w"});
     setTemp('#mediaFile1');
}

function addMedia(){
  if(temp!==''){
    if(counter<4){

    var mediaFile= $('<div></div>');
    mediaFile.attr('id', 'mediaFile' + counter);
    mediaFile.attr('class', 'mediaFiles');
    mediaFile.draggable({containment:'#mediaContainer',snap:true,snapTolerance:60,snapMode:'outer',stop: function(event, ui) {
  
      adjustDivHeight();
      adjustParentHeight();
    }}).resizable({ghost:true,handles:"e,w"});
  
    $('#mediaContainer').prepend(mediaFile);
    setCounter(counter+1);
    console.log("mediaContainer height is",$('#mediaContainer').height())
    let tempHeight=$('.ui-slider .ui-slider-handle').height();
    $('.ui-slider .ui-slider-handle').css("height",tempHeight+80);
    console.log("tempH",tempHeight)
    if(tempHeight===150){
      console.log("deffgergth");
      $('.ui-slider .ui-slider-handle').css("background-size","20px 300px");
      $('.ui-slider .ui-slider-handle').css("margin-top","-22px")
    }
    if(tempHeight===230){
      console.log("qwewrewrfgfgfc");
      $('.ui-slider .ui-slider-handle').css("background-size","20px 400px");
      $('.ui-slider .ui-slider-handle').css("margin-top","-32px")
    }
  }
  console.log('add media');

  }
  else{
    addDraggableVideoFile();
  }
}
$('#mediaContainer').droppable({drop:function(event, ui){
  setInnerDivId(ui.draggable.attr('id'));
  
          adjustParentHeight();
  }})

  for (let i = 0; i <= reading&&i<=300; i++) {
    markings.push(
      <div className={i % cond === 0 ? "marking big" : "marking small"} key={i}>
        {i % cond === 0 ? i : null}
      </div>
      
    );
  
  }
  
    useEffect(()=>{
       $( "#slider" ).slider();
       
    },[])
  function incrementReading(){
    // setReading(reading+5);
    if(reading>=0&&reading<=10){
      setReading(reading+0.5);
      setCond(0.5);
    }
    if(reading>=10&&reading<=20){
      setReading(reading+1);
      setCond(1);
    }
    console.log(reading);
    if(reading>=20){
      setReading(reading+5);
      setCond(5)
    }
   
    if(reading>=60){
      setReading(reading+10);
      setCond(10);
    }
    if(reading>120){
      setReading(reading+30);
setCond(30);
    }
   
    
  }  
  function decrementReading(){
    // setReading(reading-5);
if(reading<=300&&reading>=120){
  setReading(reading-30);
  setCond(30);
}
if(reading<=120&&reading>=60){
  setReading(reading-10);
  setCond(10);
}

    console.log(reading);
    if(reading<=60){
      setReading(reading-5);
      setCond(5);
    }
 
    if(reading<=20){
      setReading(reading-1);
      setCond(1);
    }
    if(reading<=10){
      setReading(reading-0.5);
      setCond(0.5);
    }
 
  } 

  return (
    <div>
      <EditorToolBar temp={temp} setTemp={setTemp} incrementReading={incrementReading} decrementReading={decrementReading} addMedia={addMedia} maxVal={maxVal} val={val} setReading={setReading} reading={reading}/>
<div id="slider">
<div className="custom-seek-bar">
      {markings}     
    </div>
    <div id='mediaContainer'>
    <div id="media1"></div>
    </div>
<button id="add-mediaLargeBtn" onClick={addDraggableVideoFile}>
          <span style={{marginRight:'30px'}}><AiOutlinePlus/></span>Add media to this project</button>
</div>

      
    </div>
  )
}
