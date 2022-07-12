import './App.css';
import RandomNumberGenerator from "./components/randomNumbergenerator"
// import BannerCardItem from "./components/ipllogoboard/index.js";
// import CardItem  from './components/technologyCards';

// const bannerCardsList = [
//   {
//     id: 1,
//     headerText: 'The Seasons Latest',
//     description: 'Get the seasons all latest designs in a flick of your hand',
//     className: 'card-1',
//   },
//   {
//     id: 2,
//     headerText: 'Our New Designs',
//     description:
//       'Get the designs developed by our in-house team all for yourself',
//     className: 'card-2',
//   },
//   {
//     id: 3,
//     headerText: 'Insiders',
//     description: 'Get the top class products for yourself with an extra off',
//     className: 'card-3',
//   },
// ]


// const cardsData = [
//   {
//     id: 1,
//     title: 'Data Scientist',
//     description:
//       'Data scientists gather and analyze large sets of structured and unstructured data',
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
//     className: 'card-1',
//   },
//   {
//     id: 2,
//     title: 'IOT Developer',
//     description:
//       'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
//     className: 'card-2',
//   },
//   {
//     id: 3,
//     title: 'VR Developer',
//     description:
//       'A VR developer creates completely new digital environments that people can see.',
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
//     className: 'card-3',
//   },
//   {
//     id: 4,
//     title: 'ML Engineer',
//     description:
//       'Machine learning engineers feed data into models defined by data scientists.',
//     imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
//     className: 'card-4',
//   },
// ]



const App=()=>{
  return(
    <div className='random-generator-container'>
      <RandomNumberGenerator />
    </div>
  )
}

export default App;


//  {/* <ul  className='BannerContainer'>{
//          bannerCardsList.map(eachBanner=>
//           (<BannerCardItem eachBannerItem={eachBanner} key={eachBanner.id} uniqueno={eachBanner.id}/>)
//          )}
//     </ul> */}


// return(
//   <div className="main-container">
//    <div class="heading">
//      <h1>learn 4.0 technologies</h1>
//      <p>
//        sdjfsdk jkasjbdjnd sdfc msdbjjdsbvbij kjsd dsvkjbsdkjv kj bksjv j ndsdsisduskdfnoievm osdfjksndkjfsdkf js sjfnkjsfmnsm jusbf sfn skjfnjfnfkj sfskfsf
//      </p>
//    </div>
//    {<ul>{
//        cardsData.map(eachCard=>
//          (<CardItem key={eachCard.id} eachCard={eachCard} />)
//        )}
//    </ul>}
//  </div>)