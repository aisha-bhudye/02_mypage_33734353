var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
	console.log(req);
	res.writeHead(200, { "Content-Type": "text/html" });
	if (req.url === "/about") {
		res.end(`<!DOCTYPE html>
    <html>
      <head><title>My Page</title></head>
      <body>
        <h1>About Me</h1>
        <p>I am a student at Goldsmiths University of London currently studying Computer Science.</p>
      </body>
    </html>`);
	} else if (req.url === "/contact") {
		res.end(`<!DOCTYPE html>
    <html>
      <head><title>Contact</title></head>
      <body>
        <h1>Contact</h1>
        <p>Email: aisha.bhudye@gmail.com</p>
      </body>
    </html>`);
	} else {
		res.end(`<!DOCTYPE html>
    <html>
      <head><title>My Page</title></head>
      <body>
        <h1>Welcome to My Page</h1>
        <h2>About Me</h2>
        <p>My name is Aisha Bhudye , I am 21 years old.My birthday is 11 October 2003</p>
      </body>
    </html>`);
	}
}).listen(port, function () {
	console.log(`Node server is running on port ${port}...`);
}); 
