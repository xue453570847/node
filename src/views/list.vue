<template>
  <div id="list">
    list
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  title: '列表',
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('getAllProject')
  },
  computed: {
    ...mapGetters([
      'projectList'
    ])
  }
}
</script>

<style scoped lang="scss">
</style>
