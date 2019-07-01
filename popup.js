// function testCode() {
//   alert();
//   const divElement = document.createElement('div');
//   document.body.appendChild(divElement);
// };


// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// chrome.pageAction.onClicked.addListener(testCode);



// changeColor.onclick = function(element) {
//   let color = element.target.value; 
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     // chrome.tabs.executeScript(
//     //     tabs[0].id,
//     //     // {code: 'document.body.style.backgroundColor = "' + color + '";'},
//     //     {code: testCode}
//     //     // () => {
//     //     //   // alert(document);
//     //     //   const divElement = document.createElement('div');
//     //     //   document.body.appendChild(divElement);
//     //     // }
//     // );
//     chrome.tabs.executeScript({
//       file: 'contentScript.js'
//     });
//   });
// };

(function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: 'contentScript.js'
      // file: ['content.html', 'contentScript.js']
    });
  });
}())