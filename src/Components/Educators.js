import React from 'react';
import {GiElectric} from "react-icons/gi";
// eslint-disable-next-line
import {AiOutlineRight,} from "react-icons/ai";

const Educators = ({data}) => {
    const pStyle={
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: 2,
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };
    const nStyle={
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: 1,
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
    };
  return (
    <div className="Educators">
                <div className='imgDiv'>
                    <img src={data.image} alt="Educator" />
                    <span className='spantitle'><GiElectric/>{data.title}</span>
                </div>
                <div>
                    <h2 style={nStyle} className="educatorName">{data.name}</h2>
                    <p className="educatorDesc" style={pStyle}>{data.desc}</p>
                    <div className="educatorStats">
                        <div>
                            <h2>{data.watchtime}</h2>
                            <p>Watch Mins</p>
                      </div>
                        <div>
                            <h2>{data.followers}</h2>
                            <p>Followers</p>
                        </div>
                    </div>
                    {/* <button>View Profile <AiOutlineRight/></button> */}
                </div>
            </div>
  )
}

export default Educators;