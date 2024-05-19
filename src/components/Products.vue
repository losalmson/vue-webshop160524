<script setup lang="ts">
import { IProduct } from '../models/IProduct';
import Product from './Product.vue';

interface ProductsProp{
    products: IProduct[];
}

</script>

<template>
    <Product />
</template>

<style scoped>
</style>