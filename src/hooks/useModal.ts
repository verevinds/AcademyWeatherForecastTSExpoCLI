import {useState} from 'react';

/**
 * Hook to work a state modal.
 * @param {boolean} defaultState option parameter the state modal. Defaults to false.
 * @returns object { isOpen, open, close, toggle } with state modal and function fot handle state modal.
 * @example
 * const { isOpen, open, close, toggle } = useModal();
 */
export const useModal = (defaultState = false) => {
  const [isOpen, toggleOpen] = useState(defaultState);

  /**
   * @description function sets the value to true to open the modal.
   */
  const openModal = () => toggleOpen(true);
  /**
   * @description function sets the value to false to close the modal.
   */
  const closeModal = () => toggleOpen(false);
  /**
   * @description function toggles the value by changing the value to the opposite for the modal.
   * @param {boolean} state - options parameter the state to which you want to move the toggle. Only TRUE or FALSE
   * @example
   * toggleOpenModal() // Before: state = false; After: state = true
   * toggleOpenModal(false) // Before: state = false; After: state = true
   * toggleOpenModal(true) // Before: state = true; After: state = false
   */
  const toggleOpenModal = (state: boolean) => toggleOpen(state);

  return {
    isOpen,
    open: openModal,
    close: closeModal,
    toggle: toggleOpenModal,
  };
};
