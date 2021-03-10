import React from 'react';

const AccountNew = ({ account, errors }) => {
  const { name, balance, user_id } = account
  const defaultName = name ? name : "";
  const defaultBalance = balance ? balance : 0;
  return (
    <>
      <h1>Add Account</h1>
      { errors && errors }
      <form action="/accounts" method="post">
        <input type="hidden" name="account[user_id]" value={user_id} />
        <input
          placeholder="Name"
          type="text"
          defaultValue={defaultName}
          name="account[name]"
        />
        <input
          placeholder="Balance"
          type="number"
          defaultValue={defaultBalance}
          name="account[balance]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AccountNew