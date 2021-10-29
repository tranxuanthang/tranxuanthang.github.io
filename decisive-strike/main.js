import SkillCheck from "https://cdn.skypack.dev/decisive-strike@0.0.7"

document.addEventListener('DOMContentLoaded', () => {
  const skillCheck = new SkillCheck(document.getElementById('canvas'))
  skillCheck.play()
})
