import React, { useCallback, useState } from "react";
import { Outlet,Link} from "react-router-dom";
import { MENU_MAIN, MENU_MY } from '@/constant/config'
import { useAppDispatch, useAppSelector } from "@/store";
import logo from '@/assets/img/logo.png'
import './index.scss'
import { removeUser } from "@/store/userSlice";

const NavWrapper : React.FC = () => {
    const [selM, setSelM] = useState(0)
    const userInfo = useAppSelector(state => state.user.userInfo)
    const dispatch = useAppDispatch()

    const signOut = useCallback(() => {
        dispatch(removeUser())
        window.location.href = '/'
    },[])

    return (
        <div className="app-root">
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

                {userInfo ?
                    <div className="imgC avatarMenu">
                        <img src={userInfo.avatar} alt="" />
                        <div className="m-sub_menu">
                            <div>{userInfo.userName}</div>
                            {MENU_MY.map((item)=>
                                <Link to={item.key} key={item.key} className="m-sub">{item.name}</Link>
                            )}
                            <a className="m-sub" onClick={signOut}>退出登录</a>
                        </div>
                    </div> :
                    <Link to={"/login"}>登录</Link>
                }

            </div>
            <div className="g-main"><Outlet/></div>

            <div className="m-footer">© MorningBlog 浙ICP备2022006063号</div>
        </div>
    )
}

export default NavWrapper