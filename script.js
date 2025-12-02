 const buttons = document.querySelectorAll(".toggle-buttons__button");
const activeSpan = document.createElement("span");
activeSpan.classList.add("toggle-buttons__active");
activeSpan.setAttribute("aria-hidden", "true");

const firstItem = buttons[0].parentElement;
firstItem.appendChild(activeSpan);

buttons.forEach((button, index) => {
  button.style.viewTransitionName = `button-${index + 1}`;
  button.setAttribute("aria-pressed", index === 0);

  button.addEventListener("click", () => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");

    const newItem = button.parentElement;

    if (!document.startViewTransition) {
      newItem.appendChild(activeSpan);
      return;
    }

    document.startViewTransition(() => {
      newItem.appendChild(activeSpan);
    });
  });
});
