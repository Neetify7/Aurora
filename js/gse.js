function renderGSE() {
  if (window.google && google.search && google.search.cse) {
    google.search.cse.element.render({
      div: "gseResults",
      tag: "searchresults-only"
    });
  } else {
    setTimeout(renderGSE, 100);
  }
}
renderGSE();

function searchGSE() {
  const query = document.getElementById("input").value.trim();
  if (!query) return false;

  const element = google.search.cse.element.getElement("searchresults-only0");
  if (element) {
    element.execute(query);
  }
  return false; 
}