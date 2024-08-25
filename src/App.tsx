import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;