/**
 * localStorage
 *
 * Persist data to localStorage.
 */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('react-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reactServerless', serializedState);
  } catch (err) {
    // Ignore for now
  }
};