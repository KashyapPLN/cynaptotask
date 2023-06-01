import React, { useEffect, useState} from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import EditorToolBar from './EditorToolBar';
import $, { event } from 'jquery';
import 'jquery-ui-dist/jquery-ui';
export default function Scale() {
  var zoomLevel = 0;
  var maxZoomLevel = 24; // 300 total markings, each zoom adds 10 markings, so 24 zooms in total
  var initialWidth = 1800; // Updated width of the upper div
  var initialMarkings = 60;
  var maxMarkings = 300;
   useEffect(() => {

    let temp='';
    let counter=1;
    // The below function adds media file 1

    function addDraggableVideoFile() {
      console.log("hello hi ")
      $("#add-mediaLargeBtn").hide();
      var mediaFile = $('<div id="mediaFile1"></div>');
      $('#mediaContainer').append(mediaFile);
      console.log("mediaContainer height is", $('#mediaContainer').height())
      $('#mediaFile1').draggable({
        containment: '#mediaContainer', snap: true,
        snapMode: 'outer', snapTolerance: 30
        , stop: function (event, ui) {

        }
      }).resizable({ ghost: true, handles: "e,w" });
      temp="#mediaFile1";
      counter++;
      setmediaFile1Width();
      
    }

    //The below function calculates the width of media file 1
    function calculatemediaFile1Width() {

      var upperDivWidth = $('#upperDiv').width();
      var markingInterval = upperDivWidth / (initialMarkings);
      var mediaFile1Width = markingInterval * 40; // Adjusted to the position of the 40th marking
      return mediaFile1Width;

    }

    // Set the width of the media file 1
    function setmediaFile1Width() {

      var mediaFile1Width = calculatemediaFile1Width();
    
      $('#mediaFile1').width(mediaFile1Width);

    }

    function calculatemediaFile2Width() {

      var upperDivWidth = $('#upperDiv').width();
      var markingInterval = upperDivWidth / (initialMarkings);
      var mediaFileWidth2 = markingInterval * 50; // Adjusted to the position of the 40th marking
      return mediaFileWidth2;
    }
    function calculatemediaFile3Width() {
      var upperDivWidth = $('#upperDiv').width();
      var markingInterval = upperDivWidth / (initialMarkings);
      var mediaFileWidth3 = markingInterval * 25; // Adjusted to the position of the 40th marking
      return mediaFileWidth3;
        }
    
   
    function setmediaFile2Width() {
      
       var mediaFileWidth = calculatemediaFile2Width();
    
      $('#mediaFile2').width(mediaFileWidth);
      
    }
    function setmediaFile3Width() {
      
        var mediaFileWidth = calculatemediaFile3Width();
     
        $('#mediaFile3').width(mediaFileWidth);
      
    }

    // The below function adds media files 2 and 3
    function addMedia() {
      
      if (temp !== '') {
        console.log("temp in scale file",temp);
        if (counter < 4) {

          var mediaFile = $('<div></div>');
          mediaFile.attr('id', 'mediaFile' + counter);
          mediaFile.attr('class', 'mediaFiles');
          mediaFile.draggable({
            containment: '#mediaContainer', snap: true, snapTolerance: 60, snapMode: 'outer'
          }).resizable({ ghost: true, handles: "e,w" });

          $('#mediaContainer').prepend(mediaFile);
          setmediaFile2Width();
          setmediaFile3Width();
          counter++;
          console.log("mediaContainer height is", $('#mediaContainer').height())
          let tempHeight = $('.ui-slider .ui-slider-handle').height();
          $('.ui-slider .ui-slider-handle').css("height", tempHeight + 80);
          console.log("tempH", tempHeight)
          if (tempHeight === 150) {
          
            $('.ui-slider .ui-slider-handle').css("background-size", "20px 300px");
             $('.ui-slider .ui-slider-handle').css("margin-top", "12px")
          }
          if (tempHeight === 230) {
          
            $('.ui-slider .ui-slider-handle').css("background-size", "20px 400px");
            $('.ui-slider .ui-slider-handle').css("margin-top", "12px")
          }
        }
        console.log('add media');

      }
      else {
        console.log("not working")
        addDraggableVideoFile();
      }
    }
    $('#mediaContainer').droppable();
 

// Add markings to the upper div
function addMarkings() {
  var upperDivWidth = $('#upperDiv').width();
  var markingInterval = upperDivWidth / initialMarkings;
  var markingHTML = '';

  for (var i = 0; i <= initialMarkings; i++) {
    var markingLeft = markingInterval * i;
    markingHTML += '<div class="marking" style="left:' + markingLeft + 'px;"></div>';

    if (initialMarkings >= 60) {
      if (i % 10 === 0) {
        markingHTML += '<div class="marking-label" style="left:' + markingLeft + 'px;">' + i + '</div>'; // Displaying numbers as 0, 10, 20, ...
      }
    } else{
      if (i % 5 === 0) {

              markingHTML += '<div class="marking-label" style="left:' + markingLeft + 'px;">' + i + '</div>'; // Displaying numbers as 0, 5, 10, 15, ...
      
      }
    }
   
  }

  $('#upperDiv').html(markingHTML);
}

$("#seekBar").val(initialMarkings);

function handleSeek(){
  var prevValue = $("#seekBar").val();
 console.log("prev Value",prevValue)
$("#seekBar").on("input", function () {
        var currentValue = $(this).val();
    console.log("current value is ",currentValue);
        
          initialMarkings =currentValue;
  var newWidth = initialWidth;
  $('#upperDiv').width(newWidth);
  addMarkings();
  setmediaFile1Width();
  setmediaFile2Width();
  setmediaFile3Width();
       
        prevValue=currentValue;
})
}

    // Zoom out function to add new markings and update div widths
    
    function zoomOut() {
      if (zoomLevel <= maxZoomLevel && initialMarkings < maxMarkings) {
        zoomLevel++;
        initialMarkings += 10;
        var newWidth = initialWidth;
        $('#upperDiv').width(newWidth);
        addMarkings();
        setmediaFile1Width();
        setmediaFile2Width();
        setmediaFile3Width();
        console.log("in zoom out");
      }
    }
    

// Zoom in function to remove markings and update div widths
function zoomIn() {
 
   if (initialMarkings >= 60) {
      if (initialMarkings === 60) {
        initialMarkings -= 5;
      } else {
        initialMarkings -= 10;
      }
    } else {
    
      initialMarkings -= 5;
      
        if (initialMarkings < 0) {
        initialMarkings = 0;
      }
     }
  
    var newWidth = initialWidth;
    $('#upperDiv').width(newWidth);
    addMarkings();
    setmediaFile1Width();
    setmediaFile2Width();
    setmediaFile3Width();
   
 
}

    $("#slider").slider();



    // Initial setup
    addMarkings();


// Handle zoom using button click
    $('#zoomOutButton').on('click', zoomOut);
    $('#zoomInButton').on('click', zoomIn);
    $('#add-mediaLargeBtn').on('click', addDraggableVideoFile);
    $('#addMedia').on('click', addMedia);
  $('#seekBar').on('change',handleSeek);
    // Clean-up function
    return () => {
      $('#zoomOutButton').off('click', zoomOut);
      $('#add-mediaLargeBtn').off('click', addDraggableVideoFile);
      $('#addMedia').off('click', addMedia);
      $('#zoomInButton').off('click', zoomIn);
      $('#seekBar').off('change',handleSeek);
      handleSeek();
    };

  }, [zoomLevel, initialMarkings]);
  return (
    <div>
      <EditorToolBar initialMarkings={initialMarkings}/>
      <div id="slider">
        <div id="upperDiv"></div>
        <button id="add-mediaLargeBtn" ><span style={{ marginRight: '30px' }}><AiOutlinePlus /></span>Add media to this project</button>
        <div id='mediaContainer'>
          {/* <div id="mediaFile1"></div> */}
        </div>
      </div>
    </div>
  )
}
