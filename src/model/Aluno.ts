export default class Aluno {
    matricula: number = 0;
    nome: string = "";
    email: string = "";
    senha: string = "";
    data_nasc: string = "";
    ativo: boolean = true

    validarDados() {
        let erros = "";
        if (this.nome == "") {
            erros += "Nome em branco.\n";
        }
        if (this.email == "") {
            erros += "E-mail em branco.\n";
        }
        if (this.senha == "") {
            erros += "Senha em branco.\n";
        }
        if (erros != "") throw erros;
    };
}