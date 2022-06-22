// 未登录

import { Button } from "antd"
import { FC } from "react"

const NoLogin: FC<any> = () => {
  return (
    <div>
      <nav className="mb-[16px]">暂未登录...</nav>
      <nav>
        <Button type="primary">立即登录</Button>
      </nav>
    </div>
  )
}

export default NoLogin
