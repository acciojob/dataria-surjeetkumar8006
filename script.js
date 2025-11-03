function mergeCraftDates(emilyDates, oliverDates) {
  // Combine both arrays
  const merged = [...emilyDates, ...oliverDates];
  // Sort in ascending order
  merged.sort((a, b) => a - b);
  return merged;
}

// Below code is just for browser demo (not needed for tests but helps visualization)
document.getElementById("mergeBtn").addEventListener("click", () => {
  const emily = [3, 7, 12, 20];
  const oliver = [1, 5, 8, 18, 25];
  const result = mergeCraftDates(emily, oliver);
  document.getElementById("output").textContent = `Merged Records: [${result.join(", ")}]`;
});
