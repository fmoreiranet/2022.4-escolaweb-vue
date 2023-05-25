import { process } from "@/env";
import type Aluno from "@/model/Aluno.js";
import type { IResponse } from "@/types/Response.js";

export default class UserService {
    getToken() {
        const storage = sessionStorage.getItem("token");
        if (storage) {
            const token = JSON.parse(storage);
            if (token) {
                return "Bearer " + token;
            }
        }
        return "";
    }
    getHeaders() {
        const token = this.getToken();
        const header = {
            'Accept': '*/',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': 'application/json',
            'Authorization': token
        }
        return header;
    }

    //CRUD ----------------------
    async addAluno(aluno: Aluno, callback: any) {

        const parameter = {
            method: 'POST',
            body: JSON.stringify(aluno),
            headers: this.getHeaders()
        };
        await fetch(process.env.URL_API + "aluno", parameter)
            .then(res => res.text())
            .then(txt => {
                const result = JSON.parse(txt);
                this.valideResult(result)
                return callback(result.message);
            })
            .catch(err => {
                throw new Error(err);
            })
    }

    async getAllAluno(callback: any) {
        const parameter = {
            method: 'GET',
            headers: this.getHeaders()
        };
        const url = new URL(process.env.URL_API + "aluno");
        await fetch(url.href, parameter)
            .then(res => res.text())
            .then(content => {
                const result = JSON.parse(content);
                this.valideResult(result)
                return callback(result.dados);
            })
            .catch(err => {
                throw err;
            });
    }

    async getAluno(matricula: number, callback: any) {
        const obj = { matricula: matricula };
        const parameter = {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: this.getHeaders()
        };
        await fetch(process.env.URL_API + "aluno", parameter)
            .then(res => res.text())
            .then(content => {
                const result = JSON.parse(content);
                this.valideResult(result)
                return callback(result.dados[0]);
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    async deleteAluno(matricula: number, callback: any) {
        const obj = { matricula: matricula };
        const parameter = {
            method: 'DELETE',
            body: JSON.stringify(obj),
            headers: this.getHeaders()
        };
        await fetch(process.env.URL_API + "aluno", parameter)
            .then(res => res.text())
            .then(content => {
                const result = JSON.parse(content);
                this.valideResult(result)
                return callback(result);
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    async loginAluno(email: string, senha: string, callback: any) {
        const obj = { email: email, senha: senha };
        const parameter = {
            method: 'POST',
            body: JSON.stringify(obj)
        };
        await fetch(process.env.URL_API + "aluno/login", parameter)
            .then(res => res.text())
            .then(content => {
                const result = JSON.parse(content);
                this.valideResult(result)
                sessionStorage.setItem("token", JSON.stringify(result.token));
                return callback(result.dados[0]);
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    valideResult(result: IResponse) {
        if (result.error && (result.error !== "" || result.error !== null))
            throw new Error(result.error);
    }
}