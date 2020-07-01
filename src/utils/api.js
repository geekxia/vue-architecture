import fetch from './fetch'

function editorSubmit(data) {
  return fetch({
    url: '/article/create',
    method: 'POST',
    data
  })
}


export default {
  editorSubmit
}
