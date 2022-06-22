// 未登录

import { FC } from "react"
import { Typography } from "antd"
import { config } from "../../config"

const NoLogin: FC<any> = () => {
  const loginHref = config.loginUrl
  return (
    <div>
      <nav className="mb-[16px]">暂未登录...</nav>
      <nav>
        <Typography.Link href={loginHref} target="_blank">
          立即登录
        </Typography.Link>
      </nav>
    </div>
  )
}

export default NoLogin
