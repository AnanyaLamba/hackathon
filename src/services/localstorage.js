export const getRetries = () => {
    return parseInt(localStorage.getItem("retries")) || 0;
  };
  
  export const setRetries = (count) => {
    localStorage.setItem("retries", count);
  };
  