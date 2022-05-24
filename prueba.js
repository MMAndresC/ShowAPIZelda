
/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'text-similarity-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': 'a213489a3amshfd6b53ab1c4dba5p178603jsn976d41ab25bd'
	}
};

fetch('https://text-similarity-calculator.p.rapidapi.com/stringcalculator.php?ftext=This%20is%20text%20numer%20one.&stext=This%20is%20text%20number%20two.', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */



    fetch("https://api.funtranslations.com/translate/pirate.json", {
     
     // Adding method type
    method: "POST",
     
    // Adding body or contents to send
   body: JSON.stringify({
   text: "The Legend of Zelda",
        
    }),
     
    // Adding headers to the request
    headers: {
       "Content-type": "application/json; charset=UTF-8",
       'X-FunTranslations-Api-Secret': "<api_key>"
    }
})
 
// Converting to JSON
.then(response => response.json()) 
 // Displaying results to console
.then(json => console.log(json)); 








/* const res = fetch("https://libretranslate.com/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "Hello!",
		source: "en",
		target: "es"
	}),
	headers: { "Content-Type": "application/json" }
});

const init = async() => {
    const text = await res.json();
    console.log(text);
} */


