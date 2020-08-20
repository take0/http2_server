## HTTP/2 minimum server

### 概要

最小限の HTTP/2 server を建てることが目的。
node.js を使って起動する。

### 起動手順
```
$ node server.js
server started : https://localhost:8080
```

### GETしてみる
```
$ curl -ik https://localhost:8080
HTTP/2 200
content-type: text/html
date: Thu, 20 Aug 2020 13:25:20 GMT

<h1>Hello HTTP2!</h1>
```


### 備考

https で起動するために、オレオレ証明書を作成している。
```
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```
