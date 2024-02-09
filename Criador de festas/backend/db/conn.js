const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strict", true);
        await mongoose.connect("mongodb+srv://Kapela:rAN8goMsFzRR9wtu@cluster0.cwe43mh.mongodb.net/?retryWrites=true&w=majority");
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;
