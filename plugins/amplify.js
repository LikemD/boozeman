import { Amplify } from 'aws-amplify'
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'
import awsConfig from '../src/aws-exports'

if (process.client) {
  applyPolyfills().then(() => {
    defineCustomElements(window)
  })
}

Amplify.configure(awsConfig)
