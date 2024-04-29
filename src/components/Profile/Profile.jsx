import './Profile.css'
import avatar from '../../assets/avatar.jpeg'
import banner from '../../assets/banner.jpeg'

export default function Profile() {
    return(
        <div className="profile">
            <div className="profile-header">
                <div>
                    <img className='avatar' src={avatar} alt=""/>
                    <img className='banner'src={banner} alt=""/>
                </div>
            </div>

            <div className="profile-data">
                <div className="profile-title">
                    <h1 className="name">
                        <span>Nikolay Malikov</span>
                    </h1>
                    <p className="status">
                        <span>Write some about ur</span>
                    </p>
                </div>
            </div>
            <div className="profile-wall">
                <div className="post">
                    <div className="title-post">
                        <div className='avatar-user-post'>
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="name-user-post">
                            <span>Nikolay Malikov</span>
                        </div>
                    </div>
                    <div className='data-post'>
                        <p>Im so lazy... But im gtg teach React!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}