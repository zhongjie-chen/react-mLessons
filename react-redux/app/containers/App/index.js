import React, {PropTypes} from 'react';
import './styles.css';
import { connect } from 'react-redux';
import Banner from './banner.png'
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import { getDatas, addComment } from './actions'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInitialDatas();
  }

  _renderRow(item, index) {
    return(
      <ListItem onSubmit={(c, n) => this.props.addComment(index, c, n)} key={index} item={item} />
    )
  }

  render() {
    return (
      <div className="wrapper">
        <div className="logoWrapper">
          <img className="logo" src={Banner} alt="-- Logo" />
        </div>
        <List datas={this.props.homeReducer.datas} renderRow={(item, index) => this._renderRow(item, index)} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getInitialDatas: () => dispatch(getDatas()),
    addComment: (index, content, nickname) => dispatch(addComment(index, content, nickname)),
    dispatch,
  };
}

function mapStateToProps(state) {
  const {homeReducer} = state;
  return {
    homeReducer
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
