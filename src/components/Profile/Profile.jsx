import css from './Profile.module.css'
import avatar from '../../assets/avatar.jpeg'
import banner from '../../assets/banner.jpeg'

export default function Profile() {
    return(
        <div className="profile">
            <div className="profile-header">
                <div className="profile-title">
                    <img className='avatar' src={avatar} alt=""/>
                    <div>
                        <h1 className="name">
                            <span>Nikolay Malikov</span>
                        </h1>
                        <p className="status">
                            <span>Write some about ur</span>
                        </p>
                    </div>
                </div>
                <div>
                    <img className='banner' src={banner} alt=""/>
                </div>
            </div>

            <div className="profile-wall">
                <div className="inputVoid">
                    <input type="text" placeholder="What do u think about z1trxks?"/>
                    <button>Send</button>
                </div>
                <div className="post">
                    <div className="title-post">
                        <div className='avatar-user-post'>
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="name-user-post">
                            <span>Nikolay Malikov</span>
                        </div>
                    </div>
                    <div className={css.data_post}>
                        <p>Im so lazy... But im gtg teach React!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}