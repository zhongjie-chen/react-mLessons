import React from 'react';

import styles from './styles.css';

function List(props) {
  let content = (<div></div>);
  
  if (props.datas) {
    content = props.datas.map((item, index) => (
      props.renderRow(item, index)
    ));
  }

  return (
    <div className="listWrapper">
      <div className="list">
        {content}
      </div>
    </div>
  );
}

List.propTypes = {
  renderRow: React.PropTypes.func.isRequired,
  datas: React.PropTypes.array,
};

export default List;
