<template>
    <LoadingComponent :show="loading" />
    <section class="container">
        <div class="row">
            <div class="col-10 col-md-6 m-auto">
                <h2 class="text-center">Entrar como Aluno</h2>
                <form action="#" class="" id="formEntrarAluno" autocomplete="off">

                    <div class="col mt-3">
                        <label for="email" class="">E-mail:</label>
                        <input type="email" class="form-control" id="email" placeholder="" v-model="email"
                            autocomplete="off">
                    </div>

                    <div class="col mt-3">
                        <label for="senha" class="">Senha</label>
                        <input type="password" class="form-control" id="senha" placeholder="" v-model="pass"
                            autocomplete="off">
                    </div>

                    <div class="col mt-3 text-end">
                        <RouterLink class="btn btn-danger me-3" type="reset" role="button" to="/">Cancelar</RouterLink>
                        <button class="btn btn-primary" type="button" @click="entrarAluno()">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue';
import router from '@/router';
import AlunoService from '@/services/AlunoService';
import { ref } from 'vue';

const email = ref("");
const pass = ref("")
const loading = ref(false);

async function entrarAluno() {
    try {
        loading.value = true;
        const alunoService = new AlunoService();
        await alunoService.loginAluno(email.value, pass.value, (result: any) => {
            console.log(result);
            if (result) {
                sessionStorage.setItem("userInfo", JSON.stringify(result));
                router.push("/");
            }
        });
    } catch (error) {
        alert("Erro: \n" + error);
    } finally {
        loading.value = false
    }
}
</script>

<style scoped></style>