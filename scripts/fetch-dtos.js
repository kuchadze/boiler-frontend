const fs = require("fs");
const path = require("path");

async function fetchDtos() {
  const response = await fetch("http://localhost:3001/dto", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dtos = (await response.json()).data;

  for (const dto of dtos) {
    const splitedName = dto.name.split("/");
    const name = splitedName[splitedName.length - 1];
    // const content = dto.content.replace("\n", "");
    fs.writeFileSync(`${path.resolve(__dirname, "..")}/app/dtos/${name}`, dto.content);
  }
}

fetchDtos();
