const demoButtons = document.querySelectorAll(".demo-card");
const featuredVideo = document.querySelector("#featured-video");
const featuredSource = document.querySelector("#featured-video-source");
const playerTitle = document.querySelector("#player-title");
const playerDescription = document.querySelector("#player-description");

demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { title, description, video } = button.dataset;

    demoButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    playerTitle.textContent = title;
    playerDescription.textContent = description;

    if (featuredSource.getAttribute("src") !== video) {
      featuredSource.setAttribute("src", video);
      featuredVideo.load();
      const playPromise = featuredVideo.play();

      if (playPromise instanceof Promise) {
        playPromise.catch(() => {
          /* Some browsers block autoplay after source swap. */
        });
      }
    }
  });
});

const revealTargets = document.querySelectorAll(
  ".value-strip article, .feature-card, .showcase-player, .demo-card, .highlight-card, .benefits-list article, .architecture-panel, .cta-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
  revealObserver.observe(element);
});
