function isMobile() {
  // List of mobile user agents
  const userAgent = navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}

function redirectToMobileSite() {
  if (isMobile()) {
    window.location.href = "[REPLACE_WITH_MOBILE_URL]"; // Update with your mobile site URL
  }
}

window.onload = redirectToMobileSite;
