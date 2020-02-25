import React, { Component } from 'react'
import { Menu, Input, Row, Col } from 'antd'
import { movieInfo } from '../../api'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
const { Search } = Input
@observer
class Main extends Component {
  @observable sta = 1
  constructor(props) {
    super(props)
    this.state = {
      current: 'home',
      movieInfodata: []
    }
    this.movieInfo()
  }

  handleClick = e => {
    // console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  movieInfo = async () => {
    const res = await movieInfo()
    if (res.status === 200) {
      this.setState({
        movieInfodata: res.data
      })
    }
  }
  render() {
    console.log(this.sta)
    const { movieInfodata, current } = this.state
    return (
      <div className="main">
        {/* <HeaderNav sigout={this.sigout} /> */}
        <div className="menu_nav">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="home">首页</Menu.Item>
            <Menu.Item key="movie">影片管理</Menu.Item>
            <Search
              placeholder="请输入影片相关信息"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Menu>
        </div>
        <div style={{ padding: '10px' }}>
          <Row>
            {movieInfodata.map((data, index) => (
              <Col span={8} style={{ padding: '0 10px' }} key={index}>
                <div className="movie_list">
                  <Row>
                    <Col span={11}>
                      <div className="movie_img">
                        <img src={data.image} alt="movie-img" />
                      </div>
                    </Col>
                    <Col offset={1} span={12} className="movie_info">
                      <div style={{ marginTop: '37px' }}>
                        电影名：{data.name}
                      </div>
                      <div>电影制片人：{data.director}</div>
                      <div>电影编剧：{data.screenwriter}</div>
                      <div>电影演员：{data.performer}</div>
                      <div>电影类型：{data.type}</div>
                      <div>电影发行国家：{data.country}</div>
                      <div>电影语言：{data.language}</div>
                      <div>电影上映时间：{data.showTime}</div>
                      <div>电影时长：{data.time}</div>
                      <div>电影其他名称：{data.otherName}</div>
                    </Col>
                  </Row>
                  <div className="movie_describe">电影简介：{data.info}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}

export default Main
