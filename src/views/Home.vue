<template>
  <div class="home">

    <div class="hero bg-gray-100 mb-24">
      <div class="container flex justify-between py-10">
        <div class="mt-10">
          <h1 class="w-full lg:w-3/4 mb-4">Book recommendation site built with GraphQL</h1>
          <p class="leading-normal w-full lg:w-3/4 mb-6">Built with Laravel (Lighthouse GraphQL), Vue.js (vue-apollo)
            and Tailwind CSS</p>
          <div class="flex items-center">
            <a href="#" class="bg-purple-900  text-white rounded px-4 py-4 mr-4 hover:bg-purple-500">View Books</a>
            <a href="#"
               class="border border-purple-900 border-solid rounded text-purple-900 px-4 py-4 hover:bg-purple-500 hover:text-white">View
              Screencasts</a>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <img src="../assets/hero.svg" alt="hero">
        </div>
      </div>
    </div><!-- end hero -->


    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/4 px-4 mb-12">
          <ApolloQuery :query="categoriesQuery">
            <template slot-scope="{ result: { data, loading }, isLoading }">
              <div v-if="isLoading">Loading...</div>
              <ul v-else class="list-reset text-lg">
                <li class="mb-6">
                  <a href="#" class="text-black hover:text-grey-darkest" @click.prevent="selectCategory('all')">All</a>
                </li>
                <li class="mb-6">
                  <a href="#" class="text-black hover:text-grey-darkest" @click.prevent="selectCategory('featured')">Featured</a>
                </li>
                <li v-for="category of data.categories" :key="category.id" class="mb-6">
                  <a href="#" class="text-black hover:text-grey-darkest"
                     @click.prevent="selectCategory(category)">{{ category.name }}</a>
                </li>
                <li class="mb-6">
                  <router-link to="/book/add" class="text-black hover:text-grey-darkest">Add a book</router-link>
                </li>

              </ul>
            </template>
          </ApolloQuery>
        </div>
        <div class="w-full lg:w-3/4 px-4 mb-12 ">

          <div v-if="selectedCategory === 'all'">
            <ApolloQuery :query="query">
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div v-for="book of data.books" :key="book.id" class="w-1/3 px-4 mb-12">
                    <router-link :to="`/book/${book.id}`">
                      <img :src="book.image" :alt="book.title" class="h-64 mb-2">
                    </router-link>
                    <router-link :to="`/book/${book.id}`" class="text-lg font-bold text-black hover:text-gray-900 mb-1">
                      {{ book.title }}
                    </router-link>
                    <div class="text-gray-900">{{ book.author }}</div>
                  </div>
                </div>
              </template>
            </ApolloQuery>
          </div>

          <div v-else-if="selectedCategory === 'featured'">
            <ApolloQuery :query="query" :variables="{ featured: true }">
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div v-for="book of data.booksByFeatured" :key="book.id" class="w-1/3 px-4 mb-12">
                    <router-link :to="`/book/${book.id}`">
                      <img :src="book.image" :alt="book.title" class="h-64 mb-2">
                    </router-link>
                    <router-link :to="`/book/${book.id}`" class="text-lg font-bold text-black hover:text-gray-900 mb-1">
                      {{ book.title }}
                    </router-link>
                    <div class="text-gray-900">{{ book.author }}</div>
                  </div>
                </div>
              </template>
            </ApolloQuery>
          </div>
          <div v-else>
            <ApolloQuery :query="query" :variables="{id: selectedCategory}">
              <template slot-scope="{ result: { data, loading }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else class="flex flex-wrap">
                  <div v-for="book of data.category.books" :key="book.id" class="w-1/3 px-4 mb-12">
                    <img :src="book.image" :alt="book.title" class="h-64 mb-2">
                    <router-link :to="`/book/${book.id}`">
                      {{ book.title }}
                    </router-link>
                    <div class="text-gray-900">{{ book.author }}</div>
                  </div>
                </div>
              </template>
            </ApolloQuery>
          </div>

        </div>

      </div>
    </div> <!-- end container -->


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