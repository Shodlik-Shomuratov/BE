import productsData from './data/products.data.json';
import stocksData from './data/stocks.data.json';
const exec = require('child_process').exec;

const populateDataBase = async (table: string, data: any[]) => {
    data.forEach(async (element)  => {
        let stringArray = JSON.stringify(element).split('"');
        let result = stringArray.join('\\"');
        await exec(`aws dynamodb put-item --region us-east-1  --table-name ${table}  --item "${result}"`, (error, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
        });
    });
}

populateDataBase("products", productsData);
populateDataBase("stocks", stocksData);