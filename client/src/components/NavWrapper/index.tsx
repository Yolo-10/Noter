import React, { useState } from "react";
import { Outlet,Link} from "react-router-dom";
import { MENU_MAIN,MENU_MY } from '@/constant/config'
import logo from '@/assets/img/logo.png'
import avatar from '@/assets/img/avatar.png'
import './index.scss'

const NavWrapper : React.FC = () => {
    const [ selM , setSelM ] = useState(0)

    return (
        <div className="g-nav">
            <div className="m-nav">
                <a className="imgC">
                    <img src={logo} alt="" />
                </a>
                
                <label>MorningBlog</label>

                <div className="m-menu">
                    {MENU_MAIN.map((item,i)=> 
                        <Link 
                            className={i===selM? "m-item active":"m-item"}
                            to={item?.key} 
                            key={item?.key} 
                            onClick={()=>setSelM(i)}
                        >{item.name}</Link>)}
                </div>

                <div className="imgC avatarMenu">
                    <img src={avatar} alt="" />
                    <div className="m-sub_menu">
                        <div>Yolo-10</div>
                        {MENU_MY.map((item)=>
                            <Link to={item.key} key={item.key} className="m-sub">{item.name}</Link>
                        )}
                    </div>
                </div>

                <Link to={"/login"}>登录</Link>

            </div>
            <div className="g-main"><Outlet/></div>

            <div className="m-footer">© MorningBlog 浙ICP备2022006063号</div>
        </div>
    )
}

export default NavWrapper