<script setup lang="ts">
import { IProduct } from '../models/IProduct';

interface ProductProps {
    product: IProduct;
}

defineProps<ProductProps>();


</script>

<template>
    <article class="product">
        <h3> {{ product.name }}</h3>
        <div class="image-container">
            <img :src="product.imageUrl" :alt="product.name"/>
            <p> {{ product.description }}</p>
            <span> {{ product.price }}</span>
        </div>
    </article>
</template>

<style scoped>
</style>