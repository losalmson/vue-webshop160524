<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IProduct } from '../models/IProduct';
import { getProducts } from '../services /productService';

const state = ref<IWebshopState>

    interface IWebshopState {
        products: IProduct [];
    };

onMounted(async () => {
    state.value.products = await getProducts();
})
</script>

<template>
</template>

<style scoped>
</style>