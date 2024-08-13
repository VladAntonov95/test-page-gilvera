export const addDots = (container) => {
  const dots = document.createElement("span");
  dots.textContent = " ... ";
  container.appendChild(dots);
};
