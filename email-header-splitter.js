console.log("hola");

// const text = "This is some--example text--that we want to split";
// const splitText = text.split("--");
// console.log(splitText);

const myButton = document.getElementById("btn");

myButton.addEventListener("click", function () {
  const textArea = document.querySelector(".form-control");
  const email = textArea.value;

  const splitEmail = email.split(/(\n?--[\w=]+(?:--)?\n)/).filter(Boolean);
  console.log(splitEmail);

  const email_header = document.querySelector("#header");
  const email_body = document.querySelector("#body");

  email_header.value = splitEmail[0];
  email_body.value = splitEmail.slice(1).join("\n");
});
