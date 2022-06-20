// 工具

import { Col, Row, Typography } from 'antd'

import type { FC } from 'react'
import bgLink1 from './img/bg-link1.jpg'

const { Link } = Typography

const Tool: FC<any> = () => {
	return (
		<div>
			<Row justify="space-between">
				<Col span={8}>
					<Link href="https://www.baidu.com/">
						<img src={bgLink1} />
					</Link>
				</Col>
				<Col span={8}>
					<Link href="https://www.baidu.com/">
						<img src={bgLink1} />
					</Link>
				</Col>
				<Col span={8}>
					<Link href="https://www.baidu.com/">
						<img src={bgLink1} />
					</Link>
				</Col>
			</Row>
		</div>
	)
}

export default Tool
