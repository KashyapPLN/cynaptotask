import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export default function RulerSlider(){
  const [minSeconds, setMinSeconds] = useState(0);
  const [maxSeconds, setMaxSeconds] = useState(60);
  const [tickInterval, setTickInterval] = useState(10);
  const [largeTickHeight, setLargeTickHeight] = useState(15);
  const [smallTickHeight, setSmallTickHeight] = useState(10);

  const sliderRef = React.useRef(null);

  React.useEffect(() => {
    const slider = $(sliderRef.current);

    // Initialize the range slider
    slider.slider({
      range: true,
      min: minSeconds,
      max: maxSeconds,
      step: 1,
      values: [minSeconds, maxSeconds],
      slide: function(event, ui) {
        updateTicks(ui.values[0], ui.values[1]);
      }
    });

    // Initial tick marks
    updateTicks(minSeconds, maxSeconds);

    return () => {
      slider.slider('destroy');
    };
  }, [minSeconds, maxSeconds, tickInterval, largeTickHeight, smallTickHeight]);

  // Function to update the tick marks
  const updateTicks = (min, max) => {
    const slider = $(sliderRef.current);
    const numTicks = Math.floor((max - min) / tickInterval) + 1;

    // Remove existing tick marks and labels
    slider.find('.ui-slider-tick-mark, .ui-slider-tick-label').remove();

    // Add tick marks and labels
    for (let i = 0; i < numTicks; i++) {
      const value = min + i * tickInterval;
      const tickMark = $('<div>')
        .addClass('ui-slider-tick-mark')
        .css({
          left: `${(100 / (numTicks - 1)) * i}%`,
          height: value % tickInterval === 0 ? largeTickHeight : smallTickHeight
        });
      slider.append(tickMark);

      if (value % tickInterval === 0) {
        const tickLabel = $('<div>')
          .addClass('ui-slider-tick-label')
          .text(value)
          .css('left', `${(100 / (numTicks - 1)) * i}%`);
        slider.append(tickLabel);
      }
    }
  };

  const handleZoomIn = () => {
    setMaxSeconds(prevMaxSeconds => prevMaxSeconds + tickInterval);
  };

  const handleZoomOut = () => {
    setMaxSeconds(prevMaxSeconds => Math.max(prevMaxSeconds - tickInterval, minSeconds));
  };

  return (
    <div>
      <div ref={sliderRef}></div>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
};

ReactDOM.render(<RulerSlider />, document.getElementById('root'));
