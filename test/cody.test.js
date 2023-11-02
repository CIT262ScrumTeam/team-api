it("Should Return Hello Josh",async ()=>{
    const response = await fetch('http://localhost:3000/cody');
    const returnname = await response.text();
    expect(returnname).toBe("Hello Cody");
    })