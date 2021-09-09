import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { startsWith } from 'core-js/fn/string'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    date: ['2020-08-21'],
    days:[],
    coordinates:[]
  },
  mutations: {
    //Empty state.coordinates
    resetCoordinates(state){
      state.coordinates.splice(0, state.coordinates.length)
    },
    //Empty state.days
    resetDays(state){
      state.days.splice(0, state.days.length)
    },
    //Populate state.days
    populateStateDays(state, date){
      state.days.push(date)
    },
    //Populate state.coordinates
    populateStateCoordinates(state, coords){
      state.coordinates.push(coords)
    }
  },
  actions: {
    //Get list of fires
    async getFires(){
      try{
        return await axios.get("https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/public.storykube.com/start2impact/fires.json").then(res => res.data)
      } catch (error){
        alert('Please follow this link "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/public.storykube.com/start2impact/fires.json" and allow acces for this app to work!')
      }
    },
    //general app
    play({ commit, state }){
      //reset state.days
      this.commit('resetDays')
      //reset state.coords
      this.commit('resetCoordinates')
      let dates = state.date

      //check if is a single date or a range of dates
      //populate state.days with selected dates
      if(dates.length == 1){
        let date = dates[0]
        this.commit('populateStateDays', date)
      } else {
        let datesArr0 = new Date(dates[0])
        let datesArr1 = new Date(dates[1])
        let startingDate = Math.min(datesArr0.getDate(), datesArr1.getDate())
        let endingDate = Math.max(datesArr0.getDate(), datesArr1.getDate())
        let newDay = startingDate;

        while(newDay <= endingDate){
          let date = "2020-08-"+newDay
          this.commit('populateStateDays', date)
          newDay++
        }
      }
      //call getFiresForThisDay
      state.days.forEach(date => {
        this.dispatch('getFiresForThisDay', date)
      })
    },
    //populate state.coordinates with selected fires's coordinates
    async getFiresForThisDay({commit}, date){
      let fires = await this.dispatch('getFires')
      fires.forEach(element => {
        if (element.date == date){
          let coords = [element.latitude, element.longitude]
          this.commit('populateStateCoordinates', coords)
        }
      })
    }
  },
  modules: {
  }
})
