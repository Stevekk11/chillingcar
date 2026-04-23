// Script to help determine module ranges by parsing comments in data.js
// This script can be run in the browser console to generate accurate module ranges

function parseModuleRanges() {
  // In a real implementation, we would fetch and parse the data.js file
  // For now, we'll just return the manually determined ranges
  
  const moduleRanges = {
    Q1: { start: 0, end: 22 },
    Q2: { start: 23, end: 54 },
    Q3: { start: 55, end: 83 },
    Q4: { start: 84, end: 112 },
    Q5: { start: 113, end: 139 },
    Q6: { start: 140, end: 184 },
    Q7: { start: 185, end: 207 },
    Q8: { start: 208, end: 252 },
    Q9: { start: 253, end: 292 }
  };
  
  console.log("Module ranges:", moduleRanges);
  return moduleRanges;
}

// Run the function to see the ranges
parseModuleRanges();