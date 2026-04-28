import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import type { User } from '../types/User';
import '../global.css';
import './Home.css';

export function Home() {
const [user, setUser] = useState<User | null>(null)
  
 useEffect(() => {
    const UserData = localStorage.getItem('user');
    
    if (UserData) {
        setUser(JSON.parse(UserData));
    }
 }, []);

  function login(credentialResponse: { credential?: string }) {
    if (credentialResponse.credential) {
        const decoded = jwtDecode<User>(credentialResponse.credential)
        setUser(decoded)

        localStorage.setItem("user", JSON.stringify(decoded));
    }
  }

  function logout() {
    googleLogout()
    localStorage.removeItem('user');
    setUser(null)
  }

  return (
    <div className='page'>
        <div className='card'>
            <h1 className='title'>Login</h1>
            {!user ? (
                <GoogleLogin onSuccess={login} onError={() => console.log('Login Falhou')} />
            ) : (
                <div className='user-box'>
                <h2>Bem-vindo, {user.name}!</h2>
                <img src={user.picture} className='user-img' alt="Perfil" referrerPolicy='no-referrer'/>
                <p className='user-email'><strong>Email</strong>:{user.email}</p>
                <button className='btn' onClick={logout}>Sair</button>
                </div>
                )
            }
        </div>
    </div>
  )
};