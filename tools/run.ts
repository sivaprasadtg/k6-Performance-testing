import { spawn } from "child_process";
import dotenv from "dotenv";
import path from "path";
import process from "process";

dotenv.config();

const testFile = path.resolve("output/src/scripts/smoke/testScript.js");

const k6 = spawn("k6", ["run", testFile], {
    stdio: "inherit",
    env: {
        ...process.env,
        API_URL: process.env.API_URL
        }
    });

k6.on("close", (code) => {
    console.log(`k6 finished with code ${code}, (if code is non 0 --> then check the output above for errors)`);
    });
