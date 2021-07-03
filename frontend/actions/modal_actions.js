  export const CLOSE_MODAL = "CLOSE_MODAL";
 export const OPEN_MODAL = "OPEN_MODAL";

export const openModal = (modal, target) => {
  debugger
  return {
    type: OPEN_MODAL,
    modal,
    target
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}