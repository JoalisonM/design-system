var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./index-BonoolKb.js";
import { i as clsx, j as filterProps, w as withPath, k as constant$1, G as Global, l as isNumOrStr, m as isNumber, n as isNil, r as requireIsSymbol, p as requireIdentity, q as require_baseIteratee, s as require_baseMap, t as requireIsArray, u as require_arrayMap, v as require_baseFlatten, x as require_baseIsEqual, y as findChildByType, L as Legend, z as mathSign, D as isNan, E as uniqueId, F as sortBy, J as getDisplayName, K as getPercentValue, N as get, O as isFunction, Q as findAllByType, R as isString, U as upperFirst, V as isObject, W as isPercent, X as adaptEventHandlers, Y as require_overArg, Z as require_baseGetTag, _ as requireIsObjectLike, $ as Symbols, a0 as requireToNumber, a1 as require_isIterateeCall, a2 as require_baseEach, a3 as require_arraySome, a4 as require_defineProperty, a5 as require_baseForOwn, a6 as adaptEventsOfChild, a7 as interpolateNumber$2, a8 as requireIsArrayLike, a9 as requireKeys, aa as require_baseFindIndex, ab as requireMemoize, ac as getAnyElementOfObject, ad as warn, ae as shallowEqual, af as isChildrenEqual, ag as validateWidthHeight, ah as parseChildIndex, ai as findEntryInArray, aj as hasDuplicate, ak as Tooltip, al as Surface, am as renderByOrder, an as getReactEventByType, ao as throttle, ap as ChartContainer, a as Box, C as Card, H as Heading, T as Text$1, aq as ChartTooltip, ar as ChartTooltipContent, as as ChartLegend, at as ChartLegendContent } from "./index-CAHOwpYa.js";
import { R as React, r as reactExports } from "./index-XyBrGLi6.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-DWwsNxpa.js";
import { i as invariant } from "./tiny-invariant-BFhMKKf2.js";
import "./index-CVqyR_EW.js";
import "./polished.esm-Be2v7kFA.js";
var _excluded$c = ["children", "className"];
function _extends$l() {
  _extends$l = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$l.apply(this, arguments);
}
function _objectWithoutProperties$c(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$c(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$c(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var Layer = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, others = _objectWithoutProperties$c(props, _excluded$c);
  var layerClass = clsx("recharts-layer", className);
  return /* @__PURE__ */ React.createElement("g", _extends$l({
    className: layerClass
  }, filterProps(others, true), {
    ref
  }), children);
});
function array(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function curveLinear(context) {
  return new Linear(context);
}
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}
function shapeLine(x$1, y$1) {
  var defined3 = constant$1(true), context = null, curve = curveLinear, output = null, path = withPath(line);
  x$1 = typeof x$1 === "function" ? x$1 : x$1 === void 0 ? x : constant$1(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : y$1 === void 0 ? y : constant$1(y$1);
  function line(data) {
    var i, n = (data = array(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$1(+_), line) : x$1;
  };
  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$1(+_), line) : y$1;
  };
  line.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant$1(!!_), line) : defined3;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}
function shapeArea(x0, y0, y1) {
  var x1 = null, defined3 = constant$1(true), context = null, curve = curveLinear, output = null, path = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant$1(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant$1(0) : constant$1(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant$1(+y1);
  function area(data) {
    var i, j, k, n = (data = array(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return shapeLine().defined(defined3).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant$1(!!_), area) : defined3;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}
class Bump {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x2, y2);
        else this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
}
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}
function noop() {
}
function point$2(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point$2(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function curveBasis(context) {
  return new Basis(context);
}
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function curveBasisClosed(context) {
  return new BasisClosed(context);
}
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point$2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function curveBasisOpen(context) {
  return new BasisOpen(context);
}
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};
function curveLinearClosed(context) {
  return new LinearClosed(context);
}
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point$1(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point$1(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point$1(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point$1(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a[i + 1];
  return [a, b];
}
function curveNatural(context) {
  return new Natural(context);
}
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function curveStep(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}
function stackOffsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}
function stackOrderNone(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function shapeStack() {
  var keys2 = constant$1([]), order = stackOrderNone, offset = stackOffsetNone, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys2.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }
    for (i = 0, oz = array(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys2 = typeof _ === "function" ? _ : constant$1(Array.from(_)), stack) : keys2;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? stackOrderNone : typeof _ === "function" ? _ : constant$1(Array.from(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? stackOffsetNone : _, stack) : offset;
  };
  return stack;
}
function stackOffsetExpand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    if (y2) for (i = 0; i < n; ++i) series[i][j][1] /= y2;
  }
  stackOffsetNone(series, order);
}
function stackOffsetSilhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y2 = 0; i < n; ++i) y2 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y2 / 2;
  }
  stackOffsetNone(series, order);
}
function stackOffsetWiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    if (s1) y2 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y2;
  stackOffsetNone(series, order);
}
var Cell = function Cell2(_props) {
  return null;
};
Cell.displayName = "Cell";
function _typeof$x(o) {
  "@babel/helpers - typeof";
  return _typeof$x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$x(o);
}
function ownKeys$r(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$r(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$r(Object(t), true).forEach(function(r2) {
      _defineProperty$v(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$r(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$v(obj, key, value) {
  key = _toPropertyKey$w(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$w(t) {
  var i = _toPrimitive$w(t, "string");
  return "symbol" == _typeof$x(i) ? i : i + "";
}
function _toPrimitive$w(t, r) {
  if ("object" != _typeof$x(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$x(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2e3;
var SPAN_STYLE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
};
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function removeInvalidKeys(obj) {
  var copyObj = _objectSpread$r({}, obj);
  Object.keys(copyObj).forEach(function(key) {
    if (!copyObj[key]) {
      delete copyObj[key];
    }
  });
  return copyObj;
}
var getStringSize = function getStringSize2(text) {
  var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (text === void 0 || text === null || Global.isSsr) {
    return {
      width: 0,
      height: 0
    };
  }
  var copyStyle = removeInvalidKeys(style);
  var cacheKey = JSON.stringify({
    text,
    copyStyle
  });
  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }
  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement("span");
      measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute("aria-hidden", "true");
      document.body.appendChild(measurementSpan);
    }
    var measurementSpanStyle = _objectSpread$r(_objectSpread$r({}, SPAN_STYLE), copyStyle);
    Object.assign(measurementSpan.style, measurementSpanStyle);
    measurementSpan.textContent = "".concat(text);
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset2(rect) {
  return {
    top: rect.top + window.scrollY - document.documentElement.clientTop,
    left: rect.left + window.scrollX - document.documentElement.clientLeft
  };
};
function _typeof$w(o) {
  "@babel/helpers - typeof";
  return _typeof$w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$w(o);
}
function _slicedToArray$9(arr, i) {
  return _arrayWithHoles$a(arr) || _iterableToArrayLimit$9(arr, i) || _unsupportedIterableToArray$g(arr, i) || _nonIterableRest$a();
}
function _nonIterableRest$a() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$g(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$g(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$g(o, minLen);
}
function _arrayLikeToArray$g(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$a(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$d(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$v(descriptor.key), descriptor);
  }
}
function _createClass$d(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$d(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$d(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$v(t) {
  var i = _toPrimitive$v(t, "string");
  return "symbol" == _typeof$w(i) ? i : i + "";
}
function _toPrimitive$v(t, r) {
  if ("object" != _typeof$w(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$w(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  "in": 96,
  Q: 96 / (2.54 * 40),
  px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = "NaN";
function convertToPx(value, unit2) {
  return value * CONVERSION_RATES[unit2];
}
var DecimalCSS = /* @__PURE__ */ function() {
  function DecimalCSS2(num, unit2) {
    _classCallCheck$d(this, DecimalCSS2);
    this.num = num;
    this.unit = unit2;
    this.num = num;
    this.unit = unit2;
    if (Number.isNaN(num)) {
      this.unit = "";
    }
    if (unit2 !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit2)) {
      this.num = NaN;
      this.unit = "";
    }
    if (FIXED_CSS_LENGTH_UNITS.includes(unit2)) {
      this.num = convertToPx(num, unit2);
      this.unit = "px";
    }
  }
  return _createClass$d(DecimalCSS2, [{
    key: "add",
    value: function add2(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num + other.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function subtract2(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num - other.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function multiply(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num * other.num, this.unit || other.unit);
    }
  }, {
    key: "divide",
    value: function divide2(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num / other.num, this.unit || other.unit);
    }
  }, {
    key: "toString",
    value: function toString2() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function isNaN2() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var _NUM_SPLIT_REGEX$exec;
      var _ref = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [], _ref2 = _slicedToArray$9(_ref, 3), numStr = _ref2[1], unit2 = _ref2[2];
      return new DecimalCSS2(parseFloat(numStr), unit2 !== null && unit2 !== void 0 ? unit2 : "");
    }
  }]);
}();
function calculateArithmetic(expr) {
  if (expr.includes(STR_NAN)) {
    return STR_NAN;
  }
  var newExpr = expr;
  while (newExpr.includes("*") || newExpr.includes("/")) {
    var _MULTIPLY_OR_DIVIDE_R;
    var _ref3 = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [], _ref4 = _slicedToArray$9(_ref3, 4), leftOperand = _ref4[1], operator = _ref4[2], rightOperand = _ref4[3];
    var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
    var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
    var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
    if (result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
  }
  while (newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)) {
    var _ADD_OR_SUBTRACT_REGE;
    var _ref5 = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [], _ref6 = _slicedToArray$9(_ref5, 4), _leftOperand = _ref6[1], _operator = _ref6[2], _rightOperand = _ref6[3];
    var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
    var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
    var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
    if (_result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
  }
  return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
  var newExpr = expr;
  while (newExpr.includes("(")) {
    var _PARENTHESES_REGEX$ex = PARENTHESES_REGEX.exec(newExpr), _PARENTHESES_REGEX$ex2 = _slicedToArray$9(_PARENTHESES_REGEX$ex, 2), parentheticalExpression = _PARENTHESES_REGEX$ex2[1];
    newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
  }
  return newExpr;
}
function evaluateExpression(expression) {
  var newExpr = expression.replace(/\s+/g, "");
  newExpr = calculateParentheses(newExpr);
  newExpr = calculateArithmetic(newExpr);
  return newExpr;
}
function safeEvaluateExpression(expression) {
  try {
    return evaluateExpression(expression);
  } catch (e) {
    return STR_NAN;
  }
}
function reduceCSSCalc(expression) {
  var result = safeEvaluateExpression(expression.slice(5, -1));
  if (result === STR_NAN) {
    return "";
  }
  return result;
}
var _excluded$b = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], _excluded2$4 = ["dx", "dy", "angle", "className", "breakAll"];
function _extends$k() {
  _extends$k = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$k.apply(this, arguments);
}
function _objectWithoutProperties$b(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$b(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$b(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray$8(arr, i) {
  return _arrayWithHoles$9(arr) || _iterableToArrayLimit$8(arr, i) || _unsupportedIterableToArray$f(arr, i) || _nonIterableRest$9();
}
function _nonIterableRest$9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$f(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$f(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$f(o, minLen);
}
function _arrayLikeToArray$f(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$9(arr) {
  if (Array.isArray(arr)) return arr;
}
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths2(_ref) {
  var children = _ref.children, breakAll = _ref.breakAll, style = _ref.style;
  try {
    var words = [];
    if (!isNil(children)) {
      if (breakAll) {
        words = children.toString().split("");
      } else {
        words = children.toString().split(BREAKING_SPACES);
      }
    }
    var wordsWithComputedWidth = words.map(function(word) {
      return {
        word,
        width: getStringSize(word, style).width
      };
    });
    var spaceWidth = breakAll ? 0 : getStringSize(" ", style).width;
    return {
      wordsWithComputedWidth,
      spaceWidth
    };
  } catch (e) {
    return null;
  }
};
var calculateWordsByLines = function calculateWordsByLines2(_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
  var maxLines = _ref2.maxLines, children = _ref2.children, style = _ref2.style, breakAll = _ref2.breakAll;
  var shouldLimitLines = isNumber(maxLines);
  var text = children;
  var calculate = function calculate2() {
    var words = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return words.reduce(function(result2, _ref3) {
      var word = _ref3.word, width = _ref3.width;
      var currentLine = result2[result2.length - 1];
      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        var newLine = {
          words: [word],
          width
        };
        result2.push(newLine);
      }
      return result2;
    }, []);
  };
  var originalResult = calculate(initialWordsWithComputedWith);
  var findLongestLine = function findLongestLine2(words) {
    return words.reduce(function(a, b) {
      return a.width > b.width ? a : b;
    });
  };
  if (!shouldLimitLines) {
    return originalResult;
  }
  var suffix = "…";
  var checkOverflow = function checkOverflow2(index) {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths({
      breakAll,
      style,
      children: tempText + suffix
    }).wordsWithComputedWidth;
    var result2 = calculate(words);
    var doesOverflow = result2.length > maxLines || findLongestLine(result2).width > Number(lineWidth);
    return [doesOverflow, result2];
  };
  var start = 0;
  var end = text.length - 1;
  var iterations = 0;
  var trimmedResult;
  while (start <= end && iterations <= text.length - 1) {
    var middle = Math.floor((start + end) / 2);
    var prev = middle - 1;
    var _checkOverflow = checkOverflow(prev), _checkOverflow2 = _slicedToArray$8(_checkOverflow, 2), doesPrevOverflow = _checkOverflow2[0], result = _checkOverflow2[1];
    var _checkOverflow3 = checkOverflow(middle), _checkOverflow4 = _slicedToArray$8(_checkOverflow3, 1), doesMiddleOverflow = _checkOverflow4[0];
    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }
    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }
    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }
    iterations++;
  }
  return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate2(children) {
  var words = !isNil(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{
    words
  }];
};
var getWordsByLines = function getWordsByLines2(_ref4) {
  var width = _ref4.width, scaleToFit = _ref4.scaleToFit, children = _ref4.children, style = _ref4.style, breakAll = _ref4.breakAll, maxLines = _ref4.maxLines;
  if ((width || scaleToFit) && !Global.isSsr) {
    var wordsWithComputedWidth, spaceWidth;
    var wordWidths = calculateWordWidths({
      breakAll,
      children,
      style
    });
    if (wordWidths) {
      var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
      wordsWithComputedWidth = wcw;
      spaceWidth = sw;
    } else {
      return getWordsWithoutCalculate(children);
    }
    return calculateWordsByLines({
      breakAll,
      children,
      maxLines,
      style
    }, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
  }
  return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = "#808080";
var Text = function Text2(_ref5) {
  var _ref5$x = _ref5.x, propsX = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, propsY = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$lineHeight = _ref5.lineHeight, lineHeight = _ref5$lineHeight === void 0 ? "1em" : _ref5$lineHeight, _ref5$capHeight = _ref5.capHeight, capHeight = _ref5$capHeight === void 0 ? "0.71em" : _ref5$capHeight, _ref5$scaleToFit = _ref5.scaleToFit, scaleToFit = _ref5$scaleToFit === void 0 ? false : _ref5$scaleToFit, _ref5$textAnchor = _ref5.textAnchor, textAnchor = _ref5$textAnchor === void 0 ? "start" : _ref5$textAnchor, _ref5$verticalAnchor = _ref5.verticalAnchor, verticalAnchor = _ref5$verticalAnchor === void 0 ? "end" : _ref5$verticalAnchor, _ref5$fill = _ref5.fill, fill = _ref5$fill === void 0 ? DEFAULT_FILL : _ref5$fill, props = _objectWithoutProperties$b(_ref5, _excluded$b);
  var wordsByLines = reactExports.useMemo(function() {
    return getWordsByLines({
      breakAll: props.breakAll,
      children: props.children,
      maxLines: props.maxLines,
      scaleToFit,
      style: props.style,
      width: props.width
    });
  }, [props.breakAll, props.children, props.maxLines, scaleToFit, props.style, props.width]);
  var dx = props.dx, dy = props.dy, angle = props.angle, className = props.className, breakAll = props.breakAll, textProps = _objectWithoutProperties$b(props, _excluded2$4);
  if (!isNumOrStr(propsX) || !isNumOrStr(propsY)) {
    return null;
  }
  var x2 = propsX + (isNumber(dx) ? dx : 0);
  var y2 = propsY + (isNumber(dy) ? dy : 0);
  var startDy;
  switch (verticalAnchor) {
    case "start":
      startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
      break;
    case "middle":
      startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
      break;
    default:
      startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
      break;
  }
  var transforms = [];
  if (scaleToFit) {
    var lineWidth = wordsByLines[0].width;
    var width = props.width;
    transforms.push("scale(".concat((isNumber(width) ? width / lineWidth : 1) / lineWidth, ")"));
  }
  if (angle) {
    transforms.push("rotate(".concat(angle, ", ").concat(x2, ", ").concat(y2, ")"));
  }
  if (transforms.length) {
    textProps.transform = transforms.join(" ");
  }
  return /* @__PURE__ */ React.createElement("text", _extends$k({}, filterProps(textProps, true), {
    x: x2,
    y: y2,
    className: clsx("recharts-text", className),
    textAnchor,
    fill: fill.includes("url") ? DEFAULT_FILL : fill
  }), wordsByLines.map(function(line, index) {
    var words = line.words.join(breakAll ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ React.createElement("tspan", {
        x: x2,
        dy: index === 0 ? startDy : lineHeight,
        key: "".concat(words, "-").concat(index)
      }, words)
    );
  }));
};
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero$1;
    compare2 = f;
    delta = f;
  }
  function left(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x2, lo = 0, hi = a.length) {
    const i = left(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero$1() {
  return 0;
}
function number$2(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values, valueof) {
  {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
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
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
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
function compareDefined(compare = ascending) {
  if (compare === ascending) return ascendingDefined;
  if (typeof compare !== "function") throw new TypeError("compare is not a function");
  return (a, b) => {
    const x2 = compare(a, b);
    if (x2 || x2 === 0) return x2;
    return (compare(b, b) === 0) - (compare(a, a) === 0);
  };
}
function ascendingDefined(a, b) {
  return (a == null || !(a >= a)) - (b == null || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0);
}
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse3 = stop < start, [i1, i2, inc] = reverse3 ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse3) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse3 = stop < start, inc = reverse3 ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse3 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}
function max$1(values, valueof) {
  let max2;
  {
    for (const value of values) {
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  }
  return max2;
}
function min$1(values, valueof) {
  let min2;
  {
    for (const value of values) {
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  }
  return min2;
}
function quickselect(array2, k, left = 0, right = Infinity, compare) {
  k = Math.floor(k);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array2.length - 1, right));
  if (!(left <= k && k <= right)) return array2;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array2, k, newLeft, newRight, compare);
    }
    const t = array2[k];
    let i = left;
    let j = right;
    swap(array2, left, k);
    if (compare(array2[right], t) > 0) swap(array2, left, right);
    while (i < j) {
      swap(array2, i, j), ++i, --j;
      while (compare(array2[i], t) < 0) ++i;
      while (compare(array2[j], t) > 0) --j;
    }
    if (compare(array2[left], t) === 0) swap(array2, left, j);
    else ++j, swap(array2, j, right);
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array2;
}
function swap(array2, i, j) {
  const t = array2[i];
  array2[i] = array2[j];
  array2[j] = t;
}
function quantile$1(values, p, valueof) {
  values = Float64Array.from(numbers(values));
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return min$1(values);
  if (p >= 1) return max$1(values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max$1(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min$1(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = number$2) {
  if (!(n = values.length) || isNaN(p = +p)) return;
  if (p <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}
function range$2(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range3 = new Array(n);
  while (++i < n) {
    range3[i] = start + i * step;
  }
  return range3;
}
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(), domain = [], range3 = [], unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range3[i % range3.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), scale) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round2 = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse3 = r1 < r0, start = reverse3 ? r1 : r0, stop = reverse3 ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round2) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round2) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range$2(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse3 ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round2 = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round2 = !!_, rescale()) : round2;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round2).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy2 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy2());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
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
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
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
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
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
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2) h = (g - b) / s + (g < b) * 6;
    else if (g === max2) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
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
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
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
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
const constant = (x2) => () => x2;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
}
const rgb = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start, end) {
    var r = color2((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x2[i](t);
    return c;
  };
}
function date$1(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber$1(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber$1(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b) : (t === "number" ? interpolateNumber$1 : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date$1 : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber$1)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
function piecewise(interpolate$1, values) {
  if (values === void 0) values = interpolate$1, interpolate$1 = interpolate;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate$1(v, v = values[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}
function constants(x2) {
  return function() {
    return x2;
  };
}
function number$1(x2) {
  return +x2;
}
var unit = [0, 1];
function identity$4(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain, range3, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range3[0], r1 = range3[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range3, interpolate2) {
  var j = Math.min(domain.length, range3.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range3 = range3.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range3[i], range3[i + 1]);
  }
  return function(x2) {
    var i2 = bisectRight(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy$1(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer$2() {
  var domain = unit, range3 = unit, interpolate$1 = interpolate, transform, untransform, unknown, clamp = identity$4, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range3.length);
    if (clamp !== identity$4) clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range3, interpolate$1)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range3, domain.map(transform), interpolateNumber$1)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.rangeRound = function(_) {
    return range3 = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$4, rescale()) : clamp !== identity$4;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer$2()(identity$4, identity$4);
}
function formatDecimal(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}
function exponent(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}
function formatRounded(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded(x2 * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};
function identity$3(x2) {
  return x2;
}
var map$1 = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale$1(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$3 : formatGroup(map$1.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$3 : formatNumerals(map$1.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=") zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2) value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale$1;
var format;
var formatPrefix;
defaultLocale$1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  format = locale$1.format;
  formatPrefix = locale$1.formatPrefix;
  return locale$1;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max2) {
  step = Math.abs(step), max2 = Math.abs(max2) - step;
  return Math.max(0, exponent(max2) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy$1(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function identity$2(domain) {
  var unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity$2(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number$1) : [0, 1];
  return linearish(scale);
}
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
}
function reflect(f) {
  return (x2, k) => -f(-x2, k);
}
function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count) => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r) [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k;
    let t;
    const n = count == null ? 10 : +count;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1; k < base; ++k) {
          t = i < 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      else for (; i <= j; ++i) {
        for (k = base - 1; k >= 1; --k) {
          t = i > 0 ? k / pows(-i) : k * pows(i);
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count, specifier) => {
    if (count == null) count = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format(specifier);
    }
    if (count === Infinity) return specifier;
    const k = Math.max(1, base * count / scale.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice(domain(), {
      floor: (x2) => pows(Math.floor(logs(x2))),
      ceil: (x2) => pows(Math.ceil(logs(x2)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer$2()).domain([1, 10]);
  scale.copy = () => copy$1(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}
function transformSymlog(c) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c));
  };
}
function transformSymexp(c) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c;
  };
}
function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer$2());
  scale.copy = function() {
    return copy$1(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}
function transformPow(exponent2) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent2) : Math.pow(x2, exponent2);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity$4, identity$4), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform(identity$4, identity$4) : exponent2 === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer$2());
  scale.copy = function() {
    return copy$1(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}
function square(x2) {
  return Math.sign(x2) * x2 * x2;
}
function unsquare(x2) {
  return Math.sign(x2) * Math.sqrt(Math.abs(x2));
}
function radial() {
  var squared = continuous(), range3 = [0, 1], round2 = false, unknown;
  function scale(x2) {
    var y2 = unsquare(squared(x2));
    return isNaN(y2) ? unknown : round2 ? Math.round(y2) : y2;
  }
  scale.invert = function(y2) {
    return squared.invert(square(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };
  scale.range = function(_) {
    return arguments.length ? (squared.range((range3 = Array.from(_, number$1)).map(square)), scale) : range3.slice();
  };
  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };
  scale.round = function(_) {
    return arguments.length ? (round2 = !!_, scale) : round2;
  };
  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return radial(squared.domain(), range3).round(round2).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function quantile() {
  var domain = [], range3 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range3.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : range3[bisectRight(thresholds, x2)];
  }
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
function quantize() {
  var x0 = 0, x1 = 1, n = 1, domain = [0.5], range3 = [0, 1], unknown;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range3[bisectRight(domain, x2, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range3 = Array.from(_)).length - 1, rescale()) : range3.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range3).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}
function threshold() {
  var domain = [0.5], range3 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range3[bisectRight(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : range3.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}
const t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start, stop, step) => {
    const range3 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range3;
    let previous;
    do
      range3.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range3;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
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
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}
const millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k) * k);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};
millisecond.range;
const durationSecond = 1e3;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
const second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
second.range;
const timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
timeMinute.range;
const utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
utcMinute.range;
const timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getHours();
});
timeHour.range;
const utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
utcHour.range;
const timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
timeDay.range;
const utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
utcDay.range;
const unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
unixDay.range;
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
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
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
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
const timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
timeMonth.range;
const utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
utcMonth.range;
const timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k);
  });
};
timeYear.range;
const utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k);
  });
};
utcYear.range;
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count) {
    const reverse3 = stop < start;
    if (reverse3) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse3 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
const [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
const [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale2) {
  var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
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
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string2 = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string2.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
          string2.push(c);
          j = i + 1;
        }
      }
      string2.push(specifier.slice(j, i));
      return string2.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string2) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string2 += "", 0), week, day;
      if (i != string2.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
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
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string2, j) {
    var i = 0, n = specifier.length, m = string2.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string2, j)) < 0) return -1;
      } else if (c != string2.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string2, i) {
    var n = periodRe.exec(string2.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string2, i) {
    var n = shortWeekdayRe.exec(string2.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string2, i) {
    var n = weekdayRe.exec(string2.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string2, i) {
    var n = shortMonthRe.exec(string2.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string2, i) {
    var n = monthRe.exec(string2.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string2, i) {
    return parseSpecifier(d, locale_dateTime, string2, i);
  }
  function parseLocaleDate(d, string2, i) {
    return parseSpecifier(d, locale_date, string2, i);
  }
  function parseLocaleTime(d, string2, i) {
    return parseSpecifier(d, locale_time, string2, i);
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
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string2 = (sign2 ? -value : value) + "", length = string2.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string2 : string2);
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
function parseWeekdayNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string2, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string2.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string2, i) {
  var n = percentRe.exec(string2.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string2, i) {
  var n = numberRe.exec(string2.slice(i));
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
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
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
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
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
  return Math.floor(+d / 1e3);
}
var locale;
var timeFormat;
var utcFormat;
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
  timeFormat = locale.format;
  locale.parse;
  utcFormat = locale.utcFormat;
  locale.utcParse;
  return locale;
}
function date(t) {
  return new Date(t);
}
function number(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy$1(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function transformer$1() {
  var x0 = 0, x1 = 1, t02, t12, k10, transform, interpolator = identity$4, clamp = false, unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t02) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range3(interpolate2) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate2(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range3(interpolate);
  scale.rangeRound = range3(interpolateRound);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02);
    return scale;
  };
}
function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer$1()(identity$4));
  scale.copy = function() {
    return copy(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer$1()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer$1());
  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer$1());
  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}
function sequentialQuantile() {
  var domain = [], interpolator = identity$4;
  function scale(x2) {
    if (x2 != null && !isNaN(x2 = +x2)) return interpolator((bisectRight(domain, x2, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };
  scale.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (_, i) => quantile$1(domain, i / n));
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}
function transformer() {
  var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t02, t12, t2, k10, k21, interpolator = identity$4, transform, clamp = false, unknown;
  function scale(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform(x3)) - t12) * (s * x3 < s * t12 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s = t12 < t02 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range3(interpolate2) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate2, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range3(interpolate);
  scale.rangeRound = range3(interpolateRound);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), t2 = t(x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s = t12 < t02 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer()(identity$4));
  scale.copy = function() {
    return copy(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}
const d3Scales = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: band,
  scaleDiverging: diverging,
  scaleDivergingLog: divergingLog,
  scaleDivergingPow: divergingPow,
  scaleDivergingSqrt: divergingSqrt,
  scaleDivergingSymlog: divergingSymlog,
  scaleIdentity: identity$2,
  scaleImplicit: implicit,
  scaleLinear: linear,
  scaleLog: log,
  scaleOrdinal: ordinal,
  scalePoint: point,
  scalePow: pow,
  scaleQuantile: quantile,
  scaleQuantize: quantize,
  scaleRadial: radial,
  scaleSequential: sequential,
  scaleSequentialLog: sequentialLog,
  scaleSequentialPow: sequentialPow,
  scaleSequentialQuantile: sequentialQuantile,
  scaleSequentialSqrt: sequentialSqrt,
  scaleSequentialSymlog: sequentialSymlog,
  scaleSqrt: sqrt,
  scaleSymlog: symlog,
  scaleThreshold: threshold,
  scaleTime: time,
  scaleUtc: utcTime,
  tickFormat
}, Symbol.toStringTag, { value: "Module" }));
var _baseExtremum;
var hasRequired_baseExtremum;
function require_baseExtremum() {
  if (hasRequired_baseExtremum) return _baseExtremum;
  hasRequired_baseExtremum = 1;
  var isSymbol = requireIsSymbol();
  function baseExtremum(array2, iteratee, comparator) {
    var index = -1, length = array2.length;
    while (++index < length) {
      var value = array2[index], current = iteratee(value);
      if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
        var computed = current, result = value;
      }
    }
    return result;
  }
  _baseExtremum = baseExtremum;
  return _baseExtremum;
}
var _baseGt;
var hasRequired_baseGt;
function require_baseGt() {
  if (hasRequired_baseGt) return _baseGt;
  hasRequired_baseGt = 1;
  function baseGt(value, other) {
    return value > other;
  }
  _baseGt = baseGt;
  return _baseGt;
}
var max_1;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max_1;
  hasRequiredMax = 1;
  var baseExtremum = require_baseExtremum(), baseGt = require_baseGt(), identity3 = requireIdentity();
  function max2(array2) {
    return array2 && array2.length ? baseExtremum(array2, identity3, baseGt) : void 0;
  }
  max_1 = max2;
  return max_1;
}
var maxExports = requireMax();
const max = /* @__PURE__ */ getDefaultExportFromCjs(maxExports);
var _baseLt;
var hasRequired_baseLt;
function require_baseLt() {
  if (hasRequired_baseLt) return _baseLt;
  hasRequired_baseLt = 1;
  function baseLt(value, other) {
    return value < other;
  }
  _baseLt = baseLt;
  return _baseLt;
}
var min_1;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min_1;
  hasRequiredMin = 1;
  var baseExtremum = require_baseExtremum(), baseLt = require_baseLt(), identity3 = requireIdentity();
  function min2(array2) {
    return array2 && array2.length ? baseExtremum(array2, identity3, baseLt) : void 0;
  }
  min_1 = min2;
  return min_1;
}
var minExports = requireMin();
const min = /* @__PURE__ */ getDefaultExportFromCjs(minExports);
var map_1;
var hasRequiredMap;
function requireMap() {
  if (hasRequiredMap) return map_1;
  hasRequiredMap = 1;
  var arrayMap = require_arrayMap(), baseIteratee = require_baseIteratee(), baseMap = require_baseMap(), isArray2 = requireIsArray();
  function map2(collection, iteratee) {
    var func = isArray2(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
  }
  map_1 = map2;
  return map_1;
}
var flatMap_1;
var hasRequiredFlatMap;
function requireFlatMap() {
  if (hasRequiredFlatMap) return flatMap_1;
  hasRequiredFlatMap = 1;
  var baseFlatten = require_baseFlatten(), map2 = requireMap();
  function flatMap2(collection, iteratee) {
    return baseFlatten(map2(collection, iteratee), 1);
  }
  flatMap_1 = flatMap2;
  return flatMap_1;
}
var flatMapExports = requireFlatMap();
const flatMap = /* @__PURE__ */ getDefaultExportFromCjs(flatMapExports);
var isEqual_1;
var hasRequiredIsEqual;
function requireIsEqual() {
  if (hasRequiredIsEqual) return isEqual_1;
  hasRequiredIsEqual = 1;
  var baseIsEqual = require_baseIsEqual();
  function isEqual2(value, other) {
    return baseIsEqual(value, other);
  }
  isEqual_1 = isEqual2;
  return isEqual_1;
}
var isEqualExports = requireIsEqual();
const isEqual = /* @__PURE__ */ getDefaultExportFromCjs(isEqualExports);
var MAX_DIGITS = 1e9, defaults = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Decimal, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE), P = {};
P.absoluteValue = P.abs = function() {
  var x2 = new this.constructor(this);
  if (x2.s) x2.s = 1;
  return x2;
};
P.comparedTo = P.cmp = function(y2) {
  var i, j, xdL, ydL, x2 = this;
  y2 = new x2.constructor(y2);
  if (x2.s !== y2.s) return x2.s || -y2.s;
  if (x2.e !== y2.e) return x2.e > y2.e ^ x2.s < 0 ? 1 : -1;
  xdL = x2.d.length;
  ydL = y2.d.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (x2.d[i] !== y2.d[i]) return x2.d[i] > y2.d[i] ^ x2.s < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ x2.s < 0 ? 1 : -1;
};
P.decimalPlaces = P.dp = function() {
  var x2 = this, w = x2.d.length - 1, dp = (w - x2.e) * LOG_BASE;
  w = x2.d[w];
  if (w) for (; w % 10 == 0; w /= 10) dp--;
  return dp < 0 ? 0 : dp;
};
P.dividedBy = P.div = function(y2) {
  return divide(this, new this.constructor(y2));
};
P.dividedToIntegerBy = P.idiv = function(y2) {
  var x2 = this, Ctor = x2.constructor;
  return round(divide(x2, new Ctor(y2), 0, 1), Ctor.precision);
};
P.equals = P.eq = function(y2) {
  return !this.cmp(y2);
};
P.exponent = function() {
  return getBase10Exponent(this);
};
P.greaterThan = P.gt = function(y2) {
  return this.cmp(y2) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y2) {
  return this.cmp(y2) >= 0;
};
P.isInteger = P.isint = function() {
  return this.e > this.d.length - 2;
};
P.isNegative = P.isneg = function() {
  return this.s < 0;
};
P.isPositive = P.ispos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return this.s === 0;
};
P.lessThan = P.lt = function(y2) {
  return this.cmp(y2) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y2) {
  return this.cmp(y2) < 1;
};
P.logarithm = P.log = function(base) {
  var r, x2 = this, Ctor = x2.constructor, pr = Ctor.precision, wpr = pr + 5;
  if (base === void 0) {
    base = new Ctor(10);
  } else {
    base = new Ctor(base);
    if (base.s < 1 || base.eq(ONE)) throw Error(decimalError + "NaN");
  }
  if (x2.s < 1) throw Error(decimalError + (x2.s ? "NaN" : "-Infinity"));
  if (x2.eq(ONE)) return new Ctor(0);
  external = false;
  r = divide(ln(x2, wpr), ln(base, wpr), wpr);
  external = true;
  return round(r, pr);
};
P.minus = P.sub = function(y2) {
  var x2 = this;
  y2 = new x2.constructor(y2);
  return x2.s == y2.s ? subtract(x2, y2) : add(x2, (y2.s = -y2.s, y2));
};
P.modulo = P.mod = function(y2) {
  var q, x2 = this, Ctor = x2.constructor, pr = Ctor.precision;
  y2 = new Ctor(y2);
  if (!y2.s) throw Error(decimalError + "NaN");
  if (!x2.s) return round(new Ctor(x2), pr);
  external = false;
  q = divide(x2, y2, 0, 1).times(y2);
  external = true;
  return x2.minus(q);
};
P.naturalExponential = P.exp = function() {
  return exp(this);
};
P.naturalLogarithm = P.ln = function() {
  return ln(this);
};
P.negated = P.neg = function() {
  var x2 = new this.constructor(this);
  x2.s = -x2.s || 0;
  return x2;
};
P.plus = P.add = function(y2) {
  var x2 = this;
  y2 = new x2.constructor(y2);
  return x2.s == y2.s ? add(x2, y2) : subtract(x2, (y2.s = -y2.s, y2));
};
P.precision = P.sd = function(z) {
  var e, sd, w, x2 = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);
  e = getBase10Exponent(x2) + 1;
  w = x2.d.length - 1;
  sd = w * LOG_BASE + 1;
  w = x2.d[w];
  if (w) {
    for (; w % 10 == 0; w /= 10) sd--;
    for (w = x2.d[0]; w >= 10; w /= 10) sd++;
  }
  return z && e > sd ? e : sd;
};
P.squareRoot = P.sqrt = function() {
  var e, n, pr, r, s, t, wpr, x2 = this, Ctor = x2.constructor;
  if (x2.s < 1) {
    if (!x2.s) return new Ctor(0);
    throw Error(decimalError + "NaN");
  }
  e = getBase10Exponent(x2);
  external = false;
  s = Math.sqrt(+x2);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(x2.d);
    if ((n.length + e) % 2 == 0) n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  pr = Ctor.precision;
  s = wpr = pr + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide(x2, t, wpr + 2)).times(0.5);
    if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
      n = n.slice(wpr - 3, wpr + 1);
      if (s == wpr && n == "4999") {
        round(t, pr + 1, 0);
        if (t.times(t).eq(x2)) {
          r = t;
          break;
        }
      } else if (n != "9999") {
        break;
      }
      wpr += 4;
    }
  }
  external = true;
  return round(r, pr);
};
P.times = P.mul = function(y2) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y2 = new Ctor(y2)).d;
  if (!x2.s || !y2.s) return new Ctor(0);
  y2.s *= x2.s;
  e = x2.e + y2.e;
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; ) r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; ) r.pop();
  if (carry) ++e;
  else r.shift();
  y2.d = r;
  y2.e = e;
  return external ? round(y2, Ctor.precision) : y2;
};
P.toDecimalPlaces = P.todp = function(dp, rm) {
  var x2 = this, Ctor = x2.constructor;
  x2 = new Ctor(x2);
  if (dp === void 0) return x2;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  return round(x2, dp + getBase10Exponent(x2) + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x2 = this, Ctor = x2.constructor;
  if (dp === void 0) {
    str = toString(x2, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x2 = round(new Ctor(x2), dp + 1, rm);
    str = toString(x2, true, dp + 1);
  }
  return str;
};
P.toFixed = function(dp, rm) {
  var str, y2, x2 = this, Ctor = x2.constructor;
  if (dp === void 0) return toString(x2);
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0) rm = Ctor.rounding;
  else checkInt32(rm, 0, 8);
  y2 = round(new Ctor(x2), dp + getBase10Exponent(x2) + 1, rm);
  str = toString(y2.abs(), false, dp + getBase10Exponent(y2) + 1);
  return x2.isneg() && !x2.isZero() ? "-" + str : str;
};
P.toInteger = P.toint = function() {
  var x2 = this, Ctor = x2.constructor;
  return round(new Ctor(x2), getBase10Exponent(x2) + 1, Ctor.rounding);
};
P.toNumber = function() {
  return +this;
};
P.toPower = P.pow = function(y2) {
  var e, k, pr, r, sign2, yIsInt, x2 = this, Ctor = x2.constructor, guard = 12, yn = +(y2 = new Ctor(y2));
  if (!y2.s) return new Ctor(ONE);
  x2 = new Ctor(x2);
  if (!x2.s) {
    if (y2.s < 1) throw Error(decimalError + "Infinity");
    return x2;
  }
  if (x2.eq(ONE)) return x2;
  pr = Ctor.precision;
  if (y2.eq(ONE)) return round(x2, pr);
  e = y2.e;
  k = y2.d.length - 1;
  yIsInt = e >= k;
  sign2 = x2.s;
  if (!yIsInt) {
    if (sign2 < 0) throw Error(decimalError + "NaN");
  } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r = new Ctor(ONE);
    e = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for (; ; ) {
      if (k % 2) {
        r = r.times(x2);
        truncate(r.d, e);
      }
      k = mathfloor(k / 2);
      if (k === 0) break;
      x2 = x2.times(x2);
      truncate(x2.d, e);
    }
    external = true;
    return y2.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
  }
  sign2 = sign2 < 0 && y2.d[Math.max(e, k)] & 1 ? -1 : 1;
  x2.s = 1;
  external = false;
  r = y2.times(ln(x2, pr + guard));
  external = true;
  r = exp(r);
  r.s = sign2;
  return r;
};
P.toPrecision = function(sd, rm) {
  var e, str, x2 = this, Ctor = x2.constructor;
  if (sd === void 0) {
    e = getBase10Exponent(x2);
    str = toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
    x2 = round(new Ctor(x2), sd, rm);
    e = getBase10Exponent(x2);
    str = toString(x2, sd <= e || e <= Ctor.toExpNeg, sd);
  }
  return str;
};
P.toSignificantDigits = P.tosd = function(sd, rm) {
  var x2 = this, Ctor = x2.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);
  }
  return round(new Ctor(x2), sd, rm);
};
P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var x2 = this, e = getBase10Exponent(x2), Ctor = x2.constructor;
  return toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
};
function add(x2, y2) {
  var carry, d, e, i, k, len, xd, yd, Ctor = x2.constructor, pr = Ctor.precision;
  if (!x2.s || !y2.s) {
    if (!y2.s) y2 = new Ctor(x2);
    return external ? round(y2, pr) : y2;
  }
  xd = x2.d;
  yd = y2.d;
  k = x2.e;
  e = y2.e;
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; ) d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; ) xd.pop();
  y2.d = xd;
  y2.e = e;
  return external ? round(y2, pr) : y2;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k) str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; ) w /= 10;
  return str + w;
}
var divide = /* @__PURE__ */ function() {
  function multiplyInteger(x2, k) {
    var temp, carry = 0, i = x2.length;
    for (x2 = x2.slice(); i--; ) {
      temp = x2[i] * k + carry;
      x2[i] = temp % BASE | 0;
      carry = temp / BASE | 0;
    }
    if (carry) x2.unshift(carry);
    return x2;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract2(a, b, aL) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * BASE + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function(x2, y2, pr, dp) {
    var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y2.s ? 1 : -1, xd = x2.d, yd = y2.d;
    if (!x2.s) return new Ctor(x2);
    if (!y2.s) throw Error(decimalError + "Division by zero");
    e = x2.e - y2.e;
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign2);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); ) ++i;
    if (yd[i] > (xd[i] || 0)) --e;
    if (pr == null) {
      sd = pr = Ctor.precision;
    } else if (dp) {
      sd = pr + (getBase10Exponent(x2) - getBase10Exponent(y2)) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) return new Ctor(0);
    sd = sd / LOG_BASE + 2 | 0;
    i = 0;
    if (yL == 1) {
      k = 0;
      yd = yd[0];
      sd++;
      for (; (i < xL || k) && sd--; i++) {
        t = k * BASE + (xd[i] || 0);
        qd[i] = t / yd | 0;
        k = t % yd | 0;
      }
    } else {
      k = BASE / (yd[0] + 1) | 0;
      if (k > 1) {
        yd = multiplyInteger(yd, k);
        xd = multiplyInteger(xd, k);
        yL = yd.length;
        xL = xd.length;
      }
      xi = yL;
      rem = xd.slice(0, yL);
      remL = rem.length;
      for (; remL < yL; ) rem[remL++] = 0;
      yz = yd.slice();
      yz.unshift(0);
      yd0 = yd[0];
      if (yd[1] >= BASE / 2) ++yd0;
      do {
        k = 0;
        cmp = compare(yd, rem, yL, remL);
        if (cmp < 0) {
          rem0 = rem[0];
          if (yL != remL) rem0 = rem0 * BASE + (rem[1] || 0);
          k = rem0 / yd0 | 0;
          if (k > 1) {
            if (k >= BASE) k = BASE - 1;
            prod = multiplyInteger(yd, k);
            prodL = prod.length;
            remL = rem.length;
            cmp = compare(prod, rem, prodL, remL);
            if (cmp == 1) {
              k--;
              subtract2(prod, yL < prodL ? yz : yd, prodL);
            }
          } else {
            if (k == 0) cmp = k = 1;
            prod = yd.slice();
          }
          prodL = prod.length;
          if (prodL < remL) prod.unshift(0);
          subtract2(rem, prod, remL);
          if (cmp == -1) {
            remL = rem.length;
            cmp = compare(yd, rem, yL, remL);
            if (cmp < 1) {
              k++;
              subtract2(rem, yL < remL ? yz : yd, remL);
            }
          }
          remL = rem.length;
        } else if (cmp === 0) {
          k++;
          rem = [0];
        }
        qd[i++] = k;
        if (cmp && rem[0]) {
          rem[remL++] = xd[xi] || 0;
        } else {
          rem = [xd[xi]];
          remL = 1;
        }
      } while ((xi++ < xL || rem[0] !== void 0) && sd--);
    }
    if (!qd[0]) qd.shift();
    q.e = e;
    return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
  };
}();
function exp(x2, sd) {
  var denominator, guard, pow2, sum, t, wpr, i = 0, k = 0, Ctor = x2.constructor, pr = Ctor.precision;
  if (getBase10Exponent(x2) > 16) throw Error(exponentOutOfRange + getBase10Exponent(x2));
  if (!x2.s) return new Ctor(ONE);
  {
    external = false;
    wpr = pr;
  }
  t = new Ctor(0.03125);
  while (x2.abs().gte(0.1)) {
    x2 = x2.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum = new Ctor(ONE);
  Ctor.precision = wpr;
  for (; ; ) {
    pow2 = round(pow2.times(x2), wpr);
    denominator = denominator.times(++i);
    t = sum.plus(divide(pow2, denominator, wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      while (k--) sum = round(sum.times(sum), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
  }
}
function getBase10Exponent(x2) {
  var e = x2.e * LOG_BASE, w = x2.d[0];
  for (; w >= 10; w /= 10) e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > Ctor.LN10.sd()) {
    external = true;
    if (pr) Ctor.precision = pr;
    throw Error(decimalError + "LN10 precision limit exceeded");
  }
  return round(new Ctor(Ctor.LN10), sd);
}
function getZeroString(k) {
  var zs = "";
  for (; k--; ) zs += "0";
  return zs;
}
function ln(y2, sd) {
  var c, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x3 = y2, xd = x3.d, Ctor = x3.constructor, pr = Ctor.precision;
  if (x3.s < 1) throw Error(decimalError + (x3.s ? "NaN" : "-Infinity"));
  if (x3.eq(ONE)) return new Ctor(0);
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  if (x3.eq(10)) {
    if (sd == null) external = true;
    return getLn10(Ctor, wpr);
  }
  wpr += guard;
  Ctor.precision = wpr;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  e = getBase10Exponent(x3);
  if (Math.abs(e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x3 = x3.times(y2);
      c = digitsToString(x3.d);
      c0 = c.charAt(0);
      n++;
    }
    e = getBase10Exponent(x3);
    if (c0 > 1) {
      x3 = new Ctor("0." + c);
      e++;
    } else {
      x3 = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x3 = ln(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? (external = true, round(x3, pr)) : x3;
  }
  sum = numerator = x3 = divide(x3.minus(ONE), x3.plus(ONE), wpr);
  x2 = round(x3.times(x3), wpr);
  denominator = 3;
  for (; ; ) {
    numerator = round(numerator.times(x2), wpr);
    t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);
      if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum = divide(sum, new Ctor(n), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
    denominator += 2;
  }
}
function parseDecimal(x2, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; ) ++i;
  for (len = str.length; str.charCodeAt(len - 1) === 48; ) --len;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    e = e - i - 1;
    x2.e = mathfloor(e / LOG_BASE);
    x2.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0) i += LOG_BASE;
    if (i < len) {
      if (i) x2.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; ) x2.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; ) str += "0";
    x2.d.push(+str);
    if (external && (x2.e > MAX_E || x2.e < -MAX_E)) throw Error(exponentOutOfRange + e);
  } else {
    x2.s = 0;
    x2.e = 0;
    x2.d = [0];
  }
  return x2;
}
function round(x2, sd, rm) {
  var i, j, k, n, rd, doRound, w, xdi, xd = x2.d;
  for (n = 1, k = xd[0]; k >= 10; k /= 10) n++;
  i = sd - n;
  if (i < 0) {
    i += LOG_BASE;
    j = sd;
    w = xd[xdi = 0];
  } else {
    xdi = Math.ceil((i + 1) / LOG_BASE);
    k = xd.length;
    if (xdi >= k) return x2;
    w = k = xd[xdi];
    for (n = 1; k >= 10; k /= 10) n++;
    i %= LOG_BASE;
    j = i - LOG_BASE + n;
  }
  if (rm !== void 0) {
    k = mathpow(10, n - j - 1);
    rd = w / k % 10 | 0;
    doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;
    doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
    (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
  }
  if (sd < 1 || !xd[0]) {
    if (doRound) {
      k = getBase10Exponent(x2);
      xd.length = 1;
      sd = sd - k - 1;
      xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
      x2.e = mathfloor(-sd / LOG_BASE) || 0;
    } else {
      xd.length = 1;
      xd[0] = x2.e = x2.s = 0;
    }
    return x2;
  }
  if (i == 0) {
    xd.length = xdi;
    k = 1;
    xdi--;
  } else {
    xd.length = xdi + 1;
    k = mathpow(10, LOG_BASE - i);
    xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
  }
  if (doRound) {
    for (; ; ) {
      if (xdi == 0) {
        if ((xd[0] += k) == BASE) {
          xd[0] = 1;
          ++x2.e;
        }
        break;
      } else {
        xd[xdi] += k;
        if (xd[xdi] != BASE) break;
        xd[xdi--] = 0;
        k = 1;
      }
    }
  }
  for (i = xd.length; xd[--i] === 0; ) xd.pop();
  if (external && (x2.e > MAX_E || x2.e < -MAX_E)) {
    throw Error(exponentOutOfRange + getBase10Exponent(x2));
  }
  return x2;
}
function subtract(x2, y2) {
  var d, e, i, j, k, len, xd, xe, xLTy, yd, Ctor = x2.constructor, pr = Ctor.precision;
  if (!x2.s || !y2.s) {
    if (y2.s) y2.s = -y2.s;
    else y2 = new Ctor(x2);
    return external ? round(y2, pr) : y2;
  }
  xd = x2.d;
  yd = y2.d;
  e = y2.e;
  xe = x2.e;
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; ) d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy) len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y2.s = -y2.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i) xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; ) xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; ) xd.pop();
  for (; xd[0] === 0; xd.shift()) --e;
  if (!xd[0]) return new Ctor(0);
  y2.d = xd;
  y2.e = e;
  return external ? round(y2, pr) : y2;
}
function toString(x2, isExp, sd) {
  var k, e = getBase10Exponent(x2), str = digitsToString(x2.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (e < 0 ? "e" : "e+") + e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0) str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0) str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len) str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len) str += ".";
      str += getZeroString(k);
    }
  }
  return x2.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(value) {
    var x2 = this;
    if (!(x2 instanceof Decimal2)) return new Decimal2(value);
    x2.constructor = Decimal2;
    if (value instanceof Decimal2) {
      x2.s = value.s;
      x2.e = value.e;
      x2.d = (value = value.d) ? value.slice() : value;
      return;
    }
    if (typeof value === "number") {
      if (value * 0 !== 0) {
        throw Error(invalidArgument + value);
      }
      if (value > 0) {
        x2.s = 1;
      } else if (value < 0) {
        value = -value;
        x2.s = -1;
      } else {
        x2.s = 0;
        x2.e = 0;
        x2.d = [0];
        return;
      }
      if (value === ~~value && value < 1e7) {
        x2.e = 0;
        x2.d = [value];
        return;
      }
      return parseDecimal(x2, value.toString());
    } else if (typeof value !== "string") {
      throw Error(invalidArgument + value);
    }
    if (value.charCodeAt(0) === 45) {
      value = value.slice(1);
      x2.s = -1;
    } else {
      x2.s = 1;
    }
    if (isDecimal.test(value)) parseDecimal(x2, value);
    else throw Error(invalidArgument + value);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.clone = clone;
  Decimal2.config = Decimal2.set = config;
  if (obj === void 0) obj = {};
  if (obj) {
    ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
    for (i = 0; i < ps.length; ) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
  }
  Decimal2.config(obj);
  return Decimal2;
}
function config(obj) {
  if (!obj || typeof obj !== "object") {
    throw Error(decimalError + "Object expected");
  }
  var i, p, v, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (i = 0; i < ps.length; i += 3) {
    if ((v = obj[p = ps[i]]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
      else throw Error(invalidArgument + p + ": " + v);
    }
  }
  if ((v = obj[p = "LN10"]) !== void 0) {
    if (v == Math.LN10) this[p] = new this(v);
    else throw Error(invalidArgument + p + ": " + v);
  }
  return this;
}
var Decimal = clone(defaults);
ONE = new Decimal(1);
const Decimal$1 = Decimal;
function _toConsumableArray$9(arr) {
  return _arrayWithoutHoles$9(arr) || _iterableToArray$a(arr) || _unsupportedIterableToArray$e(arr) || _nonIterableSpread$9();
}
function _nonIterableSpread$9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$e(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$e(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$e(o, minLen);
}
function _iterableToArray$a(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles$9(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$e(arr);
}
function _arrayLikeToArray$e(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var identity$1 = function identity(i) {
  return i;
};
var PLACE_HOLDER = {};
var isPlaceHolder = function isPlaceHolder2(val) {
  return val === PLACE_HOLDER;
};
var curry0 = function curry02(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? void 0 : arguments[0])) {
      return _curried;
    }
    return fn.apply(void 0, arguments);
  };
};
var curryN = function curryN2(n, fn) {
  if (n === 1) {
    return fn;
  }
  return curry0(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var argsLength = args.filter(function(arg) {
      return arg !== PLACE_HOLDER;
    }).length;
    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }
    return curryN2(n - argsLength, curry0(function() {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }
      var newArgs = args.map(function(arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray$9(newArgs).concat(restArgs));
    }));
  });
};
var curry = function curry2(fn) {
  return curryN(fn.length, fn);
};
var range$1 = function range(begin, end) {
  var arr = [];
  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }
  return arr;
};
var map = curry(function(fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }
  return Object.keys(arr).map(function(key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose2() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  if (!args.length) {
    return identity$1;
  }
  var fns = args.reverse();
  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function() {
    return tailsFn.reduce(function(res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse2(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  }
  return arr.split("").reverse.join("");
};
var memoize$1 = function memoize(fn) {
  var lastArgs = null;
  var lastResult = null;
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (lastArgs && args.every(function(val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};
function getDigitCount(value) {
  var result;
  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new Decimal$1(value).abs().log(10).toNumber()) + 1;
  }
  return result;
}
function rangeStep(start, end, step) {
  var num = new Decimal$1(start);
  var i = 0;
  var result = [];
  while (num.lt(end) && i < 1e5) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }
  return result;
}
var interpolateNumber = curry(function(a, b, t) {
  var newA = +a;
  var newB = +b;
  return newA + t * (newB - newA);
});
var uninterpolateNumber = curry(function(a, b, x2) {
  var diff = b - +a;
  diff = diff || Infinity;
  return (x2 - a) / diff;
});
var uninterpolateTruncation = curry(function(a, b, x2) {
  var diff = b - +a;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x2 - a) / diff));
});
const Arithmetic = {
  rangeStep,
  getDigitCount,
  interpolateNumber,
  uninterpolateNumber,
  uninterpolateTruncation
};
function _toConsumableArray$8(arr) {
  return _arrayWithoutHoles$8(arr) || _iterableToArray$9(arr) || _unsupportedIterableToArray$d(arr) || _nonIterableSpread$8();
}
function _nonIterableSpread$8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$9(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles$8(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$d(arr);
}
function _slicedToArray$7(arr, i) {
  return _arrayWithHoles$8(arr) || _iterableToArrayLimit$7(arr, i) || _unsupportedIterableToArray$d(arr, i) || _nonIterableRest$8();
}
function _nonIterableRest$8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$d(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$d(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$d(o, minLen);
}
function _arrayLikeToArray$d(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$7(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n2 = true;
  var _d2 = false;
  var _e2 = void 0;
  try {
    for (var _i2 = arr[Symbol.iterator](), _s; !(_n2 = (_s = _i2.next()).done); _n2 = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d2 = true;
    _e2 = err;
  } finally {
    try {
      if (!_n2 && _i2["return"] != null) _i2["return"]();
    } finally {
      if (_d2) throw _e2;
    }
  }
  return _arr;
}
function _arrayWithHoles$8(arr) {
  if (Array.isArray(arr)) return arr;
}
function getValidInterval(_ref) {
  var _ref2 = _slicedToArray$7(_ref, 2), min2 = _ref2[0], max2 = _ref2[1];
  var validMin = min2, validMax = max2;
  if (min2 > max2) {
    validMin = max2;
    validMax = min2;
  }
  return [validMin, validMax];
}
function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new Decimal$1(0);
  }
  var digitCount = Arithmetic.getDigitCount(roughStep.toNumber());
  var digitCountValue = new Decimal$1(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue);
  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new Decimal$1(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new Decimal$1(Math.ceil(formatStep));
}
function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1;
  var middle = new Decimal$1(value);
  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);
    if (absVal < 1) {
      step = new Decimal$1(10).pow(Arithmetic.getDigitCount(value) - 1);
      middle = new Decimal$1(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      middle = new Decimal$1(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new Decimal$1(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new Decimal$1(Math.floor(value));
  }
  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map(function(n) {
    return middle.add(new Decimal$1(n - middleIndex).mul(step)).toNumber();
  }), range$1);
  return fn(0, tickCount);
}
function calculateStep(min2, max2, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((max2 - min2) / (tickCount - 1))) {
    return {
      step: new Decimal$1(0),
      tickMin: new Decimal$1(0),
      tickMax: new Decimal$1(0)
    };
  }
  var step = getFormatStep(new Decimal$1(max2).sub(min2).div(tickCount - 1), allowDecimals, correctionFactor);
  var middle;
  if (min2 <= 0 && max2 >= 0) {
    middle = new Decimal$1(0);
  } else {
    middle = new Decimal$1(min2).add(max2).div(2);
    middle = middle.sub(new Decimal$1(middle).mod(step));
  }
  var belowCount = Math.ceil(middle.sub(min2).div(step).toNumber());
  var upCount = Math.ceil(new Decimal$1(max2).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;
  if (scaleCount > tickCount) {
    return calculateStep(min2, max2, tickCount, allowDecimals, correctionFactor + 1);
  }
  if (scaleCount < tickCount) {
    upCount = max2 > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max2 > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }
  return {
    step,
    tickMin: middle.sub(new Decimal$1(belowCount).mul(step)),
    tickMax: middle.add(new Decimal$1(upCount).mul(step))
  };
}
function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray$7(_ref3, 2), min2 = _ref4[0], max2 = _ref4[1];
  var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var count = Math.max(tickCount, 2);
  var _getValidInterval = getValidInterval([min2, max2]), _getValidInterval2 = _slicedToArray$7(_getValidInterval, 2), cormin = _getValidInterval2[0], cormax = _getValidInterval2[1];
  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(_toConsumableArray$8(range$1(0, tickCount - 1).map(function() {
      return Infinity;
    }))) : [].concat(_toConsumableArray$8(range$1(0, tickCount - 1).map(function() {
      return -Infinity;
    })), [cormax]);
    return min2 > max2 ? reverse(_values) : _values;
  }
  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }
  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals), step = _calculateStep.step, tickMin = _calculateStep.tickMin, tickMax = _calculateStep.tickMax;
  var values = Arithmetic.rangeStep(tickMin, tickMax.add(new Decimal$1(0.1).mul(step)), step);
  return min2 > max2 ? reverse(values) : values;
}
function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray$7(_ref7, 2), min2 = _ref8[0], max2 = _ref8[1];
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var _getValidInterval5 = getValidInterval([min2, max2]), _getValidInterval6 = _slicedToArray$7(_getValidInterval5, 2), cormin = _getValidInterval6[0], cormax = _getValidInterval6[1];
  if (cormin === -Infinity || cormax === Infinity) {
    return [min2, max2];
  }
  if (cormin === cormax) {
    return [cormin];
  }
  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new Decimal$1(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(_toConsumableArray$8(Arithmetic.rangeStep(new Decimal$1(cormin), new Decimal$1(cormax).sub(new Decimal$1(0.99).mul(step)), step)), [cormax]);
  return min2 > max2 ? reverse(values) : values;
}
var getNiceTickValues = memoize$1(getNiceTickValuesFn);
var getTickValuesFixedDomain = memoize$1(getTickValuesFixedDomainFn);
var _excluded$a = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function _typeof$v(o) {
  "@babel/helpers - typeof";
  return _typeof$v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$v(o);
}
function _extends$j() {
  _extends$j = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$j.apply(this, arguments);
}
function _slicedToArray$6(arr, i) {
  return _arrayWithHoles$7(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$c(arr, i) || _nonIterableRest$7();
}
function _nonIterableRest$7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$c(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$c(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$c(o, minLen);
}
function _arrayLikeToArray$c(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$7(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties$a(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$a(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$a(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$c(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$u(descriptor.key), descriptor);
  }
}
function _createClass$c(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$c(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$9(t, o, e) {
  return o = _getPrototypeOf$a(o), _possibleConstructorReturn$a(t, _isNativeReflectConstruct$a() ? Reflect.construct(o, e || [], _getPrototypeOf$a(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$a(self, call) {
  if (call && (_typeof$v(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$a(self);
}
function _assertThisInitialized$a(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$a() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$a(o) {
  _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$a(o);
}
function _inherits$a(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$a(subClass, superClass);
}
function _setPrototypeOf$a(o, p) {
  _setPrototypeOf$a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$a(o, p);
}
function _defineProperty$u(obj, key, value) {
  key = _toPropertyKey$u(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$u(t) {
  var i = _toPrimitive$u(t, "string");
  return "symbol" == _typeof$v(i) ? i : i + "";
}
function _toPrimitive$u(t, r) {
  if ("object" != _typeof$v(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$v(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ErrorBar = /* @__PURE__ */ function(_React$Component) {
  function ErrorBar2() {
    _classCallCheck$c(this, ErrorBar2);
    return _callSuper$9(this, ErrorBar2, arguments);
  }
  _inherits$a(ErrorBar2, _React$Component);
  return _createClass$c(ErrorBar2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, offset = _this$props.offset, layout = _this$props.layout, width = _this$props.width, dataKey = _this$props.dataKey, data = _this$props.data, dataPointFormatter = _this$props.dataPointFormatter, xAxis = _this$props.xAxis, yAxis = _this$props.yAxis, others = _objectWithoutProperties$a(_this$props, _excluded$a);
      var svgProps = filterProps(others, false);
      !!(this.props.direction === "x" && xAxis.type !== "number") ? invariant(false) : void 0;
      var errorBars = data.map(function(entry) {
        var _dataPointFormatter = dataPointFormatter(entry, dataKey), x2 = _dataPointFormatter.x, y2 = _dataPointFormatter.y, value = _dataPointFormatter.value, errorVal = _dataPointFormatter.errorVal;
        if (!errorVal) {
          return null;
        }
        var lineCoordinates = [];
        var lowBound, highBound;
        if (Array.isArray(errorVal)) {
          var _errorVal = _slicedToArray$6(errorVal, 2);
          lowBound = _errorVal[0];
          highBound = _errorVal[1];
        } else {
          lowBound = highBound = errorVal;
        }
        if (layout === "vertical") {
          var scale = xAxis.scale;
          var yMid = y2 + offset;
          var yMin = yMid + width;
          var yMax = yMid - width;
          var xMin = scale(value - lowBound);
          var xMax = scale(value + highBound);
          lineCoordinates.push({
            x1: xMax,
            y1: yMin,
            x2: xMax,
            y2: yMax
          });
          lineCoordinates.push({
            x1: xMin,
            y1: yMid,
            x2: xMax,
            y2: yMid
          });
          lineCoordinates.push({
            x1: xMin,
            y1: yMin,
            x2: xMin,
            y2: yMax
          });
        } else if (layout === "horizontal") {
          var _scale = yAxis.scale;
          var xMid = x2 + offset;
          var _xMin = xMid - width;
          var _xMax = xMid + width;
          var _yMin = _scale(value - lowBound);
          var _yMax = _scale(value + highBound);
          lineCoordinates.push({
            x1: _xMin,
            y1: _yMax,
            x2: _xMax,
            y2: _yMax
          });
          lineCoordinates.push({
            x1: xMid,
            y1: _yMin,
            x2: xMid,
            y2: _yMax
          });
          lineCoordinates.push({
            x1: _xMin,
            y1: _yMin,
            x2: _xMax,
            y2: _yMin
          });
        }
        return /* @__PURE__ */ React.createElement(Layer, _extends$j({
          className: "recharts-errorBar",
          key: "bar-".concat(lineCoordinates.map(function(c) {
            return "".concat(c.x1, "-").concat(c.x2, "-").concat(c.y1, "-").concat(c.y2);
          }))
        }, svgProps), lineCoordinates.map(function(coordinates) {
          return /* @__PURE__ */ React.createElement("line", _extends$j({}, coordinates, {
            key: "line-".concat(coordinates.x1, "-").concat(coordinates.x2, "-").concat(coordinates.y1, "-").concat(coordinates.y2)
          }));
        }));
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-errorBars"
      }, errorBars);
    }
  }]);
}(React.Component);
_defineProperty$u(ErrorBar, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
_defineProperty$u(ErrorBar, "displayName", "ErrorBar");
function _typeof$u(o) {
  "@babel/helpers - typeof";
  return _typeof$u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$u(o);
}
function ownKeys$q(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$q(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$q(Object(t), true).forEach(function(r2) {
      _defineProperty$t(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$q(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$t(obj, key, value) {
  key = _toPropertyKey$t(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$t(t) {
  var i = _toPrimitive$t(t, "string");
  return "symbol" == _typeof$u(i) ? i : i + "";
}
function _toPrimitive$t(t, r) {
  if ("object" != _typeof$u(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$u(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getLegendProps = function getLegendProps2(_ref) {
  var children = _ref.children, formattedGraphicalItems = _ref.formattedGraphicalItems, legendWidth = _ref.legendWidth, legendContent = _ref.legendContent;
  var legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }
  var legendDefaultProps = Legend.defaultProps;
  var legendProps = legendDefaultProps !== void 0 ? _objectSpread$q(_objectSpread$q({}, legendDefaultProps), legendItem.props) : {};
  var legendData;
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === "children") {
    legendData = (formattedGraphicalItems || []).reduce(function(result, _ref2) {
      var item = _ref2.item, props = _ref2.props;
      var data = props.sectors || props.data || [];
      return result.concat(data.map(function(entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(function(_ref3) {
      var item = _ref3.item;
      var itemDefaultProps = item.type.defaultProps;
      var itemProps = itemDefaultProps !== void 0 ? _objectSpread$q(_objectSpread$q({}, itemDefaultProps), item.props) : {};
      var dataKey = itemProps.dataKey, name = itemProps.name, legendType = itemProps.legendType, hide = itemProps.hide;
      return {
        inactive: hide,
        dataKey,
        type: legendProps.iconType || legendType || "square",
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        // @ts-expect-error property strokeDasharray is required in Payload but optional in props
        payload: itemProps
      };
    });
  }
  return _objectSpread$q(_objectSpread$q(_objectSpread$q({}, legendProps), Legend.getWithHeight(legendItem, legendWidth)), {}, {
    payload: legendData,
    item: legendItem
  });
};
function _typeof$t(o) {
  "@babel/helpers - typeof";
  return _typeof$t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$t(o);
}
function _toConsumableArray$7(arr) {
  return _arrayWithoutHoles$7(arr) || _iterableToArray$8(arr) || _unsupportedIterableToArray$b(arr) || _nonIterableSpread$7();
}
function _nonIterableSpread$7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$b(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$b(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$b(o, minLen);
}
function _iterableToArray$8(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$7(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$b(arr);
}
function _arrayLikeToArray$b(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function ownKeys$p(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$p(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$p(Object(t), true).forEach(function(r2) {
      _defineProperty$s(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$p(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$s(obj, key, value) {
  key = _toPropertyKey$s(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$s(t) {
  var i = _toPrimitive$s(t, "string");
  return "symbol" == _typeof$t(i) ? i : i + "";
}
function _toPrimitive$s(t, r) {
  if ("object" != _typeof$t(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$t(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getValueByDataKey(obj, dataKey, defaultValue) {
  if (isNil(obj) || isNil(dataKey)) {
    return defaultValue;
  }
  if (isNumOrStr(dataKey)) {
    return get(obj, dataKey, defaultValue);
  }
  if (isFunction(dataKey)) {
    return dataKey(obj);
  }
  return defaultValue;
}
function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = flatMap(data, function(entry) {
    return getValueByDataKey(entry, key);
  });
  if (type === "number") {
    var domain = flattenData.filter(function(entry) {
      return isNumber(entry) || parseFloat(entry);
    });
    return domain.length ? [min(domain), max(domain)] : [Infinity, -Infinity];
  }
  var validateData = filterNil ? flattenData.filter(function(entry) {
    return !isNil(entry);
  }) : flattenData;
  return validateData.map(function(entry) {
    return isNumOrStr(entry) || entry instanceof Date ? entry : "";
  });
}
var calculateActiveTickIndex = function calculateActiveTickIndex2(coordinate) {
  var _ticks$length;
  var ticks2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var unsortedTicks = arguments.length > 2 ? arguments[2] : void 0;
  var axis = arguments.length > 3 ? arguments[3] : void 0;
  var index = -1;
  var len = (_ticks$length = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
  if (len <= 1) {
    return 0;
  }
  if (axis && axis.axisType === "angleAxis" && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
    var range3 = axis.range;
    for (var i = 0; i < len; i++) {
      var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
      var cur = unsortedTicks[i].coordinate;
      var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
      var sameDirectionCoord = void 0;
      if (mathSign(cur - before) !== mathSign(after - cur)) {
        var diffInterval = [];
        if (mathSign(after - cur) === mathSign(range3[1] - range3[0])) {
          sameDirectionCoord = after;
          var curInRange = cur + range3[1] - range3[0];
          diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
          diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
        } else {
          sameDirectionCoord = before;
          var afterInRange = after + range3[1] - range3[0];
          diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
          diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
        }
        var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
        if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
          index = unsortedTicks[i].index;
          break;
        }
      } else {
        var minValue = Math.min(before, after);
        var maxValue = Math.max(before, after);
        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          index = unsortedTicks[i].index;
          break;
        }
      }
    }
  } else {
    for (var _i2 = 0; _i2 < len; _i2++) {
      if (_i2 === 0 && coordinate <= (ticks2[_i2].coordinate + ticks2[_i2 + 1].coordinate) / 2 || _i2 > 0 && _i2 < len - 1 && coordinate > (ticks2[_i2].coordinate + ticks2[_i2 - 1].coordinate) / 2 && coordinate <= (ticks2[_i2].coordinate + ticks2[_i2 + 1].coordinate) / 2 || _i2 === len - 1 && coordinate > (ticks2[_i2].coordinate + ticks2[_i2 - 1].coordinate) / 2) {
        index = ticks2[_i2].index;
        break;
      }
    }
  }
  return index;
};
var getMainColorOfGraphicItem = function getMainColorOfGraphicItem2(item) {
  var _item$type;
  var _ref = item, displayName = _ref.type.displayName;
  var defaultedProps = (_item$type = item.type) !== null && _item$type !== void 0 && _item$type.defaultProps ? _objectSpread$p(_objectSpread$p({}, item.type.defaultProps), item.props) : item.props;
  var stroke = defaultedProps.stroke, fill = defaultedProps.fill;
  var result;
  switch (displayName) {
    case "Line":
      result = stroke;
      break;
    case "Area":
    case "Radar":
      result = stroke && stroke !== "none" ? stroke : fill;
      break;
    default:
      result = fill;
      break;
  }
  return result;
};
var getBarSizeList = function getBarSizeList2(_ref2) {
  var globalSize = _ref2.barSize, totalSize = _ref2.totalSize, _ref2$stackGroups = _ref2.stackGroups, stackGroups = _ref2$stackGroups === void 0 ? {} : _ref2$stackGroups;
  if (!stackGroups) {
    return {};
  }
  var result = {};
  var numericAxisIds = Object.keys(stackGroups);
  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);
    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]], items = _sgs$stackIds$j.items, cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function(item) {
        return getDisplayName(item.type).indexOf("Bar") >= 0;
      });
      if (barItems && barItems.length) {
        var barItemDefaultProps = barItems[0].type.defaultProps;
        var barItemProps = barItemDefaultProps !== void 0 ? _objectSpread$p(_objectSpread$p({}, barItemDefaultProps), barItems[0].props) : barItems[0].props;
        var selfSize = barItemProps.barSize;
        var cateId = barItemProps[cateAxisId];
        if (!result[cateId]) {
          result[cateId] = [];
        }
        var barSize = isNil(selfSize) ? globalSize : selfSize;
        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: isNil(barSize) ? void 0 : getPercentValue(barSize, totalSize, 0)
        });
      }
    }
  }
  return result;
};
var getBarPosition = function getBarPosition2(_ref3) {
  var barGap = _ref3.barGap, barCategoryGap = _ref3.barCategoryGap, bandSize = _ref3.bandSize, _ref3$sizeList = _ref3.sizeList, sizeList = _ref3$sizeList === void 0 ? [] : _ref3$sizeList, maxBarSize = _ref3.maxBarSize;
  var len = sizeList.length;
  if (len < 1) return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce(function(res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function(res, entry) {
      var newPosition = {
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: useFull ? fullBarSize : entry.barSize
        }
      };
      var newRes = [].concat(_toConsumableArray$7(res), [newPosition]);
      prev = newRes[newRes.length - 1].position;
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: prev
          });
        });
      }
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function(res, entry, i) {
      var newRes = [].concat(_toConsumableArray$7(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size
        }
      }]);
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: newRes[newRes.length - 1].position
          });
        });
      }
      return newRes;
    }, initialValue);
  }
  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend2(offset, _unused, props, legendBox) {
  var children = props.children, width = props.width, margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendProps = getLegendProps({
    children,
    legendWidth
  });
  if (legendProps) {
    var _ref4 = legendBox || {}, boxWidth = _ref4.width, boxHeight = _ref4.height;
    var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
    if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && isNumber(offset[align])) {
      return _objectSpread$p(_objectSpread$p({}, offset), {}, _defineProperty$s({}, align, offset[align] + (boxWidth || 0)));
    }
    if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && isNumber(offset[verticalAlign])) {
      return _objectSpread$p(_objectSpread$p({}, offset), {}, _defineProperty$s({}, verticalAlign, offset[verticalAlign] + (boxHeight || 0)));
    }
  }
  return offset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis2(layout, axisType, direction) {
  if (isNil(axisType)) {
    return true;
  }
  if (layout === "horizontal") {
    return axisType === "yAxis";
  }
  if (layout === "vertical") {
    return axisType === "xAxis";
  }
  if (direction === "x") {
    return axisType === "xAxis";
  }
  if (direction === "y") {
    return axisType === "yAxis";
  }
  return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars2(data, item, dataKey, layout, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, ErrorBar).filter(function(errorBarChild) {
    return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
  });
  if (errorBars && errorBars.length) {
    var keys2 = errorBars.map(function(errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data.reduce(function(result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey);
      if (isNil(entryValue)) return result;
      var mainValue = Array.isArray(entryValue) ? [min(entryValue), max(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys2.reduce(function(prevErrorArr, k) {
        var errorValue = getValueByDataKey(entry, k, 0);
        var lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis2(data, items, dataKey, axisType, layout) {
  var domains = items.map(function(item) {
    return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
  }).filter(function(entry) {
    return !isNil(entry);
  });
  if (domains && domains.length) {
    return domains.reduce(function(result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis2(data, items, type, layout, filterNil) {
  var domains = items.map(function(item) {
    var dataKey = item.props.dataKey;
    if (type === "number" && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });
  if (type === "number") {
    return domains.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(result, entry) {
        return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
      },
      [Infinity, -Infinity]
    );
  }
  var tag = {};
  return domains.reduce(function(result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};
var isCategoricalAxis = function isCategoricalAxis2(layout, axisType) {
  return layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
};
var getCoordinatesOfGrid = function getCoordinatesOfGrid2(ticks2, minValue, maxValue, syncWithTicks) {
  if (syncWithTicks) {
    return ticks2.map(function(entry) {
      return entry.coordinate;
    });
  }
  var hasMin, hasMax;
  var values = ticks2.map(function(entry) {
    if (entry.coordinate === minValue) {
      hasMin = true;
    }
    if (entry.coordinate === maxValue) {
      hasMax = true;
    }
    return entry.coordinate;
  });
  if (!hasMin) {
    values.push(minValue);
  }
  if (!hasMax) {
    values.push(maxValue);
  }
  return values;
};
var getTicksOfAxis = function getTicksOfAxis2(axis, isGrid, isAll) {
  if (!axis) return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain, type = axis.type, range3 = axis.range;
  var offsetForBand = axis.realScaleType === "scaleBand" ? scale.bandwidth() / 2 : 2;
  var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
  offset = axis.axisType === "angleAxis" && (range3 === null || range3 === void 0 ? void 0 : range3.length) >= 2 ? mathSign(range3[0] - range3[1]) * 2 * offset : offset;
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    var result = (axis.ticks || axis.niceTicks).map(function(entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset
      };
    });
    return result.filter(function(row) {
      return !isNan(row.coordinate);
    });
  }
  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function(entry, index) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      };
    });
  }
  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function(entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset
      };
    });
  }
  return scale.domain().map(function(entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    };
  });
};
var handlerWeakMap = /* @__PURE__ */ new WeakMap();
var combineEventHandlers = function combineEventHandlers2(defaultHandler, childHandler) {
  if (typeof childHandler !== "function") {
    return defaultHandler;
  }
  if (!handlerWeakMap.has(defaultHandler)) {
    handlerWeakMap.set(defaultHandler, /* @__PURE__ */ new WeakMap());
  }
  var childWeakMap = handlerWeakMap.get(defaultHandler);
  if (childWeakMap.has(childHandler)) {
    return childWeakMap.get(childHandler);
  }
  var combineHandler = function combineHandler2() {
    defaultHandler.apply(void 0, arguments);
    childHandler.apply(void 0, arguments);
  };
  childWeakMap.set(childHandler, combineHandler);
  return combineHandler;
};
var parseScale = function parseScale2(axis, chartType, hasBar) {
  var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
  if (scale === "auto") {
    if (layout === "radial" && axisType === "radiusAxis") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    if (layout === "radial" && axisType === "angleAxis") {
      return {
        scale: linear(),
        realScaleType: "linear"
      };
    }
    if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) {
      return {
        scale: point(),
        realScaleType: "point"
      };
    }
    if (type === "category") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    return {
      scale: linear(),
      realScaleType: "linear"
    };
  }
  if (isString(scale)) {
    var name = "scale".concat(upperFirst(scale));
    return {
      scale: (d3Scales[name] || point)(),
      realScaleType: d3Scales[name] ? name : "point"
    };
  }
  return isFunction(scale) ? {
    scale
  } : {
    scale: point(),
    realScaleType: "point"
  };
};
var EPS = 1e-4;
var checkDomainOfScale = function checkDomainOfScale2(scale) {
  var domain = scale.domain();
  if (!domain || domain.length <= 2) {
    return;
  }
  var len = domain.length;
  var range3 = scale.range();
  var minValue = Math.min(range3[0], range3[1]) - EPS;
  var maxValue = Math.max(range3[0], range3[1]) + EPS;
  var first = scale(domain[0]);
  var last2 = scale(domain[len - 1]);
  if (first < minValue || first > maxValue || last2 < minValue || last2 > maxValue) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
var findPositionOfBar = function findPositionOfBar2(barPosition, child) {
  if (!barPosition) {
    return null;
  }
  for (var i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }
  return null;
};
var truncateByDomain = function truncateByDomain2(value, domain) {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
    return value;
  }
  var minValue = Math.min(domain[0], domain[1]);
  var maxValue = Math.max(domain[0], domain[1]);
  var result = [value[0], value[1]];
  if (!isNumber(value[0]) || value[0] < minValue) {
    result[0] = minValue;
  }
  if (!isNumber(value[1]) || value[1] > maxValue) {
    result[1] = maxValue;
  }
  if (result[0] > maxValue) {
    result[0] = maxValue;
  }
  if (result[1] < minValue) {
    result[1] = minValue;
  }
  return result;
};
var offsetSign = function offsetSign2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < n; ++i) {
      var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
    }
  }
};
var offsetPositive = function offsetPositive2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    for (var i = 0; i < n; ++i) {
      var value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
    }
  }
};
var STACK_OFFSET_MAP = {
  sign: offsetSign,
  // @ts-expect-error definitelytyped types are incorrect
  expand: stackOffsetExpand,
  // @ts-expect-error definitelytyped types are incorrect
  none: stackOffsetNone,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: stackOffsetSilhouette,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: stackOffsetWiggle,
  positive: offsetPositive
};
var getStackedData = function getStackedData2(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function(item) {
    return item.props.dataKey;
  });
  var offsetAccessor = STACK_OFFSET_MAP[offsetType];
  var stack = shapeStack().keys(dataKeys).value(function(d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(stackOrderNone).offset(offsetAccessor);
  return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId2(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data) {
    return null;
  }
  var items = reverseStackOrder ? _items.reverse() : _items;
  var parentStackGroupsInitialValue = {};
  var stackGroups = items.reduce(function(result, item) {
    var _item$type2;
    var defaultedProps = (_item$type2 = item.type) !== null && _item$type2 !== void 0 && _item$type2.defaultProps ? _objectSpread$p(_objectSpread$p({}, item.type.defaultProps), item.props) : item.props;
    var stackId = defaultedProps.stackId, hide = defaultedProps.hide;
    if (hide) {
      return result;
    }
    var axisId = defaultedProps[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };
    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId,
        cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId("_stackId_")] = {
        numericAxisId,
        cateAxisId,
        items: [item]
      };
    }
    return _objectSpread$p(_objectSpread$p({}, result), {}, _defineProperty$s({}, axisId, parentGroup));
  }, parentStackGroupsInitialValue);
  var axisStackGroupsInitialValue = {};
  return Object.keys(stackGroups).reduce(function(result, axisId) {
    var group = stackGroups[axisId];
    if (group.hasStack) {
      var stackGroupsInitialValue = {};
      group.stackGroups = Object.keys(group.stackGroups).reduce(function(res, stackId) {
        var g = group.stackGroups[stackId];
        return _objectSpread$p(_objectSpread$p({}, res), {}, _defineProperty$s({}, stackId, {
          numericAxisId,
          cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, stackGroupsInitialValue);
    }
    return _objectSpread$p(_objectSpread$p({}, result), {}, _defineProperty$s({}, axisId, group));
  }, axisStackGroupsInitialValue);
};
var getTicksOfScale = function getTicksOfScale2(scale, opts) {
  var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;
  if (scaleType !== "auto" && scaleType !== "linear") {
    return null;
  }
  if (tickCount && type === "number" && originalDomain && (originalDomain[0] === "auto" || originalDomain[1] === "auto")) {
    var domain = scale.domain();
    if (!domain.length) {
      return null;
    }
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain([min(tickValues), max(tickValues)]);
    return {
      niceTicks: tickValues
    };
  }
  if (tickCount && type === "number") {
    var _domain = scale.domain();
    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);
    return {
      niceTicks: _tickValues
    };
  }
  return null;
};
var getCateCoordinateOfBar = function getCateCoordinateOfBar2(_ref6) {
  var axis = _ref6.axis, ticks2 = _ref6.ticks, offset = _ref6.offset, bandSize = _ref6.bandSize, entry = _ref6.entry, index = _ref6.index;
  if (axis.type === "category") {
    return ticks2[index] ? ticks2[index].coordinate + offset : null;
  }
  var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
  return !isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar2(_ref7) {
  var numericAxis = _ref7.numericAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    if (minValue <= 0 && maxValue >= 0) {
      return 0;
    }
    if (maxValue < 0) {
      return maxValue;
    }
    return minValue;
  }
  return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem2(item, stackGroups) {
  var _item$type3;
  var defaultedProps = (_item$type3 = item.type) !== null && _item$type3 !== void 0 && _item$type3.defaultProps ? _objectSpread$p(_objectSpread$p({}, item.type.defaultProps), item.props) : item.props;
  var stackId = defaultedProps.stackId;
  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];
    if (group) {
      var itemIndex = group.items.indexOf(item);
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }
  return null;
};
var getDomainOfSingle = function getDomainOfSingle2(data) {
  return data.reduce(function(result, entry) {
    return [min(entry.concat([result[0]]).filter(isNumber)), max(entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups2(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function(result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function(res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function(result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain2(specifiedDomain, dataDomain, allowDataOverflow) {
  if (isFunction(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }
  if (!Array.isArray(specifiedDomain)) {
    return dataDomain;
  }
  var domain = [];
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if (isFunction(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }
  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
    domain[1] = dataDomain[1] + _value;
  } else if (isFunction(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  return domain;
};
var getBandSizeOfAxis = function getBandSizeOfAxis2(axis, ticks2, isBar) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    var bandWidth = axis.scale.bandwidth();
    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }
  if (axis && ticks2 && ticks2.length >= 2) {
    var orderedTicks = sortBy(ticks2, function(o) {
      return o.coordinate;
    });
    var bandSize = Infinity;
    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }
    return bandSize === Infinity ? 0 : bandSize;
  }
  return isBar ? void 0 : 0;
};
var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis2(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }
  if (isEqual(specifiedDomain, get(axisChild, "type.defaultProps.domain"))) {
    return calculatedDomain;
  }
  return specifiedDomain;
};
var getTooltipItem = function getTooltipItem2(graphicalItem, payload) {
  var defaultedProps = graphicalItem.type.defaultProps ? _objectSpread$p(_objectSpread$p({}, graphicalItem.type.defaultProps), graphicalItem.props) : graphicalItem.props;
  var dataKey = defaultedProps.dataKey, name = defaultedProps.name, unit2 = defaultedProps.unit, formatter = defaultedProps.formatter, tooltipType = defaultedProps.tooltipType, chartType = defaultedProps.chartType, hide = defaultedProps.hide;
  return _objectSpread$p(_objectSpread$p({}, filterProps(graphicalItem, false)), {}, {
    dataKey,
    unit: unit2,
    formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload,
    chartType,
    hide
  });
};
function _typeof$s(o) {
  "@babel/helpers - typeof";
  return _typeof$s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$s(o);
}
function ownKeys$o(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$o(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$o(Object(t), true).forEach(function(r2) {
      _defineProperty$r(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$o(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$r(obj, key, value) {
  key = _toPropertyKey$r(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$r(t) {
  var i = _toPrimitive$r(t, "string");
  return "symbol" == _typeof$s(i) ? i : i + "";
}
function _toPrimitive$r(t, r) {
  if ("object" != _typeof$s(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$s(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RADIAN = Math.PI / 180;
var radianToDegree = function radianToDegree2(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian2(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  };
};
var distanceBetweenPoints = function distanceBetweenPoints2(point2, anotherPoint) {
  var x1 = point2.x, y1 = point2.y;
  var x2 = anotherPoint.x, y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint2(_ref, _ref2) {
  var x2 = _ref.x, y2 = _ref.y;
  var cx = _ref2.cx, cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x2,
    y: y2
  }, {
    x: cx,
    y: cy
  });
  if (radius <= 0) {
    return {
      radius
    };
  }
  var cos = (x2 - cx) / radius;
  var angleInRadian = Math.acos(cos);
  if (y2 > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }
  return {
    radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector2(_ref3) {
  var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min2 = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min2 * 360,
    endAngle: endAngle - min2 * 360
  };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor2(angle, _ref4) {
  var startAngle = _ref4.startAngle, endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min2 = Math.min(startCnt, endCnt);
  return angle + min2 * 360;
};
var inRangeOfSector = function inRangeOfSector2(_ref5, sector) {
  var x2 = _ref5.x, y2 = _ref5.y;
  var _getAngleOfPoint = getAngleOfPoint({
    x: x2,
    y: y2
  }, sector), radius = _getAngleOfPoint.radius, angle = _getAngleOfPoint.angle;
  var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }
  if (radius === 0) {
    return true;
  }
  var _formatAngleOfSector = formatAngleOfSector(sector), startAngle = _formatAngleOfSector.startAngle, endAngle = _formatAngleOfSector.endAngle;
  var formatAngle = angle;
  var inRange;
  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < startAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < endAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }
  if (inRange) {
    return _objectSpread$o(_objectSpread$o({}, sector), {}, {
      radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }
  return null;
};
function _typeof$r(o) {
  "@babel/helpers - typeof";
  return _typeof$r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$r(o);
}
var _excluded$9 = ["offset"];
function _toConsumableArray$6(arr) {
  return _arrayWithoutHoles$6(arr) || _iterableToArray$7(arr) || _unsupportedIterableToArray$a(arr) || _nonIterableSpread$6();
}
function _nonIterableSpread$6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$a(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$a(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$a(o, minLen);
}
function _iterableToArray$7(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$6(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$a(arr);
}
function _arrayLikeToArray$a(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _objectWithoutProperties$9(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$9(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function ownKeys$n(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$n(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$n(Object(t), true).forEach(function(r2) {
      _defineProperty$q(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$n(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$q(obj, key, value) {
  key = _toPropertyKey$q(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$q(t) {
  var i = _toPrimitive$q(t, "string");
  return "symbol" == _typeof$r(i) ? i : i + "";
}
function _toPrimitive$q(t, r) {
  if ("object" != _typeof$r(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$r(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$i() {
  _extends$i = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$i.apply(this, arguments);
}
var getLabel = function getLabel2(props) {
  var value = props.value, formatter = props.formatter;
  var label = isNil(props.children) ? value : props.children;
  if (isFunction(formatter)) {
    return formatter(label);
  }
  return label;
};
var getDeltaAngle$1 = function getDeltaAngle(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign2 * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel2(labelProps, label, attrs) {
  var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
  var _ref = viewBox, cx = _ref.cx, cy = _ref.cy, innerRadius = _ref.innerRadius, outerRadius = _ref.outerRadius, startAngle = _ref.startAngle, endAngle = _ref.endAngle, clockWise = _ref.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle$1(startAngle, endAngle);
  var sign2 = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;
  if (position === "insideStart") {
    labelAngle = startAngle + sign2 * offset;
    direction = clockWise;
  } else if (position === "insideEnd") {
    labelAngle = endAngle - sign2 * offset;
    direction = !clockWise;
  } else if (position === "end") {
    labelAngle = endAngle + sign2 * offset;
    direction = clockWise;
  }
  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = isNil(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
  return /* @__PURE__ */ React.createElement("text", _extends$i({}, attrs, {
    dominantBaseline: "central",
    className: clsx("recharts-radial-bar-label", className)
  }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("path", {
    id,
    d: path
  })), /* @__PURE__ */ React.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel2(props) {
  var viewBox = props.viewBox, offset = props.offset, position = props.position;
  var _ref2 = viewBox, cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var midAngle = (startAngle + endAngle) / 2;
  if (position === "outside") {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle), _x = _polarToCartesian.x, _y = _polarToCartesian.y;
    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (position === "center") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  }
  if (position === "centerTop") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  }
  if (position === "centerBottom") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  }
  var r = (innerRadius + outerRadius) / 2;
  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle), x2 = _polarToCartesian2.x, y2 = _polarToCartesian2.y;
  return {
    x: x2,
    y: y2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel2(props) {
  var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
  var _ref3 = viewBox, x2 = _ref3.x, y2 = _ref3.y, width = _ref3.width, height = _ref3.height;
  var verticalSign = height >= 0 ? 1 : -1;
  var verticalOffset = verticalSign * offset;
  var verticalEnd = verticalSign > 0 ? "end" : "start";
  var verticalStart = verticalSign > 0 ? "start" : "end";
  var horizontalSign = width >= 0 ? 1 : -1;
  var horizontalOffset = horizontalSign * offset;
  var horizontalEnd = horizontalSign > 0 ? "end" : "start";
  var horizontalStart = horizontalSign > 0 ? "start" : "end";
  if (position === "top") {
    var attrs = {
      x: x2 + width / 2,
      y: y2 - verticalSign * offset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    };
    return _objectSpread$n(_objectSpread$n({}, attrs), parentViewBox ? {
      height: Math.max(y2 - parentViewBox.y, 0),
      width
    } : {});
  }
  if (position === "bottom") {
    var _attrs = {
      x: x2 + width / 2,
      y: y2 + height + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    };
    return _objectSpread$n(_objectSpread$n({}, _attrs), parentViewBox ? {
      height: Math.max(parentViewBox.y + parentViewBox.height - (y2 + height), 0),
      width
    } : {});
  }
  if (position === "left") {
    var _attrs2 = {
      x: x2 - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    };
    return _objectSpread$n(_objectSpread$n({}, _attrs2), parentViewBox ? {
      width: Math.max(_attrs2.x - parentViewBox.x, 0),
      height
    } : {});
  }
  if (position === "right") {
    var _attrs3 = {
      x: x2 + width + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    };
    return _objectSpread$n(_objectSpread$n({}, _attrs3), parentViewBox ? {
      width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
      height
    } : {});
  }
  var sizeAttrs = parentViewBox ? {
    width,
    height
  } : {};
  if (position === "insideLeft") {
    return _objectSpread$n({
      x: x2 + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideRight") {
    return _objectSpread$n({
      x: x2 + width - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideTop") {
    return _objectSpread$n({
      x: x2 + width / 2,
      y: y2 + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottom") {
    return _objectSpread$n({
      x: x2 + width / 2,
      y: y2 + height - verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideTopLeft") {
    return _objectSpread$n({
      x: x2 + horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideTopRight") {
    return _objectSpread$n({
      x: x2 + width - horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottomLeft") {
    return _objectSpread$n({
      x: x2 + horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideBottomRight") {
    return _objectSpread$n({
      x: x2 + width - horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (isObject(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return _objectSpread$n({
      x: x2 + getPercentValue(position.x, width),
      y: y2 + getPercentValue(position.y, height),
      textAnchor: "end",
      verticalAnchor: "end"
    }, sizeAttrs);
  }
  return _objectSpread$n({
    x: x2 + width / 2,
    y: y2 + height / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, sizeAttrs);
};
var isPolar = function isPolar2(viewBox) {
  return "cx" in viewBox && isNumber(viewBox.cx);
};
function Label(_ref4) {
  var _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 5 : _ref4$offset, restProps = _objectWithoutProperties$9(_ref4, _excluded$9);
  var props = _objectSpread$n({
    offset
  }, restProps);
  var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, textBreakAll = props.textBreakAll;
  if (!viewBox || isNil(value) && isNil(children) && !/* @__PURE__ */ reactExports.isValidElement(content) && !isFunction(content)) {
    return null;
  }
  if (/* @__PURE__ */ reactExports.isValidElement(content)) {
    return /* @__PURE__ */ reactExports.cloneElement(content, props);
  }
  var label;
  if (isFunction(content)) {
    label = /* @__PURE__ */ reactExports.createElement(content, props);
    if (/* @__PURE__ */ reactExports.isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }
  var isPolarLabel = isPolar(viewBox);
  var attrs = filterProps(props, true);
  if (isPolarLabel && (position === "insideStart" || position === "insideEnd" || position === "end")) {
    return renderRadialLabel(props, label, attrs);
  }
  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return /* @__PURE__ */ React.createElement(Text, _extends$i({
    className: clsx("recharts-label", className)
  }, attrs, positionAttrs, {
    breakAll: textBreakAll
  }), label);
}
Label.displayName = "Label";
var parseViewBox = function parseViewBox2(props) {
  var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x2 = props.x, y2 = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
  if (labelViewBox) {
    return labelViewBox;
  }
  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x2) && isNumber(y2)) {
      return {
        x: x2,
        y: y2,
        width,
        height
      };
    }
    if (isNumber(top) && isNumber(left)) {
      return {
        x: top,
        y: left,
        width,
        height
      };
    }
  }
  if (isNumber(x2) && isNumber(y2)) {
    return {
      x: x2,
      y: y2,
      width: 0,
      height: 0
    };
  }
  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx,
      cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise
    };
  }
  if (props.viewBox) {
    return props.viewBox;
  }
  return {};
};
var parseLabel = function parseLabel2(label, viewBox) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ React.createElement(Label, {
      key: "label-implicit",
      viewBox
    });
  }
  if (isNumOrStr(label)) {
    return /* @__PURE__ */ React.createElement(Label, {
      key: "label-implicit",
      viewBox,
      value: label
    });
  }
  if (/* @__PURE__ */ reactExports.isValidElement(label)) {
    if (label.type === Label) {
      return /* @__PURE__ */ reactExports.cloneElement(label, {
        key: "label-implicit",
        viewBox
      });
    }
    return /* @__PURE__ */ React.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if (isFunction(label)) {
    return /* @__PURE__ */ React.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if (isObject(label)) {
    return /* @__PURE__ */ React.createElement(Label, _extends$i({
      viewBox
    }, label, {
      key: "label-implicit"
    }));
  }
  return null;
};
var renderCallByParent$1 = function renderCallByParent(parentProps, viewBox) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChildren = findAllByType(children, Label).map(function(child, index) {
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(_toConsumableArray$6(explicitChildren));
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent$1;
var last_1;
var hasRequiredLast;
function requireLast() {
  if (hasRequiredLast) return last_1;
  hasRequiredLast = 1;
  function last2(array2) {
    var length = array2 == null ? 0 : array2.length;
    return length ? array2[length - 1] : void 0;
  }
  last_1 = last2;
  return last_1;
}
var lastExports = requireLast();
const last = /* @__PURE__ */ getDefaultExportFromCjs(lastExports);
function _typeof$q(o) {
  "@babel/helpers - typeof";
  return _typeof$q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$q(o);
}
var _excluded$8 = ["valueAccessor"], _excluded2$3 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function _toConsumableArray$5(arr) {
  return _arrayWithoutHoles$5(arr) || _iterableToArray$6(arr) || _unsupportedIterableToArray$9(arr) || _nonIterableSpread$5();
}
function _nonIterableSpread$5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$9(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$9(o, minLen);
}
function _iterableToArray$6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$5(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$9(arr);
}
function _arrayLikeToArray$9(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _extends$h() {
  _extends$h = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$h.apply(this, arguments);
}
function ownKeys$m(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$m(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$m(Object(t), true).forEach(function(r2) {
      _defineProperty$p(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$p(obj, key, value) {
  key = _toPropertyKey$p(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$p(t) {
  var i = _toPrimitive$p(t, "string");
  return "symbol" == _typeof$q(i) ? i : i + "";
}
function _toPrimitive$p(t, r) {
  if ("object" != _typeof$q(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$q(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$8(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$8(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var defaultAccessor = function defaultAccessor2(entry) {
  return Array.isArray(entry.value) ? last(entry.value) : entry.value;
};
function LabelList(_ref) {
  var _ref$valueAccessor = _ref.valueAccessor, valueAccessor = _ref$valueAccessor === void 0 ? defaultAccessor : _ref$valueAccessor, restProps = _objectWithoutProperties$8(_ref, _excluded$8);
  var data = restProps.data, dataKey = restProps.dataKey, clockWise = restProps.clockWise, id = restProps.id, textBreakAll = restProps.textBreakAll, others = _objectWithoutProperties$8(restProps, _excluded2$3);
  if (!data || !data.length) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Layer, {
    className: "recharts-label-list"
  }, data.map(function(entry, index) {
    var value = isNil(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = isNil(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return /* @__PURE__ */ React.createElement(Label, _extends$h({}, filterProps(entry, true), others, idProps, {
      parentViewBox: entry.parentViewBox,
      value,
      textBreakAll,
      viewBox: Label.parseViewBox(isNil(clockWise) ? entry : _objectSpread$m(_objectSpread$m({}, entry), {}, {
        clockWise
      })),
      key: "label-".concat(index),
      index
    }));
  }));
}
LabelList.displayName = "LabelList";
function parseLabelList(label, data) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ React.createElement(LabelList, {
      key: "labelList-implicit",
      data
    });
  }
  if (/* @__PURE__ */ React.isValidElement(label) || isFunction(label)) {
    return /* @__PURE__ */ React.createElement(LabelList, {
      key: "labelList-implicit",
      data,
      content: label
    });
  }
  if (isObject(label)) {
    return /* @__PURE__ */ React.createElement(LabelList, _extends$h({
      data
    }, label, {
      key: "labelList-implicit"
    }));
  }
  return null;
}
function renderCallByParent2(parentProps, data) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var explicitChildren = findAllByType(children, LabelList).map(function(child, index) {
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      data,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabelList = parseLabelList(parentProps.label, data);
  return [implicitLabelList].concat(_toConsumableArray$5(explicitChildren));
}
LabelList.renderCallByParent = renderCallByParent2;
function _typeof$p(o) {
  "@babel/helpers - typeof";
  return _typeof$p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$p(o);
}
function _extends$g() {
  _extends$g = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$g.apply(this, arguments);
}
function ownKeys$l(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$l(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$l(Object(t), true).forEach(function(r2) {
      _defineProperty$o(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$o(obj, key, value) {
  key = _toPropertyKey$o(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$o(t) {
  var i = _toPrimitive$o(t, "string");
  return "symbol" == _typeof$p(i) ? i : i + "";
}
function _toPrimitive$o(t, r) {
  if ("object" != _typeof$p(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$p(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getDeltaAngle2 = function getDeltaAngle3(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign2 * deltaAngle;
};
var getTangentCircle = function getTangentCircle2(_ref) {
  var cx = _ref.cx, cy = _ref.cy, radius = _ref.radius, angle = _ref.angle, sign2 = _ref.sign, isExternal = _ref.isExternal, cornerRadius = _ref.cornerRadius, cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  var centerAngle = cornerIsExternal ? angle : angle + sign2 * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  var lineTangencyAngle = cornerIsExternal ? angle - sign2 * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
  return {
    center,
    circleTangency,
    lineTangency,
    theta
  };
};
var getSectorPath = function getSectorPath2(_ref2) {
  var cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var angle = getDeltaAngle2(startAngle, endAngle);
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path += "L ".concat(cx, ",").concat(cy, " Z");
  }
  return path;
};
var getSectorWithCorner = function getSectorWithCorner2(_ref3) {
  var cx = _ref3.cx, cy = _ref3.cy, innerRadius = _ref3.innerRadius, outerRadius = _ref3.outerRadius, cornerRadius = _ref3.cornerRadius, forceCornerRadius = _ref3.forceCornerRadius, cornerIsExternal = _ref3.cornerIsExternal, startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var sign2 = mathSign(endAngle - startAngle);
  var _getTangentCircle = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: startAngle,
    sign: sign2,
    cornerRadius,
    cornerIsExternal
  }), soct = _getTangentCircle.circleTangency, solt = _getTangentCircle.lineTangency, sot = _getTangentCircle.theta;
  var _getTangentCircle2 = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign2,
    cornerRadius,
    cornerIsExternal
  }), eoct = _getTangentCircle2.circleTangency, eolt = _getTangentCircle2.lineTangency, eot = _getTangentCircle2.theta;
  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }
    return getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign2 < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: startAngle,
      sign: sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), sict = _getTangentCircle3.circleTangency, silt = _getTangentCircle3.lineTangency, sit = _getTangentCircle3.theta;
    var _getTangentCircle4 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), eict = _getTangentCircle4.circleTangency, eilt = _getTangentCircle4.lineTangency, eit = _getTangentCircle4.theta;
    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
    }
    path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign2 > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path += "L".concat(cx, ",").concat(cy, "Z");
  }
  return path;
};
var defaultProps$3 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};
var Sector = function Sector2(sectorProps) {
  var props = _objectSpread$l(_objectSpread$l({}, defaultProps$3), sectorProps);
  var cx = props.cx, cy = props.cy, innerRadius = props.innerRadius, outerRadius = props.outerRadius, cornerRadius = props.cornerRadius, forceCornerRadius = props.forceCornerRadius, cornerIsExternal = props.cornerIsExternal, startAngle = props.startAngle, endAngle = props.endAngle, className = props.className;
  if (outerRadius < innerRadius || startAngle === endAngle) {
    return null;
  }
  var layerClass = clsx("recharts-sector", className);
  var deltaRadius = outerRadius - innerRadius;
  var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
  var path;
  if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
    path = getSectorWithCorner({
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius: Math.min(cr, deltaRadius / 2),
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle
    });
  } else {
    path = getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  return /* @__PURE__ */ React.createElement("path", _extends$g({}, filterProps(props, true), {
    className: layerClass,
    d: path,
    role: "img"
  }));
};
function _typeof$o(o) {
  "@babel/helpers - typeof";
  return _typeof$o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$o(o);
}
function _extends$f() {
  _extends$f = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$f.apply(this, arguments);
}
function ownKeys$k(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$k(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$k(Object(t), true).forEach(function(r2) {
      _defineProperty$n(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$n(obj, key, value) {
  key = _toPropertyKey$n(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$n(t) {
  var i = _toPrimitive$n(t, "string");
  return "symbol" == _typeof$o(i) ? i : i + "";
}
function _toPrimitive$n(t, r) {
  if ("object" != _typeof$o(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$o(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CURVE_FACTORIES = {
  curveBasisClosed,
  curveBasisOpen,
  curveBasis,
  curveBumpX: bumpX,
  curveBumpY: bumpY,
  curveLinearClosed,
  curveLinear,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural,
  curveStep,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};
var defined = function defined2(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX2(p) {
  return p.x;
};
var getY = function getY2(p) {
  return p.y;
};
var getCurveFactory = function getCurveFactory2(type, layout) {
  if (isFunction(type)) {
    return type;
  }
  var name = "curve".concat(upperFirst(type));
  if ((name === "curveMonotone" || name === "curveBump") && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
  }
  return CURVE_FACTORIES[name] || curveLinear;
};
var getPath$1 = function getPath(_ref) {
  var _ref$type = _ref.type, type = _ref$type === void 0 ? "linear" : _ref$type, _ref$points = _ref.points, points = _ref$points === void 0 ? [] : _ref$points, baseLine = _ref.baseLine, layout = _ref.layout, _ref$connectNulls = _ref.connectNulls, connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;
  var curveFactory = getCurveFactory(type, layout);
  var formatPoints = connectNulls ? points.filter(function(entry) {
    return defined(entry);
  }) : points;
  var lineFunction;
  if (Array.isArray(baseLine)) {
    var formatBaseLine = connectNulls ? baseLine.filter(function(base) {
      return defined(base);
    }) : baseLine;
    var areaPoints = formatPoints.map(function(entry, index) {
      return _objectSpread$k(_objectSpread$k({}, entry), {}, {
        base: formatBaseLine[index]
      });
    });
    if (layout === "vertical") {
      lineFunction = shapeArea().y(getY).x1(getX).x0(function(d) {
        return d.base.x;
      });
    } else {
      lineFunction = shapeArea().x(getX).y1(getY).y0(function(d) {
        return d.base.y;
      });
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(areaPoints);
  }
  if (layout === "vertical" && isNumber(baseLine)) {
    lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = shapeLine().x(getX).y(getY);
  }
  lineFunction.defined(defined).curve(curveFactory);
  return lineFunction(formatPoints);
};
var Curve = function Curve2(props) {
  var className = props.className, points = props.points, path = props.path, pathRef = props.pathRef;
  if ((!points || !points.length) && !path) {
    return null;
  }
  var realPath = points && points.length ? getPath$1(props) : path;
  return /* @__PURE__ */ React.createElement("path", _extends$f({}, filterProps(props, false), adaptEventHandlers(props), {
    className: clsx("recharts-curve", className),
    d: realPath,
    ref: pathRef
  }));
};
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return function isEqual2(a, b, state) {
    return comparatorA(a, b, state) && comparatorB(a, b, state);
  };
}
function createIsCircular(areItemsEqual) {
  return function isCircular(a, b, state) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
      return areItemsEqual(a, b, state);
    }
    var cache = state.cache;
    var cachedA = cache.get(a);
    var cachedB = cache.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a;
    }
    cache.set(a, b);
    cache.set(b, a);
    var result = areItemsEqual(a, b, state);
    cache.delete(a);
    cache.delete(b);
    return result;
  };
}
function getStrictProperties(object2) {
  return getOwnPropertyNames(object2).concat(getOwnPropertySymbols(object2));
}
var hasOwn = Object.hasOwn || function(object2, property) {
  return hasOwnProperty.call(object2, property);
};
function sameValueZeroEqual(a, b) {
  return a === b || !a && !b && a !== a && b !== b;
}
var PREACT_VNODE = "__v";
var PREACT_OWNER = "__o";
var REACT_OWNER = "_owner";
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, keys = Object.keys;
function areArraysEqual(a, b, state) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!state.equals(a[index], b[index], index, index, a, b, state)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(a, b) {
  return sameValueZeroEqual(a.getTime(), b.getTime());
}
function areErrorsEqual(a, b) {
  return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack;
}
function areFunctionsEqual(a, b) {
  return a === b;
}
function areMapsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.entries();
  var aResult;
  var bResult;
  var index = 0;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (matchedIndices[matchIndex]) {
        matchIndex++;
        continue;
      }
      var aEntry = aResult.value;
      var bEntry = bResult.value;
      if (state.equals(aEntry[0], bEntry[0], index, matchIndex, a, b, state) && state.equals(aEntry[1], bEntry[1], aEntry[0], bEntry[0], a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index++;
  }
  return true;
}
var areNumbersEqual = sameValueZeroEqual;
function areObjectsEqual(a, b, state) {
  var properties = keys(a);
  var index = properties.length;
  if (keys(b).length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!isPropertyEqual(a, b, state, properties[index])) {
      return false;
    }
  }
  return true;
}
function areObjectsEqualStrict(a, b, state) {
  var properties = getStrictProperties(a);
  var index = properties.length;
  if (getStrictProperties(b).length !== index) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index-- > 0) {
    property = properties[index];
    if (!isPropertyEqual(a, b, state, property)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor(a, property);
    descriptorB = getOwnPropertyDescriptor(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(a, b) {
  return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
function areRegExpsEqual(a, b) {
  return a.source === b.source && a.flags === b.flags;
}
function areSetsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!matchedIndices[matchIndex] && state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
function areTypedArraysEqual(a, b) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
function areUrlsEqual(a, b) {
  return a.hostname === b.hostname && a.pathname === b.pathname && a.protocol === b.protocol && a.port === b.port && a.hash === b.hash && a.username === b.username && a.password === b.password;
}
function isPropertyEqual(a, b, state, property) {
  if ((property === REACT_OWNER || property === PREACT_OWNER || property === PREACT_VNODE) && (a.$$typeof || b.$$typeof)) {
    return true;
  }
  return hasOwn(b, property) && state.equals(a[property], b[property], property, property, a, b, state);
}
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var ERROR_TAG = "[object Error]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var URL_TAG = "[object URL]";
var isArray = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a2) {
  var areArraysEqual2 = _a2.areArraysEqual, areDatesEqual2 = _a2.areDatesEqual, areErrorsEqual2 = _a2.areErrorsEqual, areFunctionsEqual2 = _a2.areFunctionsEqual, areMapsEqual2 = _a2.areMapsEqual, areNumbersEqual2 = _a2.areNumbersEqual, areObjectsEqual2 = _a2.areObjectsEqual, arePrimitiveWrappersEqual2 = _a2.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a2.areRegExpsEqual, areSetsEqual2 = _a2.areSetsEqual, areTypedArraysEqual2 = _a2.areTypedArraysEqual, areUrlsEqual2 = _a2.areUrlsEqual;
  return function comparator(a, b, state) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    var type = typeof a;
    if (type !== typeof b) {
      return false;
    }
    if (type !== "object") {
      if (type === "number") {
        return areNumbersEqual2(a, b, state);
      }
      if (type === "function") {
        return areFunctionsEqual2(a, b, state);
      }
      return false;
    }
    var constructor = a.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a, b, state);
    }
    if (isArray(a)) {
      return areArraysEqual2(a, b, state);
    }
    if (isTypedArray != null && isTypedArray(a)) {
      return areTypedArraysEqual2(a, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a, b, state);
    }
    var tag = getTag(a);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a, b, state);
    }
    if (tag === URL_TAG) {
      return areUrlsEqual2(a, b, state);
    }
    if (tag === ERROR_TAG) {
      return areErrorsEqual2(a, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a, b, state);
    }
    return false;
  };
}
function createEqualityComparatorConfig(_a2) {
  var circular = _a2.circular, createCustomConfig = _a2.createCustomConfig, strict = _a2.strict;
  var config2 = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areErrorsEqual,
    areFunctionsEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areNumbersEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual,
    areUrlsEqual
  };
  if (createCustomConfig) {
    config2 = assign({}, config2, createCustomConfig(config2));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config2.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config2.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config2.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config2.areSetsEqual);
    config2 = assign({}, config2, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config2;
}
function createInternalEqualityComparator(compare) {
  return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a, b, state);
  };
}
function createIsEqual(_a2) {
  var circular = _a2.circular, comparator = _a2.comparator, createState = _a2.createState, equals = _a2.equals, strict = _a2.strict;
  if (createState) {
    return function isEqual2(a, b) {
      var _a3 = createState(), _b2 = _a3.cache, cache = _b2 === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b2, meta = _a3.meta;
      return comparator(a, b, {
        cache,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return function isEqual2(a, b) {
      return comparator(a, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    };
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return function isEqual2(a, b) {
    return comparator(a, b, state);
  };
}
var deepEqual = createCustomEqual();
createCustomEqual({ strict: true });
createCustomEqual({ circular: true });
createCustomEqual({
  circular: true,
  strict: true
});
createCustomEqual({
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
createCustomEqual({
  strict: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  },
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a2 = options.circular, circular = _a2 === void 0 ? false : _a2, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b2 = options.strict, strict = _b2 === void 0 ? false : _b2;
  var config2 = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config2);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}
function safeRequestAnimationFrame(callback) {
  if (typeof requestAnimationFrame !== "undefined") requestAnimationFrame(callback);
}
function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var currTime = -1;
  var shouldUpdate = function shouldUpdate2(now) {
    if (currTime < 0) {
      currTime = now;
    }
    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      safeRequestAnimationFrame(shouldUpdate2);
    }
  };
  requestAnimationFrame(shouldUpdate);
}
function _typeof$n(o) {
  "@babel/helpers - typeof";
  return _typeof$n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$n(o);
}
function _toArray(arr) {
  return _arrayWithHoles$6(arr) || _iterableToArray$5(arr) || _unsupportedIterableToArray$8(arr) || _nonIterableRest$6();
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$8(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen);
}
function _arrayLikeToArray$8(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArray$5(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr)) return arr;
}
function createAnimateManager() {
  var currStyle = {};
  var handleChange = function handleChange2() {
    return null;
  };
  var shouldStop = false;
  var setStyle = function setStyle2(_style) {
    if (shouldStop) {
      return;
    }
    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }
      var styles = _style;
      var _styles = _toArray(styles), curr = _styles[0], restStyles = _styles.slice(1);
      if (typeof curr === "number") {
        setRafTimeout(setStyle2.bind(null, restStyles), curr);
        return;
      }
      setStyle2(curr);
      setRafTimeout(setStyle2.bind(null, restStyles));
      return;
    }
    if (_typeof$n(_style) === "object") {
      currStyle = _style;
      handleChange(currStyle);
    }
    if (typeof _style === "function") {
      _style();
    }
  };
  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function() {
        handleChange = function handleChange2() {
          return null;
        };
      };
    }
  };
}
function _typeof$m(o) {
  "@babel/helpers - typeof";
  return _typeof$m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$m(o);
}
function ownKeys$j(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$j(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$j(Object(t), true).forEach(function(r2) {
      _defineProperty$m(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$m(obj, key, value) {
  key = _toPropertyKey$m(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$m(arg) {
  var key = _toPrimitive$m(arg, "string");
  return _typeof$m(key) === "symbol" ? key : String(key);
}
function _toPrimitive$m(input, hint) {
  if (_typeof$m(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$m(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var getIntersectionKeys = function getIntersectionKeys2(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function(a, b) {
    return a.filter(function(c) {
      return b.includes(c);
    });
  });
};
var identity2 = function identity22(param) {
  return param;
};
var getDashCase = function getDashCase2(name) {
  return name.replace(/([A-Z])/g, function(v) {
    return "-".concat(v.toLowerCase());
  });
};
var mapObject = function mapObject2(fn, obj) {
  return Object.keys(obj).reduce(function(res, key) {
    return _objectSpread$j(_objectSpread$j({}, res), {}, _defineProperty$m({}, key, fn(key, obj[key])));
  }, {});
};
var getTransitionVal = function getTransitionVal2(props, duration, easing) {
  return props.map(function(prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(",");
};
function _slicedToArray$5(arr, i) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$7(arr, i) || _nonIterableRest$5();
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit$5(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr)) return arr;
}
function _toConsumableArray$4(arr) {
  return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$7(arr) || _nonIterableSpread$4();
}
function _nonIterableSpread$4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen);
}
function _iterableToArray$4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$4(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$7(arr);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var ACCURACY = 1e-4;
var cubicBezierFactor = function cubicBezierFactor2(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};
var multyTime = function multyTime2(params, t) {
  return params.map(function(param, i) {
    return param * Math.pow(t, i);
  }).reduce(function(pre, curr) {
    return pre + curr;
  });
};
var cubicBezier = function cubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};
var derivativeCubicBezier = function derivativeCubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray$4(params.map(function(param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
};
var configBezier = function configBezier2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var x1 = args[0], y1 = args[1], x2 = args[2], y2 = args[3];
  if (args.length === 1) {
    switch (args[0]) {
      case "linear":
        x1 = 0;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease":
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1;
        break;
      case "ease-in":
        x1 = 0.42;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease-out":
        x1 = 0.42;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      case "ease-in-out":
        x1 = 0;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      default: {
        var easing = args[0].split("(");
        if (easing[0] === "cubic-bezier" && easing[1].split(")")[0].split(",").length === 4) {
          var _easing$1$split$0$spl = easing[1].split(")")[0].split(",").map(function(x3) {
            return parseFloat(x3);
          });
          var _easing$1$split$0$spl2 = _slicedToArray$5(_easing$1$split$0$spl, 4);
          x1 = _easing$1$split$0$spl2[0];
          y1 = _easing$1$split$0$spl2[1];
          x2 = _easing$1$split$0$spl2[2];
          y2 = _easing$1$split$0$spl2[3];
        }
      }
    }
  }
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);
  var rangeValue = function rangeValue2(value) {
    if (value > 1) {
      return 1;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };
  var bezier = function bezier2(_t) {
    var t = _t > 1 ? 1 : _t;
    var x3 = t;
    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x3) - t;
      var derVal = derCurveX(x3);
      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x3);
      }
      x3 = rangeValue(x3 - evalT / derVal);
    }
    return curveY(x3);
  };
  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring2() {
  var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _config$stiff = config2.stiff, stiff = _config$stiff === void 0 ? 100 : _config$stiff, _config$damping = config2.damping, damping = _config$damping === void 0 ? 8 : _config$damping, _config$dt = config2.dt, dt = _config$dt === void 0 ? 17 : _config$dt;
  var stepper = function stepper2(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1e3;
    var newX = currV * dt / 1e3 + currX;
    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };
  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing2() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var easing = args[0];
  if (typeof easing === "string") {
    switch (easing) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return configBezier(easing);
      case "spring":
        return configSpring();
      default:
        if (easing.split("(")[0] === "cubic-bezier") {
          return configBezier(easing);
        }
    }
  }
  if (typeof easing === "function") {
    return easing;
  }
  return null;
};
function _typeof$l(o) {
  "@babel/helpers - typeof";
  return _typeof$l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$l(o);
}
function _toConsumableArray$3(arr) {
  return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$6(arr) || _nonIterableSpread$3();
}
function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$6(arr);
}
function ownKeys$i(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$i(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$i(Object(t), true).forEach(function(r2) {
      _defineProperty$l(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$l(obj, key, value) {
  key = _toPropertyKey$l(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$l(arg) {
  var key = _toPrimitive$l(arg, "string");
  return _typeof$l(key) === "symbol" ? key : String(key);
}
function _toPrimitive$l(input, hint) {
  if (_typeof$l(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$l(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr)) return arr;
}
var alpha = function alpha2(begin, end, k) {
  return begin + (end - begin) * k;
};
var needContinue = function needContinue2(_ref) {
  var from = _ref.from, to = _ref.to;
  return from !== to;
};
var calStepperVals = function calStepperVals2(easing, preVals, steps) {
  var nextStepVals = mapObject(function(key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity), _easing2 = _slicedToArray$4(_easing, 2), newX = _easing2[0], newV = _easing2[1];
      return _objectSpread$i(_objectSpread$i({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }
    return val;
  }, preVals);
  if (steps < 1) {
    return mapObject(function(key, val) {
      if (needContinue(val)) {
        return _objectSpread$i(_objectSpread$i({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }
      return val;
    }, preVals);
  }
  return calStepperVals2(easing, nextStepVals, steps - 1);
};
const configUpdate = function(from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function(res, key) {
    return _objectSpread$i(_objectSpread$i({}, res), {}, _defineProperty$l({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function(res, key) {
    return _objectSpread$i(_objectSpread$i({}, res), {}, _defineProperty$l({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;
  var update = function update2() {
    return null;
  };
  var getCurrStyle = function getCurrStyle2() {
    return mapObject(function(key, val) {
      return val.from;
    }, stepperStyle);
  };
  var shouldStopAnimation = function shouldStopAnimation2() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  };
  var stepperUpdate = function stepperUpdate2(now) {
    if (!preTime) {
      preTime = now;
    }
    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    render(_objectSpread$i(_objectSpread$i(_objectSpread$i({}, from), to), getCurrStyle()));
    preTime = now;
    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };
  var timingUpdate = function timingUpdate2(now) {
    if (!beginTime) {
      beginTime = now;
    }
    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function(key, val) {
      return alpha.apply(void 0, _toConsumableArray$3(val).concat([easing(t)]));
    }, timingStyle);
    render(_objectSpread$i(_objectSpread$i(_objectSpread$i({}, from), to), currStyle));
    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function(key, val) {
        return alpha.apply(void 0, _toConsumableArray$3(val).concat([easing(1)]));
      }, timingStyle);
      render(_objectSpread$i(_objectSpread$i(_objectSpread$i({}, from), to), finalStyle));
    }
  };
  update = easing.isStepper ? stepperUpdate : timingUpdate;
  return function() {
    requestAnimationFrame(update);
    return function() {
      cancelAnimationFrame(cafId);
    };
  };
};
function _typeof$k(o) {
  "@babel/helpers - typeof";
  return _typeof$k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$k(o);
}
var _excluded$7 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function _objectWithoutProperties$7(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$5(arr);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function ownKeys$h(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$h(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$h(Object(t), true).forEach(function(r2) {
      _defineProperty$k(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$k(obj, key, value) {
  key = _toPropertyKey$k(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$b(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$k(descriptor.key), descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$b(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$k(arg) {
  var key = _toPrimitive$k(arg, "string");
  return _typeof$k(key) === "symbol" ? key : String(key);
}
function _toPrimitive$k(input, hint) {
  if (_typeof$k(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (_typeof$k(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$9(subClass, superClass);
}
function _setPrototypeOf$9(o, p) {
  _setPrototypeOf$9 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$9(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$9(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$9(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$9(this, result);
  };
}
function _possibleConstructorReturn$9(self, call) {
  if (call && (_typeof$k(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$9(self);
}
function _assertThisInitialized$9(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$9() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$9(o) {
  _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$9(o);
}
var Animate = /* @__PURE__ */ function(_PureComponent) {
  _inherits$9(Animate2, _PureComponent);
  var _super = _createSuper(Animate2);
  function Animate2(props, context) {
    var _this;
    _classCallCheck$b(this, Animate2);
    _this = _super.call(this, props, context);
    var _this$props = _this.props, isActive = _this$props.isActive, attributeName = _this$props.attributeName, from = _this$props.from, to = _this$props.to, steps = _this$props.steps, children = _this$props.children, duration = _this$props.duration;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized$9(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized$9(_this));
    if (!isActive || duration <= 0) {
      _this.state = {
        style: {}
      };
      if (typeof children === "function") {
        _this.state = {
          style: to
        };
      }
      return _possibleConstructorReturn$9(_this);
    }
    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === "function") {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn$9(_this);
      }
      _this.state = {
        style: attributeName ? _defineProperty$k({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }
    return _this;
  }
  _createClass$b(Animate2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props, isActive = _this$props2.isActive, canBegin = _this$props2.canBegin;
      this.mounted = true;
      if (!isActive || !canBegin) {
        return;
      }
      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props, isActive = _this$props3.isActive, canBegin = _this$props3.canBegin, attributeName = _this$props3.attributeName, shouldReAnimate = _this$props3.shouldReAnimate, to = _this$props3.to, currentFrom = _this$props3.from;
      var style = this.state.style;
      if (!canBegin) {
        return;
      }
      if (!isActive) {
        var newState = {
          style: attributeName ? _defineProperty$k({}, attributeName, to) : to
        };
        if (this.state && style) {
          if (attributeName && style[attributeName] !== to || !attributeName && style !== to) {
            this.setState(newState);
          }
        }
        return;
      }
      if (deepEqual(prevProps.to, to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }
      var isTriggered = !prevProps.canBegin || !prevProps.isActive;
      if (this.manager) {
        this.manager.stop();
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      var from = isTriggered || shouldReAnimate ? currentFrom : prevProps.to;
      if (this.state && style) {
        var _newState = {
          style: attributeName ? _defineProperty$k({}, attributeName, from) : from
        };
        if (attributeName && style[attributeName] !== from || !attributeName && style !== from) {
          this.setState(_newState);
        }
      }
      this.runAnimation(_objectSpread$h(_objectSpread$h({}, this.props), {}, {
        from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var onAnimationEnd2 = this.props.onAnimationEnd;
      if (this.unSubscribe) {
        this.unSubscribe();
      }
      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      if (onAnimationEnd2) {
        onAnimationEnd2();
      }
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style
        });
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;
      var from = props.from, to = props.to, duration = props.duration, easing = props.easing, begin = props.begin, onAnimationEnd2 = props.onAnimationEnd, onAnimationStart2 = props.onAnimationStart;
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, this.changeStyle);
      var finalStartAnimation = function finalStartAnimation2() {
        _this2.stopJSAnimation = startAnimation();
      };
      this.manager.start([onAnimationStart2, begin, finalStartAnimation, duration, onAnimationEnd2]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;
      var steps = props.steps, begin = props.begin, onAnimationStart2 = props.onAnimationStart;
      var _steps$ = steps[0], initialStyle = _steps$.style, _steps$$duration = _steps$.duration, initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;
      var addStyle = function addStyle2(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }
        var duration = nextItem.duration, _nextItem$easing = nextItem.easing, easing = _nextItem$easing === void 0 ? "ease" : _nextItem$easing, style = nextItem.style, nextProperties = nextItem.properties, onAnimationEnd2 = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);
        if (typeof easing === "function" || easing === "spring") {
          return [].concat(_toConsumableArray$2(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration,
            easing
          }), duration]);
        }
        var transition = getTransitionVal(properties, duration, easing);
        var newStyle = _objectSpread$h(_objectSpread$h(_objectSpread$h({}, preItem.style), style), {}, {
          transition
        });
        return [].concat(_toConsumableArray$2(sequence), [newStyle, duration, onAnimationEnd2]).filter(identity2);
      };
      return this.manager.start([onAnimationStart2].concat(_toConsumableArray$2(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }
      var begin = props.begin, duration = props.duration, attributeName = props.attributeName, propsTo = props.to, easing = props.easing, onAnimationStart2 = props.onAnimationStart, onAnimationEnd2 = props.onAnimationEnd, steps = props.steps, children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);
      if (typeof easing === "function" || typeof children === "function" || easing === "spring") {
        this.runJSAnimation(props);
        return;
      }
      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }
      var to = attributeName ? _defineProperty$k({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart2, begin, _objectSpread$h(_objectSpread$h({}, to), {}, {
        transition
      }), duration, onAnimationEnd2]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, children = _this$props4.children;
      _this$props4.begin;
      var duration = _this$props4.duration;
      _this$props4.attributeName;
      _this$props4.easing;
      var isActive = _this$props4.isActive;
      _this$props4.steps;
      _this$props4.from;
      _this$props4.to;
      _this$props4.canBegin;
      _this$props4.onAnimationEnd;
      _this$props4.shouldReAnimate;
      _this$props4.onAnimationReStart;
      var others = _objectWithoutProperties$7(_this$props4, _excluded$7);
      var count = reactExports.Children.count(children);
      var stateStyle = this.state.style;
      if (typeof children === "function") {
        return children(stateStyle);
      }
      if (!isActive || count === 0 || duration <= 0) {
        return children;
      }
      var cloneContainer = function cloneContainer2(container) {
        var _container$props = container.props, _container$props$styl = _container$props.style, style = _container$props$styl === void 0 ? {} : _container$props$styl, className = _container$props.className;
        var res = /* @__PURE__ */ reactExports.cloneElement(container, _objectSpread$h(_objectSpread$h({}, others), {}, {
          style: _objectSpread$h(_objectSpread$h({}, style), stateStyle),
          className
        }));
        return res;
      };
      if (count === 1) {
        return cloneContainer(reactExports.Children.only(children));
      }
      return /* @__PURE__ */ React.createElement("div", null, reactExports.Children.map(children, function(child) {
        return cloneContainer(child);
      }));
    }
  }]);
  return Animate2;
}(reactExports.PureComponent);
Animate.displayName = "Animate";
Animate.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {
  },
  onAnimationStart: function onAnimationStart() {
  }
};
Animate.propTypes = {
  from: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  attributeName: PropTypes.string,
  // animation duration
  duration: PropTypes.number,
  begin: PropTypes.number,
  easing: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  steps: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
    easing: PropTypes.oneOfType([PropTypes.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), PropTypes.func]),
    // transition css properties(dash case), optional
    properties: PropTypes.arrayOf("string"),
    onAnimationEnd: PropTypes.func
  })),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isActive: PropTypes.bool,
  canBegin: PropTypes.bool,
  onAnimationEnd: PropTypes.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: PropTypes.bool,
  onAnimationStart: PropTypes.func,
  onAnimationReStart: PropTypes.func
};
function _typeof$j(o) {
  "@babel/helpers - typeof";
  return _typeof$j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$j(o);
}
function _extends$e() {
  _extends$e = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$e.apply(this, arguments);
}
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys$g(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$g(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$g(Object(t), true).forEach(function(r2) {
      _defineProperty$j(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$j(obj, key, value) {
  key = _toPropertyKey$j(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$j(t) {
  var i = _toPrimitive$j(t, "string");
  return "symbol" == _typeof$j(i) ? i : i + "";
}
function _toPrimitive$j(t, r) {
  if ("object" != _typeof$j(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$j(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getRectanglePath = function getRectanglePath2(x2, y2, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path;
  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [0, 0, 0, 0];
    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }
    path = "M".concat(x2, ",").concat(y2 + ySign * newRadius[0]);
    if (newRadius[0] > 0) {
      path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x2 + xSign * newRadius[0], ",").concat(y2);
    }
    path += "L ".concat(x2 + width - xSign * newRadius[1], ",").concat(y2);
    if (newRadius[1] > 0) {
      path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width, ",").concat(y2 + ySign * newRadius[1]);
    }
    path += "L ".concat(x2 + width, ",").concat(y2 + height - ySign * newRadius[2]);
    if (newRadius[2] > 0) {
      path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width - xSign * newRadius[2], ",").concat(y2 + height);
    }
    path += "L ".concat(x2 + xSign * newRadius[3], ",").concat(y2 + height);
    if (newRadius[3] > 0) {
      path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x2, ",").concat(y2 + height - ySign * newRadius[3]);
    }
    path += "Z";
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);
    path = "M ".concat(x2, ",").concat(y2 + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + xSign * _newRadius, ",").concat(y2, "\n            L ").concat(x2 + width - xSign * _newRadius, ",").concat(y2, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width, ",").concat(y2 + ySign * _newRadius, "\n            L ").concat(x2 + width, ",").concat(y2 + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width - xSign * _newRadius, ",").concat(y2 + height, "\n            L ").concat(x2 + xSign * _newRadius, ",").concat(y2 + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2, ",").concat(y2 + height - ySign * _newRadius, " Z");
  } else {
    path = "M ".concat(x2, ",").concat(y2, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }
  return path;
};
var isInRectangle = function isInRectangle2(point2, rect) {
  if (!point2 || !rect) {
    return false;
  }
  var px = point2.x, py = point2.y;
  var x2 = rect.x, y2 = rect.y, width = rect.width, height = rect.height;
  if (Math.abs(width) > 0 && Math.abs(height) > 0) {
    var minX = Math.min(x2, x2 + width);
    var maxX = Math.max(x2, x2 + width);
    var minY = Math.min(y2, y2 + height);
    var maxY = Math.max(y2, y2 + height);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
  }
  return false;
};
var defaultProps$2 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Rectangle = function Rectangle2(rectangleProps) {
  var props = _objectSpread$g(_objectSpread$g({}, defaultProps$2), rectangleProps);
  var pathRef = reactExports.useRef();
  var _useState = reactExports.useState(-1), _useState2 = _slicedToArray$3(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
  reactExports.useEffect(function() {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
      }
    }
  }, []);
  var x2 = props.x, y2 = props.y, width = props.width, height = props.height, radius = props.radius, className = props.className;
  var animationEasing = props.animationEasing, animationDuration = props.animationDuration, animationBegin = props.animationBegin, isAnimationActive = props.isAnimationActive, isUpdateAnimationActive = props.isUpdateAnimationActive;
  if (x2 !== +x2 || y2 !== +y2 || width !== +width || height !== +height || width === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx("recharts-rectangle", className);
  if (!isUpdateAnimationActive) {
    return /* @__PURE__ */ React.createElement("path", _extends$e({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(x2, y2, width, height, radius)
    }));
  }
  return /* @__PURE__ */ React.createElement(Animate, {
    canBegin: totalLength > 0,
    from: {
      width,
      height,
      x: x2,
      y: y2
    },
    to: {
      width,
      height,
      x: x2,
      y: y2
    },
    duration: animationDuration,
    animationEasing,
    isActive: isUpdateAnimationActive
  }, function(_ref) {
    var currWidth = _ref.width, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
    return /* @__PURE__ */ React.createElement(Animate, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      isActive: isAnimationActive,
      easing: animationEasing
    }, /* @__PURE__ */ React.createElement("path", _extends$e({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
      ref: pathRef
    })));
  });
};
function _extends$d() {
  _extends$d = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$d.apply(this, arguments);
}
var Dot = function Dot2(props) {
  var cx = props.cx, cy = props.cy, r = props.r, className = props.className;
  var layerClass = clsx("recharts-dot", className);
  if (cx === +cx && cy === +cy && r === +r) {
    return /* @__PURE__ */ React.createElement("circle", _extends$d({}, filterProps(props, false), adaptEventHandlers(props), {
      className: layerClass,
      cx,
      cy,
      r
    }));
  }
  return null;
};
function _typeof$i(o) {
  "@babel/helpers - typeof";
  return _typeof$i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$i(o);
}
var _excluded$6 = ["x", "y", "top", "left", "width", "height", "className"];
function _extends$c() {
  _extends$c = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$c.apply(this, arguments);
}
function ownKeys$f(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$f(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$f(Object(t), true).forEach(function(r2) {
      _defineProperty$i(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$i(obj, key, value) {
  key = _toPropertyKey$i(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$i(t) {
  var i = _toPrimitive$i(t, "string");
  return "symbol" == _typeof$i(i) ? i : i + "";
}
function _toPrimitive$i(t, r) {
  if ("object" != _typeof$i(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$i(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$6(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var getPath2 = function getPath3(x2, y2, width, height, top, left) {
  return "M".concat(x2, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y2, "h").concat(width);
};
var Cross = function Cross2(_ref) {
  var _ref$x = _ref.x, x2 = _ref$x === void 0 ? 0 : _ref$x, _ref$y = _ref.y, y2 = _ref$y === void 0 ? 0 : _ref$y, _ref$top = _ref.top, top = _ref$top === void 0 ? 0 : _ref$top, _ref$left = _ref.left, left = _ref$left === void 0 ? 0 : _ref$left, _ref$width = _ref.width, width = _ref$width === void 0 ? 0 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? 0 : _ref$height, className = _ref.className, rest = _objectWithoutProperties$6(_ref, _excluded$6);
  var props = _objectSpread$f({
    x: x2,
    y: y2,
    top,
    left,
    width,
    height
  }, rest);
  if (!isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("path", _extends$c({}, filterProps(props, true), {
    className: clsx("recharts-cross", className),
    d: getPath2(x2, y2, width, height, top, left)
  }));
};
var _getPrototype;
var hasRequired_getPrototype;
function require_getPrototype() {
  if (hasRequired_getPrototype) return _getPrototype;
  hasRequired_getPrototype = 1;
  var overArg = require_overArg();
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  _getPrototype = getPrototype;
  return _getPrototype;
}
var isPlainObject_1;
var hasRequiredIsPlainObject;
function requireIsPlainObject() {
  if (hasRequiredIsPlainObject) return isPlainObject_1;
  hasRequiredIsPlainObject = 1;
  var baseGetTag = require_baseGetTag(), getPrototype = require_getPrototype(), isObjectLike = requireIsObjectLike();
  var objectTag = "[object Object]";
  var funcProto = Function.prototype, objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject2(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  isPlainObject_1 = isPlainObject2;
  return isPlainObject_1;
}
var isPlainObjectExports = requireIsPlainObject();
const isPlainObject = /* @__PURE__ */ getDefaultExportFromCjs(isPlainObjectExports);
var isBoolean_1;
var hasRequiredIsBoolean;
function requireIsBoolean() {
  if (hasRequiredIsBoolean) return isBoolean_1;
  hasRequiredIsBoolean = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var boolTag = "[object Boolean]";
  function isBoolean2(value) {
    return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
  }
  isBoolean_1 = isBoolean2;
  return isBoolean_1;
}
var isBooleanExports = requireIsBoolean();
const isBoolean = /* @__PURE__ */ getDefaultExportFromCjs(isBooleanExports);
function _typeof$h(o) {
  "@babel/helpers - typeof";
  return _typeof$h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$h(o);
}
function _extends$b() {
  _extends$b = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$b.apply(this, arguments);
}
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys$e(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$e(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$e(Object(t), true).forEach(function(r2) {
      _defineProperty$h(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$h(obj, key, value) {
  key = _toPropertyKey$h(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$h(t) {
  var i = _toPrimitive$h(t, "string");
  return "symbol" == _typeof$h(i) ? i : i + "";
}
function _toPrimitive$h(t, r) {
  if ("object" != _typeof$h(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$h(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getTrapezoidPath = function getTrapezoidPath2(x2, y2, upperWidth, lowerWidth, height) {
  var widthGap = upperWidth - lowerWidth;
  var path;
  path = "M ".concat(x2, ",").concat(y2);
  path += "L ".concat(x2 + upperWidth, ",").concat(y2);
  path += "L ".concat(x2 + upperWidth - widthGap / 2, ",").concat(y2 + height);
  path += "L ".concat(x2 + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y2 + height);
  path += "L ".concat(x2, ",").concat(y2, " Z");
  return path;
};
var defaultProps$1 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Trapezoid = function Trapezoid2(props) {
  var trapezoidProps = _objectSpread$e(_objectSpread$e({}, defaultProps$1), props);
  var pathRef = reactExports.useRef();
  var _useState = reactExports.useState(-1), _useState2 = _slicedToArray$2(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
  reactExports.useEffect(function() {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
      }
    }
  }, []);
  var x2 = trapezoidProps.x, y2 = trapezoidProps.y, upperWidth = trapezoidProps.upperWidth, lowerWidth = trapezoidProps.lowerWidth, height = trapezoidProps.height, className = trapezoidProps.className;
  var animationEasing = trapezoidProps.animationEasing, animationDuration = trapezoidProps.animationDuration, animationBegin = trapezoidProps.animationBegin, isUpdateAnimationActive = trapezoidProps.isUpdateAnimationActive;
  if (x2 !== +x2 || y2 !== +y2 || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx("recharts-trapezoid", className);
  if (!isUpdateAnimationActive) {
    return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", _extends$b({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(x2, y2, upperWidth, lowerWidth, height)
    })));
  }
  return /* @__PURE__ */ React.createElement(Animate, {
    canBegin: totalLength > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height,
      x: x2,
      y: y2
    },
    to: {
      upperWidth,
      lowerWidth,
      height,
      x: x2,
      y: y2
    },
    duration: animationDuration,
    animationEasing,
    isActive: isUpdateAnimationActive
  }, function(_ref) {
    var currUpperWidth = _ref.upperWidth, currLowerWidth = _ref.lowerWidth, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
    return /* @__PURE__ */ React.createElement(Animate, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      easing: animationEasing
    }, /* @__PURE__ */ React.createElement("path", _extends$b({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
      ref: pathRef
    })));
  });
};
var _excluded$5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function _typeof$g(o) {
  "@babel/helpers - typeof";
  return _typeof$g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$g(o);
}
function _objectWithoutProperties$5(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function ownKeys$d(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$d(Object(t), true).forEach(function(r2) {
      _defineProperty$g(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$g(obj, key, value) {
  key = _toPropertyKey$g(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$g(t) {
  var i = _toPrimitive$g(t, "string");
  return "symbol" == _typeof$g(i) ? i : i + "";
}
function _toPrimitive$g(t, r) {
  if ("object" != _typeof$g(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$g(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function defaultPropTransformer(option, props) {
  return _objectSpread$d(_objectSpread$d({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
  return shapeType === "symbols";
}
function ShapeSelector(_ref) {
  var shapeType = _ref.shapeType, elementProps = _ref.elementProps;
  switch (shapeType) {
    case "rectangle":
      return /* @__PURE__ */ React.createElement(Rectangle, elementProps);
    case "trapezoid":
      return /* @__PURE__ */ React.createElement(Trapezoid, elementProps);
    case "sector":
      return /* @__PURE__ */ React.createElement(Sector, elementProps);
    case "symbols":
      if (isSymbolsProps(shapeType)) {
        return /* @__PURE__ */ React.createElement(Symbols, elementProps);
      }
      break;
    default:
      return null;
  }
}
function getPropsFromShapeOption(option) {
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    return option.props;
  }
  return option;
}
function Shape(_ref2) {
  var option = _ref2.option, shapeType = _ref2.shapeType, _ref2$propTransformer = _ref2.propTransformer, propTransformer = _ref2$propTransformer === void 0 ? defaultPropTransformer : _ref2$propTransformer, _ref2$activeClassName = _ref2.activeClassName, activeClassName = _ref2$activeClassName === void 0 ? "recharts-active-shape" : _ref2$activeClassName, isActive = _ref2.isActive, props = _objectWithoutProperties$5(_ref2, _excluded$5);
  var shape;
  if (/* @__PURE__ */ reactExports.isValidElement(option)) {
    shape = /* @__PURE__ */ reactExports.cloneElement(option, _objectSpread$d(_objectSpread$d({}, props), getPropsFromShapeOption(option)));
  } else if (isFunction(option)) {
    shape = option(props);
  } else if (isPlainObject(option) && !isBoolean(option)) {
    var nextProps = propTransformer(option, props);
    shape = /* @__PURE__ */ React.createElement(ShapeSelector, {
      shapeType,
      elementProps: nextProps
    });
  } else {
    var elementProps = props;
    shape = /* @__PURE__ */ React.createElement(ShapeSelector, {
      shapeType,
      elementProps
    });
  }
  if (isActive) {
    return /* @__PURE__ */ React.createElement(Layer, {
      className: activeClassName
    }, shape);
  }
  return shape;
}
function isFunnel(graphicalItem, _item) {
  return _item != null && "trapezoids" in graphicalItem.props;
}
function isPie(graphicalItem, _item) {
  return _item != null && "sectors" in graphicalItem.props;
}
function isScatter(graphicalItem, _item) {
  return _item != null && "points" in graphicalItem.props;
}
function compareFunnel(shapeData, activeTooltipItem) {
  var _activeTooltipItem$la, _activeTooltipItem$la2;
  var xMatches = shapeData.x === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la === void 0 ? void 0 : _activeTooltipItem$la.x) || shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la2 = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la2 === void 0 ? void 0 : _activeTooltipItem$la2.y) || shapeData.y === activeTooltipItem.y;
  return xMatches && yMatches;
}
function comparePie(shapeData, activeTooltipItem) {
  var startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
  var endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
  return startAngleMatches && endAngleMatches;
}
function compareScatter(shapeData, activeTooltipItem) {
  var xMatches = shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === activeTooltipItem.y;
  var zMatches = shapeData.z === activeTooltipItem.z;
  return xMatches && yMatches && zMatches;
}
function getComparisonFn(graphicalItem, activeItem) {
  var comparison;
  if (isFunnel(graphicalItem, activeItem)) {
    comparison = compareFunnel;
  } else if (isPie(graphicalItem, activeItem)) {
    comparison = comparePie;
  } else if (isScatter(graphicalItem, activeItem)) {
    comparison = compareScatter;
  }
  return comparison;
}
function getShapeDataKey(graphicalItem, activeItem) {
  var shapeKey;
  if (isFunnel(graphicalItem, activeItem)) {
    shapeKey = "trapezoids";
  } else if (isPie(graphicalItem, activeItem)) {
    shapeKey = "sectors";
  } else if (isScatter(graphicalItem, activeItem)) {
    shapeKey = "points";
  }
  return shapeKey;
}
function getActiveShapeTooltipPayload(graphicalItem, activeItem) {
  if (isFunnel(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa;
    return (_activeItem$tooltipPa = activeItem.tooltipPayload) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa[0]) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa.payload) === null || _activeItem$tooltipPa === void 0 ? void 0 : _activeItem$tooltipPa.payload;
  }
  if (isPie(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa2;
    return (_activeItem$tooltipPa2 = activeItem.tooltipPayload) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2[0]) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2.payload) === null || _activeItem$tooltipPa2 === void 0 ? void 0 : _activeItem$tooltipPa2.payload;
  }
  if (isScatter(graphicalItem, activeItem)) {
    return activeItem.payload;
  }
  return {};
}
function getActiveShapeIndexForTooltip(_ref3) {
  var activeTooltipItem = _ref3.activeTooltipItem, graphicalItem = _ref3.graphicalItem, itemData = _ref3.itemData;
  var shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
  var tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);
  var activeItemMatches = itemData.filter(function(datum, dataIndex) {
    var valuesMatch = isEqual(tooltipPayload, datum);
    var mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(function(shapeData) {
      var comparison = getComparisonFn(graphicalItem, activeTooltipItem);
      return comparison(shapeData, activeTooltipItem);
    });
    var indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(mouseCoordinateMatches[mouseCoordinateMatches.length - 1]);
    var coordinatesMatch = dataIndex === indexOfMouseCoordinates;
    return valuesMatch && coordinatesMatch;
  });
  var activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);
  return activeIndex;
}
var _baseRange;
var hasRequired_baseRange;
function require_baseRange() {
  if (hasRequired_baseRange) return _baseRange;
  hasRequired_baseRange = 1;
  var nativeCeil = Math.ceil, nativeMax = Math.max;
  function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }
  _baseRange = baseRange;
  return _baseRange;
}
var toFinite_1;
var hasRequiredToFinite;
function requireToFinite() {
  if (hasRequiredToFinite) return toFinite_1;
  hasRequiredToFinite = 1;
  var toNumber = requireToNumber();
  var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -Infinity) {
      var sign2 = value < 0 ? -1 : 1;
      return sign2 * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  toFinite_1 = toFinite;
  return toFinite_1;
}
var _createRange;
var hasRequired_createRange;
function require_createRange() {
  if (hasRequired_createRange) return _createRange;
  hasRequired_createRange = 1;
  var baseRange = require_baseRange(), isIterateeCall = require_isIterateeCall(), toFinite = requireToFinite();
  function createRange(fromRight) {
    return function(start, end, step) {
      if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
        end = step = void 0;
      }
      start = toFinite(start);
      if (end === void 0) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }
  _createRange = createRange;
  return _createRange;
}
var range_1;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range_1;
  hasRequiredRange = 1;
  var createRange = require_createRange();
  var range3 = createRange();
  range_1 = range3;
  return range_1;
}
var rangeExports = requireRange();
const range2 = /* @__PURE__ */ getDefaultExportFromCjs(rangeExports);
function _typeof$f(o) {
  "@babel/helpers - typeof";
  return _typeof$f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$f(o);
}
function ownKeys$c(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$c(Object(t), true).forEach(function(r2) {
      _defineProperty$f(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$f(obj, key, value) {
  key = _toPropertyKey$f(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$f(t) {
  var i = _toPrimitive$f(t, "string");
  return "symbol" == _typeof$f(i) ? i : i + "";
}
function _toPrimitive$f(t, r) {
  if ("object" != _typeof$f(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$f(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var PREFIX_LIST = ["Webkit", "Moz", "O", "ms"];
var generatePrefixStyle = function generatePrefixStyle2(name, value) {
  var camelName = name.replace(/(\w)/, function(v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST.reduce(function(res, entry) {
    return _objectSpread$c(_objectSpread$c({}, res), {}, _defineProperty$f({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};
function _typeof$e(o) {
  "@babel/helpers - typeof";
  return _typeof$e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$e(o);
}
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
      _defineProperty$e(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$e(descriptor.key), descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$a(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$8(t, o, e) {
  return o = _getPrototypeOf$8(o), _possibleConstructorReturn$8(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf$8(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$8(self, call) {
  if (call && (_typeof$e(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$8(self);
}
function _assertThisInitialized$8(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$8() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$8(o) {
  _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$8(o);
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$8(subClass, superClass);
}
function _setPrototypeOf$8(o, p) {
  _setPrototypeOf$8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$8(o, p);
}
function _defineProperty$e(obj, key, value) {
  key = _toPropertyKey$e(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$e(t) {
  var i = _toPrimitive$e(t, "string");
  return "symbol" == _typeof$e(i) ? i : i + "";
}
function _toPrimitive$e(t, r) {
  if ("object" != _typeof$e(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$e(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var createScale = function createScale2(_ref) {
  var data = _ref.data, startIndex = _ref.startIndex, endIndex = _ref.endIndex, x2 = _ref.x, width = _ref.width, travellerWidth = _ref.travellerWidth;
  if (!data || !data.length) {
    return {};
  }
  var len = data.length;
  var scale = point().domain(range2(0, len)).range([x2, x2 + width - travellerWidth]);
  var scaleValues = scale.domain().map(function(entry) {
    return scale(entry);
  });
  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    isTravellerFocused: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale,
    scaleValues
  };
};
var isTouch = function isTouch2(e) {
  return e.changedTouches && !!e.changedTouches.length;
};
var Brush = /* @__PURE__ */ function(_PureComponent) {
  function Brush2(props) {
    var _this;
    _classCallCheck$a(this, Brush2);
    _this = _callSuper$8(this, Brush2, [props]);
    _defineProperty$e(_this, "handleDrag", function(e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }
      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    });
    _defineProperty$e(_this, "handleTouchMove", function(e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    });
    _defineProperty$e(_this, "handleDragEnd", function() {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      }, function() {
        var _this$props = _this.props, endIndex = _this$props.endIndex, onDragEnd = _this$props.onDragEnd, startIndex = _this$props.startIndex;
        onDragEnd === null || onDragEnd === void 0 || onDragEnd({
          endIndex,
          startIndex
        });
      });
      _this.detachDragEndListener();
    });
    _defineProperty$e(_this, "handleLeaveWrapper", function() {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    });
    _defineProperty$e(_this, "handleEnterSlideOrTraveller", function() {
      _this.setState({
        isTextActive: true
      });
    });
    _defineProperty$e(_this, "handleLeaveSlideOrTraveller", function() {
      _this.setState({
        isTextActive: false
      });
    });
    _defineProperty$e(_this, "handleSlideDragStart", function(e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });
      _this.attachDragEndListener();
    });
    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_this, "startX"),
      endX: _this.handleTravellerDragStart.bind(_this, "endX")
    };
    _this.state = {};
    return _this;
  }
  _inherits$8(Brush2, _PureComponent);
  return _createClass$a(Brush2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }
      this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref2) {
      var startX = _ref2.startX, endX = _ref2.endX;
      var scaleValues = this.state.scaleValues;
      var _this$props2 = this.props, gap = _this$props2.gap, data = _this$props2.data;
      var lastIndex = data.length - 1;
      var min2 = Math.min(startX, endX);
      var max2 = Math.max(startX, endX);
      var minIndex = Brush2.getIndexInRange(scaleValues, min2);
      var maxIndex = Brush2.getIndexInRange(scaleValues, max2);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props3 = this.props, data = _this$props3.data, tickFormatter = _this$props3.tickFormatter, dataKey = _this$props3.dataKey;
      var text = getValueByDataKey(data[index], dataKey, index);
      return isFunction(tickFormatter) ? tickFormatter(text, index) : text;
    }
  }, {
    key: "attachDragEndListener",
    value: function attachDragEndListener() {
      window.addEventListener("mouseup", this.handleDragEnd, true);
      window.addEventListener("touchend", this.handleDragEnd, true);
      window.addEventListener("mousemove", this.handleDrag, true);
    }
  }, {
    key: "detachDragEndListener",
    value: function detachDragEndListener() {
      window.removeEventListener("mouseup", this.handleDragEnd, true);
      window.removeEventListener("touchend", this.handleDragEnd, true);
      window.removeEventListener("mousemove", this.handleDrag, true);
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state, slideMoveStartX = _this$state.slideMoveStartX, startX = _this$state.startX, endX = _this$state.endX;
      var _this$props4 = this.props, x2 = _this$props4.x, width = _this$props4.width, travellerWidth = _this$props4.travellerWidth, startIndex = _this$props4.startIndex, endIndex = _this$props4.endIndex, onChange = _this$props4.onChange;
      var delta = e.pageX - slideMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - endX, x2 + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - startX, x2 - endX);
      }
      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });
      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }
      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
      this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$state2 = this.state, brushMoveStartX = _this$state2.brushMoveStartX, movingTravellerId = _this$state2.movingTravellerId, endX = _this$state2.endX, startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props5 = this.props, x2 = _this$props5.x, width = _this$props5.width, travellerWidth = _this$props5.travellerWidth, onChange = _this$props5.onChange, gap = _this$props5.gap, data = _this$props5.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - prevValue);
      }
      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex, endIndex = newIndex.endIndex;
      var isFullGap = function isFullGap2() {
        var lastIndex = data.length - 1;
        if (movingTravellerId === "startX" && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === "endX" && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }
        return false;
      };
      this.setState(_defineProperty$e(_defineProperty$e({}, movingTravellerId, prevValue + delta), "brushMoveStartX", e.pageX), function() {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function handleTravellerMoveKeyboard(direction, id) {
      var _this2 = this;
      var _this$state3 = this.state, scaleValues = _this$state3.scaleValues, startX = _this$state3.startX, endX = _this$state3.endX;
      var currentScaleValue = this.state[id];
      var currentIndex = scaleValues.indexOf(currentScaleValue);
      if (currentIndex === -1) {
        return;
      }
      var newIndex = currentIndex + direction;
      if (newIndex === -1 || newIndex >= scaleValues.length) {
        return;
      }
      var newScaleValue = scaleValues[newIndex];
      if (id === "startX" && newScaleValue >= endX || id === "endX" && newScaleValue <= startX) {
        return;
      }
      this.setState(_defineProperty$e({}, id, newScaleValue), function() {
        _this2.props.onChange(_this2.getIndex({
          startX: _this2.state.startX,
          endX: _this2.state.endX
        }));
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props6 = this.props, x2 = _this$props6.x, y2 = _this$props6.y, width = _this$props6.width, height = _this$props6.height, fill = _this$props6.fill, stroke = _this$props6.stroke;
      return /* @__PURE__ */ React.createElement("rect", {
        stroke,
        fill,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props7 = this.props, x2 = _this$props7.x, y2 = _this$props7.y, width = _this$props7.width, height = _this$props7.height, data = _this$props7.data, children = _this$props7.children, padding = _this$props7.padding;
      var chartElement = reactExports.Children.only(children);
      if (!chartElement) {
        return null;
      }
      return /* @__PURE__ */ React.cloneElement(chartElement, {
        x: x2,
        y: y2,
        width,
        height,
        margin: padding,
        compact: true,
        data
      });
    }
  }, {
    key: "renderTravellerLayer",
    value: function renderTravellerLayer(travellerX, id) {
      var _data$startIndex, _data$endIndex, _this3 = this;
      var _this$props8 = this.props, y2 = _this$props8.y, travellerWidth = _this$props8.travellerWidth, height = _this$props8.height, traveller = _this$props8.traveller, ariaLabel = _this$props8.ariaLabel, data = _this$props8.data, startIndex = _this$props8.startIndex, endIndex = _this$props8.endIndex;
      var x2 = Math.max(travellerX, this.props.x);
      var travellerProps = _objectSpread$b(_objectSpread$b({}, filterProps(this.props, false)), {}, {
        x: x2,
        y: y2,
        width: travellerWidth,
        height
      });
      var ariaLabelBrush = ariaLabel || "Min value: ".concat((_data$startIndex = data[startIndex]) === null || _data$startIndex === void 0 ? void 0 : _data$startIndex.name, ", Max value: ").concat((_data$endIndex = data[endIndex]) === null || _data$endIndex === void 0 ? void 0 : _data$endIndex.name);
      return /* @__PURE__ */ React.createElement(Layer, {
        tabIndex: 0,
        role: "slider",
        "aria-label": ariaLabelBrush,
        "aria-valuenow": travellerX,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        onKeyDown: function onKeyDown(e) {
          if (!["ArrowLeft", "ArrowRight"].includes(e.key)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          _this3.handleTravellerMoveKeyboard(e.key === "ArrowRight" ? 1 : -1, id);
        },
        onFocus: function onFocus() {
          _this3.setState({
            isTravellerFocused: true
          });
        },
        onBlur: function onBlur() {
          _this3.setState({
            isTravellerFocused: false
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, Brush2.renderTraveller(traveller, travellerProps));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props9 = this.props, y2 = _this$props9.y, height = _this$props9.height, stroke = _this$props9.stroke, travellerWidth = _this$props9.travellerWidth;
      var x2 = Math.min(startX, endX) + travellerWidth;
      var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
      return /* @__PURE__ */ React.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props10 = this.props, startIndex = _this$props10.startIndex, endIndex = _this$props10.endIndex, y2 = _this$props10.y, height = _this$props10.height, travellerWidth = _this$props10.travellerWidth, stroke = _this$props10.stroke;
      var _this$state4 = this.state, startX = _this$state4.startX, endX = _this$state4.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: "none",
        fill: stroke
      };
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ React.createElement(Text, _extends$a({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(startIndex)), /* @__PURE__ */ React.createElement(Text, _extends$a({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props, data = _this$props11.data, className = _this$props11.className, children = _this$props11.children, x2 = _this$props11.x, y2 = _this$props11.y, width = _this$props11.width, height = _this$props11.height, alwaysShowText = _this$props11.alwaysShowText;
      var _this$state5 = this.state, startX = _this$state5.startX, endX = _this$state5.endX, isTextActive = _this$state5.isTextActive, isSlideMoving = _this$state5.isSlideMoving, isTravellerMoving = _this$state5.isTravellerMoving, isTravellerFocused = _this$state5.isTravellerFocused;
      if (!data || !data.length || !isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
        return null;
      }
      var layerClass = clsx("recharts-brush", className);
      var isPanoramic = React.Children.count(children) === 1;
      var style = generatePrefixStyle("userSelect", "none");
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, "startX"), this.renderTravellerLayer(endX, "endX"), (isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function renderDefaultTraveller(props) {
      var x2 = props.x, y2 = props.y, width = props.width, height = props.height, stroke = props.stroke;
      var lineY = Math.floor(y2 + height / 2) - 1;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
        x: x2,
        y: y2,
        width,
        height,
        fill: stroke,
        stroke: "none"
      }), /* @__PURE__ */ React.createElement("line", {
        x1: x2 + 1,
        y1: lineY,
        x2: x2 + width - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ React.createElement("line", {
        x1: x2 + 1,
        y1: lineY + 2,
        x2: x2 + width - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(option, props) {
      var rectangle;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        rectangle = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        rectangle = option(props);
      } else {
        rectangle = Brush2.renderDefaultTraveller(props);
      }
      return rectangle;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data = nextProps.data, width = nextProps.width, x2 = nextProps.x, travellerWidth = nextProps.travellerWidth, updateId = nextProps.updateId, startIndex = nextProps.startIndex, endIndex = nextProps.endIndex;
      if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
        return _objectSpread$b({
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width
        }, data && data.length ? createScale({
          data,
          width,
          x: x2,
          travellerWidth,
          startIndex,
          endIndex
        }) : {
          scale: null,
          scaleValues: null
        });
      }
      if (prevState.scale && (width !== prevState.prevWidth || x2 !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
        prevState.scale.range([x2, x2 + width - travellerWidth]);
        var scaleValues = prevState.scale.domain().map(function(entry) {
          return prevState.scale(entry);
        });
        return {
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width,
          startX: prevState.scale(nextProps.startIndex),
          endX: prevState.scale(nextProps.endIndex),
          scaleValues
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function getIndexInRange(valueRange, x2) {
      var len = valueRange.length;
      var start = 0;
      var end = len - 1;
      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);
        if (valueRange[middle] > x2) {
          end = middle;
        } else {
          start = middle;
        }
      }
      return x2 >= valueRange[end] ? end : start;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty$e(Brush, "displayName", "Brush");
_defineProperty$e(Brush, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: false
});
var _baseSome;
var hasRequired_baseSome;
function require_baseSome() {
  if (hasRequired_baseSome) return _baseSome;
  hasRequired_baseSome = 1;
  var baseEach = require_baseEach();
  function baseSome(collection, predicate) {
    var result;
    baseEach(collection, function(value, index, collection2) {
      result = predicate(value, index, collection2);
      return !result;
    });
    return !!result;
  }
  _baseSome = baseSome;
  return _baseSome;
}
var some_1;
var hasRequiredSome;
function requireSome() {
  if (hasRequiredSome) return some_1;
  hasRequiredSome = 1;
  var arraySome = require_arraySome(), baseIteratee = require_baseIteratee(), baseSome = require_baseSome(), isArray2 = requireIsArray(), isIterateeCall = require_isIterateeCall();
  function some2(collection, predicate, guard) {
    var func = isArray2(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = void 0;
    }
    return func(collection, baseIteratee(predicate, 3));
  }
  some_1 = some2;
  return some_1;
}
var someExports = requireSome();
const some = /* @__PURE__ */ getDefaultExportFromCjs(someExports);
var ifOverflowMatches = function ifOverflowMatches2(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;
  if (alwaysShow) {
    ifOverflow = "extendDomain";
  }
  return ifOverflow === value;
};
var _baseAssignValue;
var hasRequired_baseAssignValue;
function require_baseAssignValue() {
  if (hasRequired_baseAssignValue) return _baseAssignValue;
  hasRequired_baseAssignValue = 1;
  var defineProperty = require_defineProperty();
  function baseAssignValue(object2, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object2, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object2[key] = value;
    }
  }
  _baseAssignValue = baseAssignValue;
  return _baseAssignValue;
}
var mapValues_1;
var hasRequiredMapValues;
function requireMapValues() {
  if (hasRequiredMapValues) return mapValues_1;
  hasRequiredMapValues = 1;
  var baseAssignValue = require_baseAssignValue(), baseForOwn = require_baseForOwn(), baseIteratee = require_baseIteratee();
  function mapValues2(object2, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object2, function(value, key, object3) {
      baseAssignValue(result, key, iteratee(value, key, object3));
    });
    return result;
  }
  mapValues_1 = mapValues2;
  return mapValues_1;
}
var mapValuesExports = requireMapValues();
const mapValues = /* @__PURE__ */ getDefaultExportFromCjs(mapValuesExports);
var _arrayEvery;
var hasRequired_arrayEvery;
function require_arrayEvery() {
  if (hasRequired_arrayEvery) return _arrayEvery;
  hasRequired_arrayEvery = 1;
  function arrayEvery(array2, predicate) {
    var index = -1, length = array2 == null ? 0 : array2.length;
    while (++index < length) {
      if (!predicate(array2[index], index, array2)) {
        return false;
      }
    }
    return true;
  }
  _arrayEvery = arrayEvery;
  return _arrayEvery;
}
var _baseEvery;
var hasRequired_baseEvery;
function require_baseEvery() {
  if (hasRequired_baseEvery) return _baseEvery;
  hasRequired_baseEvery = 1;
  var baseEach = require_baseEach();
  function baseEvery(collection, predicate) {
    var result = true;
    baseEach(collection, function(value, index, collection2) {
      result = !!predicate(value, index, collection2);
      return result;
    });
    return result;
  }
  _baseEvery = baseEvery;
  return _baseEvery;
}
var every_1;
var hasRequiredEvery;
function requireEvery() {
  if (hasRequiredEvery) return every_1;
  hasRequiredEvery = 1;
  var arrayEvery = require_arrayEvery(), baseEvery = require_baseEvery(), baseIteratee = require_baseIteratee(), isArray2 = requireIsArray(), isIterateeCall = require_isIterateeCall();
  function every2(collection, predicate, guard) {
    var func = isArray2(collection) ? arrayEvery : baseEvery;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = void 0;
    }
    return func(collection, baseIteratee(predicate, 3));
  }
  every_1 = every2;
  return every_1;
}
var everyExports = requireEvery();
const every = /* @__PURE__ */ getDefaultExportFromCjs(everyExports);
var _excluded$4 = ["x", "y"];
function _typeof$d(o) {
  "@babel/helpers - typeof";
  return _typeof$d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$d(o);
}
function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty$d(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$d(obj, key, value) {
  key = _toPropertyKey$d(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$d(t) {
  var i = _toPrimitive$d(t, "string");
  return "symbol" == _typeof$d(i) ? i : i + "";
}
function _toPrimitive$d(t, r) {
  if ("object" != _typeof$d(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$d(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function typeguardBarRectangleProps(_ref, props) {
  var xProp = _ref.x, yProp = _ref.y, option = _objectWithoutProperties$4(_ref, _excluded$4);
  var xValue = "".concat(xProp);
  var x2 = parseInt(xValue, 10);
  var yValue = "".concat(yProp);
  var y2 = parseInt(yValue, 10);
  var heightValue = "".concat(props.height || option.height);
  var height = parseInt(heightValue, 10);
  var widthValue = "".concat(props.width || option.width);
  var width = parseInt(widthValue, 10);
  return _objectSpread$a(_objectSpread$a(_objectSpread$a(_objectSpread$a(_objectSpread$a({}, props), option), x2 ? {
    x: x2
  } : {}), y2 ? {
    y: y2
  } : {}), {}, {
    height,
    width,
    name: props.name,
    radius: props.radius
  });
}
function BarRectangle(props) {
  return /* @__PURE__ */ React.createElement(Shape, _extends$9({
    shapeType: "rectangle",
    propTransformer: typeguardBarRectangleProps,
    activeClassName: "recharts-active-bar"
  }, props));
}
var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(value, index) {
    if (typeof minPointSize === "number") return minPointSize;
    var isValueNumber = typeof value === "number";
    if (isValueNumber) {
      return minPointSize(value, index);
    }
    !isValueNumber ? invariant(false) : void 0;
    return defaultValue;
  };
};
var _excluded$3 = ["value", "background"];
var _Bar;
function _typeof$c(o) {
  "@babel/helpers - typeof";
  return _typeof$c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$c(o);
}
function _objectWithoutProperties$3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty$c(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$c(descriptor.key), descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$7(t, o, e) {
  return o = _getPrototypeOf$7(o), _possibleConstructorReturn$7(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf$7(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$7(self, call) {
  if (call && (_typeof$c(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$7(self);
}
function _assertThisInitialized$7(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$7() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$7(o) {
  _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$7(o);
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$7(subClass, superClass);
}
function _setPrototypeOf$7(o, p) {
  _setPrototypeOf$7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$7(o, p);
}
function _defineProperty$c(obj, key, value) {
  key = _toPropertyKey$c(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$c(t) {
  var i = _toPrimitive$c(t, "string");
  return "symbol" == _typeof$c(i) ? i : i + "";
}
function _toPrimitive$c(t, r) {
  if ("object" != _typeof$c(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$c(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Bar = /* @__PURE__ */ function(_PureComponent) {
  function Bar2() {
    var _this;
    _classCallCheck$9(this, Bar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$7(this, Bar2, [].concat(args));
    _defineProperty$c(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty$c(_this, "id", uniqueId("recharts-bar-"));
    _defineProperty$c(_this, "handleAnimationEnd", function() {
      var onAnimationEnd2 = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (onAnimationEnd2) {
        onAnimationEnd2();
      }
    });
    _defineProperty$c(_this, "handleAnimationStart", function() {
      var onAnimationStart2 = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (onAnimationStart2) {
        onAnimationStart2();
      }
    });
    return _this;
  }
  _inherits$7(Bar2, _PureComponent);
  return _createClass$9(Bar2, [{
    key: "renderRectanglesStatically",
    value: function renderRectanglesStatically(data) {
      var _this2 = this;
      var _this$props = this.props, shape = _this$props.shape, dataKey = _this$props.dataKey, activeIndex = _this$props.activeIndex, activeBar = _this$props.activeBar;
      var baseProps = filterProps(this.props, false);
      return data && data.map(function(entry, i) {
        var isActive = i === activeIndex;
        var option = isActive ? activeBar : shape;
        var props = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, baseProps), entry), {}, {
          isActive,
          option,
          index: i,
          dataKey,
          onAnimationStart: _this2.handleAnimationStart,
          onAnimationEnd: _this2.handleAnimationEnd
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends$8({
          className: "recharts-bar-rectangle"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value)
        }), /* @__PURE__ */ React.createElement(BarRectangle, props));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function renderRectanglesWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props, data = _this$props2.data, layout = _this$props2.layout, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
      var prevData = this.state.prevData;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        var stepData = data.map(function(entry, index) {
          var prev = prevData && prevData[index];
          if (prev) {
            var interpolatorX = interpolateNumber$2(prev.x, entry.x);
            var interpolatorY = interpolateNumber$2(prev.y, entry.y);
            var interpolatorWidth = interpolateNumber$2(prev.width, entry.width);
            var interpolatorHeight = interpolateNumber$2(prev.height, entry.height);
            return _objectSpread$9(_objectSpread$9({}, entry), {}, {
              x: interpolatorX(t),
              y: interpolatorY(t),
              width: interpolatorWidth(t),
              height: interpolatorHeight(t)
            });
          }
          if (layout === "horizontal") {
            var _interpolatorHeight = interpolateNumber$2(0, entry.height);
            var h = _interpolatorHeight(t);
            return _objectSpread$9(_objectSpread$9({}, entry), {}, {
              y: entry.y + entry.height - h,
              height: h
            });
          }
          var interpolator = interpolateNumber$2(0, entry.width);
          var w = interpolator(t);
          return _objectSpread$9(_objectSpread$9({}, entry), {}, {
            width: w
          });
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderRectanglesStatically(stepData));
      });
    }
  }, {
    key: "renderRectangles",
    value: function renderRectangles() {
      var _this$props3 = this.props, data = _this$props3.data, isAnimationActive = _this$props3.isAnimationActive;
      var prevData = this.state.prevData;
      if (isAnimationActive && data && data.length && (!prevData || !isEqual(prevData, data))) {
        return this.renderRectanglesWithAnimation();
      }
      return this.renderRectanglesStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this4 = this;
      var _this$props4 = this.props, data = _this$props4.data, dataKey = _this$props4.dataKey, activeIndex = _this$props4.activeIndex;
      var backgroundProps = filterProps(this.props.background, false);
      return data.map(function(entry, i) {
        entry.value;
        var background = entry.background, rest = _objectWithoutProperties$3(entry, _excluded$3);
        if (!background) {
          return null;
        }
        var props = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, rest), {}, {
          fill: "#eee"
        }, background), backgroundProps), adaptEventsOfChild(_this4.props, entry, i)), {}, {
          onAnimationStart: _this4.handleAnimationStart,
          onAnimationEnd: _this4.handleAnimationEnd,
          dataKey,
          index: i,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ React.createElement(BarRectangle, _extends$8({
          key: "background-bar-".concat(i),
          option: _this4.props.background,
          isActive: i === activeIndex
        }, props));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar(needClip, clipPathId) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props5 = this.props, data = _this$props5.data, xAxis = _this$props5.xAxis, yAxis = _this$props5.yAxis, layout = _this$props5.layout, children = _this$props5.children;
      var errorBarItems = findAllByType(children, ErrorBar);
      if (!errorBarItems) {
        return null;
      }
      var offset = layout === "vertical" ? data[0].height / 2 : data[0].width / 2;
      var dataPointFormatter = function dataPointFormatter2(dataPoint, dataKey) {
        var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      };
      var errorBarProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ React.createElement(Layer, errorBarProps, errorBarItems.map(function(item) {
        return /* @__PURE__ */ React.cloneElement(item, {
          key: "error-bar-".concat(clipPathId, "-").concat(item.props.dataKey),
          data,
          xAxis,
          yAxis,
          layout,
          offset,
          dataPointFormatter
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, hide = _this$props6.hide, data = _this$props6.data, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, left = _this$props6.left, top = _this$props6.top, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, background = _this$props6.background, id = _this$props6.id;
      if (hide || !data || !data.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-bar", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-bar-rectangles",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curData: nextProps.data,
          prevData: prevState.curData
        };
      }
      if (nextProps.data !== prevState.curData) {
        return {
          curData: nextProps.data
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Bar = Bar;
_defineProperty$c(Bar, "displayName", "Bar");
_defineProperty$c(Bar, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: false,
  data: [],
  layout: "vertical",
  activeBar: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
_defineProperty$c(Bar, "getComposedData", function(_ref2) {
  var props = _ref2.props, item = _ref2.item, barPosition = _ref2.barPosition, bandSize = _ref2.bandSize, xAxis = _ref2.xAxis, yAxis = _ref2.yAxis, xAxisTicks = _ref2.xAxisTicks, yAxisTicks = _ref2.yAxisTicks, stackedData = _ref2.stackedData, dataStartIndex = _ref2.dataStartIndex, displayedData = _ref2.displayedData, offset = _ref2.offset;
  var pos = findPositionOfBar(barPosition, item);
  if (!pos) {
    return null;
  }
  var layout = props.layout;
  var itemDefaultProps = item.type.defaultProps;
  var itemProps = itemDefaultProps !== void 0 ? _objectSpread$9(_objectSpread$9({}, itemDefaultProps), item.props) : item.props;
  var dataKey = itemProps.dataKey, children = itemProps.children, minPointSizeProp = itemProps.minPointSize;
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var cells = findAllByType(children, Cell);
  var rects = displayedData.map(function(entry, index) {
    var value, x2, y2, width, height, background;
    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    var minPointSize = minPointSizeCallback(minPointSizeProp, _Bar.defaultProps.minPointSize)(value[1], index);
    if (layout === "horizontal") {
      var _ref4;
      var _ref3 = [yAxis.scale(value[0]), yAxis.scale(value[1])], baseValueScale = _ref3[0], currentValueScale = _ref3[1];
      x2 = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      y2 = (_ref4 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref4 !== void 0 ? _ref4 : void 0;
      width = pos.size;
      var computedHeight = baseValueScale - currentValueScale;
      height = Number.isNaN(computedHeight) ? 0 : computedHeight;
      background = {
        x: x2,
        y: yAxis.y,
        width,
        height: yAxis.height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y2 -= delta;
        height += delta;
      }
    } else {
      var _ref5 = [xAxis.scale(value[0]), xAxis.scale(value[1])], _baseValueScale = _ref5[0], _currentValueScale = _ref5[1];
      x2 = _baseValueScale;
      y2 = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      width = _currentValueScale - _baseValueScale;
      height = pos.size;
      background = {
        x: xAxis.x,
        y: y2,
        width: xAxis.width,
        height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }
    return _objectSpread$9(_objectSpread$9(_objectSpread$9({}, entry), {}, {
      x: x2,
      y: y2,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [getTooltipItem(item, entry)],
      tooltipPosition: {
        x: x2 + width / 2,
        y: y2 + height / 2
      }
    });
  });
  return _objectSpread$9({
    data: rects,
    layout
  }, offset);
});
function _typeof$b(o) {
  "@babel/helpers - typeof";
  return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$b(o);
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$b(descriptor.key), descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$8(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
      _defineProperty$b(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$b(obj, key, value) {
  key = _toPropertyKey$b(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$b(t) {
  var i = _toPrimitive$b(t, "string");
  return "symbol" == _typeof$b(i) ? i : i + "";
}
function _toPrimitive$b(t, r) {
  if ("object" != _typeof$b(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$b(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var formatAxisMap = function formatAxisMap2(props, axisMap, offset, axisType, chartName) {
  var width = props.width, height = props.height, layout = props.layout, children = props.children;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  var hasBar = !!findChildByType(children, Bar);
  return ids.reduce(function(result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation, domain = axis.domain, _axis$padding = axis.padding, padding = _axis$padding === void 0 ? {} : _axis$padding, mirror = axis.mirror, reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? "Mirror" : "");
    var calculatedPadding, range3, x2, y2, needSpace;
    if (axis.type === "number" && (axis.padding === "gap" || axis.padding === "no-gap")) {
      var diff = domain[1] - domain[0];
      var smallestDistanceBetweenValues = Infinity;
      var sortedValues = axis.categoricalDomain.sort();
      sortedValues.forEach(function(value, index) {
        if (index > 0) {
          smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
        }
      });
      if (Number.isFinite(smallestDistanceBetweenValues)) {
        var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
        var rangeWidth = axis.layout === "vertical" ? offset.height : offset.width;
        if (axis.padding === "gap") {
          calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
        }
        if (axis.padding === "no-gap") {
          var gap = getPercentValue(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
          var halfBand = smallestDistanceInPercent * rangeWidth / 2;
          calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
        }
      }
    }
    if (axisType === "xAxis") {
      range3 = [offset.left + (padding.left || 0) + (calculatedPadding || 0), offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)];
    } else if (axisType === "yAxis") {
      range3 = layout === "horizontal" ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0) + (calculatedPadding || 0), offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)];
    } else {
      range3 = axis.range;
    }
    if (reversed) {
      range3 = [range3[1], range3[0]];
    }
    var _parseScale = parseScale(axis, chartName, hasBar), scale = _parseScale.scale, realScaleType = _parseScale.realScaleType;
    scale.domain(domain).range(range3);
    checkDomainOfScale(scale);
    var ticks2 = getTicksOfScale(scale, _objectSpread$8(_objectSpread$8({}, axis), {}, {
      realScaleType
    }));
    if (axisType === "xAxis") {
      needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
      x2 = offset.left;
      y2 = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === "yAxis") {
      needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
      x2 = steps[offsetKey] - needSpace * axis.width;
      y2 = offset.top;
    }
    var finalAxis = _objectSpread$8(_objectSpread$8(_objectSpread$8({}, axis), ticks2), {}, {
      realScaleType,
      x: x2,
      y: y2,
      scale,
      width: axisType === "xAxis" ? offset.width : axis.width,
      height: axisType === "yAxis" ? offset.height : axis.height
    });
    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks2);
    if (!axis.hide && axisType === "xAxis") {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }
    return _objectSpread$8(_objectSpread$8({}, result), {}, _defineProperty$b({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints2(_ref, _ref2) {
  var x1 = _ref.x, y1 = _ref.y;
  var x2 = _ref2.x, y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};
var rectWithCoords = function rectWithCoords2(_ref3) {
  var x1 = _ref3.x1, y1 = _ref3.y1, x2 = _ref3.x2, y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper = /* @__PURE__ */ function() {
  function ScaleHelper2(scale) {
    _classCallCheck$8(this, ScaleHelper2);
    this.scale = scale;
  }
  return _createClass$8(ScaleHelper2, [{
    key: "domain",
    get: function get2() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get2() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get2() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get2() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get2() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref4.bandAware, position = _ref4.position;
      if (value === void 0) {
        return void 0;
      }
      if (position) {
        switch (position) {
          case "start": {
            return this.scale(value);
          }
          case "middle": {
            var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(value) + offset;
          }
          case "end": {
            var _offset = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(value) + _offset;
          }
          default: {
            return this.scale(value);
          }
        }
      }
      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + _offset2;
      }
      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range3 = this.range();
      var first = range3[0];
      var last2 = range3[range3.length - 1];
      return first <= last2 ? value >= first && value <= last2 : value >= last2 && value <= first;
    }
  }], [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper2(obj);
    }
  }]);
}();
_defineProperty$b(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = function createLabeledScales2(options) {
  var scales = Object.keys(options).reduce(function(res, key) {
    return _objectSpread$8(_objectSpread$8({}, res), {}, _defineProperty$b({}, key, ScaleHelper.create(options[key])));
  }, {});
  return _objectSpread$8(_objectSpread$8({}, scales), {}, {
    apply: function apply(coord) {
      var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref5.bandAware, position = _ref5.position;
      return mapValues(coord, function(value, label) {
        return scales[label].apply(value, {
          bandAware,
          position
        });
      });
    },
    isInRange: function isInRange(coord) {
      return every(coord, function(value, label) {
        return scales[label].isInRange(value);
      });
    }
  });
};
function normalizeAngle(angle) {
  return (angle % 180 + 180) % 180;
}
var getAngledRectangleWidth = function getAngledRectangleWidth2(_ref6) {
  var width = _ref6.width, height = _ref6.height;
  var angle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var normalizedAngle = normalizeAngle(angle);
  var angleRadians = normalizedAngle * Math.PI / 180;
  var angleThreshold = Math.atan(height / width);
  var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
  return Math.abs(angledWidth);
};
var _createFind;
var hasRequired_createFind;
function require_createFind() {
  if (hasRequired_createFind) return _createFind;
  hasRequired_createFind = 1;
  var baseIteratee = require_baseIteratee(), isArrayLike = requireIsArrayLike(), keys2 = requireKeys();
  function createFind(findIndexFunc) {
    return function(collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys2(collection);
        predicate = function(key) {
          return iteratee(iterable[key], key, iterable);
        };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
    };
  }
  _createFind = createFind;
  return _createFind;
}
var toInteger_1;
var hasRequiredToInteger;
function requireToInteger() {
  if (hasRequiredToInteger) return toInteger_1;
  hasRequiredToInteger = 1;
  var toFinite = requireToFinite();
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  toInteger_1 = toInteger;
  return toInteger_1;
}
var findIndex_1;
var hasRequiredFindIndex;
function requireFindIndex() {
  if (hasRequiredFindIndex) return findIndex_1;
  hasRequiredFindIndex = 1;
  var baseFindIndex = require_baseFindIndex(), baseIteratee = require_baseIteratee(), toInteger = requireToInteger();
  var nativeMax = Math.max;
  function findIndex(array2, predicate, fromIndex) {
    var length = array2 == null ? 0 : array2.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array2, baseIteratee(predicate, 3), index);
  }
  findIndex_1 = findIndex;
  return findIndex_1;
}
var find_1;
var hasRequiredFind;
function requireFind() {
  if (hasRequiredFind) return find_1;
  hasRequiredFind = 1;
  var createFind = require_createFind(), findIndex = requireFindIndex();
  var find2 = createFind(findIndex);
  find_1 = find2;
  return find_1;
}
var findExports = requireFind();
const find = /* @__PURE__ */ getDefaultExportFromCjs(findExports);
var memoizeExports = requireMemoize();
const memoize2 = /* @__PURE__ */ getDefaultExportFromCjs(memoizeExports);
var calculateViewBox = memoize2(function(offset) {
  return {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
}, function(offset) {
  return ["l", offset.left, "t", offset.top, "w", offset.width, "h", offset.height].join("");
});
var XAxisContext = /* @__PURE__ */ reactExports.createContext(void 0);
var YAxisContext = /* @__PURE__ */ reactExports.createContext(void 0);
var ViewBoxContext = /* @__PURE__ */ reactExports.createContext(void 0);
var OffsetContext = /* @__PURE__ */ reactExports.createContext({});
var ClipPathIdContext = /* @__PURE__ */ reactExports.createContext(void 0);
var ChartHeightContext = /* @__PURE__ */ reactExports.createContext(0);
var ChartWidthContext = /* @__PURE__ */ reactExports.createContext(0);
var ChartLayoutContextProvider = function ChartLayoutContextProvider2(props) {
  var _props$state = props.state, xAxisMap = _props$state.xAxisMap, yAxisMap = _props$state.yAxisMap, offset = _props$state.offset, clipPathId = props.clipPathId, children = props.children, width = props.width, height = props.height;
  var viewBox = calculateViewBox(offset);
  return /* @__PURE__ */ React.createElement(XAxisContext.Provider, {
    value: xAxisMap
  }, /* @__PURE__ */ React.createElement(YAxisContext.Provider, {
    value: yAxisMap
  }, /* @__PURE__ */ React.createElement(OffsetContext.Provider, {
    value: offset
  }, /* @__PURE__ */ React.createElement(ViewBoxContext.Provider, {
    value: viewBox
  }, /* @__PURE__ */ React.createElement(ClipPathIdContext.Provider, {
    value: clipPathId
  }, /* @__PURE__ */ React.createElement(ChartHeightContext.Provider, {
    value: height
  }, /* @__PURE__ */ React.createElement(ChartWidthContext.Provider, {
    value: width
  }, children)))))));
};
var useClipPathId = function useClipPathId2() {
  return reactExports.useContext(ClipPathIdContext);
};
var useXAxisOrThrow = function useXAxisOrThrow2(xAxisId) {
  var xAxisMap = reactExports.useContext(XAxisContext);
  !(xAxisMap != null) ? invariant(false) : void 0;
  var xAxis = xAxisMap[xAxisId];
  !(xAxis != null) ? invariant(false) : void 0;
  return xAxis;
};
var useArbitraryXAxis = function useArbitraryXAxis2() {
  var xAxisMap = reactExports.useContext(XAxisContext);
  return getAnyElementOfObject(xAxisMap);
};
var useYAxisWithFiniteDomainOrRandom = function useYAxisWithFiniteDomainOrRandom2() {
  var yAxisMap = reactExports.useContext(YAxisContext);
  var yAxisWithFiniteDomain = find(yAxisMap, function(axis) {
    return every(axis.domain, Number.isFinite);
  });
  return yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
};
var useYAxisOrThrow = function useYAxisOrThrow2(yAxisId) {
  var yAxisMap = reactExports.useContext(YAxisContext);
  !(yAxisMap != null) ? invariant(false) : void 0;
  var yAxis = yAxisMap[yAxisId];
  !(yAxis != null) ? invariant(false) : void 0;
  return yAxis;
};
var useViewBox = function useViewBox2() {
  var viewBox = reactExports.useContext(ViewBoxContext);
  return viewBox;
};
var useOffset = function useOffset2() {
  return reactExports.useContext(OffsetContext);
};
var useChartWidth = function useChartWidth2() {
  return reactExports.useContext(ChartWidthContext);
};
var useChartHeight = function useChartHeight2() {
  return reactExports.useContext(ChartHeightContext);
};
function _typeof$a(o) {
  "@babel/helpers - typeof";
  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$a(o);
}
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$a(descriptor.key), descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$7(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$6(t, o, e) {
  return o = _getPrototypeOf$6(o), _possibleConstructorReturn$6(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf$6(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$6(self, call) {
  if (call && (_typeof$a(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$6(self);
}
function _assertThisInitialized$6(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$6() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$6(o) {
  _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$6(o);
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$6(subClass, superClass);
}
function _setPrototypeOf$6(o, p) {
  _setPrototypeOf$6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$6(o, p);
}
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$a(obj, key, value) {
  key = _toPropertyKey$a(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$a(t) {
  var i = _toPrimitive$a(t, "string");
  return "symbol" == _typeof$a(i) ? i : i + "";
}
function _toPrimitive$a(t, r) {
  if ("object" != _typeof$a(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$a(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit$1(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function _extends$7() {
  _extends$7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
var renderLine = function renderLine2(option, props) {
  var line;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    line = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    line = option(props);
  } else {
    line = /* @__PURE__ */ React.createElement("line", _extends$7({}, props, {
      className: "recharts-reference-line-line"
    }));
  }
  return line;
};
var getEndPoints = function getEndPoints2(scales, isFixedX, isFixedY, isSegment, viewBox, position, xAxisOrientation, yAxisOrientation, props) {
  var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
  if (isFixedY) {
    var yCoord = props.y;
    var coord = scales.y.apply(yCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.y.isInRange(coord)) {
      return null;
    }
    var points = [{
      x: x2 + width,
      y: coord
    }, {
      x: x2,
      y: coord
    }];
    return yAxisOrientation === "left" ? points.reverse() : points;
  }
  if (isFixedX) {
    var xCoord = props.x;
    var _coord = scales.x.apply(xCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.x.isInRange(_coord)) {
      return null;
    }
    var _points = [{
      x: _coord,
      y: y2 + height
    }, {
      x: _coord,
      y: y2
    }];
    return xAxisOrientation === "top" ? _points.reverse() : _points;
  }
  if (isSegment) {
    var segment = props.segment;
    var _points2 = segment.map(function(p) {
      return scales.apply(p, {
        position
      });
    });
    if (ifOverflowMatches(props, "discard") && some(_points2, function(p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }
    return _points2;
  }
  return null;
};
function ReferenceLineImpl(props) {
  var fixedX = props.x, fixedY = props.y, segment = props.segment, xAxisId = props.xAxisId, yAxisId = props.yAxisId, shape = props.shape, className = props.className, alwaysShow = props.alwaysShow;
  var clipPathId = useClipPathId();
  var xAxis = useXAxisOrThrow(xAxisId);
  var yAxis = useYAxisOrThrow(yAxisId);
  var viewBox = useViewBox();
  if (!clipPathId || !viewBox) {
    return null;
  }
  warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
  if (!endPoints) {
    return null;
  }
  var _endPoints = _slicedToArray$1(endPoints, 2), _endPoints$ = _endPoints[0], x1 = _endPoints$.x, y1 = _endPoints$.y, _endPoints$2 = _endPoints[1], x2 = _endPoints$2.x, y2 = _endPoints$2.y;
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  var lineProps = _objectSpread$7(_objectSpread$7({
    clipPath
  }, filterProps(props, true)), {}, {
    x1,
    y1,
    x2,
    y2
  });
  return /* @__PURE__ */ React.createElement(Layer, {
    className: clsx("recharts-reference-line", className)
  }, renderLine(shape, lineProps), Label.renderCallByParent(props, rectWithCoords({
    x1,
    y1,
    x2,
    y2
  })));
}
var ReferenceLine = /* @__PURE__ */ function(_React$Component) {
  function ReferenceLine2() {
    _classCallCheck$7(this, ReferenceLine2);
    return _callSuper$6(this, ReferenceLine2, arguments);
  }
  _inherits$6(ReferenceLine2, _React$Component);
  return _createClass$7(ReferenceLine2, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ React.createElement(ReferenceLineImpl, this.props);
    }
  }]);
}(React.Component);
_defineProperty$a(ReferenceLine, "displayName", "ReferenceLine");
_defineProperty$a(ReferenceLine, "defaultProps", {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function _extends$6() {
  _extends$6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
function _typeof$9(o) {
  "@babel/helpers - typeof";
  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$9(o);
}
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty$9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$9(descriptor.key), descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$6(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$5(t, o, e) {
  return o = _getPrototypeOf$5(o), _possibleConstructorReturn$5(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf$5(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$5(self, call) {
  if (call && (_typeof$9(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$5(self);
}
function _assertThisInitialized$5(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$5() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$5(o) {
  _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$5(o);
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$5(subClass, superClass);
}
function _setPrototypeOf$5(o, p) {
  _setPrototypeOf$5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$5(o, p);
}
function _defineProperty$9(obj, key, value) {
  key = _toPropertyKey$9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$9(t) {
  var i = _toPrimitive$9(t, "string");
  return "symbol" == _typeof$9(i) ? i : i + "";
}
function _toPrimitive$9(t, r) {
  if ("object" != _typeof$9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var getCoordinate = function getCoordinate2(props) {
  var x2 = props.x, y2 = props.y, xAxis = props.xAxis, yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x2,
    y: y2
  }, {
    bandAware: true
  });
  if (ifOverflowMatches(props, "discard") && !scales.isInRange(result)) {
    return null;
  }
  return result;
};
var ReferenceDot = /* @__PURE__ */ function(_React$Component) {
  function ReferenceDot2() {
    _classCallCheck$6(this, ReferenceDot2);
    return _callSuper$5(this, ReferenceDot2, arguments);
  }
  _inherits$5(ReferenceDot2, _React$Component);
  return _createClass$6(ReferenceDot2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, x2 = _this$props.x, y2 = _this$props.y, r = _this$props.r, alwaysShow = _this$props.alwaysShow, clipPathId = _this$props.clipPathId;
      var isX = isNumOrStr(x2);
      var isY = isNumOrStr(y2);
      warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      if (!isX || !isY) {
        return null;
      }
      var coordinate = getCoordinate(this.props);
      if (!coordinate) {
        return null;
      }
      var cx = coordinate.x, cy = coordinate.y;
      var _this$props2 = this.props, shape = _this$props2.shape, className = _this$props2.className;
      var clipPath = ifOverflowMatches(this.props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
      var dotProps = _objectSpread$6(_objectSpread$6({
        clipPath
      }, filterProps(this.props, true)), {}, {
        cx,
        cy
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-reference-dot", className)
      }, ReferenceDot2.renderDot(shape, dotProps), Label.renderCallByParent(this.props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r
      }));
    }
  }]);
}(React.Component);
_defineProperty$9(ReferenceDot, "displayName", "ReferenceDot");
_defineProperty$9(ReferenceDot, "defaultProps", {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
_defineProperty$9(ReferenceDot, "renderDot", function(option, props) {
  var dot;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    dot = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    dot = option(props);
  } else {
    dot = /* @__PURE__ */ React.createElement(Dot, _extends$6({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }
  return dot;
});
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _typeof$8(o) {
  "@babel/helpers - typeof";
  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$8(o);
}
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$8(descriptor.key), descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$5(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$4(t, o, e) {
  return o = _getPrototypeOf$4(o), _possibleConstructorReturn$4(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf$4(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$4(self, call) {
  if (call && (_typeof$8(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$4(self);
}
function _assertThisInitialized$4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$4(o) {
  _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$4(o);
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$4(subClass, superClass);
}
function _setPrototypeOf$4(o, p) {
  _setPrototypeOf$4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$4(o, p);
}
function _defineProperty$8(obj, key, value) {
  key = _toPropertyKey$8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$8(t) {
  var i = _toPrimitive$8(t, "string");
  return "symbol" == _typeof$8(i) ? i : i + "";
}
function _toPrimitive$8(t, r) {
  if ("object" != _typeof$8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var getRect = function getRect2(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1, xValue2 = props.x2, yValue1 = props.y1, yValue2 = props.y2, xAxis = props.xAxis, yAxis = props.yAxis;
  if (!xAxis || !yAxis) return null;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: "start"
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: "start"
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: "end"
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: "end"
    }) : scales.y.rangeMax
  };
  if (ifOverflowMatches(props, "discard") && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }
  return rectWithPoints(p1, p2);
};
var ReferenceArea = /* @__PURE__ */ function(_React$Component) {
  function ReferenceArea2() {
    _classCallCheck$5(this, ReferenceArea2);
    return _callSuper$4(this, ReferenceArea2, arguments);
  }
  _inherits$4(ReferenceArea2, _React$Component);
  return _createClass$5(ReferenceArea2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, x1 = _this$props.x1, x2 = _this$props.x2, y1 = _this$props.y1, y2 = _this$props.y2, className = _this$props.className, alwaysShow = _this$props.alwaysShow, clipPathId = _this$props.clipPathId;
      warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var hasX1 = isNumOrStr(x1);
      var hasX2 = isNumOrStr(x2);
      var hasY1 = isNumOrStr(y1);
      var hasY2 = isNumOrStr(y2);
      var shape = this.props.shape;
      if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
        return null;
      }
      var rect = getRect(hasX1, hasX2, hasY1, hasY2, this.props);
      if (!rect && !shape) {
        return null;
      }
      var clipPath = ifOverflowMatches(this.props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-reference-area", className)
      }, ReferenceArea2.renderRect(shape, _objectSpread$5(_objectSpread$5({
        clipPath
      }, filterProps(this.props, true)), rect)), Label.renderCallByParent(this.props, rect));
    }
  }]);
}(React.Component);
_defineProperty$8(ReferenceArea, "displayName", "ReferenceArea");
_defineProperty$8(ReferenceArea, "defaultProps", {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
_defineProperty$8(ReferenceArea, "renderRect", function(option, props) {
  var rect;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    rect = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    rect = option(props);
  } else {
    rect = /* @__PURE__ */ React.createElement(Rectangle, _extends$5({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }
  return rect;
});
function getEveryNthWithCondition(array2, n, isValid) {
  if (n < 1) {
    return [];
  }
  if (n === 1 && isValid === void 0) {
    return array2;
  }
  var result = [];
  for (var i = 0; i < array2.length; i += n) {
    {
      result.push(array2[i]);
    }
  }
  return result;
}
function getAngledTickWidth(contentSize, unitSize, angle) {
  var size = {
    width: contentSize.width + unitSize.width,
    height: contentSize.height + unitSize.height
  };
  return getAngledRectangleWidth(size, angle);
}
function getTickBoundaries(viewBox, sign2, sizeKey) {
  var isWidth = sizeKey === "width";
  var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
  if (sign2 === 1) {
    return {
      start: isWidth ? x2 : y2,
      end: isWidth ? x2 + width : y2 + height
    };
  }
  return {
    start: isWidth ? x2 + width : y2 + height,
    end: isWidth ? x2 : y2
  };
}
function isVisible(sign2, tickPosition, getSize, start, end) {
  if (sign2 * tickPosition < sign2 * start || sign2 * tickPosition > sign2 * end) {
    return false;
  }
  var size = getSize();
  return sign2 * (tickPosition - sign2 * size / 2 - start) >= 0 && sign2 * (tickPosition + sign2 * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks2, interval) {
  return getEveryNthWithCondition(ticks2, interval + 1);
}
function getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap) {
  var result = (ticks2 || []).slice();
  var initialStart = boundaries.start, end = boundaries.end;
  var index = 0;
  var stepsize = 1;
  var start = initialStart;
  var _loop = function _loop2() {
    var entry = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2[index];
    if (entry === void 0) {
      return {
        v: getEveryNthWithCondition(ticks2, stepsize)
      };
    }
    var i = index;
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i);
      }
      return size;
    };
    var tickCoord = entry.coordinate;
    var isShow = index === 0 || isVisible(sign2, tickCoord, getSize, start, end);
    if (!isShow) {
      index = 0;
      start = initialStart;
      stepsize += 1;
    }
    if (isShow) {
      start = tickCoord + sign2 * (getSize() / 2 + minTickGap);
      index += stepsize;
    }
  }, _ret;
  while (stepsize <= result.length) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return [];
}
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$7(obj, key, value) {
  key = _toPropertyKey$7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$7(t) {
  var i = _toPrimitive$7(t, "string");
  return "symbol" == _typeof$7(i) ? i : i + "";
}
function _toPrimitive$7(t, r) {
  if ("object" != _typeof$7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap) {
  var result = (ticks2 || []).slice();
  var len = result.length;
  var start = boundaries.start;
  var end = boundaries.end;
  var _loop = function _loop2(i2) {
    var entry = result[i2];
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i2);
      }
      return size;
    };
    if (i2 === len - 1) {
      var gap = sign2 * (entry.coordinate + sign2 * getSize() / 2 - end);
      result[i2] = entry = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        tickCoord: gap > 0 ? entry.coordinate - gap * sign2 : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
    if (isShow) {
      end = entry.tickCoord - sign2 * (getSize() / 2 + minTickGap);
      result[i2] = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = len - 1; i >= 0; i--) {
    _loop(i);
  }
  return result;
}
function getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, preserveEnd) {
  var result = (ticks2 || []).slice();
  var len = result.length;
  var start = boundaries.start, end = boundaries.end;
  if (preserveEnd) {
    var tail = ticks2[len - 1];
    var tailSize = getTickSize(tail, len - 1);
    var tailGap = sign2 * (tail.coordinate + sign2 * tailSize / 2 - end);
    result[len - 1] = tail = _objectSpread$4(_objectSpread$4({}, tail), {}, {
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign2 : tail.coordinate
    });
    var isTailShow = isVisible(sign2, tail.tickCoord, function() {
      return tailSize;
    }, start, end);
    if (isTailShow) {
      end = tail.tickCoord - sign2 * (tailSize / 2 + minTickGap);
      result[len - 1] = _objectSpread$4(_objectSpread$4({}, tail), {}, {
        isShow: true
      });
    }
  }
  var count = preserveEnd ? len - 1 : len;
  var _loop2 = function _loop22(i2) {
    var entry = result[i2];
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i2);
      }
      return size;
    };
    if (i2 === 0) {
      var gap = sign2 * (entry.coordinate - sign2 * getSize() / 2 - start);
      result[i2] = entry = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        tickCoord: gap < 0 ? entry.coordinate - gap * sign2 : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
    if (isShow) {
      start = entry.tickCoord + sign2 * (getSize() / 2 + minTickGap);
      result[i2] = _objectSpread$4(_objectSpread$4({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = 0; i < count; i++) {
    _loop2(i);
  }
  return result;
}
function getTicks(props, fontSize, letterSpacing) {
  var tick = props.tick, ticks2 = props.ticks, viewBox = props.viewBox, minTickGap = props.minTickGap, orientation = props.orientation, interval = props.interval, tickFormatter = props.tickFormatter, unit2 = props.unit, angle = props.angle;
  if (!ticks2 || !ticks2.length || !tick) {
    return [];
  }
  if (isNumber(interval) || Global.isSsr) {
    return getNumberIntervalTicks(ticks2, typeof interval === "number" && isNumber(interval) ? interval : 0);
  }
  var candidates = [];
  var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
  var unitSize = unit2 && sizeKey === "width" ? getStringSize(unit2, {
    fontSize,
    letterSpacing
  }) : {
    width: 0,
    height: 0
  };
  var getTickSize = function getTickSize2(content, index) {
    var value = isFunction(tickFormatter) ? tickFormatter(content.value, index) : content.value;
    return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
      fontSize,
      letterSpacing
    }), unitSize, angle) : getStringSize(value, {
      fontSize,
      letterSpacing
    })[sizeKey];
  };
  var sign2 = ticks2.length >= 2 ? mathSign(ticks2[1].coordinate - ticks2[0].coordinate) : 1;
  var boundaries = getTickBoundaries(viewBox, sign2, sizeKey);
  if (interval === "equidistantPreserveStart") {
    return getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap);
  }
  if (interval === "preserveStart" || interval === "preserveStartEnd") {
    candidates = getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, interval === "preserveStartEnd");
  } else {
    candidates = getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap);
  }
  return candidates.filter(function(entry) {
    return entry.isShow;
  });
}
var _excluded$2 = ["viewBox"], _excluded2$2 = ["viewBox"], _excluded3 = ["ticks"];
function _typeof$6(o) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$6(o);
}
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$6(descriptor.key), descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$3(t, o, e) {
  return o = _getPrototypeOf$3(o), _possibleConstructorReturn$3(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf$3(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$6(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$3(self);
}
function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$3(o);
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$3(o, p);
}
function _defineProperty$6(obj, key, value) {
  key = _toPropertyKey$6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$6(t) {
  var i = _toPrimitive$6(t, "string");
  return "symbol" == _typeof$6(i) ? i : i + "";
}
function _toPrimitive$6(t, r) {
  if ("object" != _typeof$6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var CartesianAxis = /* @__PURE__ */ function(_Component) {
  function CartesianAxis2(props) {
    var _this;
    _classCallCheck$4(this, CartesianAxis2);
    _this = _callSuper$3(this, CartesianAxis2, [props]);
    _this.state = {
      fontSize: "",
      letterSpacing: ""
    };
    return _this;
  }
  _inherits$3(CartesianAxis2, _Component);
  return _createClass$4(CartesianAxis2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var viewBox = _ref.viewBox, restProps = _objectWithoutProperties$2(_ref, _excluded$2);
      var _this$props = this.props, viewBoxOld = _this$props.viewBox, restPropsOld = _objectWithoutProperties$2(_this$props, _excluded2$2);
      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(nextState, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var htmlLayer = this.layerReference;
      if (!htmlLayer) return;
      var tick = htmlLayer.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      if (tick) {
        this.setState({
          fontSize: window.getComputedStyle(tick).fontSize,
          letterSpacing: window.getComputedStyle(tick).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data) {
      var _this$props2 = this.props, x2 = _this$props2.x, y2 = _this$props2.y, width = _this$props2.width, height = _this$props2.height, orientation = _this$props2.orientation, tickSize = _this$props2.tickSize, mirror = _this$props2.mirror, tickMargin = _this$props2.tickMargin;
      var x1, x22, y1, y22, tx, ty;
      var sign2 = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
      switch (orientation) {
        case "top":
          x1 = x22 = data.coordinate;
          y22 = y2 + +!mirror * height;
          y1 = y22 - sign2 * finalTickSize;
          ty = y1 - sign2 * tickMargin;
          tx = tickCoord;
          break;
        case "left":
          y1 = y22 = data.coordinate;
          x22 = x2 + +!mirror * width;
          x1 = x22 - sign2 * finalTickSize;
          tx = x1 - sign2 * tickMargin;
          ty = tickCoord;
          break;
        case "right":
          y1 = y22 = data.coordinate;
          x22 = x2 + +mirror * width;
          x1 = x22 + sign2 * finalTickSize;
          tx = x1 + sign2 * tickMargin;
          ty = tickCoord;
          break;
        default:
          x1 = x22 = data.coordinate;
          y22 = y2 + +mirror * height;
          y1 = y22 + sign2 * finalTickSize;
          ty = y1 + sign2 * tickMargin;
          tx = tickCoord;
          break;
      }
      return {
        line: {
          x1,
          y1,
          x2: x22,
          y2: y22
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props, orientation = _this$props3.orientation, mirror = _this$props3.mirror;
      var textAnchor;
      switch (orientation) {
        case "left":
          textAnchor = mirror ? "start" : "end";
          break;
        case "right":
          textAnchor = mirror ? "end" : "start";
          break;
        default:
          textAnchor = "middle";
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props, orientation = _this$props4.orientation, mirror = _this$props4.mirror;
      var verticalAnchor = "end";
      switch (orientation) {
        case "left":
        case "right":
          verticalAnchor = "middle";
          break;
        case "top":
          verticalAnchor = mirror ? "start" : "end";
          break;
        default:
          verticalAnchor = mirror ? "end" : "start";
          break;
      }
      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props, x2 = _this$props5.x, y2 = _this$props5.y, width = _this$props5.width, height = _this$props5.height, orientation = _this$props5.orientation, mirror = _this$props5.mirror, axisLine = _this$props5.axisLine;
      var props = _objectSpread$3(_objectSpread$3(_objectSpread$3({}, filterProps(this.props, false)), filterProps(axisLine, false)), {}, {
        fill: "none"
      });
      if (orientation === "top" || orientation === "bottom") {
        var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
        props = _objectSpread$3(_objectSpread$3({}, props), {}, {
          x1: x2,
          y1: y2 + needHeight * height,
          x2: x2 + width,
          y2: y2 + needHeight * height
        });
      } else {
        var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
        props = _objectSpread$3(_objectSpread$3({}, props), {}, {
          x1: x2 + needWidth * width,
          y1: y2,
          x2: x2 + needWidth * width,
          y2: y2 + height
        });
      }
      return /* @__PURE__ */ React.createElement("line", _extends$4({}, props, {
        className: clsx("recharts-cartesian-axis-line", get(axisLine, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function renderTicks(ticks2, fontSize, letterSpacing) {
        var _this2 = this;
        var _this$props6 = this.props, tickLine = _this$props6.tickLine, stroke = _this$props6.stroke, tick = _this$props6.tick, tickFormatter = _this$props6.tickFormatter, unit2 = _this$props6.unit;
        var finalTicks = getTicks(_objectSpread$3(_objectSpread$3({}, this.props), {}, {
          ticks: ticks2
        }), fontSize, letterSpacing);
        var textAnchor = this.getTickTextAnchor();
        var verticalAnchor = this.getTickVerticalAnchor();
        var axisProps = filterProps(this.props, false);
        var customTickProps = filterProps(tick, false);
        var tickLineProps = _objectSpread$3(_objectSpread$3({}, axisProps), {}, {
          fill: "none"
        }, filterProps(tickLine, false));
        var items = finalTicks.map(function(entry, i) {
          var _this2$getTickLineCoo = _this2.getTickLineCoord(entry), lineCoord = _this2$getTickLineCoo.line, tickCoord = _this2$getTickLineCoo.tick;
          var tickProps = _objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3({
            textAnchor,
            verticalAnchor
          }, axisProps), {}, {
            stroke: "none",
            fill: stroke
          }, customTickProps), tickCoord), {}, {
            index: i,
            payload: entry,
            visibleTicksCount: finalTicks.length,
            tickFormatter
          });
          return /* @__PURE__ */ React.createElement(Layer, _extends$4({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
          }, adaptEventsOfChild(_this2.props, entry, i)), tickLine && /* @__PURE__ */ React.createElement("line", _extends$4({}, tickLineProps, lineCoord, {
            className: clsx("recharts-cartesian-axis-tick-line", get(tickLine, "className"))
          })), tick && CartesianAxis2.renderTickItem(tick, tickProps, "".concat(isFunction(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit2 || "")));
        });
        return /* @__PURE__ */ React.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, items);
      }
    )
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props7 = this.props, axisLine = _this$props7.axisLine, width = _this$props7.width, height = _this$props7.height, ticksGenerator = _this$props7.ticksGenerator, className = _this$props7.className, hide = _this$props7.hide;
      if (hide) {
        return null;
      }
      var _this$props8 = this.props, ticks2 = _this$props8.ticks, noTicksProps = _objectWithoutProperties$2(_this$props8, _excluded3);
      var finalTicks = ticks2;
      if (isFunction(ticksGenerator)) {
        finalTicks = ticks2 && ticks2.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }
      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: clsx("recharts-cartesian-axis", className),
        ref: function ref(_ref2) {
          _this3.layerReference = _ref2;
        }
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), Label.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        tickItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ React.createElement(Text, _extends$4({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
}(reactExports.Component);
_defineProperty$6(CartesianAxis, "displayName", "CartesianAxis");
_defineProperty$6(CartesianAxis, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var _excluded$1 = ["x1", "y1", "x2", "y2", "key"], _excluded2$1 = ["offset"];
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$5(obj, key, value) {
  key = _toPropertyKey$5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$5(t) {
  var i = _toPrimitive$5(t, "string");
  return "symbol" == _typeof$5(i) ? i : i + "";
}
function _toPrimitive$5(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var Background = function Background2(props) {
  var fill = props.fill;
  if (!fill || fill === "none") {
    return null;
  }
  var fillOpacity = props.fillOpacity, x2 = props.x, y2 = props.y, width = props.width, height = props.height, ry = props.ry;
  return /* @__PURE__ */ React.createElement("rect", {
    x: x2,
    y: y2,
    ry,
    width,
    height,
    stroke: "none",
    fill,
    fillOpacity,
    className: "recharts-cartesian-grid-bg"
  });
};
function renderLineItem(option, props) {
  var lineItem;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    lineItem = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    lineItem = option(props);
  } else {
    var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, others = _objectWithoutProperties$1(props, _excluded$1);
    var _filterProps = filterProps(others, false);
    _filterProps.offset;
    var restOfFilteredProps = _objectWithoutProperties$1(_filterProps, _excluded2$1);
    lineItem = /* @__PURE__ */ React.createElement("line", _extends$3({}, restOfFilteredProps, {
      x1,
      y1,
      x2,
      y2,
      fill: "none",
      key
    }));
  }
  return lineItem;
}
function HorizontalGridLines(props) {
  var x2 = props.x, width = props.width, _props$horizontal = props.horizontal, horizontal = _props$horizontal === void 0 ? true : _props$horizontal, horizontalPoints = props.horizontalPoints;
  if (!horizontal || !horizontalPoints || !horizontalPoints.length) {
    return null;
  }
  var items = horizontalPoints.map(function(entry, i) {
    var lineItemProps = _objectSpread$2(_objectSpread$2({}, props), {}, {
      x1: x2,
      y1: entry,
      x2: x2 + width,
      y2: entry,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(horizontal, lineItemProps);
  });
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, items);
}
function VerticalGridLines(props) {
  var y2 = props.y, height = props.height, _props$vertical = props.vertical, vertical = _props$vertical === void 0 ? true : _props$vertical, verticalPoints = props.verticalPoints;
  if (!vertical || !verticalPoints || !verticalPoints.length) {
    return null;
  }
  var items = verticalPoints.map(function(entry, i) {
    var lineItemProps = _objectSpread$2(_objectSpread$2({}, props), {}, {
      x1: entry,
      y1: y2,
      x2: entry,
      y2: y2 + height,
      key: "line-".concat(i),
      index: i
    });
    return renderLineItem(vertical, lineItemProps);
  });
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, items);
}
function HorizontalStripes(props) {
  var horizontalFill = props.horizontalFill, fillOpacity = props.fillOpacity, x2 = props.x, y2 = props.y, width = props.width, height = props.height, horizontalPoints = props.horizontalPoints, _props$horizontal2 = props.horizontal, horizontal = _props$horizontal2 === void 0 ? true : _props$horizontal2;
  if (!horizontal || !horizontalFill || !horizontalFill.length) {
    return null;
  }
  var roundedSortedHorizontalPoints = horizontalPoints.map(function(e) {
    return Math.round(e + y2 - y2);
  }).sort(function(a, b) {
    return a - b;
  });
  if (y2 !== roundedSortedHorizontalPoints[0]) {
    roundedSortedHorizontalPoints.unshift(0);
  }
  var items = roundedSortedHorizontalPoints.map(function(entry, i) {
    var lastStripe = !roundedSortedHorizontalPoints[i + 1];
    var lineHeight = lastStripe ? y2 + height - entry : roundedSortedHorizontalPoints[i + 1] - entry;
    if (lineHeight <= 0) {
      return null;
    }
    var colorIndex = i % horizontalFill.length;
    return /* @__PURE__ */ React.createElement("rect", {
      key: "react-".concat(i),
      y: entry,
      x: x2,
      height: lineHeight,
      width,
      stroke: "none",
      fill: horizontalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, items);
}
function VerticalStripes(props) {
  var _props$vertical2 = props.vertical, vertical = _props$vertical2 === void 0 ? true : _props$vertical2, verticalFill = props.verticalFill, fillOpacity = props.fillOpacity, x2 = props.x, y2 = props.y, width = props.width, height = props.height, verticalPoints = props.verticalPoints;
  if (!vertical || !verticalFill || !verticalFill.length) {
    return null;
  }
  var roundedSortedVerticalPoints = verticalPoints.map(function(e) {
    return Math.round(e + x2 - x2);
  }).sort(function(a, b) {
    return a - b;
  });
  if (x2 !== roundedSortedVerticalPoints[0]) {
    roundedSortedVerticalPoints.unshift(0);
  }
  var items = roundedSortedVerticalPoints.map(function(entry, i) {
    var lastStripe = !roundedSortedVerticalPoints[i + 1];
    var lineWidth = lastStripe ? x2 + width - entry : roundedSortedVerticalPoints[i + 1] - entry;
    if (lineWidth <= 0) {
      return null;
    }
    var colorIndex = i % verticalFill.length;
    return /* @__PURE__ */ React.createElement("rect", {
      key: "react-".concat(i),
      x: entry,
      y: y2,
      width: lineWidth,
      height,
      stroke: "none",
      fill: verticalFill[colorIndex],
      fillOpacity,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, items);
}
var defaultVerticalCoordinatesGenerator = function defaultVerticalCoordinatesGenerator2(_ref, syncWithTicks) {
  var xAxis = _ref.xAxis, width = _ref.width, height = _ref.height, offset = _ref.offset;
  return getCoordinatesOfGrid(getTicks(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, CartesianAxis.defaultProps), xAxis), {}, {
    ticks: getTicksOfAxis(xAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = function defaultHorizontalCoordinatesGenerator2(_ref2, syncWithTicks) {
  var yAxis = _ref2.yAxis, width = _ref2.width, height = _ref2.height, offset = _ref2.offset;
  return getCoordinatesOfGrid(getTicks(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, CartesianAxis.defaultProps), yAxis), {}, {
    ticks: getTicksOfAxis(yAxis, true),
    viewBox: {
      x: 0,
      y: 0,
      width,
      height
    }
  })), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultProps = {
  horizontal: true,
  vertical: true,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function CartesianGrid(props) {
  var _props$stroke, _props$fill, _props$horizontal3, _props$horizontalFill, _props$vertical3, _props$verticalFill;
  var chartWidth = useChartWidth();
  var chartHeight = useChartHeight();
  var offset = useOffset();
  var propsIncludingDefaults = _objectSpread$2(_objectSpread$2({}, props), {}, {
    stroke: (_props$stroke = props.stroke) !== null && _props$stroke !== void 0 ? _props$stroke : defaultProps.stroke,
    fill: (_props$fill = props.fill) !== null && _props$fill !== void 0 ? _props$fill : defaultProps.fill,
    horizontal: (_props$horizontal3 = props.horizontal) !== null && _props$horizontal3 !== void 0 ? _props$horizontal3 : defaultProps.horizontal,
    horizontalFill: (_props$horizontalFill = props.horizontalFill) !== null && _props$horizontalFill !== void 0 ? _props$horizontalFill : defaultProps.horizontalFill,
    vertical: (_props$vertical3 = props.vertical) !== null && _props$vertical3 !== void 0 ? _props$vertical3 : defaultProps.vertical,
    verticalFill: (_props$verticalFill = props.verticalFill) !== null && _props$verticalFill !== void 0 ? _props$verticalFill : defaultProps.verticalFill,
    x: isNumber(props.x) ? props.x : offset.left,
    y: isNumber(props.y) ? props.y : offset.top,
    width: isNumber(props.width) ? props.width : offset.width,
    height: isNumber(props.height) ? props.height : offset.height
  });
  var x2 = propsIncludingDefaults.x, y2 = propsIncludingDefaults.y, width = propsIncludingDefaults.width, height = propsIncludingDefaults.height, syncWithTicks = propsIncludingDefaults.syncWithTicks, horizontalValues = propsIncludingDefaults.horizontalValues, verticalValues = propsIncludingDefaults.verticalValues;
  var xAxis = useArbitraryXAxis();
  var yAxis = useYAxisWithFiniteDomainOrRandom();
  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x2) || x2 !== +x2 || !isNumber(y2) || y2 !== +y2) {
    return null;
  }
  var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
  var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
  var horizontalPoints = propsIncludingDefaults.horizontalPoints, verticalPoints = propsIncludingDefaults.verticalPoints;
  if ((!horizontalPoints || !horizontalPoints.length) && isFunction(horizontalCoordinatesGenerator)) {
    var isHorizontalValues = horizontalValues && horizontalValues.length;
    var generatorResult = horizontalCoordinatesGenerator({
      yAxis: yAxis ? _objectSpread$2(_objectSpread$2({}, yAxis), {}, {
        ticks: isHorizontalValues ? horizontalValues : yAxis.ticks
      }) : void 0,
      width: chartWidth,
      height: chartHeight,
      offset
    }, isHorizontalValues ? true : syncWithTicks);
    warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof$5(generatorResult), "]"));
    if (Array.isArray(generatorResult)) {
      horizontalPoints = generatorResult;
    }
  }
  if ((!verticalPoints || !verticalPoints.length) && isFunction(verticalCoordinatesGenerator)) {
    var isVerticalValues = verticalValues && verticalValues.length;
    var _generatorResult = verticalCoordinatesGenerator({
      xAxis: xAxis ? _objectSpread$2(_objectSpread$2({}, xAxis), {}, {
        ticks: isVerticalValues ? verticalValues : xAxis.ticks
      }) : void 0,
      width: chartWidth,
      height: chartHeight,
      offset
    }, isVerticalValues ? true : syncWithTicks);
    warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_typeof$5(_generatorResult), "]"));
    if (Array.isArray(_generatorResult)) {
      verticalPoints = _generatorResult;
    }
  }
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ React.createElement(Background, {
    fill: propsIncludingDefaults.fill,
    fillOpacity: propsIncludingDefaults.fillOpacity,
    x: propsIncludingDefaults.x,
    y: propsIncludingDefaults.y,
    width: propsIncludingDefaults.width,
    height: propsIncludingDefaults.height,
    ry: propsIncludingDefaults.ry
  }), /* @__PURE__ */ React.createElement(HorizontalGridLines, _extends$3({}, propsIncludingDefaults, {
    offset,
    horizontalPoints,
    xAxis,
    yAxis
  })), /* @__PURE__ */ React.createElement(VerticalGridLines, _extends$3({}, propsIncludingDefaults, {
    offset,
    verticalPoints,
    xAxis,
    yAxis
  })), /* @__PURE__ */ React.createElement(HorizontalStripes, _extends$3({}, propsIncludingDefaults, {
    horizontalPoints
  })), /* @__PURE__ */ React.createElement(VerticalStripes, _extends$3({}, propsIncludingDefaults, {
    verticalPoints
  })));
}
CartesianGrid.displayName = "CartesianGrid";
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$4(descriptor.key), descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$2(t, o, e) {
  return o = _getPrototypeOf$2(o), _possibleConstructorReturn$2(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf$2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$4(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : i + "";
}
function _toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function XAxisImpl(_ref) {
  var xAxisId = _ref.xAxisId;
  var width = useChartWidth();
  var height = useChartHeight();
  var axisOptions = useXAxisOrThrow(xAxisId);
  if (axisOptions == null) {
    return null;
  }
  return (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ React.createElement(CartesianAxis, _extends$2({}, axisOptions, {
      className: clsx("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width,
        height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return getTicksOfAxis(axis, true);
      }
    }))
  );
}
var XAxis = /* @__PURE__ */ function(_React$Component) {
  function XAxis2() {
    _classCallCheck$3(this, XAxis2);
    return _callSuper$2(this, XAxis2, arguments);
  }
  _inherits$2(XAxis2, _React$Component);
  return _createClass$3(XAxis2, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ React.createElement(XAxisImpl, this.props);
    }
  }]);
}(React.Component);
_defineProperty$4(XAxis, "displayName", "XAxis");
_defineProperty$4(XAxis, "defaultProps", {
  allowDecimals: true,
  hide: false,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false,
  allowDuplicatedCategory: true
});
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$3(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper$1(t, o, e) {
  return o = _getPrototypeOf$1(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf$1(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var YAxisImpl = function YAxisImpl2(_ref) {
  var yAxisId = _ref.yAxisId;
  var width = useChartWidth();
  var height = useChartHeight();
  var axisOptions = useYAxisOrThrow(yAxisId);
  if (axisOptions == null) {
    return null;
  }
  return (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ React.createElement(CartesianAxis, _extends$1({}, axisOptions, {
      className: clsx("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width,
        height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return getTicksOfAxis(axis, true);
      }
    }))
  );
};
var YAxis = /* @__PURE__ */ function(_React$Component) {
  function YAxis2() {
    _classCallCheck$2(this, YAxis2);
    return _callSuper$1(this, YAxis2, arguments);
  }
  _inherits$1(YAxis2, _React$Component);
  return _createClass$2(YAxis2, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */ React.createElement(YAxisImpl, this.props);
    }
  }]);
}(React.Component);
_defineProperty$3(YAxis, "displayName", "YAxis");
_defineProperty$3(YAxis, "defaultProps", {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false
});
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var detectReferenceElementsDomain = function detectReferenceElementsDomain2(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine);
  var dots = findAllByType(children, ReferenceDot);
  var elements = [].concat(_toConsumableArray$1(lines), _toConsumableArray$1(dots));
  var areas = findAllByType(children, ReferenceArea);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;
  if (elements.length) {
    finalDomain = elements.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }
  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }
  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function(result, tick) {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }
      return result;
    }, finalDomain);
  }
  return finalDomain;
};
var eventemitter3 = { exports: {} };
var hasRequiredEventemitter3;
function requireEventemitter3() {
  if (hasRequiredEventemitter3) return eventemitter3.exports;
  hasRequiredEventemitter3 = 1;
  (function(module) {
    var has = Object.prototype.hasOwnProperty, prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    {
      module.exports = EventEmitter2;
    }
  })(eventemitter3);
  return eventemitter3.exports;
}
var eventemitter3Exports = requireEventemitter3();
const EventEmitter = /* @__PURE__ */ getDefaultExportFromCjs(eventemitter3Exports);
var eventCenter = new EventEmitter();
var SYNC_EVENT = "recharts.syncMouseEvents";
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var AccessibilityManager = /* @__PURE__ */ function() {
  function AccessibilityManager2() {
    _classCallCheck$1(this, AccessibilityManager2);
    _defineProperty$2(this, "activeIndex", 0);
    _defineProperty$2(this, "coordinateList", []);
    _defineProperty$2(this, "layout", "horizontal");
  }
  return _createClass$1(AccessibilityManager2, [{
    key: "setDetails",
    value: function setDetails(_ref) {
      var _ref2;
      var _ref$coordinateList = _ref.coordinateList, coordinateList = _ref$coordinateList === void 0 ? null : _ref$coordinateList, _ref$container = _ref.container, container = _ref$container === void 0 ? null : _ref$container, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? null : _ref$layout, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? null : _ref$offset, _ref$mouseHandlerCall = _ref.mouseHandlerCallback, mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
      this.coordinateList = (_ref2 = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList) !== null && _ref2 !== void 0 ? _ref2 : [];
      this.container = container !== null && container !== void 0 ? container : this.container;
      this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
      this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
      this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;
      this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function keyboardEvent(e) {
      if (this.coordinateList.length === 0) {
        return;
      }
      switch (e.key) {
        case "ArrowRight": {
          if (this.layout !== "horizontal") {
            return;
          }
          this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
          this.spoofMouse();
          break;
        }
        case "ArrowLeft": {
          if (this.layout !== "horizontal") {
            return;
          }
          this.activeIndex = Math.max(this.activeIndex - 1, 0);
          this.spoofMouse();
          break;
        }
      }
    }
  }, {
    key: "setIndex",
    value: function setIndex(newIndex) {
      this.activeIndex = newIndex;
    }
  }, {
    key: "spoofMouse",
    value: function spoofMouse() {
      var _window, _window2;
      if (this.layout !== "horizontal") {
        return;
      }
      if (this.coordinateList.length === 0) {
        return;
      }
      var _this$container$getBo = this.container.getBoundingClientRect(), x2 = _this$container$getBo.x, y2 = _this$container$getBo.y, height = _this$container$getBo.height;
      var coordinate = this.coordinateList[this.activeIndex].coordinate;
      var scrollOffsetX = ((_window = window) === null || _window === void 0 ? void 0 : _window.scrollX) || 0;
      var scrollOffsetY = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.scrollY) || 0;
      var pageX = x2 + coordinate + scrollOffsetX;
      var pageY = y2 + this.offset.top + height / 2 + scrollOffsetY;
      this.mouseHandlerCallback({
        pageX,
        pageY
      });
    }
  }]);
}();
function isDomainSpecifiedByUser(domain, allowDataOverflow, axisType) {
  if (axisType === "number" && allowDataOverflow === true && Array.isArray(domain)) {
    var domainStart = domain === null || domain === void 0 ? void 0 : domain[0];
    var domainEnd = domain === null || domain === void 0 ? void 0 : domain[1];
    if (!!domainStart && !!domainEnd && isNumber(domainStart) && isNumber(domainEnd)) {
      return true;
    }
  }
  return false;
}
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
  var halfSize = tooltipAxisBandSize / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
    y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
    width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
    height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
  };
}
function getRadialCursorPoints(activeCoordinate) {
  var cx = activeCoordinate.cx, cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
  var startPoint = polarToCartesian(cx, cy, radius, startAngle);
  var endPoint = polarToCartesian(cx, cy, radius, endAngle);
  return {
    points: [startPoint, endPoint],
    cx,
    cy,
    radius,
    startAngle,
    endAngle
  };
}
function getCursorPoints(layout, activeCoordinate, offset) {
  var x1, y1, x2, y2;
  if (layout === "horizontal") {
    x1 = activeCoordinate.x;
    x2 = x1;
    y1 = offset.top;
    y2 = offset.top + offset.height;
  } else if (layout === "vertical") {
    y1 = activeCoordinate.y;
    y2 = y1;
    x1 = offset.left;
    x2 = offset.left + offset.width;
  } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
    if (layout === "centric") {
      var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
      var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      x1 = innerPoint.x;
      y1 = innerPoint.y;
      x2 = outerPoint.x;
      y2 = outerPoint.y;
    } else {
      return getRadialCursorPoints(activeCoordinate);
    }
  }
  return [{
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  }];
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Cursor(props) {
  var _element$props$cursor, _defaultProps;
  var element = props.element, tooltipEventType = props.tooltipEventType, isActive = props.isActive, activeCoordinate = props.activeCoordinate, activePayload = props.activePayload, offset = props.offset, activeTooltipIndex = props.activeTooltipIndex, tooltipAxisBandSize = props.tooltipAxisBandSize, layout = props.layout, chartName = props.chartName;
  var elementPropsCursor = (_element$props$cursor = element.props.cursor) !== null && _element$props$cursor !== void 0 ? _element$props$cursor : (_defaultProps = element.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps.cursor;
  if (!element || !elementPropsCursor || !isActive || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
    return null;
  }
  var restProps;
  var cursorComp = Curve;
  if (chartName === "ScatterChart") {
    restProps = activeCoordinate;
    cursorComp = Cross;
  } else if (chartName === "BarChart") {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
  } else if (layout === "radial") {
    var _getRadialCursorPoint = getRadialCursorPoints(activeCoordinate), cx = _getRadialCursorPoint.cx, cy = _getRadialCursorPoint.cy, radius = _getRadialCursorPoint.radius, startAngle = _getRadialCursorPoint.startAngle, endAngle = _getRadialCursorPoint.endAngle;
    restProps = {
      cx,
      cy,
      startAngle,
      endAngle,
      innerRadius: radius,
      outerRadius: radius
    };
    cursorComp = Sector;
  } else {
    restProps = {
      points: getCursorPoints(layout, activeCoordinate, offset)
    };
    cursorComp = Curve;
  }
  var cursorProps = _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({
    stroke: "#ccc",
    pointerEvents: "none"
  }, offset), restProps), filterProps(elementPropsCursor, false)), {}, {
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: clsx("recharts-tooltip-cursor", elementPropsCursor.className)
  });
  return /* @__PURE__ */ reactExports.isValidElement(elementPropsCursor) ? /* @__PURE__ */ reactExports.cloneElement(elementPropsCursor, cursorProps) : /* @__PURE__ */ reactExports.createElement(cursorComp, cursorProps);
}
var _excluded = ["item"], _excluded2 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ORIENT_MAP = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
};
var FULL_WIDTH_AND_HEIGHT = {
  width: "100%",
  height: "100%"
};
var originCoordinate = {
  x: 0,
  y: 0
};
function renderAsIs(element) {
  return element;
}
var calculateTooltipPos = function calculateTooltipPos2(rangeObj, layout) {
  if (layout === "horizontal") {
    return rangeObj.x;
  }
  if (layout === "vertical") {
    return rangeObj.y;
  }
  if (layout === "centric") {
    return rangeObj.angle;
  }
  return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate2(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function(tick) {
    return tick && tick.index === activeIndex;
  });
  if (entry) {
    if (layout === "horizontal") {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }
    if (layout === "vertical") {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }
    if (layout === "centric") {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }
    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle,
      radius
    });
  }
  return originCoordinate;
};
var getDisplayedData = function getDisplayedData2(data, _ref) {
  var graphicalItems = _ref.graphicalItems, dataStartIndex = _ref.dataStartIndex, dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems !== null && graphicalItems !== void 0 ? graphicalItems : []).reduce(function(result, child) {
    var itemData = child.props.data;
    if (itemData && itemData.length) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(itemData));
    }
    return result;
  }, []);
  if (itemsData.length > 0) {
    return itemsData;
  }
  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }
  return [];
};
function getDefaultDomainByAxisType(axisType) {
  return axisType === "number" ? [0, "auto"] : void 0;
}
var getTooltipContent = function getTooltipContent2(state, chartData2, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData2, state);
  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  }
  return graphicalItems.reduce(function(result, child) {
    var _child$props$data;
    var data = (_child$props$data = child.props.data) !== null && _child$props$data !== void 0 ? _child$props$data : chartData2;
    if (data && state.dataStartIndex + state.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    state.dataEndIndex - state.dataStartIndex >= activeIndex) {
      data = data.slice(state.dataStartIndex, state.dataEndIndex + 1);
    }
    var payload;
    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      var entries = data === void 0 ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data && data[activeIndex] || displayedData[activeIndex];
    }
    if (!payload) {
      return result;
    }
    return [].concat(_toConsumableArray(result), [getTooltipItem(child, payload)]);
  }, []);
};
var getTooltipData = function getTooltipData2(state, chartData2, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks2 = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks2, tooltipTicks, axis);
  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData2, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks2, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel,
      activePayload,
      activeCoordinate
    };
  }
  return null;
};
var getAxisMapByAxes = function getAxisMapByAxes2(props, _ref2) {
  var axes = _ref2.axes, graphicalItems = _ref2.graphicalItems, axisType = _ref2.axisType, axisIdKey = _ref2.axisIdKey, stackGroups = _ref2.stackGroups, dataStartIndex = _ref2.dataStartIndex, dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType);
  return axes.reduce(function(result, child) {
    var _childProps$domain2;
    var childProps = child.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, child.type.defaultProps), child.props) : child.props;
    var type = childProps.type, dataKey = childProps.dataKey, allowDataOverflow = childProps.allowDataOverflow, allowDuplicatedCategory = childProps.allowDuplicatedCategory, scale = childProps.scale, ticks2 = childProps.ticks, includeHidden = childProps.includeHidden;
    var axisId = childProps[axisIdKey];
    if (result[axisId]) {
      return result;
    }
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function(item) {
        var _defaultProps;
        var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps = item.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps[axisIdKey];
        return itemAxisId === axisId;
      }),
      dataStartIndex,
      dataEndIndex
    });
    var len = displayedData.length;
    var domain, duplicateDomain, categoricalDomain;
    if (isDomainSpecifiedByUser(childProps.domain, allowDataOverflow, type)) {
      domain = parseSpecifiedDomain(childProps.domain, null, allowDataOverflow);
      if (isCategorical && (type === "number" || scale !== "auto")) {
        categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, "category");
      }
    }
    var defaultDomain = getDefaultDomainByAxisType(type);
    if (!domain || domain.length === 0) {
      var _childProps$domain;
      var childDomain = (_childProps$domain = childProps.domain) !== null && _childProps$domain !== void 0 ? _childProps$domain : defaultDomain;
      if (dataKey) {
        domain = getDomainOfDataByKey(displayedData, dataKey, type);
        if (type === "category" && isCategorical) {
          var duplicate = hasDuplicate(domain);
          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            domain = range2(0, len);
          } else if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          }
        } else if (type === "category") {
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === "" || isNil(entry) ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          } else {
            domain = domain.filter(function(entry) {
              return entry !== "" && !isNil(entry);
            });
          }
        } else if (type === "number") {
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function(item) {
            var _defaultProps2, _defaultProps3;
            var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps2 = item.type.defaultProps) === null || _defaultProps2 === void 0 ? void 0 : _defaultProps2[axisIdKey];
            var itemHide = "hide" in item.props ? item.props.hide : (_defaultProps3 = item.type.defaultProps) === null || _defaultProps3 === void 0 ? void 0 : _defaultProps3.hide;
            return itemAxisId === axisId && (includeHidden || !itemHide);
          }), dataKey, axisType, layout);
          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }
        if (isCategorical && (type === "number" || scale !== "auto")) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, "category");
        }
      } else if (isCategorical) {
        domain = range2(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === "number") {
        domain = stackOffset === "expand" ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : item.type.defaultProps[axisIdKey];
          var itemHide = "hide" in item.props ? item.props.hide : item.type.defaultProps.hide;
          return itemAxisId === axisId && (includeHidden || !itemHide);
        }), type, layout, true);
      }
      if (type === "number") {
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks2);
        if (childDomain) {
          domain = parseSpecifiedDomain(childDomain, domain, allowDataOverflow);
        }
      } else if (type === "category" && childDomain) {
        var axisDomain = childDomain;
        var isDomainValid = domain.every(function(entry) {
          return axisDomain.indexOf(entry) >= 0;
        });
        if (isDomainValid) {
          domain = axisDomain;
        }
      }
    }
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({}, childProps), {}, {
      axisType,
      domain,
      categoricalDomain,
      duplicateDomain,
      originalDomain: (_childProps$domain2 = childProps.domain) !== null && _childProps$domain2 !== void 0 ? _childProps$domain2 : defaultDomain,
      isCategorical,
      layout
    })));
  }, {});
};
var getAxisMapByItems = function getAxisMapByItems2(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems, Axis = _ref3.Axis, axisType = _ref3.axisType, axisIdKey = _ref3.axisIdKey, stackGroups = _ref3.stackGroups, dataStartIndex = _ref3.dataStartIndex, dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout, children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems,
    dataStartIndex,
    dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1;
  return graphicalItems.reduce(function(result, child) {
    var childProps = child.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, child.type.defaultProps), child.props) : child.props;
    var axisId = childProps[axisIdKey];
    var originalDomain = getDefaultDomainByAxisType("number");
    if (!result[axisId]) {
      index++;
      var domain;
      if (isCategorical) {
        domain = range2(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(originalDomain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          var _defaultProps4, _defaultProps5;
          var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps4 = item.type.defaultProps) === null || _defaultProps4 === void 0 ? void 0 : _defaultProps4[axisIdKey];
          var itemHide = "hide" in item.props ? item.props.hide : (_defaultProps5 = item.type.defaultProps) === null || _defaultProps5 === void 0 ? void 0 : _defaultProps5.hide;
          return itemAxisId === axisId && !itemHide;
        }), "number", layout), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({
        axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: get(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain,
        originalDomain,
        isCategorical,
        layout
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return result;
  }, {});
};
var getAxisMap = function getAxisMap2(props, _ref4) {
  var _ref4$axisType = _ref4.axisType, axisType = _ref4$axisType === void 0 ? "xAxis" : _ref4$axisType, AxisComp = _ref4.AxisComp, graphicalItems = _ref4.graphicalItems, stackGroups = _ref4.stackGroups, dataStartIndex = _ref4.dataStartIndex, dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id");
  var axes = findAllByType(children, AxisComp);
  var axisMap = {};
  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  }
  return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator2(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks,
    orderedTooltipTicks: sortBy(tooltipTicks, function(o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks)
  };
};
var createDefaultState = function createDefaultState2(props) {
  var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush);
  var startIndex = 0;
  var endIndex = 0;
  if (props.data && props.data.length !== 0) {
    endIndex = props.data.length - 1;
  }
  if (brushItem && brushItem.props) {
    if (brushItem.props.startIndex >= 0) {
      startIndex = brushItem.props.startIndex;
    }
    if (brushItem.props.endIndex >= 0) {
      endIndex = brushItem.props.endIndex;
    }
  }
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: Boolean(defaultShowTooltip)
  };
};
var hasGraphicalBarItem = function hasGraphicalBarItem2(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }
  return graphicalItems.some(function(item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf("Bar") >= 0;
  });
};
var getAxisNameByLayout = function getAxisNameByLayout2(layout) {
  if (layout === "horizontal") {
    return {
      numericAxisName: "yAxis",
      cateAxisName: "xAxis"
    };
  }
  if (layout === "vertical") {
    return {
      numericAxisName: "xAxis",
      cateAxisName: "yAxis"
    };
  }
  if (layout === "centric") {
    return {
      numericAxisName: "radiusAxis",
      cateAxisName: "angleAxis"
    };
  }
  return {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
};
var calculateOffset = function calculateOffset2(_ref5, prevLegendBBox) {
  var props = _ref5.props, graphicalItems = _ref5.graphicalItems, _ref5$xAxisMap = _ref5.xAxisMap, xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap, _ref5$yAxisMap = _ref5.yAxisMap, yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width, height = props.height, children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush);
  var legendItem = findChildByType(children, Legend);
  var offsetH = Object.keys(yAxisMap).reduce(function(result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, result[orientation] + entry.width));
    }
    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function(result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, get(result, "".concat(orientation)) + entry.height));
    }
    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });
  var offset = _objectSpread(_objectSpread({}, offsetV), offsetH);
  var brushBottom = offset.bottom;
  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }
  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }
  var offsetWidth = width - offset.left - offset.right;
  var offsetHeight = height - offset.top - offset.bottom;
  return _objectSpread(_objectSpread({
    brushBottom
  }, offset), {}, {
    // never return negative values for height and width
    width: Math.max(offsetWidth, 0),
    height: Math.max(offsetHeight, 0)
  });
};
var getCartesianAxisSize = function getCartesianAxisSize2(axisObj, axisName) {
  if (axisName === "xAxis") {
    return axisObj[axisName].width;
  }
  if (axisName === "yAxis") {
    return axisObj[axisName].height;
  }
  return void 0;
};
var generateCategoricalChart = function generateCategoricalChart2(_ref6) {
  var chartName = _ref6.chartName, GraphicalChild = _ref6.GraphicalChild, _ref6$defaultTooltipE = _ref6.defaultTooltipEventType, defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? "axis" : _ref6$defaultTooltipE, _ref6$validateTooltip = _ref6.validateTooltipEventTypes, validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ["axis"] : _ref6$validateTooltip, axisComponents = _ref6.axisComponents, legendContent = _ref6.legendContent, formatAxisMap3 = _ref6.formatAxisMap, defaultProps2 = _ref6.defaultProps;
  var getFormatItems = function getFormatItems2(props, currentState) {
    var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
    var _getAxisNameByLayout = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout.numericAxisName, cateAxisName = _getAxisNameByLayout.cateAxisName;
    var hasBar = hasGraphicalBarItem(graphicalItems);
    var formattedItems = [];
    graphicalItems.forEach(function(item, index) {
      var displayedData = getDisplayedData(props.data, {
        graphicalItems: [item],
        dataStartIndex,
        dataEndIndex
      });
      var itemProps = item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
      var dataKey = itemProps.dataKey, childMaxBarSize = itemProps.maxBarSize;
      var numericAxisId = itemProps["".concat(numericAxisName, "Id")];
      var cateAxisId = itemProps["".concat(cateAxisName, "Id")];
      var axisObjInitialValue = {};
      var axisObj = axisComponents.reduce(function(result, entry) {
        var axisMap = currentState["".concat(entry.axisType, "Map")];
        var id = itemProps["".concat(entry.axisType, "Id")];
        !(axisMap && axisMap[id] || entry.axisType === "zAxis") ? invariant(false) : void 0;
        var axis = axisMap[id];
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty(_defineProperty({}, entry.axisType, axis), "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)));
      }, axisObjInitialValue);
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf("Bar") >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];
      var sizeList = hasBar && getBarSizeList({
        barSize,
        stackGroups,
        totalSize: getCartesianAxisSize(axisObj, cateAxisName)
      });
      if (itemIsBar) {
        var _ref7, _getBandSizeOfAxis;
        var maxBarSize = isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        var barBandSize = (_ref7 = (_getBandSizeOfAxis = getBandSizeOfAxis(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
        barPosition = getBarPosition({
          barGap,
          barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize
        });
        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function(pos) {
            return _objectSpread(_objectSpread({}, pos), {}, {
              position: _objectSpread(_objectSpread({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }
      var composedFn = item && item.type && item.type.getComposedData;
      if (composedFn) {
        formattedItems.push({
          props: _objectSpread(_objectSpread({}, composedFn(_objectSpread(_objectSpread({}, axisObj), {}, {
            displayedData,
            props,
            dataKey,
            item,
            bandSize,
            barPosition,
            offset,
            stackedData,
            layout,
            dataStartIndex,
            dataEndIndex
          }))), {}, _defineProperty(_defineProperty(_defineProperty({
            key: item.key || "item-".concat(index)
          }, numericAxisName, axisObj[numericAxisName]), cateAxisName, axisObj[cateAxisName]), "animationId", updateId)),
          childIndex: parseChildIndex(item, props.children),
          item
        });
      }
    });
    return formattedItems;
  };
  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups2(_ref8, prevState) {
    var props = _ref8.props, dataStartIndex = _ref8.dataStartIndex, dataEndIndex = _ref8.dataEndIndex, updateId = _ref8.updateId;
    if (!validateWidthHeight({
      props
    })) {
      return null;
    }
    var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data = props.data, reverseStackOrder = props.reverseStackOrder;
    var _getAxisNameByLayout2 = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout2.numericAxisName, cateAxisName = _getAxisNameByLayout2.cateAxisName;
    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function(result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, getAxisMap(props, _objectSpread(_objectSpread({}, entry), {}, {
        graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex,
        dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(_objectSpread(_objectSpread({}, axisObj), {}, {
      props,
      graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function(key) {
      axisObj[key] = formatAxisMap3(props, axisObj[key], offset, key.replace("Map", ""), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formattedGraphicalItems = getFormatItems(props, _objectSpread(_objectSpread({}, axisObj), {}, {
      dataStartIndex,
      dataEndIndex,
      updateId,
      graphicalItems,
      stackGroups,
      offset
    }));
    return _objectSpread(_objectSpread({
      formattedGraphicalItems,
      graphicalItems,
      offset,
      stackGroups
    }, ticksObj), axisObj);
  };
  var CategoricalChartWrapper = /* @__PURE__ */ function(_Component) {
    function CategoricalChartWrapper2(_props) {
      var _props$id, _props$throttleDelay;
      var _this;
      _classCallCheck(this, CategoricalChartWrapper2);
      _this = _callSuper(this, CategoricalChartWrapper2, [_props]);
      _defineProperty(_this, "eventEmitterSymbol", Symbol("rechartsEventEmitter"));
      _defineProperty(_this, "accessibilityManager", new AccessibilityManager());
      _defineProperty(_this, "handleLegendBBoxUpdate", function(box) {
        if (box) {
          var _this$state = _this.state, dataStartIndex = _this$state.dataStartIndex, dataEndIndex = _this$state.dataEndIndex, updateId = _this$state.updateId;
          _this.setState(_objectSpread({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, _objectSpread(_objectSpread({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      });
      _defineProperty(_this, "handleReceiveSyncEvent", function(cId, data, emitter) {
        if (_this.props.syncId === cId) {
          if (emitter === _this.eventEmitterSymbol && typeof _this.props.syncMethod !== "function") {
            return;
          }
          _this.applySyncEvent(data);
        }
      });
      _defineProperty(_this, "handleBrushChange", function(_ref9) {
        var startIndex = _ref9.startIndex, endIndex = _ref9.endIndex;
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;
          _this.setState(function() {
            return _objectSpread({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId
            }, _this.state));
          });
          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      });
      _defineProperty(_this, "handleMouseEnter", function(e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState);
          _this.triggerSyncEvent(_nextState);
          var onMouseEnter = _this.props.onMouseEnter;
          if (isFunction(onMouseEnter)) {
            onMouseEnter(_nextState, e);
          }
        }
      });
      _defineProperty(_this, "triggeredAfterMouseMove", function(e) {
        var mouse = _this.getMouseInfo(e);
        var nextState = mouse ? _objectSpread(_objectSpread({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseMove = _this.props.onMouseMove;
        if (isFunction(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      });
      _defineProperty(_this, "handleItemMouseEnter", function(el) {
        _this.setState(function() {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      });
      _defineProperty(_this, "handleItemMouseLeave", function() {
        _this.setState(function() {
          return {
            isTooltipActive: false
          };
        });
      });
      _defineProperty(_this, "handleMouseMove", function(e) {
        e.persist();
        _this.throttleTriggeredAfterMouseMove(e);
      });
      _defineProperty(_this, "handleMouseLeave", function(e) {
        _this.throttleTriggeredAfterMouseMove.cancel();
        var nextState = {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseLeave = _this.props.onMouseLeave;
        if (isFunction(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }
      });
      _defineProperty(_this, "handleOuterEvent", function(e) {
        var eventName = getReactEventByType(e);
        var event = get(_this.props, "".concat(eventName));
        if (eventName && isFunction(event)) {
          var _mouse;
          var mouse;
          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }
          event((_mouse = mouse) !== null && _mouse !== void 0 ? _mouse : {}, e);
        }
      });
      _defineProperty(_this, "handleClick", function(e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState2 = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState2);
          _this.triggerSyncEvent(_nextState2);
          var onClick = _this.props.onClick;
          if (isFunction(onClick)) {
            onClick(_nextState2, e);
          }
        }
      });
      _defineProperty(_this, "handleMouseDown", function(e) {
        var onMouseDown = _this.props.onMouseDown;
        if (isFunction(onMouseDown)) {
          var _nextState3 = _this.getMouseInfo(e);
          onMouseDown(_nextState3, e);
        }
      });
      _defineProperty(_this, "handleMouseUp", function(e) {
        var onMouseUp = _this.props.onMouseUp;
        if (isFunction(onMouseUp)) {
          var _nextState4 = _this.getMouseInfo(e);
          onMouseUp(_nextState4, e);
        }
      });
      _defineProperty(_this, "handleTouchMove", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
        }
      });
      _defineProperty(_this, "handleTouchStart", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      });
      _defineProperty(_this, "handleTouchEnd", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      });
      _defineProperty(_this, "handleDoubleClick", function(e) {
        var onDoubleClick = _this.props.onDoubleClick;
        if (isFunction(onDoubleClick)) {
          var _nextState5 = _this.getMouseInfo(e);
          onDoubleClick(_nextState5, e);
        }
      });
      _defineProperty(_this, "handleContextMenu", function(e) {
        var onContextMenu = _this.props.onContextMenu;
        if (isFunction(onContextMenu)) {
          var _nextState6 = _this.getMouseInfo(e);
          onContextMenu(_nextState6, e);
        }
      });
      _defineProperty(_this, "triggerSyncEvent", function(data) {
        if (_this.props.syncId !== void 0) {
          eventCenter.emit(SYNC_EVENT, _this.props.syncId, data, _this.eventEmitterSymbol);
        }
      });
      _defineProperty(_this, "applySyncEvent", function(data) {
        var _this$props = _this.props, layout = _this$props.layout, syncMethod = _this$props.syncMethod;
        var updateId = _this.state.updateId;
        var dataStartIndex = data.dataStartIndex, dataEndIndex = data.dataEndIndex;
        if (data.dataStartIndex !== void 0 || data.dataEndIndex !== void 0) {
          _this.setState(_objectSpread({
            dataStartIndex,
            dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, _this.state)));
        } else if (data.activeTooltipIndex !== void 0) {
          var chartX = data.chartX, chartY = data.chartY;
          var activeTooltipIndex = data.activeTooltipIndex;
          var _this$state2 = _this.state, offset = _this$state2.offset, tooltipTicks = _this$state2.tooltipTicks;
          if (!offset) {
            return;
          }
          if (typeof syncMethod === "function") {
            activeTooltipIndex = syncMethod(tooltipTicks, data);
          } else if (syncMethod === "value") {
            activeTooltipIndex = -1;
            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }
          var viewBox = _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          });
          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(_this.state, _this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === "horizontal" ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === "horizontal" ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          _this.setState(_objectSpread(_objectSpread({}, data), {}, {
            activeLabel,
            activeCoordinate,
            activePayload,
            activeTooltipIndex
          }));
        } else {
          _this.setState(data);
        }
      });
      _defineProperty(_this, "renderCursor", function(element) {
        var _element$props$active;
        var _this$state3 = _this.state, isTooltipActive = _this$state3.isTooltipActive, activeCoordinate = _this$state3.activeCoordinate, activePayload = _this$state3.activePayload, offset = _this$state3.offset, activeTooltipIndex = _this$state3.activeTooltipIndex, tooltipAxisBandSize = _this$state3.tooltipAxisBandSize;
        var tooltipEventType = _this.getTooltipEventType();
        var isActive = (_element$props$active = element.props.active) !== null && _element$props$active !== void 0 ? _element$props$active : isTooltipActive;
        var layout = _this.props.layout;
        var key = element.key || "_recharts-cursor";
        return /* @__PURE__ */ React.createElement(Cursor, {
          key,
          activeCoordinate,
          activePayload,
          activeTooltipIndex,
          chartName,
          element,
          isActive,
          layout,
          offset,
          tooltipAxisBandSize,
          tooltipEventType
        });
      });
      _defineProperty(_this, "renderPolarAxis", function(element, displayName, index) {
        var axisType = get(element, "type.axisType");
        var axisMap = get(_this.state, "".concat(axisType, "Map"));
        var elementDefaultProps = element.type.defaultProps;
        var elementProps = elementDefaultProps !== void 0 ? _objectSpread(_objectSpread({}, elementDefaultProps), element.props) : element.props;
        var axisOption = axisMap && axisMap[elementProps["".concat(axisType, "Id")]];
        return /* @__PURE__ */ reactExports.cloneElement(element, _objectSpread(_objectSpread({}, axisOption), {}, {
          className: clsx(axisType, axisOption.className),
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      });
      _defineProperty(_this, "renderPolarGrid", function(element) {
        var _element$props = element.props, radialLines = _element$props.radialLines, polarAngles = _element$props.polarAngles, polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state, radiusAxisMap = _this$state4.radiusAxisMap, angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
        return /* @__PURE__ */ reactExports.cloneElement(element, {
          polarAngles: Array.isArray(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          polarRadius: Array.isArray(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          cx,
          cy,
          innerRadius,
          outerRadius,
          key: element.key || "polar-grid",
          radialLines
        });
      });
      _defineProperty(_this, "renderLegend", function() {
        var formattedGraphicalItems = _this.state.formattedGraphicalItems;
        var _this$props2 = _this.props, children = _this$props2.children, width = _this$props2.width, height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children,
          formattedGraphicalItems,
          legendWidth,
          legendContent
        });
        if (!props) {
          return null;
        }
        var item = props.item, otherProps = _objectWithoutProperties(props, _excluded);
        return /* @__PURE__ */ reactExports.cloneElement(item, _objectSpread(_objectSpread({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin,
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      });
      _defineProperty(_this, "renderTooltip", function() {
        var _tooltipItem$props$ac;
        var _this$props3 = _this.props, children = _this$props3.children, accessibilityLayer = _this$props3.accessibilityLayer;
        var tooltipItem = findChildByType(children, Tooltip);
        if (!tooltipItem) {
          return null;
        }
        var _this$state5 = _this.state, isTooltipActive = _this$state5.isTooltipActive, activeCoordinate = _this$state5.activeCoordinate, activePayload = _this$state5.activePayload, activeLabel = _this$state5.activeLabel, offset = _this$state5.offset;
        var isActive = (_tooltipItem$props$ac = tooltipItem.props.active) !== null && _tooltipItem$props$ac !== void 0 ? _tooltipItem$props$ac : isTooltipActive;
        return /* @__PURE__ */ reactExports.cloneElement(tooltipItem, {
          viewBox: _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isActive,
          label: activeLabel,
          payload: isActive ? activePayload : [],
          coordinate: activeCoordinate,
          accessibilityLayer
        });
      });
      _defineProperty(_this, "renderBrush", function(element) {
        var _this$props4 = _this.props, margin = _this$props4.margin, data = _this$props4.data;
        var _this$state6 = _this.state, offset = _this$state6.offset, dataStartIndex = _this$state6.dataStartIndex, dataEndIndex = _this$state6.dataEndIndex, updateId = _this$state6.updateId;
        return /* @__PURE__ */ reactExports.cloneElement(element, {
          key: element.key || "_recharts-brush",
          onChange: combineEventHandlers(_this.handleBrushChange, element.props.onChange),
          data,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      });
      _defineProperty(_this, "renderReferenceElement", function(element, displayName, index) {
        if (!element) {
          return null;
        }
        var _this2 = _this, clipPathId = _this2.clipPathId;
        var _this$state7 = _this.state, xAxisMap = _this$state7.xAxisMap, yAxisMap = _this$state7.yAxisMap, offset = _this$state7.offset;
        var elementDefaultProps = element.type.defaultProps || {};
        var _element$props2 = element.props, _element$props2$xAxis = _element$props2.xAxisId, xAxisId = _element$props2$xAxis === void 0 ? elementDefaultProps.xAxisId : _element$props2$xAxis, _element$props2$yAxis = _element$props2.yAxisId, yAxisId = _element$props2$yAxis === void 0 ? elementDefaultProps.yAxisId : _element$props2$yAxis;
        return /* @__PURE__ */ reactExports.cloneElement(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId
        });
      });
      _defineProperty(_this, "renderActivePoints", function(_ref10) {
        var item = _ref10.item, activePoint = _ref10.activePoint, basePoint = _ref10.basePoint, childIndex = _ref10.childIndex, isRange = _ref10.isRange;
        var result = [];
        var key = item.props.key;
        var itemItemProps = item.item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
        var activeDot = itemItemProps.activeDot, dataKey = itemItemProps.dataKey;
        var dotProps = _objectSpread(_objectSpread({
          index: childIndex,
          dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: activePoint.payload,
          value: activePoint.value
        }, filterProps(activeDot, false)), adaptEventHandlers(activeDot));
        result.push(CategoricalChartWrapper2.renderActiveDot(activeDot, dotProps, "".concat(key, "-activePoint-").concat(childIndex)));
        if (basePoint) {
          result.push(CategoricalChartWrapper2.renderActiveDot(activeDot, _objectSpread(_objectSpread({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y
          }), "".concat(key, "-basePoint-").concat(childIndex)));
        } else if (isRange) {
          result.push(null);
        }
        return result;
      });
      _defineProperty(_this, "renderGraphicChild", function(element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);
        if (!item) {
          return null;
        }
        var tooltipEventType = _this.getTooltipEventType();
        var _this$state8 = _this.state, isTooltipActive = _this$state8.isTooltipActive, tooltipAxis = _this$state8.tooltipAxis, activeTooltipIndex = _this$state8.activeTooltipIndex, activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip);
        var _item$props = item.props, points = _item$props.points, isRange = _item$props.isRange, baseLine = _item$props.baseLine;
        var itemItemProps = item.item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
        var activeDot = itemItemProps.activeDot, hide = itemItemProps.hide, activeBar = itemItemProps.activeBar, activeShape = itemItemProps.activeShape;
        var hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
        var itemEvents = {};
        if (tooltipEventType !== "axis" && tooltipItem && tooltipItem.props.trigger === "click") {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, element.props.onClick)
          };
        } else if (tooltipEventType !== "axis") {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, element.props.onMouseEnter)
          };
        }
        var graphicalItem = /* @__PURE__ */ reactExports.cloneElement(element, _objectSpread(_objectSpread({}, item.props), itemEvents));
        function findWithPayload(entry) {
          return typeof tooltipAxis.dataKey === "function" ? tooltipAxis.dataKey(entry.payload) : null;
        }
        if (hasActive) {
          if (activeTooltipIndex >= 0) {
            var activePoint, basePoint;
            if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
              var specifiedKey = typeof tooltipAxis.dataKey === "function" ? findWithPayload : "payload.".concat(tooltipAxis.dataKey.toString());
              activePoint = findEntryInArray(points, specifiedKey, activeLabel);
              basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
            } else {
              activePoint = points === null || points === void 0 ? void 0 : points[activeTooltipIndex];
              basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
            }
            if (activeShape || activeBar) {
              var activeIndex = element.props.activeIndex !== void 0 ? element.props.activeIndex : activeTooltipIndex;
              return [/* @__PURE__ */ reactExports.cloneElement(element, _objectSpread(_objectSpread(_objectSpread({}, item.props), itemEvents), {}, {
                activeIndex
              })), null, null];
            }
            if (!isNil(activePoint)) {
              return [graphicalItem].concat(_toConsumableArray(_this.renderActivePoints({
                item,
                activePoint,
                basePoint,
                childIndex: activeTooltipIndex,
                isRange
              })));
            }
          } else {
            var _this$getItemByXY;
            var _ref11 = (_this$getItemByXY = _this.getItemByXY(_this.state.activeCoordinate)) !== null && _this$getItemByXY !== void 0 ? _this$getItemByXY : {
              graphicalItem
            }, _ref11$graphicalItem = _ref11.graphicalItem, _ref11$graphicalItem$ = _ref11$graphicalItem.item, xyItem = _ref11$graphicalItem$ === void 0 ? element : _ref11$graphicalItem$, childIndex = _ref11$graphicalItem.childIndex;
            var elementProps = _objectSpread(_objectSpread(_objectSpread({}, item.props), itemEvents), {}, {
              activeIndex: childIndex
            });
            return [/* @__PURE__ */ reactExports.cloneElement(xyItem, elementProps), null, null];
          }
        }
        if (isRange) {
          return [graphicalItem, null, null];
        }
        return [graphicalItem, null];
      });
      _defineProperty(_this, "renderCustomized", function(element, displayName, index) {
        return /* @__PURE__ */ reactExports.cloneElement(element, _objectSpread(_objectSpread({
          key: "recharts-customized-".concat(index)
        }, _this.props), _this.state));
      });
      _defineProperty(_this, "renderMap", {
        CartesianGrid: {
          handler: renderAsIs,
          once: true
        },
        ReferenceArea: {
          handler: _this.renderReferenceElement
        },
        ReferenceLine: {
          handler: renderAsIs
        },
        ReferenceDot: {
          handler: _this.renderReferenceElement
        },
        XAxis: {
          handler: renderAsIs
        },
        YAxis: {
          handler: renderAsIs
        },
        Brush: {
          handler: _this.renderBrush,
          once: true
        },
        Bar: {
          handler: _this.renderGraphicChild
        },
        Line: {
          handler: _this.renderGraphicChild
        },
        Area: {
          handler: _this.renderGraphicChild
        },
        Radar: {
          handler: _this.renderGraphicChild
        },
        RadialBar: {
          handler: _this.renderGraphicChild
        },
        Scatter: {
          handler: _this.renderGraphicChild
        },
        Pie: {
          handler: _this.renderGraphicChild
        },
        Funnel: {
          handler: _this.renderGraphicChild
        },
        Tooltip: {
          handler: _this.renderCursor,
          once: true
        },
        PolarGrid: {
          handler: _this.renderPolarGrid,
          once: true
        },
        PolarAngleAxis: {
          handler: _this.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: _this.renderPolarAxis
        },
        Customized: {
          handler: _this.renderCustomized
        }
      });
      _this.clipPathId = "".concat((_props$id = _props.id) !== null && _props$id !== void 0 ? _props$id : uniqueId("recharts"), "-clip");
      _this.throttleTriggeredAfterMouseMove = throttle(_this.triggeredAfterMouseMove, (_props$throttleDelay = _props.throttleDelay) !== null && _props$throttleDelay !== void 0 ? _props$throttleDelay : 1e3 / 60);
      _this.state = {};
      return _this;
    }
    _inherits(CategoricalChartWrapper2, _Component);
    return _createClass(CategoricalChartWrapper2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props$margin$le, _this$props$margin$to;
        this.addListener();
        this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (_this$props$margin$le = this.props.margin.left) !== null && _this$props$margin$le !== void 0 ? _this$props$margin$le : 0,
            top: (_this$props$margin$to = this.props.margin.top) !== null && _this$props$margin$to !== void 0 ? _this$props$margin$to : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        });
        this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function displayDefaultTooltip() {
        var _this$props5 = this.props, children = _this$props5.children, data = _this$props5.data, height = _this$props5.height, layout = _this$props5.layout;
        var tooltipElem = findChildByType(children, Tooltip);
        if (!tooltipElem) {
          return;
        }
        var defaultIndex = tooltipElem.props.defaultIndex;
        if (typeof defaultIndex !== "number" || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length - 1) {
          return;
        }
        var activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
        var activePayload = getTooltipContent(this.state, data, defaultIndex, activeLabel);
        var independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
        var dependentAxisCoord = (this.state.offset.top + height) / 2;
        var isHorizontal = layout === "horizontal";
        var activeCoordinate = isHorizontal ? {
          x: independentAxisCoord,
          y: dependentAxisCoord
        } : {
          y: independentAxisCoord,
          x: dependentAxisCoord
        };
        var scatterPlotElement = this.state.formattedGraphicalItems.find(function(_ref12) {
          var item = _ref12.item;
          return item.type.name === "Scatter";
        });
        if (scatterPlotElement) {
          activeCoordinate = _objectSpread(_objectSpread({}, activeCoordinate), scatterPlotElement.props.points[defaultIndex].tooltipPosition);
          activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
        }
        var nextState = {
          activeTooltipIndex: defaultIndex,
          isTooltipActive: true,
          activeLabel,
          activePayload,
          activeCoordinate
        };
        this.setState(nextState);
        this.renderCursor(tooltipElem);
        this.accessibilityManager.setIndex(defaultIndex);
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(prevProps, prevState) {
        if (!this.props.accessibilityLayer) {
          return null;
        }
        if (this.state.tooltipTicks !== prevState.tooltipTicks) {
          this.accessibilityManager.setDetails({
            coordinateList: this.state.tooltipTicks
          });
        }
        if (this.props.layout !== prevProps.layout) {
          this.accessibilityManager.setDetails({
            layout: this.props.layout
          });
        }
        if (this.props.margin !== prevProps.margin) {
          var _this$props$margin$le2, _this$props$margin$to2;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_this$props$margin$le2 = this.props.margin.left) !== null && _this$props$margin$le2 !== void 0 ? _this$props$margin$le2 : 0,
              top: (_this$props$margin$to2 = this.props.margin.top) !== null && _this$props$margin$to2 !== void 0 ? _this$props$margin$to2 : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!isChildrenEqual([findChildByType(prevProps.children, Tooltip)], [findChildByType(this.props.children, Tooltip)])) {
          this.displayDefaultTooltip();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListener();
        this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip);
        if (tooltipItem && typeof tooltipItem.props.shared === "boolean") {
          var eventType = tooltipItem.props.shared ? "axis" : "item";
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }
        return defaultTooltipEventType;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }
        var element = this.container;
        var boundingRect = element.getBoundingClientRect();
        var containerOffset = getOffset(boundingRect);
        var e = {
          chartX: Math.round(event.pageX - containerOffset.left),
          chartY: Math.round(event.pageY - containerOffset.top)
        };
        var scale = boundingRect.width / element.offsetWidth || 1;
        var rangeObj = this.inRange(e.chartX, e.chartY, scale);
        if (!rangeObj) {
          return null;
        }
        var _this$state9 = this.state, xAxisMap = _this$state9.xAxisMap, yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();
        if (tooltipEventType !== "axis" && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread(_objectSpread({}, e), {}, {
            xValue,
            yValue
          });
        }
        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
        if (toolTipData) {
          return _objectSpread(_objectSpread({}, e), toolTipData);
        }
        return null;
      }
    }, {
      key: "inRange",
      value: function inRange(x2, y2) {
        var scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var layout = this.props.layout;
        var scaledX = x2 / scale, scaledY = y2 / scale;
        if (layout === "horizontal" || layout === "vertical") {
          var offset = this.state.offset;
          var isInRange = scaledX >= offset.left && scaledX <= offset.left + offset.width && scaledY >= offset.top && scaledY <= offset.top + offset.height;
          return isInRange ? {
            x: scaledX,
            y: scaledY
          } : null;
        }
        var _this$state10 = this.state, angleAxisMap = _this$state10.angleAxisMap, radiusAxisMap = _this$state10.radiusAxisMap;
        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: scaledX,
            y: scaledY
          }, angleAxis);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip);
        var tooltipEvents = {};
        if (tooltipItem && tooltipEventType === "axis") {
          if (tooltipItem.props.trigger === "click") {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onDoubleClick: this.handleDoubleClick,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd,
              onContextMenu: this.handleContextMenu
            };
          }
        }
        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return _objectSpread(_objectSpread({}, outerEvents), tooltipEvents);
      }
    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;
        for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          var entry = formattedGraphicalItems[i];
          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset, left = _this$state$offset.left, top = _this$state$offset.top, height = _this$state$offset.height, width = _this$state$offset.width;
        return /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
          id: clipPathId
        }, /* @__PURE__ */ React.createElement("rect", {
          x: left,
          y: top,
          height,
          width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function(res, _ref13) {
          var _ref14 = _slicedToArray(_ref13, 2), axisId = _ref14[0], axisProps = _ref14[1];
          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function(res, _ref15) {
          var _ref16 = _slicedToArray(_ref15, 2), axisId = _ref16[0], axisProps = _ref16[1];
          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap;
        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 || (_this$state$xAxisMap = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap === void 0 ? void 0 : _this$state$xAxisMap.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap;
        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 || (_this$state$yAxisMap = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap === void 0 ? void 0 : _this$state$yAxisMap.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var _this$state11 = this.state, formattedGraphicalItems = _this$state11.formattedGraphicalItems, activeItem = _this$state11.activeItem;
        if (formattedGraphicalItems && formattedGraphicalItems.length) {
          for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formattedGraphicalItems[i];
            var props = graphicalItem.props, item = graphicalItem.item;
            var itemProps = item.type.defaultProps !== void 0 ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
            var itemDisplayName = getDisplayName(item.type);
            if (itemDisplayName === "Bar") {
              var activeBarItem = (props.data || []).find(function(entry) {
                return isInRectangle(chartXY, entry);
              });
              if (activeBarItem) {
                return {
                  graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === "RadialBar") {
              var _activeBarItem = (props.data || []).find(function(entry) {
                return inRangeOfSector(chartXY, entry);
              });
              if (_activeBarItem) {
                return {
                  graphicalItem,
                  payload: _activeBarItem
                };
              }
            } else if (isFunnel(graphicalItem, activeItem) || isPie(graphicalItem, activeItem) || isScatter(graphicalItem, activeItem)) {
              var activeIndex = getActiveShapeIndexForTooltip({
                graphicalItem,
                activeTooltipItem: activeItem,
                itemData: itemProps.data
              });
              var childIndex = itemProps.activeIndex === void 0 ? activeIndex : itemProps.activeIndex;
              return {
                graphicalItem: _objectSpread(_objectSpread({}, graphicalItem), {}, {
                  childIndex
                }),
                payload: isScatter(graphicalItem, activeItem) ? itemProps.data[activeIndex] : graphicalItem.props.data[activeIndex]
              };
            }
          }
        }
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        if (!validateWidthHeight(this)) {
          return null;
        }
        var _this$props6 = this.props, children = _this$props6.children, className = _this$props6.className, width = _this$props6.width, height = _this$props6.height, style = _this$props6.style, compact = _this$props6.compact, title = _this$props6.title, desc = _this$props6.desc, others = _objectWithoutProperties(_this$props6, _excluded2);
        var attrs = filterProps(others, false);
        if (compact) {
          return /* @__PURE__ */ React.createElement(ChartLayoutContextProvider, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ React.createElement(Surface, _extends({}, attrs, {
            width,
            height,
            title,
            desc
          }), this.renderClipPath(), renderByOrder(children, this.renderMap)));
        }
        if (this.props.accessibilityLayer) {
          var _this$props$tabIndex, _this$props$role;
          attrs.tabIndex = (_this$props$tabIndex = this.props.tabIndex) !== null && _this$props$tabIndex !== void 0 ? _this$props$tabIndex : 0;
          attrs.role = (_this$props$role = this.props.role) !== null && _this$props$role !== void 0 ? _this$props$role : "application";
          attrs.onKeyDown = function(e) {
            _this3.accessibilityManager.keyboardEvent(e);
          };
          attrs.onFocus = function() {
            _this3.accessibilityManager.focus();
          };
        }
        var events = this.parseEventsOfWrapper();
        return /* @__PURE__ */ React.createElement(ChartLayoutContextProvider, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ React.createElement("div", _extends({
          className: clsx("recharts-wrapper", className),
          style: _objectSpread({
            position: "relative",
            cursor: "default",
            width,
            height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this3.container = node;
          }
        }), /* @__PURE__ */ React.createElement(Surface, _extends({}, attrs, {
          width,
          height,
          title,
          desc,
          style: FULL_WIDTH_AND_HEIGHT
        }), this.renderClipPath(), renderByOrder(children, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(reactExports.Component);
  _defineProperty(CategoricalChartWrapper, "displayName", chartName);
  _defineProperty(CategoricalChartWrapper, "defaultProps", _objectSpread({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: "index"
  }, defaultProps2));
  _defineProperty(CategoricalChartWrapper, "getDerivedStateFromProps", function(nextProps, prevState) {
    var dataKey = nextProps.dataKey, data = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
    var dataStartIndex = prevState.dataStartIndex, dataEndIndex = prevState.dataEndIndex;
    if (prevState.updateId === void 0) {
      var defaultState = createDefaultState(nextProps);
      return _objectSpread(_objectSpread(_objectSpread({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (dataKey !== prevState.prevDataKey || data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps);
      var keepFromPrevState = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: prevState.isTooltipActive
      };
      var updatesToState = _objectSpread(_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
        updateId: prevState.updateId + 1
      });
      var newState = _objectSpread(_objectSpread(_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);
      return _objectSpread(_objectSpread(_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({
        props: nextProps
      }, newState), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (!isChildrenEqual(children, prevState.prevChildren)) {
      var _brush$props$startInd, _brush$props, _brush$props$endIndex, _brush$props2;
      var brush = findChildByType(children, Brush);
      var startIndex = brush ? (_brush$props$startInd = (_brush$props = brush.props) === null || _brush$props === void 0 ? void 0 : _brush$props.startIndex) !== null && _brush$props$startInd !== void 0 ? _brush$props$startInd : dataStartIndex : dataStartIndex;
      var endIndex = brush ? (_brush$props$endIndex = (_brush$props2 = brush.props) === null || _brush$props2 === void 0 ? void 0 : _brush$props2.endIndex) !== null && _brush$props$endIndex !== void 0 ? _brush$props$endIndex : dataEndIndex : dataEndIndex;
      var hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;
      var hasGlobalData = !isNil(data);
      var newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;
      return _objectSpread(_objectSpread({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      }), prevState)), {}, {
        prevChildren: children,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      });
    }
    return null;
  });
  _defineProperty(CategoricalChartWrapper, "renderActiveDot", function(option, props, key) {
    var dot;
    if (/* @__PURE__ */ reactExports.isValidElement(option)) {
      dot = /* @__PURE__ */ reactExports.cloneElement(option, props);
    } else if (isFunction(option)) {
      dot = option(props);
    } else {
      dot = /* @__PURE__ */ React.createElement(Dot, props);
    }
    return /* @__PURE__ */ React.createElement(Layer, {
      className: "recharts-active-dot",
      key
    }, dot);
  });
  var CategoricalChart = /* @__PURE__ */ reactExports.forwardRef(function CategoricalChart2(props, ref) {
    return /* @__PURE__ */ React.createElement(CategoricalChartWrapper, _extends({}, props, {
      ref
    }));
  });
  CategoricalChart.displayName = CategoricalChartWrapper.displayName;
  return CategoricalChart;
};
var BarChart = generateCategoricalChart({
  chartName: "BarChart",
  GraphicalChild: Bar,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
const chartData = [{
  month: "January",
  desktop: 186,
  mobile: 10
}, {
  month: "February",
  desktop: 305,
  mobile: 200
}, {
  month: "March",
  desktop: 237,
  mobile: 120
}, {
  month: "April",
  desktop: 73,
  mobile: 190
}, {
  month: "May",
  desktop: 209,
  mobile: 130
}, {
  month: "June",
  desktop: 214,
  mobile: 140
}];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb"
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa"
  }
};
const ChartBar_stories = {
  title: "Chart/Bar",
  component: ChartContainer,
  args: {
    config: chartConfig,
    style: {
      maxHeight: "300px",
      width: "100%"
    }
  },
  decorators: [(Story) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Root, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card.Header, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { size: "sm", children: "Bar chart" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text$1, { size: "xxs", children: "Chart description" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card.Content, { children: Story() })
    ] }) });
  }]
};
const Primary = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "desktop", fill: chartConfig.desktop.color, radius: 4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "mobile", fill: chartConfig.mobile.color, radius: 4 })
    ] })
  }
};
const AddAGrid = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "desktop", fill: chartConfig.desktop.color, radius: 4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "mobile", fill: chartConfig.mobile.color, radius: 4 })
    ] })
  }
};
const AddAnAxis = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: (value) => value.slice(0, 3) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "desktop", fill: chartConfig.desktop.color, radius: 4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "mobile", fill: chartConfig.mobile.color, radius: 4 })
    ] })
  }
};
const AddTooltip = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: (value) => value.slice(0, 3) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { cursor: false, content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltipContent, { indicator: "line" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "desktop", fill: chartConfig.desktop.color, radius: 4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "mobile", fill: chartConfig.mobile.color, radius: 4 })
    ] })
  }
};
const AddLegend = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { accessibilityLayer: true, data: chartData, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { vertical: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", tickLine: false, tickMargin: 10, axisLine: false, tickFormatter: (value) => value.slice(0, 3) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltipContent, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLegend, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartLegendContent, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "desktop", fill: chartConfig.desktop.color, radius: 4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "mobile", fill: chartConfig.mobile.color, radius: 4 })
    ] })
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <BarChart accessibilityLayer data={chartData}>\n        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />\n        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />\n      </BarChart>\n  }\n}',
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AddAGrid.parameters = {
  ...AddAGrid.parameters,
  docs: {
    ...(_d = AddAGrid.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <BarChart accessibilityLayer data={chartData}>\n        <CartesianGrid vertical={false} />\n        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />\n        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />\n      </BarChart>\n  }\n}',
      ...(_f = (_e = AddAGrid.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AddAnAxis.parameters = {
  ...AddAnAxis.parameters,
  docs: {
    ...(_g = AddAnAxis.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <BarChart accessibilityLayer data={chartData}>\n        <CartesianGrid vertical={false} />\n        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />\n        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />\n        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />\n      </BarChart>\n  }\n}',
      ...(_i = (_h = AddAnAxis.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
AddTooltip.parameters = {
  ...AddTooltip.parameters,
  docs: {
    ...(_j = AddTooltip.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <BarChart accessibilityLayer data={chartData}>\n        <CartesianGrid />\n        <YAxis />\n        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />\n        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />\n        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />\n        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />\n      </BarChart>\n  }\n}',
      ...(_l = (_k = AddTooltip.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
AddLegend.parameters = {
  ...AddLegend.parameters,
  docs: {
    ...(_m = AddLegend.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <BarChart accessibilityLayer data={chartData}>\n        <CartesianGrid vertical={false} />\n        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />\n        <ChartTooltip content={<ChartTooltipContent />} />\n        <ChartLegend content={<ChartLegendContent />} />\n        <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />\n        <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />\n      </BarChart>\n  }\n}',
      ...(_o = (_n = AddLegend.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Primary", "AddAGrid", "AddAnAxis", "AddTooltip", "AddLegend"];
export {
  AddAGrid,
  AddAnAxis,
  AddLegend,
  AddTooltip,
  Primary,
  __namedExportsOrder,
  ChartBar_stories as default
};
