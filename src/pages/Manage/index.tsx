// 管理
import { Avatar, Button, Space, Typography } from "antd"
import { FC } from "react"

import { reqLoginOut } from "~src/api"
import { config } from "~src/config"

interface ManageProps {
  userInfo: Record<string, any>
}

const Manage: FC<ManageProps> = ({ userInfo }) => {
  async function handleLoginOut() {
    const res = (await reqLoginOut()) as any
    if (res.success && res.data?.code === "1") {
      window.open(config.loginUrl, "_blank")
    }
  }

  return (
    <Space>
      <Avatar src={userInfo.head_url} />
      <div>
        <Typography.Text>{userInfo.nick_name}</Typography.Text>
        <Button onClick={handleLoginOut}>退出登录</Button>
      </div>
    </Space>
  )
}

export default Manage
