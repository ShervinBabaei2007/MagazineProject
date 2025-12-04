document.addEventListener(`DOMContentLoaded`, () => {
  const body = document.body;
  const toggleBtn = document.getElementById(`theme-toggle`);

  // in case buttojn is not on page.
  if (!toggleBtn) return;

  // regular and dark mode
  const LIGHT_BG = `lightskyblue`;
  const DARK_BG = `#25437a`; // bit more darker, better for the eyes

  // save prefrence to local Storage
  const savedTheme = localStorage.getItem(`soccerWeeklyTheme`) || `light`;

  if (savedTheme === `dark`) {
    body.style.backgroundColor = DARK_BG;
    toggleBtn.textContent = `☀️`; // sun = bright mode (you are in dark bg)
  } else {
    body.style.backgroundColor = LIGHT_BG;
    toggleBtn.textContent = `🌙`; // Moon = night mode (you are in light bg)
  }

  toggleBtn.addEventListener(`click`, () => {
    {
      const currentTheme = localStorage.getItem(`soccerWeeklyTheme`) || `light`;

      if (currentTheme === `light`) {
        // then switch it to dark
        body.style.backgroundColor = DARK_BG;
        toggleBtn.textContent = `☀️`;
        localStorage.setItem(`soccerWeeklyTheme`, `dark`);
      } else {
        // switch it to light
        body.style.background = LIGHT_BG;
        toggleBtn.textContent = `🌙`;
        localStorage.setItem(`soccerWeeklyTheme`, `light`);
      }
    }
  });
});
