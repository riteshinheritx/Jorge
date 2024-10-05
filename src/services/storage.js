// Function to set an item in local storage
export function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to get an item from local storage
export function getLocalStorageItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Function to remove an item from local storage
export function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}
