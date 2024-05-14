import './Avatar.css'

export default function Avatar({ img }) {
  return (
    <>
      <div className="avatar_con">
        <img src={img} alt="Me" />
        <span>AJ</span>
      </div>
    </>
  )
}
