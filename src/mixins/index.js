import fetch from './axios'
import * as filter from './filter'
import isDev from './dev'
export default {
  data(){
    return{
      isDev
    }
  },
  methods: {
    fetch,time:filter.time
  }
}