<template>
    <div class='loading-screen' v-if="show">
        <div class='loading-spinner'>
        </div>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped >
.loading-screen {
    z-index: 1000;
    position: absolute;
    background-color: #222A;
    height: 100vh;
    width: 100vw;
}

.loading-spinner {
    position: relative;
    top: 50%;
    left: 50%;
    z-index: 1000;
    width: 50px;
    height: 50px;
    margin: -50px 0 0 -50px;
    transform: scale(-50%, -50%);
    border-radius: 50%;
    border: 3px solid #f3f3f391;
    border-top: 3px solid #41050536;
    animation: spin 1s both infinite;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>