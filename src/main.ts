import App from './App.vue'
import CompositionApi, { defineComponent, ExtractPropTypes } from '@vue/composition-api'
import Vue from 'vue'

Vue.use(CompositionApi);

// helper to maintain type coverage while mounting root components
function renderRootComponent<T extends ReturnType<typeof defineComponent>>(
  component: T,
  props: ExtractPropTypes<NonNullable<T['props']>>
) {
  new Vue({
    render: h => h(component, { props })
  }).$mount('#app')
}

// Expected result:
// The following should not error because foo has a default value
renderRootComponent(App, {})

// Actual result:
// Argument of type '{}' is not assignable to parameter of type '{ foo: string; } & {}'.
// Property 'foo' is missing in type '{}' but required in type '{ foo: string; }'.