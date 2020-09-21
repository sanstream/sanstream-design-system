import moment from 'moment'

/**
 * Format the date in the local date of the user's browser
 * @param {String} utcTimestamp like "2020-20-10T00:00:00Z"
 */
export function formatDate (utcTimestamp) {
  return moment(utcTimestamp).format('LL')
}
