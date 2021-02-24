import { getAccessorType } from 'typed-vuex'
import * as user from '~/store/user'
import * as product from '~/store/product'

export const state = () => {
    return {}
}

export const getters = {
}

export const mutations = {
}

export const actions = {
}

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user,
        product,
    },
})