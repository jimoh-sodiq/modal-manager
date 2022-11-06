<template>
  <div class="h-screen w-screen flex items-center justify-center bg-transparent" @click.self="closeModal">
    <div class="h-1/2 w-1/2 bg-white rounded-md">
     this is modal two component
     <p>It can only be closed by clickin outside of it</p>
    </div>
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
