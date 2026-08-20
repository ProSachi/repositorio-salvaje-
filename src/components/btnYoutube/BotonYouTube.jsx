import styles from './BotonYouTube.module.css'

const BotonYouTube = () => {
  const urlVideo = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  const handleClick = () => {
    window.open(urlVideo, '_blank')
  }

  return (
    <button onClick={handleClick} className={styles.btnYoutube}>
      ▶ Ver video en YouTube
    </button>
  )
}

export default BotonYouTube