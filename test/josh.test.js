
const response = await fetch('http://localhost:3000/sean');
const name = await response.text();
expect.(name).toBe("josh");