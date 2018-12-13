import Vue from 'vue';
import ConfigManager from '../services/configManager'

export default () => {

  const routes = {
    Playbook: {
      path: '/playbook',
      name: 'Playbook'
    },
    'Playbook-whatsNew': {
      path: 'whatsNew',
      name: 'Whats New'
    },
    'Playbook-links': {
      path: 'links',
      name: 'Helpful Links'
    },
    'Playbook-faq': {
      path: 'faq',
      name: 'FAQs'
    },
    'Playbook-roadmap': {
      path: 'roadmap',
      name: 'Our Roadmap'
    },
    'Playbook-process': {
      path: 'process',
      name: 'Process Documentation'
    },
    'Playbook-process-introduction': {
      path: 'introduction',
      name: 'Process Introduction'
    },
    'Playbook-process-newPagesHowTo': {
      path: 'newPagesHowto',
      name: 'New Pages HowTo'
    }
  }

  Vue.prototype.$routes = ConfigManager.getRoutingConfig();

}
