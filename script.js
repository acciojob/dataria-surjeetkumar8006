function mergeCraftDates(emilyDates, oliverDates) {
  // Merge both sorted arrays into one sorted array
  return [...emilyDates, ...oliverDates].sort((a, b) => a - b);
}
