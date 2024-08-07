import express from "express";
import cors from "cors";
import fs from "fs";

const filePath = "./reservations.json";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

const data = fs.readFileSync(filePath, { encoding: "utf-8" });
console.log(data);
let dataObj = JSON.parse(data);
console.log(dataObj);

const obj = {
  aa: "ee",
  ab: "ef",
  ac: "eg",
};

fs.writeFileSync(filePath, JSON.stringify(obj), {
  encoding: "utf-8",
  flag: "w",
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
