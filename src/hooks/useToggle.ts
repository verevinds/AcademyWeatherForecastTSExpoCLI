import {useState} from 'react';

/**
 * Hook to work the toggle. (True / False)
 * @description Returns a сartege where the first value is boolean and is responsible for the state of the toggle,
 * and the second argument is a function for changing the state of the toggle.
 * @param {boolean} defaultState - Default state value, defaults to false
 * @returns {[boolean, ToggleState]} the cartage [boolean, function]
 * @example
 * const [state, toggleState] = useToggle(true);
 */
export const useToggle = (defaultState: boolean | undefined = false) => {
  const [state, setState] = useState<boolean>(defaultState);

  /**
   * @typedef {toggleState} ToggleState
   * @param {boolean} state - the state to which you want to move the toggle. Only TRUE or FALSE
   * @example
   * toggleState(true) // Before: state = false; After: state = true
   * toggleState(false) // Before: state = true; After: state = false
   * toggleState() // Before: state = false; After: state = true
   */
  const toggleState = (state: boolean) => {
    setState(prevState => (typeof state === 'boolean' ? state : !prevState));
  };

  return [state, toggleState];
};
