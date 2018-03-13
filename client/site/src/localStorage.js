/**
 * localStorage
 *
 * Persist data to localStorage.
 */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reactState');
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
    localStorage.setItem('reactState', serializedState);
  } catch (err) {
    // Ignore for now
  }
};

export const resetState = () => {
  try {
    localStorage.setItem('reactState', JSON.stringify({}));
  } catch (err) {
    // Ignore for now
  }
};