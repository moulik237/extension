document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("getToken").addEventListener("click", () => {
    chrome.identity.getAuthToken({ interactive: true }, async (token) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      try {
        const response = await fetch("https://people.googleapis.com/v1/people/me?personFields=emailAddresses", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch user email. Error: ${errorData.error.message}`);
        }
        const data = await response.json();
        const userEmail = data.emailAddresses.find(address => address.metadata.primary).value;
        document.getElementById("token").textContent = `Email: ${userEmail}`;
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
});

