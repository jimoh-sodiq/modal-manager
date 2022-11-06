<template>
  <transition name="slide" appear :duration="500">
      <div  v-if="modalIsOpen" class="bg transition-all bg-modal">
        <div
          class="modal rounded-[10px] overflow-x-hidden overflow-y-auto shadow-xl transform transition-all box-border"
        >
          <component :is="LoadedModal" />
        </div>
      </div>
  </transition>
</template>

<script setup>
import { currentModal, modalIsOpen } from "./ModalState";
import JModal from "./JModal";

// this must be in this writing syntax else vite wont recognise it as a dynamic import
const LoadedModal = ref(null);

watch(currentModal, (newValue, oldValue) => {
  LoadedModal.value = defineAsyncComponent(() => import(`./${newValue}.vue`));
});
</script>

// hint: you can create a base modal with styling and give it a slot then all
other modals will take it as parent

<style scoped>
/* body{
	    filter: blur(8px);
  -webkit-filter: blur(8px);
} */
.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(2px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  /* transform: scale(0); */
  transform: translateX(-100vw);
  /* opacity: 0; */
}
</style>
