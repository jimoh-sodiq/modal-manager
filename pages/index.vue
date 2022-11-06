<template>
    <h1>Hello index page</h1>
    <button @click="openModal('JModal')" class="rounded px-5 py-2 bg-red-500 text-white">Open Modal</button>
    <button @click="openModal('ModalTwo')" class="rounded px-5 py-2 bg-red-500 text-white">Close Modal</button>
</template>

<script setup>
import { currentModal, modalIsOpen, openModal, closeModal } from '@/components/Jimoh/ModalState';

</script>