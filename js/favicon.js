"use strict";

function setupIcons() {
  const lightSchemeIcon = document.querySelector("link#favicon-l");
  const darkSchemeIcon = document.querySelector("link#favicon-d");

  function setLight() {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }

  function setDark() {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  }

  const matcher = window.matchMedia("(prefers-color-scheme:dark)");
  function onUpdate() {
    if (matcher.matches) {
      setDark();
    } else {
      setLight();
    }
  }
  matcher.addListener(onUpdate);
  onUpdate();
}

setupIcons();
