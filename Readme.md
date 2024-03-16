## How to build a chrome extension

- Create a manifest.json file,add below json in it
   
        {
        "manifest_version": 3,
        "name": "exchange",
        "version": "1.0",
        "description": " description.",
        "permissions": ["scripting"],
        "background": {
        "service_worker": "background.js"
        },
        "host_permissions": ["https://*/*"]
        
        }
  

    change manifest according to your needs

- Create a background.js file, for write js code for extension
- Add HTML file for extension's interface
- go to browser's extension place and Enable developer mode, click on load unpacked for loading your extension's code folder 