import React from "react";
import './index.scss'

import avatar from '@/assets/img/avatar.png'
import cnt from '@/assets/img/cnt.png'
import ICON from "@/assets/img";

const NoteCard = () => {
  return <div className="note-card">
    <div className="item-hd">JWT 实现登录认证 + Token 自动续期方案，这才是正确的使用姿势！</div>
    <div className="item-bd">
      <div className="bdc-lt">
        <span>技术选型要实现认证功能，很容易就会想到JWT或者session，但是两者有啥区别？各自的优缺点？应该Pick谁？
          夺命三连区别基于session和基于JWT的方式的主要区别就是用户的状态保技术选型要实现认证功能，很容易就会
          想到JWT或者session，但是两者有啥区别？各自的优缺点？应该Pick谁？夺命三连区别基于session和基于JWT
          的方式的主要区别就是用户的状态保技术选型要实现认证功能，很容易就会想到JWT或者session，但是两者有啥
          区别？各自的优缺点？应该Pick谁？夺命三连区别基于session和基于JWT的方式的主要区别就是用户的状态保
          区别？各自的优缺点？应该Pick谁？夺命三连区别基于session和基于JWT的方式的主要区别就是用户的状态保
        </span>
      </div>
      <div className="bdc-rt">
        <img src={cnt} alt="" />
      </div>
    </div>
    <div className="item-ft">
      <div className='user'>
        <img className='user-icon' src={avatar} alt='' />
        <span className='username'>Yolo-10</span>
        <span className='update-time'>23/10/23</span>
      </div>
      
      <div className="icon">
        <div>
          <img src={ICON.thumb} alt='' />
          <span>0</span>
        </div>
        <div>
          <img src={ICON.bookmark} alt='' />
          <span>0</span>
        </div>
        <div>
          <img src={ICON.comment} alt='' />
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
}

const Home: React.FC = () => {
  return (
    <div className="g-home">
      <div className="m-home-tab">
        <ul>
          <li className="active">所有</li>
          <li>标签</li>
        </ul>
      </div>

      <div className="m-home">
        <div>
          <div className="m-tags-wrap">
            <span className="m-tag"># <span>test</span></span>
            <span className="m-tag"># <span>test</span></span>
            <span className="m-tag"># <span>test</span></span>
          </div>
          <div className="note-list">
            {/* <div className='no-data'>没有更多数据 😯</div> */}
            <NoteCard />
            <NoteCard />
          </div>
        </div>

        <div className="home-right-bar">
          <div className="title">最热·精选🔥</div>
          <div className="hot-list">
            <div className="m-item">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="info">
                <div className="item-author">Yolo-10</div>
                <span className="item-title">123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
