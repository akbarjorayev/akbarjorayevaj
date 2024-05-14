import { useEffect, useState } from 'react'

import Avatar from '../Avatar/Avatar'
import SocialMedias from '../SocialMedias/SocialMedias'

import { load } from '../../js/db/db'
import { setTabIcon } from '../../js/utils/tabIcon'
import { getAge } from '../../js/date/birthday'
import { loadLocal, saveLocal } from '../../js/db/localStorage'

import './AboutMe.css'

export default function AboutMe() {
  const [me, setMe] = useState({})
  const [site, setSite] = useState({})
  const aboutMe = [
    'Software engineer 💻',
    'Studying Computer Science, Physics and Mathematics 🎓',
    'Working on various projects using (HTML, CSS) (JS, NodeJS, ReactJs) 🌐',
    "Man who doesn't like ; 🧠",
    'Future employee at Google 🚀',
  ]
  const resumeID = '1b3trRmLHzgsA4eDn3CzQ5a0IlXxdSkIj'

  useEffect(() => {
    const localMe = loadLocal('aboutMe')
    async function loadData() {
      const dataMe = localMe ? localMe : await load('me')

      setMe(dataMe)
      if (!localMe) saveLocal('aboutMe', dataMe)
    }
    loadData()
  }, [])

  useEffect(() => {
    async function loadData() {
      const dataSite = await load('site')
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
            {aboutMe.map((item, i) => (
              <div className="con_bg_df" key={i}>
                {item}
              </div>
            ))}
          </div>
          <div className="list_y">
            <div>
              <b>Contact me</b>
              <hr />
            </div>
            <div className="con_bg_df">
              Email:{' '}
              <a href="mailto:akbarjonjorayev001@gmail.com" rel="noreferrer">
                akbarjonjorayev001@gmail.com
              </a>
              📧
            </div>
            <div className="con_bg_df">
              Tel:{' '}
              <a href="tel:+998931672923" rel="noreferrer">
                +998931672923
              </a>
              📞
            </div>
          </div>
          <div className="list_y">
            <div>
              <b>Resume</b>
              <hr />
            </div>
            <div className="list_x devide_half">
              <a
                href={`https://drive.google.com/file/d/${resumeID}/view?usp=drivesdk`}
                rel="noreferrer"
                className="con_bg_df con_ha"
              >
                View
              </a>
              <a
                href={`https://drive.google.com/u/0/uc?id=${resumeID}&export=download`}
                rel="noreferrer"
                className="con_bg_df con_ha"
              >
                Download
              </a>
            </div>
          </div>
          <div className="list_y">
            <div>
              <b>Projects</b>
              <hr />
            </div>
            <div className="list_x devide_half">
              <a
                href="https://quran-app-id.web.app/"
                rel="noreferrer"
                className="con_bg_df con_ha"
              >
                AJ-Quran
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
