import { useEffect, useState } from 'react'

import Avatar from './components/Avatar/Avatar'

import { load } from './js/db/db'

import './css/App.css'

export default function App() {
  const [account, setAccount] = useState({})

  useEffect(() => {
    async function loadData() {
      const data = await load('me')
      setAccount(data)
    }
    loadData()
  }, [])

  return (
    <>
      <Avatar img={account.img?.img} />
      <div>
        <span>{account.fName}</span>
        <span> </span>
        <span>{account.lName}</span>
      </div>
    </>
  )
}
