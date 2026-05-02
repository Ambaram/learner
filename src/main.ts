import './style.css'
import { mount } from './app'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

mount()
