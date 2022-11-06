const modalIsOpen = ref(false)
const currentModal = ref(null)
// add typescript for the modalName to enable autocomplete

// adding type for the modal is not necessary anymore as vite will throw an error when the component for the modal does not exist

const openModal = (modalName: string) => {
    // closeModal() can be helpful if you want to close rather than replace existing opened modal
    // note: calling nexttick might be needed to make sure it waits for the dom to change before openinig
    modalIsOpen.value = true
    currentModal.value = modalName
}

const closeModal = () => {
    modalIsOpen.value = false
    currentModal.value = null
}

export {
    modalIsOpen, currentModal, openModal, closeModal
}

//  this handles the state of the modal

// can create a base modal with type props for outside click enable to close or not