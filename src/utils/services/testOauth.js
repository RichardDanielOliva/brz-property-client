let fetchAuthLogin = async function (){
    const urlEndpoint = 'https://tkdbs.herokuapp.com/oauth/login'; 
    const username = 'covid_reactjs_webapp'
    const password = 'password'
    const body = JSON.stringify({
        "username": username,
        "password": password
      })
    const httpHeaders = new Headers({
      'Content-Type': 'application/json',
    });
  
    
    const config = {
        method: "POST",
        headers: httpHeaders,
        body: body,
      }
    return fetch(urlEndpoint, config)
        .then(response => response.json())
}

let fetchData = async function (urlEndpoint, accessToken){
    const httpHeaders = new Headers({
      'Authorization': `Bearer ${accessToken}`,
    });
  
    
    const config = {
        method: "GET",
        headers: httpHeaders,
      }
    return fetch(urlEndpoint, config)
        .then(response => response.json())
}

let ouathResult = await fetchAuthLogin()
let accessToken = ouathResult['access_token']
console.log(accessToken)
let data = await fetchData(accessToken)
console.log(data)
