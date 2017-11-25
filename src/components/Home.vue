<template>
  <div class="hello">
    <weather></weather>
  </div>
</template>

<script>
import Weather from '../../src/components/Weather'
export default {
  name: 'Home',
  data () {
    return {
      loading: true
    }
  },
  components: {
    Weather
  }
}
</script>
