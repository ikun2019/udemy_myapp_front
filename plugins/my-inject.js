class MyInject {
  constructor (ctx) {
    this.app = ctx.app
  }

  pageTitle (routeName) {
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  dataFormat (dateStr) {
    const dataTimeFormat = new Intl.DateTimeFormat(
      'ja', { dataStyle: 'medium', timeStyle: 'short' }
    )
    return dataTimeFormat.format(new Date(dateStr))
  }

  // プロジェクトリンク
  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }
}

// オリジナルクラスを追加できる
export default ({ app }, inject) => {
  inject('my', new MyInject({ app }))
}
