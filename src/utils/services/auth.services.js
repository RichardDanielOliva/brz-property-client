import {API_HOST} from './properties.services.api-url';

class AuthServices {
    async fecthLogin ({username, password}){
        const urlEndpoint = `${API_HOST}/api/security/oauth/token`; //http://localhost:8090/api/security/oauth/token
        
        const credentials = btoa('myfrontendapp' + ':' + '12345');
    
        const httpHeaders = new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + credentials,
        });

        let params = new URLSearchParams();
        params.set('grant_type', 'password');
        params.set('username', username);
        params.set('password', password);

        const config = {
            method: "POST",
            headers: httpHeaders,
            body: params,
          }
        return window
            .fetch(urlEndpoint, config)
            .then(response => response.json())

        //return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
      }

    static extractDataForToken(accessToken) {
        if (accessToken != null) {
          return JSON.parse(atob(accessToken.split(".")[1]));
        }
        return null;
    }
    
    static isAuthenticated(token) {
        let payload = this.extractDataForToken(token);
        if (payload != null && payload.user_name && payload.user_name.length > 0) {
          return true;
        }
        return false;
    }

    static isAValidateToken (refreshToken){
      const jwt = require('jsonwebtoken');
      console.log(refreshToken)
      if(!refreshToken)
        return false
    
      let decodedToken = jwt.decode(refreshToken, {complete: true});
    
      if(!decodedToken)
        return false
      
      if(decodedToken.exp < (new Date()).getTime())
          return false
      
      return true  
    }
}

export default AuthServices;


