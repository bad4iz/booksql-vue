<template>
  <div class="book">
    <ApolloQuery :query="query" :variables="{id: $route.params.id}">
      <template slot-scope="{ result: { data: {book}, loading }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          {{ book }}
          <h1>{{ book.title }}</h1>
          <img :src="book.image" :alt="book.title">
          <div>{{ book.author }}</div>
          <div>{{ book.description }}</div>
          <div>{{ book.category.name }}</div>
          <div>{{ book.category.name }}</div>
          <div v-for="book of book.category.books" :key="book.id">
            <router-link :to="`/book/${book.id}`">
              {{ book.id }}. {{ book.title }}
            </router-link>
            <div>{{book.author}}</div>
            <img :src="book.image" :alt="book.title">
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import queryBook from '@/graphql/queries/Book.gql'

export default {
  name: "Book",
  data: () => ({
    query: queryBook,
  })
}
</script>

<style scoped>

</style>