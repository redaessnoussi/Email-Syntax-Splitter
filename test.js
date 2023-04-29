// function addHtmlBeforeBody(emailBody, htmlCode) {
//   const bodyTag = "</body>";
//   const bodyTagIndex = emailBody.lastIndexOf(bodyTag);
//   if (bodyTagIndex !== -1) {
//     const newEmailBody =
//       emailBody.slice(0, bodyTagIndex) +
//       htmlCode +
//       emailBody.slice(bodyTagIndex);
//     return newEmailBody;
//   } else {
//     console.log("Error: No </body> tag found in email body.");
//     return emailBody;
//   }
// }

// const emailBody =
//   "Here's some email content <body><p>This is the email body</p></body>";
// const htmlCode = "<p>This is the added HTML code</p>";
// const newEmailBody = addHtmlBeforeBody(emailBody, htmlCode);
// console.log(newEmailBody);
