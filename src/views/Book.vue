<template>
  <div class="book">
    <ApolloQuery :query="query" :variables="{id: $route.params.id}">
      <template slot-scope="{ result: { data: {book}, loading }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <h1>{{ book.title }}</h1>
          <img :src="book.image" :alt="book.title">
          <div>{{ book.author }}</div>
          <div>{{ book.description }}</div>
          <div>{{ book.category.name }}</div>
          <div>{{ book.category.name }}</div>
<!--          <div v-for="book of book.category.books" :key="book.id">-->
<!--            <router-link :to="`/book/${book.id}`">-->
<!--              {{ book.id }}. {{ book.title }}-->
<!--            </router-link>-->
<!--            <div>{{ book.author }}</div>-->
<!--            <img :src="book.image" :alt="book.title">-->
<!--          </div>-->
<!--         -->
          <div>
            <router-link :to="`/book/${book.id}/edit`" class="link-margin">edit</router-link>
            <a href="#" @click.prevent="deletedBook"  class="link-margin">delete</a>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import queryBook from '@/graphql/queries/Book.gql'
import deleteBook from '@/graphql/mutations/DeleteBook.gql'

export default {
  name: "Book",
  data: () => ({
    query: queryBook,
  }),
  methods:{
    deletedBook() {
      this.$apollo.mutate({
        mutation: deleteBook,
        variables: {
          id: this.$route.params.id,
        }
      }).then(()=>{
        this.$router.push(`/`)
      })
}
  }
}
</script>

<style scoped>

</style>