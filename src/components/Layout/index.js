// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = props => {
  const {contentDisplay, activeContent, activeLeft, activeRight} = props
  return (
    <div className="layCont">
      <Header />
      <Body
        contentDisplay={contentDisplay}
        activeContent={activeContent}
        activeLeft={activeLeft}
        activeRight={activeRight}
      />
      <Footer />
    </div>
  )
}

export default Layout
