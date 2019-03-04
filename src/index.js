import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';
var viewer = {
  install (Vue, options = {}) {
    Vue.directive('viewer', {
      bind (el) {
        if (el.tagName.toLowerCase() !== 'img') {
          throw 'tag must be <img/>';
        } else if (!el.src) {
          throw '<img/> missing src';
        }
      },
      inserted (el) {
        new Viewer(el, options);
      }
    });
  }
};
export default viewer;