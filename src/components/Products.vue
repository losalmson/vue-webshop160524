<script setup lang="ts">
import { IProduct } from '../models/IProduct';
import Product from './Product.vue';

interface ProductsProp{
    products: IProduct[];
}

</script>

<template>
    <section class="products">
    <Product 
    v-for="product in products"
    :product="product"
    :key="product.id"
    />
    </section>
</template>

<style scoped>
</style>