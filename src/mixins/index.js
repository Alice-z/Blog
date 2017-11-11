import fetch from './axios'
import * as filter from './filter'
import isDev from './dev'



 
const mixin = {
  data() {
    return {
      isDev
    }
  },
  methods: { fetch }
}

for(let i in filter){
  mixin.methods[i] = filter[i]
}

export default mixin
