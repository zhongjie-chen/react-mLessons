import {
  REPO_DATAS,
  ADD_COMMENT
} from './constants';

const initialState = {
  datas: []
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case REPO_DATAS:
      return {
        datas: action.datas
      }
      break;
    case ADD_COMMENT:
      let mDatas = state.datas;
      mDatas[action.index].comments.push({name: action.nickname, content: action.content});
      return {
        datas: mDatas
      };
      break;
    default:
      return state;
  }
}
