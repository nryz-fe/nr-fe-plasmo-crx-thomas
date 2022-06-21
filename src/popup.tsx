import "antd/dist/antd.css"

import { HashRouter, Route, Routes } from "react-router-dom"
import { Spin, message } from "antd"
import { useEffect, useState } from "react"

import Layout from "./Layout"
import Manage from "./pages/Manage"
import NotFound from "./pages/NotFound"
import Set from "./pages/Set"
import Tool from "./pages/Tool"
import { config } from "./config"
import { reqGetUserInfo } from "./api"

function IndexPopup() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // 获取用户登录信息
    reqGetUserInfo()
      .then((res) => {
        const { success, result, message: msg } = res
        if (success && result) {
          console.log("res:", result)
        } else {
          message.error("用户未登录")
          // window.open(config.loginUrl)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <Spin spinning={loading}>
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
    </Spin>
  )
}

export default IndexPopup
