import Vuex from "vuex";
import axios from "axios";

const homepage =
  'http://test-cms.diwanee.net/graphql/node?query=%7B%0A%20%20nodes(title%3A%20%22Homepage%22)%20%7B%0A%09elements%20%7B%0A%20%20%09type%0A%20%20%09data%0A%20%20%09element_item%20%7B%0A%20%20%20%20%09...%20on%20Nodes%20%7B%0A%20%20%20%20%20%20%09id%0A%20%20%20%20%20%20%09title%0A%20%20%20%20%20%20%09elements%20%7B%0A%20%20%20%20%20%20%20%20%09type%0A%20%20%20%20%20%20%20%20%09element_item%20%7B%0A%20%20%20%20%20%20%20%20%20%20%09...%20on%20Nodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%09id%0A%20%20%20%20%20%20%20%20%20%20%20%20%09title%0A%20%20%20%20%20%20%20%20%20%20%20%20%09created_at%0A%20%20%20%20%20%20%20%20%20%20%20%20%09category%3A%20tags(taxonomy%3A%20%22Category%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09id%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09name%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%09featured_image%3A%20elements(type%3A%20%22featured_image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09data%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%09images%3A%20elements(type%3A%20%22image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09data%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%09additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09...%20on%20TypeArticle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09intro%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%09%7D%0A%20%20%20%20%09%7D%0A%20%20%09%7D%0A%20%20%09element_item%20%7B%0A%20%20%20%20%09...%20on%20NodeLists%20%7B%0A%20%20%20%20%20%20%09name%0A%20%20%20%20%20%20%09list_items%20%7B%0A%20%20%20%20%20%20%20%20%09id%0A%20%20%20%20%20%20%20%20%09title%0A%20%20%20%20%20%20%20%20%09category%3A%20tags(taxonomy%3A%20%22Category%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%09id%0A%20%20%20%20%20%20%20%20%20%20%09name%0A%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%09featured_image%3A%20elements(type%3A%20%22featured_image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%09data%0A%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%09images%3A%20elements(type%3A%20%22image%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%09data%0A%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%09additional_fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%09...%20on%20TypeArticle%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%09intro%0A%20%20%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%09%7D%0A%20%20%20%20%09%7D%0A%20%20%09%7D%0A%09%7D%0A%20%20%7D%0A%7D%0A%0A%0A';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedNodes: [],
      count: 0
    },
    mutations: {
      setNodes(state, nodes) {
        state.loadedNodes = nodes;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get(homepage)
          .then(res => {
            const nodesArray = res.data.data.nodes[0].elements;
            vuexContext.commit('setNodes', nodesArray)
          })
          .catch(e => context.error(e));
      },
      setNodes(vuexContext, nodes) {
        vuexContext.commit("setNodes", nodes);
      }
    },
    getters: {
      loadedNodes(state) {
        return state.loadedNodes;
      }
    }
  });
};

export default createStore;
