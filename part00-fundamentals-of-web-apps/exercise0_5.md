# 0.5: Single page app

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: text/html: spa
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: text/css: main.css
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Browser: application/javascript: spa.js
    Note left of Browser: Executes spa.js which sends a GET request
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: application/json: data.json
    Note left of Browser: On received successful response the fired event handler renders the response data as 'notes' to the display
    Note left of Browser: Automatic favicon request
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
    Note right of Server: Since favicon isn't being served, it gets caught by a catch all route that serves the same HTML as the root route https://studies.cs.helsinki.fi
    Server-->>Browser: text/html: favicon.ico
```
