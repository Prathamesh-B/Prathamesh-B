require("isomorphic-unfetch");
require("dotenv").config();
const express = require("express");
const path = require("path");

const { promises: fs } = require("fs");

const app = express();

const Key = process.env.client_Id;

async function main(){
const readmeTemplate = (
  await fs.readFile(path.join(process.cwd(), "./README.template.md"))
).toString("utf-8");

  console.log("please wait");
  const { en: qoth, author: qoth_author } = await (
    await fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
  ).json();

const readme=readmeTemplate
    .replace("{qoth}", qoth)
    .replace("{qoth_author}", qoth_author)
    await fs.writeFile("README.md", readme);
}
main()
