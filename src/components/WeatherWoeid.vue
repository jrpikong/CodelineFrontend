<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div v-if="loading">Loading ...</div>
        <h4>
          {{city}} <br>
          {{time | moment("calendar")}} <br>
          <router-link to="/">Home</router-link>
        </h4>
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-4 mt-2 mb-2" v-for="dataDetail in dataDetails">
            <div class="card">
              <div class="card-header">{{dataDetail.applicable_date |  moment("ddd DD MMM")}}</div>
              <div class="card-block">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <img :src="urlIcon+ dataDetail.weather_state_abbr+'.svg'" alt="Showers" style="width:32px" />
                    <span>{{dataDetail.weather_state_name}}</span>
                  </li>
                  <li class="list-group-item">Temp : {{dataDetail.the_temp | roundUp()}}°C</li>
                  <li class="list-group-item">Max : {{dataDetail.max_temp | roundUp()}}°C</li>
                  <li class="list-group-item">Min : {{dataDetail.min_temp | roundUp()}}°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getHeaders, urlIcon} from '../env'
  export default {
    data () {
      return {
        loading: true,
        woeid: this.$route.params.woeid,
        urlIcon: urlIcon(),
        dataDetails: '',
        city: '',
        time: ''
      }
    },
    filters: {
      roundUp (val) {
        return Math.round(val)
      }
    },
    methods: {
      getWeatherDetail: function () {
        this.$http.get('weather.php/?command=location&woeid=' + this.woeid, getHeaders())
          .then((response) => {
            this.loading = false
            this.dataDetails = response.body.consolidated_weather
            this.city = response.body.title
            this.time = response.body.time
          })
      }
    },
    mounted () {
      this.getWeatherDetail()
    }
  }
</script>
