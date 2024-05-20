export default function main() {
  const root = document.querySelector("#root");
  const dark_btn = document.querySelector(".toggle");
  const footer = document.querySelector(".footer-container");

  dark_btn?.addEventListener("click", () => {
    if (root?.classList.contains("dark")) {
      root.classList.remove("dark");
      footer?.classList.remove("dark");
      dark_btn.classList.remove("fa-sun");
      dark_btn.classList.add("fa-cloud-moon");
    } else {
      root?.classList.add("dark");
      footer?.classList.add("dark");
      dark_btn.classList.remove("fa-cloud-moon");
      dark_btn.classList.add("fa-sun");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const offset = 40;
      const target = document.querySelector(this.getAttribute("href"));
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    const offset = 40;
    const target = document.querySelector("#projects");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}
