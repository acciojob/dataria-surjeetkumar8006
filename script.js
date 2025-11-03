function mergeCraftDates(emily, oliver) {
  let merged = [];
  let i = 0, j = 0;

  while (i < emily.length && j < oliver.length) {
    if (emily[i] < oliver[j]) {
      merged.push(emily[i]);
      i++;
    } else {
      merged.push(oliver[j]);
      j++;
    }
  }

  while (i < emily.length) merged.push(emily[i++]);
  while (j < oliver.length) merged.push(oliver[j++]);

  return merged;
}

// Optional: interactive part for browser only
if (typeof document !== "undefined") {
  document.getElementById("mergeBtn").addEventListener("click", function () {
    const emily = [3, 7, 12, 20];
    const oliver = [1, 5, 8, 18, 25];
    const result = mergeCraftDates(emily, oliver);
    document.getElementById("output").innerText =
      "Merged Record: " + result.join(", ");
  });
}
