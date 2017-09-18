module.exports = {
  head: {
    titleTemplate: '%s - NuxtSeo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 24, slug: 'kobe' },
      { id: 2, name: 'Michael Jordan', number: 23, slug: 'michael' },
      { id: 3, name: 'Stephen Curry', number: 30, slug: 'stephen' },
      { id: 4, name: 'Lebron James', number: 23, slug: 'lebron' },
      { id: 5, name: 'Kevin Durant', number: 35, slug: 'kevin' },
      { id: 6, name: 'Kyrie Irving', number: 2, slug: 'kyrie' }
    ]
  }
}
