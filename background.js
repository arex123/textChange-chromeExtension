chrome.runtime.onInstalled.addListener(() => {
  // console.log('Extension Installed!');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab?.url?.startsWith?.('http')) {
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: replaceValues
      });
    }, 1000);
  }
});

function replaceValues() {
  // console.log("inside replace method")

  const div = document.querySelector(".css-l27gv9");


  const button = div.querySelector("button");

  button.addEventListener("click", () => {

    setTimeout(() => {

      // console.log("button clicked");

      const elementsToCheck = document.getElementsByClassName("css-jux5io");

      console.log("elementsToCheck: ", elementsToCheck);
      for (let i = 0; i < elementsToCheck.length; i++) {
        const element = elementsToCheck[i];

        if (element.textContent === "4.65") {
          element.textContent = "41";
        }
      }
    }, 100)
  });

}

