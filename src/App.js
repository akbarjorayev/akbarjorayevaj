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
      <div className="con main list_x">
        <div className="menu list_y d_f_ai_ce">
          <Avatar img={me.img?.img} />
          <b className="fz_large txt_gradient">Akbar Jorayev</b>
          <div>
            <span>Born:</span>
            <span> </span>
            <span>
              23-02-2007 <span className="con_bg_df pd_tb_0 fz_mono">Fri</span>
            </span>
          </div>
          <div>
            <span>Age:</span>
            <span> </span>
            <span>{getAge()}</span>
          </div>
          <SocialMedias />
        </div>
        <div className="con body list_y">
          <div className="list_y">
            <div>
              <b>About me</b>
              <hr />
            </div>
            <div>
              <div>Software engineer 💻</div>
              <div>Studying Computer Science, Physics and Mathematics 📚</div>
              <div>
                Working on various projects using (HTML, CSS) (JS, NodeJS,
                ReactJs) 🌐
              </div>
              <div>Man who doesn't like ; 🧠</div>
              <div>Future employee at Google 🚀</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
