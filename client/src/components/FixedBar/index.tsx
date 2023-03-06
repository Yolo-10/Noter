import React from 'react'
import { Link } from 'react-router-dom'
import ICON from '@/assets/img'
import './index.scss'

const FixedBar: React.FC = () => {
  return (
    <div className='m-fixbar'>
      <Link to="/write"><img src={ICON.edit}/></Link>
      <img src={ICON.backTop} alt="" style={{marginTop:'15px'}}/>
    </div>
  )
}

export default FixedBar