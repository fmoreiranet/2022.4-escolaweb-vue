<template>
    <section class="container">
        <h2>Cadastro Aluno</h2>
        <form action="" class="" id="formCadadastro" autocomplete="off">
            <input type="hidden" id="matricula">
            <div class="col mt-3">
                <label for="nome" class="">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="" v-model="aluno.nome">
            </div>
            <div class="col mt-3">
                <label for="email" class="">E-mail:</label>
                <input type="email" class="form-control" id="email" placeholder="" autocomplete="off">
            </div>
            <div class="col mt-3">
                <label for="data_nasc" class="">Data Nasc.</label>
                <input type="date" class="form-control" id="data_nasc" placeholder="">
            </div>
            <div class="col mt-3">
                <label for="senha" class="">Senha</label>
                <input type="password" class="form-control" id="senha" placeholder="" autocomplete="off">
            </div>

            <div class="col mt-3">
                <button class="btn btn-danger" type="reset">Cancelar</button>
                <button class="btn btn-primary" type="button" @click="enviarDados()">Salvar</button>
            </div>
        </form>
        {{ aluno.nome }}
    </section>
</template>

<script setup lang="ts">
import Aluno from '@/model/Aluno';
import AlunoService from '@/services/AlunoService';
import { ref } from 'vue';

const aluno = ref(new Aluno);

function enviarDados() {
    try {
        aluno.value.validarDados();
        const alunoService = new AlunoService();
        alunoService.addAluno(aluno.value, function (result: any) {
            //limparForm();
            alert(result);
        });
    } catch (error) {
        alert("Erro: \n" + error);
    }
}

</script>

<style scoped></style>