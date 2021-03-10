import React from 'react';
import Navbar from './Navbar';

const Accounts = ({ accounts, user }) => {
  const { first_name } = user
  return (
    <>
      <Navbar />
      <h1>Welcome {first_name}</h1>
      <hr />
      <a href="/accounts/new">New Account</a>
      <br />
      <h3>Your Accounts</h3>
      <ul>
        { accounts.map( (a) => (
          <li key={a.id}>
            {a.name} - ${a.balance}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Accounts