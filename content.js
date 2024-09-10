//First  run deterence
function DarkMode(){
  chrome.storage.local.get('scriptEnabled', (data) => {
    if (data.scriptEnabled) {
      console.log("script already enabled")}
      else{
  var cover = document.createElement('div');
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
  cover.setAttribute('style', css);
  document.body.appendChild(cover);
  let headings = document.getElementsByTagName('h1');

  console.log('Found', headings.length, 'h1 elements on this page');}
})};

DarkMode()