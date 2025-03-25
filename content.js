chrome.storage.local.get("scriptEnabled", function (val) {
  console.log(val.scriptEnabled);
  DarkMode(val.scriptEnabled)

})

function DarkMode(enabled) {
  if (enabled) {
    console.log("script already enabled");
  } else {
    console.log("script not already enabled");
    var cover = document.createElement("div");
    let css = `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    mix-blend-mode: difference;
    z-index: 2324561;
`;
    cover.setAttribute("style", css);
    document.body.appendChild(cover);
    let headings = document.getElementsByTagName("h1");

    console.log("Found", headings.length, "h1 elements on this page");
  }
};

console.log("test test");



chrome.storage.onChanged.addListener(function(changes){

  DarkMode(changes.newValue)

})


  // chrome.storage.local.get("scriptEnabled", function (val) {
  //   console.log("test");
  //   console.log(val.scriptEnabled);
