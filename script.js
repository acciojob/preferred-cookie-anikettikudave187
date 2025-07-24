// Set a cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// Get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return val;
  }
  return null;
}

// Apply saved preferences
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Save preferences when form is submitted
document.getElementById("settings-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
});

// Apply preferences on page load
applyPreferences();

