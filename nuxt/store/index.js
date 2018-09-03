import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

const createStore = () => {
  return new Vuex.Store({
    
    state: {},

    mutations: {
      setData (state, data) {        
        _.forEach(data, d => {
          const properties = {}
          _.forEach(d.Properties, p => {
            properties[p.Alias] = p.Value
          })
          state[d.Url] = {
            component: d.Component,
            properties
          }
        })
      }
    },    

    getters: {
      component: state => (url) => {
        return state[url].component
      },
      model: state => (url) => {
        return state[url].properties
      }
    },

    actions: {

      loadData ({ commit }) {
        return axios.get('http://localhost:10702/data').then(response => {
          commit('setData', response.data)
        })
      },

      async nuxtServerInit({ dispatch }) {
        await dispatch('loadData')
      }
    }

  })
}

export default createStore