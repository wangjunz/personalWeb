import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from 'moment'

export const useGetTimeStore = defineStore('timer', () => {
    let hour = ref('')
    let APM = ref('')
    let week = ref('')
    let second = ref('')
    let timer
    const updateTime = () => {
       timer= setInterval(() => {
          hour.value = moment().format('hh:mm')
          second.value = moment().format('mm')
          APM.value = moment().format('A')
          week.value = moment().format('dddd , MMMM DD')
          console.log('pinia');
        }, 1000)
      }
      const cancelTime = () => {
        clearInterval(timer)
      }

  return { hour,second, APM, week,updateTime,cancelTime }
})