!function(e){var n={};function t(c){if(n[c])return n[c].exports;var l=n[c]={i:c,l:!1,exports:{}};return e[c].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(c,l,function(n){return e[n]}.bind(null,l));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nvar _gsheetsprocessor = _interopRequireDefault(__webpack_require__(2));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reader = function reader(options, callback) {\n  (0, _gsheetsprocessor.default)(options, function (results) {\n    callback(results);\n  });\n};\n\nmodule.exports = reader;\nvar _default = reader;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZy1zaGVldHMtYXBpL2Rpc3QvaW5kZXguanM/YjBjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLCtDQUErQyxtQkFBTyxDQUFDLENBQXVCOztBQUU5RSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZ3NoZWV0c3Byb2Nlc3NvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ3NoZWV0c3Byb2Nlc3Nvci5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByZWFkZXIgPSBmdW5jdGlvbiByZWFkZXIob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgKDAsIF9nc2hlZXRzcHJvY2Vzc29yLmRlZmF1bHQpKG9wdGlvbnMsIGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgY2FsbGJhY2socmVzdWx0cyk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWFkZXI7XG52YXIgX2RlZmF1bHQgPSByZWFkZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_g_sheets_api_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var _node_modules_g_sheets_api_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_g_sheets_api_dist__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n   window.addEventListener('load', function () {\n      navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n         // Registration was successful\n         console.log('ServiceWorker registration successful with scope: ', registration.scope);\n      }, function (err) {\n         // registration failed :(\n         console.log('ServiceWorker registration failed: ', err);\n      });\n   });\n}\n\n// place your code below\n\n//https://docs.google.com/spreadsheets/d/e/2PACX-1vRx2av-PiRinHAjnqgg0zGG_QIDVd0aej26mA_VAhMzLTz2CP-hVqIVtY_zn_nNLWO3VmcusBNdogM_/pubhtml\nconst scriptURL = 'https://script.google.com/macros/s/AKfycbyei06zM10KZY2xLKd8AuK5Bn189cqL_KDmnAC_DJBkMmKxv1s/exec'\nconst form = document.forms['submit-to-google-sheet']\nconst loading = document.querySelector('.js-loading')\nconst successMessage = document.querySelector('.js-success-message')\nconst errorMessage = document.querySelector('.js-error-message')\nform.addEventListener('submit', e => {\n   e.preventDefault()\n   showLoadingIndicator()\n   fetch(scriptURL, { method: 'POST', body: new FormData(form) })\n      .then(response => showSuccessMessage(response))\n      .catch(error => showErrorMessage(error))\n})\nfunction showLoadingIndicator() {\n   form.classList.add('is-hidden')\n   loading.classList.remove('is-hidden')\n}\nfunction showSuccessMessage(response) {\n   console.log('Success!', response)\n   setTimeout(() => {\n      successMessage.classList.remove('is-hidden')\n      loading.classList.add('is-hidden')\n   }, 500)\n}\nfunction showErrorMessage(error) {\n   console.error('Error!', error.message)\n   setTimeout(() => {\n      errorMessage.classList.remove('is-hidden')\n      loading.classList.add('is-hidden')\n   }, 500)\n}\n\n\n\n// test Sheet url\nconst demoSheetURL = 'https://docs.google.com/spreadsheets/d/1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg/edit?usp=sharing';\n\n// test sheet id\n\nconst demoSheetId = '1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg';\nconst mySheetId = '19sGpOe2AVgdAoB7uwNVvbM8QBxkjh3sEIqy1-AdsCPk';\nconst options = {\n   sheetId: mySheetId,\n   returnAllResults: true,\n   // filter: {\n   //    'department': 'archaeology'\n   // }\n}\n\nconst budgetObj = {};\n\nfunction getCategories(results) {\n   const categories = results[0]\n   const categoriesArray = Object.values(categories);\n   budgetObj.categories = categoriesArray;\n}\n\nfunction getSubCategories(results) {\n   budgetObj.subCategories = {};\n   budgetObj.categories.forEach(category => {\n      budgetObj.subCategories[category] = [];\n   })\n   //sort subcategory \n   results.forEach((result, index) => {\n      if (index > 0) {\n         for (const a in result) {\n            const category = budgetObj.categories[a - 1];\n            budgetObj.subCategories[category].push(result[a])\n         }\n      }\n   })\n}\n\nfunction displayCategories() {\n   const categorySelect = document.querySelector(\"#categories\");\n   budgetObj.categories.forEach(category => {\n      const option = document.createElement(\"option\");\n      option.value = category;\n      option.textContent = category;\n      categorySelect.appendChild(option);\n   })\n}\n\nfunction displaySubCategories() {\n   const categorySelect = document.querySelector(\"#categories\");\n   const subCategorySelect = document.querySelector(\"#subCategories\");\n   categorySelect.addEventListener('change', e => {\n      //console.log(e.target.value);\n      //remove previous subcategories\n      if (subCategorySelect.options) {\n         subCategorySelect.innerHTML = \"\";\n      }\n      budgetObj.categories.forEach((category, index) => {\n         //display subcategories only if there is a subcategories connected with selected category\n         if (e.target.value === category && budgetObj.subCategories[category].length > 0) {\n\n            const subCategories = budgetObj.subCategories[category];\n            subCategories.forEach(subCategory => {\n               const option = document.createElement(\"option\");\n               option.value = subCategory;\n               option.textContent = subCategory;\n               subCategorySelect.appendChild(option);\n            })\n\n\n\n         }\n      })\n\n\n\n\n\n   })\n\n\n}\n\n\n\n\n_node_modules_g_sheets_api_dist__WEBPACK_IMPORTED_MODULE_0___default()(options, results => {\n   getCategories(results);\n   getSubCategories(results);\n   displayCategories();\n   displaySubCategories();\n});\n\nconsole.log(budgetObj);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRWtFOztBQUVsRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7Ozs7QUFJYjtBQUNBLE9BQU87Ozs7OztBQU1QLElBQUk7OztBQUdKOzs7OztBQUtBLHNFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgICAgfSk7XG4gICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbi8vaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlJ4MmF2LVBpUmluSEFqbnFnZzB6R0dfUUlEVmQwYWVqMjZtQV9WQWhNekxUejJDUC1oVnFJVnRZX3puX25OTFdPM1ZtY3VzQk5kb2dNXy9wdWJodG1sXG5jb25zdCBzY3JpcHRVUkwgPSAnaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5ZWkwNnpNMTBLWlkyeExLZDhBdUs1Qm4xODljcUxfS0RtbkFDX0RKQmtNbUt4djFzL2V4ZWMnXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbJ3N1Ym1pdC10by1nb29nbGUtc2hlZXQnXVxuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2FkaW5nJylcbmNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXN1Y2Nlc3MtbWVzc2FnZScpXG5jb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZXJyb3ItbWVzc2FnZScpXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICBzaG93TG9hZGluZ0luZGljYXRvcigpXG4gICBmZXRjaChzY3JpcHRVUkwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKSB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2hvd1N1Y2Nlc3NNZXNzYWdlKHJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBzaG93RXJyb3JNZXNzYWdlKGVycm9yKSlcbn0pXG5mdW5jdGlvbiBzaG93TG9hZGluZ0luZGljYXRvcigpIHtcbiAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgIGxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbn1cbmZ1bmN0aW9uIHNob3dTdWNjZXNzTWVzc2FnZShyZXNwb25zZSkge1xuICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MhJywgcmVzcG9uc2UpXG4gICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpXG4gICAgICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpXG4gICB9LCA1MDApXG59XG5mdW5jdGlvbiBzaG93RXJyb3JNZXNzYWdlKGVycm9yKSB7XG4gICBjb25zb2xlLmVycm9yKCdFcnJvciEnLCBlcnJvci5tZXNzYWdlKVxuICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJylcbiAgICAgIGxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJylcbiAgIH0sIDUwMClcbn1cblxuaW1wb3J0IEdTaGVldFByb2Nlc3NvciBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ctc2hlZXRzLWFwaS9kaXN0XCJcblxuLy8gdGVzdCBTaGVldCB1cmxcbmNvbnN0IGRlbW9TaGVldFVSTCA9ICdodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xLUNtUXVtdXo1WmlPdklOaHBoRU1nZnBsckphY1FoRDYyM1JST2NPQlRBZy9lZGl0P3VzcD1zaGFyaW5nJztcblxuLy8gdGVzdCBzaGVldCBpZFxuXG5jb25zdCBkZW1vU2hlZXRJZCA9ICcxLUNtUXVtdXo1WmlPdklOaHBoRU1nZnBsckphY1FoRDYyM1JST2NPQlRBZyc7XG5jb25zdCBteVNoZWV0SWQgPSAnMTlzR3BPZTJBVmdkQW9CN3V3TlZ2Yk04UUJ4a2poM3NFSXF5MS1BZHNDUGsnO1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgIHNoZWV0SWQ6IG15U2hlZXRJZCxcbiAgIHJldHVybkFsbFJlc3VsdHM6IHRydWUsXG4gICAvLyBmaWx0ZXI6IHtcbiAgIC8vICAgICdkZXBhcnRtZW50JzogJ2FyY2hhZW9sb2d5J1xuICAgLy8gfVxufVxuXG5jb25zdCBidWRnZXRPYmogPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcyhyZXN1bHRzKSB7XG4gICBjb25zdCBjYXRlZ29yaWVzID0gcmVzdWx0c1swXVxuICAgY29uc3QgY2F0ZWdvcmllc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhjYXRlZ29yaWVzKTtcbiAgIGJ1ZGdldE9iai5jYXRlZ29yaWVzID0gY2F0ZWdvcmllc0FycmF5O1xufVxuXG5mdW5jdGlvbiBnZXRTdWJDYXRlZ29yaWVzKHJlc3VsdHMpIHtcbiAgIGJ1ZGdldE9iai5zdWJDYXRlZ29yaWVzID0ge307XG4gICBidWRnZXRPYmouY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIGJ1ZGdldE9iai5zdWJDYXRlZ29yaWVzW2NhdGVnb3J5XSA9IFtdO1xuICAgfSlcbiAgIC8vc29ydCBzdWJjYXRlZ29yeSBcbiAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgZm9yIChjb25zdCBhIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBidWRnZXRPYmouY2F0ZWdvcmllc1thIC0gMV07XG4gICAgICAgICAgICBidWRnZXRPYmouc3ViQ2F0ZWdvcmllc1tjYXRlZ29yeV0ucHVzaChyZXN1bHRbYV0pXG4gICAgICAgICB9XG4gICAgICB9XG4gICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2F0ZWdvcmllcygpIHtcbiAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXRlZ29yaWVzXCIpO1xuICAgYnVkZ2V0T2JqLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gY2F0ZWdvcnk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICAgIGNhdGVnb3J5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5U3ViQ2F0ZWdvcmllcygpIHtcbiAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXRlZ29yaWVzXCIpO1xuICAgY29uc3Qgc3ViQ2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YkNhdGVnb3JpZXNcIik7XG4gICBjYXRlZ29yeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgICAgLy9yZW1vdmUgcHJldmlvdXMgc3ViY2F0ZWdvcmllc1xuICAgICAgaWYgKHN1YkNhdGVnb3J5U2VsZWN0Lm9wdGlvbnMpIHtcbiAgICAgICAgIHN1YkNhdGVnb3J5U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9XG4gICAgICBidWRnZXRPYmouY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgIC8vZGlzcGxheSBzdWJjYXRlZ29yaWVzIG9ubHkgaWYgdGhlcmUgaXMgYSBzdWJjYXRlZ29yaWVzIGNvbm5lY3RlZCB3aXRoIHNlbGVjdGVkIGNhdGVnb3J5XG4gICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IGNhdGVnb3J5ICYmIGJ1ZGdldE9iai5zdWJDYXRlZ29yaWVzW2NhdGVnb3J5XS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBidWRnZXRPYmouc3ViQ2F0ZWdvcmllc1tjYXRlZ29yeV07XG4gICAgICAgICAgICBzdWJDYXRlZ29yaWVzLmZvckVhY2goc3ViQ2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHN1YkNhdGVnb3J5O1xuICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3ViQ2F0ZWdvcnk7XG4gICAgICAgICAgICAgICBzdWJDYXRlZ29yeVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgIH1cbiAgICAgIH0pXG5cblxuXG5cblxuICAgfSlcblxuXG59XG5cblxuXG5cbkdTaGVldFByb2Nlc3NvcihvcHRpb25zLCByZXN1bHRzID0+IHtcbiAgIGdldENhdGVnb3JpZXMocmVzdWx0cyk7XG4gICBnZXRTdWJDYXRlZ29yaWVzKHJlc3VsdHMpO1xuICAgZGlzcGxheUNhdGVnb3JpZXMoKTtcbiAgIGRpc3BsYXlTdWJDYXRlZ29yaWVzKCk7XG59KTtcblxuY29uc29sZS5sb2coYnVkZ2V0T2JqKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _gsheetsapi = _interopRequireDefault(__webpack_require__(3));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction matchValues(valToMatch, valToMatchAgainst) {\n  try {\n    if (typeof valToMatch != 'undefined' && valToMatch.toLowerCase().trim() == valToMatchAgainst.toLowerCase().trim()) {\n      return true;\n    }\n  } catch (e) {\n    console.log(\"error in matchValues: \".concat(e.message));\n    return false;\n  }\n\n  return false;\n}\n\n;\n\nfunction filterResults(resultsToFilter, filter) {\n  var filteredData = []; // now we have a list of rows, we can filter by various things\n\n  return resultsToFilter.filter(function (item) {\n    var addRow = false;\n\n    if (typeof item === 'undefined' || item.length <= 0 || Object.keys(item).length <= 0) {\n      return false;\n    }\n\n    Object.keys(filter).forEach(function (key) {\n      var filterValue = filter[key]; // e.g. 'archaeology'\n\n      var itemValue = item[key]; // e.g. 'department' or 'undefined'\n\n      addRow = matchValues(itemValue, filterValue);\n    });\n    return addRow;\n  });\n}\n\nfunction processGSheetResults(JSONResponse, returnAllResults, filter) {\n  var data = JSONResponse.feed.entry;\n  var startRow = 2; // skip the header row(1), don't need it\n\n  var processedResults = [{}];\n  var colNames = {};\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var item = _step.value;\n      var cell = item['gs$cell']; // gets cell data\n\n      var val = cell['$t']; // gets cell value\n\n      var columnNum = cell['col']; // gets the col number\n\n      var thisRow = cell['row']; // gets the row number\n\n      var colNameToAdd = colNames[columnNum]; // careful, this will be undefined if we hit it on the first pass\n      // don't add this row to the return data, but add it to list of column names\n\n      if (thisRow < startRow) {\n        colNames[columnNum] = val.toLowerCase();\n        continue; // skip the header row\n      }\n\n      if (typeof processedResults[thisRow] === 'undefined') {\n        processedResults[thisRow] = {};\n      }\n\n      if (typeof colNameToAdd !== 'undefined' && colNameToAdd.length > 0) {\n        processedResults[thisRow][colNameToAdd] = val;\n      }\n    } // make sure we're only returning valid, filled data items\n\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  processedResults = processedResults.filter(function (result) {\n    return Object.keys(result).length;\n  }); // if we're not filtering, then return all results\n\n  if (returnAllResults || !filter) {\n    return processedResults;\n  }\n\n  return filterResults(processedResults, filter);\n}\n\nvar gsheetProcessor = function gsheetProcessor(options, callback) {\n  (0, _gsheetsapi.default)(options.sheetId).then(function (result) {\n    var filteredResults = processGSheetResults(result, options.returnAllResults || false, options.filter || false);\n    callback(filteredResults);\n  });\n};\n\nvar _default = gsheetProcessor;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZy1zaGVldHMtYXBpL2Rpc3QvZ3NoZWV0c3Byb2Nlc3Nvci5qcz82N2E5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEseUNBQXlDLG1CQUFPLENBQUMsQ0FBaUI7O0FBRWxFLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQzs7QUFFcEMsZ0NBQWdDOztBQUVoQztBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0QsZ0VBQWdFO0FBQ3hIO0FBQ0EsaUNBQWlDOztBQUVqQywyQkFBMkI7O0FBRTNCLGtDQUFrQzs7QUFFbEMsZ0NBQWdDOztBQUVoQyw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZ3NoZWV0c2FwaSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ3NoZWV0c2FwaS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG1hdGNoVmFsdWVzKHZhbFRvTWF0Y2gsIHZhbFRvTWF0Y2hBZ2FpbnN0KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB2YWxUb01hdGNoICE9ICd1bmRlZmluZWQnICYmIHZhbFRvTWF0Y2gudG9Mb3dlckNhc2UoKS50cmltKCkgPT0gdmFsVG9NYXRjaEFnYWluc3QudG9Mb3dlckNhc2UoKS50cmltKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gbWF0Y2hWYWx1ZXM6IFwiLmNvbmNhdChlLm1lc3NhZ2UpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbjtcblxuZnVuY3Rpb24gZmlsdGVyUmVzdWx0cyhyZXN1bHRzVG9GaWx0ZXIsIGZpbHRlcikge1xuICB2YXIgZmlsdGVyZWREYXRhID0gW107IC8vIG5vdyB3ZSBoYXZlIGEgbGlzdCBvZiByb3dzLCB3ZSBjYW4gZmlsdGVyIGJ5IHZhcmlvdXMgdGhpbmdzXG5cbiAgcmV0dXJuIHJlc3VsdHNUb0ZpbHRlci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgYWRkUm93ID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICd1bmRlZmluZWQnIHx8IGl0ZW0ubGVuZ3RoIDw9IDAgfHwgT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGZpbHRlclZhbHVlID0gZmlsdGVyW2tleV07IC8vIGUuZy4gJ2FyY2hhZW9sb2d5J1xuXG4gICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbVtrZXldOyAvLyBlLmcuICdkZXBhcnRtZW50JyBvciAndW5kZWZpbmVkJ1xuXG4gICAgICBhZGRSb3cgPSBtYXRjaFZhbHVlcyhpdGVtVmFsdWUsIGZpbHRlclZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkUm93O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0dTaGVldFJlc3VsdHMoSlNPTlJlc3BvbnNlLCByZXR1cm5BbGxSZXN1bHRzLCBmaWx0ZXIpIHtcbiAgdmFyIGRhdGEgPSBKU09OUmVzcG9uc2UuZmVlZC5lbnRyeTtcbiAgdmFyIHN0YXJ0Um93ID0gMjsgLy8gc2tpcCB0aGUgaGVhZGVyIHJvdygxKSwgZG9uJ3QgbmVlZCBpdFxuXG4gIHZhciBwcm9jZXNzZWRSZXN1bHRzID0gW3t9XTtcbiAgdmFyIGNvbE5hbWVzID0ge307XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGRhdGFbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIGNlbGwgPSBpdGVtWydncyRjZWxsJ107IC8vIGdldHMgY2VsbCBkYXRhXG5cbiAgICAgIHZhciB2YWwgPSBjZWxsWyckdCddOyAvLyBnZXRzIGNlbGwgdmFsdWVcblxuICAgICAgdmFyIGNvbHVtbk51bSA9IGNlbGxbJ2NvbCddOyAvLyBnZXRzIHRoZSBjb2wgbnVtYmVyXG5cbiAgICAgIHZhciB0aGlzUm93ID0gY2VsbFsncm93J107IC8vIGdldHMgdGhlIHJvdyBudW1iZXJcblxuICAgICAgdmFyIGNvbE5hbWVUb0FkZCA9IGNvbE5hbWVzW2NvbHVtbk51bV07IC8vIGNhcmVmdWwsIHRoaXMgd2lsbCBiZSB1bmRlZmluZWQgaWYgd2UgaGl0IGl0IG9uIHRoZSBmaXJzdCBwYXNzXG4gICAgICAvLyBkb24ndCBhZGQgdGhpcyByb3cgdG8gdGhlIHJldHVybiBkYXRhLCBidXQgYWRkIGl0IHRvIGxpc3Qgb2YgY29sdW1uIG5hbWVzXG5cbiAgICAgIGlmICh0aGlzUm93IDwgc3RhcnRSb3cpIHtcbiAgICAgICAgY29sTmFtZXNbY29sdW1uTnVtXSA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb250aW51ZTsgLy8gc2tpcCB0aGUgaGVhZGVyIHJvd1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3NlZFJlc3VsdHNbdGhpc1Jvd10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb2Nlc3NlZFJlc3VsdHNbdGhpc1Jvd10gPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb2xOYW1lVG9BZGQgIT09ICd1bmRlZmluZWQnICYmIGNvbE5hbWVUb0FkZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb2Nlc3NlZFJlc3VsdHNbdGhpc1Jvd11bY29sTmFtZVRvQWRkXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9IC8vIG1ha2Ugc3VyZSB3ZSdyZSBvbmx5IHJldHVybmluZyB2YWxpZCwgZmlsbGVkIGRhdGEgaXRlbXNcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc2VkUmVzdWx0cyA9IHByb2Nlc3NlZFJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5sZW5ndGg7XG4gIH0pOyAvLyBpZiB3ZSdyZSBub3QgZmlsdGVyaW5nLCB0aGVuIHJldHVybiBhbGwgcmVzdWx0c1xuXG4gIGlmIChyZXR1cm5BbGxSZXN1bHRzIHx8ICFmaWx0ZXIpIHtcbiAgICByZXR1cm4gcHJvY2Vzc2VkUmVzdWx0cztcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJSZXN1bHRzKHByb2Nlc3NlZFJlc3VsdHMsIGZpbHRlcik7XG59XG5cbnZhciBnc2hlZXRQcm9jZXNzb3IgPSBmdW5jdGlvbiBnc2hlZXRQcm9jZXNzb3Iob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgKDAsIF9nc2hlZXRzYXBpLmRlZmF1bHQpKG9wdGlvbnMuc2hlZXRJZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHByb2Nlc3NHU2hlZXRSZXN1bHRzKHJlc3VsdCwgb3B0aW9ucy5yZXR1cm5BbGxSZXN1bHRzIHx8IGZhbHNlLCBvcHRpb25zLmZpbHRlciB8fCBmYWxzZSk7XG4gICAgY2FsbGJhY2soZmlsdGVyZWRSZXN1bHRzKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBnc2hlZXRQcm9jZXNzb3I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nvar gsheetsAPI = function gsheetsAPI(sheetId) {\n  try {\n    var sheetsUrl = "https://spreadsheets.google.com/feeds/cells/".concat(sheetId, "/1/public/values?alt=json-in-script");\n    return fetch(sheetsUrl).then(function (response) {\n      if (!response.ok) {\n        throw new Error(\'Error fetching sheet\');\n      }\n\n      return response.text();\n    }).then(function (resultText) {\n      var formattedText = resultText.replace(\'gdata.io.handleScriptLoaded(\', \'\').slice(0, -2);\n      return JSON.parse(formattedText);\n    });\n  } catch (err) {\n    console.log("gsheetsAPI error: ".concat(err));\n    return {};\n  }\n};\n\nvar _default = gsheetsAPI;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZy1zaGVldHMtYXBpL2Rpc3QvZ3NoZWV0c2FwaS5qcz80ZGEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBnc2hlZXRzQVBJID0gZnVuY3Rpb24gZ3NoZWV0c0FQSShzaGVldElkKSB7XG4gIHRyeSB7XG4gICAgdmFyIHNoZWV0c1VybCA9IFwiaHR0cHM6Ly9zcHJlYWRzaGVldHMuZ29vZ2xlLmNvbS9mZWVkcy9jZWxscy9cIi5jb25jYXQoc2hlZXRJZCwgXCIvMS9wdWJsaWMvdmFsdWVzP2FsdD1qc29uLWluLXNjcmlwdFwiKTtcbiAgICByZXR1cm4gZmV0Y2goc2hlZXRzVXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNoZWV0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0VGV4dCkge1xuICAgICAgdmFyIGZvcm1hdHRlZFRleHQgPSByZXN1bHRUZXh0LnJlcGxhY2UoJ2dkYXRhLmlvLmhhbmRsZVNjcmlwdExvYWRlZCgnLCAnJykuc2xpY2UoMCwgLTIpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZm9ybWF0dGVkVGV4dCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiZ3NoZWV0c0FQSSBlcnJvcjogXCIuY29uY2F0KGVycikpO1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxudmFyIF9kZWZhdWx0ID0gZ3NoZWV0c0FQSTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')}]);