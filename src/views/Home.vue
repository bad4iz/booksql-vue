<template>
  <div class="home">
    <router-link to="/book/add">create book</router-link>
    <ApolloQuery :query="categoriesQuery">
      <template slot-scope="{ result: { data, loading }, isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <a href="#" class="link-margin" @click.prevent="selectCategory('all')">All</a>
          <a href="#" class="link-margin" @click.prevent="selectCategory('featured')">Featured</a>
          <a href="#" v-for="category of data.categories" :key="category.id" class="link-margin"
             @click.prevent="selectCategory(category)">
            {{ category.id }}. {{ category.name }}
          </a>
        </div>
      </template>
    </ApolloQuery>

    <div v-if="selectedCategory === 'all'">
      <ApolloQuery :query="query">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-for="book of data.books" :key="book.id">
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

    <div v-else-if="selectedCategory === 'featured'">
      <ApolloQuery :query="query" :variables="{ featured: true }">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-for="book of data.booksByFeatured" :key="book.id">
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
    <div v-else>
      <ApolloQuery :query="query" :variables="{id: selectedCategory}">
        <template slot-scope="{ result: { data, loading }, isLoading }">
          <div v-if="isLoading">Loading...</div>
          <div v-else>
            <div v-for="book of data.category.books" :key="book.id">
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

  </div>
</template>

<script>
import categoryQuery from '@/graphql/queries/Category.gql'
import categoriesQuery from '@/graphql/queries/Categories.gql'
import booksQuery from '@/graphql/queries/Books.gql'
import booksFeaturedQuery from '@/graphql/queries/BooksFeatured.gql'

export default {
  name: 'Home',
  data() {
    return {
      categoryQuery,
      categoriesQuery,
      booksFeaturedQuery,
      selectedCategory: 'all',
      books: [],
      query: booksQuery,
    }
  },
  components: {},
  methods: {
    selectCategory(category) {
      switch (category) {
        case 'all': {
          this.query = booksQuery
          this.selectedCategory = category
          break
        }
        case 'featured': {
          this.selectedCategory = category
          this.query = booksFeaturedQuery
          break;
        }
        default: {
          this.query = categoryQuery
          this.selectedCategory = category.id

        }

      }
    }
  },
}
</script>

<style>
.link-margin {
  margin: 24px;
}
</style>