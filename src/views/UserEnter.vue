<template>
    <section class="container">
        <div class="row">
            <div class="col-10 col-md-6 m-auto">
                <h2 class="text-center">Entrar como Aluno</h2>
                <form action="#" class="" id="formEntrarAluno" autocomplete="off">

                    <div class="col mt-3">
                        <label for="email" class="">E-mail:</label>
                        <input type="email" class="form-control" id="email" placeholder="" autocomplete="off">
                    </div>

                    <div class="col mt-3">
                        <label for="senha" class="">Senha</label>
                        <input type="password" class="form-control" id="senha" placeholder="" autocomplete="off">
                    </div>

                    <div class="col mt-3">
                        <button class="btn btn-primary" type="button" id="entrar-aluno">Entrar</button>
                    </div>
                </form>
                <div class="col mt-3">
                    <button class="btn btn-primary" type="button" id="sair-aluno">Sair</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>