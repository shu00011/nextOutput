import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCloud,
    faCloudBolt,
    faFire,
    faQuestion,
    faSmog,
    faSun,
    faUmbrella,
    faWater,
} from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-regular-svg-icons'

// TODO: APIたたけていない。index.jsに処理うつした。

// const response = async () => {
//     await fetch("https://nodeweather-production.up.railway.app/");
//     const res = await response.json();
//     return res.items.map(()=>{
//         return {
//             wMain: res.wMain,
//             wDesc: res.wDesc,
//             wIcon: res.wIcon,
//             wTemp: res.wTemp,
//             wHum: res.wHum
//         }
//     });
// }

export default function Weather({
    wMain,
    wDesc,
    wIcon,
    wTemp,
    wHum
}){
    console.log(wIcon);
    let resIcon;
    switch(wIcon){
        case 0:
            resIcon = faCloudBolt;
            break;
        
        case 1:
            resIcon = faUmbrella;
            break;
        
        case 2:
            resIcon = faSnowflake;
            break;
        
        case 3:
            resIcon = faWater;
            break;
        
        case 4:
            resIcon = faFire;
            break;

        case 5:
            resIcon = faSmog;
            break;
        
        case 6:
            resIcon = faSun;
            break;
        
        case 7:
            resIcon = faCloud;
            break;
        
        default:
            resIcon = faQuestion;
            break;
    }
    return(
        <>
            <label htmlFor='modal'>
                <div className={'fixed z-50 bottom-10 right-10 px-8 py-6 bg-gradient-to-t from-wF/75 to-wT/90 rounded-lg cursor-pointer shadow-xl object-cover text-slate-50'}>
                        <FontAwesomeIcon icon = { resIcon } />
                        <span className='sr-only'>Weather</span>
                </div>
            </label>

            <input type='checkbox' id ='modal' className={'modal-toggle'} />
            <label htmlFor='modal' className='modal cursor-pointer'>
                <label className='modal-box relative' htmlFor=''>
                    <h1>modal</h1>
                </label>
            </label>
        </>
    )
}

// export const getServerSideProps = async () =>{
//     const res = await response();
//     console.log("get");
//     return {
//         props: {
//             wMain: response.wMain,
//             wDesc: response.wDesc,
//             wIcon: response.wIcon,
//             mTemp: response.mTemp,
//             mHum: response.mHum
//         },
//     }
// }