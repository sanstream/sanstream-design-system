import moment from 'moment'

export function formatDate (utcTimestamp) {
  return moment(utcTimestamp).format('LL')
}
