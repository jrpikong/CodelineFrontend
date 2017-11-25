<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div v-if="loading">Loading ...</div>
        <div v-else="" v-for="berlin_ in berlin" class="card">
          <div class="card-header"> <h4>
            <router-link :to="'/weather/' + berlin_.woeid">{{berlin_.city}}</router-link>
          </h4></div>
          <div class="card-block">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <img :src="urlIcon+ berlin_.weather_state_abbr+'.svg'" alt="Showers" style="width:32px" />
                <span>{{berlin_.weather_state_name}}</span>
              </li>
              <li class="list-group-item">Temp : {{berlin_.the_temp}}°C</li>
              <li class="list-group-item">Max : {{berlin_.max_temp}}°C</li>
              <li class="list-group-item">Min : {{berlin_.min_temp}}°C</li>
            </ul>
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
        berlin: [],
        urlIcon: urlIcon()
      }
    },
    methods: {
      getWeaterBerlin: function () {
        setTimeout(() => {
          this.$http.get('weather.php/?command=search&keyword=Berlin', getHeaders())
            .then((response) => {
              let woeids = response.body[0].woeid
              this.$http.get('weather.php/?command=location&woeid=' + woeids, getHeaders())
                .then((response) => {
                  this.loading = false
                  this.berlin.push({
                    city: response.body.title,
                    woeid: response.body.woeid,
                    the_temp: Math.round(response.body.consolidated_weather[0].the_temp),
                    min_temp: Math.round(response.body.consolidated_weather[0].min_temp),
                    max_temp: Math.round(response.body.consolidated_weather[0].max_temp),
                    weather_state_name: response.body.consolidated_weather[0].weather_state_name,
                    weather_state_abbr: response.body.consolidated_weather[0].weather_state_abbr
                  })
                })
            })
        })
      }
    },
    created () {
      this.getWeaterBerlin()
    }
  }
</script>
