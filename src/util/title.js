function getTitle(vm) {
  const { title } = vm.$options
  if(title) {
    return typeof title === 'function' ? title.call(vm) : title
  }
}

const serverTitleMixin = {
  create() {
    const title = getTitle(this)
    if(title) {
      this.$ssrContextl.title = `技术大咖 | ${title}`
    }
  }
}

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this)
    if(title) {
      document.title = `技术大咖 | ${ title }`
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
