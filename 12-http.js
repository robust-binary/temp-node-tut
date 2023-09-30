const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    /*
    console.log(req);
    res.write("Hello, welcome to our home page");
    res.end(); //to end our request
    */
    //res.end() can be used as a cheat rather than having to use res.write()
    res.setHeader("Content-Type", "text/html"); // Set the content type to HTML
    res.end("Hello, welcome to our home page");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html"); // Set the content type to HTML
    res.end("Here is our short history");
  } else {
    res.setHeader("Content-Type", "text/html"); // Set the content type to HTML
    res.end(
      `<h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Back Home</a>`
    );
  }
});

server.listen(3000);
