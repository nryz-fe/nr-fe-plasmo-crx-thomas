import { Spin, message } from "antd"
import "antd/dist/antd.css"
import classNames from "classnames"
import { isEmpty } from "lodash-es"
import { useEffect, useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import "../assets/style.less"
import Layout from "./Layout"
import { reqGetUser } from "./api"
import styles from "./index.module.less"
import Manage from "./pages/Manage"
import NoLogin from "./pages/NoLogin"
import NotFound from "./pages/NotFound"
import Set from "./pages/Set"
import Tool from "./pages/Tool"

function IndexPopup() {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<Record<string, any>>({})

  useEffect(() => {
    setLoading(true)
    // // 获取用户登录信息
    reqGetUser()
      .then((res) => {
        const { success, data } = res as any
        if (success) {
          setUserInfo(data?.user || {})
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Spin spinning={loading}>
      <div className={styles.container}>
        {isEmpty(userInfo) ? (
          <NoLogin />
        ) : (
          <HashRouter basename="/">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Tool />} />
                <Route path="tool" element={<Tool />} />
                <Route path="manage" element={<Manage userInfo={userInfo} />} />
                <Route path="set" element={<Set />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        )}
      </div>
    </Spin>
  )
}

export default IndexPopup
