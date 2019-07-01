
function getElementLeftPosition() {
  console.log('getElementLeftPosition');
  const DEV_MAIN_WIDTH = 100;
  const positionLeft = document.body.clientWidth - DEV_MAIN_WIDTH;
  return `${positionLeft}px`;
}
var devMain = document.createElement('div');

devMain.id = 'devMain';
devMain.style.position = 'fixed';
devMain.style.width = '250px';
devMain.style.height = '400px';
devMain.style.opacity = '1';
devMain.style['z-index'] = '100000';
devMain.style.background = 'blue';
devMain.style.top = '0px';
// devMain.style.left = getElementLeftPosition();
devMain.style.left = '770px';
document.body.appendChild(devMain);

// window.addEventListener('resize', () => {
//   devMain.style.left = getElementLeftPosition();
// });

function createElement(createElementName, elemetParams) {
  const element = document.createElement(createElementName);
  
}

/**
 * 
 */
function createBodyStructure() {

}