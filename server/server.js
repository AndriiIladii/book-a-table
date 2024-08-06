import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const folderPath = "./server";

const filePath = path.join(folderPath, "reservations.json");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get("/api/reservations", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  res.json({ message: "Hello from Express!" });
});

app.post("/api/reservations", (req, res) => {
  try {
    fs.writeFileSync(filePath, content);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
