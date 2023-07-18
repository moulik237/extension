console.log("chrome extension works chrome.enterprise.networkingAttributes.getNetworkDetails");

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(async () => {
    try {
      const token = await chrome.identity.getAuthToken({ interactive: false });
      console.log("Token:", token);
      console.log(portConnected());
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

// chrome.enterprise.networkingAttributes.getNetworkDetails(

networkDetails();
function networkDetails() {
  console.log("Network Details function starts");
  chrome.enterprise.networkingAttributes.getNetworkDetails(function(result) {
      var extension_info_array = new Array();
      for (var i = 0; i < result.length; i++) { 
          var extDetails = {};
          console.log(result[i].macAddress);
          extension_info_array.push(extDetails);
      }
      console.log("Network Details function ends");
  });
}



  