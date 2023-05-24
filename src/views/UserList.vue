<template>
    <div>
        <LoadingComponent :show="loading" />
        <table class='table'>
            <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Data Nasc.</th>
                <th><img src="/img/trash-can-regular.svg" alt="" class="icon"></th>
                <th><img src="/img/pen-to-square-regular.svg" alt="" class="icon"></th>
            </tr>
            <tr v-for="user in listUser" :key="user.matricula">
                <td>{{ user.matricula }}</td>
                <td>{{ user.nome }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.data_nasc }}</td>
                <td><img src="/img/trash-can-regular.svg" alt="" class="icon" onclick="removerAluno()"></td>
                <td><img src="/img/pen-to-square-regular.svg" alt="" class="icon" onclick="editarAluno()"></td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue';
import AlunoService from '@/services/AlunoService';
import { onMounted, ref } from 'vue';

const listUser = ref();
const loading = ref(false);

onMounted(() => {
    getUser()
})

async function getUser() {
    try {
        loading.value = true;
        const alunoService = new AlunoService();
        await alunoService.getAllAluno((result: any) => {
            listUser.value = result
        });
    } catch (error) {
        alert("Erro: \n" + error);
    } finally {
        loading.value = false;
    }
}

function removerAluno() { }

function editarAluno() { }

</script>

<style scoped>
.icon {
    cursor: pointer;
    height: 30px;
}
</style>