export default {
    namespace:'<%= name %>',
    state: {},
    subscriptions: {
        setup({dispatch, history}) {
        },
    },
    reducers: {
        update(state, {payload}) {
            return {...state, ...payload};
        },
    },
    effects: {
        * fetch({type, payload}, {put, call, select}) {
        },
    },
}