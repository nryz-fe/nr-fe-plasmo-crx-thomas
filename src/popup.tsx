import "antd/dist/antd.css"
import "../assets/style.less"

import { HashRouter, Route, Routes } from "react-router-dom"
import { Spin, message } from "antd"
import { useEffect, useState } from "react"

import Layout from "./Layout"
import Manage from "./pages/Manage"
import NoLogin from "./pages/NoLogin"
import NotFound from "./pages/NotFound"
import Set from "./pages/Set"
import Tool from "./pages/Tool"
import classNames from "classnames"
import { isEmpty } from "lodash-es"
import { reqGetUserInfo } from "./api"
import styles from "./index.module.less"

function IndexPopup() {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<Record<string, any>>({})

  useEffect(() => {
    setLoading(true)
    // 获取用户登录信息
    reqGetUserInfo()
      .then((res) => {
        const { success, result, message: msg } = res
        if (success && result) {
          console.log("res:", result)
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
                <Route path="manage" element={<Manage />} />
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
