<template>
    <section class="container">
        <h2>Cadastro Aluno</h2>
        <form action="" class="" id="formCadadastro" autocomplete="off">
            <input type="hidden" id="matricula">
            <div class="col mt-3">
                <label for="nome" class="">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="">
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
                <button class="btn btn-primary" type="button" id="enviar-dados">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>