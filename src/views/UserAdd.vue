<template>
    <LoadingComponent :show="loading" />

    <NavBarComponent />
    <section class="container">
        <h2>Cadastro Aluno</h2>
        <form action="" class="" id="formCadadastro" autocomplete="off">
            <input type="hidden" id="matricula">
            <div class="col mt-3">
                <label for="nome" class="">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="" v-model="aluno.nome" required>
            </div>
            <div class="col mt-3">
                <label for="email" class="">E-mail:</label>
                <input type="email" class="form-control" id="email" placeholder="" autocomplete="off" v-model="aluno.email"
                    required>
            </div>
            <div class="col mt-3">
                <label for="data_nasc" class="">Data Nasc.</label>
                <input type="date" class="form-control" id="data_nasc" placeholder="" v-model="aluno.data_nasc">
            </div>
            <div class="col mt-3">
                <label for="senha" class="">Senha</label>
                <input type="password" class="form-control" id="senha" placeholder="" autocomplete="off"
                    v-model="aluno.senha" required>
            </div>

            <div class="col mt-3 text-end">
                <RouterLink class="btn btn-danger me-3" type="reset" role="button" to="/">Cancelar</RouterLink>
                <button class="btn btn-primary" type="button" @click="enviarDados()">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import Aluno from '@/model/Aluno';
import AlunoService from '@/services/AlunoService';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const aluno = ref(new Aluno);
const loading = ref(false);

async function enviarDados() {
    try {
        aluno.value.validarDados();
        loading.value = true;
        const alunoService = new AlunoService();
        await alunoService.addAluno(aluno.value, function (result: any) {
            //limparForm();
            alert(result);
        });
    } catch (error) {
        alert("Erro: \n" + error);
    } finally {
        loading.value = false;
    }
}

</script>

<style scoped></style>