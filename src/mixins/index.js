import fetch from './fetch'
import * as filter from './filter'
export default {
  methods: {
    fetch,
    nowTime: filter.nowTime,
    // nowTime_s: filter.nowTime_s
  }
}