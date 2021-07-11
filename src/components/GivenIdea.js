import loadLogo from '../assets/load-logo.svg'

const GivenIdea = ({ name, image, link, status, loadFunc, loadStatus }) => {

  let sourceAssignRegex = /(?<=https:\/\/www\.)[a-z]+/

  let source = link.match(sourceAssignRegex)

  let loadStatusClass = loadStatus ? 'pending' : 'success'

  return (
    <>
      <div className={`given-idea__blocker given-idea__blocker-${loadStatusClass}`}>
        <h2>Loading</h2>
        <img src={loadLogo} alt="" />
      </div>
      <a
        className={`given-idea given-idea-${status}`}
        href={link}
        target="_blank"
        rel="noreferrer">
        <h2>{name}</h2>
        <img
          src={image}
          alt=""
          onLoad={loadFunc}
        />
        <p className="line-link idea-link">{`View recipe by ${source}`}</p>
      </a>
    </>
  )
}

export default GivenIdea