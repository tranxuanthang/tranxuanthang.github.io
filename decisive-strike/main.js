import SkillCheck from "https://cdn.skypack.dev/decisive-strike@0.0.7"

document.addEventListener('DOMContentLoaded', () => {
  const notifyAudio = new Audio('./notify.mp3')
  const greatAudio = new Audio('./great.mp3')

  const playNotifyAudio = () => {
      notifyAudio.pause()
      notifyAudio.currentTime = 0.0
      notifyAudio.play()
  }

  const playGreatAudio = () => {
      greatAudio.pause()
      greatAudio.currentTime = 0.0
      greatAudio.play()
  }

  const skillCheck = new SkillCheck(document.getElementById('canvas'), {
    isContinuously: false,
    checkTime: 1800,
    checkpointDifficulty: 0.08,
    notifyBefore: 500,
    playNotifyAudio: playNotifyAudio,
    playGreatAudio: playGreatAudio,
  })

  skillCheck.play()
})
