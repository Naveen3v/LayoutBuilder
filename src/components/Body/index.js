// Write your code here
import './index.css'

const Body = props => {
  const {contentDisplay, activeContent, activeLeft, activeRight} = props
  return (
    <div className="bodyCont">
      {activeLeft && (
        <div className="bodyLeft">
          <h1 className="bodyHead">Left Navbar Menu</h1>
          <ul className="bodyLNav">
            <li className="bodyLList">Item 1</li>
            <li className="bodyLList">Item 2</li>
            <li className="bodyLList">Item 3</li>
            <li className="bodyLList">Item 4</li>
          </ul>
        </div>
      )}
      {activeContent && (
        <div className="bodyMiddle">
          <h1 className="bodyHead">Content</h1>
          <p className="bodyPara">Lorem ipsum cvbn</p>
        </div>
      )}
      {activeRight && (
        <div className="bodyRight">
          <h1 className="bodyHead">Right Navbar</h1>
          <ul className="bodyLNav">
            <li className="bodyrList">Ad 1</li>
            <li className="bodyrList">Ad 2</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Body
