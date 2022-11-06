<template>
	<!-- <transition name="slide" appear :duration="500">
		<div 
		@click.stop="$parent"
			:close="closeModal"
			class="bg transition-all bg-modal"
			@click="close"
		>
			<div v-if="type === 'normal'" class=" modal bg-white rounded-[10px] overflow-x-hidden overflow-y-auto shadow-xl transform transition-all box-border">
				<div class="w-full h-full">
					<slot />
				</div>
			</div>
		</div>
	</transition> -->
</template>

<script lang="ts" setup>
// import { modal } from '@/composables/modals'
// const props = defineProps({
//     modal: {
// 		type: String,
// 		required: true
// 	},
// 	type: {
// 		type: String,
// 		default: 'normal'
// 	}
// })
// const close = (e) => {
// 	if (e.target.className.includes('bg-modal')) return closeModal()
// }
// const closeModal = () => {
// 	modal.close(props.modal)
// }
</script>

<style scoped>
/* body{
	    filter: blur(8px);
  -webkit-filter: blur(8px);
} */
.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.50);
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
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}
</style>