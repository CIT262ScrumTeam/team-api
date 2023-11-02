
it("Should say hello",async ()=>{

const response = await fetch('http://localhost:3000/matt');
    const name = await response.text();
    expect(name).toBe("Hello Matt");
    
})