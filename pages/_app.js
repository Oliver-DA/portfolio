import Header from '../components/Header';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className = "container">
      <div className = "b bOne"></div>
      <div className = "b bTwo"></div>
      <div className = "b bThree"></div>
      <div className = "b bFour"></div>
        <Header />
        <Component {...pageProps} />
    </div>
  )

}

export default MyApp
