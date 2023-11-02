const fetch = require('node-fetch2');

it("Should return Hello Walter", async()=>{
    const response = await fetch('http://localhost:3000/walter');
    const reply = await response.text();
    expect(reply).toBe("Hello Walter");
})