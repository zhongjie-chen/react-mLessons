import React, {PropTypes} from 'react';
import {Button, Toast} from 'react-weui'
import Tab from './Tab'
import $ from 'jquery';
import './item.css'
export default class One extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      datas: [],
      show: false
    }
  }

  componentDidMount() {
    let type = 'Android';
    let page = 10;
    let _this = this;
    this.setState({show: true})
    $.ajax({
        type: 'GET',
        url: 'http://gank.io/api/data/'+type+'/20/'+page,
        dataType: 'json',
        success: function(respone) {
            if (!respone.error) {
                //getImages(type, page, respone.results);
                setTimeout(() => {
                  _this.setState({datas: respone.results, show: false})
                }, 1000);
                console.log();
            } else {
                //message.error('获取数据失败');
            }
            //setTimeout(loadingMessage, 600);
        },
        error: function(xhr, type) {
            //message.error('获取数据失败');
          //  setTimeout(loadingMessage, 600);
        }
    });
  }

  onItemClick(c) {
    this.props.history.push('/detail/heiheihei/hahahaha')
  }


  render() {
    return (
      <div>
        <Toast show={this.state.show} icon="loading">
            加载中...
        </Toast>
        {
        this.state.datas.map((c, i) => {
          return(
            <div key={i} className="i-box" onClick={() => this.onItemClick(c)} >
              <div className="title"><h4>{c.desc}</h4></div>
              <div className="author">
                <div style={{}} className="txt1">
                  作者：{c.who}
                </div>
                <div className="txt2">
                  {c.createdAt.substring(0, 10)}
                </div>
              </div>
            </div>
          )
        })
        }
        <Tab></Tab>
      </div>
    );
  }
}

One.propTypes = {
};
