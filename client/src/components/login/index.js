import React from 'react';

export default function Index() {
  return (
      <form method='post' className='login'>
        <input type='text' name='login' placeholder='Login'/>
        <input type='password' name='password' placeholder='Password'/>
        <input type='submit'/>
      </form>
  )
}