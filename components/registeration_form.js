import React , {useState} from "react";
import axios from "axios";


export default function RegistrationForm(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');

    const handelRegisteration=async(event)=>{
        event.preventDefault();
        const user_data={
            username:event.target.Username.value,
            password:event.target.Password.value,
            email:event.target.Email.value,
        };
        console.log(user_data);
        try{
            const response=await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=ce217ac5c7994fea51a1b02246f379c5`);
            console.log(response);
            const token=response.data.request_token;
            await axios.post(`https://www.themoviedb.org/register`,user_data);
            alert('User registration successfull');
        }catch(error){
            console.log(error);  
            alert('User registration failed');
        }   
    }


    return(
        <div className="bg-white">
        <form onSubmit={handelRegisteration}>
            <label>Username</label>
            <input 
             type="text" 
             id="Username" 
             value={username}
             onChange={(event)=>setUsername(event.target.value)}
            />
            <label>Password</label>
            <input 
             type="password" 
             id="Password" 
             value={password}
             onChange={(event)=>setPassword(event.target.value)}
            />
            <label>Email</label>
            <input 
             type="email" 
             id="Email" 
             value={email}
             onChange={(event)=>setEmail(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
};