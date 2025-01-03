export const checkLocalStorage = () => {
  let jolibeetoken = null;

  try {
    jollibeetoken = JSON.parse(localStorage.getItem("jolibeetoken"));
  } catch (error) {
    jolibeetoken = null;
  }
  return jolibeetoken;
};
