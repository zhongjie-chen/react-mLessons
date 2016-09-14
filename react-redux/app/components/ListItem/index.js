import React from 'react';

import styles from './styles.css';
import List from '../List';
import Comment from '../Comment';

function ListItem(props) {

  return (
    <div className={props.className || "item"}>
      <div className="itemContent">
        <p>{props.item.title}</p>
        <div className="imgWrapper">
          <img className="itemImg" src={props.item.img} alt="img"/>
          <List datas={props.item.comments} renderRow={(item, index) =>
            <div key={index+100}>
              <p className="name">{item.name}</p>
              <p className="content">{item.content}</p>
            </div>
          }/>
          <Comment onSubmit={props.onSubmit}></Comment>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.any,
  onSubmit: React.PropTypes.func
};

export default ListItem;
