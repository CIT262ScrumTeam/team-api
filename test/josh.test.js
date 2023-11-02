
it("Should Return Hello Josh",async ()=>{
const response = await fetch('http://localhost:3000/josh');
const returnname = await response.text();
expect(returnname).toBe("Hello Josh");
})

// const fetch = require("node-fetch2");

// it("Should get a login token",async ()=>{

//     let token = "";//this is an emptry string
//     const options = {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             "userName":"scmurdock@gmail.com",
//             "password":"P@ssw0rd"
//         })
//     }

//     const response = await fetch('http://localhost:3000/josh');
//     const name = await response.text();
//     expect.(name).toBe("Hello Josh");
//     token = await response.text();
//     ;

// })