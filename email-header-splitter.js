console.log("hola");

function addHtmlBeforeBody(emailBody, htmlCode) {
  const bodyTag = "</body>";
  const bodyTagIndex = emailBody.lastIndexOf(bodyTag);
  if (bodyTagIndex !== -1) {
    const newEmailBody =
      emailBody.slice(0, bodyTagIndex) +
      htmlCode +
      emailBody.slice(bodyTagIndex);
    return newEmailBody;
  } else {
    console.log("Error: No </body> tag found in email body.");
    return emailBody;
  }
}

// REMOVING HEADER ELEMENTS
function removeHeaderElements(headerText) {
  const elementsToRemove = [
    "Delivered-To:",
    "Return-Path:",
    "DKIM-Signature:",
    "Received:",
    "Date:",
  ];
  const headerLines = headerText.split(/\r?\n/);
  const filteredHeader = headerLines.filter((line) => {
    const element = elementsToRemove.find((el) => line.startsWith(el));
    return !element;
  });

  return filteredHeader.join("\n");
}

// SPLITING THE EMAIL HEADERS
function splitEmails(htmlEmail) {
  const boundaryRegex = /--(.+)/;
  const boundaryMatch = htmlEmail.match(boundaryRegex);

  if (!boundaryMatch) {
    return [htmlEmail];
  }

  const boundary = boundaryMatch[0];
  const emails = htmlEmail.split(boundary);

  // Add the boundary and email header back to each email
  for (let i = 1; i < emails.length; i++) {
    emails[i] = boundary + emails[i];
  }

  return emails;
}

const myButton = document.getElementById("btn");

// SHOWING THE RESULTS IN TEXT AREA
myButton.addEventListener("click", function () {
  const htmlCode = `\n[start_e_qp]\n <CeNteR>\n <a href="[placeholder4]#[click]"><h2>[placeholder3]</h2></a><br><br>\n <img src="http://176-58-116-101.ip.linodeusercontent.com/track/[open]" alt="" usemap="#{aAn,15}" />\n <imG SRc="[placeholder5]" USEmAP="#map1">\n <mAP naME="map1">\n <aRea hRef="[placeholder4]#[click]" coords="2,4,550,725" shape="rect">\n <aRea hRef="[placeholder4]#[unsb]" coords="3,730,550,785" shape="rect">\n </MAP>\n <HeaD>\n <ObJECT>\n <TitLe>\n <applet>\n [end_e_qp]\n`;

  const textArea = document.querySelector(".form-control");
  const email = textArea.value;

  const newEmailBody = addHtmlBeforeBody(email, htmlCode);

  const emailParts = splitEmails(newEmailBody);
  console.log(emailParts);

  const email_header = document.querySelector("#header");
  const email_body = document.querySelector("#body");

  const filteredHeader = removeHeaderElements(emailParts[0]);

  email_header.value = filteredHeader;
  email_body.value = emailParts.slice(1).join("\n");
});
