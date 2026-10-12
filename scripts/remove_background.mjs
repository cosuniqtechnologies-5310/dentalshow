import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

async function run() {
  console.log("Starting background removal on beaver_mascot.png...");
  const inputPath = path.resolve("public/images/beaver_mascot.png");
  const outputPath = path.resolve("public/images/beaver_mascot_cutout.png");

  const inputBuffer = fs.readFileSync(inputPath);
  const blob = new Blob([inputBuffer], { type: "image/png" });
  
  const resultBlob = await removeBackground(blob);
  const arrayBuffer = await resultBlob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  fs.writeFileSync(outputPath, buffer);
  console.log("Successfully created cutout at:", outputPath, "Size:", buffer.length);
}

run().catch((err) => {
  console.error("Error during background removal:", err);
  process.exit(1);
});
