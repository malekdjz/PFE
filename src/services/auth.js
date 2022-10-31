 import axios from 'axios';

 const API_URL = 'http://127.0.0.1:8000/api/';


 function login (username,password)
 {
    return (
        axios.post(API_URL+'login/',{username,password}).then(function(response){
            if (response.data.access)
            {
                localStorage.setItem('access-token',JSON.stringify(response.data.access));
            }
            return response.data ;
        })
    );
 }


 function logout()
 {
    localStorage.removeItem('access-token');
    axios.post(API_URL+logout);
 }

 function currentUser()
 {
    return localStorage.getItem('access-token');
    
 }

 const auth = {login,logout,currentUser};

 export default auth ;