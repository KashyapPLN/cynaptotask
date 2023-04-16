import React, { useState } from "react";

function PercentageDropdown() {
  const [selectedPercentage, setSelectedPercentage] = useState(10);

  const handlePercentageChange = (event) => {
    setSelectedPercentage(event.target.value);
  };

  const percentageOptions = [];
  for (let i = 10; i <= 100; i += 10) {
    percentageOptions.push(
      <option key={i} value={i}>
        {i}%
      </option>
    );
  }

  return (
    <div style={{marginTop:'8px',marginLeft:'16px'}}>
      <select id="percentage-select" value={selectedPercentage} onChange={handlePercentageChange}>
        {percentageOptions}
      </select>
    </div>
  );
}

export default PercentageDropdown;
