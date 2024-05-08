import api from '@/services/api.js'

export default {
    register(credentials){
        return api().post('register', credentials)
    }
}