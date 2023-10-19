const express = require("express");
const multer = require("multer");
const xml2js = require("xml2js");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("xml-file"), (req, res) => {
  if (!req.file) {
    res.json({ success: false });
    return;
  }

  const xmlData = req.file.buffer.toString("utf8");

  xml2js.parseString(xmlData, (err, result) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true, xmlContent: JSON.stringify(result, null, 2) });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
