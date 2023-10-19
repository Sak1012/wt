document.addEventListener("DOMContentLoaded", () => {
  const xmlForm = document.getElementById("xml-form");
  const xmlFile = document.getElementById("xml-file");
  const result = document.getElementById("result");
  const xmlContent = document.getElementById("xml-content");

  xmlForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("xml-file", xmlFile.files[0]);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          result.style.display = "block";
          xmlContent.innerHTML = data.xmlContent;
        } else {
          alert("XML file is not valid.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
