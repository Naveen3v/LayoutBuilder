// Write your code here
import './index.css'

const ConfigurationController = props => {
  const {contentDisplay, activeContent, leftDisplay, rightDisplay} = props

  const displayContent = id => {
    contentDisplay()
  }

  const displayLeft = id => {
    leftDisplay()
  }

  const displayRight = id => {
    rightDisplay()
  }

  return (
    <nav className="navCont">
      <h1 className="navheading">Layout</h1>
      <ul className="navlistCont">
        <li className="navList">
          <input type="checkbox" id="content" onChange={displayContent} />
          <label htmlFor="content" className="navLabel">
            Content
          </label>
        </li>
        <li className="navList">
          <input type="checkbox" id="leftnavbar" onChange={displayLeft} />
          <label htmlFor="leftnavbar" className="navLabel">
            Left Navbar
          </label>
        </li>
        <li className="navList">
          <input type="checkbox" id="rightnavbar" onChange={displayRight} />
          <label htmlFor="leftnavbar" className="navLabel">
            Right Navbar
          </label>
        </li>
      </ul>
    </nav>
  )
}

export default ConfigurationController
