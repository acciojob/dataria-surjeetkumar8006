function mergeCraftDates(emilyDates, oliverDates) {
  // Combine both arrays
  const merged = [...emilyDates, ...oliverDates];
  // Sort in ascending order
  merged.sort((a, b) => a - b);
  return merged;
}

// For display on the webpage
document.getElementById("mergeBtn").addEventListener("click", function() {
  const emily = [3, 7, 12, 20];
  const oliver = [1, 5, 8, 18, 25];
  const result = mergeCraftDates(emily, oliver);
  document.getElementById("output").textContent = "Merged Record: " + result.join(", ");
});
