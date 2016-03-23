import $ from 'jquery'
import { Observable } from 'rxjs'

export default {
  getTech: () => Observable.fromPromise($.get('/api/tech').promise()),
  addVote: (itemId, vote) =>
    Observable.fromPromise($.post(`/api/tech/${itemId}/votes`, vote).promise()),
  addNewTech: (item) => Observable.fromPromise($.post('/api/tech', item).promise()),
  getVotes: (itemId) => Observable.fromPromise($.get(`/api/tech/${itemId}/votes`).promise()),
}
