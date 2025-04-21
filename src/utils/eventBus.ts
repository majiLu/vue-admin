/* eslint-disable @typescript-eslint/no-explicit-any */
import { reactive } from 'vue'

type Callback<T> = (data: T) => void

interface EventBus {
  events: { [key: string]: Callback<any>[] }
  emit: (event: string, data: any) => void
  on: (event: string, callback: Callback<any>) => void
  off: (event: string, callback: Callback<any>) => void
}

const EventBus: EventBus = reactive({
  events: {} as typeof EventBus.events,
  emit(event: string, data: any) {
    if (!this.events[event]) return
    this.events[event].forEach((callback) => callback(data))
  },
  on(event: string, callback: Callback<any>) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  },
  off(event: string, callback: Callback<any>) {
    if (!this.events[event]) return
    this.events[event] = this.events[event].filter((cb) => cb !== callback)
  },
})

export default EventBus
