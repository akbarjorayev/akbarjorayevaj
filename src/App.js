import { useEffect, useState } from 'react'

import Avatar from './components/Avatar/Avatar'
import SocialMedias from './components/SocialMedias/SocialMedias'

import { load } from './js/db/db'
import { getAge } from './js/date/birthday'
import { setTabIcon } from './js/utils/tabIcon'

import './css/App.css'

export default function App() {
  const [me, setMe] = useState({})
  const [site, setSite] = useState({})

  useEffect(() => {
    async function loadData() {
      const dataMe = await load('me')
      const dataSite = await load('site')

      setMe(dataMe)
      setSite(dataSite)
    }
    loadData()
  }, [])

  setTabIcon(site.tabIcon?.img)

  return (
    <>
      <Avatar img={me.img?.img} />
      <div>Akbar Jorayev</div>
      <div>
        <span>Born:</span>
        <span> </span>
        <span>23-02-2007 Fri</span>
      </div>
      <div>
        <span>Age:</span>
        <span> </span>
        <span>{getAge()}</span>
      </div>
      <SocialMedias />
    </>
  )
}
