<template>
  <div class="h-[50vh] w-[60vh] bg-white">
    <button
    @click="closeModal"
      class="font-medium text-gray-200 bg-gray-500 py-1 px-4 mx-auto text-center rounded"
    >
      Close
    </button>
    <button class="px-3 py-1 bg-red-300 rounded text-gray-700" @click="openModal('ModalTwo')">Modal two</button>
  </div>
</template>

<script setup>
import {
  currentModal,
  modalIsOpen,
  openModal,
  closeModal,
} from "@/components/Jimoh/ModalState";
</script>
