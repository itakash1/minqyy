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
                <h1 className="name">
                    <span>Nikolay</span>
                    <span>Malikov</span>
                </h1>
                <p className="status">
                    <span>Write some about ur</span>
                </p>
            </div>
            <div className="profile-wall">
                <div className="post2">
                    <p>Im so lazy... But im gtg teach React!</p>
                </div>
                <div className="post1">
                    <p>Hello everybody is my first post on this social web!</p>
                </div>
            </div>
        </div>
    );
}