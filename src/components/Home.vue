<template>
  <div>
    <div class="row">
      <div class="col-md-12 p-3">
        <label class="sr-only" for="city">Username</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" class="form-control" id="city" placeholder="City Name" v-model="search" required>
          <button @click="callChild" class="btn btn-primary input-group-addon" type="submit">Search</button>
        </div>
      </div>
      <div class="col-md-4 pt-3" v-for="city in cities" :key="city">
        <weather :message="city"></weather>
      </div>
    </div>
  </div>
</template>

<script>
import Weather from '../../src/components/Weather'
export default {
  name: 'Home',
  props: ['message'],
  data () {
    return {
      search: '',
      cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
    }
  },
  methods: {
    callChild: function () {
      this.cities = []
      this.cities.push(this.search)
    }
  },
  components: {
    Weather
  }
}
</script>
