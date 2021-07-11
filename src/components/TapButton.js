import logo from '../assets/leaves-logo.svg'

const TapButton = ({status, func}) => {
  
  let textContent

  if (status === 'start') {
    textContent = <p><strong>Tap</strong> to get your vegan dinner idea!</p>
  } else if (status === 'display') {
    textContent = <p>or try <strong>again</strong></p>
  }
  return (
    <button
      className={`tap-button tap-button-${status}`}
      onClick={func}
    >
      {textContent}
      <img src={logo} alt="logo" />
    </button>
  )
}

export default TapButton