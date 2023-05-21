<template>
  <div>
    <h1>Prismic Integration Example</h1>
    <div v-if="documents">
      <ul>
        <li v-for="document in documents" :key="document.id">
          {{ document.data }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createClient } from './prismic';
import Prismic from 'prismic-javascript';


export default {
  data() {
    return {
      documents: null,
    };
  },
  mounted() {
    const prismicClient = createClient();

    // Example API call to fetch documents
    prismicClient.query(Prismic.Predicates.at('document.type', 'dufuna_test_type')).then((response) => {
      console.log(response.results)
      this.documents = response.results;
    });
  },
  
}
</script>