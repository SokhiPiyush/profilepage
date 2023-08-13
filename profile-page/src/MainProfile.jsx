import React from 'react'
import info from "./profileinfo";
import Profilepic from "./components/Profilepic";
import Description from "./components/Description";
import Detailbox from "./components/Detailbox";
import Imagetext from "./components/Imagetext";

function profilefunction(detail) {
    return (
        <Profilepic
            id={detail.id}
            key={detail.id}
            name={detail.username}
            email={detail.email}
            img={detail.image}
        />
    );

}

const MainProfile = () => {
    return (
        <div className="app">
            <div className="container">
                <div className='profile'>
                    <div className="left-side">
                        <div className="left-upper-side">
                            <div className='desc'>
                                <Description />
                            </div>
                            <div className='profileimg'>
                                {info.map(profilefunction)}
                            </div>
                        </div>
                        <div className='detailbox'>
                            <Detailbox />
                            <Detailbox />
                            <Detailbox />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="right-upper-side">
                            <div className="action-btns">
                                <button id="btn">1</button>
                                <button id="btn">2</button>
                                <button id="btn">3</button>
                                <button id="btn">4</button>
                            </div>
                        </div>
                        <div className='imagetext'>
                            <Imagetext />
                            <Imagetext />
                            <Imagetext />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProfile;