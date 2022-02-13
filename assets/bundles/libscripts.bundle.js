!(function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document)
							throw new Error(
								"jQuery requires a window with a document"
							);
						return t(e);
				  })
		: t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
	"use strict";
	var t = [],
		x = T.document,
		i = Object.getPrototypeOf,
		a = t.slice,
		g = t.concat,
		l = t.push,
		r = t.indexOf,
		n = {},
		o = n.toString,
		p = n.hasOwnProperty,
		s = p.toString,
		c = s.call(Object),
		m = {};
	function v(e, t) {
		var n = (t = t || x).createElement("script");
		(n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
	}
	var u = "3.2.1",
		C = function (e, t) {
			return new C.fn.init(e, t);
		},
		f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		d = /^-ms-/,
		h = /-([a-z])/g,
		y = function (e, t) {
			return t.toUpperCase();
		};
	function _(e) {
		var t = !!e && "length" in e && e.length,
			n = C.type(e);
		return (
			"function" !== n &&
			!C.isWindow(e) &&
			("array" === n ||
				0 === t ||
				("number" == typeof t && 0 < t && t - 1 in e))
		);
	}
	(C.fn = C.prototype =
		{
			jquery: u,
			constructor: C,
			length: 0,
			toArray: function () {
				return a.call(this);
			},
			get: function (e) {
				return null == e
					? a.call(this)
					: e < 0
					? this[e + this.length]
					: this[e];
			},
			pushStack: function (e) {
				var t = C.merge(this.constructor(), e);
				return (t.prevObject = this), t;
			},
			each: function (e) {
				return C.each(this, e);
			},
			map: function (n) {
				return this.pushStack(
					C.map(this, function (e, t) {
						return n.call(e, t, e);
					})
				);
			},
			slice: function () {
				return this.pushStack(a.apply(this, arguments));
			},
			first: function () {
				return this.eq(0);
			},
			last: function () {
				return this.eq(-1);
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : []);
			},
			end: function () {
				return this.prevObject || this.constructor();
			},
			push: l,
			sort: t.sort,
			splice: t.splice,
		}),
		(C.extend = C.fn.extend =
			function () {
				var e,
					t,
					n,
					i,
					r,
					o,
					s = arguments[0] || {},
					a = 1,
					l = arguments.length,
					c = !1;
				for (
					"boolean" == typeof s &&
						((c = s), (s = arguments[a] || {}), a++),
						"object" == typeof s || C.isFunction(s) || (s = {}),
						a === l && ((s = this), a--);
					a < l;
					a++
				)
					if (null != (e = arguments[a]))
						for (t in e)
							(n = s[t]),
								s !== (i = e[t]) &&
									(c &&
									i &&
									(C.isPlainObject(i) ||
										(r = Array.isArray(i)))
										? (r
												? ((r = !1),
												  (o =
														n && Array.isArray(n)
															? n
															: []))
												: (o =
														n && C.isPlainObject(n)
															? n
															: {}),
										  (s[t] = C.extend(c, o, i)))
										: void 0 !== i && (s[t] = i));
				return s;
			}),
		C.extend({
			expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e);
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === C.type(e);
			},
			isWindow: function (e) {
				return null != e && e === e.window;
			},
			isNumeric: function (e) {
				var t = C.type(e);
				return (
					("number" === t || "string" === t) &&
					!isNaN(e - parseFloat(e))
				);
			},
			isPlainObject: function (e) {
				var t, n;
				return !(
					!e ||
					"[object Object]" !== o.call(e) ||
					((t = i(e)) &&
						("function" !=
							typeof (n =
								p.call(t, "constructor") && t.constructor) ||
							s.call(n) !== c))
				);
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0;
			},
			type: function (e) {
				return null == e
					? e + ""
					: "object" == typeof e || "function" == typeof e
					? n[o.call(e)] || "object"
					: typeof e;
			},
			globalEval: function (e) {
				v(e);
			},
			camelCase: function (e) {
				return e.replace(d, "ms-").replace(h, y);
			},
			each: function (e, t) {
				var n,
					i = 0;
				if (_(e))
					for (
						n = e.length;
						i < n && !1 !== t.call(e[i], i, e[i]);
						i++
					);
				else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
				return e;
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(f, "");
			},
			makeArray: function (e, t) {
				var n = t || [];
				return (
					null != e &&
						(_(Object(e))
							? C.merge(n, "string" == typeof e ? [e] : e)
							: l.call(n, e)),
					n
				);
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : r.call(t, e, n);
			},
			merge: function (e, t) {
				for (var n = +t.length, i = 0, r = e.length; i < n; i++)
					e[r++] = t[i];
				return (e.length = r), e;
			},
			grep: function (e, t, n) {
				for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
					!t(e[r], r) !== s && i.push(e[r]);
				return i;
			},
			map: function (e, t, n) {
				var i,
					r,
					o = 0,
					s = [];
				if (_(e))
					for (i = e.length; o < i; o++)
						null != (r = t(e[o], o, n)) && s.push(r);
				else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
				return g.apply([], s);
			},
			guid: 1,
			proxy: function (e, t) {
				var n, i, r;
				if (
					("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
					C.isFunction(e))
				)
					return (
						(i = a.call(arguments, 2)),
						((r = function () {
							return e.apply(
								t || this,
								i.concat(a.call(arguments))
							);
						}).guid = e.guid =
							e.guid || C.guid++),
						r
					);
			},
			now: Date.now,
			support: m,
		}),
		"function" == typeof Symbol &&
			(C.fn[Symbol.iterator] = t[Symbol.iterator]),
		C.each(
			"Boolean Number String Function Array Date RegExp Object Error Symbol".split(
				" "
			),
			function (e, t) {
				n["[object " + t + "]"] = t.toLowerCase();
			}
		);
	var b = (function (n) {
		var e,
			h,
			b,
			o,
			r,
			p,
			f,
			g,
			w,
			l,
			c,
			E,
			T,
			s,
			x,
			m,
			a,
			u,
			v,
			C = "sizzle" + 1 * new Date(),
			y = n.document,
			S = 0,
			i = 0,
			d = se(),
			_ = se(),
			D = se(),
			A = function (e, t) {
				return e === t && (c = !0), 0;
			},
			k = {}.hasOwnProperty,
			t = [],
			N = t.pop,
			I = t.push,
			O = t.push,
			j = t.slice,
			L = function (e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1;
			},
			P =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			H = "[\\x20\\t\\r\\n\\f]",
			q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			R =
				"\\[" +
				H +
				"*(" +
				q +
				")(?:" +
				H +
				"*([*^$|!~]?=)" +
				H +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
				q +
				"))|)" +
				H +
				"*\\]",
			F =
				":(" +
				q +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
				R +
				")*)|.*)\\)|)",
			M = new RegExp(H + "+", "g"),
			W = new RegExp(
				"^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
				"g"
			),
			B = new RegExp("^" + H + "*," + H + "*"),
			U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
			K = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
			$ = new RegExp(F),
			Q = new RegExp("^" + q + "$"),
			z = {
				ID: new RegExp("^#(" + q + ")"),
				CLASS: new RegExp("^\\.(" + q + ")"),
				TAG: new RegExp("^(" + q + "|[*])"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp(
					"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
						H +
						"*(even|odd|(([+-]|)(\\d*)n|)" +
						H +
						"*(?:([+-]|)" +
						H +
						"*(\\d+)|))" +
						H +
						"*\\)|)",
					"i"
				),
				bool: new RegExp("^(?:" + P + ")$", "i"),
				needsContext: new RegExp(
					"^" +
						H +
						"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
						H +
						"*((?:-\\d)?\\d*)" +
						H +
						"*\\)|)(?=[^-]|$)",
					"i"
				),
			},
			V = /^(?:input|select|textarea|button)$/i,
			X = /^h\d$/i,
			Y = /^[^{]+\{\s*\[native \w/,
			G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			J = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
			ee = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i != i || n
					? t
					: i < 0
					? String.fromCharCode(i + 65536)
					: String.fromCharCode(
							(i >> 10) | 55296,
							(1023 & i) | 56320
					  );
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function (e, t) {
				return t
					? "\0" === e
						? "�"
						: e.slice(0, -1) +
						  "\\" +
						  e.charCodeAt(e.length - 1).toString(16) +
						  " "
					: "\\" + e;
			},
			ie = function () {
				E();
			},
			re = ye(
				function (e) {
					return !0 === e.disabled && ("form" in e || "label" in e);
				},
				{ dir: "parentNode", next: "legend" }
			);
		try {
			O.apply((t = j.call(y.childNodes)), y.childNodes),
				t[y.childNodes.length].nodeType;
		} catch (e) {
			O = {
				apply: t.length
					? function (e, t) {
							I.apply(e, j.call(t));
					  }
					: function (e, t) {
							for (var n = e.length, i = 0; (e[n++] = t[i++]); );
							e.length = n - 1;
					  },
			};
		}
		function oe(e, t, n, i) {
			var r,
				o,
				s,
				a,
				l,
				c,
				u,
				f = t && t.ownerDocument,
				d = t ? t.nodeType : 9;
			if (
				((n = n || []),
				"string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
			)
				return n;
			if (
				!i &&
				((t ? t.ownerDocument || t : y) !== T && E(t), (t = t || T), x)
			) {
				if (11 !== d && (l = G.exec(e)))
					if ((r = l[1])) {
						if (9 === d) {
							if (!(s = t.getElementById(r))) return n;
							if (s.id === r) return n.push(s), n;
						} else if (
							f &&
							(s = f.getElementById(r)) &&
							v(t, s) &&
							s.id === r
						)
							return n.push(s), n;
					} else {
						if (l[2])
							return O.apply(n, t.getElementsByTagName(e)), n;
						if (
							(r = l[3]) &&
							h.getElementsByClassName &&
							t.getElementsByClassName
						)
							return O.apply(n, t.getElementsByClassName(r)), n;
					}
				if (h.qsa && !D[e + " "] && (!m || !m.test(e))) {
					if (1 !== d) (f = t), (u = e);
					else if ("object" !== t.nodeName.toLowerCase()) {
						for (
							(a = t.getAttribute("id"))
								? (a = a.replace(te, ne))
								: t.setAttribute("id", (a = C)),
								o = (c = p(e)).length;
							o--;

						)
							c[o] = "#" + a + " " + ve(c[o]);
						(u = c.join(",")),
							(f = (J.test(e) && ge(t.parentNode)) || t);
					}
					if (u)
						try {
							return O.apply(n, f.querySelectorAll(u)), n;
						} catch (e) {
						} finally {
							a === C && t.removeAttribute("id");
						}
				}
			}
			return g(e.replace(W, "$1"), t, n, i);
		}
		function se() {
			var i = [];
			return function e(t, n) {
				return (
					i.push(t + " ") > b.cacheLength && delete e[i.shift()],
					(e[t + " "] = n)
				);
			};
		}
		function ae(e) {
			return (e[C] = !0), e;
		}
		function le(e) {
			var t = T.createElement("fieldset");
			try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null);
			}
		}
		function ce(e, t) {
			for (var n = e.split("|"), i = n.length; i--; )
				b.attrHandle[n[i]] = t;
		}
		function ue(e, t) {
			var n = t && e,
				i =
					n &&
					1 === e.nodeType &&
					1 === t.nodeType &&
					e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
			return e ? 1 : -1;
		}
		function fe(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t;
			};
		}
		function de(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n;
			};
		}
		function he(t) {
			return function (e) {
				return "form" in e
					? e.parentNode && !1 === e.disabled
						? "label" in e
							? "label" in e.parentNode
								? e.parentNode.disabled === t
								: e.disabled === t
							: e.isDisabled === t ||
							  (e.isDisabled !== !t && re(e) === t)
						: e.disabled === t
					: "label" in e && e.disabled === t;
			};
		}
		function pe(s) {
			return ae(function (o) {
				return (
					(o = +o),
					ae(function (e, t) {
						for (var n, i = s([], e.length, o), r = i.length; r--; )
							e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
					})
				);
			});
		}
		function ge(e) {
			return e && void 0 !== e.getElementsByTagName && e;
		}
		for (e in ((h = oe.support = {}),
		(r = oe.isXML =
			function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName;
			}),
		(E = oe.setDocument =
			function (e) {
				var t,
					n,
					i = e ? e.ownerDocument || e : y;
				return (
					i !== T &&
						9 === i.nodeType &&
						i.documentElement &&
						((s = (T = i).documentElement),
						(x = !r(T)),
						y !== T &&
							(n = T.defaultView) &&
							n.top !== n &&
							(n.addEventListener
								? n.addEventListener("unload", ie, !1)
								: n.attachEvent &&
								  n.attachEvent("onunload", ie)),
						(h.attributes = le(function (e) {
							return (
								(e.className = "i"),
								!e.getAttribute("className")
							);
						})),
						(h.getElementsByTagName = le(function (e) {
							return (
								e.appendChild(T.createComment("")),
								!e.getElementsByTagName("*").length
							);
						})),
						(h.getElementsByClassName = Y.test(
							T.getElementsByClassName
						)),
						(h.getById = le(function (e) {
							return (
								(s.appendChild(e).id = C),
								!T.getElementsByName ||
									!T.getElementsByName(C).length
							);
						})),
						h.getById
							? ((b.filter.ID = function (e) {
									var t = e.replace(Z, ee);
									return function (e) {
										return e.getAttribute("id") === t;
									};
							  }),
							  (b.find.ID = function (e, t) {
									if (void 0 !== t.getElementById && x) {
										var n = t.getElementById(e);
										return n ? [n] : [];
									}
							  }))
							: ((b.filter.ID = function (e) {
									var n = e.replace(Z, ee);
									return function (e) {
										var t =
											void 0 !== e.getAttributeNode &&
											e.getAttributeNode("id");
										return t && t.value === n;
									};
							  }),
							  (b.find.ID = function (e, t) {
									if (void 0 !== t.getElementById && x) {
										var n,
											i,
											r,
											o = t.getElementById(e);
										if (o) {
											if (
												(n =
													o.getAttributeNode("id")) &&
												n.value === e
											)
												return [o];
											for (
												r = t.getElementsByName(e),
													i = 0;
												(o = r[i++]);

											)
												if (
													(n =
														o.getAttributeNode(
															"id"
														)) &&
													n.value === e
												)
													return [o];
										}
										return [];
									}
							  })),
						(b.find.TAG = h.getElementsByTagName
							? function (e, t) {
									return void 0 !== t.getElementsByTagName
										? t.getElementsByTagName(e)
										: h.qsa
										? t.querySelectorAll(e)
										: void 0;
							  }
							: function (e, t) {
									var n,
										i = [],
										r = 0,
										o = t.getElementsByTagName(e);
									if ("*" === e) {
										for (; (n = o[r++]); )
											1 === n.nodeType && i.push(n);
										return i;
									}
									return o;
							  }),
						(b.find.CLASS =
							h.getElementsByClassName &&
							function (e, t) {
								if (void 0 !== t.getElementsByClassName && x)
									return t.getElementsByClassName(e);
							}),
						(a = []),
						(m = []),
						(h.qsa = Y.test(T.querySelectorAll)) &&
							(le(function (e) {
								(s.appendChild(e).innerHTML =
									"<a id='" +
									C +
									"'></a><select id='" +
									C +
									"-\r\\' msallowcapture=''><option selected=''></option></select>"),
									e.querySelectorAll("[msallowcapture^='']")
										.length &&
										m.push("[*^$]=" + H + "*(?:''|\"\")"),
									e.querySelectorAll("[selected]").length ||
										m.push(
											"\\[" + H + "*(?:value|" + P + ")"
										),
									e.querySelectorAll("[id~=" + C + "-]")
										.length || m.push("~="),
									e.querySelectorAll(":checked").length ||
										m.push(":checked"),
									e.querySelectorAll("a#" + C + "+*")
										.length || m.push(".#.+[+~]");
							}),
							le(function (e) {
								e.innerHTML =
									"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
								var t = T.createElement("input");
								t.setAttribute("type", "hidden"),
									e.appendChild(t).setAttribute("name", "D"),
									e.querySelectorAll("[name=d]").length &&
										m.push("name" + H + "*[*^$|!~]?="),
									2 !==
										e.querySelectorAll(":enabled").length &&
										m.push(":enabled", ":disabled"),
									(s.appendChild(e).disabled = !0),
									2 !==
										e.querySelectorAll(":disabled")
											.length &&
										m.push(":enabled", ":disabled"),
									e.querySelectorAll("*,:x"),
									m.push(",.*:");
							})),
						(h.matchesSelector = Y.test(
							(u =
								s.matches ||
								s.webkitMatchesSelector ||
								s.mozMatchesSelector ||
								s.oMatchesSelector ||
								s.msMatchesSelector)
						)) &&
							le(function (e) {
								(h.disconnectedMatch = u.call(e, "*")),
									u.call(e, "[s!='']:x"),
									a.push("!=", F);
							}),
						(m = m.length && new RegExp(m.join("|"))),
						(a = a.length && new RegExp(a.join("|"))),
						(t = Y.test(s.compareDocumentPosition)),
						(v =
							t || Y.test(s.contains)
								? function (e, t) {
										var n =
												9 === e.nodeType
													? e.documentElement
													: e,
											i = t && t.parentNode;
										return (
											e === i ||
											!(
												!i ||
												1 !== i.nodeType ||
												!(n.contains
													? n.contains(i)
													: e.compareDocumentPosition &&
													  16 &
															e.compareDocumentPosition(
																i
															))
											)
										);
								  }
								: function (e, t) {
										if (t)
											for (; (t = t.parentNode); )
												if (t === e) return !0;
										return !1;
								  }),
						(A = t
							? function (e, t) {
									if (e === t) return (c = !0), 0;
									var n =
										!e.compareDocumentPosition -
										!t.compareDocumentPosition;
									return (
										n ||
										(1 &
											(n =
												(e.ownerDocument || e) ===
												(t.ownerDocument || t)
													? e.compareDocumentPosition(
															t
													  )
													: 1) ||
										(!h.sortDetached &&
											t.compareDocumentPosition(e) === n)
											? e === T ||
											  (e.ownerDocument === y && v(y, e))
												? -1
												: t === T ||
												  (t.ownerDocument === y &&
														v(y, t))
												? 1
												: l
												? L(l, e) - L(l, t)
												: 0
											: 4 & n
											? -1
											: 1)
									);
							  }
							: function (e, t) {
									if (e === t) return (c = !0), 0;
									var n,
										i = 0,
										r = e.parentNode,
										o = t.parentNode,
										s = [e],
										a = [t];
									if (!r || !o)
										return e === T
											? -1
											: t === T
											? 1
											: r
											? -1
											: o
											? 1
											: l
											? L(l, e) - L(l, t)
											: 0;
									if (r === o) return ue(e, t);
									for (n = e; (n = n.parentNode); )
										s.unshift(n);
									for (n = t; (n = n.parentNode); )
										a.unshift(n);
									for (; s[i] === a[i]; ) i++;
									return i
										? ue(s[i], a[i])
										: s[i] === y
										? -1
										: a[i] === y
										? 1
										: 0;
							  })),
					T
				);
			}),
		(oe.matches = function (e, t) {
			return oe(e, null, null, t);
		}),
		(oe.matchesSelector = function (e, t) {
			if (
				((e.ownerDocument || e) !== T && E(e),
				(t = t.replace(K, "='$1']")),
				h.matchesSelector &&
					x &&
					!D[t + " "] &&
					(!a || !a.test(t)) &&
					(!m || !m.test(t)))
			)
				try {
					var n = u.call(e, t);
					if (
						n ||
						h.disconnectedMatch ||
						(e.document && 11 !== e.document.nodeType)
					)
						return n;
				} catch (e) {}
			return 0 < oe(t, T, null, [e]).length;
		}),
		(oe.contains = function (e, t) {
			return (e.ownerDocument || e) !== T && E(e), v(e, t);
		}),
		(oe.attr = function (e, t) {
			(e.ownerDocument || e) !== T && E(e);
			var n = b.attrHandle[t.toLowerCase()],
				i =
					n && k.call(b.attrHandle, t.toLowerCase())
						? n(e, t, !x)
						: void 0;
			return void 0 !== i
				? i
				: h.attributes || !x
				? e.getAttribute(t)
				: (i = e.getAttributeNode(t)) && i.specified
				? i.value
				: null;
		}),
		(oe.escape = function (e) {
			return (e + "").replace(te, ne);
		}),
		(oe.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e);
		}),
		(oe.uniqueSort = function (e) {
			var t,
				n = [],
				i = 0,
				r = 0;
			if (
				((c = !h.detectDuplicates),
				(l = !h.sortStable && e.slice(0)),
				e.sort(A),
				c)
			) {
				for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
				for (; i--; ) e.splice(n[i], 1);
			}
			return (l = null), e;
		}),
		(o = oe.getText =
			function (e) {
				var t,
					n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent)
							return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
					} else if (3 === r || 4 === r) return e.nodeValue;
				} else for (; (t = e[i++]); ) n += o(t);
				return n;
			}),
		((b = oe.selectors =
			{
				cacheLength: 50,
				createPseudo: ae,
				match: z,
				attrHandle: {},
				find: {},
				relative: {
					">": { dir: "parentNode", first: !0 },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: !0 },
					"~": { dir: "previousSibling" },
				},
				preFilter: {
					ATTR: function (e) {
						return (
							(e[1] = e[1].replace(Z, ee)),
							(e[3] = (e[3] || e[4] || e[5] || "").replace(
								Z,
								ee
							)),
							"~=" === e[2] && (e[3] = " " + e[3] + " "),
							e.slice(0, 4)
						);
					},
					CHILD: function (e) {
						return (
							(e[1] = e[1].toLowerCase()),
							"nth" === e[1].slice(0, 3)
								? (e[3] || oe.error(e[0]),
								  (e[4] = +(e[4]
										? e[5] + (e[6] || 1)
										: 2 *
										  ("even" === e[3] || "odd" === e[3]))),
								  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
								: e[3] && oe.error(e[0]),
							e
						);
					},
					PSEUDO: function (e) {
						var t,
							n = !e[6] && e[2];
						return z.CHILD.test(e[0])
							? null
							: (e[3]
									? (e[2] = e[4] || e[5] || "")
									: n &&
									  $.test(n) &&
									  (t = p(n, !0)) &&
									  (t =
											n.indexOf(")", n.length - t) -
											n.length) &&
									  ((e[0] = e[0].slice(0, t)),
									  (e[2] = n.slice(0, t))),
							  e.slice(0, 3));
					},
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(Z, ee).toLowerCase();
						return "*" === e
							? function () {
									return !0;
							  }
							: function (e) {
									return (
										e.nodeName &&
										e.nodeName.toLowerCase() === t
									);
							  };
					},
					CLASS: function (e) {
						var t = d[e + " "];
						return (
							t ||
							((t = new RegExp(
								"(^|" + H + ")" + e + "(" + H + "|$)"
							)) &&
								d(e, function (e) {
									return t.test(
										("string" == typeof e.className &&
											e.className) ||
											(void 0 !== e.getAttribute &&
												e.getAttribute("class")) ||
											""
									);
								}))
						);
					},
					ATTR: function (n, i, r) {
						return function (e) {
							var t = oe.attr(e, n);
							return null == t
								? "!=" === i
								: !i ||
										((t += ""),
										"=" === i
											? t === r
											: "!=" === i
											? t !== r
											: "^=" === i
											? r && 0 === t.indexOf(r)
											: "*=" === i
											? r && -1 < t.indexOf(r)
											: "$=" === i
											? r && t.slice(-r.length) === r
											: "~=" === i
											? -1 <
											  (
													" " +
													t.replace(M, " ") +
													" "
											  ).indexOf(r)
											: "|=" === i &&
											  (t === r ||
													t.slice(0, r.length + 1) ===
														r + "-"));
						};
					},
					CHILD: function (p, e, t, g, m) {
						var v = "nth" !== p.slice(0, 3),
							y = "last" !== p.slice(-4),
							_ = "of-type" === e;
						return 1 === g && 0 === m
							? function (e) {
									return !!e.parentNode;
							  }
							: function (e, t, n) {
									var i,
										r,
										o,
										s,
										a,
										l,
										c =
											v !== y
												? "nextSibling"
												: "previousSibling",
										u = e.parentNode,
										f = _ && e.nodeName.toLowerCase(),
										d = !n && !_,
										h = !1;
									if (u) {
										if (v) {
											for (; c; ) {
												for (s = e; (s = s[c]); )
													if (
														_
															? s.nodeName.toLowerCase() ===
															  f
															: 1 === s.nodeType
													)
														return !1;
												l = c =
													"only" === p &&
													!l &&
													"nextSibling";
											}
											return !0;
										}
										if (
											((l = [
												y ? u.firstChild : u.lastChild,
											]),
											y && d)
										) {
											for (
												h =
													(a =
														(i =
															(r =
																(o =
																	(s = u)[
																		C
																	] ||
																	(s[C] =
																		{}))[
																	s.uniqueID
																] ||
																(o[s.uniqueID] =
																	{}))[p] ||
															[])[0] === S &&
														i[1]) && i[2],
													s = a && u.childNodes[a];
												(s =
													(++a && s && s[c]) ||
													(h = a = 0) ||
													l.pop());

											)
												if (
													1 === s.nodeType &&
													++h &&
													s === e
												) {
													r[p] = [S, a, h];
													break;
												}
										} else if (
											(d &&
												(h = a =
													(i =
														(r =
															(o =
																(s = e)[C] ||
																(s[C] = {}))[
																s.uniqueID
															] ||
															(o[s.uniqueID] =
																{}))[p] ||
														[])[0] === S && i[1]),
											!1 === h)
										)
											for (
												;
												(s =
													(++a && s && s[c]) ||
													(h = a = 0) ||
													l.pop()) &&
												((_
													? s.nodeName.toLowerCase() !==
													  f
													: 1 !== s.nodeType) ||
													!++h ||
													(d &&
														((r =
															(o =
																s[C] ||
																(s[C] = {}))[
																s.uniqueID
															] ||
															(o[s.uniqueID] =
																{}))[p] = [
															S,
															h,
														]),
													s !== e));

											);
										return (
											(h -= m) === g ||
											(h % g == 0 && 0 <= h / g)
										);
									}
							  };
					},
					PSEUDO: function (e, o) {
						var t,
							s =
								b.pseudos[e] ||
								b.setFilters[e.toLowerCase()] ||
								oe.error("unsupported pseudo: " + e);
						return s[C]
							? s(o)
							: 1 < s.length
							? ((t = [e, e, "", o]),
							  b.setFilters.hasOwnProperty(e.toLowerCase())
									? ae(function (e, t) {
											for (
												var n,
													i = s(e, o),
													r = i.length;
												r--;

											)
												e[(n = L(e, i[r]))] = !(t[n] =
													i[r]);
									  })
									: function (e) {
											return s(e, 0, t);
									  })
							: s;
					},
				},
				pseudos: {
					not: ae(function (e) {
						var i = [],
							r = [],
							a = f(e.replace(W, "$1"));
						return a[C]
							? ae(function (e, t, n, i) {
									for (
										var r,
											o = a(e, null, i, []),
											s = e.length;
										s--;

									)
										(r = o[s]) && (e[s] = !(t[s] = r));
							  })
							: function (e, t, n) {
									return (
										(i[0] = e),
										a(i, null, n, r),
										(i[0] = null),
										!r.pop()
									);
							  };
					}),
					has: ae(function (t) {
						return function (e) {
							return 0 < oe(t, e).length;
						};
					}),
					contains: ae(function (t) {
						return (
							(t = t.replace(Z, ee)),
							function (e) {
								return (
									-1 <
									(
										e.textContent ||
										e.innerText ||
										o(e)
									).indexOf(t)
								);
							}
						);
					}),
					lang: ae(function (n) {
						return (
							Q.test(n || "") ||
								oe.error("unsupported lang: " + n),
							(n = n.replace(Z, ee).toLowerCase()),
							function (e) {
								var t;
								do {
									if (
										(t = x
											? e.lang
											: e.getAttribute("xml:lang") ||
											  e.getAttribute("lang"))
									)
										return (
											(t = t.toLowerCase()) === n ||
											0 === t.indexOf(n + "-")
										);
								} while (
									(e = e.parentNode) &&
									1 === e.nodeType
								);
								return !1;
							}
						);
					}),
					target: function (e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id;
					},
					root: function (e) {
						return e === s;
					},
					focus: function (e) {
						return (
							e === T.activeElement &&
							(!T.hasFocus || T.hasFocus()) &&
							!!(e.type || e.href || ~e.tabIndex)
						);
					},
					enabled: he(!1),
					disabled: he(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return (
							("input" === t && !!e.checked) ||
							("option" === t && !!e.selected)
						);
					},
					selected: function (e) {
						return (
							e.parentNode && e.parentNode.selectedIndex,
							!0 === e.selected
						);
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function (e) {
						return !b.pseudos.empty(e);
					},
					header: function (e) {
						return X.test(e.nodeName);
					},
					input: function (e) {
						return V.test(e.nodeName);
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return (
							("input" === t && "button" === e.type) ||
							"button" === t
						);
					},
					text: function (e) {
						var t;
						return (
							"input" === e.nodeName.toLowerCase() &&
							"text" === e.type &&
							(null == (t = e.getAttribute("type")) ||
								"text" === t.toLowerCase())
						);
					},
					first: pe(function () {
						return [0];
					}),
					last: pe(function (e, t) {
						return [t - 1];
					}),
					eq: pe(function (e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: pe(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: pe(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: pe(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
						return e;
					}),
					gt: pe(function (e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
						return e;
					}),
				},
			}).pseudos.nth = b.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			b.pseudos[e] = fe(e);
		for (e in { submit: !0, reset: !0 }) b.pseudos[e] = de(e);
		function me() {}
		function ve(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i;
		}
		function ye(a, e, t) {
			var l = e.dir,
				c = e.next,
				u = c || l,
				f = t && "parentNode" === u,
				d = i++;
			return e.first
				? function (e, t, n) {
						for (; (e = e[l]); )
							if (1 === e.nodeType || f) return a(e, t, n);
						return !1;
				  }
				: function (e, t, n) {
						var i,
							r,
							o,
							s = [S, d];
						if (n) {
							for (; (e = e[l]); )
								if ((1 === e.nodeType || f) && a(e, t, n))
									return !0;
						} else
							for (; (e = e[l]); )
								if (1 === e.nodeType || f)
									if (
										((r =
											(o = e[C] || (e[C] = {}))[
												e.uniqueID
											] || (o[e.uniqueID] = {})),
										c && c === e.nodeName.toLowerCase())
									)
										e = e[l] || e;
									else {
										if (
											(i = r[u]) &&
											i[0] === S &&
											i[1] === d
										)
											return (s[2] = i[2]);
										if (((r[u] = s)[2] = a(e, t, n)))
											return !0;
									}
						return !1;
				  };
		}
		function _e(r) {
			return 1 < r.length
				? function (e, t, n) {
						for (var i = r.length; i--; )
							if (!r[i](e, t, n)) return !1;
						return !0;
				  }
				: r[0];
		}
		function be(e, t, n, i, r) {
			for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
				(o = e[a]) &&
					((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
			return s;
		}
		function we(h, p, g, m, v, e) {
			return (
				m && !m[C] && (m = we(m)),
				v && !v[C] && (v = we(v, e)),
				ae(function (e, t, n, i) {
					var r,
						o,
						s,
						a = [],
						l = [],
						c = t.length,
						u =
							e ||
							(function (e, t, n) {
								for (var i = 0, r = t.length; i < r; i++)
									oe(e, t[i], n);
								return n;
							})(p || "*", n.nodeType ? [n] : n, []),
						f = !h || (!e && p) ? u : be(u, a, h, n, i),
						d = g ? (v || (e ? h : c || m) ? [] : t) : f;
					if ((g && g(f, d, n, i), m))
						for (r = be(d, l), m(r, [], n, i), o = r.length; o--; )
							(s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
					if (e) {
						if (v || h) {
							if (v) {
								for (r = [], o = d.length; o--; )
									(s = d[o]) && r.push((f[o] = s));
								v(null, (d = []), r, i);
							}
							for (o = d.length; o--; )
								(s = d[o]) &&
									-1 < (r = v ? L(e, s) : a[o]) &&
									(e[r] = !(t[r] = s));
						}
					} else (d = be(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, i) : O.apply(t, d);
				})
			);
		}
		function Ee(e) {
			for (
				var r,
					t,
					n,
					i = e.length,
					o = b.relative[e[0].type],
					s = o || b.relative[" "],
					a = o ? 1 : 0,
					l = ye(
						function (e) {
							return e === r;
						},
						s,
						!0
					),
					c = ye(
						function (e) {
							return -1 < L(r, e);
						},
						s,
						!0
					),
					u = [
						function (e, t, n) {
							var i =
								(!o && (n || t !== w)) ||
								((r = t).nodeType ? l(e, t, n) : c(e, t, n));
							return (r = null), i;
						},
					];
				a < i;
				a++
			)
				if ((t = b.relative[e[a].type])) u = [ye(_e(u), t)];
				else {
					if (
						(t = b.filter[e[a].type].apply(null, e[a].matches))[C]
					) {
						for (n = ++a; n < i && !b.relative[e[n].type]; n++);
						return we(
							1 < a && _e(u),
							1 < a &&
								ve(
									e.slice(0, a - 1).concat({
										value: " " === e[a - 2].type ? "*" : "",
									})
								).replace(W, "$1"),
							t,
							a < n && Ee(e.slice(a, n)),
							n < i && Ee((e = e.slice(n))),
							n < i && ve(e)
						);
					}
					u.push(t);
				}
			return _e(u);
		}
		return (
			(me.prototype = b.filters = b.pseudos),
			(b.setFilters = new me()),
			(p = oe.tokenize =
				function (e, t) {
					var n,
						i,
						r,
						o,
						s,
						a,
						l,
						c = _[e + " "];
					if (c) return t ? 0 : c.slice(0);
					for (s = e, a = [], l = b.preFilter; s; ) {
						for (o in ((n && !(i = B.exec(s))) ||
							(i && (s = s.slice(i[0].length) || s),
							a.push((r = []))),
						(n = !1),
						(i = U.exec(s)) &&
							((n = i.shift()),
							r.push({ value: n, type: i[0].replace(W, " ") }),
							(s = s.slice(n.length))),
						b.filter))
							!(i = z[o].exec(s)) ||
								(l[o] && !(i = l[o](i))) ||
								((n = i.shift()),
								r.push({ value: n, type: o, matches: i }),
								(s = s.slice(n.length)));
						if (!n) break;
					}
					return t ? s.length : s ? oe.error(e) : _(e, a).slice(0);
				}),
			(f = oe.compile =
				function (e, t) {
					var n,
						m,
						v,
						y,
						_,
						i,
						r = [],
						o = [],
						s = D[e + " "];
					if (!s) {
						for (t || (t = p(e)), n = t.length; n--; )
							(s = Ee(t[n]))[C] ? r.push(s) : o.push(s);
						(s = D(
							e,
							((m = o),
							(y = 0 < (v = r).length),
							(_ = 0 < m.length),
							(i = function (e, t, n, i, r) {
								var o,
									s,
									a,
									l = 0,
									c = "0",
									u = e && [],
									f = [],
									d = w,
									h = e || (_ && b.find.TAG("*", r)),
									p = (S +=
										null == d ? 1 : Math.random() || 0.1),
									g = h.length;
								for (
									r && (w = t === T || t || r);
									c !== g && null != (o = h[c]);
									c++
								) {
									if (_ && o) {
										for (
											s = 0,
												t ||
													o.ownerDocument === T ||
													(E(o), (n = !x));
											(a = m[s++]);

										)
											if (a(o, t || T, n)) {
												i.push(o);
												break;
											}
										r && (S = p);
									}
									y && ((o = !a && o) && l--, e && u.push(o));
								}
								if (((l += c), y && c !== l)) {
									for (s = 0; (a = v[s++]); ) a(u, f, t, n);
									if (e) {
										if (0 < l)
											for (; c--; )
												u[c] ||
													f[c] ||
													(f[c] = N.call(i));
										f = be(f);
									}
									O.apply(i, f),
										r &&
											!e &&
											0 < f.length &&
											1 < l + v.length &&
											oe.uniqueSort(i);
								}
								return r && ((S = p), (w = d)), u;
							}),
							y ? ae(i) : i)
						)).selector = e;
					}
					return s;
				}),
			(g = oe.select =
				function (e, t, n, i) {
					var r,
						o,
						s,
						a,
						l,
						c = "function" == typeof e && e,
						u = !i && p((e = c.selector || e));
					if (((n = n || []), 1 === u.length)) {
						if (
							2 < (o = u[0] = u[0].slice(0)).length &&
							"ID" === (s = o[0]).type &&
							9 === t.nodeType &&
							x &&
							b.relative[o[1].type]
						) {
							if (
								!(t = (b.find.ID(
									s.matches[0].replace(Z, ee),
									t
								) || [])[0])
							)
								return n;
							c && (t = t.parentNode),
								(e = e.slice(o.shift().value.length));
						}
						for (
							r = z.needsContext.test(e) ? 0 : o.length;
							r-- && ((s = o[r]), !b.relative[(a = s.type)]);

						)
							if (
								(l = b.find[a]) &&
								(i = l(
									s.matches[0].replace(Z, ee),
									(J.test(o[0].type) && ge(t.parentNode)) || t
								))
							) {
								if ((o.splice(r, 1), !(e = i.length && ve(o))))
									return O.apply(n, i), n;
								break;
							}
					}
					return (
						(c || f(e, u))(
							i,
							t,
							!x,
							n,
							!t || (J.test(e) && ge(t.parentNode)) || t
						),
						n
					);
				}),
			(h.sortStable = C.split("").sort(A).join("") === C),
			(h.detectDuplicates = !!c),
			E(),
			(h.sortDetached = le(function (e) {
				return (
					1 & e.compareDocumentPosition(T.createElement("fieldset"))
				);
			})),
			le(function (e) {
				return (
					(e.innerHTML = "<a href='#'></a>"),
					"#" === e.firstChild.getAttribute("href")
				);
			}) ||
				ce("type|href|height|width", function (e, t, n) {
					if (!n)
						return e.getAttribute(
							t,
							"type" === t.toLowerCase() ? 1 : 2
						);
				}),
			(h.attributes &&
				le(function (e) {
					return (
						(e.innerHTML = "<input/>"),
						e.firstChild.setAttribute("value", ""),
						"" === e.firstChild.getAttribute("value")
					);
				})) ||
				ce("value", function (e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase())
						return e.defaultValue;
				}),
			le(function (e) {
				return null == e.getAttribute("disabled");
			}) ||
				ce(P, function (e, t, n) {
					var i;
					if (!n)
						return !0 === e[t]
							? t.toLowerCase()
							: (i = e.getAttributeNode(t)) && i.specified
							? i.value
							: null;
				}),
			oe
		);
	})(T);
	(C.find = b),
		(C.expr = b.selectors),
		(C.expr[":"] = C.expr.pseudos),
		(C.uniqueSort = C.unique = b.uniqueSort),
		(C.text = b.getText),
		(C.isXMLDoc = b.isXML),
		(C.contains = b.contains),
		(C.escapeSelector = b.escape);
	var w = function (e, t, n) {
			for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
					if (r && C(e).is(n)) break;
					i.push(e);
				}
			return i;
		},
		E = function (e, t) {
			for (var n = []; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n;
		},
		S = C.expr.match.needsContext;
	function D(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		k = /^.[^:#\[\.,]*$/;
	function N(e, n, i) {
		return C.isFunction(n)
			? C.grep(e, function (e, t) {
					return !!n.call(e, t, e) !== i;
			  })
			: n.nodeType
			? C.grep(e, function (e) {
					return (e === n) !== i;
			  })
			: "string" != typeof n
			? C.grep(e, function (e) {
					return -1 < r.call(n, e) !== i;
			  })
			: k.test(n)
			? C.filter(n, e, i)
			: ((n = C.filter(n, e)),
			  C.grep(e, function (e) {
					return -1 < r.call(n, e) !== i && 1 === e.nodeType;
			  }));
	}
	(C.filter = function (e, t, n) {
		var i = t[0];
		return (
			n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === i.nodeType
				? C.find.matchesSelector(i, e)
					? [i]
					: []
				: C.find.matches(
						e,
						C.grep(t, function (e) {
							return 1 === e.nodeType;
						})
				  )
		);
	}),
		C.fn.extend({
			find: function (e) {
				var t,
					n,
					i = this.length,
					r = this;
				if ("string" != typeof e)
					return this.pushStack(
						C(e).filter(function () {
							for (t = 0; t < i; t++)
								if (C.contains(r[t], this)) return !0;
						})
					);
				for (n = this.pushStack([]), t = 0; t < i; t++)
					C.find(e, r[t], n);
				return 1 < i ? C.uniqueSort(n) : n;
			},
			filter: function (e) {
				return this.pushStack(N(this, e || [], !1));
			},
			not: function (e) {
				return this.pushStack(N(this, e || [], !0));
			},
			is: function (e) {
				return !!N(
					this,
					"string" == typeof e && S.test(e) ? C(e) : e || [],
					!1
				).length;
			},
		});
	var I,
		O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((C.fn.init = function (e, t, n) {
		var i, r;
		if (!e) return this;
		if (((n = n || I), "string" == typeof e)) {
			if (
				!(i =
					"<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
						? [null, e, null]
						: O.exec(e)) ||
				(!i[1] && t)
			)
				return !t || t.jquery
					? (t || n).find(e)
					: this.constructor(t).find(e);
			if (i[1]) {
				if (
					((t = t instanceof C ? t[0] : t),
					C.merge(
						this,
						C.parseHTML(
							i[1],
							t && t.nodeType ? t.ownerDocument || t : x,
							!0
						)
					),
					A.test(i[1]) && C.isPlainObject(t))
				)
					for (i in t)
						C.isFunction(this[i])
							? this[i](t[i])
							: this.attr(i, t[i]);
				return this;
			}
			return (
				(r = x.getElementById(i[2])) &&
					((this[0] = r), (this.length = 1)),
				this
			);
		}
		return e.nodeType
			? ((this[0] = e), (this.length = 1), this)
			: C.isFunction(e)
			? void 0 !== n.ready
				? n.ready(e)
				: e(C)
			: C.makeArray(e, this);
	}).prototype = C.fn),
		(I = C(x));
	var j = /^(?:parents|prev(?:Until|All))/,
		L = { children: !0, contents: !0, next: !0, prev: !0 };
	function P(e, t) {
		for (; (e = e[t]) && 1 !== e.nodeType; );
		return e;
	}
	C.fn.extend({
		has: function (e) {
			var t = C(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (C.contains(this, t[e])) return !0;
			});
		},
		closest: function (e, t) {
			var n,
				i = 0,
				r = this.length,
				o = [],
				s = "string" != typeof e && C(e);
			if (!S.test(e))
				for (; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (
							n.nodeType < 11 &&
							(s
								? -1 < s.index(n)
								: 1 === n.nodeType &&
								  C.find.matchesSelector(n, e))
						) {
							o.push(n);
							break;
						}
			return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
		},
		index: function (e) {
			return e
				? "string" == typeof e
					? r.call(C(e), this[0])
					: r.call(this, e.jquery ? e[0] : e)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
		},
		addBack: function (e) {
			return this.add(
				null == e ? this.prevObject : this.prevObject.filter(e)
			);
		},
	}),
		C.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
					return w(e, "parentNode");
				},
				parentsUntil: function (e, t, n) {
					return w(e, "parentNode", n);
				},
				next: function (e) {
					return P(e, "nextSibling");
				},
				prev: function (e) {
					return P(e, "previousSibling");
				},
				nextAll: function (e) {
					return w(e, "nextSibling");
				},
				prevAll: function (e) {
					return w(e, "previousSibling");
				},
				nextUntil: function (e, t, n) {
					return w(e, "nextSibling", n);
				},
				prevUntil: function (e, t, n) {
					return w(e, "previousSibling", n);
				},
				siblings: function (e) {
					return E((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return E(e.firstChild);
				},
				contents: function (e) {
					return D(e, "iframe")
						? e.contentDocument
						: (D(e, "template") && (e = e.content || e),
						  C.merge([], e.childNodes));
				},
			},
			function (i, r) {
				C.fn[i] = function (e, t) {
					var n = C.map(this, r, e);
					return (
						"Until" !== i.slice(-5) && (t = e),
						t && "string" == typeof t && (n = C.filter(t, n)),
						1 < this.length &&
							(L[i] || C.uniqueSort(n), j.test(i) && n.reverse()),
						this.pushStack(n)
					);
				};
			}
		);
	var H = /[^\x20\t\r\n\f]+/g;
	function q(e) {
		return e;
	}
	function R(e) {
		throw e;
	}
	function F(e, t, n, i) {
		var r;
		try {
			e && C.isFunction((r = e.promise))
				? r.call(e).done(t).fail(n)
				: e && C.isFunction((r = e.then))
				? r.call(e, t, n)
				: t.apply(void 0, [e].slice(i));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}
	(C.Callbacks = function (i) {
		var e, n;
		i =
			"string" == typeof i
				? ((e = i),
				  (n = {}),
				  C.each(e.match(H) || [], function (e, t) {
						n[t] = !0;
				  }),
				  n)
				: C.extend({}, i);
		var r,
			t,
			o,
			s,
			a = [],
			l = [],
			c = -1,
			u = function () {
				for (s = s || i.once, o = r = !0; l.length; c = -1)
					for (t = l.shift(); ++c < a.length; )
						!1 === a[c].apply(t[0], t[1]) &&
							i.stopOnFalse &&
							((c = a.length), (t = !1));
				i.memory || (t = !1), (r = !1), s && (a = t ? [] : "");
			},
			f = {
				add: function () {
					return (
						a &&
							(t && !r && ((c = a.length - 1), l.push(t)),
							(function n(e) {
								C.each(e, function (e, t) {
									C.isFunction(t)
										? (i.unique && f.has(t)) || a.push(t)
										: t &&
										  t.length &&
										  "string" !== C.type(t) &&
										  n(t);
								});
							})(arguments),
							t && !r && u()),
						this
					);
				},
				remove: function () {
					return (
						C.each(arguments, function (e, t) {
							for (var n; -1 < (n = C.inArray(t, a, n)); )
								a.splice(n, 1), n <= c && c--;
						}),
						this
					);
				},
				has: function (e) {
					return e ? -1 < C.inArray(e, a) : 0 < a.length;
				},
				empty: function () {
					return a && (a = []), this;
				},
				disable: function () {
					return (s = l = []), (a = t = ""), this;
				},
				disabled: function () {
					return !a;
				},
				lock: function () {
					return (s = l = []), t || r || (a = t = ""), this;
				},
				locked: function () {
					return !!s;
				},
				fireWith: function (e, t) {
					return (
						s ||
							((t = [e, (t = t || []).slice ? t.slice() : t]),
							l.push(t),
							r || u()),
						this
					);
				},
				fire: function () {
					return f.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!o;
				},
			};
		return f;
	}),
		C.extend({
			Deferred: function (e) {
				var o = [
						[
							"notify",
							"progress",
							C.Callbacks("memory"),
							C.Callbacks("memory"),
							2,
						],
						[
							"resolve",
							"done",
							C.Callbacks("once memory"),
							C.Callbacks("once memory"),
							0,
							"resolved",
						],
						[
							"reject",
							"fail",
							C.Callbacks("once memory"),
							C.Callbacks("once memory"),
							1,
							"rejected",
						],
					],
					r = "pending",
					s = {
						state: function () {
							return r;
						},
						always: function () {
							return a.done(arguments).fail(arguments), this;
						},
						catch: function (e) {
							return s.then(null, e);
						},
						pipe: function () {
							var r = arguments;
							return C.Deferred(function (i) {
								C.each(o, function (e, t) {
									var n = C.isFunction(r[t[4]]) && r[t[4]];
									a[t[1]](function () {
										var e = n && n.apply(this, arguments);
										e && C.isFunction(e.promise)
											? e
													.promise()
													.progress(i.notify)
													.done(i.resolve)
													.fail(i.reject)
											: i[t[0] + "With"](
													this,
													n ? [e] : arguments
											  );
									});
								}),
									(r = null);
							}).promise();
						},
						then: function (t, n, i) {
							var l = 0;
							function c(r, o, s, a) {
								return function () {
									var n = this,
										i = arguments,
										e = function () {
											var e, t;
											if (!(r < l)) {
												if (
													(e = s.apply(n, i)) ===
													o.promise()
												)
													throw new TypeError(
														"Thenable self-resolution"
													);
												(t =
													e &&
													("object" == typeof e ||
														"function" ==
															typeof e) &&
													e.then),
													C.isFunction(t)
														? a
															? t.call(
																	e,
																	c(
																		l,
																		o,
																		q,
																		a
																	),
																	c(
																		l,
																		o,
																		R,
																		a
																	)
															  )
															: (l++,
															  t.call(
																	e,
																	c(
																		l,
																		o,
																		q,
																		a
																	),
																	c(
																		l,
																		o,
																		R,
																		a
																	),
																	c(
																		l,
																		o,
																		q,
																		o.notifyWith
																	)
															  ))
														: (s !== q &&
																((n = void 0),
																(i = [e])),
														  (a || o.resolveWith)(
																n,
																i
														  ));
											}
										},
										t = a
											? e
											: function () {
													try {
														e();
													} catch (e) {
														C.Deferred
															.exceptionHook &&
															C.Deferred.exceptionHook(
																e,
																t.stackTrace
															),
															l <= r + 1 &&
																(s !== R &&
																	((n =
																		void 0),
																	(i = [e])),
																o.rejectWith(
																	n,
																	i
																));
													}
											  };
									r
										? t()
										: (C.Deferred.getStackHook &&
												(t.stackTrace =
													C.Deferred.getStackHook()),
										  T.setTimeout(t));
								};
							}
							return C.Deferred(function (e) {
								o[0][3].add(
									c(
										0,
										e,
										C.isFunction(i) ? i : q,
										e.notifyWith
									)
								),
									o[1][3].add(
										c(0, e, C.isFunction(t) ? t : q)
									),
									o[2][3].add(
										c(0, e, C.isFunction(n) ? n : R)
									);
							}).promise();
						},
						promise: function (e) {
							return null != e ? C.extend(e, s) : s;
						},
					},
					a = {};
				return (
					C.each(o, function (e, t) {
						var n = t[2],
							i = t[5];
						(s[t[1]] = n.add),
							i &&
								n.add(
									function () {
										r = i;
									},
									o[3 - e][2].disable,
									o[0][2].lock
								),
							n.add(t[3].fire),
							(a[t[0]] = function () {
								return (
									a[t[0] + "With"](
										this === a ? void 0 : this,
										arguments
									),
									this
								);
							}),
							(a[t[0] + "With"] = n.fireWith);
					}),
					s.promise(a),
					e && e.call(a, a),
					a
				);
			},
			when: function (e) {
				var n = arguments.length,
					t = n,
					i = Array(t),
					r = a.call(arguments),
					o = C.Deferred(),
					s = function (t) {
						return function (e) {
							(i[t] = this),
								(r[t] =
									1 < arguments.length
										? a.call(arguments)
										: e),
								--n || o.resolveWith(i, r);
						};
					};
				if (
					n <= 1 &&
					(F(e, o.done(s(t)).resolve, o.reject, !n),
					"pending" === o.state() || C.isFunction(r[t] && r[t].then))
				)
					return o.then();
				for (; t--; ) F(r[t], s(t), o.reject);
				return o.promise();
			},
		});
	var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(C.Deferred.exceptionHook = function (e, t) {
		T.console &&
			T.console.warn &&
			e &&
			M.test(e.name) &&
			T.console.warn(
				"jQuery.Deferred exception: " + e.message,
				e.stack,
				t
			);
	}),
		(C.readyException = function (e) {
			T.setTimeout(function () {
				throw e;
			});
		});
	var W = C.Deferred();
	function B() {
		x.removeEventListener("DOMContentLoaded", B),
			T.removeEventListener("load", B),
			C.ready();
	}
	(C.fn.ready = function (e) {
		return (
			W.then(e).catch(function (e) {
				C.readyException(e);
			}),
			this
		);
	}),
		C.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --C.readyWait : C.isReady) ||
					((C.isReady = !0) !== e && 0 < --C.readyWait) ||
					W.resolveWith(x, [C]);
			},
		}),
		(C.ready.then = W.then),
		"complete" === x.readyState ||
		("loading" !== x.readyState && !x.documentElement.doScroll)
			? T.setTimeout(C.ready)
			: (x.addEventListener("DOMContentLoaded", B),
			  T.addEventListener("load", B));
	var U = function (e, t, n, i, r, o, s) {
			var a = 0,
				l = e.length,
				c = null == n;
			if ("object" === C.type(n))
				for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
			else if (
				void 0 !== i &&
				((r = !0),
				C.isFunction(i) || (s = !0),
				c &&
					(s
						? (t.call(e, i), (t = null))
						: ((c = t),
						  (t = function (e, t, n) {
								return c.call(C(e), n);
						  }))),
				t)
			)
				for (; a < l; a++)
					t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
		},
		K = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
		};
	function $() {
		this.expando = C.expando + $.uid++;
	}
	($.uid = 1),
		($.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return (
					t ||
						((t = {}),
						K(e) &&
							(e.nodeType
								? (e[this.expando] = t)
								: Object.defineProperty(e, this.expando, {
										value: t,
										configurable: !0,
								  }))),
					t
				);
			},
			set: function (e, t, n) {
				var i,
					r = this.cache(e);
				if ("string" == typeof t) r[C.camelCase(t)] = n;
				else for (i in t) r[C.camelCase(i)] = t[i];
				return r;
			},
			get: function (e, t) {
				return void 0 === t
					? this.cache(e)
					: e[this.expando] && e[this.expando][C.camelCase(t)];
			},
			access: function (e, t, n) {
				return void 0 === t ||
					(t && "string" == typeof t && void 0 === n)
					? this.get(e, t)
					: (this.set(e, t, n), void 0 !== n ? n : t);
			},
			remove: function (e, t) {
				var n,
					i = e[this.expando];
				if (void 0 !== i) {
					if (void 0 !== t) {
						Array.isArray(t)
							? (t = t.map(C.camelCase))
							: (t =
									(t = C.camelCase(t)) in i
										? [t]
										: t.match(H) || []),
							(n = t.length);
						for (; n--; ) delete i[t[n]];
					}
					(void 0 === t || C.isEmptyObject(i)) &&
						(e.nodeType
							? (e[this.expando] = void 0)
							: delete e[this.expando]);
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !C.isEmptyObject(t);
			},
		});
	var Q = new $(),
		z = new $(),
		V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		X = /[A-Z]/g;
	function Y(e, t, n) {
		var i, r;
		if (void 0 === n && 1 === e.nodeType)
			if (
				((i = "data-" + t.replace(X, "-$&").toLowerCase()),
				"string" == typeof (n = e.getAttribute(i)))
			) {
				try {
					n =
						"true" === (r = n) ||
						("false" !== r &&
							("null" === r
								? null
								: r === +r + ""
								? +r
								: V.test(r)
								? JSON.parse(r)
								: r));
				} catch (e) {}
				z.set(e, t, n);
			} else n = void 0;
		return n;
	}
	C.extend({
		hasData: function (e) {
			return z.hasData(e) || Q.hasData(e);
		},
		data: function (e, t, n) {
			return z.access(e, t, n);
		},
		removeData: function (e, t) {
			z.remove(e, t);
		},
		_data: function (e, t, n) {
			return Q.access(e, t, n);
		},
		_removeData: function (e, t) {
			Q.remove(e, t);
		},
	}),
		C.fn.extend({
			data: function (n, e) {
				var t,
					i,
					r,
					o = this[0],
					s = o && o.attributes;
				if (void 0 === n) {
					if (
						this.length &&
						((r = z.get(o)),
						1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
					) {
						for (t = s.length; t--; )
							s[t] &&
								0 === (i = s[t].name).indexOf("data-") &&
								((i = C.camelCase(i.slice(5))), Y(o, i, r[i]));
						Q.set(o, "hasDataAttrs", !0);
					}
					return r;
				}
				return "object" == typeof n
					? this.each(function () {
							z.set(this, n);
					  })
					: U(
							this,
							function (e) {
								var t;
								if (o && void 0 === e) {
									if (void 0 !== (t = z.get(o, n))) return t;
									if (void 0 !== (t = Y(o, n))) return t;
								} else
									this.each(function () {
										z.set(this, n, e);
									});
							},
							null,
							e,
							1 < arguments.length,
							null,
							!0
					  );
			},
			removeData: function (e) {
				return this.each(function () {
					z.remove(this, e);
				});
			},
		}),
		C.extend({
			queue: function (e, t, n) {
				var i;
				if (e)
					return (
						(t = (t || "fx") + "queue"),
						(i = Q.get(e, t)),
						n &&
							(!i || Array.isArray(n)
								? (i = Q.access(e, t, C.makeArray(n)))
								: i.push(n)),
						i || []
					);
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = C.queue(e, t),
					i = n.length,
					r = n.shift(),
					o = C._queueHooks(e, t);
				"inprogress" === r && ((r = n.shift()), i--),
					r &&
						("fx" === t && n.unshift("inprogress"),
						delete o.stop,
						r.call(
							e,
							function () {
								C.dequeue(e, t);
							},
							o
						)),
					!i && o && o.empty.fire();
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return (
					Q.get(e, n) ||
					Q.access(e, n, {
						empty: C.Callbacks("once memory").add(function () {
							Q.remove(e, [t + "queue", n]);
						}),
					})
				);
			},
		}),
		C.fn.extend({
			queue: function (t, n) {
				var e = 2;
				return (
					"string" != typeof t && ((n = t), (t = "fx"), e--),
					arguments.length < e
						? C.queue(this[0], t)
						: void 0 === n
						? this
						: this.each(function () {
								var e = C.queue(this, t, n);
								C._queueHooks(this, t),
									"fx" === t &&
										"inprogress" !== e[0] &&
										C.dequeue(this, t);
						  })
				);
			},
			dequeue: function (e) {
				return this.each(function () {
					C.dequeue(this, e);
				});
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", []);
			},
			promise: function (e, t) {
				var n,
					i = 1,
					r = C.Deferred(),
					o = this,
					s = this.length,
					a = function () {
						--i || r.resolveWith(o, [o]);
					};
				for (
					"string" != typeof e && ((t = e), (e = void 0)),
						e = e || "fx";
					s--;

				)
					(n = Q.get(o[s], e + "queueHooks")) &&
						n.empty &&
						(i++, n.empty.add(a));
				return a(), r.promise(t);
			},
		});
	var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		J = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
		Z = ["Top", "Right", "Bottom", "Left"],
		ee = function (e, t) {
			return (
				"none" === (e = t || e).style.display ||
				("" === e.style.display &&
					C.contains(e.ownerDocument, e) &&
					"none" === C.css(e, "display"))
			);
		},
		te = function (e, t, n, i) {
			var r,
				o,
				s = {};
			for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
			for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
			return r;
		};
	function ne(e, t, n, i) {
		var r,
			o = 1,
			s = 20,
			a = i
				? function () {
						return i.cur();
				  }
				: function () {
						return C.css(e, t, "");
				  },
			l = a(),
			c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
			u = (C.cssNumber[t] || ("px" !== c && +l)) && J.exec(C.css(e, t));
		if (u && u[3] !== c)
			for (
				c = c || u[3], n = n || [], u = +l || 1;
				(u /= o = o || ".5"),
					C.style(e, t, u + c),
					o !== (o = a() / l) && 1 !== o && --s;

			);
		return (
			n &&
				((u = +u || +l || 0),
				(r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
				i && ((i.unit = c), (i.start = u), (i.end = r))),
			r
		);
	}
	var ie = {};
	function re(e, t) {
		for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
			(i = e[o]).style &&
				((n = i.style.display),
				t
					? ("none" === n &&
							((r[o] = Q.get(i, "display") || null),
							r[o] || (i.style.display = "")),
					  "" === i.style.display &&
							ee(i) &&
							(r[o] =
								((f = c = l = void 0),
								(c = (a = i).ownerDocument),
								(u = a.nodeName),
								(f = ie[u]) ||
									((l = c.body.appendChild(
										c.createElement(u)
									)),
									(f = C.css(l, "display")),
									l.parentNode.removeChild(l),
									"none" === f && (f = "block"),
									(ie[u] = f)))))
					: "none" !== n &&
					  ((r[o] = "none"), Q.set(i, "display", n)));
		var a, l, c, u, f;
		for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
		return e;
	}
	C.fn.extend({
		show: function () {
			return re(this, !0);
		},
		hide: function () {
			return re(this);
		},
		toggle: function (e) {
			return "boolean" == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						ee(this) ? C(this).show() : C(this).hide();
				  });
		},
	});
	var oe = /^(?:checkbox|radio)$/i,
		se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ae = /^$|\/(?:java|ecma)script/i,
		le = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""],
		};
	function ce(e, t) {
		var n;
		return (
			(n =
				void 0 !== e.getElementsByTagName
					? e.getElementsByTagName(t || "*")
					: void 0 !== e.querySelectorAll
					? e.querySelectorAll(t || "*")
					: []),
			void 0 === t || (t && D(e, t)) ? C.merge([e], n) : n
		);
	}
	function ue(e, t) {
		for (var n = 0, i = e.length; n < i; n++)
			Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
	}
	(le.optgroup = le.option),
		(le.tbody = le.tfoot = le.colgroup = le.caption = le.thead),
		(le.th = le.td);
	var fe,
		de,
		he = /<|&#?\w+;/;
	function pe(e, t, n, i, r) {
		for (
			var o,
				s,
				a,
				l,
				c,
				u,
				f = t.createDocumentFragment(),
				d = [],
				h = 0,
				p = e.length;
			h < p;
			h++
		)
			if ((o = e[h]) || 0 === o)
				if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
				else if (he.test(o)) {
					for (
						s = s || f.appendChild(t.createElement("div")),
							a = (se.exec(o) || ["", ""])[1].toLowerCase(),
							l = le[a] || le._default,
							s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
							u = l[0];
						u--;

					)
						s = s.lastChild;
					C.merge(d, s.childNodes),
						((s = f.firstChild).textContent = "");
				} else d.push(t.createTextNode(o));
		for (f.textContent = "", h = 0; (o = d[h++]); )
			if (i && -1 < C.inArray(o, i)) r && r.push(o);
			else if (
				((c = C.contains(o.ownerDocument, o)),
				(s = ce(f.appendChild(o), "script")),
				c && ue(s),
				n)
			)
				for (u = 0; (o = s[u++]); ) ae.test(o.type || "") && n.push(o);
		return f;
	}
	(fe = x.createDocumentFragment().appendChild(x.createElement("div"))),
		(de = x.createElement("input")).setAttribute("type", "radio"),
		de.setAttribute("checked", "checked"),
		de.setAttribute("name", "t"),
		fe.appendChild(de),
		(m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
		(fe.innerHTML = "<textarea>x</textarea>"),
		(m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue);
	var ge = x.documentElement,
		me = /^key/,
		ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ye = /^([^.]*)(?:\.(.+)|)/;
	function _e() {
		return !0;
	}
	function be() {
		return !1;
	}
	function we() {
		try {
			return x.activeElement;
		} catch (e) {}
	}
	function Ee(e, t, n, i, r, o) {
		var s, a;
		if ("object" == typeof t) {
			for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
				Ee(e, a, n, i, t[a], o);
			return e;
		}
		if (
			(null == i && null == r
				? ((r = n), (i = n = void 0))
				: null == r &&
				  ("string" == typeof n
						? ((r = i), (i = void 0))
						: ((r = i), (i = n), (n = void 0))),
			!1 === r)
		)
			r = be;
		else if (!r) return e;
		return (
			1 === o &&
				((s = r),
				((r = function (e) {
					return C().off(e), s.apply(this, arguments);
				}).guid = s.guid || (s.guid = C.guid++))),
			e.each(function () {
				C.event.add(this, t, r, i, n);
			})
		);
	}
	(C.event = {
		global: {},
		add: function (t, e, n, i, r) {
			var o,
				s,
				a,
				l,
				c,
				u,
				f,
				d,
				h,
				p,
				g,
				m = Q.get(t);
			if (m)
				for (
					n.handler && ((n = (o = n).handler), (r = o.selector)),
						r && C.find.matchesSelector(ge, r),
						n.guid || (n.guid = C.guid++),
						(l = m.events) || (l = m.events = {}),
						(s = m.handle) ||
							(s = m.handle =
								function (e) {
									return void 0 !== C &&
										C.event.triggered !== e.type
										? C.event.dispatch.apply(t, arguments)
										: void 0;
								}),
						c = (e = (e || "").match(H) || [""]).length;
					c--;

				)
					(h = g = (a = ye.exec(e[c]) || [])[1]),
						(p = (a[2] || "").split(".").sort()),
						h &&
							((f = C.event.special[h] || {}),
							(h = (r ? f.delegateType : f.bindType) || h),
							(f = C.event.special[h] || {}),
							(u = C.extend(
								{
									type: h,
									origType: g,
									data: i,
									handler: n,
									guid: n.guid,
									selector: r,
									needsContext:
										r && C.expr.match.needsContext.test(r),
									namespace: p.join("."),
								},
								o
							)),
							(d = l[h]) ||
								(((d = l[h] = []).delegateCount = 0),
								(f.setup && !1 !== f.setup.call(t, i, p, s)) ||
									(t.addEventListener &&
										t.addEventListener(h, s))),
							f.add &&
								(f.add.call(t, u),
								u.handler.guid || (u.handler.guid = n.guid)),
							r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
							(C.event.global[h] = !0));
		},
		remove: function (e, t, n, i, r) {
			var o,
				s,
				a,
				l,
				c,
				u,
				f,
				d,
				h,
				p,
				g,
				m = Q.hasData(e) && Q.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(H) || [""]).length; c--; )
					if (
						((h = g = (a = ye.exec(t[c]) || [])[1]),
						(p = (a[2] || "").split(".").sort()),
						h)
					) {
						for (
							f = C.event.special[h] || {},
								d =
									l[
										(h =
											(i ? f.delegateType : f.bindType) ||
											h)
									] || [],
								a =
									a[2] &&
									new RegExp(
										"(^|\\.)" +
											p.join("\\.(?:.*\\.|)") +
											"(\\.|$)"
									),
								s = o = d.length;
							o--;

						)
							(u = d[o]),
								(!r && g !== u.origType) ||
									(n && n.guid !== u.guid) ||
									(a && !a.test(u.namespace)) ||
									(i &&
										i !== u.selector &&
										("**" !== i || !u.selector)) ||
									(d.splice(o, 1),
									u.selector && d.delegateCount--,
									f.remove && f.remove.call(e, u));
						s &&
							!d.length &&
							((f.teardown &&
								!1 !== f.teardown.call(e, p, m.handle)) ||
								C.removeEvent(e, h, m.handle),
							delete l[h]);
					} else for (h in l) C.event.remove(e, h + t[c], n, i, !0);
				C.isEmptyObject(l) && Q.remove(e, "handle events");
			}
		},
		dispatch: function (e) {
			var t,
				n,
				i,
				r,
				o,
				s,
				a = C.event.fix(e),
				l = new Array(arguments.length),
				c = (Q.get(this, "events") || {})[a.type] || [],
				u = C.event.special[a.type] || {};
			for (l[0] = a, t = 1; t < arguments.length; t++)
				l[t] = arguments[t];
			if (
				((a.delegateTarget = this),
				!u.preDispatch || !1 !== u.preDispatch.call(this, a))
			) {
				for (
					s = C.event.handlers.call(this, a, c), t = 0;
					(r = s[t++]) && !a.isPropagationStopped();

				)
					for (
						a.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) &&
						!a.isImmediatePropagationStopped();

					)
						(a.rnamespace && !a.rnamespace.test(o.namespace)) ||
							((a.handleObj = o),
							(a.data = o.data),
							void 0 !==
								(i = (
									(C.event.special[o.origType] || {})
										.handle || o.handler
								).apply(r.elem, l)) &&
								!1 === (a.result = i) &&
								(a.preventDefault(), a.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, a), a.result;
			}
		},
		handlers: function (e, t) {
			var n,
				i,
				r,
				o,
				s,
				a = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (
						1 === c.nodeType &&
						("click" !== e.type || !0 !== c.disabled)
					) {
						for (o = [], s = {}, n = 0; n < l; n++)
							void 0 === s[(r = (i = t[n]).selector + " ")] &&
								(s[r] = i.needsContext
									? -1 < C(r, this).index(c)
									: C.find(r, this, null, [c]).length),
								s[r] && o.push(i);
						o.length && a.push({ elem: c, handlers: o });
					}
			return (
				(c = this),
				l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
				a
			);
		},
		addProp: function (t, e) {
			Object.defineProperty(C.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: C.isFunction(e)
					? function () {
							if (this.originalEvent)
								return e(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent)
								return this.originalEvent[t];
					  },
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e,
					});
				},
			});
		},
		fix: function (e) {
			return e[C.expando] ? e : new C.Event(e);
		},
		special: {
			load: { noBubble: !0 },
			focus: {
				trigger: function () {
					if (this !== we() && this.focus) return this.focus(), !1;
				},
				delegateType: "focusin",
			},
			blur: {
				trigger: function () {
					if (this === we() && this.blur) return this.blur(), !1;
				},
				delegateType: "focusout",
			},
			click: {
				trigger: function () {
					if (
						"checkbox" === this.type &&
						this.click &&
						D(this, "input")
					)
						return this.click(), !1;
				},
				_default: function (e) {
					return D(e.target, "a");
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result &&
						e.originalEvent &&
						(e.originalEvent.returnValue = e.result);
				},
			},
		},
	}),
		(C.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
		(C.Event = function (e, t) {
			return this instanceof C.Event
				? (e && e.type
						? ((this.originalEvent = e),
						  (this.type = e.type),
						  (this.isDefaultPrevented =
								e.defaultPrevented ||
								(void 0 === e.defaultPrevented &&
									!1 === e.returnValue)
									? _e
									: be),
						  (this.target =
								e.target && 3 === e.target.nodeType
									? e.target.parentNode
									: e.target),
						  (this.currentTarget = e.currentTarget),
						  (this.relatedTarget = e.relatedTarget))
						: (this.type = e),
				  t && C.extend(this, t),
				  (this.timeStamp = (e && e.timeStamp) || C.now()),
				  void (this[C.expando] = !0))
				: new C.Event(e, t);
		}),
		(C.Event.prototype = {
			constructor: C.Event,
			isDefaultPrevented: be,
			isPropagationStopped: be,
			isImmediatePropagationStopped: be,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = _e),
					e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = _e),
					e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = _e),
					e && !this.isSimulated && e.stopImmediatePropagation(),
					this.stopPropagation();
			},
		}),
		C.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function (e) {
					var t = e.button;
					return null == e.which && me.test(e.type)
						? null != e.charCode
							? e.charCode
							: e.keyCode
						: !e.which && void 0 !== t && ve.test(e.type)
						? 1 & t
							? 1
							: 2 & t
							? 3
							: 4 & t
							? 2
							: 0
						: e.which;
				},
			},
			C.event.addProp
		),
		C.each(
			{
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout",
			},
			function (e, r) {
				C.event.special[e] = {
					delegateType: r,
					bindType: r,
					handle: function (e) {
						var t,
							n = e.relatedTarget,
							i = e.handleObj;
						return (
							(n && (n === this || C.contains(this, n))) ||
								((e.type = i.origType),
								(t = i.handler.apply(this, arguments)),
								(e.type = r)),
							t
						);
					},
				};
			}
		),
		C.fn.extend({
			on: function (e, t, n, i) {
				return Ee(this, e, t, n, i);
			},
			one: function (e, t, n, i) {
				return Ee(this, e, t, n, i, 1);
			},
			off: function (e, t, n) {
				var i, r;
				if (e && e.preventDefault && e.handleObj)
					return (
						(i = e.handleObj),
						C(e.delegateTarget).off(
							i.namespace
								? i.origType + "." + i.namespace
								: i.origType,
							i.selector,
							i.handler
						),
						this
					);
				if ("object" == typeof e) {
					for (r in e) this.off(r, t, e[r]);
					return this;
				}
				return (
					(!1 !== t && "function" != typeof t) ||
						((n = t), (t = void 0)),
					!1 === n && (n = be),
					this.each(function () {
						C.event.remove(this, e, n, t);
					})
				);
			},
		});
	var Te =
			/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		xe = /<script|<style|<link/i,
		Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Se = /^true\/(.*)/,
		De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function Ae(e, t) {
		return (
			(D(e, "table") &&
				D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
				C(">tbody", e)[0]) ||
			e
		);
	}
	function ke(e) {
		return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
	}
	function Ne(e) {
		var t = Se.exec(e.type);
		return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
	}
	function Ie(e, t) {
		var n, i, r, o, s, a, l, c;
		if (1 === t.nodeType) {
			if (
				Q.hasData(e) &&
				((o = Q.access(e)), (s = Q.set(t, o)), (c = o.events))
			)
				for (r in (delete s.handle, (s.events = {}), c))
					for (n = 0, i = c[r].length; n < i; n++)
						C.event.add(t, r, c[r][n]);
			z.hasData(e) &&
				((a = z.access(e)), (l = C.extend({}, a)), z.set(t, l));
		}
	}
	function Oe(n, i, r, o) {
		i = g.apply([], i);
		var e,
			t,
			s,
			a,
			l,
			c,
			u = 0,
			f = n.length,
			d = f - 1,
			h = i[0],
			p = C.isFunction(h);
		if (p || (1 < f && "string" == typeof h && !m.checkClone && Ce.test(h)))
			return n.each(function (e) {
				var t = n.eq(e);
				p && (i[0] = h.call(this, e, t.html())), Oe(t, i, r, o);
			});
		if (
			f &&
			((t = (e = pe(i, n[0].ownerDocument, !1, n, o)).firstChild),
			1 === e.childNodes.length && (e = t),
			t || o)
		) {
			for (a = (s = C.map(ce(e, "script"), ke)).length; u < f; u++)
				(l = e),
					u !== d &&
						((l = C.clone(l, !0, !0)),
						a && C.merge(s, ce(l, "script"))),
					r.call(n[u], l, u);
			if (a)
				for (
					c = s[s.length - 1].ownerDocument, C.map(s, Ne), u = 0;
					u < a;
					u++
				)
					(l = s[u]),
						ae.test(l.type || "") &&
							!Q.access(l, "globalEval") &&
							C.contains(c, l) &&
							(l.src
								? C._evalUrl && C._evalUrl(l.src)
								: v(l.textContent.replace(De, ""), c));
		}
		return n;
	}
	function je(e, t, n) {
		for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
			n || 1 !== i.nodeType || C.cleanData(ce(i)),
				i.parentNode &&
					(n && C.contains(i.ownerDocument, i) && ue(ce(i, "script")),
					i.parentNode.removeChild(i));
		return e;
	}
	C.extend({
		htmlPrefilter: function (e) {
			return e.replace(Te, "<$1></$2>");
		},
		clone: function (e, t, n) {
			var i,
				r,
				o,
				s,
				a,
				l,
				c,
				u = e.cloneNode(!0),
				f = C.contains(e.ownerDocument, e);
			if (
				!(
					m.noCloneChecked ||
					(1 !== e.nodeType && 11 !== e.nodeType) ||
					C.isXMLDoc(e)
				)
			)
				for (s = ce(u), i = 0, r = (o = ce(e)).length; i < r; i++)
					(a = o[i]),
						(l = s[i]),
						void 0,
						"input" === (c = l.nodeName.toLowerCase()) &&
						oe.test(a.type)
							? (l.checked = a.checked)
							: ("input" !== c && "textarea" !== c) ||
							  (l.defaultValue = a.defaultValue);
			if (t)
				if (n)
					for (
						o = o || ce(e), s = s || ce(u), i = 0, r = o.length;
						i < r;
						i++
					)
						Ie(o[i], s[i]);
				else Ie(e, u);
			return (
				0 < (s = ce(u, "script")).length &&
					ue(s, !f && ce(e, "script")),
				u
			);
		},
		cleanData: function (e) {
			for (
				var t, n, i, r = C.event.special, o = 0;
				void 0 !== (n = e[o]);
				o++
			)
				if (K(n)) {
					if ((t = n[Q.expando])) {
						if (t.events)
							for (i in t.events)
								r[i]
									? C.event.remove(n, i)
									: C.removeEvent(n, i, t.handle);
						n[Q.expando] = void 0;
					}
					n[z.expando] && (n[z.expando] = void 0);
				}
		},
	}),
		C.fn.extend({
			detach: function (e) {
				return je(this, e, !0);
			},
			remove: function (e) {
				return je(this, e);
			},
			text: function (e) {
				return U(
					this,
					function (e) {
						return void 0 === e
							? C.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType &&
										11 !== this.nodeType &&
										9 !== this.nodeType) ||
										(this.textContent = e);
							  });
					},
					null,
					e,
					arguments.length
				);
			},
			append: function () {
				return Oe(this, arguments, function (e) {
					(1 !== this.nodeType &&
						11 !== this.nodeType &&
						9 !== this.nodeType) ||
						Ae(this, e).appendChild(e);
				});
			},
			prepend: function () {
				return Oe(this, arguments, function (e) {
					if (
						1 === this.nodeType ||
						11 === this.nodeType ||
						9 === this.nodeType
					) {
						var t = Ae(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function () {
				return Oe(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function () {
				return Oe(this, arguments, function (e) {
					this.parentNode &&
						this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++)
					1 === e.nodeType &&
						(C.cleanData(ce(e, !1)), (e.textContent = ""));
				return this;
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return C.clone(this, e, t);
					})
				);
			},
			html: function (e) {
				return U(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							i = this.length;
						if (void 0 === e && 1 === t.nodeType)
							return t.innerHTML;
						if (
							"string" == typeof e &&
							!xe.test(e) &&
							!le[(se.exec(e) || ["", ""])[1].toLowerCase()]
						) {
							e = C.htmlPrefilter(e);
							try {
								for (; n < i; n++)
									1 === (t = this[n] || {}).nodeType &&
										(C.cleanData(ce(t, !1)),
										(t.innerHTML = e));
								t = 0;
							} catch (e) {}
						}
						t && this.empty().append(e);
					},
					null,
					e,
					arguments.length
				);
			},
			replaceWith: function () {
				var n = [];
				return Oe(
					this,
					arguments,
					function (e) {
						var t = this.parentNode;
						C.inArray(this, n) < 0 &&
							(C.cleanData(ce(this)),
							t && t.replaceChild(e, this));
					},
					n
				);
			},
		}),
		C.each(
			{
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith",
			},
			function (e, s) {
				C.fn[e] = function (e) {
					for (
						var t, n = [], i = C(e), r = i.length - 1, o = 0;
						o <= r;
						o++
					)
						(t = o === r ? this : this.clone(!0)),
							C(i[o])[s](t),
							l.apply(n, t.get());
					return this.pushStack(n);
				};
			}
		);
	var Le = /^margin/,
		Pe = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
		He = function (e) {
			var t = e.ownerDocument.defaultView;
			return (t && t.opener) || (t = T), t.getComputedStyle(e);
		};
	function qe(e, t, n) {
		var i,
			r,
			o,
			s,
			a = e.style;
		return (
			(n = n || He(e)) &&
				("" !== (s = n.getPropertyValue(t) || n[t]) ||
					C.contains(e.ownerDocument, e) ||
					(s = C.style(e, t)),
				!m.pixelMarginRight() &&
					Pe.test(s) &&
					Le.test(t) &&
					((i = a.width),
					(r = a.minWidth),
					(o = a.maxWidth),
					(a.minWidth = a.maxWidth = a.width = s),
					(s = n.width),
					(a.width = i),
					(a.minWidth = r),
					(a.maxWidth = o))),
			void 0 !== s ? s + "" : s
		);
	}
	function Re(e, t) {
		return {
			get: function () {
				return e()
					? void delete this.get
					: (this.get = t).apply(this, arguments);
			},
		};
	}
	!(function () {
		function e() {
			if (s) {
				(s.style.cssText =
					"box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
					(s.innerHTML = ""),
					ge.appendChild(o);
				var e = T.getComputedStyle(s);
				(t = "1%" !== e.top),
					(r = "2px" === e.marginLeft),
					(n = "4px" === e.width),
					(s.style.marginRight = "50%"),
					(i = "4px" === e.marginRight),
					ge.removeChild(o),
					(s = null);
			}
		}
		var t,
			n,
			i,
			r,
			o = x.createElement("div"),
			s = x.createElement("div");
		s.style &&
			((s.style.backgroundClip = "content-box"),
			(s.cloneNode(!0).style.backgroundClip = ""),
			(m.clearCloneStyle = "content-box" === s.style.backgroundClip),
			(o.style.cssText =
				"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
			o.appendChild(s),
			C.extend(m, {
				pixelPosition: function () {
					return e(), t;
				},
				boxSizingReliable: function () {
					return e(), n;
				},
				pixelMarginRight: function () {
					return e(), i;
				},
				reliableMarginLeft: function () {
					return e(), r;
				},
			}));
	})();
	var Fe = /^(none|table(?!-c[ea]).+)/,
		Me = /^--/,
		We = { position: "absolute", visibility: "hidden", display: "block" },
		Be = { letterSpacing: "0", fontWeight: "400" },
		Ue = ["Webkit", "Moz", "ms"],
		Ke = x.createElement("div").style;
	function $e(e) {
		var t = C.cssProps[e];
		return (
			t ||
				(t = C.cssProps[e] =
					(function (e) {
						if (e in Ke) return e;
						for (
							var t = e[0].toUpperCase() + e.slice(1),
								n = Ue.length;
							n--;

						)
							if ((e = Ue[n] + t) in Ke) return e;
					})(e) || e),
			t
		);
	}
	function Qe(e, t, n) {
		var i = J.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
	}
	function ze(e, t, n, i, r) {
		var o,
			s = 0;
		for (
			o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
			o < 4;
			o += 2
		)
			"margin" === n && (s += C.css(e, n + Z[o], !0, r)),
				i
					? ("content" === n &&
							(s -= C.css(e, "padding" + Z[o], !0, r)),
					  "margin" !== n &&
							(s -= C.css(e, "border" + Z[o] + "Width", !0, r)))
					: ((s += C.css(e, "padding" + Z[o], !0, r)),
					  "padding" !== n &&
							(s += C.css(e, "border" + Z[o] + "Width", !0, r)));
		return s;
	}
	function Ve(e, t, n) {
		var i,
			r = He(e),
			o = qe(e, t, r),
			s = "border-box" === C.css(e, "boxSizing", !1, r);
		return Pe.test(o)
			? o
			: ((i = s && (m.boxSizingReliable() || o === e.style[t])),
			  "auto" === o &&
					(o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
			  (o = parseFloat(o) || 0) +
					ze(e, t, n || (s ? "border" : "content"), i, r) +
					"px");
	}
	function Xe(e, t, n, i, r) {
		return new Xe.prototype.init(e, t, n, i, r);
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = qe(e, "opacity");
						return "" === n ? "1" : n;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: { float: "cssFloat" },
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r,
					o,
					s,
					a = C.camelCase(t),
					l = Me.test(t),
					c = e.style;
				return (
					l || (t = $e(a)),
					(s = C.cssHooks[t] || C.cssHooks[a]),
					void 0 === n
						? s && "get" in s && void 0 !== (r = s.get(e, !1, i))
							? r
							: c[t]
						: ("string" === (o = typeof n) &&
								(r = J.exec(n)) &&
								r[1] &&
								((n = ne(e, t, r)), (o = "number")),
						  void (
								null != n &&
								n == n &&
								("number" === o &&
									(n +=
										(r && r[3]) ||
										(C.cssNumber[a] ? "" : "px")),
								m.clearCloneStyle ||
									"" !== n ||
									0 !== t.indexOf("background") ||
									(c[t] = "inherit"),
								(s &&
									"set" in s &&
									void 0 === (n = s.set(e, n, i))) ||
									(l ? c.setProperty(t, n) : (c[t] = n)))
						  ))
				);
			}
		},
		css: function (e, t, n, i) {
			var r,
				o,
				s,
				a = C.camelCase(t);
			return (
				Me.test(t) || (t = $e(a)),
				(s = C.cssHooks[t] || C.cssHooks[a]) &&
					"get" in s &&
					(r = s.get(e, !0, n)),
				void 0 === r && (r = qe(e, t, i)),
				"normal" === r && t in Be && (r = Be[t]),
				"" === n || n
					? ((o = parseFloat(r)),
					  !0 === n || isFinite(o) ? o || 0 : r)
					: r
			);
		},
	}),
		C.each(["height", "width"], function (e, s) {
			C.cssHooks[s] = {
				get: function (e, t, n) {
					if (t)
						return !Fe.test(C.css(e, "display")) ||
							(e.getClientRects().length &&
								e.getBoundingClientRect().width)
							? Ve(e, s, n)
							: te(e, We, function () {
									return Ve(e, s, n);
							  });
				},
				set: function (e, t, n) {
					var i,
						r = n && He(e),
						o =
							n &&
							ze(
								e,
								s,
								n,
								"border-box" === C.css(e, "boxSizing", !1, r),
								r
							);
					return (
						o &&
							(i = J.exec(t)) &&
							"px" !== (i[3] || "px") &&
							((e.style[s] = t), (t = C.css(e, s))),
						Qe(0, t, o)
					);
				},
			};
		}),
		(C.cssHooks.marginLeft = Re(m.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(qe(e, "marginLeft")) ||
						e.getBoundingClientRect().left -
							te(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left;
							})) + "px"
				);
		})),
		C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
			(C.cssHooks[r + o] = {
				expand: function (e) {
					for (
						var t = 0,
							n = {},
							i = "string" == typeof e ? e.split(" ") : [e];
						t < 4;
						t++
					)
						n[r + Z[t] + o] = i[t] || i[t - 2] || i[0];
					return n;
				},
			}),
				Le.test(r) || (C.cssHooks[r + o].set = Qe);
		}),
		C.fn.extend({
			css: function (e, t) {
				return U(
					this,
					function (e, t, n) {
						var i,
							r,
							o = {},
							s = 0;
						if (Array.isArray(t)) {
							for (i = He(e), r = t.length; s < r; s++)
								o[t[s]] = C.css(e, t[s], !1, i);
							return o;
						}
						return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
					},
					e,
					t,
					1 < arguments.length
				);
			},
		}),
		(((C.Tween = Xe).prototype = {
			constructor: Xe,
			init: function (e, t, n, i, r, o) {
				(this.elem = e),
					(this.prop = n),
					(this.easing = r || C.easing._default),
					(this.options = t),
					(this.start = this.now = this.cur()),
					(this.end = i),
					(this.unit = o || (C.cssNumber[n] ? "" : "px"));
			},
			cur: function () {
				var e = Xe.propHooks[this.prop];
				return e && e.get
					? e.get(this)
					: Xe.propHooks._default.get(this);
			},
			run: function (e) {
				var t,
					n = Xe.propHooks[this.prop];
				return (
					this.options.duration
						? (this.pos = t =
								C.easing[this.easing](
									e,
									this.options.duration * e,
									0,
									1,
									this.options.duration
								))
						: (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step &&
						this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : Xe.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = Xe.prototype),
		((Xe.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType ||
						(null != e.elem[e.prop] && null == e.elem.style[e.prop])
						? e.elem[e.prop]
						: (t = C.css(e.elem, e.prop, "")) && "auto" !== t
						? t
						: 0;
				},
				set: function (e) {
					C.fx.step[e.prop]
						? C.fx.step[e.prop](e)
						: 1 !== e.elem.nodeType ||
						  (null == e.elem.style[C.cssProps[e.prop]] &&
								!C.cssHooks[e.prop])
						? (e.elem[e.prop] = e.now)
						: C.style(e.elem, e.prop, e.now + e.unit);
				},
			},
		}).scrollTop = Xe.propHooks.scrollLeft =
			{
				set: function (e) {
					e.elem.nodeType &&
						e.elem.parentNode &&
						(e.elem[e.prop] = e.now);
				},
			}),
		(C.easing = {
			linear: function (e) {
				return e;
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			},
			_default: "swing",
		}),
		(C.fx = Xe.prototype.init),
		(C.fx.step = {});
	var Ye,
		Ge,
		Je,
		Ze,
		et = /^(?:toggle|show|hide)$/,
		tt = /queueHooks$/;
	function nt() {
		Ge &&
			(!1 === x.hidden && T.requestAnimationFrame
				? T.requestAnimationFrame(nt)
				: T.setTimeout(nt, C.fx.interval),
			C.fx.tick());
	}
	function it() {
		return (
			T.setTimeout(function () {
				Ye = void 0;
			}),
			(Ye = C.now())
		);
	}
	function rt(e, t) {
		var n,
			i = 0,
			r = { height: e };
		for (t = t ? 1 : 0; i < 4; i += 2 - t)
			r["margin" + (n = Z[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r;
	}
	function ot(e, t, n) {
		for (
			var i,
				r = (st.tweeners[t] || []).concat(st.tweeners["*"]),
				o = 0,
				s = r.length;
			o < s;
			o++
		)
			if ((i = r[o].call(n, t, e))) return i;
	}
	function st(o, e, t) {
		var n,
			s,
			i = 0,
			r = st.prefilters.length,
			a = C.Deferred().always(function () {
				delete l.elem;
			}),
			l = function () {
				if (s) return !1;
				for (
					var e = Ye || it(),
						t = Math.max(0, c.startTime + c.duration - e),
						n = 1 - (t / c.duration || 0),
						i = 0,
						r = c.tweens.length;
					i < r;
					i++
				)
					c.tweens[i].run(n);
				return (
					a.notifyWith(o, [c, n, t]),
					n < 1 && r
						? t
						: (r || a.notifyWith(o, [c, 1, 0]),
						  a.resolveWith(o, [c]),
						  !1)
				);
			},
			c = a.promise({
				elem: o,
				props: C.extend({}, e),
				opts: C.extend(
					!0,
					{ specialEasing: {}, easing: C.easing._default },
					t
				),
				originalProperties: e,
				originalOptions: t,
				startTime: Ye || it(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = C.Tween(
						o,
						c.opts,
						e,
						t,
						c.opts.specialEasing[e] || c.opts.easing
					);
					return c.tweens.push(n), n;
				},
				stop: function (e) {
					var t = 0,
						n = e ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; t < n; t++) c.tweens[t].run(1);
					return (
						e
							? (a.notifyWith(o, [c, 1, 0]),
							  a.resolveWith(o, [c, e]))
							: a.rejectWith(o, [c, e]),
						this
					);
				},
			}),
			u = c.props;
		for (
			(function (e, t) {
				var n, i, r, o, s;
				for (n in e)
					if (
						((r = t[(i = C.camelCase(n))]),
						(o = e[n]),
						Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
						n !== i && ((e[i] = o), delete e[n]),
						(s = C.cssHooks[i]) && ("expand" in s))
					)
						for (n in ((o = s.expand(o)), delete e[i], o))
							(n in e) || ((e[n] = o[n]), (t[n] = r));
					else t[i] = r;
			})(u, c.opts.specialEasing);
			i < r;
			i++
		)
			if ((n = st.prefilters[i].call(c, o, u, c.opts)))
				return (
					C.isFunction(n.stop) &&
						(C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(
							n.stop,
							n
						)),
					n
				);
		return (
			C.map(u, ot, c),
			C.isFunction(c.opts.start) && c.opts.start.call(o, c),
			c
				.progress(c.opts.progress)
				.done(c.opts.done, c.opts.complete)
				.fail(c.opts.fail)
				.always(c.opts.always),
			C.fx.timer(C.extend(l, { elem: o, anim: c, queue: c.opts.queue })),
			c
		);
	}
	(C.Animation = C.extend(st, {
		tweeners: {
			"*": [
				function (e, t) {
					var n = this.createTween(e, t);
					return ne(n.elem, e, J.exec(t), n), n;
				},
			],
		},
		tweener: function (e, t) {
			C.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
			for (var n, i = 0, r = e.length; i < r; i++)
				(n = e[i]),
					(st.tweeners[n] = st.tweeners[n] || []),
					st.tweeners[n].unshift(t);
		},
		prefilters: [
			function (e, t, n) {
				var i,
					r,
					o,
					s,
					a,
					l,
					c,
					u,
					f = "width" in t || "height" in t,
					d = this,
					h = {},
					p = e.style,
					g = e.nodeType && ee(e),
					m = Q.get(e, "fxshow");
				for (i in (n.queue ||
					(null == (s = C._queueHooks(e, "fx")).unqueued &&
						((s.unqueued = 0),
						(a = s.empty.fire),
						(s.empty.fire = function () {
							s.unqueued || a();
						})),
					s.unqueued++,
					d.always(function () {
						d.always(function () {
							s.unqueued--,
								C.queue(e, "fx").length || s.empty.fire();
						});
					})),
				t))
					if (((r = t[i]), et.test(r))) {
						if (
							(delete t[i],
							(o = o || "toggle" === r),
							r === (g ? "hide" : "show"))
						) {
							if ("show" !== r || !m || void 0 === m[i]) continue;
							g = !0;
						}
						h[i] = (m && m[i]) || C.style(e, i);
					}
				if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
					for (i in (f &&
						1 === e.nodeType &&
						((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
						null == (c = m && m.display) &&
							(c = Q.get(e, "display")),
						"none" === (u = C.css(e, "display")) &&
							(c
								? (u = c)
								: (re([e], !0),
								  (c = e.style.display || c),
								  (u = C.css(e, "display")),
								  re([e]))),
						("inline" === u ||
							("inline-block" === u && null != c)) &&
							"none" === C.css(e, "float") &&
							(l ||
								(d.done(function () {
									p.display = c;
								}),
								null == c &&
									((u = p.display),
									(c = "none" === u ? "" : u))),
							(p.display = "inline-block"))),
					n.overflow &&
						((p.overflow = "hidden"),
						d.always(function () {
							(p.overflow = n.overflow[0]),
								(p.overflowX = n.overflow[1]),
								(p.overflowY = n.overflow[2]);
						})),
					(l = !1),
					h))
						l ||
							(m
								? "hidden" in m && (g = m.hidden)
								: (m = Q.access(e, "fxshow", { display: c })),
							o && (m.hidden = !g),
							g && re([e], !0),
							d.done(function () {
								for (i in (g || re([e]),
								Q.remove(e, "fxshow"),
								h))
									C.style(e, i, h[i]);
							})),
							(l = ot(g ? m[i] : 0, i, d)),
							i in m ||
								((m[i] = l.start),
								g && ((l.end = l.start), (l.start = 0)));
			},
		],
		prefilter: function (e, t) {
			t ? st.prefilters.unshift(e) : st.prefilters.push(e);
		},
	})),
		(C.speed = function (e, t, n) {
			var i =
				e && "object" == typeof e
					? C.extend({}, e)
					: {
							complete: n || (!n && t) || (C.isFunction(e) && e),
							duration: e,
							easing: (n && t) || (t && !C.isFunction(t) && t),
					  };
			return (
				C.fx.off
					? (i.duration = 0)
					: "number" != typeof i.duration &&
					  (i.duration in C.fx.speeds
							? (i.duration = C.fx.speeds[i.duration])
							: (i.duration = C.fx.speeds._default)),
				(null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
				(i.old = i.complete),
				(i.complete = function () {
					C.isFunction(i.old) && i.old.call(this),
						i.queue && C.dequeue(this, i.queue);
				}),
				i
			);
		}),
		C.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter(ee)
					.css("opacity", 0)
					.show()
					.end()
					.animate({ opacity: t }, e, n, i);
			},
			animate: function (t, e, n, i) {
				var r = C.isEmptyObject(t),
					o = C.speed(e, n, i),
					s = function () {
						var e = st(this, C.extend({}, t), o);
						(r || Q.get(this, "finish")) && e.stop(!0);
					};
				return (
					(s.finish = s),
					r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
				);
			},
			stop: function (r, e, o) {
				var s = function (e) {
					var t = e.stop;
					delete e.stop, t(o);
				};
				return (
					"string" != typeof r && ((o = e), (e = r), (r = void 0)),
					e && !1 !== r && this.queue(r || "fx", []),
					this.each(function () {
						var e = !0,
							t = null != r && r + "queueHooks",
							n = C.timers,
							i = Q.get(this);
						if (t) i[t] && i[t].stop && s(i[t]);
						else
							for (t in i)
								i[t] && i[t].stop && tt.test(t) && s(i[t]);
						for (t = n.length; t--; )
							n[t].elem !== this ||
								(null != r && n[t].queue !== r) ||
								(n[t].anim.stop(o), (e = !1), n.splice(t, 1));
						(!e && o) || C.dequeue(this, r);
					})
				);
			},
			finish: function (s) {
				return (
					!1 !== s && (s = s || "fx"),
					this.each(function () {
						var e,
							t = Q.get(this),
							n = t[s + "queue"],
							i = t[s + "queueHooks"],
							r = C.timers,
							o = n ? n.length : 0;
						for (
							t.finish = !0,
								C.queue(this, s, []),
								i && i.stop && i.stop.call(this, !0),
								e = r.length;
							e--;

						)
							r[e].elem === this &&
								r[e].queue === s &&
								(r[e].anim.stop(!0), r.splice(e, 1));
						for (e = 0; e < o; e++)
							n[e] && n[e].finish && n[e].finish.call(this);
						delete t.finish;
					})
				);
			},
		}),
		C.each(["toggle", "show", "hide"], function (e, i) {
			var r = C.fn[i];
			C.fn[i] = function (e, t, n) {
				return null == e || "boolean" == typeof e
					? r.apply(this, arguments)
					: this.animate(rt(i, !0), e, t, n);
			};
		}),
		C.each(
			{
				slideDown: rt("show"),
				slideUp: rt("hide"),
				slideToggle: rt("toggle"),
				fadeIn: { opacity: "show" },
				fadeOut: { opacity: "hide" },
				fadeToggle: { opacity: "toggle" },
			},
			function (e, i) {
				C.fn[e] = function (e, t, n) {
					return this.animate(i, e, t, n);
				};
			}
		),
		(C.timers = []),
		(C.fx.tick = function () {
			var e,
				t = 0,
				n = C.timers;
			for (Ye = C.now(); t < n.length; t++)
				(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || C.fx.stop(), (Ye = void 0);
		}),
		(C.fx.timer = function (e) {
			C.timers.push(e), C.fx.start();
		}),
		(C.fx.interval = 13),
		(C.fx.start = function () {
			Ge || ((Ge = !0), nt());
		}),
		(C.fx.stop = function () {
			Ge = null;
		}),
		(C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(C.fn.delay = function (i, e) {
			return (
				(i = (C.fx && C.fx.speeds[i]) || i),
				(e = e || "fx"),
				this.queue(e, function (e, t) {
					var n = T.setTimeout(e, i);
					t.stop = function () {
						T.clearTimeout(n);
					};
				})
			);
		}),
		(Je = x.createElement("input")),
		(Ze = x.createElement("select").appendChild(x.createElement("option"))),
		(Je.type = "checkbox"),
		(m.checkOn = "" !== Je.value),
		(m.optSelected = Ze.selected),
		((Je = x.createElement("input")).value = "t"),
		(Je.type = "radio"),
		(m.radioValue = "t" === Je.value);
	var at,
		lt = C.expr.attrHandle;
	C.fn.extend({
		attr: function (e, t) {
			return U(this, C.attr, e, t, 1 < arguments.length);
		},
		removeAttr: function (e) {
			return this.each(function () {
				C.removeAttr(this, e);
			});
		},
	}),
		C.extend({
			attr: function (e, t, n) {
				var i,
					r,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return void 0 === e.getAttribute
						? C.prop(e, t, n)
						: ((1 === o && C.isXMLDoc(e)) ||
								(r =
									C.attrHooks[t.toLowerCase()] ||
									(C.expr.match.bool.test(t) ? at : void 0)),
						  void 0 !== n
								? null === n
									? void C.removeAttr(e, t)
									: r &&
									  "set" in r &&
									  void 0 !== (i = r.set(e, n, t))
									? i
									: (e.setAttribute(t, n + ""), n)
								: r && "get" in r && null !== (i = r.get(e, t))
								? i
								: null == (i = C.find.attr(e, t))
								? void 0
								: i);
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!m.radioValue && "radio" === t && D(e, "input")) {
							var n = e.value;
							return (
								e.setAttribute("type", t), n && (e.value = n), t
							);
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					i = 0,
					r = t && t.match(H);
				if (r && 1 === e.nodeType)
					for (; (n = r[i++]); ) e.removeAttribute(n);
			},
		}),
		(at = {
			set: function (e, t, n) {
				return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
			},
		}),
		C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var s = lt[t] || C.find.attr;
			lt[t] = function (e, t, n) {
				var i,
					r,
					o = t.toLowerCase();
				return (
					n ||
						((r = lt[o]),
						(lt[o] = i),
						(i = null != s(e, t, n) ? o : null),
						(lt[o] = r)),
					i
				);
			};
		});
	var ct = /^(?:input|select|textarea|button)$/i,
		ut = /^(?:a|area)$/i;
	function ft(e) {
		return (e.match(H) || []).join(" ");
	}
	function dt(e) {
		return (e.getAttribute && e.getAttribute("class")) || "";
	}
	C.fn.extend({
		prop: function (e, t) {
			return U(this, C.prop, e, t, 1 < arguments.length);
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[C.propFix[e] || e];
			});
		},
	}),
		C.extend({
			prop: function (e, t, n) {
				var i,
					r,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (
						(1 === o && C.isXMLDoc(e)) ||
							((t = C.propFix[t] || t), (r = C.propHooks[t])),
						void 0 !== n
							? r && "set" in r && void 0 !== (i = r.set(e, n, t))
								? i
								: (e[t] = n)
							: r && "get" in r && null !== (i = r.get(e, t))
							? i
							: e[t]
					);
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = C.find.attr(e, "tabindex");
						return t
							? parseInt(t, 10)
							: ct.test(e.nodeName) ||
							  (ut.test(e.nodeName) && e.href)
							? 0
							: -1;
					},
				},
			},
			propFix: { for: "htmlFor", class: "className" },
		}),
		m.optSelected ||
			(C.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode;
					return (
						t && t.parentNode && t.parentNode.selectedIndex, null
					);
				},
				set: function (e) {
					var t = e.parentNode;
					t &&
						(t.selectedIndex,
						t.parentNode && t.parentNode.selectedIndex);
				},
			}),
		C.each(
			[
				"tabIndex",
				"readOnly",
				"maxLength",
				"cellSpacing",
				"cellPadding",
				"rowSpan",
				"colSpan",
				"useMap",
				"frameBorder",
				"contentEditable",
			],
			function () {
				C.propFix[this.toLowerCase()] = this;
			}
		),
		C.fn.extend({
			addClass: function (t) {
				var e,
					n,
					i,
					r,
					o,
					s,
					a,
					l = 0;
				if (C.isFunction(t))
					return this.each(function (e) {
						C(this).addClass(t.call(this, e, dt(this)));
					});
				if ("string" == typeof t && t)
					for (e = t.match(H) || []; (n = this[l++]); )
						if (
							((r = dt(n)),
							(i = 1 === n.nodeType && " " + ft(r) + " "))
						) {
							for (s = 0; (o = e[s++]); )
								i.indexOf(" " + o + " ") < 0 && (i += o + " ");
							r !== (a = ft(i)) && n.setAttribute("class", a);
						}
				return this;
			},
			removeClass: function (t) {
				var e,
					n,
					i,
					r,
					o,
					s,
					a,
					l = 0;
				if (C.isFunction(t))
					return this.each(function (e) {
						C(this).removeClass(t.call(this, e, dt(this)));
					});
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof t && t)
					for (e = t.match(H) || []; (n = this[l++]); )
						if (
							((r = dt(n)),
							(i = 1 === n.nodeType && " " + ft(r) + " "))
						) {
							for (s = 0; (o = e[s++]); )
								for (; -1 < i.indexOf(" " + o + " "); )
									i = i.replace(" " + o + " ", " ");
							r !== (a = ft(i)) && n.setAttribute("class", a);
						}
				return this;
			},
			toggleClass: function (r, t) {
				var o = typeof r;
				return "boolean" == typeof t && "string" === o
					? t
						? this.addClass(r)
						: this.removeClass(r)
					: C.isFunction(r)
					? this.each(function (e) {
							C(this).toggleClass(
								r.call(this, e, dt(this), t),
								t
							);
					  })
					: this.each(function () {
							var e, t, n, i;
							if ("string" === o)
								for (
									t = 0, n = C(this), i = r.match(H) || [];
									(e = i[t++]);

								)
									n.hasClass(e)
										? n.removeClass(e)
										: n.addClass(e);
							else
								(void 0 !== r && "boolean" !== o) ||
									((e = dt(this)) &&
										Q.set(this, "__className__", e),
									this.setAttribute &&
										this.setAttribute(
											"class",
											e || !1 === r
												? ""
												: Q.get(
														this,
														"__className__"
												  ) || ""
										));
					  });
			},
			hasClass: function (e) {
				var t,
					n,
					i = 0;
				for (t = " " + e + " "; (n = this[i++]); )
					if (
						1 === n.nodeType &&
						-1 < (" " + ft(dt(n)) + " ").indexOf(t)
					)
						return !0;
				return !1;
			},
		});
	var ht = /\r/g;
	C.fn.extend({
		val: function (n) {
			var i,
				e,
				r,
				t = this[0];
			return arguments.length
				? ((r = C.isFunction(n)),
				  this.each(function (e) {
						var t;
						1 === this.nodeType &&
							(null ==
							(t = r ? n.call(this, e, C(this).val()) : n)
								? (t = "")
								: "number" == typeof t
								? (t += "")
								: Array.isArray(t) &&
								  (t = C.map(t, function (e) {
										return null == e ? "" : e + "";
								  })),
							((i =
								C.valHooks[this.type] ||
								C.valHooks[this.nodeName.toLowerCase()]) &&
								"set" in i &&
								void 0 !== i.set(this, t, "value")) ||
								(this.value = t));
				  }))
				: t
				? (i =
						C.valHooks[t.type] ||
						C.valHooks[t.nodeName.toLowerCase()]) &&
				  "get" in i &&
				  void 0 !== (e = i.get(t, "value"))
					? e
					: "string" == typeof (e = t.value)
					? e.replace(ht, "")
					: null == e
					? ""
					: e
				: void 0;
		},
	}),
		C.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = C.find.attr(e, "value");
						return null != t ? t : ft(C.text(e));
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							i,
							r = e.options,
							o = e.selectedIndex,
							s = "select-one" === e.type,
							a = s ? null : [],
							l = s ? o + 1 : r.length;
						for (i = o < 0 ? l : s ? o : 0; i < l; i++)
							if (
								((n = r[i]).selected || i === o) &&
								!n.disabled &&
								(!n.parentNode.disabled ||
									!D(n.parentNode, "optgroup"))
							) {
								if (((t = C(n).val()), s)) return t;
								a.push(t);
							}
						return a;
					},
					set: function (e, t) {
						for (
							var n,
								i,
								r = e.options,
								o = C.makeArray(t),
								s = r.length;
							s--;

						)
							((i = r[s]).selected =
								-1 < C.inArray(C.valHooks.option.get(i), o)) &&
								(n = !0);
						return n || (e.selectedIndex = -1), o;
					},
				},
			},
		}),
		C.each(["radio", "checkbox"], function () {
			(C.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t))
						return (e.checked = -1 < C.inArray(C(e).val(), t));
				},
			}),
				m.checkOn ||
					(C.valHooks[this].get = function (e) {
						return null === e.getAttribute("value")
							? "on"
							: e.value;
					});
		});
	var pt = /^(?:focusinfocus|focusoutblur)$/;
	C.extend(C.event, {
		trigger: function (e, t, n, i) {
			var r,
				o,
				s,
				a,
				l,
				c,
				u,
				f = [n || x],
				d = p.call(e, "type") ? e.type : e,
				h = p.call(e, "namespace") ? e.namespace.split(".") : [];
			if (
				((o = s = n = n || x),
				3 !== n.nodeType &&
					8 !== n.nodeType &&
					!pt.test(d + C.event.triggered) &&
					(-1 < d.indexOf(".") &&
						((d = (h = d.split(".")).shift()), h.sort()),
					(l = d.indexOf(":") < 0 && "on" + d),
					((e = e[C.expando]
						? e
						: new C.Event(d, "object" == typeof e && e)).isTrigger =
						i ? 2 : 3),
					(e.namespace = h.join(".")),
					(e.rnamespace = e.namespace
						? new RegExp(
								"(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
						  )
						: null),
					(e.result = void 0),
					e.target || (e.target = n),
					(t = null == t ? [e] : C.makeArray(t, [e])),
					(u = C.event.special[d] || {}),
					i || !u.trigger || !1 !== u.trigger.apply(n, t)))
			) {
				if (!i && !u.noBubble && !C.isWindow(n)) {
					for (
						a = u.delegateType || d,
							pt.test(a + d) || (o = o.parentNode);
						o;
						o = o.parentNode
					)
						f.push(o), (s = o);
					s === (n.ownerDocument || x) &&
						f.push(s.defaultView || s.parentWindow || T);
				}
				for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
					(e.type = 1 < r ? a : u.bindType || d),
						(c =
							(Q.get(o, "events") || {})[e.type] &&
							Q.get(o, "handle")) && c.apply(o, t),
						(c = l && o[l]) &&
							c.apply &&
							K(o) &&
							((e.result = c.apply(o, t)),
							!1 === e.result && e.preventDefault());
				return (
					(e.type = d),
					i ||
						e.isDefaultPrevented() ||
						(u._default && !1 !== u._default.apply(f.pop(), t)) ||
						!K(n) ||
						(l &&
							C.isFunction(n[d]) &&
							!C.isWindow(n) &&
							((s = n[l]) && (n[l] = null),
							n[(C.event.triggered = d)](),
							(C.event.triggered = void 0),
							s && (n[l] = s))),
					e.result
				);
			}
		},
		simulate: function (e, t, n) {
			var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
			C.event.trigger(i, null, t);
		},
	}),
		C.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					C.event.trigger(e, t, this);
				});
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return C.event.trigger(e, t, n, !0);
			},
		}),
		C.each(
			"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
				" "
			),
			function (e, n) {
				C.fn[n] = function (e, t) {
					return 0 < arguments.length
						? this.on(n, null, e, t)
						: this.trigger(n);
				};
			}
		),
		C.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e);
			},
		}),
		(m.focusin = "onfocusin" in T),
		m.focusin ||
			C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
				var r = function (e) {
					C.event.simulate(i, e.target, C.event.fix(e));
				};
				C.event.special[i] = {
					setup: function () {
						var e = this.ownerDocument || this,
							t = Q.access(e, i);
						t || e.addEventListener(n, r, !0),
							Q.access(e, i, (t || 0) + 1);
					},
					teardown: function () {
						var e = this.ownerDocument || this,
							t = Q.access(e, i) - 1;
						t
							? Q.access(e, i, t)
							: (e.removeEventListener(n, r, !0), Q.remove(e, i));
					},
				};
			});
	var gt = T.location,
		mt = C.now(),
		vt = /\?/;
	C.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = new T.DOMParser().parseFromString(e, "text/xml");
		} catch (e) {
			t = void 0;
		}
		return (
			(t && !t.getElementsByTagName("parsererror").length) ||
				C.error("Invalid XML: " + e),
			t
		);
	};
	var yt = /\[\]$/,
		_t = /\r?\n/g,
		bt = /^(?:submit|button|image|reset|file)$/i,
		wt = /^(?:input|select|textarea|keygen)/i;
	function Et(n, e, i, r) {
		var t;
		if (Array.isArray(e))
			C.each(e, function (e, t) {
				i || yt.test(n)
					? r(n, t)
					: Et(
							n +
								"[" +
								("object" == typeof t && null != t ? e : "") +
								"]",
							t,
							i,
							r
					  );
			});
		else if (i || "object" !== C.type(e)) r(n, e);
		else for (t in e) Et(n + "[" + t + "]", e[t], i, r);
	}
	(C.param = function (e, t) {
		var n,
			i = [],
			r = function (e, t) {
				var n = C.isFunction(t) ? t() : t;
				i[i.length] =
					encodeURIComponent(e) +
					"=" +
					encodeURIComponent(null == n ? "" : n);
			};
		if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
			C.each(e, function () {
				r(this.name, this.value);
			});
		else for (n in e) Et(n, e[n], t, r);
		return i.join("&");
	}),
		C.fn.extend({
			serialize: function () {
				return C.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var e = C.prop(this, "elements");
					return e ? C.makeArray(e) : this;
				})
					.filter(function () {
						var e = this.type;
						return (
							this.name &&
							!C(this).is(":disabled") &&
							wt.test(this.nodeName) &&
							!bt.test(e) &&
							(this.checked || !oe.test(e))
						);
					})
					.map(function (e, t) {
						var n = C(this).val();
						return null == n
							? null
							: Array.isArray(n)
							? C.map(n, function (e) {
									return {
										name: t.name,
										value: e.replace(_t, "\r\n"),
									};
							  })
							: { name: t.name, value: n.replace(_t, "\r\n") };
					})
					.get();
			},
		});
	var Tt = /%20/g,
		xt = /#.*$/,
		Ct = /([?&])_=[^&]*/,
		St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Dt = /^(?:GET|HEAD)$/,
		At = /^\/\//,
		kt = {},
		Nt = {},
		It = "*/".concat("*"),
		Ot = x.createElement("a");
	function jt(o) {
		return function (e, t) {
			"string" != typeof e && ((t = e), (e = "*"));
			var n,
				i = 0,
				r = e.toLowerCase().match(H) || [];
			if (C.isFunction(t))
				for (; (n = r[i++]); )
					"+" === n[0]
						? ((n = n.slice(1) || "*"),
						  (o[n] = o[n] || []).unshift(t))
						: (o[n] = o[n] || []).push(t);
		};
	}
	function Lt(t, r, o, s) {
		var a = {},
			l = t === Nt;
		function c(e) {
			var i;
			return (
				(a[e] = !0),
				C.each(t[e] || [], function (e, t) {
					var n = t(r, o, s);
					return "string" != typeof n || l || a[n]
						? l
							? !(i = n)
							: void 0
						: (r.dataTypes.unshift(n), c(n), !1);
				}),
				i
			);
		}
		return c(r.dataTypes[0]) || (!a["*"] && c("*"));
	}
	function Pt(e, t) {
		var n,
			i,
			r = C.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && C.extend(!0, e, i), e;
	}
	(Ot.href = gt.href),
		C.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: gt.href,
				type: "GET",
				isLocal:
					/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
						gt.protocol
					),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": It,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript",
				},
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON",
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": C.parseXML,
				},
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? Pt(Pt(e, C.ajaxSettings), t) : Pt(C.ajaxSettings, e);
			},
			ajaxPrefilter: jt(kt),
			ajaxTransport: jt(Nt),
			ajax: function (e, t) {
				"object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
				var u,
					f,
					d,
					n,
					h,
					i,
					p,
					g,
					r,
					o,
					m = C.ajaxSetup({}, t),
					v = m.context || m,
					y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
					_ = C.Deferred(),
					b = C.Callbacks("once memory"),
					w = m.statusCode || {},
					s = {},
					a = {},
					l = "canceled",
					E = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (p) {
								if (!n)
									for (n = {}; (t = St.exec(d)); )
										n[t[1].toLowerCase()] = t[2];
								t = n[e.toLowerCase()];
							}
							return null == t ? null : t;
						},
						getAllResponseHeaders: function () {
							return p ? d : null;
						},
						setRequestHeader: function (e, t) {
							return (
								null == p &&
									((e = a[e.toLowerCase()] =
										a[e.toLowerCase()] || e),
									(s[e] = t)),
								this
							);
						},
						overrideMimeType: function (e) {
							return null == p && (m.mimeType = e), this;
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (p) E.always(e[E.status]);
								else for (t in e) w[t] = [w[t], e[t]];
							return this;
						},
						abort: function (e) {
							var t = e || l;
							return u && u.abort(t), c(0, t), this;
						},
					};
				if (
					(_.promise(E),
					(m.url = ((e || m.url || gt.href) + "").replace(
						At,
						gt.protocol + "//"
					)),
					(m.type = t.method || t.type || m.method || m.type),
					(m.dataTypes = (m.dataType || "*")
						.toLowerCase()
						.match(H) || [""]),
					null == m.crossDomain)
				) {
					i = x.createElement("a");
					try {
						(i.href = m.url),
							(i.href = i.href),
							(m.crossDomain =
								Ot.protocol + "//" + Ot.host !=
								i.protocol + "//" + i.host);
					} catch (e) {
						m.crossDomain = !0;
					}
				}
				if (
					(m.data &&
						m.processData &&
						"string" != typeof m.data &&
						(m.data = C.param(m.data, m.traditional)),
					Lt(kt, m, t, E),
					p)
				)
					return E;
				for (r in ((g = C.event && m.global) &&
					0 == C.active++ &&
					C.event.trigger("ajaxStart"),
				(m.type = m.type.toUpperCase()),
				(m.hasContent = !Dt.test(m.type)),
				(f = m.url.replace(xt, "")),
				m.hasContent
					? m.data &&
					  m.processData &&
					  0 ===
							(m.contentType || "").indexOf(
								"application/x-www-form-urlencoded"
							) &&
					  (m.data = m.data.replace(Tt, "+"))
					: ((o = m.url.slice(f.length)),
					  m.data &&
							((f += (vt.test(f) ? "&" : "?") + m.data),
							delete m.data),
					  !1 === m.cache &&
							((f = f.replace(Ct, "$1")),
							(o = (vt.test(f) ? "&" : "?") + "_=" + mt++ + o)),
					  (m.url = f + o)),
				m.ifModified &&
					(C.lastModified[f] &&
						E.setRequestHeader(
							"If-Modified-Since",
							C.lastModified[f]
						),
					C.etag[f] &&
						E.setRequestHeader("If-None-Match", C.etag[f])),
				((m.data && m.hasContent && !1 !== m.contentType) ||
					t.contentType) &&
					E.setRequestHeader("Content-Type", m.contentType),
				E.setRequestHeader(
					"Accept",
					m.dataTypes[0] && m.accepts[m.dataTypes[0]]
						? m.accepts[m.dataTypes[0]] +
								("*" !== m.dataTypes[0]
									? ", " + It + "; q=0.01"
									: "")
						: m.accepts["*"]
				),
				m.headers))
					E.setRequestHeader(r, m.headers[r]);
				if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p))
					return E.abort();
				if (
					((l = "abort"),
					b.add(m.complete),
					E.done(m.success),
					E.fail(m.error),
					(u = Lt(Nt, m, t, E)))
				) {
					if (
						((E.readyState = 1),
						g && y.trigger("ajaxSend", [E, m]),
						p)
					)
						return E;
					m.async &&
						0 < m.timeout &&
						(h = T.setTimeout(function () {
							E.abort("timeout");
						}, m.timeout));
					try {
						(p = !1), u.send(s, c);
					} catch (e) {
						if (p) throw e;
						c(-1, e);
					}
				} else c(-1, "No Transport");
				function c(e, t, n, i) {
					var r,
						o,
						s,
						a,
						l,
						c = t;
					p ||
						((p = !0),
						h && T.clearTimeout(h),
						(u = void 0),
						(d = i || ""),
						(E.readyState = 0 < e ? 4 : 0),
						(r = (200 <= e && e < 300) || 304 === e),
						n &&
							(a = (function (e, t, n) {
								for (
									var i,
										r,
										o,
										s,
										a = e.contents,
										l = e.dataTypes;
									"*" === l[0];

								)
									l.shift(),
										void 0 === i &&
											(i =
												e.mimeType ||
												t.getResponseHeader(
													"Content-Type"
												));
								if (i)
									for (r in a)
										if (a[r] && a[r].test(i)) {
											l.unshift(r);
											break;
										}
								if (l[0] in n) o = l[0];
								else {
									for (r in n) {
										if (
											!l[0] ||
											e.converters[r + " " + l[0]]
										) {
											o = r;
											break;
										}
										s || (s = r);
									}
									o = o || s;
								}
								if (o) return o !== l[0] && l.unshift(o), n[o];
							})(m, E, n)),
						(a = (function (e, t, n, i) {
							var r,
								o,
								s,
								a,
								l,
								c = {},
								u = e.dataTypes.slice();
							if (u[1])
								for (s in e.converters)
									c[s.toLowerCase()] = e.converters[s];
							for (o = u.shift(); o; )
								if (
									(e.responseFields[o] &&
										(n[e.responseFields[o]] = t),
									!l &&
										i &&
										e.dataFilter &&
										(t = e.dataFilter(t, e.dataType)),
									(l = o),
									(o = u.shift()))
								)
									if ("*" === o) o = l;
									else if ("*" !== l && l !== o) {
										if (
											!(s = c[l + " " + o] || c["* " + o])
										)
											for (r in c)
												if (
													(a = r.split(" "))[1] ===
														o &&
													(s =
														c[l + " " + a[0]] ||
														c["* " + a[0]])
												) {
													!0 === s
														? (s = c[r])
														: !0 !== c[r] &&
														  ((o = a[0]),
														  u.unshift(a[1]));
													break;
												}
										if (!0 !== s)
											if (s && e.throws) t = s(t);
											else
												try {
													t = s(t);
												} catch (e) {
													return {
														state: "parsererror",
														error: s
															? e
															: "No conversion from " +
															  l +
															  " to " +
															  o,
													};
												}
									}
							return { state: "success", data: t };
						})(m, a, E, r)),
						r
							? (m.ifModified &&
									((l =
										E.getResponseHeader("Last-Modified")) &&
										(C.lastModified[f] = l),
									(l = E.getResponseHeader("etag")) &&
										(C.etag[f] = l)),
							  204 === e || "HEAD" === m.type
									? (c = "nocontent")
									: 304 === e
									? (c = "notmodified")
									: ((c = a.state),
									  (o = a.data),
									  (r = !(s = a.error))))
							: ((s = c),
							  (!e && c) || ((c = "error"), e < 0 && (e = 0))),
						(E.status = e),
						(E.statusText = (t || c) + ""),
						r
							? _.resolveWith(v, [o, c, E])
							: _.rejectWith(v, [E, c, s]),
						E.statusCode(w),
						(w = void 0),
						g &&
							y.trigger(r ? "ajaxSuccess" : "ajaxError", [
								E,
								m,
								r ? o : s,
							]),
						b.fireWith(v, [E, c]),
						g &&
							(y.trigger("ajaxComplete", [E, m]),
							--C.active || C.event.trigger("ajaxStop")));
				}
				return E;
			},
			getJSON: function (e, t, n) {
				return C.get(e, t, n, "json");
			},
			getScript: function (e, t) {
				return C.get(e, void 0, t, "script");
			},
		}),
		C.each(["get", "post"], function (e, r) {
			C[r] = function (e, t, n, i) {
				return (
					C.isFunction(t) && ((i = i || n), (n = t), (t = void 0)),
					C.ajax(
						C.extend(
							{
								url: e,
								type: r,
								dataType: i,
								data: t,
								success: n,
							},
							C.isPlainObject(e) && e
						)
					)
				);
			};
		}),
		(C._evalUrl = function (e) {
			return C.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0,
			});
		}),
		C.fn.extend({
			wrapAll: function (e) {
				var t;
				return (
					this[0] &&
						(C.isFunction(e) && (e = e.call(this[0])),
						(t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								for (var e = this; e.firstElementChild; )
									e = e.firstElementChild;
								return e;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (n) {
				return C.isFunction(n)
					? this.each(function (e) {
							C(this).wrapInner(n.call(this, e));
					  })
					: this.each(function () {
							var e = C(this),
								t = e.contents();
							t.length ? t.wrapAll(n) : e.append(n);
					  });
			},
			wrap: function (t) {
				var n = C.isFunction(t);
				return this.each(function (e) {
					C(this).wrapAll(n ? t.call(this, e) : t);
				});
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not("body")
						.each(function () {
							C(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(C.expr.pseudos.hidden = function (e) {
			return !C.expr.pseudos.visible(e);
		}),
		(C.expr.pseudos.visible = function (e) {
			return !!(
				e.offsetWidth ||
				e.offsetHeight ||
				e.getClientRects().length
			);
		}),
		(C.ajaxSettings.xhr = function () {
			try {
				return new T.XMLHttpRequest();
			} catch (e) {}
		});
	var Ht = { 0: 200, 1223: 204 },
		qt = C.ajaxSettings.xhr();
	(m.cors = !!qt && "withCredentials" in qt),
		(m.ajax = qt = !!qt),
		C.ajaxTransport(function (r) {
			var o, s;
			if (m.cors || (qt && !r.crossDomain))
				return {
					send: function (e, t) {
						var n,
							i = r.xhr();
						if (
							(i.open(
								r.type,
								r.url,
								r.async,
								r.username,
								r.password
							),
							r.xhrFields)
						)
							for (n in r.xhrFields) i[n] = r.xhrFields[n];
						for (n in (r.mimeType &&
							i.overrideMimeType &&
							i.overrideMimeType(r.mimeType),
						r.crossDomain ||
							e["X-Requested-With"] ||
							(e["X-Requested-With"] = "XMLHttpRequest"),
						e))
							i.setRequestHeader(n, e[n]);
						(o = function (e) {
							return function () {
								o &&
									((o =
										s =
										i.onload =
										i.onerror =
										i.onabort =
										i.onreadystatechange =
											null),
									"abort" === e
										? i.abort()
										: "error" === e
										? "number" != typeof i.status
											? t(0, "error")
											: t(i.status, i.statusText)
										: t(
												Ht[i.status] || i.status,
												i.statusText,
												"text" !==
													(i.responseType ||
														"text") ||
													"string" !=
														typeof i.responseText
													? { binary: i.response }
													: { text: i.responseText },
												i.getAllResponseHeaders()
										  ));
							};
						}),
							(i.onload = o()),
							(s = i.onerror = o("error")),
							void 0 !== i.onabort
								? (i.onabort = s)
								: (i.onreadystatechange = function () {
										4 === i.readyState &&
											T.setTimeout(function () {
												o && s();
											});
								  }),
							(o = o("abort"));
						try {
							i.send((r.hasContent && r.data) || null);
						} catch (e) {
							if (o) throw e;
						}
					},
					abort: function () {
						o && o();
					},
				};
		}),
		C.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1);
		}),
		C.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
			},
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				"text script": function (e) {
					return C.globalEval(e), e;
				},
			},
		}),
		C.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1),
				e.crossDomain && (e.type = "GET");
		}),
		C.ajaxTransport("script", function (n) {
			var i, r;
			if (n.crossDomain)
				return {
					send: function (e, t) {
						(i = C("<script>")
							.prop({ charset: n.scriptCharset, src: n.url })
							.on(
								"load error",
								(r = function (e) {
									i.remove(),
										(r = null),
										e &&
											t(
												"error" === e.type ? 404 : 200,
												e.type
											);
								})
							)),
							x.head.appendChild(i[0]);
					},
					abort: function () {
						r && r();
					},
				};
		});
	var Rt,
		Ft = [],
		Mt = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Ft.pop() || C.expando + "_" + mt++;
			return (this[e] = !0), e;
		},
	}),
		C.ajaxPrefilter("json jsonp", function (e, t, n) {
			var i,
				r,
				o,
				s =
					!1 !== e.jsonp &&
					(Mt.test(e.url)
						? "url"
						: "string" == typeof e.data &&
						  0 ===
								(e.contentType || "").indexOf(
									"application/x-www-form-urlencoded"
								) &&
						  Mt.test(e.data) &&
						  "data");
			if (s || "jsonp" === e.dataTypes[0])
				return (
					(i = e.jsonpCallback =
						C.isFunction(e.jsonpCallback)
							? e.jsonpCallback()
							: e.jsonpCallback),
					s
						? (e[s] = e[s].replace(Mt, "$1" + i))
						: !1 !== e.jsonp &&
						  (e.url +=
								(vt.test(e.url) ? "&" : "?") +
								e.jsonp +
								"=" +
								i),
					(e.converters["script json"] = function () {
						return o || C.error(i + " was not called"), o[0];
					}),
					(e.dataTypes[0] = "json"),
					(r = T[i]),
					(T[i] = function () {
						o = arguments;
					}),
					n.always(function () {
						void 0 === r ? C(T).removeProp(i) : (T[i] = r),
							e[i] &&
								((e.jsonpCallback = t.jsonpCallback),
								Ft.push(i)),
							o && C.isFunction(r) && r(o[0]),
							(o = r = void 0);
					}),
					"script"
				);
		}),
		(m.createHTMLDocument =
			(((Rt = x.implementation.createHTMLDocument("").body).innerHTML =
				"<form></form><form></form>"),
			2 === Rt.childNodes.length)),
		(C.parseHTML = function (e, t, n) {
			return "string" != typeof e
				? []
				: ("boolean" == typeof t && ((n = t), (t = !1)),
				  t ||
						(m.createHTMLDocument
							? (((i = (t =
									x.implementation.createHTMLDocument(
										""
									)).createElement("base")).href =
									x.location.href),
							  t.head.appendChild(i))
							: (t = x)),
				  (o = !n && []),
				  (r = A.exec(e))
						? [t.createElement(r[1])]
						: ((r = pe([e], t, o)),
						  o && o.length && C(o).remove(),
						  C.merge([], r.childNodes)));
			var i, r, o;
		}),
		(C.fn.load = function (e, t, n) {
			var i,
				r,
				o,
				s = this,
				a = e.indexOf(" ");
			return (
				-1 < a && ((i = ft(e.slice(a))), (e = e.slice(0, a))),
				C.isFunction(t)
					? ((n = t), (t = void 0))
					: t && "object" == typeof t && (r = "POST"),
				0 < s.length &&
					C.ajax({
						url: e,
						type: r || "GET",
						dataType: "html",
						data: t,
					})
						.done(function (e) {
							(o = arguments),
								s.html(
									i
										? C("<div>")
												.append(C.parseHTML(e))
												.find(i)
										: e
								);
						})
						.always(
							n &&
								function (e, t) {
									s.each(function () {
										n.apply(
											this,
											o || [e.responseText, t, e]
										);
									});
								}
						),
				this
			);
		}),
		C.each(
			[
				"ajaxStart",
				"ajaxStop",
				"ajaxComplete",
				"ajaxError",
				"ajaxSuccess",
				"ajaxSend",
			],
			function (e, t) {
				C.fn[t] = function (e) {
					return this.on(t, e);
				};
			}
		),
		(C.expr.pseudos.animated = function (t) {
			return C.grep(C.timers, function (e) {
				return t === e.elem;
			}).length;
		}),
		(C.offset = {
			setOffset: function (e, t, n) {
				var i,
					r,
					o,
					s,
					a,
					l,
					c = C.css(e, "position"),
					u = C(e),
					f = {};
				"static" === c && (e.style.position = "relative"),
					(a = u.offset()),
					(o = C.css(e, "top")),
					(l = C.css(e, "left")),
					("absolute" === c || "fixed" === c) &&
					-1 < (o + l).indexOf("auto")
						? ((s = (i = u.position()).top), (r = i.left))
						: ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
					C.isFunction(t) && (t = t.call(e, n, C.extend({}, a))),
					null != t.top && (f.top = t.top - a.top + s),
					null != t.left && (f.left = t.left - a.left + r),
					"using" in t ? t.using.call(e, f) : u.css(f);
			},
		}),
		C.fn.extend({
			offset: function (t) {
				if (arguments.length)
					return void 0 === t
						? this
						: this.each(function (e) {
								C.offset.setOffset(this, t, e);
						  });
				var e,
					n,
					i,
					r,
					o = this[0];
				return o
					? o.getClientRects().length
						? ((i = o.getBoundingClientRect()),
						  (n = (e = o.ownerDocument).documentElement),
						  (r = e.defaultView),
						  {
								top: i.top + r.pageYOffset - n.clientTop,
								left: i.left + r.pageXOffset - n.clientLeft,
						  })
						: { top: 0, left: 0 }
					: void 0;
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n = this[0],
						i = { top: 0, left: 0 };
					return (
						"fixed" === C.css(n, "position")
							? (t = n.getBoundingClientRect())
							: ((e = this.offsetParent()),
							  (t = this.offset()),
							  D(e[0], "html") || (i = e.offset()),
							  (i = {
									top:
										i.top +
										C.css(e[0], "borderTopWidth", !0),
									left:
										i.left +
										C.css(e[0], "borderLeftWidth", !0),
							  })),
						{
							top: t.top - i.top - C.css(n, "marginTop", !0),
							left: t.left - i.left - C.css(n, "marginLeft", !0),
						}
					);
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (
						var e = this.offsetParent;
						e && "static" === C.css(e, "position");

					)
						e = e.offsetParent;
					return e || ge;
				});
			},
		}),
		C.each(
			{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
			function (t, r) {
				var o = "pageYOffset" === r;
				C.fn[t] = function (e) {
					return U(
						this,
						function (e, t, n) {
							var i;
							return (
								C.isWindow(e)
									? (i = e)
									: 9 === e.nodeType && (i = e.defaultView),
								void 0 === n
									? i
										? i[r]
										: e[t]
									: void (i
											? i.scrollTo(
													o ? i.pageXOffset : n,
													o ? n : i.pageYOffset
											  )
											: (e[t] = n))
							);
						},
						t,
						e,
						arguments.length
					);
				};
			}
		),
		C.each(["top", "left"], function (e, n) {
			C.cssHooks[n] = Re(m.pixelPosition, function (e, t) {
				if (t)
					return (
						(t = qe(e, n)),
						Pe.test(t) ? C(e).position()[n] + "px" : t
					);
			});
		}),
		C.each({ Height: "height", Width: "width" }, function (s, a) {
			C.each(
				{ padding: "inner" + s, content: a, "": "outer" + s },
				function (i, o) {
					C.fn[o] = function (e, t) {
						var n =
								arguments.length &&
								(i || "boolean" != typeof e),
							r =
								i ||
								(!0 === e || !0 === t ? "margin" : "border");
						return U(
							this,
							function (e, t, n) {
								var i;
								return C.isWindow(e)
									? 0 === o.indexOf("outer")
										? e["inner" + s]
										: e.document.documentElement[
												"client" + s
										  ]
									: 9 === e.nodeType
									? ((i = e.documentElement),
									  Math.max(
											e.body["scroll" + s],
											i["scroll" + s],
											e.body["offset" + s],
											i["offset" + s],
											i["client" + s]
									  ))
									: void 0 === n
									? C.css(e, t, r)
									: C.style(e, t, n, r);
							},
							a,
							n ? e : void 0,
							n
						);
					};
				}
			);
		}),
		C.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function (e, t) {
				return this.off(e, null, t);
			},
			delegate: function (e, t, n, i) {
				return this.on(t, e, n, i);
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length
					? this.off(e, "**")
					: this.off(t, e || "**", n);
			},
		}),
		(C.holdReady = function (e) {
			e ? C.readyWait++ : C.ready(!0);
		}),
		(C.isArray = Array.isArray),
		(C.parseJSON = JSON.parse),
		(C.nodeName = D),
		"function" == typeof define &&
			define.amd &&
			define("jquery", [], function () {
				return C;
			});
	var Wt = T.jQuery,
		Bt = T.$;
	return (
		(C.noConflict = function (e) {
			return (
				T.$ === C && (T.$ = Bt),
				e && T.jQuery === C && (T.jQuery = Wt),
				C
			);
		}),
		e || (T.jQuery = T.$ = C),
		C
	);
}),
	(function (e, t) {
		"object" == typeof exports && "undefined" != typeof module
			? t(exports, require("popper.js"), require("jquery"))
			: "function" == typeof define && define.amd
			? define(["exports", "popper.js", "jquery"], t)
			: t((e.bootstrap = {}), e.Popper, e.jQuery);
	})(this, function (e, f, p) {
		"use strict";
		function i(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				(i.enumerable = i.enumerable || !1),
					(i.configurable = !0),
					"value" in i && (i.writable = !0),
					Object.defineProperty(e, i.key, i);
			}
		}
		function s(e, t, n) {
			return t && i(e.prototype, t), n && i(e, n), e;
		}
		function l(r) {
			for (var e = 1; e < arguments.length; e++) {
				var o = null != arguments[e] ? arguments[e] : {},
					t = Object.keys(o);
				"function" == typeof Object.getOwnPropertySymbols &&
					(t = t.concat(
						Object.getOwnPropertySymbols(o).filter(function (e) {
							return Object.getOwnPropertyDescriptor(
								o,
								e
							).enumerable;
						})
					)),
					t.forEach(function (e) {
						var t, n, i;
						(t = r),
							(i = o[(n = e)]),
							n in t
								? Object.defineProperty(t, n, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (t[n] = i);
					});
			}
			return r;
		}
		(f = f && f.hasOwnProperty("default") ? f.default : f),
			(p = p && p.hasOwnProperty("default") ? p.default : p);
		var t = "transitionend";
		function n(e) {
			var t = this,
				n = !1;
			return (
				p(this).one(g.TRANSITION_END, function () {
					n = !0;
				}),
				setTimeout(function () {
					n || g.triggerTransitionEnd(t);
				}, e),
				this
			);
		}
		var g = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function (e) {
				for (
					;
					(e += ~~(1e6 * Math.random())), document.getElementById(e);

				);
				return e;
			},
			getSelectorFromElement: function (e) {
				var t = e.getAttribute("data-target");
				(t && "#" !== t) || (t = e.getAttribute("href") || "");
				try {
					return document.querySelector(t) ? t : null;
				} catch (e) {
					return null;
				}
			},
			getTransitionDurationFromElement: function (e) {
				if (!e) return 0;
				var t = p(e).css("transition-duration"),
					n = p(e).css("transition-delay"),
					i = parseFloat(t),
					r = parseFloat(n);
				return i || r
					? ((t = t.split(",")[0]),
					  (n = n.split(",")[0]),
					  1e3 * (parseFloat(t) + parseFloat(n)))
					: 0;
			},
			reflow: function (e) {
				return e.offsetHeight;
			},
			triggerTransitionEnd: function (e) {
				p(e).trigger(t);
			},
			supportsTransitionEnd: function () {
				return Boolean(t);
			},
			isElement: function (e) {
				return (e[0] || e).nodeType;
			},
			typeCheckConfig: function (e, t, n) {
				for (var i in n)
					if (Object.prototype.hasOwnProperty.call(n, i)) {
						var r = n[i],
							o = t[i],
							s =
								o && g.isElement(o)
									? "element"
									: ((a = o),
									  {}.toString
											.call(a)
											.match(/\s([a-z]+)/i)[1]
											.toLowerCase());
						if (!new RegExp(r).test(s))
							throw new Error(
								e.toUpperCase() +
									': Option "' +
									i +
									'" provided type "' +
									s +
									'" but expected type "' +
									r +
									'".'
							);
					}
				var a;
			},
			findShadowRoot: function (e) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" == typeof e.getRootNode) {
					var t = e.getRootNode();
					return t instanceof ShadowRoot ? t : null;
				}
				return e instanceof ShadowRoot
					? e
					: e.parentNode
					? g.findShadowRoot(e.parentNode)
					: null;
			},
		};
		(p.fn.emulateTransitionEnd = n),
			(p.event.special[g.TRANSITION_END] = {
				bindType: t,
				delegateType: t,
				handle: function (e) {
					if (p(e.target).is(this))
						return e.handleObj.handler.apply(this, arguments);
				},
			});
		var r = "alert",
			o = "bs.alert",
			a = "." + o,
			c = p.fn[r],
			u = {
				CLOSE: "close" + a,
				CLOSED: "closed" + a,
				CLICK_DATA_API: "click" + a + ".data-api",
			},
			d = "alert",
			h = "fade",
			m = "show",
			v = (function () {
				function i(e) {
					this._element = e;
				}
				var e = i.prototype;
				return (
					(e.close = function (e) {
						var t = this._element;
						e && (t = this._getRootElement(e)),
							this._triggerCloseEvent(t).isDefaultPrevented() ||
								this._removeElement(t);
					}),
					(e.dispose = function () {
						p.removeData(this._element, o), (this._element = null);
					}),
					(e._getRootElement = function (e) {
						var t = g.getSelectorFromElement(e),
							n = !1;
						return (
							t && (n = document.querySelector(t)),
							n || (n = p(e).closest("." + d)[0]),
							n
						);
					}),
					(e._triggerCloseEvent = function (e) {
						var t = p.Event(u.CLOSE);
						return p(e).trigger(t), t;
					}),
					(e._removeElement = function (t) {
						var n = this;
						if ((p(t).removeClass(m), p(t).hasClass(h))) {
							var e = g.getTransitionDurationFromElement(t);
							p(t)
								.one(g.TRANSITION_END, function (e) {
									return n._destroyElement(t, e);
								})
								.emulateTransitionEnd(e);
						} else this._destroyElement(t);
					}),
					(e._destroyElement = function (e) {
						p(e).detach().trigger(u.CLOSED).remove();
					}),
					(i._jQueryInterface = function (n) {
						return this.each(function () {
							var e = p(this),
								t = e.data(o);
							t || ((t = new i(this)), e.data(o, t)),
								"close" === n && t[n](this);
						});
					}),
					(i._handleDismiss = function (t) {
						return function (e) {
							e && e.preventDefault(), t.close(this);
						};
					}),
					s(i, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					i
				);
			})();
		p(document).on(
			u.CLICK_DATA_API,
			'[data-dismiss="alert"]',
			v._handleDismiss(new v())
		),
			(p.fn[r] = v._jQueryInterface),
			(p.fn[r].Constructor = v),
			(p.fn[r].noConflict = function () {
				return (p.fn[r] = c), v._jQueryInterface;
			});
		var y = "button",
			_ = "bs.button",
			b = "." + _,
			w = ".data-api",
			E = p.fn[y],
			T = "active",
			x = "btn",
			C = "focus",
			S = '[data-toggle^="button"]',
			D = '[data-toggle="buttons"]',
			A = 'input:not([type="hidden"])',
			k = ".active",
			N = ".btn",
			I = {
				CLICK_DATA_API: "click" + b + w,
				FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w,
			},
			O = (function () {
				function n(e) {
					this._element = e;
				}
				var e = n.prototype;
				return (
					(e.toggle = function () {
						var e = !0,
							t = !0,
							n = p(this._element).closest(D)[0];
						if (n) {
							var i = this._element.querySelector(A);
							if (i) {
								if ("radio" === i.type)
									if (
										i.checked &&
										this._element.classList.contains(T)
									)
										e = !1;
									else {
										var r = n.querySelector(k);
										r && p(r).removeClass(T);
									}
								if (e) {
									if (
										i.hasAttribute("disabled") ||
										n.hasAttribute("disabled") ||
										i.classList.contains("disabled") ||
										n.classList.contains("disabled")
									)
										return;
									(i.checked =
										!this._element.classList.contains(T)),
										p(i).trigger("change");
								}
								i.focus(), (t = !1);
							}
						}
						t &&
							this._element.setAttribute(
								"aria-pressed",
								!this._element.classList.contains(T)
							),
							e && p(this._element).toggleClass(T);
					}),
					(e.dispose = function () {
						p.removeData(this._element, _), (this._element = null);
					}),
					(n._jQueryInterface = function (t) {
						return this.each(function () {
							var e = p(this).data(_);
							e || ((e = new n(this)), p(this).data(_, e)),
								"toggle" === t && e[t]();
						});
					}),
					s(n, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					n
				);
			})();
		p(document)
			.on(I.CLICK_DATA_API, S, function (e) {
				e.preventDefault();
				var t = e.target;
				p(t).hasClass(x) || (t = p(t).closest(N)),
					O._jQueryInterface.call(p(t), "toggle");
			})
			.on(I.FOCUS_BLUR_DATA_API, S, function (e) {
				var t = p(e.target).closest(N)[0];
				p(t).toggleClass(C, /^focus(in)?$/.test(e.type));
			}),
			(p.fn[y] = O._jQueryInterface),
			(p.fn[y].Constructor = O),
			(p.fn[y].noConflict = function () {
				return (p.fn[y] = E), O._jQueryInterface;
			});
		var j = "carousel",
			L = "bs.carousel",
			P = "." + L,
			H = ".data-api",
			q = p.fn[j],
			R = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0,
			},
			F = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean",
			},
			M = "next",
			W = "prev",
			B = "left",
			U = "right",
			K = {
				SLIDE: "slide" + P,
				SLID: "slid" + P,
				KEYDOWN: "keydown" + P,
				MOUSEENTER: "mouseenter" + P,
				MOUSELEAVE: "mouseleave" + P,
				TOUCHSTART: "touchstart" + P,
				TOUCHMOVE: "touchmove" + P,
				TOUCHEND: "touchend" + P,
				POINTERDOWN: "pointerdown" + P,
				POINTERUP: "pointerup" + P,
				DRAG_START: "dragstart" + P,
				LOAD_DATA_API: "load" + P + H,
				CLICK_DATA_API: "click" + P + H,
			},
			$ = "carousel",
			Q = "active",
			z = "slide",
			V = "carousel-item-right",
			X = "carousel-item-left",
			Y = "carousel-item-next",
			G = "carousel-item-prev",
			J = "pointer-event",
			Z = ".active",
			ee = ".active.carousel-item",
			te = ".carousel-item",
			ne = ".carousel-item img",
			ie = ".carousel-item-next, .carousel-item-prev",
			re = ".carousel-indicators",
			oe = "[data-slide], [data-slide-to]",
			se = '[data-ride="carousel"]',
			ae = { TOUCH: "touch", PEN: "pen" },
			le = (function () {
				function o(e, t) {
					(this._items = null),
						(this._interval = null),
						(this._activeElement = null),
						(this._isPaused = !1),
						(this._isSliding = !1),
						(this.touchTimeout = null),
						(this.touchStartX = 0),
						(this.touchDeltaX = 0),
						(this._config = this._getConfig(t)),
						(this._element = e),
						(this._indicatorsElement =
							this._element.querySelector(re)),
						(this._touchSupported =
							"ontouchstart" in document.documentElement ||
							0 < navigator.maxTouchPoints),
						(this._pointerEvent = Boolean(
							window.PointerEvent || window.MSPointerEvent
						)),
						this._addEventListeners();
				}
				var e = o.prototype;
				return (
					(e.next = function () {
						this._isSliding || this._slide(M);
					}),
					(e.nextWhenVisible = function () {
						!document.hidden &&
							p(this._element).is(":visible") &&
							"hidden" !== p(this._element).css("visibility") &&
							this.next();
					}),
					(e.prev = function () {
						this._isSliding || this._slide(W);
					}),
					(e.pause = function (e) {
						e || (this._isPaused = !0),
							this._element.querySelector(ie) &&
								(g.triggerTransitionEnd(this._element),
								this.cycle(!0)),
							clearInterval(this._interval),
							(this._interval = null);
					}),
					(e.cycle = function (e) {
						e || (this._isPaused = !1),
							this._interval &&
								(clearInterval(this._interval),
								(this._interval = null)),
							this._config.interval &&
								!this._isPaused &&
								(this._interval = setInterval(
									(document.visibilityState
										? this.nextWhenVisible
										: this.next
									).bind(this),
									this._config.interval
								));
					}),
					(e.to = function (e) {
						var t = this;
						this._activeElement = this._element.querySelector(ee);
						var n = this._getItemIndex(this._activeElement);
						if (!(e > this._items.length - 1 || e < 0))
							if (this._isSliding)
								p(this._element).one(K.SLID, function () {
									return t.to(e);
								});
							else {
								if (n === e)
									return this.pause(), void this.cycle();
								var i = n < e ? M : W;
								this._slide(i, this._items[e]);
							}
					}),
					(e.dispose = function () {
						p(this._element).off(P),
							p.removeData(this._element, L),
							(this._items = null),
							(this._config = null),
							(this._element = null),
							(this._interval = null),
							(this._isPaused = null),
							(this._isSliding = null),
							(this._activeElement = null),
							(this._indicatorsElement = null);
					}),
					(e._getConfig = function (e) {
						return (e = l({}, R, e)), g.typeCheckConfig(j, e, F), e;
					}),
					(e._handleSwipe = function () {
						var e = Math.abs(this.touchDeltaX);
						if (!(e <= 40)) {
							var t = e / this.touchDeltaX;
							0 < t && this.prev(), t < 0 && this.next();
						}
					}),
					(e._addEventListeners = function () {
						var t = this;
						this._config.keyboard &&
							p(this._element).on(K.KEYDOWN, function (e) {
								return t._keydown(e);
							}),
							"hover" === this._config.pause &&
								p(this._element)
									.on(K.MOUSEENTER, function (e) {
										return t.pause(e);
									})
									.on(K.MOUSELEAVE, function (e) {
										return t.cycle(e);
									}),
							this._addTouchEventListeners();
					}),
					(e._addTouchEventListeners = function () {
						var n = this;
						if (this._touchSupported) {
							var t = function (e) {
									n._pointerEvent &&
									ae[
										e.originalEvent.pointerType.toUpperCase()
									]
										? (n.touchStartX =
												e.originalEvent.clientX)
										: n._pointerEvent ||
										  (n.touchStartX =
												e.originalEvent.touches[0].clientX);
								},
								i = function (e) {
									n._pointerEvent &&
										ae[
											e.originalEvent.pointerType.toUpperCase()
										] &&
										(n.touchDeltaX =
											e.originalEvent.clientX -
											n.touchStartX),
										n._handleSwipe(),
										"hover" === n._config.pause &&
											(n.pause(),
											n.touchTimeout &&
												clearTimeout(n.touchTimeout),
											(n.touchTimeout = setTimeout(
												function (e) {
													return n.cycle(e);
												},
												500 + n._config.interval
											)));
								};
							p(this._element.querySelectorAll(ne)).on(
								K.DRAG_START,
								function (e) {
									return e.preventDefault();
								}
							),
								this._pointerEvent
									? (p(this._element).on(
											K.POINTERDOWN,
											function (e) {
												return t(e);
											}
									  ),
									  p(this._element).on(
											K.POINTERUP,
											function (e) {
												return i(e);
											}
									  ),
									  this._element.classList.add(J))
									: (p(this._element).on(
											K.TOUCHSTART,
											function (e) {
												return t(e);
											}
									  ),
									  p(this._element).on(
											K.TOUCHMOVE,
											function (e) {
												var t;
												(t = e).originalEvent.touches &&
												1 <
													t.originalEvent.touches
														.length
													? (n.touchDeltaX = 0)
													: (n.touchDeltaX =
															t.originalEvent
																.touches[0]
																.clientX -
															n.touchStartX);
											}
									  ),
									  p(this._element).on(
											K.TOUCHEND,
											function (e) {
												return i(e);
											}
									  ));
						}
					}),
					(e._keydown = function (e) {
						if (!/input|textarea/i.test(e.target.tagName))
							switch (e.which) {
								case 37:
									e.preventDefault(), this.prev();
									break;
								case 39:
									e.preventDefault(), this.next();
							}
					}),
					(e._getItemIndex = function (e) {
						return (
							(this._items =
								e && e.parentNode
									? [].slice.call(
											e.parentNode.querySelectorAll(te)
									  )
									: []),
							this._items.indexOf(e)
						);
					}),
					(e._getItemByDirection = function (e, t) {
						var n = e === M,
							i = e === W,
							r = this._getItemIndex(t),
							o = this._items.length - 1;
						if (
							((i && 0 === r) || (n && r === o)) &&
							!this._config.wrap
						)
							return t;
						var s = (r + (e === W ? -1 : 1)) % this._items.length;
						return -1 === s
							? this._items[this._items.length - 1]
							: this._items[s];
					}),
					(e._triggerSlideEvent = function (e, t) {
						var n = this._getItemIndex(e),
							i = this._getItemIndex(
								this._element.querySelector(ee)
							),
							r = p.Event(K.SLIDE, {
								relatedTarget: e,
								direction: t,
								from: i,
								to: n,
							});
						return p(this._element).trigger(r), r;
					}),
					(e._setActiveIndicatorElement = function (e) {
						if (this._indicatorsElement) {
							var t = [].slice.call(
								this._indicatorsElement.querySelectorAll(Z)
							);
							p(t).removeClass(Q);
							var n =
								this._indicatorsElement.children[
									this._getItemIndex(e)
								];
							n && p(n).addClass(Q);
						}
					}),
					(e._slide = function (e, t) {
						var n,
							i,
							r,
							o = this,
							s = this._element.querySelector(ee),
							a = this._getItemIndex(s),
							l = t || (s && this._getItemByDirection(e, s)),
							c = this._getItemIndex(l),
							u = Boolean(this._interval);
						if (
							(e === M
								? ((n = X), (i = Y), (r = B))
								: ((n = V), (i = G), (r = U)),
							l && p(l).hasClass(Q))
						)
							this._isSliding = !1;
						else if (
							!this._triggerSlideEvent(
								l,
								r
							).isDefaultPrevented() &&
							s &&
							l
						) {
							(this._isSliding = !0),
								u && this.pause(),
								this._setActiveIndicatorElement(l);
							var f = p.Event(K.SLID, {
								relatedTarget: l,
								direction: r,
								from: a,
								to: c,
							});
							if (p(this._element).hasClass(z)) {
								p(l).addClass(i),
									g.reflow(l),
									p(s).addClass(n),
									p(l).addClass(n);
								var d = parseInt(
									l.getAttribute("data-interval"),
									10
								);
								d
									? ((this._config.defaultInterval =
											this._config.defaultInterval ||
											this._config.interval),
									  (this._config.interval = d))
									: (this._config.interval =
											this._config.defaultInterval ||
											this._config.interval);
								var h = g.getTransitionDurationFromElement(s);
								p(s)
									.one(g.TRANSITION_END, function () {
										p(l)
											.removeClass(n + " " + i)
											.addClass(Q),
											p(s).removeClass(
												Q + " " + i + " " + n
											),
											(o._isSliding = !1),
											setTimeout(function () {
												return p(o._element).trigger(f);
											}, 0);
									})
									.emulateTransitionEnd(h);
							} else
								p(s).removeClass(Q),
									p(l).addClass(Q),
									(this._isSliding = !1),
									p(this._element).trigger(f);
							u && this.cycle();
						}
					}),
					(o._jQueryInterface = function (i) {
						return this.each(function () {
							var e = p(this).data(L),
								t = l({}, R, p(this).data());
							"object" == typeof i && (t = l({}, t, i));
							var n = "string" == typeof i ? i : t.slide;
							if (
								(e ||
									((e = new o(this, t)), p(this).data(L, e)),
								"number" == typeof i)
							)
								e.to(i);
							else if ("string" == typeof n) {
								if (void 0 === e[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								e[n]();
							} else t.interval && (e.pause(), e.cycle());
						});
					}),
					(o._dataApiClickHandler = function (e) {
						var t = g.getSelectorFromElement(this);
						if (t) {
							var n = p(t)[0];
							if (n && p(n).hasClass($)) {
								var i = l({}, p(n).data(), p(this).data()),
									r = this.getAttribute("data-slide-to");
								r && (i.interval = !1),
									o._jQueryInterface.call(p(n), i),
									r && p(n).data(L).to(r),
									e.preventDefault();
							}
						}
					}),
					s(o, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return R;
							},
						},
					]),
					o
				);
			})();
		p(document).on(K.CLICK_DATA_API, oe, le._dataApiClickHandler),
			p(window).on(K.LOAD_DATA_API, function () {
				for (
					var e = [].slice.call(document.querySelectorAll(se)),
						t = 0,
						n = e.length;
					t < n;
					t++
				) {
					var i = p(e[t]);
					le._jQueryInterface.call(i, i.data());
				}
			}),
			(p.fn[j] = le._jQueryInterface),
			(p.fn[j].Constructor = le),
			(p.fn[j].noConflict = function () {
				return (p.fn[j] = q), le._jQueryInterface;
			});
		var ce = "collapse",
			ue = "bs.collapse",
			fe = "." + ue,
			de = p.fn[ce],
			he = { toggle: !0, parent: "" },
			pe = { toggle: "boolean", parent: "(string|element)" },
			ge = {
				SHOW: "show" + fe,
				SHOWN: "shown" + fe,
				HIDE: "hide" + fe,
				HIDDEN: "hidden" + fe,
				CLICK_DATA_API: "click" + fe + ".data-api",
			},
			me = "show",
			ve = "collapse",
			ye = "collapsing",
			_e = "collapsed",
			be = "width",
			we = "height",
			Ee = ".show, .collapsing",
			Te = '[data-toggle="collapse"]',
			xe = (function () {
				function a(t, e) {
					(this._isTransitioning = !1),
						(this._element = t),
						(this._config = this._getConfig(e)),
						(this._triggerArray = [].slice.call(
							document.querySelectorAll(
								'[data-toggle="collapse"][href="#' +
									t.id +
									'"],[data-toggle="collapse"][data-target="#' +
									t.id +
									'"]'
							)
						));
					for (
						var n = [].slice.call(document.querySelectorAll(Te)),
							i = 0,
							r = n.length;
						i < r;
						i++
					) {
						var o = n[i],
							s = g.getSelectorFromElement(o),
							a = [].slice
								.call(document.querySelectorAll(s))
								.filter(function (e) {
									return e === t;
								});
						null !== s &&
							0 < a.length &&
							((this._selector = s), this._triggerArray.push(o));
					}
					(this._parent = this._config.parent
						? this._getParent()
						: null),
						this._config.parent ||
							this._addAriaAndCollapsedClass(
								this._element,
								this._triggerArray
							),
						this._config.toggle && this.toggle();
				}
				var e = a.prototype;
				return (
					(e.toggle = function () {
						p(this._element).hasClass(me)
							? this.hide()
							: this.show();
					}),
					(e.show = function () {
						var e,
							t,
							n = this;
						if (
							!this._isTransitioning &&
							!p(this._element).hasClass(me) &&
							(this._parent &&
								0 ===
									(e = [].slice
										.call(this._parent.querySelectorAll(Ee))
										.filter(function (e) {
											return "string" ==
												typeof n._config.parent
												? e.getAttribute(
														"data-parent"
												  ) === n._config.parent
												: e.classList.contains(ve);
										})).length &&
								(e = null),
							!(
								e &&
								(t = p(e).not(this._selector).data(ue)) &&
								t._isTransitioning
							))
						) {
							var i = p.Event(ge.SHOW);
							if (
								(p(this._element).trigger(i),
								!i.isDefaultPrevented())
							) {
								e &&
									(a._jQueryInterface.call(
										p(e).not(this._selector),
										"hide"
									),
									t || p(e).data(ue, null));
								var r = this._getDimension();
								p(this._element).removeClass(ve).addClass(ye),
									(this._element.style[r] = 0),
									this._triggerArray.length &&
										p(this._triggerArray)
											.removeClass(_e)
											.attr("aria-expanded", !0),
									this.setTransitioning(!0);
								var o =
										"scroll" +
										(r[0].toUpperCase() + r.slice(1)),
									s = g.getTransitionDurationFromElement(
										this._element
									);
								p(this._element)
									.one(g.TRANSITION_END, function () {
										p(n._element)
											.removeClass(ye)
											.addClass(ve)
											.addClass(me),
											(n._element.style[r] = ""),
											n.setTransitioning(!1),
											p(n._element).trigger(ge.SHOWN);
									})
									.emulateTransitionEnd(s),
									(this._element.style[r] =
										this._element[o] + "px");
							}
						}
					}),
					(e.hide = function () {
						var e = this;
						if (
							!this._isTransitioning &&
							p(this._element).hasClass(me)
						) {
							var t = p.Event(ge.HIDE);
							if (
								(p(this._element).trigger(t),
								!t.isDefaultPrevented())
							) {
								var n = this._getDimension();
								(this._element.style[n] =
									this._element.getBoundingClientRect()[n] +
									"px"),
									g.reflow(this._element),
									p(this._element)
										.addClass(ye)
										.removeClass(ve)
										.removeClass(me);
								var i = this._triggerArray.length;
								if (0 < i)
									for (var r = 0; r < i; r++) {
										var o = this._triggerArray[r],
											s = g.getSelectorFromElement(o);
										if (null !== s)
											p(
												[].slice.call(
													document.querySelectorAll(s)
												)
											).hasClass(me) ||
												p(o)
													.addClass(_e)
													.attr("aria-expanded", !1);
									}
								this.setTransitioning(!0);
								this._element.style[n] = "";
								var a = g.getTransitionDurationFromElement(
									this._element
								);
								p(this._element)
									.one(g.TRANSITION_END, function () {
										e.setTransitioning(!1),
											p(e._element)
												.removeClass(ye)
												.addClass(ve)
												.trigger(ge.HIDDEN);
									})
									.emulateTransitionEnd(a);
							}
						}
					}),
					(e.setTransitioning = function (e) {
						this._isTransitioning = e;
					}),
					(e.dispose = function () {
						p.removeData(this._element, ue),
							(this._config = null),
							(this._parent = null),
							(this._element = null),
							(this._triggerArray = null),
							(this._isTransitioning = null);
					}),
					(e._getConfig = function (e) {
						return (
							((e = l({}, he, e)).toggle = Boolean(e.toggle)),
							g.typeCheckConfig(ce, e, pe),
							e
						);
					}),
					(e._getDimension = function () {
						return p(this._element).hasClass(be) ? be : we;
					}),
					(e._getParent = function () {
						var e,
							n = this;
						g.isElement(this._config.parent)
							? ((e = this._config.parent),
							  void 0 !== this._config.parent.jquery &&
									(e = this._config.parent[0]))
							: (e = document.querySelector(this._config.parent));
						var t =
								'[data-toggle="collapse"][data-parent="' +
								this._config.parent +
								'"]',
							i = [].slice.call(e.querySelectorAll(t));
						return (
							p(i).each(function (e, t) {
								n._addAriaAndCollapsedClass(
									a._getTargetFromElement(t),
									[t]
								);
							}),
							e
						);
					}),
					(e._addAriaAndCollapsedClass = function (e, t) {
						var n = p(e).hasClass(me);
						t.length &&
							p(t).toggleClass(_e, !n).attr("aria-expanded", n);
					}),
					(a._getTargetFromElement = function (e) {
						var t = g.getSelectorFromElement(e);
						return t ? document.querySelector(t) : null;
					}),
					(a._jQueryInterface = function (i) {
						return this.each(function () {
							var e = p(this),
								t = e.data(ue),
								n = l(
									{},
									he,
									e.data(),
									"object" == typeof i && i ? i : {}
								);
							if (
								(!t &&
									n.toggle &&
									/show|hide/.test(i) &&
									(n.toggle = !1),
								t || ((t = new a(this, n)), e.data(ue, t)),
								"string" == typeof i)
							) {
								if (void 0 === t[i])
									throw new TypeError(
										'No method named "' + i + '"'
									);
								t[i]();
							}
						});
					}),
					s(a, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return he;
							},
						},
					]),
					a
				);
			})();
		p(document).on(ge.CLICK_DATA_API, Te, function (e) {
			"A" === e.currentTarget.tagName && e.preventDefault();
			var n = p(this),
				t = g.getSelectorFromElement(this),
				i = [].slice.call(document.querySelectorAll(t));
			p(i).each(function () {
				var e = p(this),
					t = e.data(ue) ? "toggle" : n.data();
				xe._jQueryInterface.call(e, t);
			});
		}),
			(p.fn[ce] = xe._jQueryInterface),
			(p.fn[ce].Constructor = xe),
			(p.fn[ce].noConflict = function () {
				return (p.fn[ce] = de), xe._jQueryInterface;
			});
		var Ce = "dropdown",
			Se = "bs.dropdown",
			De = "." + Se,
			Ae = ".data-api",
			ke = p.fn[Ce],
			Ne = new RegExp("38|40|27"),
			Ie = {
				HIDE: "hide" + De,
				HIDDEN: "hidden" + De,
				SHOW: "show" + De,
				SHOWN: "shown" + De,
				CLICK: "click" + De,
				CLICK_DATA_API: "click" + De + Ae,
				KEYDOWN_DATA_API: "keydown" + De + Ae,
				KEYUP_DATA_API: "keyup" + De + Ae,
			},
			Oe = "disabled",
			je = "show",
			Le = "dropup",
			Pe = "dropright",
			He = "dropleft",
			qe = "dropdown-menu-right",
			Re = "position-static",
			Fe = '[data-toggle="dropdown"]',
			Me = ".dropdown form",
			We = ".dropdown-menu",
			Be = ".navbar-nav",
			Ue = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
			Ke = "top-start",
			$e = "top-end",
			Qe = "bottom-start",
			ze = "bottom-end",
			Ve = "right-start",
			Xe = "left-start",
			Ye = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic",
			},
			Ge = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string",
			},
			Je = (function () {
				function c(e, t) {
					(this._element = e),
						(this._popper = null),
						(this._config = this._getConfig(t)),
						(this._menu = this._getMenuElement()),
						(this._inNavbar = this._detectNavbar()),
						this._addEventListeners();
				}
				var e = c.prototype;
				return (
					(e.toggle = function () {
						if (
							!this._element.disabled &&
							!p(this._element).hasClass(Oe)
						) {
							var e = c._getParentFromElement(this._element),
								t = p(this._menu).hasClass(je);
							if ((c._clearMenus(), !t)) {
								var n = { relatedTarget: this._element },
									i = p.Event(Ie.SHOW, n);
								if (
									(p(e).trigger(i), !i.isDefaultPrevented())
								) {
									if (!this._inNavbar) {
										if (void 0 === f)
											throw new TypeError(
												"Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
											);
										var r = this._element;
										"parent" === this._config.reference
											? (r = e)
											: g.isElement(
													this._config.reference
											  ) &&
											  ((r = this._config.reference),
											  void 0 !==
													this._config.reference
														.jquery &&
													(r =
														this._config
															.reference[0])),
											"scrollParent" !==
												this._config.boundary &&
												p(e).addClass(Re),
											(this._popper = new f(
												r,
												this._menu,
												this._getPopperConfig()
											));
									}
									"ontouchstart" in
										document.documentElement &&
										0 === p(e).closest(Be).length &&
										p(document.body)
											.children()
											.on("mouseover", null, p.noop),
										this._element.focus(),
										this._element.setAttribute(
											"aria-expanded",
											!0
										),
										p(this._menu).toggleClass(je),
										p(e)
											.toggleClass(je)
											.trigger(p.Event(Ie.SHOWN, n));
								}
							}
						}
					}),
					(e.show = function () {
						if (
							!(
								this._element.disabled ||
								p(this._element).hasClass(Oe) ||
								p(this._menu).hasClass(je)
							)
						) {
							var e = { relatedTarget: this._element },
								t = p.Event(Ie.SHOW, e),
								n = c._getParentFromElement(this._element);
							p(n).trigger(t),
								t.isDefaultPrevented() ||
									(p(this._menu).toggleClass(je),
									p(n)
										.toggleClass(je)
										.trigger(p.Event(Ie.SHOWN, e)));
						}
					}),
					(e.hide = function () {
						if (
							!this._element.disabled &&
							!p(this._element).hasClass(Oe) &&
							p(this._menu).hasClass(je)
						) {
							var e = { relatedTarget: this._element },
								t = p.Event(Ie.HIDE, e),
								n = c._getParentFromElement(this._element);
							p(n).trigger(t),
								t.isDefaultPrevented() ||
									(p(this._menu).toggleClass(je),
									p(n)
										.toggleClass(je)
										.trigger(p.Event(Ie.HIDDEN, e)));
						}
					}),
					(e.dispose = function () {
						p.removeData(this._element, Se),
							p(this._element).off(De),
							(this._element = null),
							(this._menu = null) !== this._popper &&
								(this._popper.destroy(), (this._popper = null));
					}),
					(e.update = function () {
						(this._inNavbar = this._detectNavbar()),
							null !== this._popper &&
								this._popper.scheduleUpdate();
					}),
					(e._addEventListeners = function () {
						var t = this;
						p(this._element).on(Ie.CLICK, function (e) {
							e.preventDefault(), e.stopPropagation(), t.toggle();
						});
					}),
					(e._getConfig = function (e) {
						return (
							(e = l(
								{},
								this.constructor.Default,
								p(this._element).data(),
								e
							)),
							g.typeCheckConfig(
								Ce,
								e,
								this.constructor.DefaultType
							),
							e
						);
					}),
					(e._getMenuElement = function () {
						if (!this._menu) {
							var e = c._getParentFromElement(this._element);
							e && (this._menu = e.querySelector(We));
						}
						return this._menu;
					}),
					(e._getPlacement = function () {
						var e = p(this._element.parentNode),
							t = Qe;
						return (
							e.hasClass(Le)
								? ((t = Ke),
								  p(this._menu).hasClass(qe) && (t = $e))
								: e.hasClass(Pe)
								? (t = Ve)
								: e.hasClass(He)
								? (t = Xe)
								: p(this._menu).hasClass(qe) && (t = ze),
							t
						);
					}),
					(e._detectNavbar = function () {
						return 0 < p(this._element).closest(".navbar").length;
					}),
					(e._getPopperConfig = function () {
						var t = this,
							e = {};
						"function" == typeof this._config.offset
							? (e.fn = function (e) {
									return (
										(e.offsets = l(
											{},
											e.offsets,
											t._config.offset(e.offsets) || {}
										)),
										e
									);
							  })
							: (e.offset = this._config.offset);
						var n = {
							placement: this._getPlacement(),
							modifiers: {
								offset: e,
								flip: { enabled: this._config.flip },
								preventOverflow: {
									boundariesElement: this._config.boundary,
								},
							},
						};
						return (
							"static" === this._config.display &&
								(n.modifiers.applyStyle = { enabled: !1 }),
							n
						);
					}),
					(c._jQueryInterface = function (t) {
						return this.each(function () {
							var e = p(this).data(Se);
							if (
								(e ||
									((e = new c(
										this,
										"object" == typeof t ? t : null
									)),
									p(this).data(Se, e)),
								"string" == typeof t)
							) {
								if (void 0 === e[t])
									throw new TypeError(
										'No method named "' + t + '"'
									);
								e[t]();
							}
						});
					}),
					(c._clearMenus = function (e) {
						if (
							!e ||
							(3 !== e.which &&
								("keyup" !== e.type || 9 === e.which))
						)
							for (
								var t = [].slice.call(
										document.querySelectorAll(Fe)
									),
									n = 0,
									i = t.length;
								n < i;
								n++
							) {
								var r = c._getParentFromElement(t[n]),
									o = p(t[n]).data(Se),
									s = { relatedTarget: t[n] };
								if (
									(e &&
										"click" === e.type &&
										(s.clickEvent = e),
									o)
								) {
									var a = o._menu;
									if (
										p(r).hasClass(je) &&
										!(
											e &&
											(("click" === e.type &&
												/input|textarea/i.test(
													e.target.tagName
												)) ||
												("keyup" === e.type &&
													9 === e.which)) &&
											p.contains(r, e.target)
										)
									) {
										var l = p.Event(Ie.HIDE, s);
										p(r).trigger(l),
											l.isDefaultPrevented() ||
												("ontouchstart" in
													document.documentElement &&
													p(document.body)
														.children()
														.off(
															"mouseover",
															null,
															p.noop
														),
												t[n].setAttribute(
													"aria-expanded",
													"false"
												),
												p(a).removeClass(je),
												p(r)
													.removeClass(je)
													.trigger(
														p.Event(Ie.HIDDEN, s)
													));
									}
								}
							}
					}),
					(c._getParentFromElement = function (e) {
						var t,
							n = g.getSelectorFromElement(e);
						return (
							n && (t = document.querySelector(n)),
							t || e.parentNode
						);
					}),
					(c._dataApiKeydownHandler = function (e) {
						if (
							(/input|textarea/i.test(e.target.tagName)
								? !(
										32 === e.which ||
										(27 !== e.which &&
											((40 !== e.which &&
												38 !== e.which) ||
												p(e.target).closest(We).length))
								  )
								: Ne.test(e.which)) &&
							(e.preventDefault(),
							e.stopPropagation(),
							!this.disabled && !p(this).hasClass(Oe))
						) {
							var t = c._getParentFromElement(this),
								n = p(t).hasClass(je);
							if (
								n &&
								(!n || (27 !== e.which && 32 !== e.which))
							) {
								var i = [].slice.call(t.querySelectorAll(Ue));
								if (0 !== i.length) {
									var r = i.indexOf(e.target);
									38 === e.which && 0 < r && r--,
										40 === e.which &&
											r < i.length - 1 &&
											r++,
										r < 0 && (r = 0),
										i[r].focus();
								}
							} else {
								if (27 === e.which) {
									var o = t.querySelector(Fe);
									p(o).trigger("focus");
								}
								p(this).trigger("click");
							}
						}
					}),
					s(c, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Ye;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Ge;
							},
						},
					]),
					c
				);
			})();
		p(document)
			.on(Ie.KEYDOWN_DATA_API, Fe, Je._dataApiKeydownHandler)
			.on(Ie.KEYDOWN_DATA_API, We, Je._dataApiKeydownHandler)
			.on(Ie.CLICK_DATA_API + " " + Ie.KEYUP_DATA_API, Je._clearMenus)
			.on(Ie.CLICK_DATA_API, Fe, function (e) {
				e.preventDefault(),
					e.stopPropagation(),
					Je._jQueryInterface.call(p(this), "toggle");
			})
			.on(Ie.CLICK_DATA_API, Me, function (e) {
				e.stopPropagation();
			}),
			(p.fn[Ce] = Je._jQueryInterface),
			(p.fn[Ce].Constructor = Je),
			(p.fn[Ce].noConflict = function () {
				return (p.fn[Ce] = ke), Je._jQueryInterface;
			});
		var Ze = "modal",
			et = "bs.modal",
			tt = "." + et,
			nt = p.fn[Ze],
			it = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
			rt = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean",
			},
			ot = {
				HIDE: "hide" + tt,
				HIDDEN: "hidden" + tt,
				SHOW: "show" + tt,
				SHOWN: "shown" + tt,
				FOCUSIN: "focusin" + tt,
				RESIZE: "resize" + tt,
				CLICK_DISMISS: "click.dismiss" + tt,
				KEYDOWN_DISMISS: "keydown.dismiss" + tt,
				MOUSEUP_DISMISS: "mouseup.dismiss" + tt,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + tt,
				CLICK_DATA_API: "click" + tt + ".data-api",
			},
			st = "modal-scrollbar-measure",
			at = "modal-backdrop",
			lt = "modal-open",
			ct = "fade",
			ut = "show",
			ft = ".modal-dialog",
			dt = '[data-toggle="modal"]',
			ht = '[data-dismiss="modal"]',
			pt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			gt = ".sticky-top",
			mt = (function () {
				function r(e, t) {
					(this._config = this._getConfig(t)),
						(this._element = e),
						(this._dialog = e.querySelector(ft)),
						(this._backdrop = null),
						(this._isShown = !1),
						(this._isBodyOverflowing = !1),
						(this._ignoreBackdropClick = !1),
						(this._isTransitioning = !1),
						(this._scrollbarWidth = 0);
				}
				var e = r.prototype;
				return (
					(e.toggle = function (e) {
						return this._isShown ? this.hide() : this.show(e);
					}),
					(e.show = function (e) {
						var t = this;
						if (!this._isShown && !this._isTransitioning) {
							p(this._element).hasClass(ct) &&
								(this._isTransitioning = !0);
							var n = p.Event(ot.SHOW, { relatedTarget: e });
							p(this._element).trigger(n),
								this._isShown ||
									n.isDefaultPrevented() ||
									((this._isShown = !0),
									this._checkScrollbar(),
									this._setScrollbar(),
									this._adjustDialog(),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									p(this._element).on(
										ot.CLICK_DISMISS,
										ht,
										function (e) {
											return t.hide(e);
										}
									),
									p(this._dialog).on(
										ot.MOUSEDOWN_DISMISS,
										function () {
											p(t._element).one(
												ot.MOUSEUP_DISMISS,
												function (e) {
													p(e.target).is(
														t._element
													) &&
														(t._ignoreBackdropClick =
															!0);
												}
											);
										}
									),
									this._showBackdrop(function () {
										return t._showElement(e);
									}));
						}
					}),
					(e.hide = function (e) {
						var t = this;
						if (
							(e && e.preventDefault(),
							this._isShown && !this._isTransitioning)
						) {
							var n = p.Event(ot.HIDE);
							if (
								(p(this._element).trigger(n),
								this._isShown && !n.isDefaultPrevented())
							) {
								this._isShown = !1;
								var i = p(this._element).hasClass(ct);
								if (
									(i && (this._isTransitioning = !0),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									p(document).off(ot.FOCUSIN),
									p(this._element).removeClass(ut),
									p(this._element).off(ot.CLICK_DISMISS),
									p(this._dialog).off(ot.MOUSEDOWN_DISMISS),
									i)
								) {
									var r = g.getTransitionDurationFromElement(
										this._element
									);
									p(this._element)
										.one(g.TRANSITION_END, function (e) {
											return t._hideModal(e);
										})
										.emulateTransitionEnd(r);
								} else this._hideModal();
							}
						}
					}),
					(e.dispose = function () {
						[window, this._element, this._dialog].forEach(function (
							e
						) {
							return p(e).off(tt);
						}),
							p(document).off(ot.FOCUSIN),
							p.removeData(this._element, et),
							(this._config = null),
							(this._element = null),
							(this._dialog = null),
							(this._backdrop = null),
							(this._isShown = null),
							(this._isBodyOverflowing = null),
							(this._ignoreBackdropClick = null),
							(this._isTransitioning = null),
							(this._scrollbarWidth = null);
					}),
					(e.handleUpdate = function () {
						this._adjustDialog();
					}),
					(e._getConfig = function (e) {
						return (
							(e = l({}, it, e)), g.typeCheckConfig(Ze, e, rt), e
						);
					}),
					(e._showElement = function (e) {
						var t = this,
							n = p(this._element).hasClass(ct);
						(this._element.parentNode &&
							this._element.parentNode.nodeType ===
								Node.ELEMENT_NODE) ||
							document.body.appendChild(this._element),
							(this._element.style.display = "block"),
							this._element.removeAttribute("aria-hidden"),
							this._element.setAttribute("aria-modal", !0),
							(this._element.scrollTop = 0),
							n && g.reflow(this._element),
							p(this._element).addClass(ut),
							this._config.focus && this._enforceFocus();
						var i = p.Event(ot.SHOWN, { relatedTarget: e }),
							r = function () {
								t._config.focus && t._element.focus(),
									(t._isTransitioning = !1),
									p(t._element).trigger(i);
							};
						if (n) {
							var o = g.getTransitionDurationFromElement(
								this._dialog
							);
							p(this._dialog)
								.one(g.TRANSITION_END, r)
								.emulateTransitionEnd(o);
						} else r();
					}),
					(e._enforceFocus = function () {
						var t = this;
						p(document)
							.off(ot.FOCUSIN)
							.on(ot.FOCUSIN, function (e) {
								document !== e.target &&
									t._element !== e.target &&
									0 === p(t._element).has(e.target).length &&
									t._element.focus();
							});
					}),
					(e._setEscapeEvent = function () {
						var t = this;
						this._isShown && this._config.keyboard
							? p(this._element).on(
									ot.KEYDOWN_DISMISS,
									function (e) {
										27 === e.which &&
											(e.preventDefault(), t.hide());
									}
							  )
							: this._isShown ||
							  p(this._element).off(ot.KEYDOWN_DISMISS);
					}),
					(e._setResizeEvent = function () {
						var t = this;
						this._isShown
							? p(window).on(ot.RESIZE, function (e) {
									return t.handleUpdate(e);
							  })
							: p(window).off(ot.RESIZE);
					}),
					(e._hideModal = function () {
						var e = this;
						(this._element.style.display = "none"),
							this._element.setAttribute("aria-hidden", !0),
							this._element.removeAttribute("aria-modal"),
							(this._isTransitioning = !1),
							this._showBackdrop(function () {
								p(document.body).removeClass(lt),
									e._resetAdjustments(),
									e._resetScrollbar(),
									p(e._element).trigger(ot.HIDDEN);
							});
					}),
					(e._removeBackdrop = function () {
						this._backdrop &&
							(p(this._backdrop).remove(),
							(this._backdrop = null));
					}),
					(e._showBackdrop = function (e) {
						var t = this,
							n = p(this._element).hasClass(ct) ? ct : "";
						if (this._isShown && this._config.backdrop) {
							if (
								((this._backdrop =
									document.createElement("div")),
								(this._backdrop.className = at),
								n && this._backdrop.classList.add(n),
								p(this._backdrop).appendTo(document.body),
								p(this._element).on(
									ot.CLICK_DISMISS,
									function (e) {
										t._ignoreBackdropClick
											? (t._ignoreBackdropClick = !1)
											: e.target === e.currentTarget &&
											  ("static" === t._config.backdrop
													? t._element.focus()
													: t.hide());
									}
								),
								n && g.reflow(this._backdrop),
								p(this._backdrop).addClass(ut),
								!e)
							)
								return;
							if (!n) return void e();
							var i = g.getTransitionDurationFromElement(
								this._backdrop
							);
							p(this._backdrop)
								.one(g.TRANSITION_END, e)
								.emulateTransitionEnd(i);
						} else if (!this._isShown && this._backdrop) {
							p(this._backdrop).removeClass(ut);
							var r = function () {
								t._removeBackdrop(), e && e();
							};
							if (p(this._element).hasClass(ct)) {
								var o = g.getTransitionDurationFromElement(
									this._backdrop
								);
								p(this._backdrop)
									.one(g.TRANSITION_END, r)
									.emulateTransitionEnd(o);
							} else r();
						} else e && e();
					}),
					(e._adjustDialog = function () {
						var e =
							this._element.scrollHeight >
							document.documentElement.clientHeight;
						!this._isBodyOverflowing &&
							e &&
							(this._element.style.paddingLeft =
								this._scrollbarWidth + "px"),
							this._isBodyOverflowing &&
								!e &&
								(this._element.style.paddingRight =
									this._scrollbarWidth + "px");
					}),
					(e._resetAdjustments = function () {
						(this._element.style.paddingLeft = ""),
							(this._element.style.paddingRight = "");
					}),
					(e._checkScrollbar = function () {
						var e = document.body.getBoundingClientRect();
						(this._isBodyOverflowing =
							e.left + e.right < window.innerWidth),
							(this._scrollbarWidth = this._getScrollbarWidth());
					}),
					(e._setScrollbar = function () {
						var r = this;
						if (this._isBodyOverflowing) {
							var e = [].slice.call(
									document.querySelectorAll(pt)
								),
								t = [].slice.call(
									document.querySelectorAll(gt)
								);
							p(e).each(function (e, t) {
								var n = t.style.paddingRight,
									i = p(t).css("padding-right");
								p(t)
									.data("padding-right", n)
									.css(
										"padding-right",
										parseFloat(i) + r._scrollbarWidth + "px"
									);
							}),
								p(t).each(function (e, t) {
									var n = t.style.marginRight,
										i = p(t).css("margin-right");
									p(t)
										.data("margin-right", n)
										.css(
											"margin-right",
											parseFloat(i) -
												r._scrollbarWidth +
												"px"
										);
								});
							var n = document.body.style.paddingRight,
								i = p(document.body).css("padding-right");
							p(document.body)
								.data("padding-right", n)
								.css(
									"padding-right",
									parseFloat(i) + this._scrollbarWidth + "px"
								);
						}
						p(document.body).addClass(lt);
					}),
					(e._resetScrollbar = function () {
						var e = [].slice.call(document.querySelectorAll(pt));
						p(e).each(function (e, t) {
							var n = p(t).data("padding-right");
							p(t).removeData("padding-right"),
								(t.style.paddingRight = n || "");
						});
						var t = [].slice.call(
							document.querySelectorAll("" + gt)
						);
						p(t).each(function (e, t) {
							var n = p(t).data("margin-right");
							void 0 !== n &&
								p(t)
									.css("margin-right", n)
									.removeData("margin-right");
						});
						var n = p(document.body).data("padding-right");
						p(document.body).removeData("padding-right"),
							(document.body.style.paddingRight = n || "");
					}),
					(e._getScrollbarWidth = function () {
						var e = document.createElement("div");
						(e.className = st), document.body.appendChild(e);
						var t = e.getBoundingClientRect().width - e.clientWidth;
						return document.body.removeChild(e), t;
					}),
					(r._jQueryInterface = function (n, i) {
						return this.each(function () {
							var e = p(this).data(et),
								t = l(
									{},
									it,
									p(this).data(),
									"object" == typeof n && n ? n : {}
								);
							if (
								(e ||
									((e = new r(this, t)), p(this).data(et, e)),
								"string" == typeof n)
							) {
								if (void 0 === e[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								e[n](i);
							} else t.show && e.show(i);
						});
					}),
					s(r, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return it;
							},
						},
					]),
					r
				);
			})();
		p(document).on(ot.CLICK_DATA_API, dt, function (e) {
			var t,
				n = this,
				i = g.getSelectorFromElement(this);
			i && (t = document.querySelector(i));
			var r = p(t).data(et)
				? "toggle"
				: l({}, p(t).data(), p(this).data());
			("A" !== this.tagName && "AREA" !== this.tagName) ||
				e.preventDefault();
			var o = p(t).one(ot.SHOW, function (e) {
				e.isDefaultPrevented() ||
					o.one(ot.HIDDEN, function () {
						p(n).is(":visible") && n.focus();
					});
			});
			mt._jQueryInterface.call(p(t), r, this);
		}),
			(p.fn[Ze] = mt._jQueryInterface),
			(p.fn[Ze].Constructor = mt),
			(p.fn[Ze].noConflict = function () {
				return (p.fn[Ze] = nt), mt._jQueryInterface;
			});
		var vt = "tooltip",
			yt = "bs.tooltip",
			_t = "." + yt,
			bt = p.fn[vt],
			wt = "bs-tooltip",
			Et = new RegExp("(^|\\s)" + wt + "\\S+", "g"),
			Tt = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)",
			},
			xt = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left",
			},
			Ct = {
				animation: !0,
				template:
					'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent",
			},
			St = "show",
			Dt = "out",
			At = {
				HIDE: "hide" + _t,
				HIDDEN: "hidden" + _t,
				SHOW: "show" + _t,
				SHOWN: "shown" + _t,
				INSERTED: "inserted" + _t,
				CLICK: "click" + _t,
				FOCUSIN: "focusin" + _t,
				FOCUSOUT: "focusout" + _t,
				MOUSEENTER: "mouseenter" + _t,
				MOUSELEAVE: "mouseleave" + _t,
			},
			kt = "fade",
			Nt = "show",
			It = ".tooltip-inner",
			Ot = ".arrow",
			jt = "hover",
			Lt = "focus",
			Pt = "click",
			Ht = "manual",
			qt = (function () {
				function i(e, t) {
					if (void 0 === f)
						throw new TypeError(
							"Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
						);
					(this._isEnabled = !0),
						(this._timeout = 0),
						(this._hoverState = ""),
						(this._activeTrigger = {}),
						(this._popper = null),
						(this.element = e),
						(this.config = this._getConfig(t)),
						(this.tip = null),
						this._setListeners();
				}
				var e = i.prototype;
				return (
					(e.enable = function () {
						this._isEnabled = !0;
					}),
					(e.disable = function () {
						this._isEnabled = !1;
					}),
					(e.toggleEnabled = function () {
						this._isEnabled = !this._isEnabled;
					}),
					(e.toggle = function (e) {
						if (this._isEnabled)
							if (e) {
								var t = this.constructor.DATA_KEY,
									n = p(e.currentTarget).data(t);
								n ||
									((n = new this.constructor(
										e.currentTarget,
										this._getDelegateConfig()
									)),
									p(e.currentTarget).data(t, n)),
									(n._activeTrigger.click =
										!n._activeTrigger.click),
									n._isWithActiveTrigger()
										? n._enter(null, n)
										: n._leave(null, n);
							} else {
								if (p(this.getTipElement()).hasClass(Nt))
									return void this._leave(null, this);
								this._enter(null, this);
							}
					}),
					(e.dispose = function () {
						clearTimeout(this._timeout),
							p.removeData(
								this.element,
								this.constructor.DATA_KEY
							),
							p(this.element).off(this.constructor.EVENT_KEY),
							p(this.element)
								.closest(".modal")
								.off("hide.bs.modal"),
							this.tip && p(this.tip).remove(),
							(this._isEnabled = null),
							(this._timeout = null),
							(this._hoverState = null),
							(this._activeTrigger = null) !== this._popper &&
								this._popper.destroy(),
							(this._popper = null),
							(this.element = null),
							(this.config = null),
							(this.tip = null);
					}),
					(e.show = function () {
						var t = this;
						if ("none" === p(this.element).css("display"))
							throw new Error(
								"Please use show on visible elements"
							);
						var e = p.Event(this.constructor.Event.SHOW);
						if (this.isWithContent() && this._isEnabled) {
							p(this.element).trigger(e);
							var n = g.findShadowRoot(this.element),
								i = p.contains(
									null !== n
										? n
										: this.element.ownerDocument
												.documentElement,
									this.element
								);
							if (e.isDefaultPrevented() || !i) return;
							var r = this.getTipElement(),
								o = g.getUID(this.constructor.NAME);
							r.setAttribute("id", o),
								this.element.setAttribute(
									"aria-describedby",
									o
								),
								this.setContent(),
								this.config.animation && p(r).addClass(kt);
							var s =
									"function" == typeof this.config.placement
										? this.config.placement.call(
												this,
												r,
												this.element
										  )
										: this.config.placement,
								a = this._getAttachment(s);
							this.addAttachmentClass(a);
							var l = this._getContainer();
							p(r).data(this.constructor.DATA_KEY, this),
								p.contains(
									this.element.ownerDocument.documentElement,
									this.tip
								) || p(r).appendTo(l),
								p(this.element).trigger(
									this.constructor.Event.INSERTED
								),
								(this._popper = new f(this.element, r, {
									placement: a,
									modifiers: {
										offset: { offset: this.config.offset },
										flip: {
											behavior:
												this.config.fallbackPlacement,
										},
										arrow: { element: Ot },
										preventOverflow: {
											boundariesElement:
												this.config.boundary,
										},
									},
									onCreate: function (e) {
										e.originalPlacement !== e.placement &&
											t._handlePopperPlacementChange(e);
									},
									onUpdate: function (e) {
										return t._handlePopperPlacementChange(
											e
										);
									},
								})),
								p(r).addClass(Nt),
								"ontouchstart" in document.documentElement &&
									p(document.body)
										.children()
										.on("mouseover", null, p.noop);
							var c = function () {
								t.config.animation && t._fixTransition();
								var e = t._hoverState;
								(t._hoverState = null),
									p(t.element).trigger(
										t.constructor.Event.SHOWN
									),
									e === Dt && t._leave(null, t);
							};
							if (p(this.tip).hasClass(kt)) {
								var u = g.getTransitionDurationFromElement(
									this.tip
								);
								p(this.tip)
									.one(g.TRANSITION_END, c)
									.emulateTransitionEnd(u);
							} else c();
						}
					}),
					(e.hide = function (e) {
						var t = this,
							n = this.getTipElement(),
							i = p.Event(this.constructor.Event.HIDE),
							r = function () {
								t._hoverState !== St &&
									n.parentNode &&
									n.parentNode.removeChild(n),
									t._cleanTipClass(),
									t.element.removeAttribute(
										"aria-describedby"
									),
									p(t.element).trigger(
										t.constructor.Event.HIDDEN
									),
									null !== t._popper && t._popper.destroy(),
									e && e();
							};
						if (
							(p(this.element).trigger(i),
							!i.isDefaultPrevented())
						) {
							if (
								(p(n).removeClass(Nt),
								"ontouchstart" in document.documentElement &&
									p(document.body)
										.children()
										.off("mouseover", null, p.noop),
								(this._activeTrigger[Pt] = !1),
								(this._activeTrigger[Lt] = !1),
								(this._activeTrigger[jt] = !1),
								p(this.tip).hasClass(kt))
							) {
								var o = g.getTransitionDurationFromElement(n);
								p(n)
									.one(g.TRANSITION_END, r)
									.emulateTransitionEnd(o);
							} else r();
							this._hoverState = "";
						}
					}),
					(e.update = function () {
						null !== this._popper && this._popper.scheduleUpdate();
					}),
					(e.isWithContent = function () {
						return Boolean(this.getTitle());
					}),
					(e.addAttachmentClass = function (e) {
						p(this.getTipElement()).addClass(wt + "-" + e);
					}),
					(e.getTipElement = function () {
						return (
							(this.tip = this.tip || p(this.config.template)[0]),
							this.tip
						);
					}),
					(e.setContent = function () {
						var e = this.getTipElement();
						this.setElementContent(
							p(e.querySelectorAll(It)),
							this.getTitle()
						),
							p(e).removeClass(kt + " " + Nt);
					}),
					(e.setElementContent = function (e, t) {
						var n = this.config.html;
						"object" == typeof t && (t.nodeType || t.jquery)
							? n
								? p(t).parent().is(e) || e.empty().append(t)
								: e.text(p(t).text())
							: e[n ? "html" : "text"](t);
					}),
					(e.getTitle = function () {
						var e = this.element.getAttribute(
							"data-original-title"
						);
						return (
							e ||
								(e =
									"function" == typeof this.config.title
										? this.config.title.call(this.element)
										: this.config.title),
							e
						);
					}),
					(e._getContainer = function () {
						return !1 === this.config.container
							? document.body
							: g.isElement(this.config.container)
							? p(this.config.container)
							: p(document).find(this.config.container);
					}),
					(e._getAttachment = function (e) {
						return xt[e.toUpperCase()];
					}),
					(e._setListeners = function () {
						var i = this;
						this.config.trigger.split(" ").forEach(function (e) {
							if ("click" === e)
								p(i.element).on(
									i.constructor.Event.CLICK,
									i.config.selector,
									function (e) {
										return i.toggle(e);
									}
								);
							else if (e !== Ht) {
								var t =
										e === jt
											? i.constructor.Event.MOUSEENTER
											: i.constructor.Event.FOCUSIN,
									n =
										e === jt
											? i.constructor.Event.MOUSELEAVE
											: i.constructor.Event.FOCUSOUT;
								p(i.element)
									.on(t, i.config.selector, function (e) {
										return i._enter(e);
									})
									.on(n, i.config.selector, function (e) {
										return i._leave(e);
									});
							}
						}),
							p(this.element)
								.closest(".modal")
								.on("hide.bs.modal", function () {
									i.element && i.hide();
								}),
							this.config.selector
								? (this.config = l({}, this.config, {
										trigger: "manual",
										selector: "",
								  }))
								: this._fixTitle();
					}),
					(e._fixTitle = function () {
						var e = typeof this.element.getAttribute(
							"data-original-title"
						);
						(this.element.getAttribute("title") ||
							"string" !== e) &&
							(this.element.setAttribute(
								"data-original-title",
								this.element.getAttribute("title") || ""
							),
							this.element.setAttribute("title", ""));
					}),
					(e._enter = function (e, t) {
						var n = this.constructor.DATA_KEY;
						(t = t || p(e.currentTarget).data(n)) ||
							((t = new this.constructor(
								e.currentTarget,
								this._getDelegateConfig()
							)),
							p(e.currentTarget).data(n, t)),
							e &&
								(t._activeTrigger[
									"focusin" === e.type ? Lt : jt
								] = !0),
							p(t.getTipElement()).hasClass(Nt) ||
							t._hoverState === St
								? (t._hoverState = St)
								: (clearTimeout(t._timeout),
								  (t._hoverState = St),
								  t.config.delay && t.config.delay.show
										? (t._timeout = setTimeout(function () {
												t._hoverState === St &&
													t.show();
										  }, t.config.delay.show))
										: t.show());
					}),
					(e._leave = function (e, t) {
						var n = this.constructor.DATA_KEY;
						(t = t || p(e.currentTarget).data(n)) ||
							((t = new this.constructor(
								e.currentTarget,
								this._getDelegateConfig()
							)),
							p(e.currentTarget).data(n, t)),
							e &&
								(t._activeTrigger[
									"focusout" === e.type ? Lt : jt
								] = !1),
							t._isWithActiveTrigger() ||
								(clearTimeout(t._timeout),
								(t._hoverState = Dt),
								t.config.delay && t.config.delay.hide
									? (t._timeout = setTimeout(function () {
											t._hoverState === Dt && t.hide();
									  }, t.config.delay.hide))
									: t.hide());
					}),
					(e._isWithActiveTrigger = function () {
						for (var e in this._activeTrigger)
							if (this._activeTrigger[e]) return !0;
						return !1;
					}),
					(e._getConfig = function (e) {
						return (
							"number" ==
								typeof (e = l(
									{},
									this.constructor.Default,
									p(this.element).data(),
									"object" == typeof e && e ? e : {}
								)).delay &&
								(e.delay = { show: e.delay, hide: e.delay }),
							"number" == typeof e.title &&
								(e.title = e.title.toString()),
							"number" == typeof e.content &&
								(e.content = e.content.toString()),
							g.typeCheckConfig(
								vt,
								e,
								this.constructor.DefaultType
							),
							e
						);
					}),
					(e._getDelegateConfig = function () {
						var e = {};
						if (this.config)
							for (var t in this.config)
								this.constructor.Default[t] !==
									this.config[t] && (e[t] = this.config[t]);
						return e;
					}),
					(e._cleanTipClass = function () {
						var e = p(this.getTipElement()),
							t = e.attr("class").match(Et);
						null !== t && t.length && e.removeClass(t.join(""));
					}),
					(e._handlePopperPlacementChange = function (e) {
						var t = e.instance;
						(this.tip = t.popper),
							this._cleanTipClass(),
							this.addAttachmentClass(
								this._getAttachment(e.placement)
							);
					}),
					(e._fixTransition = function () {
						var e = this.getTipElement(),
							t = this.config.animation;
						null === e.getAttribute("x-placement") &&
							(p(e).removeClass(kt),
							(this.config.animation = !1),
							this.hide(),
							this.show(),
							(this.config.animation = t));
					}),
					(i._jQueryInterface = function (n) {
						return this.each(function () {
							var e = p(this).data(yt),
								t = "object" == typeof n && n;
							if (
								(e || !/dispose|hide/.test(n)) &&
								(e ||
									((e = new i(this, t)), p(this).data(yt, e)),
								"string" == typeof n)
							) {
								if (void 0 === e[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								e[n]();
							}
						});
					}),
					s(i, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Ct;
							},
						},
						{
							key: "NAME",
							get: function () {
								return vt;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return yt;
							},
						},
						{
							key: "Event",
							get: function () {
								return At;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return _t;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return Tt;
							},
						},
					]),
					i
				);
			})();
		(p.fn[vt] = qt._jQueryInterface),
			(p.fn[vt].Constructor = qt),
			(p.fn[vt].noConflict = function () {
				return (p.fn[vt] = bt), qt._jQueryInterface;
			});
		var Rt = "popover",
			Ft = "bs.popover",
			Mt = "." + Ft,
			Wt = p.fn[Rt],
			Bt = "bs-popover",
			Ut = new RegExp("(^|\\s)" + Bt + "\\S+", "g"),
			Kt = l({}, qt.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template:
					'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			}),
			$t = l({}, qt.DefaultType, {
				content: "(string|element|function)",
			}),
			Qt = "fade",
			zt = "show",
			Vt = ".popover-header",
			Xt = ".popover-body",
			Yt = {
				HIDE: "hide" + Mt,
				HIDDEN: "hidden" + Mt,
				SHOW: "show" + Mt,
				SHOWN: "shown" + Mt,
				INSERTED: "inserted" + Mt,
				CLICK: "click" + Mt,
				FOCUSIN: "focusin" + Mt,
				FOCUSOUT: "focusout" + Mt,
				MOUSEENTER: "mouseenter" + Mt,
				MOUSELEAVE: "mouseleave" + Mt,
			},
			Gt = (function (e) {
				var t, n;
				function i() {
					return e.apply(this, arguments) || this;
				}
				(n = e),
					((t = i).prototype = Object.create(n.prototype)),
					((t.prototype.constructor = t).__proto__ = n);
				var r = i.prototype;
				return (
					(r.isWithContent = function () {
						return this.getTitle() || this._getContent();
					}),
					(r.addAttachmentClass = function (e) {
						p(this.getTipElement()).addClass(Bt + "-" + e);
					}),
					(r.getTipElement = function () {
						return (
							(this.tip = this.tip || p(this.config.template)[0]),
							this.tip
						);
					}),
					(r.setContent = function () {
						var e = p(this.getTipElement());
						this.setElementContent(e.find(Vt), this.getTitle());
						var t = this._getContent();
						"function" == typeof t && (t = t.call(this.element)),
							this.setElementContent(e.find(Xt), t),
							e.removeClass(Qt + " " + zt);
					}),
					(r._getContent = function () {
						return (
							this.element.getAttribute("data-content") ||
							this.config.content
						);
					}),
					(r._cleanTipClass = function () {
						var e = p(this.getTipElement()),
							t = e.attr("class").match(Ut);
						null !== t && 0 < t.length && e.removeClass(t.join(""));
					}),
					(i._jQueryInterface = function (n) {
						return this.each(function () {
							var e = p(this).data(Ft),
								t = "object" == typeof n ? n : null;
							if (
								(e || !/dispose|hide/.test(n)) &&
								(e ||
									((e = new i(this, t)), p(this).data(Ft, e)),
								"string" == typeof n)
							) {
								if (void 0 === e[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								e[n]();
							}
						});
					}),
					s(i, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return Kt;
							},
						},
						{
							key: "NAME",
							get: function () {
								return Rt;
							},
						},
						{
							key: "DATA_KEY",
							get: function () {
								return Ft;
							},
						},
						{
							key: "Event",
							get: function () {
								return Yt;
							},
						},
						{
							key: "EVENT_KEY",
							get: function () {
								return Mt;
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return $t;
							},
						},
					]),
					i
				);
			})(qt);
		(p.fn[Rt] = Gt._jQueryInterface),
			(p.fn[Rt].Constructor = Gt),
			(p.fn[Rt].noConflict = function () {
				return (p.fn[Rt] = Wt), Gt._jQueryInterface;
			});
		var Jt = "scrollspy",
			Zt = "bs.scrollspy",
			en = "." + Zt,
			tn = p.fn[Jt],
			nn = { offset: 10, method: "auto", target: "" },
			rn = {
				offset: "number",
				method: "string",
				target: "(string|element)",
			},
			on = {
				ACTIVATE: "activate" + en,
				SCROLL: "scroll" + en,
				LOAD_DATA_API: "load" + en + ".data-api",
			},
			sn = "dropdown-item",
			an = "active",
			ln = '[data-spy="scroll"]',
			cn = ".nav, .list-group",
			un = ".nav-link",
			fn = ".nav-item",
			dn = ".list-group-item",
			hn = ".dropdown",
			pn = ".dropdown-item",
			gn = ".dropdown-toggle",
			mn = "offset",
			vn = "position",
			yn = (function () {
				function n(e, t) {
					var n = this;
					(this._element = e),
						(this._scrollElement =
							"BODY" === e.tagName ? window : e),
						(this._config = this._getConfig(t)),
						(this._selector =
							this._config.target +
							" " +
							un +
							"," +
							this._config.target +
							" " +
							dn +
							"," +
							this._config.target +
							" " +
							pn),
						(this._offsets = []),
						(this._targets = []),
						(this._activeTarget = null),
						(this._scrollHeight = 0),
						p(this._scrollElement).on(on.SCROLL, function (e) {
							return n._process(e);
						}),
						this.refresh(),
						this._process();
				}
				var e = n.prototype;
				return (
					(e.refresh = function () {
						var t = this,
							e =
								this._scrollElement ===
								this._scrollElement.window
									? mn
									: vn,
							r =
								"auto" === this._config.method
									? e
									: this._config.method,
							o = r === vn ? this._getScrollTop() : 0;
						(this._offsets = []),
							(this._targets = []),
							(this._scrollHeight = this._getScrollHeight()),
							[].slice
								.call(document.querySelectorAll(this._selector))
								.map(function (e) {
									var t,
										n = g.getSelectorFromElement(e);
									if (
										(n && (t = document.querySelector(n)),
										t)
									) {
										var i = t.getBoundingClientRect();
										if (i.width || i.height)
											return [p(t)[r]().top + o, n];
									}
									return null;
								})
								.filter(function (e) {
									return e;
								})
								.sort(function (e, t) {
									return e[0] - t[0];
								})
								.forEach(function (e) {
									t._offsets.push(e[0]),
										t._targets.push(e[1]);
								});
					}),
					(e.dispose = function () {
						p.removeData(this._element, Zt),
							p(this._scrollElement).off(en),
							(this._element = null),
							(this._scrollElement = null),
							(this._config = null),
							(this._selector = null),
							(this._offsets = null),
							(this._targets = null),
							(this._activeTarget = null),
							(this._scrollHeight = null);
					}),
					(e._getConfig = function (e) {
						if (
							"string" !=
							typeof (e = l(
								{},
								nn,
								"object" == typeof e && e ? e : {}
							)).target
						) {
							var t = p(e.target).attr("id");
							t ||
								((t = g.getUID(Jt)), p(e.target).attr("id", t)),
								(e.target = "#" + t);
						}
						return g.typeCheckConfig(Jt, e, rn), e;
					}),
					(e._getScrollTop = function () {
						return this._scrollElement === window
							? this._scrollElement.pageYOffset
							: this._scrollElement.scrollTop;
					}),
					(e._getScrollHeight = function () {
						return (
							this._scrollElement.scrollHeight ||
							Math.max(
								document.body.scrollHeight,
								document.documentElement.scrollHeight
							)
						);
					}),
					(e._getOffsetHeight = function () {
						return this._scrollElement === window
							? window.innerHeight
							: this._scrollElement.getBoundingClientRect()
									.height;
					}),
					(e._process = function () {
						var e = this._getScrollTop() + this._config.offset,
							t = this._getScrollHeight(),
							n =
								this._config.offset +
								t -
								this._getOffsetHeight();
						if (
							(this._scrollHeight !== t && this.refresh(), n <= e)
						) {
							var i = this._targets[this._targets.length - 1];
							this._activeTarget !== i && this._activate(i);
						} else {
							if (
								this._activeTarget &&
								e < this._offsets[0] &&
								0 < this._offsets[0]
							)
								return (
									(this._activeTarget = null),
									void this._clear()
								);
							for (var r = this._offsets.length; r--; ) {
								this._activeTarget !== this._targets[r] &&
									e >= this._offsets[r] &&
									(void 0 === this._offsets[r + 1] ||
										e < this._offsets[r + 1]) &&
									this._activate(this._targets[r]);
							}
						}
					}),
					(e._activate = function (t) {
						(this._activeTarget = t), this._clear();
						var e = this._selector.split(",").map(function (e) {
								return (
									e +
									'[data-target="' +
									t +
									'"],' +
									e +
									'[href="' +
									t +
									'"]'
								);
							}),
							n = p(
								[].slice.call(
									document.querySelectorAll(e.join(","))
								)
							);
						n.hasClass(sn)
							? (n.closest(hn).find(gn).addClass(an),
							  n.addClass(an))
							: (n.addClass(an),
							  n
									.parents(cn)
									.prev(un + ", " + dn)
									.addClass(an),
							  n.parents(cn).prev(fn).children(un).addClass(an)),
							p(this._scrollElement).trigger(on.ACTIVATE, {
								relatedTarget: t,
							});
					}),
					(e._clear = function () {
						[].slice
							.call(document.querySelectorAll(this._selector))
							.filter(function (e) {
								return e.classList.contains(an);
							})
							.forEach(function (e) {
								return e.classList.remove(an);
							});
					}),
					(n._jQueryInterface = function (t) {
						return this.each(function () {
							var e = p(this).data(Zt);
							if (
								(e ||
									((e = new n(
										this,
										"object" == typeof t && t
									)),
									p(this).data(Zt, e)),
								"string" == typeof t)
							) {
								if (void 0 === e[t])
									throw new TypeError(
										'No method named "' + t + '"'
									);
								e[t]();
							}
						});
					}),
					s(n, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "Default",
							get: function () {
								return nn;
							},
						},
					]),
					n
				);
			})();
		p(window).on(on.LOAD_DATA_API, function () {
			for (
				var e = [].slice.call(document.querySelectorAll(ln)),
					t = e.length;
				t--;

			) {
				var n = p(e[t]);
				yn._jQueryInterface.call(n, n.data());
			}
		}),
			(p.fn[Jt] = yn._jQueryInterface),
			(p.fn[Jt].Constructor = yn),
			(p.fn[Jt].noConflict = function () {
				return (p.fn[Jt] = tn), yn._jQueryInterface;
			});
		var _n = "bs.tab",
			bn = "." + _n,
			wn = p.fn.tab,
			En = {
				HIDE: "hide" + bn,
				HIDDEN: "hidden" + bn,
				SHOW: "show" + bn,
				SHOWN: "shown" + bn,
				CLICK_DATA_API: "click" + bn + ".data-api",
			},
			Tn = "dropdown-menu",
			xn = "active",
			Cn = "disabled",
			Sn = "fade",
			Dn = "show",
			An = ".dropdown",
			kn = ".nav, .list-group",
			Nn = ".active",
			In = "> li > .active",
			On =
				'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
			jn = ".dropdown-toggle",
			Ln = "> .dropdown-menu .active",
			Pn = (function () {
				function i(e) {
					this._element = e;
				}
				var e = i.prototype;
				return (
					(e.show = function () {
						var n = this;
						if (
							!(
								(this._element.parentNode &&
									this._element.parentNode.nodeType ===
										Node.ELEMENT_NODE &&
									p(this._element).hasClass(xn)) ||
								p(this._element).hasClass(Cn)
							)
						) {
							var e,
								i,
								t = p(this._element).closest(kn)[0],
								r = g.getSelectorFromElement(this._element);
							if (t) {
								var o =
									"UL" === t.nodeName || "OL" === t.nodeName
										? In
										: Nn;
								i = (i = p.makeArray(p(t).find(o)))[
									i.length - 1
								];
							}
							var s = p.Event(En.HIDE, {
									relatedTarget: this._element,
								}),
								a = p.Event(En.SHOW, { relatedTarget: i });
							if (
								(i && p(i).trigger(s),
								p(this._element).trigger(a),
								!a.isDefaultPrevented() &&
									!s.isDefaultPrevented())
							) {
								r && (e = document.querySelector(r)),
									this._activate(this._element, t);
								var l = function () {
									var e = p.Event(En.HIDDEN, {
											relatedTarget: n._element,
										}),
										t = p.Event(En.SHOWN, {
											relatedTarget: i,
										});
									p(i).trigger(e), p(n._element).trigger(t);
								};
								e ? this._activate(e, e.parentNode, l) : l();
							}
						}
					}),
					(e.dispose = function () {
						p.removeData(this._element, _n), (this._element = null);
					}),
					(e._activate = function (e, t, n) {
						var i = this,
							r = (
								!t ||
								("UL" !== t.nodeName && "OL" !== t.nodeName)
									? p(t).children(Nn)
									: p(t).find(In)
							)[0],
							o = n && r && p(r).hasClass(Sn),
							s = function () {
								return i._transitionComplete(e, r, n);
							};
						if (r && o) {
							var a = g.getTransitionDurationFromElement(r);
							p(r)
								.removeClass(Dn)
								.one(g.TRANSITION_END, s)
								.emulateTransitionEnd(a);
						} else s();
					}),
					(e._transitionComplete = function (e, t, n) {
						if (t) {
							p(t).removeClass(xn);
							var i = p(t.parentNode).find(Ln)[0];
							i && p(i).removeClass(xn),
								"tab" === t.getAttribute("role") &&
									t.setAttribute("aria-selected", !1);
						}
						if (
							(p(e).addClass(xn),
							"tab" === e.getAttribute("role") &&
								e.setAttribute("aria-selected", !0),
							g.reflow(e),
							p(e).addClass(Dn),
							e.parentNode && p(e.parentNode).hasClass(Tn))
						) {
							var r = p(e).closest(An)[0];
							if (r) {
								var o = [].slice.call(r.querySelectorAll(jn));
								p(o).addClass(xn);
							}
							e.setAttribute("aria-expanded", !0);
						}
						n && n();
					}),
					(i._jQueryInterface = function (n) {
						return this.each(function () {
							var e = p(this),
								t = e.data(_n);
							if (
								(t || ((t = new i(this)), e.data(_n, t)),
								"string" == typeof n)
							) {
								if (void 0 === t[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								t[n]();
							}
						});
					}),
					s(i, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
					]),
					i
				);
			})();
		p(document).on(En.CLICK_DATA_API, On, function (e) {
			e.preventDefault(), Pn._jQueryInterface.call(p(this), "show");
		}),
			(p.fn.tab = Pn._jQueryInterface),
			(p.fn.tab.Constructor = Pn),
			(p.fn.tab.noConflict = function () {
				return (p.fn.tab = wn), Pn._jQueryInterface;
			});
		var Hn = "toast",
			qn = "bs.toast",
			Rn = "." + qn,
			Fn = p.fn[Hn],
			Mn = {
				CLICK_DISMISS: "click.dismiss" + Rn,
				HIDE: "hide" + Rn,
				HIDDEN: "hidden" + Rn,
				SHOW: "show" + Rn,
				SHOWN: "shown" + Rn,
			},
			Wn = "fade",
			Bn = "hide",
			Un = "show",
			Kn = "showing",
			$n = { animation: "boolean", autohide: "boolean", delay: "number" },
			Qn = { animation: !0, autohide: !0, delay: 500 },
			zn = '[data-dismiss="toast"]',
			Vn = (function () {
				function i(e, t) {
					(this._element = e),
						(this._config = this._getConfig(t)),
						(this._timeout = null),
						this._setListeners();
				}
				var e = i.prototype;
				return (
					(e.show = function () {
						var e = this;
						p(this._element).trigger(Mn.SHOW),
							this._config.animation &&
								this._element.classList.add(Wn);
						var t = function () {
							e._element.classList.remove(Kn),
								e._element.classList.add(Un),
								p(e._element).trigger(Mn.SHOWN),
								e._config.autohide && e.hide();
						};
						if (
							(this._element.classList.remove(Bn),
							this._element.classList.add(Kn),
							this._config.animation)
						) {
							var n = g.getTransitionDurationFromElement(
								this._element
							);
							p(this._element)
								.one(g.TRANSITION_END, t)
								.emulateTransitionEnd(n);
						} else t();
					}),
					(e.hide = function (e) {
						var t = this;
						this._element.classList.contains(Un) &&
							(p(this._element).trigger(Mn.HIDE),
							e
								? this._close()
								: (this._timeout = setTimeout(function () {
										t._close();
								  }, this._config.delay)));
					}),
					(e.dispose = function () {
						clearTimeout(this._timeout),
							(this._timeout = null),
							this._element.classList.contains(Un) &&
								this._element.classList.remove(Un),
							p(this._element).off(Mn.CLICK_DISMISS),
							p.removeData(this._element, qn),
							(this._element = null),
							(this._config = null);
					}),
					(e._getConfig = function (e) {
						return (
							(e = l(
								{},
								Qn,
								p(this._element).data(),
								"object" == typeof e && e ? e : {}
							)),
							g.typeCheckConfig(
								Hn,
								e,
								this.constructor.DefaultType
							),
							e
						);
					}),
					(e._setListeners = function () {
						var e = this;
						p(this._element).on(Mn.CLICK_DISMISS, zn, function () {
							return e.hide(!0);
						});
					}),
					(e._close = function () {
						var e = this,
							t = function () {
								e._element.classList.add(Bn),
									p(e._element).trigger(Mn.HIDDEN);
							};
						if (
							(this._element.classList.remove(Un),
							this._config.animation)
						) {
							var n = g.getTransitionDurationFromElement(
								this._element
							);
							p(this._element)
								.one(g.TRANSITION_END, t)
								.emulateTransitionEnd(n);
						} else t();
					}),
					(i._jQueryInterface = function (n) {
						return this.each(function () {
							var e = p(this),
								t = e.data(qn);
							if (
								(t ||
									((t = new i(
										this,
										"object" == typeof n && n
									)),
									e.data(qn, t)),
								"string" == typeof n)
							) {
								if (void 0 === t[n])
									throw new TypeError(
										'No method named "' + n + '"'
									);
								t[n](this);
							}
						});
					}),
					s(i, null, [
						{
							key: "VERSION",
							get: function () {
								return "4.2.1";
							},
						},
						{
							key: "DefaultType",
							get: function () {
								return $n;
							},
						},
					]),
					i
				);
			})();
		(p.fn[Hn] = Vn._jQueryInterface),
			(p.fn[Hn].Constructor = Vn),
			(p.fn[Hn].noConflict = function () {
				return (p.fn[Hn] = Fn), Vn._jQueryInterface;
			}),
			(function () {
				if (void 0 === p)
					throw new TypeError(
						"Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
					);
				var e = p.fn.jquery.split(" ")[0].split(".");
				if (
					(e[0] < 2 && e[1] < 9) ||
					(1 === e[0] && 9 === e[1] && e[2] < 1) ||
					4 <= e[0]
				)
					throw new Error(
						"Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
					);
			})(),
			(e.Util = g),
			(e.Alert = v),
			(e.Button = O),
			(e.Carousel = le),
			(e.Collapse = xe),
			(e.Dropdown = Je),
			(e.Modal = mt),
			(e.Popover = Gt),
			(e.Scrollspy = yn),
			(e.Tab = Pn),
			(e.Toast = Vn),
			(e.Tooltip = qt),
			Object.defineProperty(e, "__esModule", { value: !0 });
	}),
	(function (e, t) {
		"object" == typeof exports && "object" == typeof module
			? (module.exports = t())
			: "function" == typeof define && define.amd
			? define([], t)
			: "object" == typeof exports
			? (exports.AOS = t())
			: (e.AOS = t());
	})(this, function () {
		return (function (n) {
			function i(e) {
				if (r[e]) return r[e].exports;
				var t = (r[e] = { exports: {}, id: e, loaded: !1 });
				return (
					n[e].call(t.exports, t, t.exports, i),
					(t.loaded = !0),
					t.exports
				);
			}
			var r = {};
			return (i.m = n), (i.c = r), (i.p = "dist/"), i(0);
		})([
			function (e, t, n) {
				"use strict";
				function i(e) {
					return e && e.__esModule ? e : { default: e };
				}
				var r =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var i in n)
									Object.prototype.hasOwnProperty.call(
										n,
										i
									) && (e[i] = n[i]);
							}
							return e;
						},
					o = i((i(n(1)), n(5))),
					s = i(n(6)),
					a = i(n(7)),
					l = i(n(8)),
					c = i(n(9)),
					u = i(n(10)),
					f = i(n(13)),
					d = [],
					h = !1,
					p = document.all && !window.atob,
					g = {
						offset: 60,
						delay: 0,
						easing: "ease",
						duration: 400,
						disable: !1,
						once: !1,
						startEvent: "DOMContentLoaded",
					},
					m = function () {
						return (
							!(
								arguments.length <= 0 || void 0 === arguments[0]
							) &&
								arguments[0] &&
								(h = !0),
							h
								? ((d = (0, u.default)(d, g)),
								  (0, c.default)(d, g.once),
								  d)
								: void 0
						);
					},
					v = function () {
						(d = (0, f.default)()), m();
					};
				e.exports = {
					init: function (e) {
						return (
							(g = r(g, e)),
							(d = (0, f.default)()),
							!0 === (t = g.disable) ||
							("mobile" === t && l.default.mobile()) ||
							("phone" === t && l.default.phone()) ||
							("tablet" === t && l.default.tablet()) ||
							("function" == typeof t && !0 === t()) ||
							p
								? void d.forEach(function (e, t) {
										e.node.removeAttribute("data-aos"),
											e.node.removeAttribute(
												"data-aos-easing"
											),
											e.node.removeAttribute(
												"data-aos-duration"
											),
											e.node.removeAttribute(
												"data-aos-delay"
											);
								  })
								: (document
										.querySelector("body")
										.setAttribute(
											"data-aos-easing",
											g.easing
										),
								  document
										.querySelector("body")
										.setAttribute(
											"data-aos-duration",
											g.duration
										),
								  document
										.querySelector("body")
										.setAttribute(
											"data-aos-delay",
											g.delay
										),
								  "DOMContentLoaded" === g.startEvent &&
								  -1 <
										["complete", "interactive"].indexOf(
											document.readyState
										)
										? m(!0)
										: "load" === g.startEvent
										? window.addEventListener(
												g.startEvent,
												function () {
													m(!0);
												}
										  )
										: document.addEventListener(
												g.startEvent,
												function () {
													m(!0);
												}
										  ),
								  window.addEventListener(
										"resize",
										(0, s.default)(m, 50, !0)
								  ),
								  window.addEventListener(
										"orientationchange",
										(0, s.default)(m, 50, !0)
								  ),
								  window.addEventListener(
										"scroll",
										(0, o.default)(function () {
											(0, c.default)(d, g.once);
										}, 99)
								  ),
								  document.addEventListener(
										"DOMNodeRemoved",
										function (e) {
											var t = e.target;
											t &&
												1 === t.nodeType &&
												t.hasAttribute &&
												t.hasAttribute("data-aos") &&
												(0, s.default)(v, 50, !0);
										}
								  ),
								  (0, a.default)("[data-aos]", v),
								  d)
						);
						var t;
					},
					refresh: m,
					refreshHard: v,
				};
			},
			function (e, t) {},
			,
			,
			,
			function (e, t, n) {
				"use strict";
				var a =
						"function" == typeof Symbol &&
						"symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol
										? "symbol"
										: typeof e;
							  },
					l = n(6);
				e.exports = function (e, t, n) {
					var i,
						r,
						o = !0,
						s = !0;
					if ("function" != typeof e)
						throw new TypeError("Expected a function");
					return (
						(r = void 0 === (i = n) ? "undefined" : a(i)),
						!!i &&
							("object" == r || "function" == r) &&
							((o = "leading" in n ? !!n.leading : o),
							(s = "trailing" in n ? !!n.trailing : s)),
						l(e, t, { leading: o, maxWait: t, trailing: s })
					);
				};
			},
			function (e, t) {
				"use strict";
				function y(e) {
					var t = void 0 === e ? "undefined" : n(e);
					return !!e && ("object" == t || "function" == t);
				}
				function o(e) {
					return (
						"symbol" == (void 0 === e ? "undefined" : n(e)) ||
						(!!(t = e) &&
							"object" == (void 0 === t ? "undefined" : n(t)) &&
							p.call(e) == i)
					);
					var t;
				}
				function _(e) {
					if ("number" == typeof e) return e;
					if (o(e)) return s;
					if (y(e)) {
						var t =
							((n = e.valueOf),
							(i = y(n) ? p.call(n) : "") == a || i == l
								? e.valueOf()
								: e);
						e = y(t) ? t + "" : t;
					}
					var n, i;
					if ("string" != typeof e) return 0 === e ? e : +e;
					e = e.replace(c, "");
					var r = f.test(e);
					return r || d.test(e)
						? h(e.slice(2), r ? 2 : 8)
						: u.test(e)
						? s
						: +e;
				}
				var n =
						"function" == typeof Symbol &&
						"symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol
										? "symbol"
										: typeof e;
							  },
					s = NaN,
					a = "[object Function]",
					l = "[object GeneratorFunction]",
					i = "[object Symbol]",
					c = /^\s+|\s+$/g,
					u = /^[-+]0x[0-9a-f]+$/i,
					f = /^0b[01]+$/i,
					d = /^0o[0-7]+$/i,
					h = parseInt,
					p = Object.prototype.toString,
					b = Math.max,
					w = Math.min,
					E = Date.now;
				e.exports = function (i, r, e) {
					function o(e) {
						var t = c,
							n = u;
						return (c = u = void 0), (g = e), (d = i.apply(n, t));
					}
					function s(e) {
						var t = e - p;
						return !p || r <= t || t < 0 || (v && f <= e - g);
					}
					function a() {
						var e,
							t,
							n = E();
						return s(n)
							? l(n)
							: void (h = setTimeout(
									a,
									((t = r - ((e = n) - p)),
									v ? w(t, f - (e - g)) : t)
							  ));
					}
					function l(e) {
						return (
							clearTimeout(h),
							(h = void 0),
							n && c ? o(e) : ((c = u = void 0), d)
						);
					}
					function t() {
						var e,
							t = E(),
							n = s(t);
						if (((c = arguments), (u = this), (p = t), n)) {
							if (void 0 === h)
								return (
									(g = e = p),
									(h = setTimeout(a, r)),
									m ? o(e) : d
								);
							if (v)
								return (
									clearTimeout(h),
									(h = setTimeout(a, r)),
									o(p)
								);
						}
						return void 0 === h && (h = setTimeout(a, r)), d;
					}
					var c,
						u,
						f,
						d,
						h,
						p = 0,
						g = 0,
						m = !1,
						v = !1,
						n = !0;
					if ("function" != typeof i)
						throw new TypeError("Expected a function");
					return (
						(r = _(r) || 0),
						y(e) &&
							((m = !!e.leading),
							(f = (v = "maxWait" in e)
								? b(_(e.maxWait) || 0, r)
								: f),
							(n = "trailing" in e ? !!e.trailing : n)),
						(t.cancel = function () {
							void 0 !== h && clearTimeout(h),
								(p = g = 0),
								(c = u = h = void 0);
						}),
						(t.flush = function () {
							return void 0 === h ? d : l(E());
						}),
						t
					);
				};
			},
			function (e, t) {
				"use strict";
				function n() {
					for (var e, t, n = 0, i = l.length; n < i; n++) {
						e = l[n];
						for (
							var r,
								o = 0,
								s = (t = a.querySelectorAll(e.selector)).length;
							o < s;
							o++
						)
							(r = t[o]).ready ||
								((r.ready = !0), e.fn.call(r, r));
					}
				}
				Object.defineProperty(t, "__esModule", { value: !0 });
				var a = window.document,
					i =
						window.MutationObserver ||
						window.WebKitMutationObserver,
					l = [],
					r = void 0;
				t.default = function (e, t) {
					l.push({ selector: e, fn: t }),
						!r &&
							i &&
							(r = new i(n)).observe(a.documentElement, {
								childList: !0,
								subtree: !0,
								removedNodes: !0,
							}),
						n();
				};
			},
			function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				var n = (function () {
						function i(e, t) {
							for (var n = 0; n < t.length; n++) {
								var i = t[n];
								(i.enumerable = i.enumerable || !1),
									(i.configurable = !0),
									"value" in i && (i.writable = !0),
									Object.defineProperty(e, i.key, i);
							}
						}
						return function (e, t, n) {
							return t && i(e.prototype, t), n && i(e, n), e;
						};
					})(),
					i = (function () {
						function e() {
							!(function (e, t) {
								if (!(e instanceof t))
									throw new TypeError(
										"Cannot call a class as a function"
									);
							})(this, e);
						}
						return (
							n(e, [
								{
									key: "phone",
									value: function () {
										var e,
											t = !1;
										return (
											(e =
												navigator.userAgent ||
												navigator.vendor ||
												window.opera),
											(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
												e
											) ||
												/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
													e.substr(0, 4)
												)) &&
												(t = !0),
											t
										);
									},
								},
								{
									key: "mobile",
									value: function () {
										var e,
											t = !1;
										return (
											(e =
												navigator.userAgent ||
												navigator.vendor ||
												window.opera),
											(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
												e
											) ||
												/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
													e.substr(0, 4)
												)) &&
												(t = !0),
											t
										);
									},
								},
								{
									key: "tablet",
									value: function () {
										return this.mobile() && !this.phone();
									},
								},
							]),
							e
						);
					})();
				t.default = new i();
			},
			function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				t.default = function (e, s) {
					var a = window.pageYOffset,
						l = window.innerHeight;
					e.forEach(function (e, t) {
						var n, i, r, o;
						(i = l + a),
							(r = s),
							(o = (n = e).node.getAttribute("data-aos-once")),
							i > n.position
								? n.node.classList.add("aos-animate")
								: void 0 !== o &&
								  ("false" === o || (!r && "true" !== o)) &&
								  n.node.classList.remove("aos-animate");
					});
				};
			},
			function (e, t, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				var i,
					r = n(11),
					o = (i = r) && i.__esModule ? i : { default: i };
				t.default = function (e, n) {
					return (
						e.forEach(function (e, t) {
							e.node.classList.add("aos-init"),
								(e.position = (0, o.default)(e.node, n.offset));
						}),
						e
					);
				};
			},
			function (e, t, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				var i,
					r = n(12),
					s = (i = r) && i.__esModule ? i : { default: i };
				t.default = function (e, t) {
					var n = 0,
						i = 0,
						r = window.innerHeight,
						o = {
							offset: e.getAttribute("data-aos-offset"),
							anchor: e.getAttribute("data-aos-anchor"),
							anchorPlacement: e.getAttribute(
								"data-aos-anchor-placement"
							),
						};
					switch (
						(o.offset &&
							!isNaN(o.offset) &&
							(i = parseInt(o.offset)),
						o.anchor &&
							document.querySelectorAll(o.anchor) &&
							(e = document.querySelectorAll(o.anchor)[0]),
						(n = (0, s.default)(e).top),
						o.anchorPlacement)
					) {
						case "top-bottom":
							break;
						case "center-bottom":
							n += e.offsetHeight / 2;
							break;
						case "bottom-bottom":
							n += e.offsetHeight;
							break;
						case "top-center":
							n += r / 2;
							break;
						case "bottom-center":
							n += r / 2 + e.offsetHeight;
							break;
						case "center-center":
							n += r / 2 + e.offsetHeight / 2;
							break;
						case "top-top":
							n += r;
							break;
						case "bottom-top":
							n += e.offsetHeight + r;
							break;
						case "center-top":
							n += e.offsetHeight / 2 + r;
					}
					return (
						o.anchorPlacement || o.offset || isNaN(t) || (i = t),
						n + i
					);
				};
			},
			function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				t.default = function (e) {
					for (
						var t = 0, n = 0;
						e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

					)
						(t +=
							e.offsetLeft -
							("BODY" != e.tagName ? e.scrollLeft : 0)),
							(n +=
								e.offsetTop -
								("BODY" != e.tagName ? e.scrollTop : 0)),
							(e = e.offsetParent);
					return { top: n, left: t };
				};
			},
			function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 });
				t.default = function (e) {
					e = e || document.querySelectorAll("[data-aos]");
					var n = [];
					return (
						[].forEach.call(e, function (e, t) {
							n.push({ node: e });
						}),
						n
					);
				};
			},
		]);
	});
