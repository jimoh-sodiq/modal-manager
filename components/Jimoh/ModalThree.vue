<template>
  <div class="h-screen w-screen flex bg-transparent" tabindex="1" @keydown.esc="closeModal">
    <div class="h-full w-1/4 bg-white px-4 py-6 space-y-5">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et
        recusandae quidem odit asperiores saepe suscipit, architecto rem
        dolorem, iste tempore veritatis illum! Tempora ipsam porro amet
        voluptates fuga ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et
        recusandae quidem odit asperiores saepe suscipit, architecto rem
        dolorem, iste tempore veritatis illum! Tempora ipsam porro amet
        voluptates fuga ex.
      </p>
      <div class="flex gap-x-5">
        <button
          class="bg-green-700 text-white hover:bg-green-600 transition-colors font-medium text-sm py-2 rounded uppercase w-full"
          @click="closeModal"
        >
          Submit
        </button>
        <button
          class="bg-red-700 text-white hover:bg-red-600 transition-colors font-medium text-sm py-2 rounded uppercase w-full"
          @click="closeModal"
        >
          Close
        </button>
      </div>
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
