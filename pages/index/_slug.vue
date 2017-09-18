<template>
  <div class="player">
    <h1>#{{ number }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
    head () {
        return {
            title: this.name,
            meta: [
                { hid: 'description', name: this.name, content: this.slug }
            ]
        }
    },
  validate ({ params }) {
    return !!(params.slug)
  },
  asyncData ({ params, env, error }) {
    const user = env.users.find((user) => String(user.slug) === params.slug)
    if (!user) {
      return error({ message: 'User not found', statusCode: 404 })
    }
    return user
  }
}
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
