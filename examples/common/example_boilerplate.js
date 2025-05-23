(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var jsxRuntime = {exports: {}};

    var reactJsxRuntime_production_min = {};

    var react = {exports: {}};

    var react_production_min = {};

    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var hasRequiredReact_production_min;
    function requireReact_production_min() {
      if (hasRequiredReact_production_min) return react_production_min;
      hasRequiredReact_production_min = 1;
      var l = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        p = Symbol.for("react.fragment"),
        q = Symbol.for("react.strict_mode"),
        r = Symbol.for("react.profiler"),
        t = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        v = Symbol.for("react.forward_ref"),
        w = Symbol.for("react.suspense"),
        x = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = {
          isMounted: function () {
            return false;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {}
        },
        C = Object.assign,
        D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function (a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function (a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {}
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray,
        J = Object.prototype.hasOwnProperty,
        K = {
          current: null
        },
        L = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
      function M(a, b, e) {
        var d,
          c = {},
          k = null,
          h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return {
          $$typeof: l,
          type: a,
          key: k,
          ref: h,
          props: c,
          _owner: K.current
        };
      }
      function N(a, b) {
        return {
          $$typeof: l,
          type: a.type,
          key: b,
          ref: a.ref,
          props: a.props,
          _owner: a._owner
        };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + a.replace(/[=:]/g, function (a) {
          return b[a];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
          return a;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [],
          c = 0;
        R(a, d, "", "", function (a) {
          return b.call(e, a, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function (b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
          }, function (b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = {
          current: null
        },
        V = {
          transition: null
        },
        W = {
          ReactCurrentDispatcher: U,
          ReactCurrentBatchConfig: V,
          ReactCurrentOwner: K
        };
      react_production_min.Children = {
        map: S,
        forEach: function (a, b, e) {
          S(a, function () {
            b.apply(this, arguments);
          }, e);
        },
        count: function (a) {
          var b = 0;
          S(a, function () {
            b++;
          });
          return b;
        },
        toArray: function (a) {
          return S(a, function (a) {
            return a;
          }) || [];
        },
        only: function (a) {
          if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
          return a;
        }
      };
      react_production_min.Component = E;
      react_production_min.Fragment = p;
      react_production_min.Profiler = r;
      react_production_min.PureComponent = G;
      react_production_min.StrictMode = q;
      react_production_min.Suspense = w;
      react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      react_production_min.cloneElement = function (a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props),
          c = a.key,
          k = a.ref,
          h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return {
          $$typeof: l,
          type: a.type,
          key: c,
          ref: k,
          props: d,
          _owner: h
        };
      };
      react_production_min.createContext = function (a) {
        a = {
          $$typeof: u,
          _currentValue: a,
          _currentValue2: a,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        a.Provider = {
          $$typeof: t,
          _context: a
        };
        return a.Consumer = a;
      };
      react_production_min.createElement = M;
      react_production_min.createFactory = function (a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      react_production_min.createRef = function () {
        return {
          current: null
        };
      };
      react_production_min.forwardRef = function (a) {
        return {
          $$typeof: v,
          render: a
        };
      };
      react_production_min.isValidElement = O;
      react_production_min.lazy = function (a) {
        return {
          $$typeof: y,
          _payload: {
            _status: -1,
            _result: a
          },
          _init: T
        };
      };
      react_production_min.memo = function (a, b) {
        return {
          $$typeof: x,
          type: a,
          compare: void 0 === b ? null : b
        };
      };
      react_production_min.startTransition = function (a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      react_production_min.unstable_act = function () {
        throw Error("act(...) is not supported in production builds of React.");
      };
      react_production_min.useCallback = function (a, b) {
        return U.current.useCallback(a, b);
      };
      react_production_min.useContext = function (a) {
        return U.current.useContext(a);
      };
      react_production_min.useDebugValue = function () {};
      react_production_min.useDeferredValue = function (a) {
        return U.current.useDeferredValue(a);
      };
      react_production_min.useEffect = function (a, b) {
        return U.current.useEffect(a, b);
      };
      react_production_min.useId = function () {
        return U.current.useId();
      };
      react_production_min.useImperativeHandle = function (a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      react_production_min.useInsertionEffect = function (a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      react_production_min.useLayoutEffect = function (a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      react_production_min.useMemo = function (a, b) {
        return U.current.useMemo(a, b);
      };
      react_production_min.useReducer = function (a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      react_production_min.useRef = function (a) {
        return U.current.useRef(a);
      };
      react_production_min.useState = function (a) {
        return U.current.useState(a);
      };
      react_production_min.useSyncExternalStore = function (a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      react_production_min.useTransition = function () {
        return U.current.useTransition();
      };
      react_production_min.version = "18.0.0-fc46dba67-20220329";
      return react_production_min;
    }

    var hasRequiredReact;
    function requireReact() {
      if (hasRequiredReact) return react.exports;
      hasRequiredReact = 1;
      {
        react.exports = requireReact_production_min();
      }
      return react.exports;
    }

    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var hasRequiredReactJsxRuntime_production_min;
    function requireReactJsxRuntime_production_min() {
      if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
      hasRequiredReactJsxRuntime_production_min = 1;
      var f = requireReact(),
        k = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        m = Object.prototype.hasOwnProperty,
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        p = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current
        };
      }
      reactJsxRuntime_production_min.Fragment = l;
      reactJsxRuntime_production_min.jsx = q;
      reactJsxRuntime_production_min.jsxs = q;
      return reactJsxRuntime_production_min;
    }

    var hasRequiredJsxRuntime;
    function requireJsxRuntime() {
      if (hasRequiredJsxRuntime) return jsxRuntime.exports;
      hasRequiredJsxRuntime = 1;
      {
        jsxRuntime.exports = requireReactJsxRuntime_production_min();
      }
      return jsxRuntime.exports;
    }

    var jsxRuntimeExports = requireJsxRuntime();

    var client = {};

    var reactDom = {exports: {}};

    var reactDom_production_min = {};

    var scheduler = {exports: {}};

    var scheduler_production_min = {};

    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var hasRequiredScheduler_production_min;
    function requireScheduler_production_min() {
      if (hasRequiredScheduler_production_min) return scheduler_production_min;
      hasRequiredScheduler_production_min = 1;
      (function (exports) {

        function f(a, b) {
          var c = a.length;
          a.push(b);
          a: for (; 0 < c;) {
            var d = c - 1 >>> 1,
              e = a[d];
            if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
          }
        }
        function h(a) {
          return 0 === a.length ? null : a[0];
        }
        function k(a) {
          if (0 === a.length) return null;
          var b = a[0],
            c = a.pop();
          if (c !== b) {
            a[0] = c;
            a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
              var m = 2 * (d + 1) - 1,
                C = a[m],
                n = m + 1,
                x = a[n];
              if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
            }
          }
          return b;
        }
        function g(a, b) {
          var c = a.sortIndex - b.sortIndex;
          return 0 !== c ? c : a.id - b.id;
        }
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var l = performance;
          exports.unstable_now = function () {
            return l.now();
          };
        } else {
          var p = Date,
            q = p.now();
          exports.unstable_now = function () {
            return p.now() - q;
          };
        }
        var r = [],
          t = [],
          u = 1,
          v = null,
          y = 3,
          z = false,
          A = false,
          B = false,
          D = "function" === typeof setTimeout ? setTimeout : null,
          E = "function" === typeof clearTimeout ? clearTimeout : null,
          F = "undefined" !== typeof setImmediate ? setImmediate : null;
        "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function G(a) {
          for (var b = h(t); null !== b;) {
            if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
            b = h(t);
          }
        }
        function H(a) {
          B = false;
          G(a);
          if (!A) if (null !== h(r)) A = true, I(J);else {
            var b = h(t);
            null !== b && K(H, b.startTime - a);
          }
        }
        function J(a, b) {
          A = false;
          B && (B = false, E(L), L = -1);
          z = true;
          var c = y;
          try {
            G(b);
            for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
              var d = v.callback;
              if ("function" === typeof d) {
                v.callback = null;
                y = v.priorityLevel;
                var e = d(v.expirationTime <= b);
                b = exports.unstable_now();
                "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                G(b);
              } else k(r);
              v = h(r);
            }
            if (null !== v) var w = !0;else {
              var m = h(t);
              null !== m && K(H, m.startTime - b);
              w = !1;
            }
            return w;
          } finally {
            v = null, y = c, z = false;
          }
        }
        var N = false,
          O = null,
          L = -1,
          P = 5,
          Q = -1;
        function M() {
          return exports.unstable_now() - Q < P ? false : true;
        }
        function R() {
          if (null !== O) {
            var a = exports.unstable_now();
            Q = a;
            var b = true;
            try {
              b = O(!0, a);
            } finally {
              b ? S() : (N = false, O = null);
            }
          } else N = false;
        }
        var S;
        if ("function" === typeof F) S = function () {
          F(R);
        };else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            U = T.port2;
          T.port1.onmessage = R;
          S = function () {
            U.postMessage(null);
          };
        } else S = function () {
          D(R, 0);
        };
        function I(a) {
          O = a;
          N || (N = true, S());
        }
        function K(a, b) {
          L = D(function () {
            a(exports.unstable_now());
          }, b);
        }
        exports.unstable_IdlePriority = 5;
        exports.unstable_ImmediatePriority = 1;
        exports.unstable_LowPriority = 4;
        exports.unstable_NormalPriority = 3;
        exports.unstable_Profiling = null;
        exports.unstable_UserBlockingPriority = 2;
        exports.unstable_cancelCallback = function (a) {
          a.callback = null;
        };
        exports.unstable_continueExecution = function () {
          A || z || (A = true, I(J));
        };
        exports.unstable_forceFrameRate = function (a) {
          0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
        };
        exports.unstable_getCurrentPriorityLevel = function () {
          return y;
        };
        exports.unstable_getFirstCallbackNode = function () {
          return h(r);
        };
        exports.unstable_next = function (a) {
          switch (y) {
            case 1:
            case 2:
            case 3:
              var b = 3;
              break;
            default:
              b = y;
          }
          var c = y;
          y = b;
          try {
            return a();
          } finally {
            y = c;
          }
        };
        exports.unstable_pauseExecution = function () {};
        exports.unstable_requestPaint = function () {};
        exports.unstable_runWithPriority = function (a, b) {
          switch (a) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              a = 3;
          }
          var c = y;
          y = a;
          try {
            return b();
          } finally {
            y = c;
          }
        };
        exports.unstable_scheduleCallback = function (a, b, c) {
          var d = exports.unstable_now();
          "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
          switch (a) {
            case 1:
              var e = -1;
              break;
            case 2:
              e = 250;
              break;
            case 5:
              e = 1073741823;
              break;
            case 4:
              e = 1E4;
              break;
            default:
              e = 5E3;
          }
          e = c + e;
          a = {
            id: u++,
            callback: b,
            priorityLevel: a,
            startTime: c,
            expirationTime: e,
            sortIndex: -1
          };
          c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
          return a;
        };
        exports.unstable_shouldYield = M;
        exports.unstable_wrapCallback = function (a) {
          var b = y;
          return function () {
            var c = y;
            y = b;
            try {
              return a.apply(this, arguments);
            } finally {
              y = c;
            }
          };
        };
      })(scheduler_production_min);
      return scheduler_production_min;
    }

    var hasRequiredScheduler;
    function requireScheduler() {
      if (hasRequiredScheduler) return scheduler.exports;
      hasRequiredScheduler = 1;
      {
        scheduler.exports = requireScheduler_production_min();
      }
      return scheduler.exports;
    }

    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var hasRequiredReactDom_production_min;
    function requireReactDom_production_min() {
      if (hasRequiredReactDom_production_min) return reactDom_production_min;
      hasRequiredReactDom_production_min = 1;
      var aa = requireReact(),
        ba = requireScheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var ca = new Set(),
        da = {};
      function ea(a, b) {
        fa(a, b);
        fa(a + "Capture", b);
      }
      function fa(a, b) {
        da[a] = b;
        for (a = 0; a < b.length; a++) ca.add(b[a]);
      }
      var ha = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
        ia = Object.prototype.hasOwnProperty,
        ja = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ka = {},
        la = {};
      function ma(a) {
        if (ia.call(la, a)) return true;
        if (ia.call(ka, a)) return false;
        if (ja.test(a)) return la[a] = true;
        ka[a] = true;
        return false;
      }
      function na(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function oa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || na(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function q(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
        z[a] = new q(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
        var b = a[0];
        z[b] = new q(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
        z[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
        z[a] = new q(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
        z[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function (a) {
        z[a] = new q(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function (a) {
        z[a] = new q(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function (a) {
        z[a] = new q(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function (a) {
        z[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var pa = /[\-:]([a-z])/g;
      function qa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
        var b = a.replace(pa, qa);
        z[b] = new q(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
        var b = a.replace(pa, qa);
        z[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
        var b = a.replace(pa, qa);
        z[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function (a) {
        z[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function (a) {
        z[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ra(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) oa(b, c, e, d) && (c = null), d || null === e ? ma(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var sa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ta = Symbol.for("react.element"),
        ua = Symbol.for("react.portal"),
        va = Symbol.for("react.fragment"),
        wa = Symbol.for("react.strict_mode"),
        xa = Symbol.for("react.profiler"),
        ya = Symbol.for("react.provider"),
        Aa = Symbol.for("react.context"),
        Ba = Symbol.for("react.forward_ref"),
        Ca = Symbol.for("react.suspense"),
        Da = Symbol.for("react.suspense_list"),
        Ea = Symbol.for("react.memo"),
        Fa = Symbol.for("react.lazy");
      var Ga = Symbol.for("react.offscreen");
      var Ha = Symbol.iterator;
      function Ia(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ha && a[Ha] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign,
        Ja;
      function Ka(a) {
        if (void 0 === Ja) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          Ja = b && b[1] || "";
        }
        return "\n" + Ja + a;
      }
      var La = false;
      function Ma(a, b) {
        if (!a || La) return "";
        La = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) {
            if (b = function () {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", {
              set: function () {
                throw Error();
              }
            }), "object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l) {
                var d = l;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (l) {
                d = l;
              }
              a.call(b.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                } while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          La = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ka(a) : "";
      }
      function Na(a) {
        switch (a.tag) {
          case 5:
            return Ka(a.type);
          case 16:
            return Ka("Lazy");
          case 13:
            return Ka("Suspense");
          case 19:
            return Ka("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Ma(a.type, false), a;
          case 11:
            return a = Ma(a.type.render, false), a;
          case 1:
            return a = Ma(a.type, true), a;
          default:
            return "";
        }
      }
      function Oa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case va:
            return "Fragment";
          case ua:
            return "Portal";
          case xa:
            return "Profiler";
          case wa:
            return "StrictMode";
          case Ca:
            return "Suspense";
          case Da:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Aa:
            return (a.displayName || "Context") + ".Consumer";
          case ya:
            return (a._context.displayName || "Context") + ".Provider";
          case Ba:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ea:
            return b = a.displayName || null, null !== b ? b : Oa(a.type) || "Memo";
          case Fa:
            b = a._payload;
            a = a._init;
            try {
              return Oa(a(b));
            } catch (c) {}
        }
        return null;
      }
      function Pa(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Oa(b);
          case 8:
            return b === wa ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Qa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ra(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Sa(a) {
        var b = Ra(a) ? "checked" : "value",
          c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
          d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get,
            f = c.set;
          Object.defineProperty(a, b, {
            configurable: true,
            get: function () {
              return e.call(this);
            },
            set: function (a) {
              d = "" + a;
              f.call(this, a);
            }
          });
          Object.defineProperty(a, b, {
            enumerable: c.enumerable
          });
          return {
            getValue: function () {
              return d;
            },
            setValue: function (a) {
              d = "" + a;
            },
            stopTracking: function () {
              a._valueTracker = null;
              delete a[b];
            }
          };
        }
      }
      function Ta(a) {
        a._valueTracker || (a._valueTracker = Sa(a));
      }
      function Ua(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ra(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Va(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Wa(a, b) {
        var c = b.checked;
        return A({}, b, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != c ? c : a._wrapperState.initialChecked
        });
      }
      function Xa(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue,
          d = null != b.checked ? b.checked : b.defaultChecked;
        c = Qa(null != b.value ? b.value : c);
        a._wrapperState = {
          initialChecked: d,
          initialValue: c,
          controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
        };
      }
      function Ya(a, b) {
        b = b.checked;
        null != b && ra(a, "checked", b, false);
      }
      function Za(a, b) {
        Ya(a, b);
        var c = Qa(b.value),
          d = b.type;
        if (null != c) {
          if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
          } else a.value !== "" + c && (a.value = "" + c);
        } else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? $a(a, b.type, c) : b.hasOwnProperty("defaultValue") && $a(a, b.type, Qa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function ab(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function $a(a, b, c) {
        if ("number" !== b || Va(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var bb = Array.isArray;
      function cb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Qa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function db(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b, {
          value: void 0,
          defaultValue: void 0,
          children: "" + a._wrapperState.initialValue
        });
      }
      function eb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (bb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = {
          initialValue: Qa(c)
        };
      }
      function fb(a, b) {
        var c = Qa(b.value),
          d = Qa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function gb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function hb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function ib(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? hb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var jb,
        kb = function (a) {
          return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
            MSApp.execUnsafeLocalFunction(function () {
              return a(b, c, d, e);
            });
          } : a;
        }(function (a, b) {
          if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
            jb = jb || document.createElement("div");
            jb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
            for (b = jb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
            for (; b.firstChild;) a.appendChild(b.firstChild);
          }
        });
      function lb(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var mb = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        },
        nb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(mb).forEach(function (a) {
        nb.forEach(function (b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          mb[b] = mb[a];
        });
      });
      function ob(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || mb.hasOwnProperty(a) && mb[a] ? ("" + b).trim() : b + "px";
      }
      function pb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"),
            e = ob(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var qb = A({
        menuitem: true
      }, {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function rb(a, b) {
        if (b) {
          if (qb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function sb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var tb = null;
      function ub(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var vb = null,
        wb = null,
        xb = null;
      function yb(a) {
        if (a = zb(a)) {
          if ("function" !== typeof vb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Ab(b), vb(a.stateNode, a.type, b));
        }
      }
      function Bb(a) {
        wb ? xb ? xb.push(a) : xb = [a] : wb = a;
      }
      function Cb() {
        if (wb) {
          var a = wb,
            b = xb;
          xb = wb = null;
          yb(a);
          if (b) for (a = 0; a < b.length; a++) yb(b[a]);
        }
      }
      function Db(a, b) {
        return a(b);
      }
      function Eb() {}
      var Fb = false;
      function Gb(a, b, c) {
        if (Fb) return a(b, c);
        Fb = true;
        try {
          return Db(a, b, c);
        } finally {
          if (Fb = false, null !== wb || null !== xb) Eb(), Cb();
        }
      }
      function Hb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Ab(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Ib = false;
      if (ha) try {
        var Jb = {};
        Object.defineProperty(Jb, "passive", {
          get: function () {
            Ib = !0;
          }
        });
        window.addEventListener("test", Jb, Jb);
        window.removeEventListener("test", Jb, Jb);
      } catch (a) {
        Ib = false;
      }
      function Kb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Lb = false,
        Mb = null,
        Nb = false,
        Ob = null,
        Pb = {
          onError: function (a) {
            Lb = true;
            Mb = a;
          }
        };
      function Qb(a, b, c, d, e, f, g, h, k) {
        Lb = false;
        Mb = null;
        Kb.apply(Pb, arguments);
      }
      function Rb(a, b, c, d, e, f, g, h, k) {
        Qb.apply(this, arguments);
        if (Lb) {
          if (Lb) {
            var l = Mb;
            Lb = false;
            Mb = null;
          } else throw Error(p(198));
          Nb || (Nb = true, Ob = l);
        }
      }
      function Sb(a) {
        var b = a,
          c = a;
        if (a.alternate) for (; b.return;) b = b.return;else {
          a = b;
          do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Tb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Ub(a) {
        if (Sb(a) !== a) throw Error(p(188));
      }
      function Vb(a) {
        var b = a.alternate;
        if (!b) {
          b = Sb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b;;) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f;) {
              if (f === c) return Ub(e), a;
              if (f === d) return Ub(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;else {
            for (var g = false, h = e.child; h;) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h;) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Wb(a) {
        a = Vb(a);
        return null !== a ? Xb(a) : null;
      }
      function Xb(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a;) {
          var b = Xb(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var Yb = ba.unstable_scheduleCallback,
        Zb = ba.unstable_cancelCallback,
        $b = ba.unstable_shouldYield,
        ac = ba.unstable_requestPaint,
        D = ba.unstable_now,
        bc = ba.unstable_getCurrentPriorityLevel,
        cc = ba.unstable_ImmediatePriority,
        dc = ba.unstable_UserBlockingPriority,
        ec = ba.unstable_NormalPriority,
        fc = ba.unstable_LowPriority,
        gc = ba.unstable_IdlePriority,
        hc = null,
        ic = null;
      function jc(a) {
        if (ic && "function" === typeof ic.onCommitFiberRoot) try {
          ic.onCommitFiberRoot(hc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {}
      }
      var lc = Math.clz32 ? Math.clz32 : kc,
        mc = Math.log,
        nc = Math.LN2;
      function kc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (mc(a) / nc | 0) | 0;
      }
      var oc = 64,
        pc = 4194304;
      function qc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function rc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0,
          e = a.suspendedLanes,
          f = a.pingedLanes,
          g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = qc(h) : (f &= g, 0 !== f && (d = qc(f)));
        } else g = c & ~e, 0 !== g ? d = qc(g) : 0 !== f && (d = qc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - lc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function sc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5E3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function tc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
          var g = 31 - lc(f),
            h = 1 << g,
            k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = sc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function uc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function vc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function wc(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - lc(b);
        a[b] = c;
      }
      function xc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c;) {
          var e = 31 - lc(c),
            f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function yc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c;) {
          var d = 31 - lc(c),
            e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var E = 0;
      function zc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ac,
        Bc,
        Cc,
        Dc,
        Ec,
        Fc = false,
        Gc = [],
        Hc = null,
        Ic = null,
        Jc = null,
        Kc = new Map(),
        Lc = new Map(),
        Mc = [],
        Nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Oc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Hc = null;
            break;
          case "dragenter":
          case "dragleave":
            Ic = null;
            break;
          case "mouseover":
          case "mouseout":
            Jc = null;
            break;
          case "pointerover":
          case "pointerout":
            Kc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Lc.delete(b.pointerId);
        }
      }
      function Pc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = {
          blockedOn: b,
          domEventName: c,
          eventSystemFlags: d,
          nativeEvent: f,
          targetContainers: [e]
        }, null !== b && (b = zb(b), null !== b && Bc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Qc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Hc = Pc(Hc, a, b, c, d, e), true;
          case "dragenter":
            return Ic = Pc(Ic, a, b, c, d, e), true;
          case "mouseover":
            return Jc = Pc(Jc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Kc.set(f, Pc(Kc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Lc.set(f, Pc(Lc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Rc(a) {
        var b = Sc(a.target);
        if (null !== b) {
          var c = Sb(b);
          if (null !== c) if (b = c.tag, 13 === b) {
            if (b = Tb(c), null !== b) {
              a.blockedOn = b;
              Ec(a.priority, function () {
                Cc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
        a.blockedOn = null;
      }
      function Tc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length;) {
          var c = Uc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            tb = d;
            c.target.dispatchEvent(d);
            tb = null;
          } else return b = zb(c), null !== b && Bc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Vc(a, b, c) {
        Tc(a) && c.delete(b);
      }
      function Wc() {
        Fc = false;
        null !== Hc && Tc(Hc) && (Hc = null);
        null !== Ic && Tc(Ic) && (Ic = null);
        null !== Jc && Tc(Jc) && (Jc = null);
        Kc.forEach(Vc);
        Lc.forEach(Vc);
      }
      function Xc(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Fc || (Fc = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Wc)));
      }
      function Yc(a) {
        function b(b) {
          return Xc(b, a);
        }
        if (0 < Gc.length) {
          Xc(Gc[0], a);
          for (var c = 1; c < Gc.length; c++) {
            var d = Gc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Hc && Xc(Hc, a);
        null !== Ic && Xc(Ic, a);
        null !== Jc && Xc(Jc, a);
        Kc.forEach(b);
        Lc.forEach(b);
        for (c = 0; c < Mc.length; c++) d = Mc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Mc.length && (c = Mc[0], null === c.blockedOn);) Rc(c), null === c.blockedOn && Mc.shift();
      }
      var Zc = sa.ReactCurrentBatchConfig;
      function $c(a, b, c, d) {
        var e = E,
          f = Zc.transition;
        Zc.transition = null;
        try {
          E = 1, ad(a, b, c, d);
        } finally {
          E = e, Zc.transition = f;
        }
      }
      function bd(a, b, c, d) {
        var e = E,
          f = Zc.transition;
        Zc.transition = null;
        try {
          E = 4, ad(a, b, c, d);
        } finally {
          E = e, Zc.transition = f;
        }
      }
      function ad(a, b, c, d) {
        var e = Uc(a, b, c, d);
        if (null === e) cd(a, b, d, dd, c), Oc(a, d);else if (Qc(e, a, b, c, d)) d.stopPropagation();else if (Oc(a, d), b & 4 && -1 < Nc.indexOf(a)) {
          for (; null !== e;) {
            var f = zb(e);
            null !== f && Ac(f);
            f = Uc(a, b, c, d);
            null === f && cd(a, b, d, dd, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else cd(a, b, d, null, c);
      }
      var dd = null;
      function Uc(a, b, c, d) {
        dd = null;
        a = ub(d);
        a = Sc(a);
        if (null !== a) if (b = Sb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
          a = Tb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        dd = a;
        return null;
      }
      function ed(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (bc()) {
              case cc:
                return 1;
              case dc:
                return 4;
              case ec:
              case fc:
                return 16;
              case gc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var fd = null,
        gd = null,
        hd = null;
      function id() {
        if (hd) return hd;
        var a,
          b = gd,
          c = b.length,
          d,
          e = "value" in fd ? fd.value : fd.textContent,
          f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++);
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
        return hd = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function jd(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function kd() {
        return true;
      }
      function ld() {
        return false;
      }
      function md(a) {
        function b(b, d, e, f, g) {
          this._reactName = b;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? kd : ld;
          this.isPropagationStopped = ld;
          return this;
        }
        A(b.prototype, {
          preventDefault: function () {
            this.defaultPrevented = true;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = false), this.isDefaultPrevented = kd);
          },
          stopPropagation: function () {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = true), this.isPropagationStopped = kd);
          },
          persist: function () {},
          isPersistent: kd
        });
        return b;
      }
      var nd = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (a) {
            return a.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        od = md(nd),
        pd = A({}, nd, {
          view: 0,
          detail: 0
        }),
        qd = md(pd),
        rd,
        sd,
        td,
        vd = A({}, pd, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: ud,
          button: 0,
          buttons: 0,
          relatedTarget: function (a) {
            return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
          },
          movementX: function (a) {
            if ("movementX" in a) return a.movementX;
            a !== td && (td && "mousemove" === a.type ? (rd = a.screenX - td.screenX, sd = a.screenY - td.screenY) : sd = rd = 0, td = a);
            return rd;
          },
          movementY: function (a) {
            return "movementY" in a ? a.movementY : sd;
          }
        }),
        wd = md(vd),
        xd = A({}, vd, {
          dataTransfer: 0
        }),
        yd = md(xd),
        zd = A({}, pd, {
          relatedTarget: 0
        }),
        Ad = md(zd),
        Bd = A({}, nd, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }),
        Cd = md(Bd),
        Dd = A({}, nd, {
          clipboardData: function (a) {
            return "clipboardData" in a ? a.clipboardData : window.clipboardData;
          }
        }),
        Ed = md(Dd),
        Fd = A({}, nd, {
          data: 0
        }),
        Gd = md(Fd),
        Hd = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        Id = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
        Jd = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey"
        };
      function Kd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Jd[a]) ? !!b[a] : false;
      }
      function ud() {
        return Kd;
      }
      var Ld = A({}, pd, {
          key: function (a) {
            if (a.key) {
              var b = Hd[a.key] || a.key;
              if ("Unidentified" !== b) return b;
            }
            return "keypress" === a.type ? (a = jd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Id[a.keyCode] || "Unidentified" : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: ud,
          charCode: function (a) {
            return "keypress" === a.type ? jd(a) : 0;
          },
          keyCode: function (a) {
            return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
          },
          which: function (a) {
            return "keypress" === a.type ? jd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
          }
        }),
        Md = md(Ld),
        Nd = A({}, vd, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        }),
        Od = md(Nd),
        Pd = A({}, pd, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: ud
        }),
        Qd = md(Pd),
        Rd = A({}, nd, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0
        }),
        Sd = md(Rd),
        Td = A({}, vd, {
          deltaX: function (a) {
            return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
          },
          deltaY: function (a) {
            return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        Ud = md(Td),
        Vd = [9, 13, 27, 32],
        Wd = ha && "CompositionEvent" in window,
        Xd = null;
      ha && "documentMode" in document && (Xd = document.documentMode);
      var Yd = ha && "TextEvent" in window && !Xd,
        Zd = ha && (!Wd || Xd && 8 < Xd && 11 >= Xd),
        $d = String.fromCharCode(32),
        ae = false;
      function be(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== Vd.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function ce(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var de = false;
      function ee(a, b) {
        switch (a) {
          case "compositionend":
            return ce(b);
          case "keypress":
            if (32 !== b.which) return null;
            ae = true;
            return $d;
          case "textInput":
            return a = b.data, a === $d && ae ? null : a;
          default:
            return null;
        }
      }
      function fe(a, b) {
        if (de) return "compositionend" === a || !Wd && be(a, b) ? (a = id(), hd = gd = fd = null, de = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return Zd && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var ge = {
        color: true,
        date: true,
        datetime: true,
        "datetime-local": true,
        email: true,
        month: true,
        number: true,
        password: true,
        range: true,
        search: true,
        tel: true,
        text: true,
        time: true,
        url: true,
        week: true
      };
      function he(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!ge[a.type] : "textarea" === b ? true : false;
      }
      function ie(a, b, c, d) {
        Bb(d);
        b = je(b, "onChange");
        0 < b.length && (c = new od("onChange", "change", null, c, d), a.push({
          event: c,
          listeners: b
        }));
      }
      var ke = null,
        le = null;
      function me(a) {
        ne(a, 0);
      }
      function oe(a) {
        var b = pe(a);
        if (Ua(b)) return a;
      }
      function qe(a, b) {
        if ("change" === a) return b;
      }
      var re = false;
      if (ha) {
        var se;
        if (ha) {
          var te = "oninput" in document;
          if (!te) {
            var ue = document.createElement("div");
            ue.setAttribute("oninput", "return;");
            te = "function" === typeof ue.oninput;
          }
          se = te;
        } else se = false;
        re = se && (!document.documentMode || 9 < document.documentMode);
      }
      function ve() {
        ke && (ke.detachEvent("onpropertychange", we), le = ke = null);
      }
      function we(a) {
        if ("value" === a.propertyName && oe(le)) {
          var b = [];
          ie(b, le, a, ub(a));
          Gb(me, b);
        }
      }
      function xe(a, b, c) {
        "focusin" === a ? (ve(), ke = b, le = c, ke.attachEvent("onpropertychange", we)) : "focusout" === a && ve();
      }
      function ye(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return oe(le);
      }
      function ze(a, b) {
        if ("click" === a) return oe(b);
      }
      function Ae(a, b) {
        if ("input" === a || "change" === a) return oe(b);
      }
      function Be(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var Ce = "function" === typeof Object.is ? Object.is : Be;
      function De(a, b) {
        if (Ce(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a),
          d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ia.call(b, e) || !Ce(a[e], b[e])) return false;
        }
        return true;
      }
      function Ee(a) {
        for (; a && a.firstChild;) a = a.firstChild;
        return a;
      }
      function Fe(a, b) {
        var c = Ee(a);
        a = 0;
        for (var d; c;) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
              node: c,
              offset: b - a
            };
            a = d;
          }
          a: {
            for (; c;) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Ee(c);
        }
      }
      function Ge(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Ge(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function He() {
        for (var a = window, b = Va(); b instanceof a.HTMLIFrameElement;) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;else break;
          b = Va(a.document);
        }
        return b;
      }
      function Ie(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Je(a) {
        var b = He(),
          c = a.focusedElem,
          d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Ge(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ie(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length,
              f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Fe(c, f);
            var g = Fe(c, d);
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
          b = [];
          for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
          });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Ke = ha && "documentMode" in document && 11 >= document.documentMode,
        Le = null,
        Me = null,
        Ne = null,
        Oe = false;
      function Pe(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Oe || null == Le || Le !== Va(d) || (d = Le, "selectionStart" in d && Ie(d) ? d = {
          start: d.selectionStart,
          end: d.selectionEnd
        } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
          anchorNode: d.anchorNode,
          anchorOffset: d.anchorOffset,
          focusNode: d.focusNode,
          focusOffset: d.focusOffset
        }), Ne && De(Ne, d) || (Ne = d, d = je(Me, "onSelect"), 0 < d.length && (b = new od("onSelect", "select", null, b, c), a.push({
          event: b,
          listeners: d
        }), b.target = Le)));
      }
      function Qe(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var Re = {
          animationend: Qe("Animation", "AnimationEnd"),
          animationiteration: Qe("Animation", "AnimationIteration"),
          animationstart: Qe("Animation", "AnimationStart"),
          transitionend: Qe("Transition", "TransitionEnd")
        },
        Se = {},
        Te = {};
      ha && (Te = document.createElement("div").style, "AnimationEvent" in window || (delete Re.animationend.animation, delete Re.animationiteration.animation, delete Re.animationstart.animation), "TransitionEvent" in window || delete Re.transitionend.transition);
      function Ue(a) {
        if (Se[a]) return Se[a];
        if (!Re[a]) return a;
        var b = Re[a],
          c;
        for (c in b) if (b.hasOwnProperty(c) && c in Te) return Se[a] = b[c];
        return a;
      }
      var Ve = Ue("animationend"),
        We = Ue("animationiteration"),
        Xe = Ue("animationstart"),
        Ye = Ue("transitionend"),
        Ze = new Map(),
        $e = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function af(a, b) {
        Ze.set(a, b);
        ea(b, [a]);
      }
      for (var bf = 0; bf < $e.length; bf++) {
        var cf = $e[bf],
          df = cf.toLowerCase(),
          ef = cf[0].toUpperCase() + cf.slice(1);
        af(df, "on" + ef);
      }
      af(Ve, "onAnimationEnd");
      af(We, "onAnimationIteration");
      af(Xe, "onAnimationStart");
      af("dblclick", "onDoubleClick");
      af("focusin", "onFocus");
      af("focusout", "onBlur");
      af(Ye, "onTransitionEnd");
      fa("onMouseEnter", ["mouseout", "mouseover"]);
      fa("onMouseLeave", ["mouseout", "mouseover"]);
      fa("onPointerEnter", ["pointerout", "pointerover"]);
      fa("onPointerLeave", ["pointerout", "pointerover"]);
      ea("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      ea("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      ea("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      ea("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      ea("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var ff = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ff));
      function hf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Rb(d, b, void 0, a);
        a.currentTarget = null;
      }
      function ne(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g],
                k = h.instance,
                l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              hf(e, h, l);
              f = k;
            } else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              hf(e, h, l);
              f = k;
            }
          }
        }
        if (Nb) throw a = Ob, Nb = false, Ob = null, a;
      }
      function F(a, b) {
        var c = b[jf];
        void 0 === c && (c = b[jf] = new Set());
        var d = a + "__bubble";
        c.has(d) || (kf(b, a, 2, false), c.add(d));
      }
      function lf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        kf(c, a, d, b);
      }
      var mf = "_reactListening" + Math.random().toString(36).slice(2);
      function nf(a) {
        if (!a[mf]) {
          a[mf] = true;
          ca.forEach(function (b) {
            "selectionchange" !== b && (gf.has(b) || lf(b, false, a), lf(b, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[mf] || (b[mf] = true, lf("selectionchange", false, b));
        }
      }
      function kf(a, b, c, d) {
        switch (ed(b)) {
          case 1:
            var e = $c;
            break;
          case 4:
            e = bd;
            break;
          default:
            e = ad;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Ib || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, {
          capture: true,
          passive: e
        }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, {
          passive: e
        }) : a.addEventListener(b, c, false);
      }
      function cd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g;) {
              var k = g.tag;
              if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              g = g.return;
            }
            for (; null !== h;) {
              g = Sc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Gb(function () {
          var d = f,
            e = ub(c),
            g = [];
          a: {
            var h = Ze.get(a);
            if (void 0 !== h) {
              var k = od,
                n = a;
              switch (a) {
                case "keypress":
                  if (0 === jd(c)) break a;
                case "keydown":
                case "keyup":
                  k = Md;
                  break;
                case "focusin":
                  n = "focus";
                  k = Ad;
                  break;
                case "focusout":
                  n = "blur";
                  k = Ad;
                  break;
                case "beforeblur":
                case "afterblur":
                  k = Ad;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k = wd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k = yd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k = Qd;
                  break;
                case Ve:
                case We:
                case Xe:
                  k = Cd;
                  break;
                case Ye:
                  k = Sd;
                  break;
                case "scroll":
                  k = qd;
                  break;
                case "wheel":
                  k = Ud;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k = Ed;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k = Od;
              }
              var v = 0 !== (b & 4),
                C = !v && "scroll" === a,
                t = v ? null !== h ? h + "Capture" : null : h;
              v = [];
              for (var r = d, x; null !== r;) {
                x = r;
                var B = x.stateNode;
                5 === x.tag && null !== B && (x = B, null !== t && (B = Hb(r, t), null != B && v.push(of(r, B, x))));
                if (C) break;
                r = r.return;
              }
              0 < v.length && (h = new k(h, n, null, c, e), g.push({
                event: h,
                listeners: v
              }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h = "mouseover" === a || "pointerover" === a;
              k = "mouseout" === a || "pointerout" === a;
              if (h && c !== tb && (n = c.relatedTarget || c.fromElement) && (Sc(n) || n[pf])) break a;
              if (k || h) {
                h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                if (k) {
                  if (n = c.relatedTarget || c.toElement, k = d, n = n ? Sc(n) : null, null !== n && (C = Sb(n), n !== C || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k = null, n = d;
                if (k !== n) {
                  v = wd;
                  B = "onMouseLeave";
                  t = "onMouseEnter";
                  r = "mouse";
                  if ("pointerout" === a || "pointerover" === a) v = Od, B = "onPointerLeave", t = "onPointerEnter", r = "pointer";
                  C = null == k ? h : pe(k);
                  x = null == n ? h : pe(n);
                  h = new v(B, r + "leave", k, c, e);
                  h.target = C;
                  h.relatedTarget = x;
                  B = null;
                  Sc(e) === d && (v = new v(t, r + "enter", n, c, e), v.target = x, v.relatedTarget = C, B = v);
                  C = B;
                  if (k && n) b: {
                    v = k;
                    t = n;
                    r = 0;
                    for (x = v; x; x = qf(x)) r++;
                    x = 0;
                    for (B = t; B; B = qf(B)) x++;
                    for (; 0 < r - x;) v = qf(v), r--;
                    for (; 0 < x - r;) t = qf(t), x--;
                    for (; r--;) {
                      if (v === t || null !== t && v === t.alternate) break b;
                      v = qf(v);
                      t = qf(t);
                    }
                    v = null;
                  } else v = null;
                  null !== k && rf(g, h, k, v, false);
                  null !== n && null !== C && rf(g, C, n, v, true);
                }
              }
            }
            a: {
              h = d ? pe(d) : window;
              k = h.nodeName && h.nodeName.toLowerCase();
              if ("select" === k || "input" === k && "file" === h.type) var O = qe;else if (he(h)) {
                if (re) O = Ae;else {
                  O = ye;
                  var T = xe;
                }
              } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (O = ze);
              if (O && (O = O(a, d))) {
                ie(g, O, c, e);
                break a;
              }
              T && T(a, h, d);
              "focusout" === a && (T = h._wrapperState) && T.controlled && "number" === h.type && $a(h, "number", h.value);
            }
            T = d ? pe(d) : window;
            switch (a) {
              case "focusin":
                if (he(T) || "true" === T.contentEditable) Le = T, Me = d, Ne = null;
                break;
              case "focusout":
                Ne = Me = Le = null;
                break;
              case "mousedown":
                Oe = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Oe = false;
                Pe(g, c, e);
                break;
              case "selectionchange":
                if (Ke) break;
              case "keydown":
              case "keyup":
                Pe(g, c, e);
            }
            var za;
            if (Wd) b: {
              switch (a) {
                case "compositionstart":
                  var L = "onCompositionStart";
                  break b;
                case "compositionend":
                  L = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  L = "onCompositionUpdate";
                  break b;
              }
              L = void 0;
            } else de ? be(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
            L && (Zd && "ko" !== c.locale && (de || "onCompositionStart" !== L ? "onCompositionEnd" === L && de && (za = id()) : (fd = e, gd = "value" in fd ? fd.value : fd.textContent, de = true)), T = je(d, L), 0 < T.length && (L = new Gd(L, a, null, c, e), g.push({
              event: L,
              listeners: T
            }), za ? L.data = za : (za = ce(c), null !== za && (L.data = za))));
            if (za = Yd ? ee(a, c) : fe(a, c)) d = je(d, "onBeforeInput"), 0 < d.length && (e = new Gd("onBeforeInput", "beforeinput", null, c, e), g.push({
              event: e,
              listeners: d
            }), e.data = za);
          }
          ne(g, b);
        });
      }
      function of(a, b, c) {
        return {
          instance: a,
          listener: b,
          currentTarget: c
        };
      }
      function je(a, b) {
        for (var c = b + "Capture", d = []; null !== a;) {
          var e = a,
            f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Hb(a, c), null != f && d.unshift(of(a, f, e)), f = Hb(a, b), null != f && d.push(of(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function qf(a) {
        if (null === a) return null;
        do a = a.return; while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function rf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d;) {
          var h = c,
            k = h.alternate,
            l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Hb(c, f), null != k && g.unshift(of(c, k, h))) : e || (k = Hb(c, f), null != k && g.push(of(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({
          event: b,
          listeners: g
        });
      }
      var sf = /\r\n?/g,
        tf = /\u0000|\uFFFD/g;
      function uf(a) {
        return ("string" === typeof a ? a : "" + a).replace(sf, "\n").replace(tf, "");
      }
      function vf(a, b, c) {
        b = uf(b);
        if (uf(a) !== b && c) throw Error(p(425));
      }
      function wf() {}
      var xf = null;
      function yf(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var zf = "function" === typeof setTimeout ? setTimeout : void 0,
        Af = "function" === typeof clearTimeout ? clearTimeout : void 0,
        Bf = "function" === typeof Promise ? Promise : void 0,
        Df = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Bf ? function (a) {
          return Bf.resolve(null).then(a).catch(Cf);
        } : zf;
      function Cf(a) {
        setTimeout(function () {
          throw a;
        });
      }
      function Ef(a, b) {
        var c = b,
          d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              Yc(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        Yc(b);
      }
      function Ff(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Gf(a) {
        a = a.previousSibling;
        for (var b = 0; a;) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Hf = Math.random().toString(36).slice(2),
        If = "__reactFiber$" + Hf,
        Jf = "__reactProps$" + Hf,
        pf = "__reactContainer$" + Hf,
        jf = "__reactEvents$" + Hf,
        Kf = "__reactListeners$" + Hf,
        Lf = "__reactHandles$" + Hf;
      function Sc(a) {
        var b = a[If];
        if (b) return b;
        for (var c = a.parentNode; c;) {
          if (b = c[pf] || c[If]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Gf(a); null !== a;) {
              if (c = a[If]) return c;
              a = Gf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function zb(a) {
        a = a[If] || a[pf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function pe(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Ab(a) {
        return a[Jf] || null;
      }
      var Mf = [],
        Nf = -1;
      function Of(a) {
        return {
          current: a
        };
      }
      function G(a) {
        0 > Nf || (a.current = Mf[Nf], Mf[Nf] = null, Nf--);
      }
      function H(a, b) {
        Nf++;
        Mf[Nf] = a.current;
        a.current = b;
      }
      var Pf = {},
        I = Of(Pf),
        Qf = Of(false),
        Rf = Pf;
      function Sf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Pf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {},
          f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Tf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function Uf() {
        G(Qf);
        G(I);
      }
      function Vf(a, b, c) {
        if (I.current !== Pf) throw Error(p(168));
        H(I, b);
        H(Qf, c);
      }
      function Wf(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Pa(a) || "Unknown", e));
        return A({}, c, d);
      }
      function Xf(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Pf;
        Rf = I.current;
        H(I, a);
        H(Qf, Qf.current);
        return true;
      }
      function Yf(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = Wf(a, b, Rf), d.__reactInternalMemoizedMergedChildContext = a, G(Qf), G(I), H(I, a)) : G(Qf);
        H(Qf, c);
      }
      var Zf = null,
        $f = false,
        ag = false;
      function bg(a) {
        null === Zf ? Zf = [a] : Zf.push(a);
      }
      function cg(a) {
        $f = true;
        bg(a);
      }
      function dg() {
        if (!ag && null !== Zf) {
          ag = true;
          var a = 0,
            b = E;
          try {
            var c = Zf;
            for (E = 1; a < c.length; a++) {
              var d = c[a];
              do d = d(!0); while (null !== d);
            }
            Zf = null;
            $f = !1;
          } catch (e) {
            throw null !== Zf && (Zf = Zf.slice(a + 1)), Yb(cc, dg), e;
          } finally {
            E = b, ag = false;
          }
        }
        return null;
      }
      var eg = sa.ReactCurrentBatchConfig;
      function fg(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      var gg = Of(null),
        hg = null,
        ig = null,
        jg = null;
      function kg() {
        jg = ig = hg = null;
      }
      function lg(a) {
        var b = gg.current;
        G(gg);
        a._currentValue = b;
      }
      function mg(a, b, c) {
        for (; null !== a;) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ng(a, b) {
        hg = a;
        jg = ig = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (og = true), a.firstContext = null);
      }
      function pg(a) {
        var b = a._currentValue;
        if (jg !== a) if (a = {
          context: a,
          memoizedValue: b,
          next: null
        }, null === ig) {
          if (null === hg) throw Error(p(308));
          ig = a;
          hg.dependencies = {
            lanes: 0,
            firstContext: a
          };
        } else ig = ig.next = a;
        return b;
      }
      var qg = null,
        rg = false;
      function sg(a) {
        a.updateQueue = {
          baseState: a.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            interleaved: null,
            lanes: 0
          },
          effects: null
        };
      }
      function tg(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        });
      }
      function ug(a, b) {
        return {
          eventTime: a,
          lane: b,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function vg(a, b) {
        var c = a.updateQueue;
        null !== c && (c = c.shared, null !== J && 0 !== (a.mode & 1) && 0 === (K & 2) ? (a = c.interleaved, null === a ? (b.next = b, null === qg ? qg = [c] : qg.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
      }
      function wg(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          yc(a, c);
        }
      }
      function xg(a, b) {
        var c = a.updateQueue,
          d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null,
            f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = {
                eventTime: c.eventTime,
                lane: c.lane,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null
              };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
          };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function yg(a, b, c, d) {
        var e = a.updateQueue;
        rg = false;
        var f = e.firstBaseUpdate,
          g = e.lastBaseUpdate,
          h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h,
            l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var w = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var u = h.lane,
              y = h.eventTime;
            if ((d & u) === u) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a,
                  v = h;
                u = b;
                y = c;
                switch (v.tag) {
                  case 1:
                    n = v.payload;
                    if ("function" === typeof n) {
                      w = n.call(y, w, u);
                      break a;
                    }
                    w = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = v.payload;
                    u = "function" === typeof n ? n.call(y, w, u) : n;
                    if (null === u || void 0 === u) break a;
                    w = A({}, w, u);
                    break a;
                  case 2:
                    rg = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, u = e.effects, null === u ? e.effects = [h] : u.push(h));
            } else y = {
              eventTime: y,
              lane: u,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, null === m ? (l = m = y, k = w) : m = m.next = y, g |= u;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;else u = h, h = u.next, u.next = null, e.lastBaseUpdate = u, e.shared.pending = null;
          } while (1);
          null === m && (k = w);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next; while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          zg |= g;
          a.lanes = g;
          a.memoizedState = w;
        }
      }
      function Ag(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b],
            e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var Bg = new aa.Component().refs;
      function Cg(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Fg = {
        isMounted: function (a) {
          return (a = a._reactInternals) ? Sb(a) === a : false;
        },
        enqueueSetState: function (a, b, c) {
          a = a._reactInternals;
          var d = M(),
            e = Dg(a),
            f = ug(d, e);
          f.payload = b;
          void 0 !== c && null !== c && (f.callback = c);
          vg(a, f);
          b = Eg(a, e, d);
          null !== b && wg(b, a, e);
        },
        enqueueReplaceState: function (a, b, c) {
          a = a._reactInternals;
          var d = M(),
            e = Dg(a),
            f = ug(d, e);
          f.tag = 1;
          f.payload = b;
          void 0 !== c && null !== c && (f.callback = c);
          vg(a, f);
          b = Eg(a, e, d);
          null !== b && wg(b, a, e);
        },
        enqueueForceUpdate: function (a, b) {
          a = a._reactInternals;
          var c = M(),
            d = Dg(a),
            e = ug(c, d);
          e.tag = 2;
          void 0 !== b && null !== b && (e.callback = b);
          vg(a, e);
          b = Eg(a, d, c);
          null !== b && wg(b, a, d);
        }
      };
      function Gg(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !De(c, d) || !De(e, f) : true;
      }
      function Hg(a, b, c) {
        var d = false,
          e = Pf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = pg(f) : (e = Tf(b) ? Rf : I.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Sf(a, e) : Pf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Fg;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Ig(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Fg.enqueueReplaceState(b, b.state, null);
      }
      function Jg(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = Bg;
        sg(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = pg(f) : (f = Tf(b) ? Rf : I.current, e.context = Sf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Cg(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Fg.enqueueReplaceState(e, e.state, null), yg(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      var Kg = [],
        Lg = 0,
        Mg = null,
        Ng = 0,
        Og = [],
        Pg = 0,
        Qg = null,
        Rg = 1,
        Sg = "";
      function Tg(a, b) {
        Kg[Lg++] = Ng;
        Kg[Lg++] = Mg;
        Mg = a;
        Ng = b;
      }
      function Ug(a, b, c) {
        Og[Pg++] = Rg;
        Og[Pg++] = Sg;
        Og[Pg++] = Qg;
        Qg = a;
        var d = Rg;
        a = Sg;
        var e = 32 - lc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - lc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          Rg = 1 << 32 - lc(b) + e | c << e | d;
          Sg = f + a;
        } else Rg = 1 << f | c << e | d, Sg = a;
      }
      function Vg(a) {
        null !== a.return && (Tg(a, 1), Ug(a, 1, 0));
      }
      function Wg(a) {
        for (; a === Mg;) Mg = Kg[--Lg], Kg[Lg] = null, Ng = Kg[--Lg], Kg[Lg] = null;
        for (; a === Qg;) Qg = Og[--Pg], Og[Pg] = null, Sg = Og[--Pg], Og[Pg] = null, Rg = Og[--Pg], Og[Pg] = null;
      }
      var Xg = null,
        Yg = null,
        N = false,
        Zg = null;
      function $g(a, b) {
        var c = ah(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function bh(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, Xg = a, Yg = Ff(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, Xg = a, Yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== Qg ? {
              id: Rg,
              overflow: Sg
            } : null, a.memoizedState = {
              dehydrated: b,
              treeContext: c,
              retryLane: 1073741824
            }, c = ah(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, Xg = a, Yg = null, true) : false;
          default:
            return false;
        }
      }
      function ch(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function dh(a) {
        if (N) {
          var b = Yg;
          if (b) {
            var c = b;
            if (!bh(a, b)) {
              if (ch(a)) throw Error(p(418));
              b = Ff(c.nextSibling);
              var d = Xg;
              b && bh(a, b) ? $g(d, c) : (a.flags = a.flags & -4097 | 2, N = false, Xg = a);
            }
          } else {
            if (ch(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            N = false;
            Xg = a;
          }
        }
      }
      function eh(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
        Xg = a;
      }
      function fh(a) {
        if (a !== Xg) return false;
        if (!N) return eh(a), N = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !yf(a.type, a.memoizedProps));
        if (b && (b = Yg)) {
          if (ch(a)) {
            for (a = Yg; a;) a = Ff(a.nextSibling);
            throw Error(p(418));
          }
          for (; b;) $g(a, b), b = Ff(b.nextSibling);
        }
        eh(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a;) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    Yg = Ff(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            Yg = null;
          }
        } else Yg = Xg ? Ff(a.stateNode.nextSibling) : null;
        return true;
      }
      function gh() {
        Yg = Xg = null;
        N = false;
      }
      function hh(a) {
        null === Zg ? Zg = [a] : Zg.push(a);
      }
      function ih(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d,
              f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function (a) {
              var b = e.refs;
              b === Bg && (b = e.refs = {});
              null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function jh(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function kh(a) {
        var b = a._init;
        return b(a._payload);
      }
      function lh(a) {
        function b(b, c) {
          if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
          }
        }
        function c(c, d) {
          if (!a) return null;
          for (; null !== d;) b(c, d), d = d.sibling;
          return null;
        }
        function d(a, b) {
          for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
          return a;
        }
        function e(a, b) {
          a = mh(a, b);
          a.index = 0;
          a.sibling = null;
          return a;
        }
        function f(b, c, d) {
          b.index = d;
          if (!a) return b.flags |= 1048576, c;
          d = b.alternate;
          if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
          b.flags |= 2;
          return c;
        }
        function g(b) {
          a && null === b.alternate && (b.flags |= 2);
          return b;
        }
        function h(a, b, c, d) {
          if (null === b || 6 !== b.tag) return b = nh(c, a.mode, d), b.return = a, b;
          b = e(b, c);
          b.return = a;
          return b;
        }
        function k(a, b, c, d) {
          var f = c.type;
          if (f === va) return m(a, b, c.props.children, d, c.key);
          if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Fa && kh(f) === b.type)) return d = e(b, c.props), d.ref = ih(a, b, c), d.return = a, d;
          d = oh(c.type, c.key, c.props, null, a.mode, d);
          d.ref = ih(a, b, c);
          d.return = a;
          return d;
        }
        function l(a, b, c, d) {
          if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = ph(c, a.mode, d), b.return = a, b;
          b = e(b, c.children || []);
          b.return = a;
          return b;
        }
        function m(a, b, c, d, f) {
          if (null === b || 7 !== b.tag) return b = qh(c, a.mode, d, f), b.return = a, b;
          b = e(b, c);
          b.return = a;
          return b;
        }
        function w(a, b, c) {
          if ("string" === typeof b && "" !== b || "number" === typeof b) return b = nh("" + b, a.mode, c), b.return = a, b;
          if ("object" === typeof b && null !== b) {
            switch (b.$$typeof) {
              case ta:
                return c = oh(b.type, b.key, b.props, null, a.mode, c), c.ref = ih(a, null, b), c.return = a, c;
              case ua:
                return b = ph(b, a.mode, c), b.return = a, b;
              case Fa:
                var d = b._init;
                return w(a, d(b._payload), c);
            }
            if (bb(b) || Ia(b)) return b = qh(b, a.mode, c, null), b.return = a, b;
            jh(a, b);
          }
          return null;
        }
        function u(a, b, c, d) {
          var e = null !== b ? b.key : null;
          if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
          if ("object" === typeof c && null !== c) {
            switch (c.$$typeof) {
              case ta:
                return c.key === e ? k(a, b, c, d) : null;
              case ua:
                return c.key === e ? l(a, b, c, d) : null;
              case Fa:
                return e = c._init, u(a, b, e(c._payload), d);
            }
            if (bb(c) || Ia(c)) return null !== e ? null : m(a, b, c, d, null);
            jh(a, c);
          }
          return null;
        }
        function y(a, b, c, d, e) {
          if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
          if ("object" === typeof d && null !== d) {
            switch (d.$$typeof) {
              case ta:
                return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
              case ua:
                return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
              case Fa:
                var f = d._init;
                return y(a, b, c, f(d._payload), e);
            }
            if (bb(d) || Ia(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            jh(b, d);
          }
          return null;
        }
        function n(e, g, h, k) {
          for (var l = null, n = null, m = g, r = g = 0, x = null; null !== m && r < h.length; r++) {
            m.index > r ? (x = m, m = null) : x = m.sibling;
            var t = u(e, m, h[r], k);
            if (null === t) {
              null === m && (m = x);
              break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, r);
            null === n ? l = t : n.sibling = t;
            n = t;
            m = x;
          }
          if (r === h.length) return c(e, m), N && Tg(e, r), l;
          if (null === m) {
            for (; r < h.length; r++) m = w(e, h[r], k), null !== m && (g = f(m, g, r), null === n ? l = m : n.sibling = m, n = m);
            N && Tg(e, r);
            return l;
          }
          for (m = d(e, m); r < h.length; r++) x = y(m, e, r, h[r], k), null !== x && (a && null !== x.alternate && m.delete(null === x.key ? r : x.key), g = f(x, g, r), null === n ? l = x : n.sibling = x, n = x);
          a && m.forEach(function (a) {
            return b(e, a);
          });
          N && Tg(e, r);
          return l;
        }
        function v(e, g, h, k) {
          var l = Ia(h);
          if ("function" !== typeof l) throw Error(p(150));
          h = l.call(h);
          if (null == h) throw Error(p(151));
          for (var m = l = null, n = g, r = g = 0, x = null, t = h.next(); null !== n && !t.done; r++, t = h.next()) {
            n.index > r ? (x = n, n = null) : x = n.sibling;
            var v = u(e, n, t.value, k);
            if (null === v) {
              null === n && (n = x);
              break;
            }
            a && n && null === v.alternate && b(e, n);
            g = f(v, g, r);
            null === m ? l = v : m.sibling = v;
            m = v;
            n = x;
          }
          if (t.done) return c(e, n), N && Tg(e, r), l;
          if (null === n) {
            for (; !t.done; r++, t = h.next()) t = w(e, t.value, k), null !== t && (g = f(t, g, r), null === m ? l = t : m.sibling = t, m = t);
            N && Tg(e, r);
            return l;
          }
          for (n = d(e, n); !t.done; r++, t = h.next()) t = y(n, e, r, t.value, k), null !== t && (a && null !== t.alternate && n.delete(null === t.key ? r : t.key), g = f(t, g, r), null === m ? l = t : m.sibling = t, m = t);
          a && n.forEach(function (a) {
            return b(e, a);
          });
          N && Tg(e, r);
          return l;
        }
        function C(a, d, f, h) {
          "object" === typeof f && null !== f && f.type === va && null === f.key && (f = f.props.children);
          if ("object" === typeof f && null !== f) {
            switch (f.$$typeof) {
              case ta:
                a: {
                  for (var k = f.key, l = d; null !== l;) {
                    if (l.key === k) {
                      k = f.type;
                      if (k === va) {
                        if (7 === l.tag) {
                          c(a, l.sibling);
                          d = e(l, f.props.children);
                          d.return = a;
                          a = d;
                          break a;
                        }
                      } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Fa && kh(k) === l.type) {
                        c(a, l.sibling);
                        d = e(l, f.props);
                        d.ref = ih(a, l, f);
                        d.return = a;
                        a = d;
                        break a;
                      }
                      c(a, l);
                      break;
                    } else b(a, l);
                    l = l.sibling;
                  }
                  f.type === va ? (d = qh(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = oh(f.type, f.key, f.props, null, a.mode, h), h.ref = ih(a, d, f), h.return = a, a = h);
                }
                return g(a);
              case ua:
                a: {
                  for (l = f.key; null !== d;) {
                    if (d.key === l) {
                      if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                        c(a, d.sibling);
                        d = e(d, f.children || []);
                        d.return = a;
                        a = d;
                        break a;
                      } else {
                        c(a, d);
                        break;
                      }
                    } else b(a, d);
                    d = d.sibling;
                  }
                  d = ph(f, a.mode, h);
                  d.return = a;
                  a = d;
                }
                return g(a);
              case Fa:
                return l = f._init, C(a, d, l(f._payload), h);
            }
            if (bb(f)) return n(a, d, f, h);
            if (Ia(f)) return v(a, d, f, h);
            jh(a, f);
          }
          return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = nh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
        }
        return C;
      }
      var rh = lh(true),
        sh = lh(false),
        th = {},
        uh = Of(th),
        vh = Of(th),
        wh = Of(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        H(wh, b);
        H(vh, a);
        H(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : ib(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = ib(b, a);
        }
        G(uh);
        H(uh, b);
      }
      function zh() {
        G(uh);
        G(vh);
        G(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = ib(b, a.type);
        b !== c && (H(vh, a), H(uh, c));
      }
      function Bh(a) {
        vh.current === a && (G(uh), G(vh));
      }
      var P = Of(0);
      function Ch(a) {
        for (var b = a; null !== b;) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling;) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = sa.ReactCurrentDispatcher,
        Gh = sa.ReactCurrentBatchConfig,
        Hh = 0,
        Q = null,
        R = null,
        S = null,
        Ih = false,
        Jh = false,
        Kh = 0,
        Lh = 0;
      function U() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!Ce(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        Q = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            S = R = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== R && null !== R.next;
        Hh = 0;
        S = R = Q = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        null === S ? Q.memoizedState = S = a : S = S.next = a;
        return S;
      }
      function Uh() {
        if (null === R) {
          var a = Q.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = R.next;
        var b = null === S ? Q.memoizedState : S.next;
        if (null !== b) S = b, R = a;else {
          if (null === a) throw Error(p(310));
          R = a;
          a = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null
          };
          null === S ? Q.memoizedState = S = a : S = S.next = a;
        }
        return S;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(),
          c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = R,
          e = d.baseQueue,
          f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null,
            k = null,
            l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
              var w = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = w, g = d) : k = k.next = w;
              Q.lanes |= m;
              zg |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          Ce(d, b.memoizedState) || (og = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do f = e.lane, Q.lanes |= f, zg |= f, e = e.next; while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(),
          c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch,
          e = c.pending,
          f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do f = a(f, g.action), g = g.next; while (g !== e);
          Ce(f, b.memoizedState) || (og = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {}
      function Zh(a, b) {
        var c = Q,
          d = Uh(),
          e = b(),
          f = !Ce(d.memoizedState, e);
        f && (d.memoizedState = e, og = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== S && S.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e, b), void 0, null);
          if (null === J) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e);
        }
        return e;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = {
          getSnapshot: b,
          value: c
        };
        b = Q.updateQueue;
        null === b ? (b = {
          lastEffect: null,
          stores: null
        }, Q.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && Eg(a, 1, -1);
      }
      function ai(a, b, c) {
        return c(function () {
          ei(b) && Eg(a, 1, -1);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !Ce(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vh,
          lastRenderedState: a
        };
        b.queue = a;
        a = a.dispatch = gi.bind(null, Q, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = {
          tag: a,
          create: b,
          destroy: c,
          deps: d,
          next: null
        };
        b = Q.updateQueue;
        null === b ? (b = {
          lastEffect: null,
          stores: null
        }, Q.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function hi() {
        return Uh().memoizedState;
      }
      function ii(a, b, c, d) {
        var e = Th();
        Q.flags |= a;
        e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function ji(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== R) {
          var g = R.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b, c, f, d);
            return;
          }
        }
        Q.flags |= a;
        e.memoizedState = bi(1 | b, c, f, d);
      }
      function ki(a, b) {
        return ii(8390656, 8, a, b);
      }
      function $h(a, b) {
        return ji(2048, 8, a, b);
      }
      function li(a, b) {
        return ji(4, 2, a, b);
      }
      function mi(a, b) {
        return ji(4, 4, a, b);
      }
      function ni(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function () {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
          b.current = null;
        };
      }
      function oi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ji(4, 4, ni.bind(null, b, a), c);
      }
      function pi() {}
      function qi(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ri(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function si(a, b) {
        var c = E;
        E = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(!1), b();
        } finally {
          E = c, Gh.transition = d;
        }
      }
      function ti() {
        return Uh().memoizedState;
      }
      function ui(a, b, c) {
        var d = Dg(a);
        c = {
          lane: d,
          action: c,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        vi(a) ? wi(b, c) : (xi(a, b, c), c = M(), a = Eg(a, d, c), null !== a && yi(a, b, d));
      }
      function gi(a, b, c) {
        var d = Dg(a),
          e = {
            lane: d,
            action: c,
            hasEagerState: false,
            eagerState: null,
            next: null
          };
        if (vi(a)) wi(b, e);else {
          xi(a, b, e);
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState,
              h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if (Ce(h, g)) return;
          } catch (k) {} finally {}
          c = M();
          a = Eg(a, d, c);
          null !== a && yi(a, b, d);
        }
      }
      function vi(a) {
        var b = a.alternate;
        return a === Q || null !== b && b === Q;
      }
      function wi(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function xi(a, b, c) {
        null !== J && 0 !== (a.mode & 1) && 0 === (K & 2) ? (a = b.interleaved, null === a ? (c.next = c, null === qg ? qg = [b] : qg.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
      }
      function yi(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          yc(a, c);
        }
      }
      var Rh = {
          readContext: pg,
          useCallback: U,
          useContext: U,
          useEffect: U,
          useImperativeHandle: U,
          useInsertionEffect: U,
          useLayoutEffect: U,
          useMemo: U,
          useReducer: U,
          useRef: U,
          useState: U,
          useDebugValue: U,
          useDeferredValue: U,
          useTransition: U,
          useMutableSource: U,
          useSyncExternalStore: U,
          useId: U,
          unstable_isNewReconciler: false
        },
        Oh = {
          readContext: pg,
          useCallback: function (a, b) {
            Th().memoizedState = [a, void 0 === b ? null : b];
            return a;
          },
          useContext: pg,
          useEffect: ki,
          useImperativeHandle: function (a, b, c) {
            c = null !== c && void 0 !== c ? c.concat([a]) : null;
            return ii(4194308, 4, ni.bind(null, b, a), c);
          },
          useLayoutEffect: function (a, b) {
            return ii(4194308, 4, a, b);
          },
          useInsertionEffect: function (a, b) {
            return ii(4, 2, a, b);
          },
          useMemo: function (a, b) {
            var c = Th();
            b = void 0 === b ? null : b;
            a = a();
            c.memoizedState = [a, b];
            return a;
          },
          useReducer: function (a, b, c) {
            var d = Th();
            b = void 0 !== c ? c(b) : b;
            d.memoizedState = d.baseState = b;
            a = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: a,
              lastRenderedState: b
            };
            d.queue = a;
            a = a.dispatch = ui.bind(null, Q, a);
            return [d.memoizedState, a];
          },
          useRef: function (a) {
            var b = Th();
            a = {
              current: a
            };
            return b.memoizedState = a;
          },
          useState: fi,
          useDebugValue: pi,
          useDeferredValue: function (a) {
            var b = fi(a),
              c = b[0],
              d = b[1];
            ki(function () {
              var b = Gh.transition;
              Gh.transition = {};
              try {
                d(a);
              } finally {
                Gh.transition = b;
              }
            }, [a]);
            return c;
          },
          useTransition: function () {
            var a = fi(false),
              b = a[0];
            a = si.bind(null, a[1]);
            Th().memoizedState = a;
            return [b, a];
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (a, b, c) {
            var d = Q,
              e = Th();
            if (N) {
              if (void 0 === c) throw Error(p(407));
              c = c();
            } else {
              c = b();
              if (null === J) throw Error(p(349));
              0 !== (Hh & 30) || di(d, b, c);
            }
            e.memoizedState = c;
            var f = {
              value: c,
              getSnapshot: b
            };
            e.queue = f;
            ki(ai.bind(null, d, f, a), [a]);
            d.flags |= 2048;
            bi(9, ci.bind(null, d, f, c, b), void 0, null);
            return c;
          },
          useId: function () {
            var a = Th(),
              b = J.identifierPrefix;
            if (N) {
              var c = Sg;
              var d = Rg;
              c = (d & ~(1 << 32 - lc(d) - 1)).toString(32) + c;
              b = ":" + b + "R" + c;
              c = Kh++;
              0 < c && (b += "H" + c.toString(32));
              b += ":";
            } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
            return a.memoizedState = b;
          },
          unstable_isNewReconciler: false
        },
        Ph = {
          readContext: pg,
          useCallback: qi,
          useContext: pg,
          useEffect: $h,
          useImperativeHandle: oi,
          useInsertionEffect: li,
          useLayoutEffect: mi,
          useMemo: ri,
          useReducer: Wh,
          useRef: hi,
          useState: function () {
            return Wh(Vh);
          },
          useDebugValue: pi,
          useDeferredValue: function (a) {
            var b = Wh(Vh),
              c = b[0],
              d = b[1];
            $h(function () {
              var b = Gh.transition;
              Gh.transition = {};
              try {
                d(a);
              } finally {
                Gh.transition = b;
              }
            }, [a]);
            return c;
          },
          useTransition: function () {
            var a = Wh(Vh)[0],
              b = Uh().memoizedState;
            return [a, b];
          },
          useMutableSource: Yh,
          useSyncExternalStore: Zh,
          useId: ti,
          unstable_isNewReconciler: false
        },
        Qh = {
          readContext: pg,
          useCallback: qi,
          useContext: pg,
          useEffect: $h,
          useImperativeHandle: oi,
          useInsertionEffect: li,
          useLayoutEffect: mi,
          useMemo: ri,
          useReducer: Xh,
          useRef: hi,
          useState: function () {
            return Xh(Vh);
          },
          useDebugValue: pi,
          useDeferredValue: function (a) {
            var b = Xh(Vh),
              c = b[0],
              d = b[1];
            $h(function () {
              var b = Gh.transition;
              Gh.transition = {};
              try {
                d(a);
              } finally {
                Gh.transition = b;
              }
            }, [a]);
            return c;
          },
          useTransition: function () {
            var a = Xh(Vh)[0],
              b = Uh().memoizedState;
            return [a, b];
          },
          useMutableSource: Yh,
          useSyncExternalStore: Zh,
          useId: ti,
          unstable_isNewReconciler: false
        };
      function zi(a, b) {
        try {
          var c = "",
            d = b;
          do c += Na(d), d = d.return; while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return {
          value: a,
          source: b,
          stack: e
        };
      }
      function Ai(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function () {
            throw c;
          });
        }
      }
      var Bi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ci(a, b, c) {
        c = ug(-1, c);
        c.tag = 3;
        c.payload = {
          element: null
        };
        var d = b.value;
        c.callback = function () {
          Di || (Di = true, Ei = d);
          Ai(a, b);
        };
        return c;
      }
      function Fi(a, b, c) {
        c = ug(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function () {
            return d(e);
          };
          c.callback = function () {
            Ai(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
          Ai(a, b);
          "function" !== typeof d && (null === Gi ? Gi = new Set([this]) : Gi.add(this));
          var c = b.stack;
          this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
          });
        });
        return c;
      }
      function Hi(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Bi();
          var e = new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ii.bind(null, a, b, c), b.then(a, a));
      }
      function Ji(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Ki(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ug(-1, 1), b.tag = 2, vg(c, b))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Li, Mi, Ni, Oi;
      Li = function (a, b) {
        for (var c = b.child; null !== c;) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling;) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Mi = function () {};
      Ni = function (a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Wa(a, e);
              d = Wa(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, {
                value: void 0
              });
              d = A({}, d, {
                value: void 0
              });
              f = [];
              break;
            case "textarea":
              e = db(a, e);
              d = db(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = wf);
          }
          rb(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (da.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
              if (h) {
                for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
              } else c || (f || (f = []), f.push(l, c)), c = k;
            } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (da.hasOwnProperty(l) ? (null != k && "onScroll" === l && F("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Oi = function (a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Pi(a, b) {
        if (!N) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function V(a) {
        var b = null !== a.alternate && a.alternate.child === a.child,
          c = 0,
          d = 0;
        if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Qi(a, b, c) {
        var d = b.pendingProps;
        Wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return V(b), null;
          case 1:
            return Tf(b.type) && Uf(), V(b), null;
          case 3:
            d = b.stateNode;
            zh();
            G(Qf);
            G(I);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) fh(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== Zg && (Ri(Zg), Zg = null));
            Mi(a, b);
            V(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Ni(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                V(b);
                return null;
              }
              a = xh(uh.current);
              if (fh(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[If] = b;
                d[Jf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    F("cancel", d);
                    F("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    F("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < ff.length; e++) F(ff[e], d);
                    break;
                  case "source":
                    F("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    F("error", d);
                    F("load", d);
                    break;
                  case "details":
                    F("toggle", d);
                    break;
                  case "input":
                    Xa(d, f);
                    F("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = {
                      wasMultiple: !!f.multiple
                    };
                    F("invalid", d);
                    break;
                  case "textarea":
                    eb(d, f), F("invalid", d);
                }
                rb(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (vf(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (vf(d.textContent, h, a), e = ["children", "" + h]) : da.hasOwnProperty(g) && null != h && "onScroll" === g && F("scroll", d);
                }
                switch (c) {
                  case "input":
                    Ta(d);
                    ab(d, f, true);
                    break;
                  case "textarea":
                    Ta(d);
                    gb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = wf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = hb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                  is: d.is
                }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[If] = b;
                a[Jf] = d;
                Li(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = sb(c, d);
                  switch (c) {
                    case "dialog":
                      F("cancel", a);
                      F("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      F("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < ff.length; e++) F(ff[e], a);
                      e = d;
                      break;
                    case "source":
                      F("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      F("error", a);
                      F("load", a);
                      e = d;
                      break;
                    case "details":
                      F("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Xa(a, d);
                      e = Wa(a, d);
                      F("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = {
                        wasMultiple: !!d.multiple
                      };
                      e = A({}, d, {
                        value: void 0
                      });
                      F("invalid", a);
                      break;
                    case "textarea":
                      eb(a, d);
                      e = db(a, d);
                      F("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  rb(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? pb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && kb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && lb(a, k) : "number" === typeof k && lb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (da.hasOwnProperty(f) ? null != k && "onScroll" === f && F("scroll", a) : null != k && ra(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Ta(a);
                      ab(a, d, false);
                      break;
                    case "textarea":
                      Ta(a);
                      gb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Qa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? cb(a, !!d.multiple, f, false) : null != d.defaultValue && cb(a, !!d.multiple, d.defaultValue, true);
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = wf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            V(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Oi(a, b, a.memoizedProps, d);else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (fh(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[If] = b;
                if (f = d.nodeValue !== c) if (a = Xg, null !== a) switch (g = 0 !== (a.mode & 1), a.tag) {
                  case 3:
                    vf(d.nodeValue, c, g);
                    break;
                  case 5:
                    true !== a.memoizedProps[void 0] && vf(d.nodeValue, c, g);
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[If] = b, b.stateNode = d;
            }
            V(b);
            return null;
          case 13:
            G(P);
            d = b.memoizedState;
            if (N && null !== Yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) {
              for (d = Yg; d;) d = Ff(d.nextSibling);
              gh();
              b.flags |= 98560;
              return b;
            }
            if (null !== d && null !== d.dehydrated) {
              d = fh(b);
              if (null === a) {
                if (!d) throw Error(p(318));
                d = b.memoizedState;
                d = null !== d ? d.dehydrated : null;
                if (!d) throw Error(p(317));
                d[If] = b;
              } else gh(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              V(b);
              return null;
            }
            null !== Zg && (Ri(Zg), Zg = null);
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            c = false;
            null === a ? fh(b) : c = null !== a.memoizedState;
            d && !c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (P.current & 1) ? 0 === W && (W = 3) : Si()));
            null !== b.updateQueue && (b.flags |= 4);
            V(b);
            return null;
          case 4:
            return zh(), Mi(a, b), null === a && nf(b.stateNode.containerInfo), V(b), null;
          case 10:
            return lg(b.type._context), V(b), null;
          case 17:
            return Tf(b.type) && Uf(), V(b), null;
          case 19:
            G(P);
            f = b.memoizedState;
            if (null === f) return V(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
              if (d) Pi(f, false);else {
                if (0 !== W || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
                  g = Ch(a);
                  if (null !== g) {
                    b.flags |= 128;
                    Pi(f, false);
                    d = g.updateQueue;
                    null !== d && (b.updateQueue = d, b.flags |= 4);
                    b.subtreeFlags = 0;
                    d = c;
                    for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                      lanes: a.lanes,
                      firstContext: a.firstContext
                    }), c = c.sibling;
                    H(P, P.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
                null !== f.tail && D() > Ti && (b.flags |= 128, d = true, Pi(f, false), b.lanes = 4194304);
              }
            } else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Pi(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !N) return V(b), null;
              } else 2 * D() - f.renderingStartTime > Ti && 1073741824 !== c && (b.flags |= 128, d = true, Pi(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = D(), b.sibling = null, c = P.current, H(P, d ? c & 1 | 2 : c & 1), b;
            V(b);
            return null;
          case 22:
          case 23:
            return Ui(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (Vi & 1073741824) && (V(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : V(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      var Wi = sa.ReactCurrentOwner,
        og = false;
      function Xi(a, b, c, d) {
        b.child = null === a ? sh(b, null, c, d) : rh(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ng(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !og) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        N && c && Vg(b);
        b.flags |= 1;
        Xi(a, b, d, e);
        return b.child;
      }
      function $i(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = oh(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : De;
          if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
        }
        b.flags |= 1;
        a = mh(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a && De(a.memoizedProps, d) && a.ref === b.ref) if (og = false, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (og = true);else return b.lanes = a.lanes, Zi(a, b, e);
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps,
          e = d.children,
          f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) {
          if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, H(ej, Vi), Vi |= c;else if (0 !== (c & 1073741824)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, d = null !== f ? f.baseLanes : c, H(ej, Vi), Vi |= d;else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
            baseLanes: a,
            cachePool: null
          }, b.updateQueue = null, H(ej, Vi), Vi |= a, null;
        } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, H(ej, Vi), Vi |= d;
        Xi(a, b, e, c);
        return b.child;
      }
      function fj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Tf(c) ? Rf : I.current;
        f = Sf(b, f);
        ng(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !og) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        N && d && Vg(b);
        b.flags |= 1;
        Xi(a, b, c, e);
        return b.child;
      }
      function gj(a, b, c, d, e) {
        if (Tf(c)) {
          var f = true;
          Xf(b);
        } else f = false;
        ng(b, e);
        if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Hg(b, c, d), Jg(b, c, d, e), d = true;else if (null === a) {
          var g = b.stateNode,
            h = b.memoizedProps;
          g.props = h;
          var k = g.context,
            l = c.contextType;
          "object" === typeof l && null !== l ? l = pg(l) : (l = Tf(c) ? Rf : I.current, l = Sf(b, l));
          var m = c.getDerivedStateFromProps,
            w = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          w || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ig(b, g, d, l);
          rg = false;
          var u = b.memoizedState;
          g.state = u;
          yg(b, d, g, e);
          k = b.memoizedState;
          h !== d || u !== k || Qf.current || rg ? ("function" === typeof m && (Cg(b, c, m, d), k = b.memoizedState), (h = rg || Gg(b, c, h, d, u, k, l)) ? (w || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          tg(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : fg(b.type, h);
          g.props = l;
          w = b.pendingProps;
          u = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = pg(k) : (k = Tf(c) ? Rf : I.current, k = Sf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== w || u !== k) && Ig(b, g, d, k);
          rg = false;
          u = b.memoizedState;
          g.state = u;
          yg(b, d, g, e);
          var n = b.memoizedState;
          h !== w || u !== n || Qf.current || rg ? ("function" === typeof y && (Cg(b, c, y, d), n = b.memoizedState), (l = rg || Gg(b, c, l, d, u, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && u === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && u === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return hj(a, b, c, d, f, e);
      }
      function hj(a, b, c, d, e, f) {
        fj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && Yf(b, c, false), Zi(a, b, f);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = rh(b, a.child, null, f), b.child = rh(b, null, h, f)) : Xi(a, b, h, f);
        b.memoizedState = d.state;
        e && Yf(b, c, true);
        return b.child;
      }
      function ij(a) {
        var b = a.stateNode;
        b.pendingContext ? Vf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Vf(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function jj(a, b, c, d, e) {
        gh();
        hh(e);
        b.flags |= 256;
        Xi(a, b, c, d);
        return b.child;
      }
      var kj = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
      };
      function lj(a) {
        return {
          baseLanes: a,
          cachePool: null
        };
      }
      function mj(a, b, c) {
        var d = b.pendingProps,
          e = P.current,
          f = false,
          g = 0 !== (b.flags & 128),
          h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
        H(P, e & 1);
        if (null === a) {
          dh(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          e = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, e = {
            mode: "hidden",
            children: e
          }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = e) : f = nj(e, d, 0, null), a = qh(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = lj(c), b.memoizedState = kj, a) : oj(b, e);
        }
        e = a.memoizedState;
        if (null !== e) {
          h = e.dehydrated;
          if (null !== h) {
            if (g) {
              if (b.flags & 256) return b.flags &= -257, pj(a, b, c, Error(p(422)));
              if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
              f = d.fallback;
              e = b.mode;
              d = nj({
                mode: "visible",
                children: d.children
              }, e, 0, null);
              f = qh(f, e, c, null);
              f.flags |= 2;
              d.return = b;
              f.return = b;
              d.sibling = f;
              b.child = d;
              0 !== (b.mode & 1) && rh(b, a.child, null, c);
              b.child.memoizedState = lj(c);
              b.memoizedState = kj;
              return f;
            }
            if (0 === (b.mode & 1)) b = pj(a, b, c, null);else if ("$!" === h.data) b = pj(a, b, c, Error(p(419)));else if (d = 0 !== (c & a.childLanes), og || d) {
              d = J;
              if (null !== d) {
                switch (c & -c) {
                  case 4:
                    f = 2;
                    break;
                  case 16:
                    f = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    f = 32;
                    break;
                  case 536870912:
                    f = 268435456;
                    break;
                  default:
                    f = 0;
                }
                d = 0 !== (f & (d.suspendedLanes | c)) ? 0 : f;
                0 !== d && d !== e.retryLane && (e.retryLane = d, Eg(a, d, -1));
              }
              Si();
              b = pj(a, b, c, Error(p(421)));
            } else "$?" === h.data ? (b.flags |= 128, b.child = a.child, b = qj.bind(null, a), h._reactRetry = b, b = null) : (c = e.treeContext, Yg = Ff(h.nextSibling), Xg = b, N = true, Zg = null, null !== c && (Og[Pg++] = Rg, Og[Pg++] = Sg, Og[Pg++] = Qg, Rg = c.id, Sg = c.overflow, Qg = b), b = oj(b, b.pendingProps.children), b.flags |= 4096);
            return b;
          }
          if (f) return d = rj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? lj(c) : {
            baseLanes: e.baseLanes | c,
            cachePool: null
          }, f.childLanes = a.childLanes & ~c, b.memoizedState = kj, d;
          c = sj(a, b, d.children, c);
          b.memoizedState = null;
          return c;
        }
        if (f) return d = rj(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? lj(c) : {
          baseLanes: e.baseLanes | c,
          cachePool: null
        }, f.childLanes = a.childLanes & ~c, b.memoizedState = kj, d;
        c = sj(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      function oj(a, b) {
        b = nj({
          mode: "visible",
          children: b
        }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        var e = a.child;
        a = e.sibling;
        c = mh(e, {
          mode: "visible",
          children: c
        });
        0 === (b.mode & 1) && (c.lanes = d);
        c.return = b;
        c.sibling = null;
        null !== a && (d = b.deletions, null === d ? (b.deletions = [a], b.flags |= 16) : d.push(a));
        return b.child = c;
      }
      function rj(a, b, c, d, e) {
        var f = b.mode;
        a = a.child;
        var g = a.sibling,
          h = {
            mode: "hidden",
            children: c
          };
        0 === (f & 1) && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h, b.deletions = null) : (c = mh(a, h), c.subtreeFlags = a.subtreeFlags & 14680064);
        null !== g ? d = mh(g, d) : (d = qh(d, f, e, null), d.flags |= 2);
        d.return = b;
        c.return = b;
        c.sibling = d;
        b.child = c;
        return d;
      }
      function pj(a, b, c, d) {
        null !== d && hh(d);
        rh(b, a.child, null, c);
        a = oj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function tj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        mg(a.return, b, c);
      }
      function uj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = {
          isBackwards: b,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: c,
          tailMode: e
        } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function vj(a, b, c) {
        var d = b.pendingProps,
          e = d.revealOrder,
          f = d.tail;
        Xi(a, b, d.children, c);
        d = P.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
            if (13 === a.tag) null !== a.memoizedState && tj(a, c, b);else if (19 === a.tag) tj(a, c, b);else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling;) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        H(P, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            uj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e;) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            uj(b, true, c, null, f);
            break;
          case "together":
            uj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        zg |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = mh(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = mh(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function wj(a, b, c) {
        switch (b.tag) {
          case 3:
            ij(b);
            gh();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Tf(b.type) && Xf(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context,
              e = b.memoizedProps.value;
            H(gg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return H(P, P.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return mj(a, b, c);
              H(P, P.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            H(P, P.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return vj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            H(P, P.current);
            if (d) break;else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      function xj(a, b) {
        Wg(b);
        switch (b.tag) {
          case 1:
            return Tf(b.type) && Uf(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), G(Qf), G(I), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            G(P);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              gh();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return G(P), null;
          case 4:
            return zh(), null;
          case 10:
            return lg(b.type._context), null;
          case 22:
          case 23:
            return Ui(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var yj = false,
        zj = false,
        Aj = "function" === typeof WeakSet ? WeakSet : Set,
        X = null;
      function Bj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          Cj(a, b, d);
        } else c.current = null;
      }
      function Dj(a, b, c) {
        try {
          c();
        } catch (d) {
          Cj(a, b, d);
        }
      }
      var Ej = false;
      function Fj(a, b) {
        a = He();
        if (Ie(a)) {
          if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
          };else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset,
                f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (O) {
                c = null;
                break a;
              }
              var g = 0,
                h = -1,
                k = -1,
                l = 0,
                m = 0,
                w = a,
                u = null;
              b: for (;;) {
                for (var y;;) {
                  w !== c || 0 !== e && 3 !== w.nodeType || (h = g + e);
                  w !== f || 0 !== d && 3 !== w.nodeType || (k = g + d);
                  3 === w.nodeType && (g += w.nodeValue.length);
                  if (null === (y = w.firstChild)) break;
                  u = w;
                  w = y;
                }
                for (;;) {
                  if (w === a) break b;
                  u === c && ++l === e && (h = g);
                  u === f && ++m === d && (k = g);
                  if (null !== (y = w.nextSibling)) break;
                  w = u;
                  u = w.parentNode;
                }
                w = y;
              }
              c = -1 === h || -1 === k ? null : {
                start: h,
                end: k
              };
            } else c = null;
          }
          c = c || {
            start: 0,
            end: 0
          };
        } else c = null;
        xf = {
          focusedElem: a,
          selectionRange: c
        };
        for (X = b; null !== X;) if (b = X, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, X = a;else for (; null !== X;) {
          b = X;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var v = n.memoizedProps,
                    C = n.memoizedState,
                    t = b.stateNode,
                    r = t.getSnapshotBeforeUpdate(b.elementType === b.type ? v : fg(b.type, v), C);
                  t.__reactInternalSnapshotBeforeUpdate = r;
                }
                break;
              case 3:
                var x = b.stateNode.containerInfo;
                if (1 === x.nodeType) x.textContent = "";else if (9 === x.nodeType) {
                  var B = x.body;
                  null != B && (B.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (O) {
            Cj(b, b.return, O);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            X = a;
            break;
          }
          X = b.return;
        }
        n = Ej;
        Ej = false;
        return n;
      }
      function Gj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Dj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Hj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Ij(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Jj(a, b, c) {
        if (ic && "function" === typeof ic.onCommitFiberUnmount) try {
          ic.onCommitFiberUnmount(hc, b);
        } catch (g) {}
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            a = b.updateQueue;
            if (null !== a && (a = a.lastEffect, null !== a)) {
              var d = a = a.next;
              do {
                var e = d,
                  f = e.destroy;
                e = e.tag;
                void 0 !== f && (0 !== (e & 2) ? Dj(b, c, f) : 0 !== (e & 4) && Dj(b, c, f));
                d = d.next;
              } while (d !== a);
            }
            break;
          case 1:
            Bj(b, c);
            a = b.stateNode;
            if ("function" === typeof a.componentWillUnmount) try {
              a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
            } catch (g) {
              Cj(b, c, g);
            }
            break;
          case 5:
            Bj(b, c);
            break;
          case 4:
            Kj(a, b, c);
        }
      }
      function Lj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Lj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[If], delete b[Jf], delete b[jf], delete b[Kf], delete b[Lf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Mj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Nj(a) {
        a: for (;;) {
          for (; null === a.sibling;) {
            if (null === a.return || Mj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Oj(a) {
        a: {
          for (var b = a.return; null !== b;) {
            if (Mj(b)) break a;
            b = b.return;
          }
          throw Error(p(160));
        }
        var c = b;
        switch (c.tag) {
          case 5:
            b = c.stateNode;
            c.flags & 32 && (lb(b, ""), c.flags &= -33);
            c = Nj(a);
            Pj(a, c, b);
            break;
          case 3:
          case 4:
            b = c.stateNode.containerInfo;
            c = Nj(a);
            Qj(a, c, b);
            break;
          default:
            throw Error(p(161));
        }
      }
      function Qj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = wf));else if (4 !== d && (a = a.child, null !== a)) for (Qj(a, b, c), a = a.sibling; null !== a;) Qj(a, b, c), a = a.sibling;
      }
      function Pj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Pj(a, b, c), a = a.sibling; null !== a;) Pj(a, b, c), a = a.sibling;
      }
      function Kj(a, b, c) {
        for (var d = b, e = false, f, g;;) {
          if (!e) {
            e = d.return;
            a: for (;;) {
              if (null === e) throw Error(p(160));
              f = e.stateNode;
              switch (e.tag) {
                case 5:
                  g = false;
                  break a;
                case 3:
                  f = f.containerInfo;
                  g = true;
                  break a;
                case 4:
                  f = f.containerInfo;
                  g = true;
                  break a;
              }
              e = e.return;
            }
            e = true;
          }
          if (5 === d.tag || 6 === d.tag) {
            a: for (var h = a, k = d, l = c, m = k;;) if (Jj(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;else {
              if (m === k) break a;
              for (; null === m.sibling;) {
                if (null === m.return || m.return === k) break a;
                m = m.return;
              }
              m.sibling.return = m.return;
              m = m.sibling;
            }
            g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
          } else if (18 === d.tag) g ? (h = f, k = d.stateNode, 8 === h.nodeType ? Ef(h.parentNode, k) : 1 === h.nodeType && Ef(h, k), Yc(h)) : Ef(f, d.stateNode);else if (4 === d.tag) {
            if (null !== d.child) {
              f = d.stateNode.containerInfo;
              g = true;
              d.child.return = d;
              d = d.child;
              continue;
            }
          } else if (Jj(a, d, c), null !== d.child) {
            d.child.return = d;
            d = d.child;
            continue;
          }
          if (d === b) break;
          for (; null === d.sibling;) {
            if (null === d.return || d.return === b) return;
            d = d.return;
            4 === d.tag && (e = false);
          }
          d.sibling.return = d.return;
          d = d.sibling;
        }
      }
      function Rj(a, b) {
        switch (b.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Gj(3, b, b.return);
            Hj(3, b);
            Gj(5, b, b.return);
            return;
          case 1:
            return;
          case 5:
            var c = b.stateNode;
            if (null != c) {
              var d = b.memoizedProps,
                e = null !== a ? a.memoizedProps : d;
              a = b.type;
              var f = b.updateQueue;
              b.updateQueue = null;
              if (null !== f) {
                "input" === a && "radio" === d.type && null != d.name && Ya(c, d);
                sb(a, e);
                b = sb(a, d);
                for (e = 0; e < f.length; e += 2) {
                  var g = f[e],
                    h = f[e + 1];
                  "style" === g ? pb(c, h) : "dangerouslySetInnerHTML" === g ? kb(c, h) : "children" === g ? lb(c, h) : ra(c, g, h, b);
                }
                switch (a) {
                  case "input":
                    Za(c, d);
                    break;
                  case "textarea":
                    fb(c, d);
                    break;
                  case "select":
                    a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? cb(c, !!d.multiple, f, false) : a !== !!d.multiple && (null != d.defaultValue ? cb(c, !!d.multiple, d.defaultValue, true) : cb(c, !!d.multiple, d.multiple ? [] : "", false));
                }
                c[Jf] = d;
              }
            }
            return;
          case 6:
            if (null === b.stateNode) throw Error(p(162));
            b.stateNode.nodeValue = b.memoizedProps;
            return;
          case 3:
            null !== a && a.memoizedState.isDehydrated && Yc(b.stateNode.containerInfo);
            return;
          case 12:
            return;
          case 13:
            Sj(b);
            return;
          case 19:
            Sj(b);
            return;
          case 17:
            return;
        }
        throw Error(p(163));
      }
      function Sj(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Aj());
          b.forEach(function (b) {
            var d = Tj.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
          });
        }
      }
      function Uj(a, b) {
        for (X = b; null !== X;) {
          b = X;
          var c = b.deletions;
          if (null !== c) for (var d = 0; d < c.length; d++) {
            var e = c[d];
            try {
              Kj(a, e, b);
              var f = e.alternate;
              null !== f && (f.return = null);
              e.return = null;
            } catch (L) {
              Cj(e, b, L);
            }
          }
          c = b.child;
          if (0 !== (b.subtreeFlags & 12854) && null !== c) c.return = b, X = c;else for (; null !== X;) {
            b = X;
            try {
              var g = b.flags;
              g & 32 && lb(b.stateNode, "");
              if (g & 512) {
                var h = b.alternate;
                if (null !== h) {
                  var k = h.ref;
                  null !== k && ("function" === typeof k ? k(null) : k.current = null);
                }
              }
              if (g & 8192) switch (b.tag) {
                case 13:
                  if (null !== b.memoizedState) {
                    var l = b.alternate;
                    if (null === l || null === l.memoizedState) Vj = D();
                  }
                  break;
                case 22:
                  var m = null !== b.memoizedState,
                    w = b.alternate,
                    u = null !== w && null !== w.memoizedState;
                  c = b;
                  a: {
                    d = c;
                    e = m;
                    for (var y = null, n = d;;) {
                      if (5 === n.tag) {
                        if (null === y) {
                          y = n;
                          var v = n.stateNode;
                          if (e) {
                            var C = v.style;
                            "function" === typeof C.setProperty ? C.setProperty("display", "none", "important") : C.display = "none";
                          } else {
                            var t = n.stateNode,
                              r = n.memoizedProps.style,
                              x = void 0 !== r && null !== r && r.hasOwnProperty("display") ? r.display : null;
                            t.style.display = ob("display", x);
                          }
                        }
                      } else if (6 === n.tag) null === y && (n.stateNode.nodeValue = e ? "" : n.memoizedProps);else if ((22 !== n.tag && 23 !== n.tag || null === n.memoizedState || n === d) && null !== n.child) {
                        n.child.return = n;
                        n = n.child;
                        continue;
                      }
                      if (n === d) break;
                      for (; null === n.sibling;) {
                        if (null === n.return || n.return === d) break a;
                        y === n && (y = null);
                        n = n.return;
                      }
                      y === n && (y = null);
                      n.sibling.return = n.return;
                      n = n.sibling;
                    }
                  }
                  if (m && !u && 0 !== (c.mode & 1)) {
                    X = c;
                    for (var B = c.child; null !== B;) {
                      for (c = X = B; null !== X;) {
                        d = X;
                        var O = d.child;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            Gj(4, d, d.return);
                            break;
                          case 1:
                            Bj(d, d.return);
                            var T = d.stateNode;
                            if ("function" === typeof T.componentWillUnmount) {
                              var za = d.return;
                              try {
                                T.props = d.memoizedProps, T.state = d.memoizedState, T.componentWillUnmount();
                              } catch (L) {
                                Cj(d, za, L);
                              }
                            }
                            break;
                          case 5:
                            Bj(d, d.return);
                            break;
                          case 22:
                            if (null !== d.memoizedState) {
                              Wj(c);
                              continue;
                            }
                        }
                        null !== O ? (O.return = d, X = O) : Wj(c);
                      }
                      B = B.sibling;
                    }
                  }
              }
              switch (g & 4102) {
                case 2:
                  Oj(b);
                  b.flags &= -3;
                  break;
                case 6:
                  Oj(b);
                  b.flags &= -3;
                  Rj(b.alternate, b);
                  break;
                case 4096:
                  b.flags &= -4097;
                  break;
                case 4100:
                  b.flags &= -4097;
                  Rj(b.alternate, b);
                  break;
                case 4:
                  Rj(b.alternate, b);
              }
            } catch (L) {
              Cj(b, b.return, L);
            }
            c = b.sibling;
            if (null !== c) {
              c.return = b.return;
              X = c;
              break;
            }
            X = b.return;
          }
        }
      }
      function Xj(a, b, c) {
        X = a;
        Yj(a);
      }
      function Yj(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== X;) {
          var e = X,
            f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || yj;
            if (!g) {
              var h = e.alternate,
                k = null !== h && null !== h.memoizedState || zj;
              h = yj;
              var l = zj;
              yj = g;
              if ((zj = k) && !l) for (X = e; null !== X;) g = X, k = g.child, 22 === g.tag && null !== g.memoizedState ? Zj(e) : null !== k ? (k.return = g, X = k) : Zj(e);
              for (; null !== f;) X = f, Yj(f), f = f.sibling;
              X = e;
              yj = h;
              zj = l;
            }
            ak(a);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, X = f) : ak(a);
        }
      }
      function ak(a) {
        for (; null !== X;) {
          var b = X;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  zj || Hj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !zj) if (null === c) d.componentDidMount();else {
                    var e = b.elementType === b.type ? c.memoizedProps : fg(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && Ag(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    Ag(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var w = m.dehydrated;
                        null !== w && Yc(w);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                default:
                  throw Error(p(163));
              }
              zj || b.flags & 512 && Ij(b);
            } catch (u) {
              Cj(b, b.return, u);
            }
          }
          if (b === a) {
            X = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            X = c;
            break;
          }
          X = b.return;
        }
      }
      function Wj(a) {
        for (; null !== X;) {
          var b = X;
          if (b === a) {
            X = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            X = c;
            break;
          }
          X = b.return;
        }
      }
      function Zj(a) {
        for (; null !== X;) {
          var b = X;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Hj(4, b);
                } catch (k) {
                  Cj(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    Cj(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Ij(b);
                } catch (k) {
                  Cj(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Ij(b);
                } catch (k) {
                  Cj(b, g, k);
                }
            }
          } catch (k) {
            Cj(b, b.return, k);
          }
          if (b === a) {
            X = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            X = h;
            break;
          }
          X = b.return;
        }
      }
      var bk = Math.ceil,
        ck = sa.ReactCurrentDispatcher,
        dk = sa.ReactCurrentOwner,
        ek = sa.ReactCurrentBatchConfig,
        K = 0,
        J = null,
        Y = null,
        Z = 0,
        Vi = 0,
        ej = Of(0),
        W = 0,
        fk = null,
        zg = 0,
        gk = 0,
        hk = 0,
        ik = null,
        jk = null,
        Vj = 0,
        Ti = Infinity,
        Di = false,
        Ei = null,
        Gi = null,
        kk = false,
        lk = null,
        mk = 0,
        nk = 0,
        ok = null,
        pk = -1,
        qk = 0;
      function M() {
        return 0 !== (K & 6) ? D() : -1 !== pk ? pk : pk = D();
      }
      function Dg(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== eg.transition) return 0 === qk && (a = oc, oc <<= 1, 0 === (oc & 4194240) && (oc = 64), qk = a), qk;
        a = E;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : ed(a.type);
        return a;
      }
      function Eg(a, b, c) {
        if (50 < nk) throw nk = 0, ok = null, Error(p(185));
        var d = rk(a, b);
        if (null === d) return null;
        wc(d, b, c);
        if (0 === (K & 2) || d !== J) d === J && (0 === (K & 2) && (gk |= b), 4 === W && sk(d, Z)), tk(d, c), 1 === b && 0 === K && 0 === (a.mode & 1) && (Ti = D() + 500, $f && dg());
        return d;
      }
      function rk(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      function tk(a, b) {
        var c = a.callbackNode;
        tc(a, b);
        var d = rc(a, a === J ? Z : 0);
        if (0 === d) null !== c && Zb(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
          null != c && Zb(c);
          if (1 === b) 0 === a.tag ? cg(uk.bind(null, a)) : bg(uk.bind(null, a)), Df(function () {
            0 === K && dg();
          }), c = null;else {
            switch (zc(d)) {
              case 1:
                c = cc;
                break;
              case 4:
                c = dc;
                break;
              case 16:
                c = ec;
                break;
              case 536870912:
                c = gc;
                break;
              default:
                c = ec;
            }
            c = vk(c, wk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function wk(a, b) {
        pk = -1;
        qk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (xk() && a.callbackNode !== c) return null;
        var d = rc(a, a === J ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = yk(a, d);else {
          b = d;
          var e = K;
          K |= 2;
          var f = zk();
          if (J !== a || Z !== b) Ti = D() + 500, Ak(a, b);
          do try {
            Bk();
            break;
          } catch (h) {
            Ck(a, h);
          } while (1);
          kg();
          ck.current = f;
          K = e;
          null !== Y ? b = 0 : (J = null, Z = 0, b = W);
        }
        if (0 !== b) {
          2 === b && (e = uc(a), 0 !== e && (d = e, b = Dk(a, e)));
          if (1 === b) throw c = fk, Ak(a, 0), sk(a, d), tk(a, D()), c;
          if (6 === b) sk(a, d);else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ek(e) && (b = yk(a, d), 2 === b && (f = uc(a), 0 !== f && (d = f, b = Dk(a, f))), 1 === b)) throw c = fk, Ak(a, 0), sk(a, d), tk(a, D()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Fk(a, jk);
                break;
              case 3:
                sk(a, d);
                if ((d & 130023424) === d && (b = Vj + 500 - D(), 10 < b)) {
                  if (0 !== rc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    M();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = zf(Fk.bind(null, a, jk), b);
                  break;
                }
                Fk(a, jk);
                break;
              case 4:
                sk(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d;) {
                  var g = 31 - lc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = D() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * bk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = zf(Fk.bind(null, a, jk), d);
                  break;
                }
                Fk(a, jk);
                break;
              case 5:
                Fk(a, jk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        tk(a, D());
        return a.callbackNode === c ? wk.bind(null, a) : null;
      }
      function Dk(a, b) {
        var c = ik;
        a.current.memoizedState.isDehydrated && (Ak(a, b).flags |= 256);
        a = yk(a, b);
        2 !== a && (b = jk, jk = c, null !== b && Ri(b));
        return a;
      }
      function Ri(a) {
        null === jk ? jk = a : jk.push.apply(jk, a);
      }
      function Ek(a) {
        for (var b = a;;) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d],
                f = e.getSnapshot;
              e = e.value;
              try {
                if (!Ce(f(), e)) return !1;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
            if (b === a) break;
            for (; null === b.sibling;) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function sk(a, b) {
        b &= ~hk;
        b &= ~gk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b;) {
          var c = 31 - lc(b),
            d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function uk(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        xk();
        var b = rc(a, 0);
        if (0 === (b & 1)) return tk(a, D()), null;
        var c = yk(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = uc(a);
          0 !== d && (b = d, c = Dk(a, d));
        }
        if (1 === c) throw c = fk, Ak(a, 0), sk(a, b), tk(a, D()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Fk(a, jk);
        tk(a, D());
        return null;
      }
      function Gk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Ti = D() + 500, $f && dg());
        }
      }
      function Hk(a) {
        null !== lk && 0 === lk.tag && 0 === (K & 6) && xk();
        var b = K;
        K |= 1;
        var c = ek.transition,
          d = E;
        try {
          if (ek.transition = null, E = 1, a) return a();
        } finally {
          E = d, ek.transition = c, K = b, 0 === (K & 6) && dg();
        }
      }
      function Ui() {
        Vi = ej.current;
        G(ej);
      }
      function Ak(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Af(c));
        if (null !== Y) for (c = Y.return; null !== c;) {
          var d = c;
          Wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && Uf();
              break;
            case 3:
              zh();
              G(Qf);
              G(I);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              G(P);
              break;
            case 19:
              G(P);
              break;
            case 10:
              lg(d.type._context);
              break;
            case 22:
            case 23:
              Ui();
          }
          c = c.return;
        }
        J = a;
        Y = a = mh(a.current, null);
        Z = Vi = b;
        W = 0;
        fk = null;
        hk = gk = zg = 0;
        jk = ik = null;
        if (null !== qg) {
          for (b = 0; b < qg.length; b++) if (c = qg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next,
              f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          qg = null;
        }
        return a;
      }
      function Ck(a, b) {
        do {
          var c = Y;
          try {
            kg();
            Fh.current = Rh;
            if (Ih) {
              for (var d = Q.memoizedState; null !== d;) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = !1;
            }
            Hh = 0;
            S = R = Q = null;
            Jh = !1;
            Kh = 0;
            dk.current = null;
            if (null === c || null === c.return) {
              W = 1;
              fk = b;
              Y = null;
              break;
            }
            a: {
              var f = a,
                g = c.return,
                h = c,
                k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k,
                  m = h,
                  w = m.tag;
                if (0 === (m.mode & 1) && (0 === w || 11 === w || 15 === w)) {
                  var u = m.alternate;
                  u ? (m.updateQueue = u.updateQueue, m.memoizedState = u.memoizedState, m.lanes = u.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ji(g);
                if (null !== y) {
                  y.flags &= -257;
                  Ki(y, g, h, f, b);
                  y.mode & 1 && Hi(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var v = new Set();
                    v.add(k);
                    b.updateQueue = v;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Hi(f, l, b);
                    Si();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (N && h.mode & 1) {
                var C = Ji(g);
                if (null !== C) {
                  0 === (C.flags & 65536) && (C.flags |= 256);
                  Ki(C, g, h, f, b);
                  hh(k);
                  break a;
                }
              }
              f = k;
              4 !== W && (W = 2);
              null === ik ? ik = [f] : ik.push(f);
              k = zi(k, h);
              h = g;
              do {
                switch (h.tag) {
                  case 3:
                    h.flags |= 65536;
                    b &= -b;
                    h.lanes |= b;
                    var t = Ci(h, k, b);
                    xg(h, t);
                    break a;
                  case 1:
                    f = k;
                    var r = h.type,
                      x = h.stateNode;
                    if (0 === (h.flags & 128) && ("function" === typeof r.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Gi || !Gi.has(x)))) {
                      h.flags |= 65536;
                      b &= -b;
                      h.lanes |= b;
                      var B = Fi(h, f, b);
                      xg(h, B);
                      break a;
                    }
                }
                h = h.return;
              } while (null !== h);
            }
            Ik(c);
          } catch (O) {
            b = O;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function zk() {
        var a = ck.current;
        ck.current = Rh;
        return null === a ? Rh : a;
      }
      function Si() {
        if (0 === W || 3 === W || 2 === W) W = 4;
        null === J || 0 === (zg & 268435455) && 0 === (gk & 268435455) || sk(J, Z);
      }
      function yk(a, b) {
        var c = K;
        K |= 2;
        var d = zk();
        J === a && Z === b || Ak(a, b);
        do try {
          Jk();
          break;
        } catch (e) {
          Ck(a, e);
        } while (1);
        kg();
        K = c;
        ck.current = d;
        if (null !== Y) throw Error(p(261));
        J = null;
        Z = 0;
        return W;
      }
      function Jk() {
        for (; null !== Y;) Kk(Y);
      }
      function Bk() {
        for (; null !== Y && !$b();) Kk(Y);
      }
      function Kk(a) {
        var b = Lk(a.alternate, a, Vi);
        a.memoizedProps = a.pendingProps;
        null === b ? Ik(a) : Y = b;
        dk.current = null;
      }
      function Ik(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Qi(c, b, Vi), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = xj(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
              W = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === W && (W = 5);
      }
      function Fk(a, b) {
        var c = E,
          d = ek.transition;
        try {
          ek.transition = null, E = 1, Mk(a, b, c);
        } finally {
          ek.transition = d, E = c;
        }
        return null;
      }
      function Mk(a, b, c) {
        do xk(); while (null !== lk);
        if (0 !== (K & 6)) throw Error(p(327));
        var d = a.finishedWork,
          e = a.finishedLanes;
        if (null === d) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (d === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = d.lanes | d.childLanes;
        xc(a, f);
        a === J && (Y = J = null, Z = 0);
        0 === (d.subtreeFlags & 2064) && 0 === (d.flags & 2064) || kk || (kk = true, vk(ec, function () {
          xk();
          return null;
        }));
        f = 0 !== (d.flags & 15990);
        if (0 !== (d.subtreeFlags & 15990) || f) {
          f = ek.transition;
          ek.transition = null;
          var g = E;
          E = 1;
          var h = K;
          K |= 4;
          dk.current = null;
          Fj(a, d);
          Uj(a, d);
          Je(xf);
          xf = null;
          a.current = d;
          Xj(d);
          ac();
          K = h;
          E = g;
          ek.transition = f;
        } else a.current = d;
        kk && (kk = false, lk = a, mk = e);
        f = a.pendingLanes;
        0 === f && (Gi = null);
        jc(d.stateNode);
        tk(a, D());
        if (null !== b) for (c = a.onRecoverableError, d = 0; d < b.length; d++) c(b[d]);
        if (Di) throw Di = false, a = Ei, Ei = null, a;
        0 !== (mk & 1) && 0 !== a.tag && xk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === ok ? nk++ : (nk = 0, ok = a) : nk = 0;
        dg();
        return null;
      }
      function xk() {
        if (null !== lk) {
          var a = zc(mk),
            b = ek.transition,
            c = E;
          try {
            ek.transition = null;
            E = 16 > a ? 16 : a;
            if (null === lk) var d = !1;else {
              a = lk;
              lk = null;
              mk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (X = a.current; null !== X;) {
                var f = X,
                  g = f.child;
                if (0 !== (X.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (X = l; null !== X;) {
                        var m = X;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Gj(8, m, f);
                        }
                        var w = m.child;
                        if (null !== w) w.return = m, X = w;else for (; null !== X;) {
                          m = X;
                          var u = m.sibling,
                            y = m.return;
                          Lj(m);
                          if (m === l) {
                            X = null;
                            break;
                          }
                          if (null !== u) {
                            u.return = y;
                            X = u;
                            break;
                          }
                          X = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var v = n.child;
                      if (null !== v) {
                        n.child = null;
                        do {
                          var C = v.sibling;
                          v.sibling = null;
                          v = C;
                        } while (null !== v);
                      }
                    }
                    X = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, X = g;else b: for (; null !== X;) {
                  f = X;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gj(9, f, f.return);
                  }
                  var t = f.sibling;
                  if (null !== t) {
                    t.return = f.return;
                    X = t;
                    break b;
                  }
                  X = f.return;
                }
              }
              var r = a.current;
              for (X = r; null !== X;) {
                g = X;
                var x = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== x) x.return = g, X = x;else b: for (g = r; null !== X;) {
                  h = X;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hj(9, h);
                    }
                  } catch (O) {
                    Cj(h, h.return, O);
                  }
                  if (h === g) {
                    X = null;
                    break b;
                  }
                  var B = h.sibling;
                  if (null !== B) {
                    B.return = h.return;
                    X = B;
                    break b;
                  }
                  X = h.return;
                }
              }
              K = e;
              dg();
              if (ic && "function" === typeof ic.onPostCommitFiberRoot) try {
                ic.onPostCommitFiberRoot(hc, a);
              } catch (O) {}
              d = !0;
            }
            return d;
          } finally {
            E = c, ek.transition = b;
          }
        }
        return false;
      }
      function Nk(a, b, c) {
        b = zi(c, b);
        b = Ci(a, b, 1);
        vg(a, b);
        b = M();
        a = rk(a, 1);
        null !== a && (wc(a, 1, b), tk(a, b));
      }
      function Cj(a, b, c) {
        if (3 === a.tag) Nk(a, a, c);else for (; null !== b;) {
          if (3 === b.tag) {
            Nk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Gi || !Gi.has(d))) {
              a = zi(c, a);
              a = Fi(b, a, 1);
              vg(b, a);
              a = M();
              b = rk(b, 1);
              null !== b && (wc(b, 1, a), tk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ii(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = M();
        a.pingedLanes |= a.suspendedLanes & c;
        J === a && (Z & c) === c && (4 === W || 3 === W && (Z & 130023424) === Z && 500 > D() - Vj ? Ak(a, 0) : hk |= c);
        tk(a, b);
      }
      function Ok(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = pc, pc <<= 1, 0 === (pc & 130023424) && (pc = 4194304)));
        var c = M();
        a = rk(a, b);
        null !== a && (wc(a, b, c), tk(a, c));
      }
      function qj(a) {
        var b = a.memoizedState,
          c = 0;
        null !== b && (c = b.retryLane);
        Ok(a, c);
      }
      function Tj(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Ok(a, c);
      }
      var Lk;
      Lk = function (a, b, c) {
        if (null !== a) {
          if (a.memoizedProps !== b.pendingProps || Qf.current) og = true;else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return og = false, wj(a, b, c);
            og = 0 !== (a.flags & 131072) ? true : false;
          }
        } else og = false, N && 0 !== (b.flags & 1048576) && Ug(b, Ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            var e = Sf(b, I.current);
            ng(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Tf(d) ? (f = true, Xf(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, sg(b), e.updater = Fg, b.stateNode = e, e._reactInternals = b, Jg(b, d, a, c), b = hj(null, b, d, true, f, c)) : (b.tag = 0, N && f && Vg(b), Xi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Pk(d);
              a = fg(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = gj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i(null, b, d, fg(d.type, a), c);
                  break a;
              }
              throw Error(p(306, d, ""));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : fg(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : fg(d, e), gj(a, b, d, e, c);
          case 3:
            a: {
              ij(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              tg(a, b);
              yg(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) {
                if (f = {
                  element: d,
                  isDehydrated: false,
                  cache: g.cache,
                  transitions: g.transitions
                }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                  e = Error(p(423));
                  b = jj(a, b, d, c, e);
                  break a;
                } else if (d !== e) {
                  e = Error(p(424));
                  b = jj(a, b, d, c, e);
                  break a;
                } else for (Yg = Ff(b.stateNode.containerInfo.firstChild), Xg = b, N = true, Zg = null, c = sh(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
              } else {
                gh();
                if (d === e) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && dh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, yf(d, e) ? g = null : null !== f && yf(d, f) && (b.flags |= 32), fj(a, b), Xi(a, b, g, c), b.child;
          case 6:
            return null === a && dh(b), null;
          case 13:
            return mj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = rh(b, null, d, c) : Xi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : fg(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              H(gg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (Ce(f.value, g)) {
                if (f.children === e.children && !Qf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k;) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = ug(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      mg(f.return, c, b);
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  mg(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;else for (g = f; null !== g;) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ng(b, c), e = pg(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = fg(d, b.pendingProps), e = fg(d.type, e), $i(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : fg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Tf(d) ? (a = true, Xf(b)) : a = false, ng(b, c), Hg(b, d, e), Jg(b, d, e, c), hj(null, b, d, true, a, c);
          case 19:
            return vj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function vk(a, b) {
        return Yb(a, b);
      }
      function Qk(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function ah(a, b, c, d) {
        return new Qk(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Pk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Ba) return 11;
          if (a === Ea) return 14;
        }
        return 2;
      }
      function mh(a, b) {
        var c = a.alternate;
        null === c ? (c = ah(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : {
          lanes: b.lanes,
          firstContext: b.firstContext
        };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function oh(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
          case va:
            return qh(c.children, e, f, b);
          case wa:
            g = 8;
            e |= 8;
            break;
          case xa:
            return a = ah(12, c, b, e | 2), a.elementType = xa, a.lanes = f, a;
          case Ca:
            return a = ah(13, c, b, e), a.elementType = Ca, a.lanes = f, a;
          case Da:
            return a = ah(19, c, b, e), a.elementType = Da, a.lanes = f, a;
          case Ga:
            return nj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case Aa:
                g = 9;
                break a;
              case Ba:
                g = 11;
                break a;
              case Ea:
                g = 14;
                break a;
              case Fa:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = ah(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function qh(a, b, c, d) {
        a = ah(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function nj(a, b, c, d) {
        a = ah(22, a, d, b);
        a.elementType = Ga;
        a.lanes = c;
        a.stateNode = {};
        return a;
      }
      function nh(a, b, c) {
        a = ah(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function ph(a, b, c) {
        b = ah(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = {
          containerInfo: a.containerInfo,
          pendingChildren: null,
          implementation: a.implementation
        };
        return b;
      }
      function Rk(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = vc(0);
        this.expirationTimes = vc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = vc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function Sk(a, b, c, d, e, f, g, h, k) {
        a = new Rk(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = ah(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = {
          element: d,
          isDehydrated: c,
          cache: null,
          transitions: null
        };
        sg(f);
        return a;
      }
      function Tk(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: ua,
          key: null == d ? null : "" + d,
          children: a,
          containerInfo: b,
          implementation: c
        };
      }
      function Uk(a) {
        if (!a) return Pf;
        a = a._reactInternals;
        a: {
          if (Sb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Tf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Tf(c)) return Wf(a, c, b);
        }
        return b;
      }
      function Vk(a, b, c, d, e, f, g, h, k) {
        a = Sk(c, d, true, a, e, f, g, h, k);
        a.context = Uk(null);
        c = a.current;
        d = M();
        e = Dg(c);
        f = ug(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        vg(c, f);
        a.current.lanes = e;
        wc(a, e, d);
        tk(a, d);
        return a;
      }
      function Wk(a, b, c, d) {
        var e = b.current,
          f = M(),
          g = Dg(e);
        c = Uk(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = ug(f, g);
        b.payload = {
          element: a
        };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        vg(e, b);
        a = Eg(e, g, f);
        null !== a && wg(a, e, g);
        return g;
      }
      function Xk(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function Yk(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function Zk(a, b) {
        Yk(a, b);
        (a = a.alternate) && Yk(a, b);
      }
      function $k() {
        return null;
      }
      var al = "function" === typeof reportError ? reportError : function (a) {
        console.error(a);
      };
      function bl(a) {
        this._internalRoot = a;
      }
      cl.prototype.render = bl.prototype.render = function (a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        Wk(a, b, null, null);
      };
      cl.prototype.unmount = bl.prototype.unmount = function () {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Hk(function () {
            Wk(null, a, null, null);
          });
          b[pf] = null;
        }
      };
      function cl(a) {
        this._internalRoot = a;
      }
      cl.prototype.unstable_scheduleHydration = function (a) {
        if (a) {
          var b = Dc();
          a = {
            blockedOn: null,
            target: a,
            priority: b
          };
          for (var c = 0; c < Mc.length && 0 !== b && b < Mc[c].priority; c++);
          Mc.splice(c, 0, a);
          0 === c && Rc(a);
        }
      };
      function dl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function el(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function fl() {}
      function gl(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function () {
              var a = Xk(g);
              f.call(a);
            };
          }
          var g = Vk(b, d, a, 0, null, false, false, "", fl);
          a._reactRootContainer = g;
          a[pf] = g.current;
          nf(8 === a.nodeType ? a.parentNode : a);
          Hk();
          return g;
        }
        for (; e = a.lastChild;) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function () {
            var a = Xk(k);
            h.call(a);
          };
        }
        var k = Sk(a, 0, false, null, null, false, false, "", fl);
        a._reactRootContainer = k;
        a[pf] = k.current;
        nf(8 === a.nodeType ? a.parentNode : a);
        Hk(function () {
          Wk(b, k, c, d);
        });
        return k;
      }
      function hl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function () {
              var a = Xk(g);
              h.call(a);
            };
          }
          Wk(b, g, a, e);
        } else g = gl(c, b, a, e, d);
        return Xk(g);
      }
      Ac = function (a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = qc(b.pendingLanes);
              0 !== c && (yc(b, c | 1), tk(b, D()), 0 === (K & 6) && (Ti = D() + 500, dg()));
            }
            break;
          case 13:
            var d = M();
            Hk(function () {
              return Eg(a, 1, d);
            });
            Zk(a, 1);
        }
      };
      Bc = function (a) {
        if (13 === a.tag) {
          var b = M();
          Eg(a, 134217728, b);
          Zk(a, 134217728);
        }
      };
      Cc = function (a) {
        if (13 === a.tag) {
          var b = M(),
            c = Dg(a);
          Eg(a, c, b);
          Zk(a, c);
        }
      };
      Dc = function () {
        return E;
      };
      Ec = function (a, b) {
        var c = E;
        try {
          return E = a, b();
        } finally {
          E = c;
        }
      };
      vb = function (a, b, c) {
        switch (b) {
          case "input":
            Za(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode;) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Ab(d);
                  if (!e) throw Error(p(90));
                  Ua(d);
                  Za(d, e);
                }
              }
            }
            break;
          case "textarea":
            fb(a, c);
            break;
          case "select":
            b = c.value, null != b && cb(a, !!c.multiple, b, false);
        }
      };
      Db = Gk;
      Eb = Hk;
      var il = {
          usingClientEntryPoint: false,
          Events: [zb, pe, Ab, Bb, Cb, Gk]
        },
        jl = {
          findFiberByHostInstance: Sc,
          bundleType: 0,
          version: "18.0.0-fc46dba67-20220329",
          rendererPackageName: "react-dom"
        };
      var kl = {
        bundleType: jl.bundleType,
        version: jl.version,
        rendererPackageName: jl.rendererPackageName,
        rendererConfig: jl.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: sa.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (a) {
          a = Wb(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: jl.findFiberByHostInstance || $k,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.0.0-fc46dba67-20220329"
      };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ll.isDisabled && ll.supportsFiber) try {
          hc = ll.inject(kl), ic = ll;
        } catch (a) {}
      }
      reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = il;
      reactDom_production_min.createPortal = function (a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!dl(b)) throw Error(p(200));
        return Tk(a, b, null, c);
      };
      reactDom_production_min.createRoot = function (a, b) {
        if (!dl(a)) throw Error(p(299));
        var c = false,
          d = "",
          e = al;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = Sk(a, 1, false, null, null, c, false, d, e);
        a[pf] = b.current;
        nf(8 === a.nodeType ? a.parentNode : a);
        return new bl(b);
      };
      reactDom_production_min.findDOMNode = function (a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Wb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      reactDom_production_min.flushSync = function (a) {
        return Hk(a);
      };
      reactDom_production_min.hydrate = function (a, b, c) {
        if (!el(b)) throw Error(p(200));
        return hl(null, a, b, true, c);
      };
      reactDom_production_min.hydrateRoot = function (a, b, c) {
        if (!dl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null,
          e = false,
          f = "",
          g = al;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = Vk(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[pf] = b.current;
        nf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
        return new cl(b);
      };
      reactDom_production_min.render = function (a, b, c) {
        if (!el(b)) throw Error(p(200));
        return hl(null, a, b, false, c);
      };
      reactDom_production_min.unmountComponentAtNode = function (a) {
        if (!el(a)) throw Error(p(40));
        return a._reactRootContainer ? (Hk(function () {
          hl(null, null, a, !1, function () {
            a._reactRootContainer = null;
            a[pf] = null;
          });
        }), true) : false;
      };
      reactDom_production_min.unstable_batchedUpdates = Gk;
      reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
        if (!el(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return hl(a, b, c, false, d);
      };
      reactDom_production_min.version = "18.0.0-fc46dba67-20220329";
      return reactDom_production_min;
    }

    var hasRequiredReactDom;
    function requireReactDom() {
      if (hasRequiredReactDom) return reactDom.exports;
      hasRequiredReactDom = 1;
      function checkDCE() {
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
          return;
        }
        try {
          // Verify that the code above has been dead code eliminated (DCE'd).
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          // DevTools shouldn't crash React, no matter what.
          // We should still report in case we break this code.
          console.error(err);
        }
      }
      {
        // DCE check should happen before ReactDOM bundle executes so that
        // DevTools can report bad minification during injection.
        checkDCE();
        reactDom.exports = requireReactDom_production_min();
      }
      return reactDom.exports;
    }

    var hasRequiredClient;
    function requireClient() {
      if (hasRequiredClient) return client;
      hasRequiredClient = 1;
      var m = requireReactDom();
      {
        client.createRoot = m.createRoot;
        client.hydrateRoot = m.hydrateRoot;
      }
      return client;
    }

    var clientExports = requireClient();

    var reactExports = requireReact();

    var xhtml = "http://www.w3.org/1999/xhtml";
    var namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

    function namespace (name) {
      var prefix = name += "",
        i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return namespaces.hasOwnProperty(prefix) ? {
        space: namespaces[prefix],
        local: name
      } : name; // eslint-disable-line no-prototype-builtins
    }

    function creatorInherit(name) {
      return function () {
        var document = this.ownerDocument,
          uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
      };
    }
    function creatorFixed(fullname) {
      return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }
    function creator (name) {
      var fullname = namespace(name);
      return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    }

    function none() {}
    function selector (selector) {
      return selector == null ? none : function () {
        return this.querySelector(selector);
      };
    }

    function selection_select (select) {
      if (typeof select !== "function") select = selector(select);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
          }
        }
      }
      return new Selection(subgroups, this._parents);
    }

    // Given something array like (or null), returns something that is strictly an
    // array. This is used to ensure that array-like objects passed to d3.selectAll
    // or selection.selectAll are converted into proper arrays when creating a
    // selection; we don’t ever want to create a selection backed by a live
    // HTMLCollection or NodeList. However, note that selection.selectAll will use a
    // static NodeList as a group, since it safely derived from querySelectorAll.
    function array(x) {
      return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
    }

    function empty() {
      return [];
    }
    function selectorAll (selector) {
      return selector == null ? empty : function () {
        return this.querySelectorAll(selector);
      };
    }

    function arrayAll(select) {
      return function () {
        return array(select.apply(this, arguments));
      };
    }
    function selection_selectAll (select) {
      if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
          }
        }
      }
      return new Selection(subgroups, parents);
    }

    function matcher (selector) {
      return function () {
        return this.matches(selector);
      };
    }
    function childMatcher(selector) {
      return function (node) {
        return node.matches(selector);
      };
    }

    var find = Array.prototype.find;
    function childFind(match) {
      return function () {
        return find.call(this.children, match);
      };
    }
    function childFirst() {
      return this.firstElementChild;
    }
    function selection_selectChild (match) {
      return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
    }

    var filter = Array.prototype.filter;
    function children() {
      return Array.from(this.children);
    }
    function childrenFilter(match) {
      return function () {
        return filter.call(this.children, match);
      };
    }
    function selection_selectChildren (match) {
      return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
    }

    function selection_filter (match) {
      if (typeof match !== "function") match = matcher(match);
      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }
      return new Selection(subgroups, this._parents);
    }

    function sparse (update) {
      return new Array(update.length);
    }

    function selection_enter () {
      return new Selection(this._enter || this._groups.map(sparse), this._parents);
    }
    function EnterNode(parent, datum) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum;
    }
    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function (child) {
        return this._parent.insertBefore(child, this._next);
      },
      insertBefore: function (child, next) {
        return this._parent.insertBefore(child, next);
      },
      querySelector: function (selector) {
        return this._parent.querySelector(selector);
      },
      querySelectorAll: function (selector) {
        return this._parent.querySelectorAll(selector);
      }
    };

    function constant$1 (x) {
      return function () {
        return x;
      };
    }

    function bindIndex(parent, group, enter, update, exit, data) {
      var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

      // Put any non-null nodes that fit into update.
      // Put any null nodes into enter.
      // Put any remaining data into enter.
      for (; i < dataLength; ++i) {
        if (node = group[i]) {
          node.__data__ = data[i];
          update[i] = node;
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Put any non-null nodes that don’t fit into exit.
      for (; i < groupLength; ++i) {
        if (node = group[i]) {
          exit[i] = node;
        }
      }
    }
    function bindKey(parent, group, enter, update, exit, data, key) {
      var i,
        node,
        nodeByKeyValue = new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

      // Compute the key for each node.
      // If multiple nodes have the same key, the duplicates are added to exit.
      for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
          keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
          if (nodeByKeyValue.has(keyValue)) {
            exit[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
        }
      }

      // Compute the key for each datum.
      // If there a node associated with this key, join and add it to update.
      // If there is not (or the key is a duplicate), add it to enter.
      for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
          update[i] = node;
          node.__data__ = data[i];
          nodeByKeyValue.delete(keyValue);
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Add any remaining nodes that were not bound to data to exit.
      for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
          exit[i] = node;
        }
      }
    }
    function datum(node) {
      return node.__data__;
    }
    function selection_data (value, key) {
      if (!arguments.length) return Array.from(this, datum);
      var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
      if (typeof value !== "function") value = constant$1(value);
      for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
          if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while (!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
          }
        }
      }
      update = new Selection(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }

    // Given some data, this returns an array-like view of it: an object that
    // exposes a length property and allows numeric indexing. Note that unlike
    // selectAll, this isn’t worried about “live” collections because the resulting
    // array will only be used briefly while data is being bound. (It is possible to
    // cause the data to change while iterating by using a key function, but please
    // don’t; we’d rather avoid a gratuitous copy.)
    function arraylike(data) {
      return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
      : Array.from(data); // Map, Set, iterable, string, or anything else
    }

    function selection_exit () {
      return new Selection(this._exit || this._groups.map(sparse), this._parents);
    }

    function selection_join (onenter, onupdate, onexit) {
      var enter = this.enter(),
        update = this,
        exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
      } else {
        enter = enter.append(onenter + "");
      }
      if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
      }
      if (onexit == null) exit.remove();else onexit(exit);
      return enter && update ? enter.merge(update).order() : update;
    }

    function selection_merge (context) {
      var selection = context.selection ? context.selection() : context;
      for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }
      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }
      return new Selection(merges, this._parents);
    }

    function selection_order () {
      for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
          if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    }

    function selection_sort (compare) {
      if (!compare) compare = ascending$1;
      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }
      for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            sortgroup[i] = node;
          }
        }
        sortgroup.sort(compareNode);
      }
      return new Selection(sortgroups, this._parents).order();
    }
    function ascending$1(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function selection_call () {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }

    function selection_nodes () {
      return Array.from(this);
    }

    function selection_node () {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
          var node = group[i];
          if (node) return node;
        }
      }
      return null;
    }

    function selection_size () {
      let size = 0;
      for (const node of this) ++size; // eslint-disable-line no-unused-vars
      return size;
    }

    function selection_empty () {
      return !this.node();
    }

    function selection_each (callback) {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
      }
      return this;
    }

    function attrRemove(name) {
      return function () {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS(fullname) {
      return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant(name, value) {
      return function () {
        this.setAttribute(name, value);
      };
    }
    function attrConstantNS(fullname, value) {
      return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }
    function attrFunction(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
      };
    }
    function attrFunctionNS(fullname, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }
    function selection_attr (name, value) {
      var fullname = namespace(name);
      if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
      }
      return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    }

    function defaultView (node) {
      return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
      || node.document && node // node is a Window
      || node.defaultView; // node is a Document
    }

    function styleRemove(name) {
      return function () {
        this.style.removeProperty(name);
      };
    }
    function styleConstant(name, value, priority) {
      return function () {
        this.style.setProperty(name, value, priority);
      };
    }
    function styleFunction(name, value, priority) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
      };
    }
    function selection_style (name, value, priority) {
      return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    }
    function styleValue(node, name) {
      return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
    }

    function propertyRemove(name) {
      return function () {
        delete this[name];
      };
    }
    function propertyConstant(name, value) {
      return function () {
        this[name] = value;
      };
    }
    function propertyFunction(name, value) {
      return function () {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];else this[name] = v;
      };
    }
    function selection_property (name, value) {
      return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    }

    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }
    function classList(node) {
      return node.classList || new ClassList(node);
    }
    function ClassList(node) {
      this._node = node;
      this._names = classArray(node.getAttribute("class") || "");
    }
    ClassList.prototype = {
      add: function (name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function (name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function (name) {
        return this._names.indexOf(name) >= 0;
      }
    };
    function classedAdd(node, names) {
      var list = classList(node),
        i = -1,
        n = names.length;
      while (++i < n) list.add(names[i]);
    }
    function classedRemove(node, names) {
      var list = classList(node),
        i = -1,
        n = names.length;
      while (++i < n) list.remove(names[i]);
    }
    function classedTrue(names) {
      return function () {
        classedAdd(this, names);
      };
    }
    function classedFalse(names) {
      return function () {
        classedRemove(this, names);
      };
    }
    function classedFunction(names, value) {
      return function () {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }
    function selection_classed (name, value) {
      var names = classArray(name + "");
      if (arguments.length < 2) {
        var list = classList(this.node()),
          i = -1,
          n = names.length;
        while (++i < n) if (!list.contains(names[i])) return false;
        return true;
      }
      return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    }

    function textRemove() {
      this.textContent = "";
    }
    function textConstant(value) {
      return function () {
        this.textContent = value;
      };
    }
    function textFunction(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }
    function selection_text (value) {
      return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
    }

    function htmlRemove() {
      this.innerHTML = "";
    }
    function htmlConstant(value) {
      return function () {
        this.innerHTML = value;
      };
    }
    function htmlFunction(value) {
      return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }
    function selection_html (value) {
      return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    }

    function raise() {
      if (this.nextSibling) this.parentNode.appendChild(this);
    }
    function selection_raise () {
      return this.each(raise);
    }

    function lower() {
      if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower () {
      return this.each(lower);
    }

    function selection_append (name) {
      var create = typeof name === "function" ? name : creator(name);
      return this.select(function () {
        return this.appendChild(create.apply(this, arguments));
      });
    }

    function constantNull() {
      return null;
    }
    function selection_insert (name, before) {
      var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function () {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
      });
    }

    function remove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }
    function selection_remove () {
      return this.each(remove);
    }

    function selection_cloneShallow() {
      var clone = this.cloneNode(false),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_cloneDeep() {
      var clone = this.cloneNode(true),
        parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_clone (deep) {
      return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }

    function selection_datum (value) {
      return arguments.length ? this.property("__data__", value) : this.node().__data__;
    }

    function contextListener(listener) {
      return function (event) {
        listener.call(this, event, this.__data__);
      };
    }
    function parseTypenames(typenames) {
      return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "",
          i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
          type: t,
          name: name
        };
      });
    }
    function onRemove(typename) {
      return function () {
        var on = this.__on;
        if (!on) return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
          if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
          } else {
            on[++i] = o;
          }
        }
        if (++i) on.length = i;else delete this.__on;
      };
    }
    function onAdd(typename, value, options) {
      return function () {
        var on = this.__on,
          o,
          listener = contextListener(value);
        if (on) for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
          type: typename.type,
          name: typename.name,
          value: value,
          listener: listener,
          options: options
        };
        if (!on) this.__on = [o];else on.push(o);
      };
    }
    function selection_on (typename, value, options) {
      var typenames = parseTypenames(typename + ""),
        i,
        n = typenames.length,
        t;
      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
        return;
      }
      on = value ? onAdd : onRemove;
      for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
      return this;
    }

    function dispatchEvent(node, type, params) {
      var window = defaultView(node),
        event = window.CustomEvent;
      if (typeof event === "function") {
        event = new event(type, params);
      } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
      }
      node.dispatchEvent(event);
    }
    function dispatchConstant(type, params) {
      return function () {
        return dispatchEvent(this, type, params);
      };
    }
    function dispatchFunction(type, params) {
      return function () {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }
    function selection_dispatch (type, params) {
      return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    }

    function* selection_iterator () {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) yield node;
        }
      }
    }

    var root = [null];
    function Selection(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }
    function selection_selection() {
      return this;
    }
    Selection.prototype = {
      constructor: Selection,
      select: selection_select,
      selectAll: selection_selectAll,
      selectChild: selection_selectChild,
      selectChildren: selection_selectChildren,
      filter: selection_filter,
      data: selection_data,
      enter: selection_enter,
      exit: selection_exit,
      join: selection_join,
      merge: selection_merge,
      selection: selection_selection,
      order: selection_order,
      sort: selection_sort,
      call: selection_call,
      nodes: selection_nodes,
      node: selection_node,
      size: selection_size,
      empty: selection_empty,
      each: selection_each,
      attr: selection_attr,
      style: selection_style,
      property: selection_property,
      classed: selection_classed,
      text: selection_text,
      html: selection_html,
      raise: selection_raise,
      lower: selection_lower,
      append: selection_append,
      insert: selection_insert,
      remove: selection_remove,
      clone: selection_clone,
      datum: selection_datum,
      on: selection_on,
      dispatch: selection_dispatch,
      [Symbol.iterator]: selection_iterator
    };

    function select (selector) {
      return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
    }

    function selectAll (selector) {
      return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array(selector)], root);
    }

    function ascending(a, b) {
      return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function descending(a, b) {
      return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    }

    function bisector(f) {
      let compare1, compare2, delta;

      // If an accessor is specified, promote it to a comparator. In this case we
      // can test whether the search value is (self-) comparable. We can’t do this
      // for a comparator (except for specific, known comparators) because we can’t
      // tell if the comparator is symmetric, and an asymmetric comparator can’t be
      // used to test whether a single value is comparable.
      if (f.length !== 2) {
        compare1 = ascending;
        compare2 = (d, x) => ascending(f(d), x);
        delta = (d, x) => f(d) - x;
      } else {
        compare1 = f === ascending || f === descending ? f : zero$1;
        compare2 = f;
        delta = f;
      }
      function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = lo + hi >>> 1;
            if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }
      function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
          if (compare1(x, x) !== 0) return hi;
          do {
            const mid = lo + hi >>> 1;
            if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
          } while (lo < hi);
        }
        return lo;
      }
      function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
      }
      return {
        left,
        center,
        right
      };
    }
    function zero$1() {
      return 0;
    }

    function number$2(x) {
      return x === null ? NaN : +x;
    }

    const ascendingBisect = bisector(ascending);
    const bisectRight = ascendingBisect.right;
    bisector(number$2).center;

    function extent(values, valueof) {
      let min;
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null) {
            if (min === undefined) {
              if (value >= value) min = max = value;
            } else {
              if (min > value) min = value;
              if (max < value) max = value;
            }
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null) {
            if (min === undefined) {
              if (value >= value) min = max = value;
            } else {
              if (min > value) min = value;
              if (max < value) max = value;
            }
          }
        }
      }
      return [min, max];
    }

    class InternMap extends Map {
      constructor(entries, key = keyof) {
        super();
        Object.defineProperties(this, {
          _intern: {
            value: new Map()
          },
          _key: {
            value: key
          }
        });
        if (entries != null) for (const [key, value] of entries) this.set(key, value);
      }
      get(key) {
        return super.get(intern_get(this, key));
      }
      has(key) {
        return super.has(intern_get(this, key));
      }
      set(key, value) {
        return super.set(intern_set(this, key), value);
      }
      delete(key) {
        return super.delete(intern_delete(this, key));
      }
    }
    function intern_get({
      _intern,
      _key
    }, value) {
      const key = _key(value);
      return _intern.has(key) ? _intern.get(key) : value;
    }
    function intern_set({
      _intern,
      _key
    }, value) {
      const key = _key(value);
      if (_intern.has(key)) return _intern.get(key);
      _intern.set(key, value);
      return value;
    }
    function intern_delete({
      _intern,
      _key
    }, value) {
      const key = _key(value);
      if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
      }
      return value;
    }
    function keyof(value) {
      return value !== null && typeof value === "object" ? value.valueOf() : value;
    }

    var e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);
    function tickStep(start, stop, count) {
      var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
      if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
      return stop < start ? -step1 : step1;
    }

    function max(values, valueof) {
      let max;
      if (valueof === undefined) {
        for (const value of values) {
          if (value != null && (max < value || max === undefined && value >= value)) {
            max = value;
          }
        }
      } else {
        let index = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) {
            max = value;
          }
        }
      }
      return max;
    }

    function range(start, stop, step) {
      start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
      var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);
      while (++i < n) {
        range[i] = start + i * step;
      }
      return range;
    }

    function initRange(domain, range) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(domain);
          break;
        default:
          this.range(range).domain(domain);
          break;
      }
      return this;
    }

    const implicit = Symbol("implicit");
    function ordinal() {
      var index = new InternMap(),
        domain = [],
        range = [],
        unknown = implicit;
      function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
          if (unknown !== implicit) return unknown;
          index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
      }
      scale.domain = function (_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new InternMap();
        for (const value of _) {
          if (index.has(value)) continue;
          index.set(value, domain.push(value) - 1);
        }
        return scale;
      };
      scale.range = function (_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
      };
      scale.unknown = function (_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };
      scale.copy = function () {
        return ordinal(domain, range).unknown(unknown);
      };
      initRange.apply(scale, arguments);
      return scale;
    }

    function band() {
      var scale = ordinal().unknown(undefined),
        domain = scale.domain,
        ordinalRange = scale.range,
        r0 = 0,
        r1 = 1,
        step,
        bandwidth,
        round = false,
        paddingInner = 0,
        paddingOuter = 0,
        align = 0.5;
      delete scale.unknown;
      function rescale() {
        var n = domain().length,
          reverse = r1 < r0,
          start = reverse ? r1 : r0,
          stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = range(n).map(function (i) {
          return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
      }
      scale.domain = function (_) {
        return arguments.length ? (domain(_), rescale()) : domain();
      };
      scale.range = function (_) {
        return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
      };
      scale.rangeRound = function (_) {
        return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
      };
      scale.bandwidth = function () {
        return bandwidth;
      };
      scale.step = function () {
        return step;
      };
      scale.round = function (_) {
        return arguments.length ? (round = !!_, rescale()) : round;
      };
      scale.padding = function (_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
      };
      scale.paddingInner = function (_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
      };
      scale.paddingOuter = function (_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
      };
      scale.align = function (_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
      };
      scale.copy = function () {
        return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
      };
      return initRange.apply(rescale(), arguments);
    }
    function pointish(scale) {
      var copy = scale.copy;
      scale.padding = scale.paddingOuter;
      delete scale.paddingInner;
      delete scale.paddingOuter;
      scale.copy = function () {
        return pointish(copy());
      };
      return scale;
    }
    function point() {
      return pointish(band.apply(null, arguments).paddingInner(1));
    }

    function define (constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }
    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }

    function Color() {}
    var darker = 0.7;
    var brighter = 1 / darker;
    var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
      reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
      reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
      reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
      reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
      reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };
    define(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor(), this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex,
      // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });
    function color_formatHex() {
      return this.rgb().formatHex();
    }
    function color_formatHex8() {
      return this.rgb().formatHex8();
    }
    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }
    function color_formatRgb() {
      return this.rgb().formatRgb();
    }
    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
      : null // invalid hex
      ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
    }
    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }
    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }
    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb();
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }
    function rgb$1(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }
    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }
    define(Rgb, rgb$1, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: rgb_formatHex,
      // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));
    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }
    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }
    function rgb_formatRgb() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
    }
    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }
    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }
    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }
    function hsla(h, s, l, a) {
      if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
      return new Hsl(h, s, l, a);
    }
    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl();
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
      if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }
    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }
    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }
    define(Hsl, hsl, extend(Color, {
      brighter(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb() {
        var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      },
      formatHsl() {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
      }
    }));
    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }
    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }

    /* From FvD 13.37, CSS Color Module Level 3 */
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
    }

    var constant = x => () => x;

    function linear(a, d) {
      return function (t) {
        return a + t * d;
      };
    }
    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
        return Math.pow(a + t * b, y);
      };
    }
    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function (a, b) {
        return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
      };
    }
    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant(isNaN(a) ? b : a);
    }

    var rgb = (function rgbGamma(y) {
      var color = gamma(y);
      function rgb(start, end) {
        var r = color((start = rgb$1(start)).r, (end = rgb$1(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
        return function (t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }
      rgb.gamma = rgbGamma;
      return rgb;
    })(1);

    function numberArray (a, b) {
      if (!b) b = [];
      var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
      return function (t) {
        for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
      };
    }
    function isNumberArray(x) {
      return ArrayBuffer.isView(x) && !(x instanceof DataView);
    }

    function genericArray(a, b) {
      var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;
      for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
      for (; i < nb; ++i) c[i] = b[i];
      return function (t) {
        for (i = 0; i < na; ++i) c[i] = x[i](t);
        return c;
      };
    }

    function date$1 (a, b) {
      var d = new Date();
      return a = +a, b = +b, function (t) {
        return d.setTime(a * (1 - t) + b * t), d;
      };
    }

    function interpolateNumber (a, b) {
      return a = +a, b = +b, function (t) {
        return a * (1 - t) + b * t;
      };
    }

    function object (a, b) {
      var i = {},
        c = {},
        k;
      if (a === null || typeof a !== "object") a = {};
      if (b === null || typeof b !== "object") b = {};
      for (k in b) {
        if (k in a) {
          i[k] = interpolate(a[k], b[k]);
        } else {
          c[k] = b[k];
        }
      }
      return function (t) {
        for (k in i) c[k] = i[k](t);
        return c;
      };
    }

    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");
    function zero(b) {
      return function () {
        return b;
      };
    }
    function one(b) {
      return function (t) {
        return b(t) + "";
      };
    }
    function string (a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0,
        // scan index for next number in b
        am,
        // current match in a
        bm,
        // current match in b
        bs,
        // string preceding current number in b, if any
        i = -1,
        // index in s
        s = [],
        // string constants and placeholders
        q = []; // number interpolators

      // Coerce inputs to strings.
      a = a + "", b = b + "";

      // Interpolate pairs of numbers in a & b.
      while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) {
          // a string precedes the next number in b
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
          // numbers in a & b match
          if (s[i]) s[i] += bm; // coalesce with previous string
          else s[++i] = bm;
        } else {
          // interpolate non-matching numbers
          s[++i] = null;
          q.push({
            i: i,
            x: interpolateNumber(am, bm)
          });
        }
        bi = reB.lastIndex;
      }

      // Add remains of b.
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      // Special optimization for only a single match.
      // Otherwise, interpolate each of the numbers and rejoin the string.
      return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
        for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      });
    }

    function interpolate (a, b) {
      var t = typeof b,
        c;
      return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
    }

    function interpolateRound (a, b) {
      return a = +a, b = +b, function (t) {
        return Math.round(a * (1 - t) + b * t);
      };
    }

    function constants(x) {
      return function () {
        return x;
      };
    }

    function number$1(x) {
      return +x;
    }

    var unit = [0, 1];
    function identity(x) {
      return x;
    }
    function normalize(a, b) {
      return (b -= a = +a) ? function (x) {
        return (x - a) / b;
      } : constants(isNaN(b) ? NaN : 0.5);
    }
    function clamper(a, b) {
      var t;
      if (a > b) t = a, a = b, b = t;
      return function (x) {
        return Math.max(a, Math.min(b, x));
      };
    }

    // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
    // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
    function bimap(domain, range, interpolate) {
      var d0 = domain[0],
        d1 = domain[1],
        r0 = range[0],
        r1 = range[1];
      if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
      return function (x) {
        return r0(d0(x));
      };
    }
    function polymap(domain, range, interpolate) {
      var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

      // Reverse descending domains.
      if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
      }
      while (++i < j) {
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
      }
      return function (x) {
        var i = bisectRight(domain, x, 1, j) - 1;
        return r[i](d[i](x));
      };
    }
    function copy(source, target) {
      return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
    }
    function transformer() {
      var domain = unit,
        range = unit,
        interpolate$1 = interpolate,
        transform,
        untransform,
        unknown,
        clamp = identity,
        piecewise,
        output,
        input;
      function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
      }
      function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
      }
      scale.invert = function (y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
      };
      scale.domain = function (_) {
        return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
      };
      scale.range = function (_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
      };
      scale.rangeRound = function (_) {
        return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
      };
      scale.clamp = function (_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
      };
      scale.interpolate = function (_) {
        return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
      };
      scale.unknown = function (_) {
        return arguments.length ? (unknown = _, scale) : unknown;
      };
      return function (t, u) {
        transform = t, untransform = u;
        return rescale();
      };
    }
    function continuous() {
      return transformer()(identity, identity);
    }

    function nice(domain, interval) {
      domain = domain.slice();
      var i0 = 0,
        i1 = domain.length - 1,
        x0 = domain[i0],
        x1 = domain[i1],
        t;
      if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
      }
      domain[i0] = interval.floor(x0);
      domain[i1] = interval.ceil(x1);
      return domain;
    }

    const t0 = new Date(),
      t1 = new Date();
    function timeInterval(floori, offseti, count, field) {
      function interval(date) {
        return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
      }
      interval.floor = date => {
        return floori(date = new Date(+date)), date;
      };
      interval.ceil = date => {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
      };
      interval.round = date => {
        const d0 = interval(date),
          d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
      };
      interval.offset = (date, step) => {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
      };
      interval.range = (start, stop, step) => {
        const range = [];
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        let previous;
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
        return range;
      };
      interval.filter = test => {
        return timeInterval(date => {
          if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
        }, (date, step) => {
          if (date >= date) {
            if (step < 0) while (++step <= 0) {
              while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
            } else while (--step >= 0) {
              while (offseti(date, 1), !test(date)) {} // eslint-disable-line no-empty
            }
          }
        });
      };
      if (count) {
        interval.count = (start, end) => {
          t0.setTime(+start), t1.setTime(+end);
          floori(t0), floori(t1);
          return Math.floor(count(t0, t1));
        };
        interval.every = step => {
          step = Math.floor(step);
          return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? d => field(d) % step === 0 : d => interval.count(0, d) % step === 0);
        };
      }
      return interval;
    }

    const millisecond = timeInterval(() => {
      // noop
    }, (date, step) => {
      date.setTime(+date + step);
    }, (start, end) => {
      return end - start;
    });

    // An optimized implementation for this simple case.
    millisecond.every = k => {
      k = Math.floor(k);
      if (!isFinite(k) || !(k > 0)) return null;
      if (!(k > 1)) return millisecond;
      return timeInterval(date => {
        date.setTime(Math.floor(date / k) * k);
      }, (date, step) => {
        date.setTime(+date + step * k);
      }, (start, end) => {
        return (end - start) / k;
      });
    };
    millisecond.range;

    const durationSecond = 1000;
    const durationMinute = durationSecond * 60;
    const durationHour = durationMinute * 60;
    const durationDay = durationHour * 24;
    const durationWeek = durationDay * 7;
    const durationMonth = durationDay * 30;
    const durationYear = durationDay * 365;

    const second = timeInterval(date => {
      date.setTime(date - date.getMilliseconds());
    }, (date, step) => {
      date.setTime(+date + step * durationSecond);
    }, (start, end) => {
      return (end - start) / durationSecond;
    }, date => {
      return date.getUTCSeconds();
    });
    second.range;

    const timeMinute = timeInterval(date => {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
    }, (date, step) => {
      date.setTime(+date + step * durationMinute);
    }, (start, end) => {
      return (end - start) / durationMinute;
    }, date => {
      return date.getMinutes();
    });
    timeMinute.range;
    const utcMinute = timeInterval(date => {
      date.setUTCSeconds(0, 0);
    }, (date, step) => {
      date.setTime(+date + step * durationMinute);
    }, (start, end) => {
      return (end - start) / durationMinute;
    }, date => {
      return date.getUTCMinutes();
    });
    utcMinute.range;

    const timeHour = timeInterval(date => {
      date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
    }, (date, step) => {
      date.setTime(+date + step * durationHour);
    }, (start, end) => {
      return (end - start) / durationHour;
    }, date => {
      return date.getHours();
    });
    timeHour.range;
    const utcHour = timeInterval(date => {
      date.setUTCMinutes(0, 0, 0);
    }, (date, step) => {
      date.setTime(+date + step * durationHour);
    }, (start, end) => {
      return (end - start) / durationHour;
    }, date => {
      return date.getUTCHours();
    });
    utcHour.range;

    const timeDay = timeInterval(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay, date => date.getDate() - 1);
    timeDay.range;
    const utcDay = timeInterval(date => {
      date.setUTCHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setUTCDate(date.getUTCDate() + step);
    }, (start, end) => {
      return (end - start) / durationDay;
    }, date => {
      return date.getUTCDate() - 1;
    });
    utcDay.range;
    const unixDay = timeInterval(date => {
      date.setUTCHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setUTCDate(date.getUTCDate() + step);
    }, (start, end) => {
      return (end - start) / durationDay;
    }, date => {
      return Math.floor(date / durationDay);
    });
    unixDay.range;

    function timeWeekday(i) {
      return timeInterval(date => {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
      }, (date, step) => {
        date.setDate(date.getDate() + step * 7);
      }, (start, end) => {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
      });
    }
    const timeSunday = timeWeekday(0);
    const timeMonday = timeWeekday(1);
    const timeTuesday = timeWeekday(2);
    const timeWednesday = timeWeekday(3);
    const timeThursday = timeWeekday(4);
    const timeFriday = timeWeekday(5);
    const timeSaturday = timeWeekday(6);
    timeSunday.range;
    timeMonday.range;
    timeTuesday.range;
    timeWednesday.range;
    timeThursday.range;
    timeFriday.range;
    timeSaturday.range;
    function utcWeekday(i) {
      return timeInterval(date => {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
      }, (date, step) => {
        date.setUTCDate(date.getUTCDate() + step * 7);
      }, (start, end) => {
        return (end - start) / durationWeek;
      });
    }
    const utcSunday = utcWeekday(0);
    const utcMonday = utcWeekday(1);
    const utcTuesday = utcWeekday(2);
    const utcWednesday = utcWeekday(3);
    const utcThursday = utcWeekday(4);
    const utcFriday = utcWeekday(5);
    const utcSaturday = utcWeekday(6);
    utcSunday.range;
    utcMonday.range;
    utcTuesday.range;
    utcWednesday.range;
    utcThursday.range;
    utcFriday.range;
    utcSaturday.range;

    const timeMonth = timeInterval(date => {
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setMonth(date.getMonth() + step);
    }, (start, end) => {
      return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
    }, date => {
      return date.getMonth();
    });
    timeMonth.range;
    const utcMonth = timeInterval(date => {
      date.setUTCDate(1);
      date.setUTCHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setUTCMonth(date.getUTCMonth() + step);
    }, (start, end) => {
      return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
    }, date => {
      return date.getUTCMonth();
    });
    utcMonth.range;

    const timeYear = timeInterval(date => {
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setFullYear(date.getFullYear() + step);
    }, (start, end) => {
      return end.getFullYear() - start.getFullYear();
    }, date => {
      return date.getFullYear();
    });

    // An optimized implementation for this simple case.
    timeYear.every = k => {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
      }, (date, step) => {
        date.setFullYear(date.getFullYear() + step * k);
      });
    };
    timeYear.range;
    const utcYear = timeInterval(date => {
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, (date, step) => {
      date.setUTCFullYear(date.getUTCFullYear() + step);
    }, (start, end) => {
      return end.getUTCFullYear() - start.getUTCFullYear();
    }, date => {
      return date.getUTCFullYear();
    });

    // An optimized implementation for this simple case.
    utcYear.every = k => {
      return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval(date => {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
      }, (date, step) => {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
      });
    };
    utcYear.range;

    function ticker(year, month, week, day, hour, minute) {
      const tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];
      function ticks(start, stop, count) {
        const reverse = stop < start;
        if (reverse) [start, stop] = [stop, start];
        const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
        const ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
        return reverse ? ticks.reverse() : ticks;
      }
      function tickInterval(start, stop, count) {
        const target = Math.abs(stop - start) / count;
        const i = bisector(([,, step]) => step).right(tickIntervals, target);
        if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
        if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
        const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        return t.every(step);
      }
      return [ticks, tickInterval];
    }
    const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

    function localDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
      }
      return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
    }
    function utcDate(d) {
      if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
      }
      return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
    }
    function newDate(y, m, d) {
      return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }
    function formatLocale(locale) {
      var locale_dateTime = locale.dateTime,
        locale_date = locale.date,
        locale_time = locale.time,
        locale_periods = locale.periods,
        locale_weekdays = locale.days,
        locale_shortWeekdays = locale.shortDays,
        locale_months = locale.months,
        locale_shortMonths = locale.shortMonths;
      var periodRe = formatRe(locale_periods),
        periodLookup = formatLookup(locale_periods),
        weekdayRe = formatRe(locale_weekdays),
        weekdayLookup = formatLookup(locale_weekdays),
        shortWeekdayRe = formatRe(locale_shortWeekdays),
        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
        monthRe = formatRe(locale_months),
        monthLookup = formatLookup(locale_months),
        shortMonthRe = formatRe(locale_shortMonths),
        shortMonthLookup = formatLookup(locale_shortMonths);
      var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "g": formatYearISO,
        "G": formatFullYearISO,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
      };
      var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "g": formatUTCYearISO,
        "G": formatUTCFullYearISO,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
      };
      var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "g": parseYear,
        "G": parseFullYear,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "q": parseQuarter,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
      };

      // These recursive directive definitions must be deferred.
      formats.x = newFormat(locale_date, formats);
      formats.X = newFormat(locale_time, formats);
      formats.c = newFormat(locale_dateTime, formats);
      utcFormats.x = newFormat(locale_date, utcFormats);
      utcFormats.X = newFormat(locale_time, utcFormats);
      utcFormats.c = newFormat(locale_dateTime, utcFormats);
      function newFormat(specifier, formats) {
        return function (date) {
          var string = [],
            i = -1,
            j = 0,
            n = specifier.length,
            c,
            pad,
            format;
          if (!(date instanceof Date)) date = new Date(+date);
          while (++i < n) {
            if (specifier.charCodeAt(i) === 37) {
              string.push(specifier.slice(j, i));
              if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
              if (format = formats[c]) c = format(date, pad);
              string.push(c);
              j = i + 1;
            }
          }
          string.push(specifier.slice(j, i));
          return string.join("");
        };
      }
      function newParse(specifier, Z) {
        return function (string) {
          var d = newDate(1900, undefined, 1),
            i = parseSpecifier(d, specifier, string += "", 0),
            week,
            day;
          if (i != string.length) return null;

          // If a UNIX timestamp is specified, return it.
          if ("Q" in d) return new Date(d.Q);
          if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

          // If this is utcParse, never use the local timezone.
          if (Z && !("Z" in d)) d.Z = 0;

          // The am-pm flag is 0 for AM, and 1 for PM.
          if ("p" in d) d.H = d.H % 12 + d.p * 12;

          // If the month was not specified, inherit from the quarter.
          if (d.m === undefined) d.m = "q" in d ? d.q : 0;

          // Convert day-of-week and week-of-year to day-of-year.
          if ("V" in d) {
            if (d.V < 1 || d.V > 53) return null;
            if (!("w" in d)) d.w = 1;
            if ("Z" in d) {
              week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
              week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
              week = utcDay.offset(week, (d.V - 1) * 7);
              d.y = week.getUTCFullYear();
              d.m = week.getUTCMonth();
              d.d = week.getUTCDate() + (d.w + 6) % 7;
            } else {
              week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
              week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
              week = timeDay.offset(week, (d.V - 1) * 7);
              d.y = week.getFullYear();
              d.m = week.getMonth();
              d.d = week.getDate() + (d.w + 6) % 7;
            }
          } else if ("W" in d || "U" in d) {
            if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
            day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
            d.m = 0;
            d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
          }

          // If a time zone is specified, all fields are interpreted as UTC and then
          // offset according to the specified time zone.
          if ("Z" in d) {
            d.H += d.Z / 100 | 0;
            d.M += d.Z % 100;
            return utcDate(d);
          }

          // Otherwise, all fields are in local time.
          return localDate(d);
        };
      }
      function parseSpecifier(d, specifier, string, j) {
        var i = 0,
          n = specifier.length,
          m = string.length,
          c,
          parse;
        while (i < n) {
          if (j >= m) return -1;
          c = specifier.charCodeAt(i++);
          if (c === 37) {
            c = specifier.charAt(i++);
            parse = parses[c in pads ? specifier.charAt(i++) : c];
            if (!parse || (j = parse(d, string, j)) < 0) return -1;
          } else if (c != string.charCodeAt(j++)) {
            return -1;
          }
        }
        return j;
      }
      function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }
      function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }
      function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }
      function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }
      function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
      }
      function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
      }
      function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
      }
      function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
      }
      function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
      }
      function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
      }
      function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
      }
      function formatMonth(d) {
        return locale_months[d.getMonth()];
      }
      function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
      }
      function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
      }
      function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
      }
      function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
      }
      function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
      }
      function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
      }
      function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
      }
      function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
      }
      return {
        format: function (specifier) {
          var f = newFormat(specifier += "", formats);
          f.toString = function () {
            return specifier;
          };
          return f;
        },
        parse: function (specifier) {
          var p = newParse(specifier += "", false);
          p.toString = function () {
            return specifier;
          };
          return p;
        },
        utcFormat: function (specifier) {
          var f = newFormat(specifier += "", utcFormats);
          f.toString = function () {
            return specifier;
          };
          return f;
        },
        utcParse: function (specifier) {
          var p = newParse(specifier += "", true);
          p.toString = function () {
            return specifier;
          };
          return p;
        }
      };
    }
    var pads = {
        "-": "",
        "_": " ",
        "0": "0"
      },
      numberRe = /^\s*\d+/,
      // note: ignores next directive
      percentRe = /^%/,
      requoteRe = /[\\^$*+?|[\]().{}]/g;
    function pad(value, fill, width) {
      var sign = value < 0 ? "-" : "",
        string = (sign ? -value : value) + "",
        length = string.length;
      return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }
    function requote(s) {
      return s.replace(requoteRe, "\\$&");
    }
    function formatRe(names) {
      return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
    }
    function formatLookup(names) {
      return new Map(names.map((name, i) => [name.toLowerCase(), i]));
    }
    function parseWeekdayNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.w = +n[0], i + n[0].length) : -1;
    }
    function parseWeekdayNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.u = +n[0], i + n[0].length) : -1;
    }
    function parseWeekNumberSunday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.U = +n[0], i + n[0].length) : -1;
    }
    function parseWeekNumberISO(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.V = +n[0], i + n[0].length) : -1;
    }
    function parseWeekNumberMonday(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.W = +n[0], i + n[0].length) : -1;
    }
    function parseFullYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 4));
      return n ? (d.y = +n[0], i + n[0].length) : -1;
    }
    function parseYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
    }
    function parseZone(d, string, i) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
      return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
    }
    function parseQuarter(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 1));
      return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
    }
    function parseMonthNumber(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
    }
    function parseDayOfMonth(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.d = +n[0], i + n[0].length) : -1;
    }
    function parseDayOfYear(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
    }
    function parseHour24(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.H = +n[0], i + n[0].length) : -1;
    }
    function parseMinutes(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.M = +n[0], i + n[0].length) : -1;
    }
    function parseSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 2));
      return n ? (d.S = +n[0], i + n[0].length) : -1;
    }
    function parseMilliseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 3));
      return n ? (d.L = +n[0], i + n[0].length) : -1;
    }
    function parseMicroseconds(d, string, i) {
      var n = numberRe.exec(string.slice(i, i + 6));
      return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
    }
    function parseLiteralPercent(d, string, i) {
      var n = percentRe.exec(string.slice(i, i + 1));
      return n ? i + n[0].length : -1;
    }
    function parseUnixTimestamp(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.Q = +n[0], i + n[0].length) : -1;
    }
    function parseUnixTimestampSeconds(d, string, i) {
      var n = numberRe.exec(string.slice(i));
      return n ? (d.s = +n[0], i + n[0].length) : -1;
    }
    function formatDayOfMonth(d, p) {
      return pad(d.getDate(), p, 2);
    }
    function formatHour24(d, p) {
      return pad(d.getHours(), p, 2);
    }
    function formatHour12(d, p) {
      return pad(d.getHours() % 12 || 12, p, 2);
    }
    function formatDayOfYear(d, p) {
      return pad(1 + timeDay.count(timeYear(d), d), p, 3);
    }
    function formatMilliseconds(d, p) {
      return pad(d.getMilliseconds(), p, 3);
    }
    function formatMicroseconds(d, p) {
      return formatMilliseconds(d, p) + "000";
    }
    function formatMonthNumber(d, p) {
      return pad(d.getMonth() + 1, p, 2);
    }
    function formatMinutes(d, p) {
      return pad(d.getMinutes(), p, 2);
    }
    function formatSeconds(d, p) {
      return pad(d.getSeconds(), p, 2);
    }
    function formatWeekdayNumberMonday(d) {
      var day = d.getDay();
      return day === 0 ? 7 : day;
    }
    function formatWeekNumberSunday(d, p) {
      return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
    }
    function dISO(d) {
      var day = d.getDay();
      return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
    }
    function formatWeekNumberISO(d, p) {
      d = dISO(d);
      return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
    }
    function formatWeekdayNumberSunday(d) {
      return d.getDay();
    }
    function formatWeekNumberMonday(d, p) {
      return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
    }
    function formatYear(d, p) {
      return pad(d.getFullYear() % 100, p, 2);
    }
    function formatYearISO(d, p) {
      d = dISO(d);
      return pad(d.getFullYear() % 100, p, 2);
    }
    function formatFullYear(d, p) {
      return pad(d.getFullYear() % 10000, p, 4);
    }
    function formatFullYearISO(d, p) {
      var day = d.getDay();
      d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
      return pad(d.getFullYear() % 10000, p, 4);
    }
    function formatZone(d) {
      var z = d.getTimezoneOffset();
      return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
    }
    function formatUTCDayOfMonth(d, p) {
      return pad(d.getUTCDate(), p, 2);
    }
    function formatUTCHour24(d, p) {
      return pad(d.getUTCHours(), p, 2);
    }
    function formatUTCHour12(d, p) {
      return pad(d.getUTCHours() % 12 || 12, p, 2);
    }
    function formatUTCDayOfYear(d, p) {
      return pad(1 + utcDay.count(utcYear(d), d), p, 3);
    }
    function formatUTCMilliseconds(d, p) {
      return pad(d.getUTCMilliseconds(), p, 3);
    }
    function formatUTCMicroseconds(d, p) {
      return formatUTCMilliseconds(d, p) + "000";
    }
    function formatUTCMonthNumber(d, p) {
      return pad(d.getUTCMonth() + 1, p, 2);
    }
    function formatUTCMinutes(d, p) {
      return pad(d.getUTCMinutes(), p, 2);
    }
    function formatUTCSeconds(d, p) {
      return pad(d.getUTCSeconds(), p, 2);
    }
    function formatUTCWeekdayNumberMonday(d) {
      var dow = d.getUTCDay();
      return dow === 0 ? 7 : dow;
    }
    function formatUTCWeekNumberSunday(d, p) {
      return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
    }
    function UTCdISO(d) {
      var day = d.getUTCDay();
      return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
    }
    function formatUTCWeekNumberISO(d, p) {
      d = UTCdISO(d);
      return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
    }
    function formatUTCWeekdayNumberSunday(d) {
      return d.getUTCDay();
    }
    function formatUTCWeekNumberMonday(d, p) {
      return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
    }
    function formatUTCYear(d, p) {
      return pad(d.getUTCFullYear() % 100, p, 2);
    }
    function formatUTCYearISO(d, p) {
      d = UTCdISO(d);
      return pad(d.getUTCFullYear() % 100, p, 2);
    }
    function formatUTCFullYear(d, p) {
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }
    function formatUTCFullYearISO(d, p) {
      var day = d.getUTCDay();
      d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
      return pad(d.getUTCFullYear() % 10000, p, 4);
    }
    function formatUTCZone() {
      return "+0000";
    }
    function formatLiteralPercent() {
      return "%";
    }
    function formatUnixTimestamp(d) {
      return +d;
    }
    function formatUnixTimestampSeconds(d) {
      return Math.floor(+d / 1000);
    }

    var locale;
    var timeFormat$1;
    var timeParse$1;
    var utcFormat;
    var utcParse;
    defaultLocale({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    function defaultLocale(definition) {
      locale = formatLocale(definition);
      timeFormat$1 = locale.format;
      timeParse$1 = locale.parse;
      utcFormat = locale.utcFormat;
      utcParse = locale.utcParse;
      return locale;
    }

    var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
    function formatIsoNative(date) {
      return date.toISOString();
    }
    Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

    function parseIsoNative(string) {
      var date = new Date(string);
      return isNaN(date) ? null : date;
    }
    var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

    function date(t) {
      return new Date(t);
    }
    function number(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
      var scale = continuous(),
        invert = scale.invert,
        domain = scale.domain;
      var formatMillisecond = format(".%L"),
        formatSecond = format(":%S"),
        formatMinute = format("%I:%M"),
        formatHour = format("%I %p"),
        formatDay = format("%a %d"),
        formatWeek = format("%b %d"),
        formatMonth = format("%B"),
        formatYear = format("%Y");
      function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
      }
      scale.invert = function (y) {
        return new Date(invert(y));
      };
      scale.domain = function (_) {
        return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
      };
      scale.ticks = function (interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
      };
      scale.tickFormat = function (count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
      };
      scale.nice = function (interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain(nice(d, interval)) : scale;
      };
      scale.copy = function () {
        return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
      };
      return scale;
    }
    function time() {
      return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat$1).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
    }

    // second, minute, hour, day, week, month, quarter, year
    const aggregateFormats = {
      second: '%Y-%m-%d %H:%M:%S',
      minute: '%Y-%m-%d %H:%M',
      hour: '%Y-%m-%d %H:00',
      day: '%Y-%m-%d',
      week: '%Y week %W',
      month: '%Y-%m',
      quarter: '%Y-Q%Q',
      year: '%Y'
    };

    function api (methods) {
      function methodChainer(wrapper, method) {
        return d => {
          method(d);
          return wrapper;
        };
      }
      return Object.keys(methods).reduce((API, methodName) => {
        API[methodName] = methodChainer(API, methods[methodName]);
        return API;
      }, {});
    }

    const cssPrefix = 'milestones';
    const cssCategoryClass = cssPrefix + '__category_label';
    const cssHorizontalLineClass = cssPrefix + '__horizontal_line';
    const cssVerticalLineClass = cssPrefix + '__vertical_line';
    const cssGroupClass = cssPrefix + '__group';
    const cssBulletClass = cssGroupClass + '__bullet';
    const cssLabelClass = cssGroupClass + '__label';
    const cssLastClass = cssLabelClass + '-last';
    const cssAboveClass = cssLabelClass + '-above';
    const cssTextClass = cssLabelClass + '__text';
    const cssTitleClass = cssTextClass + '__title';
    const cssEventClass = cssTextClass + '__event';
    const cssEventHoverClass = cssEventClass + '--hover';

    const DEFAULTS = {
      DISTRIBUTION: 'top-bottom',
      OPTIMIZE: false,
      ORIENTATION: 'horizontal',
      SCALE_TYPE: 'time',
      MAPPING: {
        category: undefined,
        entries: undefined,
        timestamp: 'timestamp',
        // Used only for time based scales
        value: 'value',
        // Used only for ordinal scale values
        text: 'text',
        url: 'url',
        id: 'id',
        textStyle: 'textStyle',
        titleStyle: 'titleStyle'
      },
      LABEL_FORMAT: '%Y-%m-%d %H:%M',
      USE_LABELS: true,
      AGGREGATE_BY: 'minute',
      AUTO_RESIZE: true,
      URL_TARGET: '_self'
    };

    function isAbove(i, distribution) {
      let above = i % 2;
      if (distribution === 'top') {
        above = true;
      } else if (distribution === 'bottom') {
        above = false;
      }
      return above > 0;
    }

    var prefix = "$";
    function Map$1() {}
    Map$1.prototype = map.prototype = {
      constructor: Map$1,
      has: function (key) {
        return prefix + key in this;
      },
      get: function (key) {
        return this[prefix + key];
      },
      set: function (key, value) {
        this[prefix + key] = value;
        return this;
      },
      remove: function (key) {
        var property = prefix + key;
        return property in this && delete this[property];
      },
      clear: function () {
        for (var property in this) if (property[0] === prefix) delete this[property];
      },
      keys: function () {
        var keys = [];
        for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
        return keys;
      },
      values: function () {
        var values = [];
        for (var property in this) if (property[0] === prefix) values.push(this[property]);
        return values;
      },
      entries: function () {
        var entries = [];
        for (var property in this) if (property[0] === prefix) entries.push({
          key: property.slice(1),
          value: this[property]
        });
        return entries;
      },
      size: function () {
        var size = 0;
        for (var property in this) if (property[0] === prefix) ++size;
        return size;
      },
      empty: function () {
        for (var property in this) if (property[0] === prefix) return false;
        return true;
      },
      each: function (f) {
        for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
      }
    };
    function map(object, f) {
      var map = new Map$1();

      // Copy constructor.
      if (object instanceof Map$1) object.each(function (value, key) {
        map.set(key, value);
      });

      // Index array by numeric index or specified key function.
      else if (Array.isArray(object)) {
        var i = -1,
          n = object.length,
          o;
        if (f == null) while (++i < n) map.set(i, object[i]);else while (++i < n) map.set(f(o = object[i], i, object), o);
      }

      // Convert object to map.
      else if (object) for (var key in object) map.set(key, object[key]);
      return map;
    }

    function nest () {
      var keys = [],
        sortKeys = [],
        sortValues,
        rollup,
        nest;
      function apply(array, depth, createResult, setResult) {
        if (depth >= keys.length) {
          if (sortValues != null) array.sort(sortValues);
          return rollup != null ? rollup(array) : array;
        }
        var i = -1,
          n = array.length,
          key = keys[depth++],
          keyValue,
          value,
          valuesByKey = map(),
          values,
          result = createResult();
        while (++i < n) {
          if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
            values.push(value);
          } else {
            valuesByKey.set(keyValue, [value]);
          }
        }
        valuesByKey.each(function (values, key) {
          setResult(result, key, apply(values, depth, createResult, setResult));
        });
        return result;
      }
      function entries(map, depth) {
        if (++depth > keys.length) return map;
        var array,
          sortKey = sortKeys[depth - 1];
        if (rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
          array.push({
            key: k,
            values: entries(v, depth)
          });
        });
        return sortKey != null ? array.sort(function (a, b) {
          return sortKey(a.key, b.key);
        }) : array;
      }
      return nest = {
        object: function (array) {
          return apply(array, 0, createObject, setObject);
        },
        map: function (array) {
          return apply(array, 0, createMap, setMap);
        },
        entries: function (array) {
          return entries(apply(array, 0, createMap, setMap), 0);
        },
        key: function (d) {
          keys.push(d);
          return nest;
        },
        sortKeys: function (order) {
          sortKeys[keys.length - 1] = order;
          return nest;
        },
        sortValues: function (order) {
          sortValues = order;
          return nest;
        },
        rollup: function (f) {
          rollup = f;
          return nest;
        }
      };
    }
    function createObject() {
      return {};
    }
    function setObject(object, key, value) {
      object[key] = value;
    }
    function createMap() {
      return map();
    }
    function setMap(map, key, value) {
      map.set(key, value);
    }

    function Set$1() {}
    var proto = map.prototype;
    Set$1.prototype = {
      constructor: Set$1,
      has: proto.has,
      add: function (value) {
        value += "";
        this[prefix + value] = value;
        return this;
      },
      remove: proto.remove,
      clear: proto.clear,
      values: proto.keys,
      size: proto.size,
      empty: proto.empty,
      each: proto.each
    };

    function getAttribute(d, attribute) {
      return parseInt(d.style[attribute].replace('px', ''), 10);
    }

    const labelRightMargin = 6;
    const getAvailableWidth = (aggregateFormatParse, currentNode, index, mapping, nestedData, nestedNode, nextCheck, nextGroupHeight, offset, offsetCheckAttribute, offsetAttribute, orientation, textMerge, width, x, useNext = true, scaleType = 'time' // Default to time scale if not provided
    ) => {
      // get the available width until the uber-next group
      let nextTestIndex = orientation === 'horizontal' && useNext ? index + nextCheck : index - nextCheck;
      let nextTestItem;
      do {
        if (orientation === 'horizontal' && useNext) {
          nextTestIndex += nextCheck;
        } else {
          nextTestIndex -= nextCheck;
        }
        nextTestItem = textMerge._groups[nextTestIndex];
        if (typeof nextTestItem === 'undefined') {
          break;
        }
      } while (nextGroupHeight >= nextTestItem[0][offsetAttribute]);
      let uberNextItem;
      if (typeof mapping.category === 'undefined') {
        uberNextItem = nestedData[nestedNode.timelineIndex][nextTestIndex];
      } else {
        uberNextItem = nestedData[nestedNode.timelineIndex].entries[nextTestIndex];
      }
      let availableWidth = getAttribute(currentNode, offsetCheckAttribute);
      if (typeof uberNextItem !== 'undefined') {
        const value = scaleType === 'ordinal' ? uberNextItem.key : aggregateFormatParse(uberNextItem.key);
        const offsetUberNextItem = x(value);
        if (orientation === 'horizontal' & useNext) {
          availableWidth = offsetUberNextItem - offset - labelRightMargin;
        } else if (orientation === 'horizontal' & !useNext) {
          availableWidth = offsetUberNextItem - labelRightMargin;
        } else {
          availableWidth = offset - offsetUberNextItem - labelRightMargin;
        }
      } else {
        if (orientation === 'horizontal' & useNext) {
          availableWidth = width - offset - labelRightMargin;
        } else if (orientation === 'horizontal' & !useNext) {
          availableWidth = offset - labelRightMargin;
        } else {
          availableWidth = offset - labelRightMargin;
        }
      }
      if (nextCheck < 0) {
        return Math.min(offset, availableWidth);
      } else {
        return availableWidth;
      }
    };

    const getNextGroup = (orientation, nodes, index, nextCheck) => {
      const nextGroup = orientation === 'horizontal' ? nodes[index + nextCheck] : nodes[index - nextCheck];
      return nextGroup;
    };
    const getNextGroupHeight = (index, nextCheck, nodes, offsetAttribute, orientation) => {
      // get the height of the next group
      const defaultPadding = 3;
      const nextGroup = getNextGroup(orientation, nodes, index, nextCheck);
      let nextGroupHeight = 0;
      if (typeof nextGroup !== 'undefined') {
        nextGroupHeight = nextGroup[0][offsetAttribute] + defaultPadding;
      }
      return nextGroupHeight;
    };

    const MAX_OPTIMIZER_RUNS = 20;
    const getIntValueFromPxAttribute = (domElement, attribute) => {
      return parseInt(domElement.style(attribute).replace('px', ''), 10);
    };
    const getParentElement = domElement => domElement.select(function () {
      return this.parentNode;
    });
    const isSameDistribution = (index, nextCheck, overlapCheckIndex) => {
      const itemRowCheck = index % nextCheck;
      const distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;
      return distributionCheck !== 0;
    };
    const optimize = (aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, widthAttribute, x, scaleType = 'time' // Default to time scale if not provided
    ) => {
      const nestedNodes = nest().key(d => {
        return selectAll(d).data()[0].timelineIndex;
      }).entries(textMerge._groups);
      const nextCheck = distribution === 'top-bottom' ? 2 : 1;
      const runOptimizer = optimizerRuns => {
        let updated = 0;
        nestedNodes.forEach(d => {
          const nodes = d.values;
          nodes.forEach(node => {
            const d = selectAll(node).data()[0];
            const offsetComparator = orientation === 'horizontal' ? 60 : 20;
            const index = orientation === 'horizontal' ? nodes.length - d.index - 1 : d.index;
            const item = selectAll(nodes[index]).data()[0];
            const value = scaleType === 'ordinal' ? item.key : aggregateFormatParse(item.key);
            const offset = x(value);
            const currentNode = nodes[index][0];
            let isLast = index === nodes.length - 1;
            if (!isLast && distribution === 'top-bottom') {
              isLast = index === nodes.length - 2 && width - offset < 60;
            }
            const scrollCheckAttribute = orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';
            const offsetCheckAttribute = orientation === 'horizontal' ? 'width' : 'height';
            const offsetCheck = getAttribute(currentNode, offsetCheckAttribute);
            const domElement = selectAll(nodes[index]);
            let backwards = isLast ? true : getParentElement(domElement).classed(cssLastClass);
            const offsetAttribute = orientation === 'horizontal' ? 'offsetHeight' : 'offsetWidth';
            const paddingAbove = orientation === 'horizontal' ? 'padding-bottom' : 'padding-right';
            const paddingBelow = orientation === 'horizontal' ? 'padding-top' : 'padding-left';
            const padding = isAbove(index, distribution) ? paddingAbove : paddingBelow;
            const overflow = backwards ? offset - offsetCheck < 0 : offset + offsetCheck > width;

            // Because on a resize a previous optimization could already have
            // repositioned items, we reset them on the first optimizer run
            if (optimizerRuns === 0) {
              backwards = isLast ? true : overflow;
              domElement.style(padding, '0px');
              getParentElement(domElement).classed(cssLastClass, backwards);
            }
            if (currentNode[scrollCheckAttribute] > offsetCheck || offsetCheck < offsetComparator || backwards || overflow) {
              let availableWidth = null;
              let runs = 0;
              let nextCheckIterator = orientation === 'horizontal' ? nextCheck - 1 : nextCheck + 1;
              do {
                if (orientation === 'horizontal') {
                  nextCheckIterator++;
                } else {
                  nextCheckIterator--;
                }
                runs++;
                if (nextCheckIterator > 0) {
                  const nextGroupHeight = getNextGroupHeight(index, nextCheck, nodes, offsetAttribute, orientation);
                  const previousGroupHeight = orientation === 'horizontal' ? getNextGroupHeight(index, nextCheck * -1, nodes, offsetAttribute, orientation) : nextGroupHeight;
                  let useNext = nextGroupHeight <= previousGroupHeight && !isLast;
                  if (!useNext && !isLast) {
                    useNext = offset < offsetComparator;
                  }
                  let groupHeight = useNext ? nextGroupHeight : previousGroupHeight;
                  if (isLast) {
                    groupHeight = 0;
                  }
                  const check = useNext ? nextCheck : nextCheck * -1;
                  domElement.style(padding, groupHeight + 'px');
                  getParentElement(domElement).classed(cssLastClass, !useNext);
                  availableWidth = getAvailableWidth(aggregateFormatParse, currentNode, index, mapping, nestedData, d, check, groupHeight, offset, offsetCheckAttribute, offsetAttribute, orientation, textMerge, width, x, useNext, scaleType // Pass scale type to getAvailableWidth
                  );
                }
              } while (availableWidth < currentNode[scrollCheckAttribute] && runs < MAX_OPTIMIZER_RUNS);
              if (orientation === 'horizontal') {
                availableWidth = Math.min(labelMaxWidth, availableWidth);
              }

              // because labels could be left or right aligned,
              // we shrink the available width to the inner text width
              // so labels facing each other will require less space.
              domElement.style(widthAttribute, availableWidth + 'px');
              const innerWidth = getIntValueFromPxAttribute(domElement.select('.wrapper'), 'width');
              if (innerWidth < availableWidth) {
                availableWidth = innerWidth + 6;
                domElement.style(widthAttribute, availableWidth + 'px');
              }
              if (optimizerRuns > 0 && orientation === 'horizontal') {
                const itemWidth = getIntValueFromPxAttribute(domElement, 'width');
                const checkOffset = backwards ? offset - itemWidth : offset + itemWidth;
                nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
                  const overlapCheckItem = selectAll(overlapCheckNode).data()[0];
                  if (overlapCheckItem.key === item.key || isSameDistribution(index, nextCheck, overlapCheckIndex)) {
                    return;
                  }
                  const overlapValue = scaleType === 'ordinal' ? overlapCheckItem.key : aggregateFormatParse(overlapCheckItem.key);
                  let overlapCheckOffset = x(overlapValue) - 5;
                  const overlapItemOffsetAnchor = overlapCheckOffset;
                  const overlapCheckDomElement = selectAll(nodes[overlapCheckIndex]);
                  const overlapCheckBackwards = getParentElement(overlapCheckDomElement).classed(cssLastClass);
                  if (backwards && !overlapCheckBackwards) {
                    const overlapCheckItemWidth = getIntValueFromPxAttribute(overlapCheckDomElement, 'width');
                    overlapCheckOffset = overlapCheckOffset + overlapCheckItemWidth + 5;
                  }
                  if (!backwards && overlapCheckBackwards) {
                    const overlapCheckItemWidth = getIntValueFromPxAttribute(overlapCheckDomElement, 'width');
                    overlapCheckOffset = overlapCheckOffset - overlapCheckItemWidth - 5;
                  }
                  const overlapCheck1 = backwards ? overlapCheckOffset > checkOffset : checkOffset > overlapItemOffsetAnchor;
                  const overlapCheck2 = backwards ? overlapItemOffsetAnchor < offset : overlapItemOffsetAnchor > offset;
                  if (overlapCheck1 && overlapCheck2) {
                    const overlapCheckHeight = overlapCheckNode[0][offsetAttribute];
                    const itemPadding = getIntValueFromPxAttribute(domElement, padding);
                    if (itemPadding < overlapCheckHeight) {
                      // offsetComparator
                      // find out if there's enough place to get rid of overlap
                      // by adjusted the items width
                      const checkWidth = backwards ? overlapCheckOffset - checkOffset : checkOffset - overlapItemOffsetAnchor;
                      const currentWidth = getIntValueFromPxAttribute(domElement, widthAttribute);
                      const reducedWidth = currentWidth - checkWidth - 6;
                      if (reducedWidth > offsetComparator) {
                        availableWidth = Math.min(availableWidth, reducedWidth);
                        domElement.style(widthAttribute, `${availableWidth}px`);
                      } else {
                        domElement.style(padding, `${overlapCheckHeight + 5}px`);
                      }
                      updated++;
                    }
                  }
                });

                // The optimizer might push all labels too far up. If all labels
                // have a minimum padding of more than 0, we'll shrink all offsets
                // back so the label with the smallest padding ends up directly
                // at the timeline.

                let minPadding = Number.POSITIVE_INFINITY;
                nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
                  const checkSameOrientation = isAbove(overlapCheckIndex, distribution) ? paddingAbove : paddingBelow;
                  if (checkSameOrientation !== padding) {
                    return;
                  }
                  const overlapCheckDomElement = selectAll(nodes[overlapCheckIndex]);
                  const itemPadding = getIntValueFromPxAttribute(overlapCheckDomElement, padding);
                  minPadding = Math.min(minPadding, itemPadding);
                });
                if (minPadding > 0) {
                  nodes.forEach((overlapCheckNode, overlapCheckIndex) => {
                    const itemRowCheck = index % nextCheck;
                    const distributionCheck = (overlapCheckIndex + itemRowCheck) % nextCheck;
                    if (distributionCheck !== 0) {
                      return;
                    }
                    const overlapCheckDomElement = selectAll(nodes[overlapCheckIndex]);
                    const itemPadding = getIntValueFromPxAttribute(overlapCheckDomElement, padding);
                    overlapCheckDomElement.style(padding, `${itemPadding - minPadding}px`);
                  });
                }
              }
            }
          });
        });
        return updated;
      };
      let optimizerRuns = 0;
      let updated = 0;
      do {
        updated = runOptimizer(optimizerRuns);
        optimizerRuns++;

        // make sure we run a second optimizer call
        if (optimizerRuns === 1) {
          updated = 1;
        }
      } while (optimizerRuns < MAX_OPTIMIZER_RUNS && updated > 0);
    };

    function timeFormat(f) {
      if (f === '%Y-Q%Q') {
        const quarterFormatter = timeFormat$1(aggregateFormats.month);
        return d => {
          const formattedDate = quarterFormatter(d);
          const month = formattedDate.split('-')[1];
          const quarter = Math.ceil(parseInt(month) / 3);
          return formattedDate.split('-')[0] + '-Q' + quarter;
        };
      }
      return timeFormat$1(f);
    }

    function timeParse(f) {
      if (f === '%Y-Q%Q') {
        const quarterParser = timeParse$1(aggregateFormats.month);
        return d => {
          if (d.search('-Q') === -1) {
            const quarter = Math.ceil(parseInt(d.split('-')[1]) / 3);
            const quarterFirstMonthAsString = quarter * 3 - 2 + '';
            const quarterFirstMonthLeadingZero = quarterFirstMonthAsString.length < 2 ? '0' + quarterFirstMonthAsString : quarterFirstMonthAsString;
            return quarterParser(d.split('-')[0] + '-' + quarterFirstMonthLeadingZero);
          } else {
            const monthAsString = parseInt(d.split('-')[1][1]) * 3 + '';
            const monthLeadingZero = monthAsString.length < 2 ? '0' + monthAsString : monthAsString;
            return quarterParser(d.split('-')[0] + '-' + monthLeadingZero);
          }
        };
      }
      return timeParse$1(f);
    }

    function transform(aggregateFormat, data, mapping, parseTime, scaleType = 'time') {
      // Choose grouping function based on scale type
      const groupBy = function (d) {
        if (scaleType === 'ordinal') {
          // For ordinal scales, use the value field directly
          return d[mapping.value];
        } else {
          // For time scales, use the timestamp with formatting
          return aggregateFormat(parseTime(d[mapping.timestamp]));
        }
      };

      // test for different data structures
      if (typeof mapping.category !== 'undefined' && typeof mapping.entries !== 'undefined') {
        data = data.map((timeline, timelineIndex) => {
          return {
            category: timeline[mapping.category],
            entries: getNestedEntries(timeline[mapping.entries], timelineIndex)
          };
        });
        return data;
      } else if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
        data = [data];
      }
      function getNestedEntries(t, tI) {
        // For ordinal scales, we need to preserve the original order
        // For time scales, we want to sort by time (ascending)
        const nested = scaleType === 'ordinal' ? nest().key(groupBy).entries(t) // Don't sort keys for ordinal scale
        : nest().key(groupBy).sortKeys(ascending).entries(t);

        // Save original data order for ordinal scales
        if (scaleType === 'ordinal') {
          // Create a map of original positions
          const originalPositions = {};
          t.forEach((item, index) => {
            const key = groupBy(item);
            if (!originalPositions[key] && originalPositions[key] !== 0) {
              originalPositions[key] = index;
            }
          });

          // Sort the nested entries by their original position
          nested.sort((a, b) => {
            return (originalPositions[a.key] || 0) - (originalPositions[b.key] || 0);
          });
        }
        return nested.map((d, dI) => {
          d.index = dI;
          d.timelineIndex = tI;
          d.scaleType = scaleType; // Pass the scale type to the data object
          return d;
        });
      }
      return data.map((t, tI) => getNestedEntries(t, tI));
    }

    function milestones(selector) {
      let distribution = DEFAULTS.DISTRIBUTION;
      function setDistribution(d) {
        distribution = d;
      }
      let optimizeLayout = DEFAULTS.OPTIMIZE;
      function setOptimizeLayout(d) {
        optimizeLayout = d;
      }
      let orientation = DEFAULTS.ORIENTATION;
      function setOrientation(d) {
        orientation = d;
        // purge the DOM to avoid layout issues when switching orientation
        select(selector).html('');
      }
      let scaleType = DEFAULTS.SCALE_TYPE;
      function setScaleType(d) {
        if (d === 'time' || d === 'ordinal') {
          scaleType = d;
          // purge the DOM to avoid layout issues when switching scale type
          select(selector).html('');
        }
      }
      let parseTime = parseIso;
      function setParseTime(d) {
        parseTime = timeParse(d);
      }
      let mapping = Object.assign({}, DEFAULTS.MAPPING);
      function assignMapping(d) {
        mapping = Object.assign({}, mapping, d);
      }
      let labelFormat;
      function setLabelFormat(d) {
        labelFormat = timeFormat(d);
      }
      setLabelFormat(DEFAULTS.LABEL_FORMAT);
      let range;
      function setRange(d) {
        if (Array.isArray(d) && d.length == 2) {
          range = d;
        }
      }
      let useLabels;
      function setUseLabels(d) {
        useLabels = d;
      }
      setUseLabels(DEFAULTS.USE_LABELS);
      let urlTarget;
      function setUrlTarget(d) {
        if (typeof d === 'string' && ['_blank', '_self', '_parent', '_top'].includes(d.toLowerCase())) {
          urlTarget = d;
        }
      }
      setUrlTarget(DEFAULTS.URL_TARGET);

      // set callback for event mouseover
      let callBackMouseOver;
      function setEventMouseOverCallback(callback) {
        callBackMouseOver = callback;
      }
      function eventMouseOver(d) {
        if (typeof callBackMouseOver === 'function') {
          select(this).classed(cssEventHoverClass, true);
          callBackMouseOver(d);
        }
        return d;
      }

      // set callback for event mouseleave
      let callBackMouseLeave;
      function setEventMouseLeaveCallback(callback) {
        callBackMouseLeave = callback;
      }
      function eventMouseLeave(d) {
        if (typeof callBackMouseOver === 'function') {
          select(this).classed(cssEventHoverClass, false);
          callBackMouseLeave(d);
        }
        return d;
      }

      // set callback for event click
      let callbackClick;
      function setEventClickCallback(callback) {
        callbackClick = callback;
      }
      function eventClick(d) {
        if (typeof callbackClick === 'function') {
          callbackClick(d);
        }
        return d;
      }

      // set callback for post-render operations
      let callbackRender;
      function renderCallback(callback) {
        callbackRender = callback;
      }
      let aggregateFormat = timeFormat(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
      let aggregateFormatParse = timeParse(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
      function setAggregateBy(d) {
        aggregateFormat = timeFormat(aggregateFormats[d]);
        aggregateFormatParse = timeParse(aggregateFormats[d]);
        setLabelFormat(aggregateFormats[d]);
      }
      const autoResize = {
        current: DEFAULTS.AUTO_RESIZE
      };
      const resizeHandler = () => {
        if (select(selector).node() !== null) {
          window.requestAnimationFrame(() => {
            if (autoResize.current) {
              render(); // Render without data parameter to re-render existing data
            }
          });
        }
      };
      const resizeObserver = new ResizeObserver(resizeHandler);
      resizeObserver.observe(typeof selector === 'string' ? document.querySelector(selector) : selector);
      function setAutoResize(d) {
        autoResize.current = d;
      }
      function render(data) {
        // Simple render method with a single data parameter

        const widthAttribute = orientation === 'horizontal' ? 'width' : 'height';
        const marginTimeAttribute = orientation === 'horizontal' ? 'margin-left' : 'margin-top';
        const cssLineClass = orientation === 'horizontal' ? cssHorizontalLineClass : cssVerticalLineClass;
        const labelMaxWidth = orientation === 'horizontal' ? 180 : 100;
        const timelineSelection = select(selector).selectAll('.' + cssPrefix);
        const nestedData = typeof data !== 'undefined' ? transform(aggregateFormat, data, mapping, parseTime, scaleType) : timelineSelection.data();
        const timeline = timelineSelection.data(nestedData);
        const timelineEnter = timeline.enter().append('div').attr('class', cssPrefix);
        timeline.exit().remove();

        // rightMargin compensates for the right most bullet position
        const rightMargin = 11;
        const selectorWidth = parseFloat(select(selector).style(widthAttribute)) - rightMargin;
        if (typeof mapping.category !== 'undefined') {
          timelineEnter.append('div').attr('class', cssCategoryClass).text(d => d.category);
          timelineEnter.append('div').attr('class', 'data-js-timeline').append('div').attr('class', cssLineClass);
        } else {
          timelineEnter.append('div').attr('class', cssLineClass);
        }
        const timelineMerge = timeline.merge(timelineEnter);
        const categoryLabelWidths = [];
        const categoryLabels = timelineMerge.selectAll('.' + cssCategoryClass);
        categoryLabels.each((d, i, node) => {
          categoryLabelWidths.push(node[i].offsetWidth);
        });
        const maxCategoryLabelWidth = Math.round(max(categoryLabelWidths) || 0);
        const timelineLeftMargin = 10;
        const width = selectorWidth - maxCategoryLabelWidth - timelineLeftMargin;
        categoryLabels.style('width', maxCategoryLabelWidth + 'px');
        if (orientation === 'vertical') {
          categoryLabels.style('margin-left', '-50%');
          categoryLabels.style('text-align', 'center');
        }
        timelineMerge.selectAll('.data-js-timeline').style(marginTimeAttribute, maxCategoryLabelWidth + timelineLeftMargin + 'px');
        timelineMerge.selectAll('.' + cssLineClass).style(widthAttribute, width + 'px');
        const groupSelector = typeof mapping.category === 'undefined' ? timelineMerge : timelineMerge.selectAll('.data-js-timeline');
        const groupSelection = groupSelector.selectAll('.' + cssGroupClass);
        const group = groupSelection.data(d => {
          return typeof mapping.category === 'undefined' ? d : d.entries;
        });
        const allKeys = nestedData.reduce((keys, timeline) => {
          const t = typeof mapping.category === 'undefined' ? timeline : timeline.entries;
          t.map(d => keys.push(d.key));
          return keys;
        }, []);
        const domain = typeof range !== 'undefined' ? range.map(aggregateFormatParse) : extent(allKeys, d => aggregateFormatParse(d));

        // Create the appropriate scale based on scaleType
        const x = scaleType === 'ordinal' ? point().range([0, width]).domain(allKeys) // Keep original order for ordinal scales
        : time().rangeRound([0, width])
        // sets oldest and newest date as the scales domain
        .domain(domain);
        const groupEnter = group.enter().append('div').attr('class', cssGroupClass);
        group.exit().remove();
        groupEnter.append('div').attr('class', cssBulletClass);
        const groupMerge = groupEnter.merge(group).style(marginTimeAttribute, d => {
          // For ordinal scale, use the key directly; for time scale, parse it
          d.scaleType = scaleType; // Ensure scale type is passed to data
          const value = scaleType === 'ordinal' ? d.key : aggregateFormatParse(d.key);
          return x(value) + 'px';
        });
        if (useLabels) {
          const label = groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).data(d => [d]);
          const labelMerge = label.enter().append('div').attr('class', cssLabelClass + '-' + orientation).merge(label)
          // .classed(cssLastClass, (d) => {
          //   const mostRightPosition = Math.round(x.range()[1]);
          //   const currentPosition = x(aggregateFormatParse(d.key));
          //   return (
          //     mostRightPosition === currentPosition &&
          //     orientation === 'horizontal'
          //   );
          // })
          .classed(cssAboveClass + '-' + orientation, d => isAbove(d.index, distribution));
          const text = labelMerge.selectAll('.' + cssTextClass + '-' + orientation).data(d => [d]);
          const textEnter = text.enter().append('div').attr('class', cssTextClass + '-' + orientation).merge(text).style(widthAttribute, d => {
            // calculate the available width
            d.scaleType = scaleType; // Ensure scale type is passed to data
            const value = scaleType === 'ordinal' ? d.key : aggregateFormatParse(d.key);
            const offset = x(value);
            // get the next and previous item on the same lane
            let nextItem;
            let previousItem;
            let itemNumTotal;
            const itemNum = d.index + 1;
            const nextCheck = distribution === 'top-bottom' ? 2 : 1;
            if (typeof mapping.category === 'undefined') {
              nextItem = nestedData[d.timelineIndex][d.index + nextCheck];
              previousItem = nestedData[d.timelineIndex][d.index - nextCheck];
              itemNumTotal = nestedData[d.timelineIndex].length;
            } else {
              nextItem = nestedData[d.timelineIndex].entries[d.index + nextCheck];
              previousItem = nestedData[d.timelineIndex].entries[d.index - nextCheck];
              itemNumTotal = nestedData[d.timelineIndex].entries.length;
            }
            let availableWidth;
            const compareItem1 = orientation === 'horizontal' ? nextItem : previousItem;
            const compareItem2 = orientation === 'horizontal' ? previousItem : nextItem;
            if (typeof compareItem1 !== 'undefined') {
              // Pass scale type to next item
              compareItem1.scaleType = scaleType;
              const nextValue = scaleType === 'ordinal' ? compareItem1.key : aggregateFormatParse(compareItem1.key);
              const offsetNextItem = x(nextValue);
              availableWidth = orientation === 'horizontal' ? offsetNextItem - offset : offset - offsetNextItem;
              if (itemNumTotal - itemNum === 2) {
                availableWidth /= 2;
              }
            } else {
              if (itemNumTotal - itemNum === 1) {
                availableWidth = orientation === 'horizontal' ? width - offset : offset;
              } else if (itemNumTotal - itemNum === 0) {
                if (typeof compareItem2 !== 'undefined') {
                  // Pass scale type to previous item
                  compareItem2.scaleType = scaleType;
                  const prevValue = scaleType === 'ordinal' ? compareItem2.key : aggregateFormatParse(compareItem2.key);
                  const offsetPreviousItem = x(prevValue);
                  availableWidth = orientation === 'horizontal' ? (width - offsetPreviousItem) / 2 : offsetPreviousItem / 2;
                } else {
                  availableWidth = width;
                }
              }
            }
            const labelRightMargin = 6;
            const availableWidthWithMargin = Math.max(0, availableWidth - labelRightMargin);
            const finalWidth = Math.min(orientation === 'horizontal' ? labelMaxWidth : availableWidthWithMargin, availableWidthWithMargin);
            return finalWidth + 'px';
          }).each(function (d) {
            const above = isAbove(d.index, distribution);
            const wrapper = select(this);
            wrapper.html(null);
            const titleStyle = d.values.reduce((p, c) => {
              if (c[mapping.titleStyle] !== undefined) {
                return Object.assign(p, c[mapping.titleStyle]);
              }
              return p;
            }, {});
            const element = wrapper.append('div').classed('wrapper', true);
            if (!above || orientation === 'vertical') {
              const titleSpan = element.append('span').classed(cssTitleClass, true);

              // Format label based on scale type
              if (scaleType === 'ordinal') {
                titleSpan.text(d.key);
              } else {
                titleSpan.text(labelFormat(aggregateFormatParse(d.key)));
              }
              Object.entries(titleStyle).forEach(([prop, val]) => titleSpan.style(prop, val));
              element.append('br');
            }
            d.values.map((v, i) => {
              if (i > 0) {
                element.append('br');
              }
              const textStyle = Object.assign({}, v[mapping.textStyle]);
              const t = v[mapping.text];
              let item;
              // test if text is an image filename,
              // if so return an image tag with the filename as the source
              if (['jpg', 'jpeg', 'gif', 'png', 'webp'].indexOf(t.split('.').pop()) > -1) {
                item = element.append('img').classed('milestones-label', true).classed('milestones-image-label', true).attr('height', '100').attr('src', t);
              } else if (v[mapping.url]) {
                item = element.append('a').classed('milestones-label', true).classed('milestones-link-label', true).attr('href', v[mapping.url]).attr('target', urlTarget).text(t);
              } else {
                item = element.append('span').classed('milestones-label', true).classed('milestones-text-label', true).text(t);
              }

              // Apply custom ID if provided
              if (v[mapping.id]) {
                item.attr('id', v[mapping.id]);
              }
              item.datum({
                text: v[mapping.text],
                timestamp: v[mapping.timestamp],
                attributes: v // original value of an object passed to the milestone
              });
              if (typeof callbackClick === 'function' || typeof callBackMouseLeave === 'function' || typeof callBackMouseOver === 'function') {
                item.classed(cssEventClass, true);
              }
              if (typeof callbackClick === 'function') {
                item.on('click', eventClick);
              }
              if (typeof callBackMouseLeave === 'function') {
                item.on('mouseleave', eventMouseLeave);
              }
              if (typeof callBackMouseOver === 'function') {
                item.on('mouseover', eventMouseOver);
              }
              Object.entries(textStyle).forEach(([prop, val]) => item.style(prop, val));
            });
            if (above && orientation === 'horizontal') {
              element.append('br');
              const titleSpan = element.append('span').classed(cssTitleClass, true);

              // Format label based on scale type
              if (scaleType === 'ordinal') {
                titleSpan.text(d.key);
              } else {
                titleSpan.text(labelFormat(aggregateFormatParse(d.key)));
              }
              Object.entries(titleStyle).forEach(([prop, val]) => titleSpan.style(prop, val));
            }
          });
          const textMerge = text.merge(textEnter);
          textMerge.style('padding-top', '0px').style('padding-bottom', '0px');
          if (optimizeLayout) {
            optimize(aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, widthAttribute, x, scaleType // Pass scale type to optimizer
            );
          }
        } else {
          groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).remove();
        }

        // finally, adjust offset, height and width of the whole timeline
        timelineMerge.each((d, i, node) => {
          const margin = 10;
          const maxAboveHeight = max(select(node[i]).selectAll('* .' + cssAboveClass + '-' + orientation)._groups[0], d => d.offsetHeight);
          const maxBelowHeight = max(select(node[i]).selectAll('* :not(.' + cssAboveClass + '-' + orientation + ')')._groups[0], d => d.offsetHeight);
          if (orientation === 'horizontal') {
            select(node[i]).style('margin-top', margin + (maxAboveHeight || 0) + 'px').style('height', margin + (maxBelowHeight || 0) + 'px');
          } else {
            const percent = typeof mapping.category !== 'undefined' ? Math.round(100 / (nestedData.length + 1)) * (i + 1) : '50';
            select(node[i]).style('margin-top', '50px').style('margin-left', percent + '%').style('position', 'absolute');
          }
        });

        // Execute render callback if provided
        if (typeof callbackRender === 'function') {
          callbackRender();
        }
      }
      return api({
        aggregateBy: setAggregateBy,
        mapping: assignMapping,
        optimize: setOptimizeLayout,
        autoResize: setAutoResize,
        orientation: setOrientation,
        distribution: setDistribution,
        scaleType: setScaleType,
        parseTime: setParseTime,
        labelFormat: setLabelFormat,
        urlTarget: setUrlTarget,
        useLabels: setUseLabels,
        range: setRange,
        render: render,
        renderCallback: renderCallback,
        onEventClick: setEventClickCallback,
        onEventMouseLeave: setEventMouseLeaveCallback,
        onEventMouseOver: setEventMouseOverCallback
      });
    }

    function styleInject(css, ref) {
      if (ref === void 0) ref = {};
      var insertAt = ref.insertAt;
      if (typeof document === 'undefined') {
        return;
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';
      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".milestones__category_label {\n  display: inline-block;\n  text-align: right;\n  font-size: 14px;\n  margin-top: -4px;\n}\n.milestones__horizontal_line {\n  position: absolute;\n  background-color: #000;\n  height: 3px;\n  margin-top: 4px;\n  margin-left: 5.5px;\n  border-radius: 1.5px;\n}\n.milestones__vertical_line {\n  position: absolute;\n  background-color: #000;\n  width: 3px;\n  margin-left: 4px;\n  margin-bottom: 5.5px;\n  border-radius: 1.5px;\n}\n.milestones__group {\n  position: absolute;\n  font-family: sans-serif;\n  font-size: 10px;\n}\n.milestones__group__bullet {\n  background-color: #fff;\n  border: 3px solid #333;\n  border-radius: 50%;\n  width: 0px;\n  height: 0px;\n  padding: 2.5px;\n}\n.milestones__group__label-horizontal,\n.milestones__group__label-vertical {\n  position: absolute;\n  padding: 0;\n  color: #666;\n}\n.milestones__group__label-horizontal {\n  border-left: 1px solid #000;\n  margin-left: 5px;\n}\n.milestones__group__label-horizontal div {\n  position: relative;\n  margin-left: 3px;\n  display: inline-block;\n}\n.milestones__group__label-vertical {\n  padding-left: 10px;\n  padding-bottom: 0px;\n  border-bottom: 1px solid #000;\n  margin-bottom: -5.5px;\n  margin-left: 10px;\n  bottom: 100%;\n  overflow: visible;\n}\n.milestones__group__label-vertical .wrapper {\n  min-width: 100px;\n  max-width: 300px;\n  border-left: 1px solid black;\n  border-bottom: 1px solid white;\n  margin-bottom: -1px;\n  padding-left: 5px;\n}\n.milestones__group__label-above-horizontal {\n  bottom: 100%;\n}\n.milestones__group__label-above-vertical {\n  padding-left: 0px;\n  padding-right: 10px;\n  right: 100%;\n  text-align: right;\n}\n.milestones__group__label-above-vertical .wrapper {\n  border-left: 0;\n  border-right: 1px solid black;\n  padding-left: 0px;\n  padding-right: 5px;\n}\n.milestones__group__label-last {\n  right: 100%;\n  border-left: 0;\n  border-right: 1px solid #000;\n  margin-left: 0;\n  margin-right: -6px;\n  text-align: right;\n}\n.milestones__group__label-last div {\n  margin-left: 0px;\n  margin-right: 3px;\n}\n.milestones__group__label__text-vertical {\n  display: table-cell;\n  vertical-align: bottom;\n}\n.milestones__group__label__text__title {\n  color: #000;\n  font-weight: bold;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.milestones__group__label__text__event {\n  cursor: pointer;\n}\n.milestones__group__label__text__event--hover {\n  background: #efefef;\n  color: #313131;\n}\n";
    styleInject(css_248z);

    var getDefaults = function () {
      return {
        aggregateBy: 'minute',
        optimize: false,
        autoResize: true,
        orientation: 'horizontal',
        distribution: 'top-bottom',
        scaleType: 'time',
        urlTarget: '_self',
        useLabels: true,
        data: []
      };
    };

    var milestonesMappingKeys = ['category', 'entries', 'timestamp',
    // Used for time scale
    'value',
    // Used for ordinal scale
    'text', 'url', 'textStyle', 'titleStyle'];
    var isPartialMapping = function (arg) {
      return typeof arg === 'object' && arg !== null && Object.keys(arg).every(function (d) {
        return milestonesMappingKeys.includes(d);
      });
    };
    var milestonesAggregateBy = ['second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'];
    var isAggregateBy = function (arg) {
      return typeof arg === 'string' && milestonesAggregateBy.includes(arg);
    };
    var milestonesOrientation = ['horizontal', 'vertical'];
    var isOrientation = function (arg) {
      return milestonesOrientation.includes(arg);
    };
    var milestonesDistribution = ['top-bottom', 'top', 'bottom'];
    var isDistribution = function (arg) {
      return milestonesDistribution.includes(arg);
    };
    var isRange = function (arg) {
      return Array.isArray(arg) && arg.length === 2 && arg.every(function (d) {
        return typeof d === 'number';
      });
    };
    var milestonesUrlTarget = ['_blank', '_self', '_parent', '_top'];
    var isUrlTarget = function (arg) {
      return milestonesUrlTarget.includes(arg);
    };
    var milestonesScaleType = ['time', 'ordinal'];
    var isScaleType = function (arg) {
      return milestonesScaleType.includes(arg);
    };

    /**
     * React Milestones Visualization
     */
    var Milestones = function (props) {
      var milestonesDivEl = reactExports.useRef(null);
      var _a = reactExports.useState(),
        vis = _a[0],
        setVis = _a[1];
      reactExports.useEffect(function () {
        if (milestonesDivEl.current !== null) {
          setVis(milestones(milestonesDivEl.current));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [milestonesDivEl.current]);
      reactExports.useEffect(function () {
        if (vis) {
          var _a = __assign(__assign({}, getDefaults()), props),
            aggregateBy = _a.aggregateBy,
            mapping = _a.mapping,
            optimize = _a.optimize,
            autoResize = _a.autoResize,
            orientation_1 = _a.orientation,
            distribution = _a.distribution,
            scaleType = _a.scaleType,
            parseTime = _a.parseTime,
            labelFormat = _a.labelFormat,
            urlTarget = _a.urlTarget,
            useLabels = _a.useLabels,
            range = _a.range,
            onEventClick = _a.onEventClick,
            onEventMouseLeave = _a.onEventMouseLeave,
            onEventMouseOver = _a.onEventMouseOver,
            renderCallback = _a.renderCallback,
            data = _a.data;
          isAggregateBy(aggregateBy) && vis.aggregateBy(aggregateBy);
          isPartialMapping(mapping) && vis.mapping(mapping);
          typeof optimize === 'boolean' && vis.optimize(optimize);
          typeof autoResize === 'boolean' && vis.autoResize(autoResize);
          isOrientation(orientation_1) && vis.orientation(orientation_1);
          isDistribution(distribution) && vis.distribution(distribution);
          isScaleType(scaleType) && vis.scaleType(scaleType);
          typeof parseTime === 'string' && vis.parseTime(parseTime);
          typeof labelFormat === 'string' && vis.labelFormat(labelFormat);
          isUrlTarget(urlTarget) && vis.urlTarget(urlTarget);
          typeof useLabels === 'boolean' && vis.useLabels(useLabels);
          isRange(range) && vis.range(range);
          typeof onEventClick === 'function' && vis.onEventClick(onEventClick);
          typeof onEventMouseLeave === 'function' && vis.onEventMouseLeave(onEventMouseLeave);
          typeof onEventMouseOver === 'function' && vis.onEventMouseOver(onEventMouseOver);
          typeof renderCallback === 'function' && vis.renderCallback(renderCallback);
          vis.render(data);
        }
      }, [vis, props]);
      return jsxRuntimeExports.jsx("div", {
        ref: milestonesDivEl
      });
    };

    console.log('Milestones example loading');
    var tempWindow = window;
    // Create a function to initialize the example that will be globally available
    tempWindow.initializeExample = function (props) {
      var appElement = document.getElementById('milestones-container');
      if (!appElement) {
        throw new Error('App element not found');
      }
      var root = clientExports.createRoot(appElement);
      root.render(jsxRuntimeExports.jsx(Milestones, __assign({}, props)));
    };

})();
//# sourceMappingURL=example_boilerplate.js.map
