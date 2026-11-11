// Give footer CV links a fresh address when opened, including from a restored page.
(() => {
  const links = Array.from(document.querySelectorAll("footer a[href]")).filter(
    link => new URL(link.href).pathname.endsWith("/cv-colvin-2026.pdf")
  );

  const refresh = link => {
    const url = new URL(link.href);
    url.searchParams.set("v", String(Date.now()));
    link.href = url.href;
  };

  links.forEach(link => {
    refresh(link);
    ["pointerdown", "click", "contextmenu"].forEach(event => {
      link.addEventListener(event, () => refresh(link));
    });
  });

  window.addEventListener("pageshow", () => links.forEach(refresh));
})();
