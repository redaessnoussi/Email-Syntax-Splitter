let header =
  "Delivered-To: johndoe@example.com\r\nReceived: from mail.example.com (mail.example.com [192.0.2.1]) by mx.example.com with ESMTPS id abcdefghijklmnopqrstuvwxyz for <janedoe@example.com> (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128); Wed, 27 Apr 2023 12:34:56 -0700 (PDT) ARC-Seal: i=1; a=rsa-sha256; s=arcselector.example.com; d=microsoft.com; cv=none;... Return-Path: <bounce@example.com>";

header = header.replace(
  /^Delivered-To:.*\r\n|^Received:.*\r\n|^ARC-Seal:.*\r\n|^Return-Path:.*\r\n/gm,
  ""
);

console.log(header);
