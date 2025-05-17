// pages/users.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (!error) setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name || 'Nom non défini'} - {user.email || 'Email inconnu'}
          </li>
        ))}
      </ul>
    </div>
  );
}
