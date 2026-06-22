const jokeresults = document.getElementById("jokeresults");
const jokeresults2 = document.getElementById("jokeresults2");
const jokebutton = document.getElementById("jokebutton");

const getJoke = async ()=>{
    try{

        const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Spooky?blacklistFlags=nsfw,religious,political,racist,explicit");
        if(!response.ok){
            throw new Error(`Error message ${response.status}`);
        }
        else{
            const data = await response.json();
            if(data.type === 'single'){
                jokeresults.innerHTML = `${data.joke}`;
            }
            else if(data.type === 'twopart'){
                jokeresults.innerHTML = `${data.setup}`;
                jokeresults2.innerHTML = `${data.delivery}`;
            }else{
                jokeresults.innerHTML = `<p>Unexpected joke format receieved</P>`;
            }
            
        }
    }catch(error){
        console.log('Error Fetching joke:',error)
    }
}