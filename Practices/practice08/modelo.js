const { MongoClient, ObjectId } = require('mongodb');

class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null; // Setting id to null by default
    }
}

class Database {
    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;
        this.client = new MongoClient(this.url, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async conectarDb() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');
            this.db = this.client.db(this.dbName);
            return this.db;
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
    }

    async inserir(contato) {
        try {
            const db = await this.conectarDb();
            const collection = db.collection('contatos');
            const result = await collection.insertOne({
                nome: contato.nome,
                email: contato.email,
                telefone: contato.telefone
            });
            contato.id = result.insertedId;
            return contato;
        } catch (err) {
            console.error('Error inserting contact:', err);
            throw err;
        }
    }

    async alterar(contato) {
        try {
            const db = await this.conectarDb();
            const collection = db.collection('contatos');
            await collection.updateOne(
                { _id: ObjectId(contato.id) },
                { $set: { nome: contato.nome, email: contato.email, telefone: contato.telefone } }
            );
        } catch (err) {
            console.error('Error updating contact:', err);
            throw err;
        }
    }

    async deletar(contato) {
        try {
            const db = await this.conectarDb();
            const collection = db.collection('contatos');
            await collection.deleteOne({ nome: contato.nome });
        } catch (err) {
            console.error('Error deleting contact:', err);
            throw err;
        }
    }

    async buscar(contato) {
        try {
            const db = await this.conectarDb();
            const collection = db.collection('contatos');
            const result = await collection.findOne({ nome: contato.nome });
            if (result) {
                contato.nome = result.nome;
                contato.email = result.email;
                contato.telefone = result.telefone;
            }
            return result;
        } catch (err) {
            console.error('Error searching for contact:', err);
            throw err;
        }
    }
}

module.exports = { Contato, Database };
