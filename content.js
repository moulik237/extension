function extractEmails() {
  const emailElements = document.querySelectorAll('a[href^="mailto:"]');
  const gmailEmails = [];

  emailElements.forEach((emailElement) => {
    const email = emailElement.href.replace('mailto:', '');
    if (email.endsWith('@gmail.com')) {
      gmailEmails.push(email);
    }
  });

  return gmailEmails;
}

const extractedEmails = extractEmails();
console.log('Extracted Gmail Email Addresses:');
extractedEmails.forEach((email) => {
  console.log(email);
});
