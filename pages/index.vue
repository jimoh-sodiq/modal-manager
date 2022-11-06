<template>
    <h1>Index Page</h1>
    <div class="space-x-5 p-4">
        <button @click="openModal('JModal')" class="rounded px-5 py-2 bg-red-500 text-white">Modal One</button>
    <button @click="openModal('ModalTwo')" class="rounded px-5 py-2 bg-red-500 text-white">Modal Two</button>
    <button @click="openModal('ModalThree')" class="rounded px-5 py-2 bg-red-500 text-white">Modal Three</button>
    </div>
</template>

<script setup>
import { currentModal, modalIsOpen, openModal, closeModal } from '@/components/Jimoh/ModalState';

</script>