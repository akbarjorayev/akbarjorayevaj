import './Avatar.css'

export default function Avatar({ img }) {
  return (
    <>
      <img className="avatar" src={img} alt="Me" />
    </>
  )
}
