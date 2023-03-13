import { CrownTwoTone, EditTwoTone, LikeTwoTone, StarTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import './index.scss'
import { Link } from "react-router-dom";
import { useAppSelector } from "@/store";
import { API_USER_STATUS } from "@/constant/urls";
import { get } from '@/utils/axios'
import { proDataType } from "@/utils/types";

const Profile: React.FC = () => {
  const userInfo = useAppSelector(state => state.user.userInfo)
  let [proData,setProData] = useState<proDataType>()

  const getStatus = async()=> {
    let r = await get(API_USER_STATUS)
    setProData(r.data)
  }

  useEffect(() => {
    getStatus()
  },[])

  return <div className="g-profile">
    <div className="m-user">
      <div className="avatar">
        <img src={userInfo?.avatar} alt="" />
      </div>
      <div className="user-mes">
        <h2 className="name">{ userInfo?.userName}</h2>
        <p className="blo">BlO：{ userInfo?.desc}</p>
      </div>
      <Link to="/"><button className="btn-edit">编辑</button></Link>
    </div>
    <div className="m-score">
      <div className="hd">| 成就</div>
      <div className="item"><EditTwoTone twoToneColor='#DF4E4E' />发表 {proData?.noteNum} 篇文章</div>
      <div className="item"><LikeTwoTone twoToneColor='#037CD6'/>获得 {proData?.likeNum} 次点赞</div>
      <div className="item"><StarTwoTone twoToneColor='#C174DD'/>获得 {proData?.collectNum} 次收藏</div>
      <div className="item"><CrownTwoTone twoToneColor='#98C379'/>您成为本站会员 1 天</div>
    </div>
  </div>;
};

export default Profile;
