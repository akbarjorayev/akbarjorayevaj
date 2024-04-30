import { useState, useEffect } from 'react'

import { getAvatar } from './utils/getAvatar'

import './Avatar.css'

export default function Avatar() {
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    async function loadData() {
      setAvatar(await getAvatar())
    }
    loadData()
  }, [])

  return (
    <>
      <img className="avatar" src={avatar} alt="Me" />
    </>
  )
}
