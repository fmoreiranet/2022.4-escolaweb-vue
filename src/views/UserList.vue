<template>
    <div>
        <table class='table'>
            <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Data Nasc.</th>
                <th><img src="/img/trash-can-regular.svg" alt="" class="icon"></th>
                <th><img src="/img/pen-to-square-regular.svg" alt="" class="icon"></th>
            </tr>
            <tr>
                <td>${alunos[index].matricula}</td>
                <td>${alunos[index].nome}</td>
                <td>${alunos[index].email}</td>
                <td>${alunos[index].data_nasc}</td>
                <td><img src="/img/trash-can-regular.svg" alt="" class="icon"
                        onclick="removerAluno(${alunos[index].matricula}, '${alunos[index].nome}')"></td>
                <td><img src="/img/pen-to-square-regular.svg" alt="" class="icon"
                        onclick="editarAluno(${alunos[index].matricula})"></td>
            <tr>
        </table>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>