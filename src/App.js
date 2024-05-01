import { useEffect, useState } from 'react'

import Avatar from './components/Avatar/Avatar'

import { load } from './js/db/db'
import { getAge } from './js/date/birthday'

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
      <div>Akbar Jorayev</div>
      <div>
        <span>Born:</span>
        <span> </span>
        <span>23-02-2007</span>
      </div>
      <div>
        <span>Age:</span>
        <span> </span>
        <span>{getAge()}</span>
      </div>
    </>
  )
}
