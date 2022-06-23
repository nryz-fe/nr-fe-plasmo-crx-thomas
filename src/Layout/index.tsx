// 布局组件
import { Divider, Radio, RadioChangeEvent } from "antd"
import classNames from "classnames"
import { FC, useState } from "react"
import { Outlet } from "react-router"
import { useNavigate } from "react-router-dom"

import * as styles from "./index.module.less"

const Layout: FC<any> = () => {
  const [active, setActive] = useState<"tool" | "manage" | "set">("tool")

  const navigate = useNavigate()

  function onRouteChange(e: RadioChangeEvent) {
    const value = e.target.value
    setActive(value)
    navigate(value)
  }

  return (
    <div className={classNames(styles.layout, "bg-cyan-300")}>
      <div className={styles.navbar}>
        <Radio.Group value={active} onChange={onRouteChange}>
          <Radio.Button value="tool">工具</Radio.Button>
          <Radio.Button value="manage">管理</Radio.Button>
          <Radio.Button value="set">设置</Radio.Button>
        </Radio.Group>
      </div>
      <Divider />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
