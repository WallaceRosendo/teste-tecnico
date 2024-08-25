import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center h-screen">
      <p className="flex w-full items-center justify-center mb-10 font-bold text-lg">Lista de usuários</p>
      <div className="max-w-full max-h-full overflow-auto">
      <table className="">
        <thead>
          <tr className="text-lg">
            <th className="py-1">Nome</th>
            <th className="py-1">E-mail</th>
            <th className="py-1">Telefone</th>
            <th className="py-1"></th>
          </tr>
        </thead>
        <tbody className="">
          {users.map(user => (
            <tr className="odd:bg-zinc-800" key={user.id}>
              <td className="px-6 py-1">{user.name}</td>
              <td className="px-6 py-1">{user.email}</td>
              <td className="px-6 py-1">{user.phone}</td>
              <td className="px-6 py-1">
                <Link to={`/user/${user.id}`}>Detalhes</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserList;
