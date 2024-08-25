import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface User {
  name: string;
  email: string;
  phone: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col flex-wrap items-center justify-center h-screen">
      <p className="flex w-full items-center justify-center mb-10 font-bold text-lg">Detalhes do usuário</p>
        <div className="">
          <p htmlFor="name">Nome: {user.name}</p>
          <p htmlFor="email">E-mail: {user.email}</p>
          <p htmlFor="phone">Telefone: {user.phone}</p>
        </div>
        <div className="mt-8">
          <Link to="/" className="hover:bg-zinc-800 p-3 rounded-xl">Voltar a lista</Link>
        </div>
    </div>
  );
};

export default UserDetails;
