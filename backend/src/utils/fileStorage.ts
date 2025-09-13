import fs from 'fs';

const FILE = "orders.json"

export const readData = () => {
    if(fs.existsSync(FILE)){
        const data = fs.readFileSync(FILE, "utf-8");
        return JSON.parse(data);
    }
    return [];
}

export const writeData = (data: any) => {
    fs.writeFileSync(FILE, JSON.stringify(data,null,2))
}

if (!fs.existsSync(FILE)) {
  writeData([]);
}