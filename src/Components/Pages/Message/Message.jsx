import React from 'react';
import './Message.scss';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';

const Message = () => {
    return (
        <>
        <Navbar/>
        <div className='message'>
            <div className="container">
                <div className="top">
                    <Link to='/messages'><MdOutlineArrowBackIosNew className='icon'/></Link>
                    <div className="user">
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        <span>Moon Joe</span>
                    </div>
                </div>
                <div className="chat-box">
                    <div className="item">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item owner">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item owner">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                    <div className="item owner">
                        <div>
                        <img src="https://i.pinimg.com/236x/88/b6/19/88b619ca9d3dcf531f7b3788b42b58bf.jpg" alt="" />
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores aliquam obcaecati exercitationem nobis et ut beatae adipisci accusantium incidunt.</p>
                    </div>
                </div>
                <div className="write">
                    <input type="text" placeholder='Write a message' />
                    <button className="brand-btn">SEND</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Message;