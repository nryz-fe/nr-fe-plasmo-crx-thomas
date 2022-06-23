// 工具
import { Typography } from "antd"
import type { FC } from "react"

import bgLink1 from "./img/bg-link1.jpg"
import styles from "./index.module.less"

const { Link } = Typography

const Tool: FC<any> = () => {
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
        <Link href="https://www.baidu.com/" key={idx} target="_blank">
          <img src={bgLink1} />
        </Link>
      ))}
    </div>
  )
}

export default Tool
