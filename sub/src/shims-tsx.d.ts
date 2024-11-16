import Vue, { VNode } from 'vue'

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {
        }

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
        }

        interface IntrinsicElements {
            [elem: string]: any
        }
    }
    
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production',
            VUE_APP_BASE: string
        }
    }
}
