// utkarsh
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwtToken: '',
    username: '',
    password: '',
    cpassword: '',
    register_username: '',
    register_password: '',
    register_name: '',
    register_cpassword: '',
    path: '',
    medicineList: []
  },
  getters: {
    getPath (state) {
      return state.path
    },
    getJwtToken (state) {
      return state.jwtToken
    },
    getUsername (state) {
      return state.username
    },
    getPassword (state) {
      return state.password
    },
    getCPassword (state) {
      return state.cpassword
    },
    getRegUser (state) {
      return state.register_username
    },
    getRegPassword (state) {
      return state.register_password
    },
    getRegName (state) {
      return state.register_name
    },
    getRegCPassword (state) {
      return state.register_cpassword
    },
    getMedicineList (state) {
      return state.medicineList
    }
  },
  mutations: {
    setPath (state, value) {
      state.path = value
    },
    setToken (state, value) {
      state.jwtToken = value
    },
    setUsername (state, value) {
      state.username = value
    },
    setPassword (state, value) {
      state.password = value
    },
    setCPassword (state, value) {
      state.cpassword = value
    },
    setRegUser (state, value) {
      state.register_username = value
    },
    setRegPassword (state, value) {
      state.register_password = value
    },
    setRegName (state, value) {
      state.register_name = value
    },
    setRegCPassword (state, value) {
      state.register_cpassword = value
    },
    setMedicineList (state, value) {
      state.medicineList = value
    }
  },
  actions: {
    setJwtTokenAction ({ commit, state }, obj) {
      commit('setJwtToken', obj.jwtToken)
      const axiosConfig = {
        url: '/login-as-' + state.path,
        method: 'Post',
        baseURL: `http://10.177.68.30:${state.path === 'employee' ? '8081' : '8080'}/`,
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
        })
        .catch((e) => console.log(e))
    },
    login ({ commit, state }, obj) {
      const axiosConfig = {
        url: '/login-as-' + state.path,
        method: 'Post',
        baseURL: `http://10.177.68.30:${state.path === 'employee' ? '8080' : '8081'}/`,
        data: {
          username: obj.username,
          password: obj.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
          const jwt = e.data.jwt
          commit('setJwtToken', obj.jwtToken)
          localStorage.setItem('JWT_TOKEN', jwt)
          router.push(`/${state.path}`)
        })
        .catch((e) => router.push('/error'))
    },
    setPathAction ({ commit }, value) {
      commit('setPath', value)
    },
    setMedicineObjAction ({ commit }, value) {
      commit('setMedicineObj', value)
      const axiosConfig = {
        baseURL: 'http://10.177.68.40:8080/',
        url: '/medicine/getMedicine',
        method: 'get'
      }
      axios(axiosConfig)
        .then(e => console.log(e))
        .catch(e => console.log(e))
    },
    setMedicineListAction ({ commit }, value) {
      commit('setMedicineList', value)
    }
  }
})

// meghna

// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     medicines: [],
//     medicineObj: {
//       categoryId: '',
//       costPerUnit: '',
//       dosage: '',
//       expiryDate: '',
//       formula: '',
//       isInStock: '',
//       manufacturer: '',
//       medicineId: '',
//       medicineName: '',
//       mfdDate: '',
//       quantity: '',
//       totalQuantity: '',
//       unit: ''
//     }
//   },
//   getters: {
//     getMedicine (state) {
//       return state.medicines
//     },
//     getMedicineObj (state) {
//       return state.medicineObj
//     }
//   },
//   mutations: {
//     setMedicine (state, value) {
//       state.medicines = value
//     },
//     setMedicineObj (state, value) {
//       state.medicineObj = value
//     }
//   },
//   actions: {
//     setMedicineAction ({ commit }, value) {
//       commit('setMedicine', value)
//       const axiosConfig = {
//         baseURL: 'http://10.177.68.40:8080/',
//         url: '/medicine?medicineName=Medomol',
//         method: 'get'
//       }
//       axios(axiosConfig)
//         .then(e => {
//           commit('setMedicine', e.data)
//         })
//         .catch(e => console.log('Nooooo'))
//     },
//     setMedicineObjAction ({ commit }, value) {
//       commit('setMedicineObj', value)
//       const axiosConfig = {
//         baseURL: 'http://10.177.68.40:8080/',
//         url: '/medicine/createMedicine',
//         method: 'post',
//         data: {
//           categoryId: value.categoryId,
//           medicineId: value.medicineId,
//           medicineName: value.medicineName,
//           costPerUnit: value.costPerUnit,
//           dosage: value.dosage,
//           mfdDate: value.mfdDate,
//           expiryDate: value.expiryDate,
//           formula: value.formula,
//           isInStock: value.isInStock,
//           manufacturer: value.manufacturer,
//           quantity: value.quantity,
//           totalQuantity: value.totalQuantity
//         }
//       }
//       axios(axiosConfig)
//         .then(e => console.log(e))
//         .catch(e => console.log(e))
//     }
//   }
// })
