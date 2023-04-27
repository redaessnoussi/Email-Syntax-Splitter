Sure, here's an example README file you can use:

# Email Header Splitter

This is a simple script written in JavaScript and Bootstrap 5 that allows you to split an email header by boundary. This script was created by Reda Es-snoussi.

## Installation

To use this script, simply download the `email-header-splitter.js` file and include it in your project. You will also need to include Bootstrap 5 in your project if you haven't already.

```html
<!-- Include Bootstrap 5 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

<!-- Include email-header-splitter.js -->
<script src="email-header-splitter.js"></script>
```

## Usage

To use the script, simply call the `splitHeaderByBoundary(header, boundary)` function, passing in the email header as a string and the boundary string as parameters. The function will return an array of objects, each representing a part of the header.

```javascript
const header = `From: sender@example.com\r\nTo: recipient@example.com\r\nSubject: Example Email\r\nContent-Type: multipart/mixed; boundary="boundary"\r\n\r\n--boundary\r\nContent-Type: text/plain\r\n\r\nThis is the body of the email.\r\n--boundary\r\nContent-Type: application/pdf\r\nContent-Disposition: attachment; filename="example.pdf"\r\n\r\n<base64-encoded PDF content>\r\n--boundary--\r\n`;

const boundary = "boundary";

const headerParts = splitHeaderByBoundary(header, boundary);

console.log(headerParts);
```

This example code would output the following array:

```javascript
[
  {
    type: "multipart/mixed",
    content: "--boundary\r\nContent-Type: text/plain\r\n\r\nThis is the body of the email.\r\n",
  },
  {
    type: "text/plain",
    content: "This is the body of the email.",
  },
  {
    type: "application/pdf",
    content: "<base64-encoded PDF content>",
    filename: "example.pdf",
  },
]
```

## License

This script is licensed under the [MIT License](LICENSE).

## Author

This script was created by Reda Es-snoussi. You can contact the author at <reda@example.com>.
