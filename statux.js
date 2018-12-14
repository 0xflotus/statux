function main() {
  const setOnlineStatus = () =>
    (document.querySelector("#online__status").innerHTML = navigator.onLine
      ? "&#x2611;"
      : "&#x2612;");
  setOnlineStatus();
  ["online", "offline"].forEach(e =>
    window.addEventListener(e, setOnlineStatus)
  );

  [["#operating__system", "oscpu"], ["#user__agent", "userAgent"]].forEach(
    el => (document.querySelector(el[0]).innerHTML = navigator[el[1]])
  );
}

window.addEventListener("load", main);
