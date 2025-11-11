# Stratosheet Public

This is the public-facing website for Stratosheet. It contains basic information about the application and links to the main Stratosheet application and help site.

# Development server

Run `ng serve` for a dev server. Navigate to `https://localhost:4202/`. The application will automatically reload if you change any of the source files.

This application is hosted on https and requires a certificate. One way to achieve this:

`openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout localhost.key -days 3650 -out localhost.crt -config certificate.config`

<details>

<summary>
Example certificate.config
</summary>

```
[req]
default_bits = 2048
prompt = no
default_md = sha256
x509_extensions = v3_req
distinguished_name = dn

[dn]
C = US
ST = TX
L = Austin
O = Gracklesoft
OU = Gracklesoft
CN = localhost

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = \*.localhost
DNS.2 = localhost
```

</details>
