import { CrownTwoTone, EditTwoTone, LikeTwoTone, StarTwoTone } from "@ant-design/icons";
import avatar from '@/assets/img/avatar.png'
import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

const Profile: React.FC = () => {

  return <div className="g-profile">
    <div className="m-user">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="user-mes">
        <h2 className="name">Yolo-10</h2>
        <p className="blo">BlO：保持热爱，奔赴山海</p>
      </div>
      <Link to="/"><button className="btn-edit">编辑</button></Link>
    </div>
    <div className="m-score">
      <div className="hd">| 成就</div>
      <div className="item"><EditTwoTone twoToneColor='#DF4E4E'/>发表 20 篇文章</div>
      <div className="item"><LikeTwoTone twoToneColor='#037CD6'/>获得 20 次点赞</div>
      <div className="item"><StarTwoTone twoToneColor='#C174DD'/>获得 3 次收藏</div>
      <div className="item"><CrownTwoTone twoToneColor='#98C379'/>您成为本站会员 1 天</div>
    </div>
  </div>;
};

export default Profile;
