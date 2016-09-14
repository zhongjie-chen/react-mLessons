import {
  REPO_DATAS,
  ADD_COMMENT
} from './constants';

export function getDatas() {
  return dispatch => {
    return fetch(REPO_DATAS).then(response => response.json())
      .then(responseData => {
        dispatch({
            type: REPO_DATAS,
            datas: responseData.results
        })
      })
  }
}

export function addComment(index, content, nickname) {
  return {
    type: ADD_COMMENT,
    index,
    content,
    nickname
  }
}
