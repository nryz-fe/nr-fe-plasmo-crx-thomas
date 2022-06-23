// 管理
import { Avatar, Button, Space, Typography } from "antd"
import { FC, useEffect } from "react"

import { reqLoginOut } from "~src/api"

interface ManageProps {
  userInfo: Record<string, any>
  onLoginOutCallback: () => void
}

const Manage: FC<ManageProps> = ({ userInfo, onLoginOutCallback }) => {
  async function handleLoginOut() {
    const res = await reqLoginOut()
    console.log("res:", res)
    onLoginOutCallback()
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
