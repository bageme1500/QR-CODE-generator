import { createPromptModule } from "inquirer";
import QRCode from "qrcode";
import fs from "fs";

const prompt = createPromptModule();

async function run() {
  const answer = await prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL to convert into a QR code:"
    }
  ]);

  const qrBuffer = await QRCode.toBuffer(answer.url);

  fs.writeFileSync("qr.png", qrBuffer);

  console.log("QR code saved successfully as qr.png!");
}

run();
