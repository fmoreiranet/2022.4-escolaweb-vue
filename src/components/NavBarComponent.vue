<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Escola WEB</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Inicio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">Sobre</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/user/list">Lista Alunos</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item menu-aluno-off">
                        <RouterLink class="nav-link" to="/user/add">Cadastro</RouterLink>
                    </li>
                    <li class="nav-item menu-aluno-off">
                        <RouterLink class="nav-link" to="/user/enter">Entrar</RouterLink>
                    </li>
                    <li class="nav-item menu-aluno-on">
                        Perfil
                    </li>
                    <li class="nav-item menu-aluno-on">
                        <a class="nav-link" href="#" @click="sairAluno()">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import router from '@/router';

function sairAluno() {
    try {
        sessionStorage.removeItem("userInfo");
        router.push("/");
    } catch (error) {
        alert("Erro: \n" + error);
    }
}
</script>