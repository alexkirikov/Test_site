/* @ds-bundle: {"format":3,"namespace":"AutonomyPlannerDesignSystem_43f1d6","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"53cb58a53deb","components/actions/IconButton.jsx":"3d921ff68a3f","components/display/Avatar.jsx":"17b780a9a804","components/display/Badge.jsx":"db499e3373c0","components/display/Card.jsx":"a2c0669da2d9","components/display/Stat.jsx":"7f0255ea3bc9","components/forms/Checkbox.jsx":"dd551e23c225","components/forms/Input.jsx":"15a40ec67d8a","components/forms/Select.jsx":"68cb2adb85fc","components/forms/Switch.jsx":"c31396281773","components/navigation/Accordion.jsx":"e0bd6c11d686","components/navigation/Tabs.jsx":"033a9d47957b","ui_kits/website/Hero.jsx":"405b4a65224c","ui_kits/website/PagesBiz.jsx":"388dffc5e953","ui_kits/website/PagesContent.jsx":"74e4ad1b5c82","ui_kits/website/PagesProduct.jsx":"1ece573c4c74","ui_kits/website/PlannerApp.jsx":"bd2ca87f39ec","ui_kits/website/Pricing.jsx":"c6aa9853cd4c","ui_kits/website/Proof.jsx":"2fa52c03f15a","ui_kits/website/Shared.jsx":"5d2ed568f1e9","ui_kits/website/Value.jsx":"da9ffdca3e56","ui_kits/website/logo-data.js":"2a671669ebc4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AutonomyPlannerDesignSystem_43f1d6 = window.AutonomyPlannerDesignSystem_43f1d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Button
 * Variants: primary (petrol-teal fill), accent (solar gold),
 * secondary (outline), ghost (tinted hover), link. Sizes: sm, md, lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--fs-small)',
      gap: '6px',
      minHeight: 36
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--fs-body)',
      gap: '8px',
      minHeight: 44
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--fs-lead)',
      gap: '10px',
      minHeight: 52
    }
  };
  const variants = {
    primary: {
      background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      borderColor: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)'
    },
    accent: {
      background: hover ? 'var(--brand-accent-hover)' : 'var(--brand-accent)',
      color: 'var(--color-ink)',
      borderColor: hover ? 'var(--brand-accent-hover)' : 'var(--brand-accent)'
    },
    secondary: {
      background: hover ? 'var(--surface-subtle)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: hover ? 'var(--surface-muted)' : 'transparent',
      color: 'var(--text-brand)',
      borderColor: 'transparent'
    },
    link: {
      background: 'transparent',
      color: hover ? 'var(--brand-primary-hover)' : 'var(--text-brand)',
      borderColor: 'transparent'
    }
  };
  const isLink = variant === 'link';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-medium)',
    fontSize: isLink ? 'inherit' : sizes[size].fontSize,
    lineHeight: 1,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: isLink ? 0 : 'var(--radius-sm)',
    padding: isLink ? 0 : sizes[size].padding,
    minHeight: isLink ? 'auto' : sizes[size].minHeight,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
    textDecoration: isLink ? 'underline' : 'none',
    textUnderlineOffset: isLink ? '4px' : undefined,
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — IconButton
 * Square/circular button for a single icon (close, menu, chevrons).
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  }[size];
  const variants = {
    ghost: {
      background: hover ? 'var(--surface-subtle)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent'
    },
    outline: {
      background: hover ? 'var(--surface-subtle)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-default)'
    },
    primary: {
      background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Avatar
 * Circular user image with initials fallback.
 */
function Avatar({
  src,
  name = '',
  size = 48,
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-teal-100)',
      color: 'var(--color-teal-800)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.36,
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '•');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Badge
 * Small status / category label. Tones map to semantic colors.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--color-neutral-100)', 'var(--text-secondary)'],
      solid: ['var(--color-neutral-900)', '#fff']
    },
    brand: {
      soft: ['var(--color-teal-100)', 'var(--color-teal-800)'],
      solid: ['var(--brand-primary)', '#fff']
    },
    accent: {
      soft: ['var(--color-gold-100)', 'var(--color-gold-800)'],
      solid: ['var(--brand-accent)', 'var(--color-ink)']
    },
    eco: {
      soft: ['var(--color-green-100)', 'var(--color-green-700)'],
      solid: ['var(--brand-eco)', '#fff']
    },
    success: {
      soft: ['var(--status-success-bg)', 'var(--color-green-700)'],
      solid: ['var(--status-success)', '#fff']
    },
    warning: {
      soft: ['var(--status-warning-bg)', 'var(--color-gold-800)'],
      solid: ['var(--status-warning)', 'var(--color-ink)']
    },
    error: {
      soft: ['var(--status-error-bg)', 'var(--status-error)'],
      solid: ['var(--status-error)', '#fff']
    }
  };
  const [bg, fg] = tones[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-tiny)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Card
 * Surface container. variant: elevated (shadow), outlined (border),
 * brand (petrol fill, light text). Optional hover lift for links.
 */
function Card({
  children,
  variant = 'outlined',
  padding = 'var(--space-8)',
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: hover && interactive ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    },
    outlined: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: hover && interactive ? 'var(--shadow-md)' : 'none'
    },
    subtle: {
      background: 'var(--surface-subtle)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    brand: {
      background: 'var(--surface-brand)',
      border: '1px solid var(--surface-brand)',
      color: 'var(--text-on-brand)',
      boxShadow: hover && interactive ? 'var(--shadow-brand)' : 'none'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      transform: hover && interactive ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Stat
 * Numeric energy/finance readout. Big mono value + label + optional
 * unit and trend. Used in stats sections and calculation summaries.
 */
function Stat({
  value,
  unit,
  label,
  trend,
  tone = 'brand',
  align = 'start',
  style,
  ...rest
}) {
  const tones = {
    brand: 'var(--text-brand)',
    accent: 'var(--text-accent)',
    eco: 'var(--brand-eco)',
    ink: 'var(--text-primary)'
  };
  const trendColor = trend && trend.dir === 'down' ? 'var(--brand-eco)' : 'var(--brand-eco)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      color: tones[tone],
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h5)',
      fontWeight: 'var(--fw-medium)',
      color: tones[tone]
    }
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)'
    }
  }, label), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: trendColor
    }
  }, trend.dir === 'down' ? '↓' : '↑', " ", trend.text));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Checkbox
 * Controlled or uncontrolled checkbox with label.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const fieldId = id || (label ? `cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: 20,
      height: 20,
      accentColor: 'var(--brand-primary)',
      cursor: 'inherit',
      margin: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Input
 * Labeled text/number field with optional hint, error, and suffix
 * (e.g. unit "kWh"). Focus ring uses the brand teal.
 */
function Input({
  label,
  hint,
  error,
  suffix,
  id,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `inp-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--status-error)' : focus ? 'var(--brand-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '11px 14px',
      fontFamily: type === 'number' ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      padding: '0 14px',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)',
      borderLeft: '1px solid var(--border-subtle)',
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'center'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-tiny)',
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Select
 * Native select styled to match Input. Pass options as
 * [{value, label}] or strings.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      appearance: 'none',
      WebkitAppearance: 'none',
      border: `1px solid ${focus ? 'var(--brand-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      background: 'var(--surface-card)',
      padding: '11px 40px 11px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-tiny)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Autonomy Planner — Switch
 * Toggle for binary settings (e.g. B2C / B2B, monthly / yearly).
 */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [on, setOn] = React.useState(defaultChecked || false);
  const value = isControlled ? checked : on;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setOn(!value);
    onChange && onChange(!value);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": value,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 3,
      background: value ? 'var(--brand-primary)' : 'var(--color-neutral-300)',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: value ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/**
 * Autonomy Planner — Accordion
 * FAQ / disclosure list. Pass items as [{ q, a }]. Single-open.
 */
function Accordion({
  items = [],
  defaultOpen = -1,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-6) 0',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-h5)',
        fontWeight: 'var(--fw-bold)',
        color: 'var(--text-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        fontSize: 24,
        lineHeight: 1,
        color: 'var(--text-brand)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 'var(--space-6)',
        color: 'var(--text-secondary)',
        fontSize: 'var(--fs-body)',
        maxWidth: '60ch'
      }
    }, item.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Autonomy Planner — Tabs
 * Segmented tab control. Used for audience switching (Власники /
 * Інсталятори) and content panels. Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style
}) {
  const ids = tabs.map(t => typeof t === 'string' ? t : t.value);
  const isControlled = value !== undefined;
  const [active, setActive] = React.useState(defaultValue ?? ids[0]);
  const current = isControlled ? value : active;
  const select = id => {
    if (!isControlled) setActive(id);
    onChange && onChange(id);
  };
  if (variant === 'segmented') {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--surface-subtle)',
        borderRadius: 'var(--radius-pill)',
        ...style
      }
    }, tabs.map(t => {
      const id = typeof t === 'string' ? t : t.value;
      const label = typeof t === 'string' ? t : t.label;
      const on = current === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        role: "tab",
        "aria-selected": on,
        onClick: () => select(id),
        style: {
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          padding: '8px 18px',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-small)',
          fontWeight: 'var(--fw-medium)',
          cursor: 'pointer',
          background: on ? 'var(--surface-card)' : 'transparent',
          color: on ? 'var(--text-brand)' : 'var(--text-secondary)',
          boxShadow: on ? 'var(--shadow-sm)' : 'none',
          transition: 'all var(--dur-base) var(--ease-out)'
        }
      }, label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const on = current === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(id),
      style: {
        border: 'none',
        background: 'transparent',
        padding: '12px 0',
        marginBottom: -1,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-regular)',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderBottom: `2px solid ${on ? 'var(--brand-primary)' : 'transparent'}`,
        cursor: 'pointer',
        transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Navbar + Hero

function Navbar({
  onNav,
  active
}) {
  const {
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [moreOpen, setMoreOpen] = React.useState(false);
  const links = [['Можливості', 'features'], ['Як це працює', 'how'], ['Ціни', 'pricing'], ['Блог', 'blog']];
  const go = v => e => {
    e.preventDefault();
    setMoreOpen(false);
    onNav && onNav(v);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 72,
      padding: '0 var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.AP_LOGO || "../../assets/ap-logo.png",
    alt: "Autonomy Planner",
    style: {
      width: 38,
      height: 38,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 18,
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, "Autonomy\xA0Planner")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(([l, v]) => /*#__PURE__*/React.createElement("a", {
    key: v,
    href: "#",
    onClick: go(v),
    style: {
      fontSize: 'var(--fs-body)',
      color: active === v ? 'var(--text-brand)' : 'var(--text-secondary)',
      fontWeight: active === v ? 600 : 500
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseLeave: () => setMoreOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMoreOpen(!moreOpen),
    onMouseEnter: () => setMoreOpen(true),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)',
      fontWeight: 500,
      fontFamily: 'var(--font-sans)'
    }
  }, "\u0411\u0456\u043B\u044C\u0448\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "expand_more",
    size: 18
  })), moreOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 8,
      width: 300,
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      zIndex: 60
    }
  }, [['Для власників', 'Планування автономності дому', 'home', 'homeowners'], ['Для інсталяторів', 'Розрахунки та проектування систем', 'engineering', 'installers'], ['Кейси', 'Приклади реальних розрахунків', 'description', 'cases'], ['Про нас', 'Хто стоїть за продуктом', 'groups', 'about'], ['Контакти', 'Зв\'яжіться з командою', 'mail', 'contact']].map(([t, d, ic, v]) => /*#__PURE__*/React.createElement("a", {
    key: v,
    href: "#",
    onClick: go(v),
    style: {
      display: 'flex',
      gap: 12,
      padding: 10,
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-subtle)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, d)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => onNav && onNav('app')
  }, "\u0412\u0445\u0456\u0434"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav('app')
  }, "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438"))));
}
function Hero({
  onNav
}) {
  const {
    Button,
    Badge
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  return /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-20)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "eco"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eco",
    size: 15,
    fill: true
  }), " \u0415\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u043D\u0430 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "\u0421\u043F\u043B\u0430\u043D\u0443\u0439\u0442\u0435 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u043C\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, "Autonomy Planner \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454 \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0438 \u0435\u043D\u0435\u0440\u0433\u0456\u0457 \u043D\u0430 \u043F\u0440\u043E\u0441\u0442\u0438\u0439, \u043F\u043E\u0435\u0442\u0430\u043F\u043D\u0438\u0439 \u043F\u043B\u0430\u043D. \u0412\u0456\u0434 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u043A\u0440\u043E\u043A\u0443 \u0434\u043E \u043F\u043E\u0432\u043D\u043E\u0457 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav && onNav('app'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_forward",
      size: 20
    })
  }, "\u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0434\u0435\u043C\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 12
    }
  }, [['solar_power', '2 400+ розрахунків'], ['verified', 'Без карток для старту']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--brand-primary)"
  }), " ", t)))), /*#__PURE__*/React.createElement(Placeholder, {
    icon: "insights",
    label: "\u041F\u0430\u043D\u0435\u043B\u044C \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456",
    ratio: "5 / 4"
  })));
}
Object.assign(window, {
  Navbar,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PagesBiz.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Business pages
// PricingPage, CasesPage, AboutPage

function PricingPage({
  onNav
}) {
  const {
    Accordion,
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const faqs = [{
    q: 'Яка точність розрахунків?',
    a: 'Наш алгоритм враховує клімат вашого регіону, сезонні коливання сонячної радіації та реальні умови експлуатації. Розрахунки базуються на перевірених інженерних моделях.'
  }, {
    q: 'Чи можу я змінити конфігурацію пізніше?',
    a: 'Так. Ви можете повертатися до своїх розрахунків, змінювати параметри та порівнювати різні варіанти конфігурацій. Кожен сценарій зберігається.'
  }, {
    q: 'Для кого цей інструмент?',
    a: 'Autonomy Planner створений для власників приватних будинків, які планують автономність, для компаній на етапі реконструкції та для інсталяторів.'
  }, {
    q: 'Що робити з результатами?',
    a: 'Експортуйте звіт, поділіться ним з інсталятором або архітектором. Документація містить всі необхідні параметри для замовлення обладнання.'
  }];
  const trust = [['lock', 'Без прихованих платежів', 'Ви бачите підсумкову суму до оплати — жодних автопродовжень без згоди.'], ['shield', 'Ваші дані захищені', 'Параметри будинку зберігаються лише для ваших розрахунків і нікуди не передаються.'], ['support_agent', 'Підтримка українською', 'Відповідаємо на запитання щодо тарифів і розрахунків протягом робочого дня.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u0426\u0456\u043D\u0438",
    title: "\u041F\u0440\u043E\u0437\u043E\u0440\u0456 \u0442\u0430\u0440\u0438\u0444\u0438 \u043F\u0456\u0434 \u043A\u043E\u0436\u043D\u0443 \u0437\u0430\u0434\u0430\u0447\u0443",
    intro: "\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0456\u0437 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E\u0457 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438, \u043E\u043F\u043B\u0430\u0442\u0456\u0442\u044C \u043F\u043B\u0430\u043D \u0434\u043B\u044F \u0434\u043E\u043C\u0443 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0430\u0431\u043E \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0456\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043D\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u043E\u043C\u0443 \u0442\u0430\u0440\u0438\u0444\u0456. \u0424\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u0443\u0442\u043E\u0447\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F."
  }), /*#__PURE__*/React.createElement(Pricing, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, trust.map(([ic, h, t]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-teal-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--brand-primary)",
    fill: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 6
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-small)'
    }
  }, t)))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "FAQ",
    title: "\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F",
    lede: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0448\u043B\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C? \u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0434\u043D\u044F."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: faqs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav && onNav('contact')
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F")))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function CasesPage({
  onNav
}) {
  const {
    Card,
    Badge,
    Stat,
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const cases = [{
    tag: 'Приватний дім · Київська обл.',
    icon: 'home',
    title: 'Повна автономність для родини з 4 осіб',
    stats: [['8.4', 'kWh', 'Добове споживання', 'ink'], ['12', 'шт', 'Сонячні панелі', 'accent'], ['94', '%', 'Автономність', 'eco'], ['5.1', 'р', 'Окупність', 'brand']],
    cost: '₴320 000'
  }, {
    tag: 'Котедж · Львівська обл.',
    icon: 'villa',
    title: 'Поетапний перехід з резервним генератором',
    stats: [['14.2', 'kWh', 'Добове споживання', 'ink'], ['18', 'шт', 'Сонячні панелі', 'accent'], ['88', '%', 'Автономність', 'eco'], ['6.3', 'р', 'Окупність', 'brand']],
    cost: '₴540 000'
  }, {
    tag: 'Дача · Одеська обл.',
    icon: 'cottage',
    title: 'Базова автономність для сезонного будинку',
    stats: [['4.1', 'kWh', 'Добове споживання', 'ink'], ['6', 'шт', 'Сонячні панелі', 'accent'], ['76', '%', 'Автономність', 'eco'], ['4.4', 'р', 'Окупність', 'brand']],
    cost: '₴145 000'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u041A\u0435\u0439\u0441\u0438",
    title: "\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u0445 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432",
    intro: "\u041F\u043E\u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F, \u044F\u043A Autonomy Planner \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0431\u0443\u0434\u0438\u043D\u043A\u0443 \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0443 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E, \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0456 \u0441\u0442\u0440\u043E\u043A \u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u0456.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav && onNav('app'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow_forward",
        size: 20
      })
    }, "\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0432\u0456\u0439 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A")
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, cases.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    variant: "elevated"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Placeholder, {
    icon: c.icon,
    ratio: "4 / 3",
    tone: "teal"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 24px'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      paddingBottom: 24,
      borderBottom: '1px solid var(--border-default)',
      marginBottom: 20
    }
  }, c.stats.map(([v, u, l, t]) => /*#__PURE__*/React.createElement(Stat, {
    key: l,
    value: v,
    unit: u,
    label: l,
    tone: t
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0438"), /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: 'var(--text-brand)'
    }
  }, c.cost))))))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function AboutPage({
  onNav
}) {
  const {
    Card,
    Stat,
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u041F\u0440\u043E \u043D\u0430\u0441",
    title: "\u0420\u043E\u0431\u0438\u043C\u043E \u0435\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u043D\u0443 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u043E\u044E",
    intro: "\u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044C \u0434\u043E\u043C\u0443 \u043D\u0435 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 \u043F\u0440\u0438\u0432\u0456\u043B\u0435\u0454\u043C \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0456\u0432. Autonomy Planner \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454 \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0438 \u043D\u0430 \u0447\u0456\u0442\u043A\u0438\u0439, \u043F\u043E\u0435\u0442\u0430\u043F\u043D\u0438\u0439 \u0456 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u043E \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u043B\u0430\u043D."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2 400",
    unit: "+",
    label: "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432 \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E",
    tone: "brand",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "18",
    unit: "\u0440\u0435\u0433\u0456\u043E\u043D\u0456\u0432",
    label: "\u0417 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043A\u043B\u0456\u043C\u0430\u0442\u0443",
    tone: "accent",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "40",
    unit: "%",
    label: "\u0415\u043A\u043E\u043D\u043E\u043C\u0456\u044F \u0447\u0430\u0441\u0443 \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0456\u0432",
    tone: "eco",
    align: "center"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u0426\u0456\u043D\u043D\u043E\u0441\u0442\u0456",
    title: "\u0423 \u0449\u043E \u043C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "visibility",
    h: "\u041F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C",
    t: "\u0416\u043E\u0434\u043D\u0438\u0445 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u044C. \u041A\u043E\u0436\u043D\u0430 \u0446\u0438\u0444\u0440\u0430 \u043C\u0430\u0454 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "footprint",
    h: "\u041F\u043E\u0435\u0442\u0430\u043F\u043D\u0456\u0441\u0442\u044C",
    t: "\u0412\u0435\u043B\u0438\u043A\u0456 \u0446\u0456\u043B\u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u043C\u0438, \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u043A\u0440\u043E\u043A\u0430\u043C\u0438.",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "diversity_3",
    h: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456\u0441\u0442\u044C",
    t: "\u0421\u043A\u043B\u0430\u0434\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u2014 \u043F\u0440\u043E\u0441\u0442\u043E\u044E \u043C\u043E\u0432\u043E\u044E, \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430 \u0434\u043E\u043C\u0443.",
    tone: "eco"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
    title: "\u0406\u043D\u0436\u0435\u043D\u0435\u0440\u0438, \u0449\u043E \u043B\u044E\u0431\u043B\u044F\u0442\u044C \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0456 \u0440\u0435\u0447\u0456",
    lede: "\u041D\u0435\u0432\u0435\u043B\u0438\u043A\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437 \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0443 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u043D\u0456\u0439 \u0435\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0446\u0456, \u0444\u0456\u043D\u0430\u043D\u0441\u0430\u0445 \u0442\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u043C\u0443 \u0434\u0438\u0437\u0430\u0439\u043D\u0456."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['Олександр К.', 'Засновник, енергетик'], ['Наталія В.', 'Продукт'], ['Дмитро С.', 'Інженерія'], ['Олена П.', 'Підтримка клієнтів']].map(([n, r]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    variant: "outlined",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: "person",
    ratio: "1 / 1",
    tone: "teal",
    style: {
      marginBottom: 16,
      borderRadius: 'var(--radius-pill)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)'
    }
  }, r))))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
Object.assign(window, {
  PricingPage,
  CasesPage,
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PagesBiz.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PagesContent.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Content pages
// BlogPage, ArticlePage, ContactPage

const BLOG_POSTS = [{
  cat: 'Акумулятори',
  icon: 'battery_charging_full',
  read: '5 хвилин читання',
  title: 'Літій чи свинець? Вибір акумулятора для дому',
  excerpt: 'Розбираємось у типах батарей та як підібрати оптимальний накопичувач під ваш бюджет.'
}, {
  cat: 'Енергоефективність',
  icon: 'energy_savings_leaf',
  read: '6 хвилин читання',
  title: "П'ять способів зменшити споживання енергії вдома",
  excerpt: 'Прості кроки до економії та підготовки будинку перед встановленням систем.'
}, {
  cat: 'Акумулятори',
  icon: 'battery_full',
  read: '6 хвилин читання',
  title: 'Акумулятори для автономного будинку: типи та порівняння',
  excerpt: 'Розуміння різних технологій накопичення енергії та їх застосування.'
}, {
  cat: 'Генератори',
  icon: 'bolt',
  read: '8 хвилин читання',
  title: 'Генератор як резервне джерело енергії для дому',
  excerpt: 'Коли потрібен генератор і як інтегрувати його в автономну систему.'
}, {
  cat: 'Енергоефективність',
  icon: 'home',
  read: '5 хвилин читання',
  title: 'Енергоефективність будинку: перші кроки до економії',
  excerpt: 'Практичні способи зменшити споживання ще до інвестицій в обладнання.'
}, {
  cat: 'Сонячна енергетика',
  icon: 'solar_power',
  read: '7 хвилин читання',
  title: 'Сонячні панелі в Україні: практичний гайд',
  excerpt: 'Скільки панелей потрібно, як рахувати вироблення і чого очікувати по сезонах.'
}];
const BLOG_CATS = ['Усі', 'Сонячна енергетика', 'Акумулятори', 'Генератори', 'Енергоефективність'];
function BlogCard({
  post,
  onNav,
  featured
}) {
  const {
    Badge
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('article');
    },
    style: {
      display: 'flex',
      flexDirection: featured ? 'row' : 'column',
      gap: featured ? 40 : 0,
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: post.icon,
    ratio: featured ? '4 / 3' : '16 / 9',
    tone: "teal",
    style: featured ? {
      flex: '0 0 46%'
    } : {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? '8px 0' : '20px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "eco"
  }, post.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, post.read)), /*#__PURE__*/React.createElement("h4", {
    style: featured ? {
      fontSize: 'var(--fs-h3)'
    } : {}
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-brand)',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4
    }
  }, "\u0427\u0438\u0442\u0430\u0442\u0438 ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_forward",
    size: 18
  }))));
}
function BlogPage({
  onNav
}) {
  const {
    Tabs,
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [cat, setCat] = React.useState('Усі');
  const list = cat === 'Усі' ? BLOG_POSTS.slice(1) : BLOG_POSTS.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u0411\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u044C",
    title: "\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043F\u0440\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044C",
    intro: "\u0417\u043D\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u0434\u0430\u044E\u0442\u044C \u0443\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C: \u043F\u0440\u043E \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0438\u0439 \u0431\u0443\u0434\u0438\u043D\u043E\u043A, \u0441\u043E\u043D\u044F\u0447\u043D\u0443 \u0435\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0443, \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0438, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0438 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u043E\u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C."
  }), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement(BlogCard, {
    post: BLOG_POSTS[0],
    onNav: onNav,
    featured: true
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)",
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: BLOG_CATS,
    value: cat,
    onChange: setCat,
    variant: "segmented"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 32
    }
  }, list.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.title,
    post: p,
    onNav: onNav
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435"))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function ArticlePage({
  onNav
}) {
  const {
    Badge,
    Avatar,
    Accordion,
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const faqs = [{
    q: 'Який тип акумулятора обрати для дому?',
    a: 'Для більшості домашніх систем літій-залізо-фосфатні (LiFePO₄) батареї дають кращий баланс терміну служби, глибини розряду та безпеки. Свинцеві дешевші на старті, але служать менше.'
  }, {
    q: 'Як розрахувати потрібну ємність?',
    a: 'Орієнтуйтесь на добове споживання та бажану кількість днів автономності. Autonomy Planner робить цей розрахунок автоматично з урахуванням глибини розряду.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-16)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('blog');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-secondary)',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 18
  }), " \u0423\u0441\u0456 \u0441\u0442\u0430\u0442\u0442\u0456"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "eco"
  }, "\u0410\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0438"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      color: 'var(--text-muted)'
    }
  }, "5 \u0445\u0432\u0438\u043B\u0438\u043D \u0447\u0438\u0442\u0430\u043D\u043D\u044F")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      marginBottom: 24
    }
  }, "\u041B\u0456\u0442\u0456\u0439 \u0447\u0438 \u0441\u0432\u0438\u043D\u0435\u0446\u044C? \u0412\u0438\u0431\u0456\u0440 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0434\u043B\u044F \u0434\u043E\u043C\u0443"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0414\u043C\u0438\u0442\u0440\u043E \u0421.",
    size: 44
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14
    }
  }, "\u0414\u043C\u0438\u0442\u0440\u043E \u0421\u0430\u0432\u0447\u0435\u043D\u043A\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\u0406\u043D\u0436\u0435\u043D\u0435\u0440 Autonomy Planner \xB7 12 \u0447\u0435\u0440\u0432\u043D\u044F 2026"))))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 var(--container-pad) var(--space-12)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: "battery_charging_full",
    ratio: "16 / 7",
    tone: "teal"
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "0 var(--container-pad) var(--space-28)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u0412\u0438\u0431\u0456\u0440 \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0430 \u2014 \u043E\u0434\u043D\u0435 \u0437 \u043D\u0430\u0439\u0432\u0430\u0436\u043B\u0438\u0432\u0456\u0448\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C \u043F\u0440\u0438 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u0456 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456. \u0412\u0456\u0434 \u043D\u044C\u043E\u0433\u043E \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u043D\u0435 \u043B\u0438\u0448\u0435 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u0430 \u0439 \u0442\u0435, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0440\u043E\u043A\u0456\u0432 \u0432\u043E\u043D\u0430 \u043F\u0440\u043E\u0441\u043B\u0443\u0436\u0438\u0442\u044C \u0431\u0435\u0437 \u0437\u0430\u043C\u0456\u043D\u0438."), /*#__PURE__*/React.createElement("h3", null, "\u0414\u0432\u0456 \u043E\u0441\u043D\u043E\u0432\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041D\u0430 \u0440\u0438\u043D\u043A\u0443 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0432\u0430\u0436\u0430\u044E\u0442\u044C \u0434\u0432\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457: \u0441\u0432\u0438\u043D\u0446\u0435\u0432\u043E-\u043A\u0438\u0441\u043B\u043E\u0442\u043D\u0456 \u0442\u0430 \u043B\u0456\u0442\u0456\u0439-\u0437\u0430\u043B\u0456\u0437\u043E-\u0444\u043E\u0441\u0444\u0430\u0442\u043D\u0456 (LiFePO\u2084) \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0438. \u041A\u043E\u0436\u043D\u0430 \u043C\u0430\u0454 \u0441\u0432\u043E\u0457 \u0441\u0438\u043B\u044C\u043D\u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u0442\u0430 \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u044E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u0421\u0432\u0438\u043D\u0446\u0435\u0432\u0456 \u0431\u0430\u0442\u0430\u0440\u0435\u0457 \u0434\u0435\u0448\u0435\u0432\u0448\u0456 \u043D\u0430 \u0441\u0442\u0430\u0440\u0442\u0456, \u0430\u043B\u0435 \u043C\u0430\u044E\u0442\u044C \u043C\u0435\u043D\u0448\u0443 \u0433\u043B\u0438\u0431\u0438\u043D\u0443 \u0440\u043E\u0437\u0440\u044F\u0434\u0443 \u0439 \u043A\u043E\u0440\u043E\u0442\u0448\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D \u0441\u043B\u0443\u0436\u0431\u0438. \u041B\u0456\u0442\u0456\u0454\u0432\u0456 \u043A\u043E\u0448\u0442\u0443\u044E\u0442\u044C \u0431\u0456\u043B\u044C\u0448\u0435, \u043F\u0440\u043E\u0442\u0435 \u0441\u043B\u0443\u0436\u0430\u0442\u044C \u0443 3\u20134 \u0440\u0430\u0437\u0438 \u0434\u043E\u0432\u0448\u0435 \u0456 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043C\u0430\u0439\u0436\u0435 \u0432\u0441\u044E \u0454\u043C\u043D\u0456\u0441\u0442\u044C."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: '20px 28px',
      borderLeft: '3px solid var(--brand-primary)',
      background: 'var(--surface-muted)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--fs-h5)',
      color: 'var(--text-primary)'
    }
  }, "\xAB\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043F\u0456\u0434\u0456\u0431\u0440\u0430\u043D\u0430 \u0454\u043C\u043D\u0456\u0441\u0442\u044C \u0432\u0430\u0436\u043B\u0438\u0432\u0456\u0448\u0430 \u0437\u0430 \u0442\u0438\u043F \u0445\u0456\u043C\u0456\u0457: \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u0442\u0430 \u0437\u0430 \u0437\u0430\u0439\u0432\u0456 \u043A\u0456\u043B\u043E\u0432\u0430\u0442-\u0433\u043E\u0434\u0438\u043D\u0438 \u043D\u0435 \u043E\u043A\u0443\u043F\u0430\u0454\u0442\u044C\u0441\u044F.\xBB"), /*#__PURE__*/React.createElement("h3", null, "\u0429\u043E \u0432\u0440\u0430\u0445\u043E\u0432\u0443\u0454 Autonomy Planner"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u0421\u0435\u0440\u0432\u0456\u0441 \u0440\u0430\u0445\u0443\u0454 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0443 \u0454\u043C\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u0431\u043E\u0432\u043E\u0433\u043E \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F, \u0431\u0430\u0436\u0430\u043D\u043E\u0457 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0433\u043B\u0438\u0431\u0438\u043D\u0438 \u0440\u043E\u0437\u0440\u044F\u0434\u0443 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0457 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457 \u2014 \u0456 \u043E\u0434\u0440\u0430\u0437\u0443 \u043F\u043E\u043A\u0430\u0437\u0443\u0454 \u0440\u0456\u0437\u043D\u0438\u0446\u044E \u0443 \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0442\u0430 \u043E\u043A\u0443\u043F\u043D\u043E\u0441\u0442\u0456."))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "FAQ",
    title: "\u041A\u043E\u0440\u043E\u0442\u043A\u043E \u043F\u0440\u043E \u0433\u043E\u043B\u043E\u0432\u043D\u0435",
    align: "start"
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: faqs
  })))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function ContactPage({
  onNav
}) {
  const {
    Input,
    Button,
    Checkbox,
    Tabs
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [sent, setSent] = React.useState(false);
  const [role, setRole] = React.useState('Власник будинку');
  const [agree, setAgree] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    title: "\u0417\u0430\u043B\u0438\u0448\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0437 \u043D\u0430\u043C\u0438",
    intro: "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443, \u0456 \u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u043F\u0456\u0434\u0456\u0431\u0440\u0430\u0442\u0438 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443."
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("h3", null, "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041F\u0438\u0442\u0430\u043D\u043D\u044F, \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0430\u0431\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0438\u0432\u0456\u0442 \u2014 \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0434\u043D\u044F."), [['mail', 'Email', 'hello@autonomyplanner.com'], ['call', 'Телефон', '+38 (044) 123 45 67'], ['location_on', 'Адреса', 'Київ, Україна']].map(([ic, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-teal-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--brand-primary)"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: l !== 'Адреса' ? 'ap-mono' : '',
    style: {
      color: 'var(--text-secondary)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-10)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--color-green-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--brand-eco)"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 8
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      marginTop: 24
    },
    onClick: () => setSent(false)
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0449\u0435 \u043E\u0434\u043D\u0443")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 500,
      display: 'block',
      marginBottom: 8
    }
  }, "\u042F \u2014"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    tabs: ['Власник будинку', 'Інсталятор'],
    value: role,
    onChange: setRole
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0406\u043C'\u044F",
    placeholder: "\u0412\u0430\u0448\u0435 \u0456\u043C'\u044F",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+38 (0__) ___ __ __"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 500
    }
  }, "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: "\u0420\u043E\u0437\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u043E \u0432\u0430\u0448 \u0431\u0443\u0434\u0438\u043D\u043E\u043A \u0456 \u0449\u043E \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u043D\u0443\u0432\u0430\u0442\u0438",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-primary)',
      padding: '11px 14px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical',
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--brand-primary)',
    onBlur: e => e.target.style.borderColor = 'var(--border-default)'
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u042F \u043F\u0440\u0438\u0439\u043C\u0430\u044E \u0443\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    disabled: !agree,
    fullWidth: true
  }, "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"))))), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
Object.assign(window, {
  BlogPage,
  ArticlePage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PagesContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PagesProduct.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Product pages
// FeaturesPage, HowItWorksPage, HomeownersPage, InstallersPage
// Copy on Homeowners / Installers / How-it-works is the confirmed (approved) content.

function FeatureRow({
  flip,
  eyebrow,
  h,
  t,
  points,
  icon,
  tone
}) {
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h3", null, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-lead)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '8px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 20,
    color: "var(--brand-eco)",
    fill: true
  }), " ", p))));
  const img = /*#__PURE__*/React.createElement(Placeholder, {
    icon: icon,
    ratio: "4 / 3",
    tone: tone || 'teal'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, img, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, img));
}

// Vertical benefit checklist (used on B2C/B2B pages).
function BenefitList({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-lead)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 24,
    color: "var(--brand-eco)",
    fill: true,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), " ", p)));
}
function FeaturesPage({
  onNav
}) {
  const {
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u041C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456",
    title: "\u041F\u043E\u0432\u043D\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044E",
    intro: "Autonomy Planner \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0438 \u043D\u0430 \u0447\u0456\u0442\u043A\u0438\u0439 \u043F\u043B\u0430\u043D. \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456\u0441\u0442\u044C \u0443 \u0432\u0438\u0431\u043E\u0440\u0456 \u0442\u0430 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0443 \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u043A\u0440\u043E\u043A\u0443.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav && onNav('app'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow_forward",
        size: 20
      })
    }, "\u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNav && onNav('how')
    }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454"))
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C",
    title: "\u0429\u043E \u0432\u043C\u0456\u0454 \u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0435\u0440\u0432\u0456\u0441",
    lede: "\u0423\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0435 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443 \u0456 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u043C\u0443 \u2014 \u0432\u0456\u0434 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0434\u043E \u0444\u0456\u043D\u0430\u043D\u0441\u0456\u0432."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "electric_meter",
    h: "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    t: "\u0410\u043D\u0430\u043B\u0456\u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0430 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "solar_power",
    h: "\u041F\u0456\u0434\u0431\u0456\u0440 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457",
    t: "\u0421\u043E\u043D\u044F\u0447\u043D\u0456 \u043F\u0430\u043D\u0435\u043B\u0456, \u0431\u0430\u0442\u0430\u0440\u0435\u0457, \u0456\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u0438, \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0438 \u2014 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0431\u0456\u0440 \u043F\u0456\u0434 \u0434\u0456\u043C.",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "savings",
    h: "\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u0439 \u043F\u043B\u0430\u043D",
    t: "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C, \u043E\u043A\u0443\u043F\u043D\u0456\u0441\u0442\u044C, \u0435\u0442\u0430\u043F\u0438 \u0432\u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F \u2014 \u0443\u0441\u0435 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0437\u0432\u0456\u0442\u0456.",
    tone: "eco"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "\u0421\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    h: "\u0417\u043C\u0435\u043D\u0448\u0456\u0442\u044C \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0434 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F\u043C \u0441\u0438\u0441\u0442\u0435\u043C",
    t: "\u0421\u0435\u0440\u0432\u0456\u0441 \u043F\u043E\u043A\u0430\u0437\u0443\u0454, \u0434\u0435 \u0432\u0438 \u0432\u0442\u0440\u0430\u0447\u0430\u0454\u0442\u0435 \u0435\u043D\u0435\u0440\u0433\u0456\u044E, \u0456 \u0449\u043E \u0432\u0430\u0440\u0442\u043E \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0448\u0438\u043C \u2014 \u043F\u0435\u0440\u0448 \u043D\u0456\u0436 \u0432\u043A\u043B\u0430\u0434\u0430\u0442\u0438 \u043A\u043E\u0448\u0442\u0438 \u0432 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F.",
    points: ['Профіль споживання по місяцях', 'Рекомендації з енергоефективності', 'Прогноз після оптимізації'],
    icon: "energy_savings_leaf",
    tone: "eco"
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    flip: true,
    eyebrow: "\u0414\u0436\u0435\u0440\u0435\u043B\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0457",
    h: "\u041F\u0456\u0434\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0436\u0435\u0440\u0435\u043B\u0430 \u043F\u0456\u0434 \u0432\u0430\u0448 \u0440\u0435\u0433\u0456\u043E\u043D",
    t: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0432\u0440\u0430\u0445\u043E\u0432\u0443\u0454 \u043C\u0456\u0441\u0446\u0435\u0432\u0456 \u043A\u043B\u0456\u043C\u0430\u0442\u0438\u0447\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u0442\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438, \u0449\u043E\u0431 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0439\u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0456\u0448\u0443 \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u044E.",
    points: ['Сонячні панелі та їх кількість', 'Резервні генератори', 'Адаптація до вашого регіону'],
    icon: "solar_power",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    eyebrow: "\u0410\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0438",
    h: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0454\u043C\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0442\u0438\u043F \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0430",
    t: "\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u0439\u0442\u0435 \u0442\u0438\u043F\u0438 \u0431\u0430\u0442\u0430\u0440\u0435\u0439 \u0437\u0430 \u0454\u043C\u043D\u0456\u0441\u0442\u044E, \u0442\u0435\u0440\u043C\u0456\u043D\u043E\u043C \u0441\u043B\u0443\u0436\u0431\u0438 \u0442\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044E \u2014 \u0456 \u0437\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441 \u043F\u0456\u0434 \u0432\u0430\u0448 \u0431\u044E\u0434\u0436\u0435\u0442.",
    points: ['Розрахунок потрібної ємності', 'Літій vs свинець', 'Глибина розряду й термін служби'],
    icon: "battery_charging_full",
    tone: "teal"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u0438",
    title: "\u0421\u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\u0430\u043D\u043E \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0432\u0430\u0448\u0438\u0445 \u0440\u0456\u0448\u0435\u043D\u044C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "footprint",
    h: "\u041F\u043E\u0435\u0442\u0430\u043F\u043D\u0435 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F",
    t: "\u0420\u043E\u0437\u043F\u043E\u0447\u043D\u0456\u0442\u044C \u0437 \u0435\u043D\u0435\u0440\u0433\u043E\u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0442\u0456\u043C \u0434\u043E\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0434\u0436\u0435\u0440\u0435\u043B\u0430 \u0442\u0430 \u043D\u0430\u043A\u043E\u043F\u0438\u0447\u0443\u0432\u0430\u0447\u0456."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "public",
    h: "\u0410\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F \u0434\u043E \u0440\u0435\u0433\u0456\u043E\u043D\u0443",
    t: "\u041A\u043B\u0456\u043C\u0430\u0442, \u0441\u043E\u043D\u044F\u0447\u043D\u0430 \u0440\u0430\u0434\u0456\u0430\u0446\u0456\u044F \u0442\u0430 \u0441\u0435\u0437\u043E\u043D\u043D\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0457 \u043C\u0456\u0441\u0446\u0435\u0432\u043E\u0441\u0442\u0456."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "visibility",
    h: "\u041F\u0440\u043E\u0437\u043E\u0440\u0456 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0438",
    t: "\u041A\u043E\u0436\u043D\u0430 \u0446\u0438\u0444\u0440\u0430 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0430 \u2014 \u0436\u043E\u0434\u043D\u0438\u0445 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u044C."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "picture_as_pdf",
    h: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442 \u0437\u0432\u0456\u0442\u0456\u0432",
    t: "\u0413\u043E\u0442\u043E\u0432\u0438\u0439 PDF \u0434\u043B\u044F \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0430, \u0431\u0430\u043D\u043A\u0443 \u0447\u0438 \u0430\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u043E\u0440\u0430."
  }))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function HowItWorksPage({
  onNav
}) {
  const {
    Button,
    Card,
    Stat
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  // Confirmed three-step flow.
  const steps = [['01', 'edit_note', 'Крок перший — Опишіть ваш будинок', 'Вкажіть ключову інформацію про будинок, побутові прилади, споживання електроенергії, потреби в резервному живленні та орієнтовний бюджет.'], ['02', 'compare_arrows', 'Крок другий — Порівняйте сценарії автономності', 'Система розрахує кілька можливих конфігурацій — від базового резерву до більш незалежного енергетичного рішення.'], ['03', 'description', 'Крок третій — Отримайте зрозумілу рекомендацію', 'Ви отримаєте структурований план із рекомендованим обладнанням, орієнтовною вартістю, рівнем автономності та наступними кроками.']];
  const scenarios = [{
    tone: 'teal',
    icon: 'shield',
    name: 'Базовий резерв',
    pct: '40–55',
    tag: 'Найдоступніше',
    t: 'Покриває критичні навантаження під час відключень: світло, інтернет, холодильник, зв\u2019язок.'
  }, {
    tone: 'gold',
    icon: 'balance',
    name: 'Оптимальний',
    pct: '75–85',
    tag: 'Баланс ціни й комфорту',
    t: 'Щоденний комфорт без огляду на тарифи й перебої — розумний баланс вартості та незалежності.'
  }, {
    tone: 'eco',
    icon: 'bolt',
    name: 'Максимальний',
    pct: '95+',
    tag: 'Майже повна незалежність',
    t: 'Майже повна незалежність від мережі протягом року з запасом ємності на похмурі періоди.'
  }];
  const chip = {
    teal: ['var(--color-teal-100)', 'var(--brand-primary)'],
    gold: ['var(--color-gold-100)', 'var(--brand-accent-hover)'],
    eco: ['var(--color-green-100)', 'var(--brand-eco)']
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u041F\u0440\u043E\u0446\u0435\u0441",
    title: "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454 \u0437\u0430 \u0442\u0440\u0438 \u043A\u0440\u043E\u043A\u0438",
    intro: "\u0412\u0438 \u043E\u043F\u0438\u0441\u0443\u0454\u0442\u0435 \u0434\u0456\u043C \u0456 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F, \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0440\u043E\u0437\u0440\u0430\u0445\u043E\u0432\u0443\u0454 \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u0457 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456, \u0430 \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0443 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E \u0442\u0430 \u0437\u0432\u0456\u0442. \u0416\u043E\u0434\u043D\u0438\u0445 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0437\u043D\u0430\u043D\u044C \u043D\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav && onNav('app'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow_forward",
        size: 20
      })
    }, "\u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A")
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, steps.map(([n, ic, h, t]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    variant: "outlined",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 56px 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      color: 'var(--color-teal-200)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-teal-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--brand-primary)",
    fill: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 6
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '64ch'
    }
  }, t))))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u0421\u0446\u0435\u043D\u0430\u0440\u0456\u0457",
    title: "\u0412\u0456\u0434 \u0431\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u0443 \u0434\u043E \u043F\u043E\u0432\u043D\u043E\u0457 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456",
    lede: "\u041D\u0430 \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043A\u0440\u043E\u0446\u0456 \u0432\u0438 \u043F\u043E\u0440\u0456\u0432\u043D\u044E\u0454\u0442\u0435 \u043A\u0456\u043B\u044C\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439 \u043F\u043E\u0440\u044F\u0434 \u0456 \u043E\u0431\u0438\u0440\u0430\u0454\u0442\u0435 \u0441\u0432\u0456\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0442\u0430 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, scenarios.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    variant: "elevated",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: chip[s.tone][0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: chip[s.tone][1],
    fill: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, s.pct), /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h4)',
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)'
    }
  }, "\u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 6
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, s.t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: chip[s.tone][1]
    }
  }, s.tag))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionIntro, {
    eyebrow: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
    title: "\u0429\u043E \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u043D\u0430\u043F\u0440\u0438\u043A\u0456\u043D\u0446\u0456"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "description",
    h: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
    t: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0435 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F, \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044F \u0442\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456 \u043A\u0440\u043E\u043A\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0456."
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "savings",
    h: "\u041E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0438\u0439 \u0431\u044E\u0434\u0436\u0435\u0442",
    t: "\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0442\u0430 \u0440\u0456\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0441\u0446\u0435\u043D\u0430\u0440\u0456\u044E.",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(FeatureItem, {
    icon: "handshake",
    h: "\u0413\u043E\u0442\u043E\u0432\u043D\u0456\u0441\u0442\u044C \u0434\u043E \u0440\u043E\u0437\u043C\u043E\u0432\u0438",
    t: "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0437\u0432\u0456\u0442 \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0443 \u2014 \u0432\u0456\u043D \u0443\u0436\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u0443\u0441\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438.",
    tone: "eco"
  }))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function HomeownersPage({
  onNav
}) {
  const {
    Button,
    Card,
    Avatar
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const benefits = ['Зрозуміти, яка система підходить саме для вашого будинку', 'Порівняти базовий, оптимальний і максимальний сценарії автономності', 'Уникнути переплати за зайве обладнання', 'Отримати зрозумілий звіт із рекомендованою конфігурацією', 'Підготуватися до розмови з інсталятором або постачальником обладнання'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "\u0414\u043B\u044F \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432 \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432",
    title: "\u041F\u043B\u0430\u043D\u0443\u0439\u0442\u0435 \u0435\u043D\u0435\u0440\u0433\u043E\u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0456\u0441\u0442\u044C \u0431\u0443\u0434\u0438\u043D\u043A\u0443 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u043E \u0439 \u0431\u0435\u0437 \u0437\u0430\u0439\u0432\u0438\u0445 \u0432\u0438\u0442\u0440\u0430\u0442",
    intro: "Autonomy Planner \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0430\u043C \u0431\u0443\u0434\u0438\u043D\u043A\u0456\u0432 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438, \u044F\u043A\u0435 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F \u0457\u043C \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0435: \u0441\u043E\u043D\u044F\u0447\u043D\u0456 \u043F\u0430\u043D\u0435\u043B\u0456, \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440, \u0456\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0430\u0431\u043E \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u0434\u0436\u0435\u0440\u0435\u043B\u043E \u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F \u2014 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043F\u043E\u0442\u0440\u0435\u0431 \u0431\u0443\u0434\u0438\u043D\u043A\u0443, \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u0442\u0430 \u0431\u0430\u0436\u0430\u043D\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => onNav && onNav('app')
    }, "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      onClick: () => onNav && onNav('cases')
    }, "\u041F\u0440\u0438\u043A\u043B\u0430\u0434\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432"))
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0430 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '18ch'
    }
  }, "\u0417\u0430\u043C\u0456\u0441\u0442\u044C \u0437\u0434\u043E\u0433\u0430\u0434\u043E\u043A \u2014 \u0447\u0456\u0442\u043A\u0438\u0439 \u043F\u043B\u0430\u043D \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u043C\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-lead)'
    }
  }, "\u0417\u0430\u043C\u0456\u0441\u0442\u044C \u0437\u0434\u043E\u0433\u0430\u0434\u043E\u043A, \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u043E\u0440\u0430\u0434 \u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0443 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u044E: \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0438\u0439 \u0431\u044E\u0434\u0436\u0435\u0442 \u0456 \u0440\u0456\u0432\u0435\u043D\u044C \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456."), /*#__PURE__*/React.createElement(BenefitList, {
    items: benefits
  })), /*#__PURE__*/React.createElement(Placeholder, {
    icon: "home",
    ratio: "4 / 5",
    tone: "teal",
    label: "\u0424\u043E\u0442\u043E: \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0454 \u0435\u043D\u0435\u0440\u0433\u043E\u043F\u043B\u0430\u043D"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: "solar_power",
    ratio: "4 / 3",
    tone: "gold",
    label: "\u0421\u043E\u043D\u044F\u0447\u043D\u0456 \u043F\u0430\u043D\u0435\u043B\u0456 \u043D\u0430 \u0434\u0430\u0445\u0443"
  }), /*#__PURE__*/React.createElement(Placeholder, {
    icon: "battery_charging_full",
    ratio: "4 / 3",
    tone: "teal",
    label: "\u0414\u043E\u043C\u0430\u0448\u043D\u0456\u0439 \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440"
  }), /*#__PURE__*/React.createElement(Placeholder, {
    icon: "electrical_services",
    ratio: "4 / 3",
    tone: "eco",
    label: "\u0406\u043D\u0432\u0435\u0440\u0442\u043E\u0440 \u0442\u0430 \u0440\u0435\u0437\u0435\u0440\u0432"
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginBottom: 16
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 22,
    color: "var(--brand-accent)",
    fill: true
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-primary)',
      maxWidth: '46ch',
      lineHeight: 'var(--lh-heading)',
      marginBottom: 24
    }
  }, "\xAB\u0412\u043F\u0435\u0440\u0448\u0435 \u044F \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0432, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043A\u043E\u0448\u0442\u0443\u0432\u0430\u0442\u0438\u043C\u0435 \u043C\u043E\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044C \u0456 \u044F\u043A \u0446\u0435 \u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u043E\u0435\u0442\u0430\u043F\u043D\u043E. \u0411\u0435\u0437 \u0446\u044C\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0456\u0441\u0443 \u044F \u0431 \u0432\u0438\u0442\u0440\u0430\u0442\u0438\u0432 \u0443\u0434\u0432\u0456\u0447\u0456 \u0431\u0456\u043B\u044C\u0448\u0435.\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0406\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E",
    size: 48
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block'
    }
  }, "\u0406\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u0435\u043D\u043A\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)'
    }
  }, "\u0412\u043B\u0430\u0441\u043D\u0438\u043A \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0443"))))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
function InstallersPage({
  onNav
}) {
  const {
    Button,
    Card,
    Avatar,
    Stat
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const benefits = ['Швидша первинна оцінка потреб клієнта', 'Структурований збір даних замість хаотичних повідомлень і дзвінків', 'Порівняння кількох сценаріїв конфігурації', 'Професійний звіт із рекомендацією для клієнта', 'Краща кваліфікація лідів до виїзду на об\u2019єкт'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    tone: "dark",
    eyebrow: "\u0414\u043B\u044F \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0456\u0432 / \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432",
    title: "\u041F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0439\u0442\u0435 \u0437\u0430\u043F\u0438\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u043D\u0430 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0456 \u0435\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u043D\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0448\u0432\u0438\u0434\u0448\u0435",
    intro: "Autonomy Planner \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0430\u043C \u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u0456 \u0434\u0430\u043D\u0456 \u0432\u0456\u0434 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u0448\u0432\u0438\u0434\u0448\u0435 \u043F\u0456\u0434\u0431\u0438\u0440\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0443\u0432\u0430\u0442\u0438 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0443 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u043E\u043C\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => onNav && onNav('contact')
    }, "\u0421\u0442\u0430\u0442\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      style: {
        color: '#fff',
        borderColor: 'var(--color-teal-600)'
      },
      onClick: () => onNav && onNav('pricing')
    }, "\u0422\u0430\u0440\u0438\u0444\u0438 Pro"))
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "\u221240",
    unit: "%",
    label: "\u0427\u0430\u0441\u0443 \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0457",
    tone: "eco",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2 400",
    unit: "+",
    label: "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0456\u0432 \u0437\u0430 \u0440\u0456\u043A",
    tone: "brand",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "< 5",
    unit: "\u0445\u0432",
    label: "\u041D\u0430 \u043E\u0434\u0438\u043D \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A",
    tone: "accent",
    align: "center"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: "engineering",
    ratio: "4 / 3",
    tone: "teal",
    label: "\u0424\u043E\u0442\u043E: \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440 \u043D\u0430 \u043E\u0431\\u2019\u0454\u043A\u0442\u0456 \u0437 \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u043E\u043C"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u041C\u0435\u043D\u0448\u0435 \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      maxWidth: '20ch'
    }
  }, "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438\u0437\u0443\u0439\u0442\u0435 \u043F\u043E\u0434\u0430\u0447\u0443 \u0440\u0456\u0448\u0435\u043D\u044C \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-lead)'
    }
  }, "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0437\u043C\u0435\u043D\u0448\u0443\u0454 \u043E\u0431\u0441\u044F\u0433 \u0440\u0443\u0447\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u043D\u0430 \u0435\u0442\u0430\u043F\u0456 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u043F\u0440\u043E\u0440\u0430\u0445\u0443\u043D\u043A\u0443, \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0454 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u044E \u0437 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C\u0438 \u0442\u0430 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0434\u0430\u0447\u0443 \u0440\u0456\u0448\u0435\u043D\u044C \u0449\u043E\u0434\u043E \u0441\u043E\u043D\u044F\u0447\u043D\u0438\u0445 \u043F\u0430\u043D\u0435\u043B\u0435\u0439, \u0430\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0456\u0432, \u0456\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u0456\u0432 \u0456 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E \u0436\u0438\u0432\u043B\u0435\u043D\u043D\u044F."), /*#__PURE__*/React.createElement(BenefitList, {
    items: benefits
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Card, {
    variant: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginBottom: 16
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 22,
    color: "var(--brand-accent)",
    fill: true
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-h4)',
      maxWidth: '52ch',
      lineHeight: 'var(--lh-heading)',
      marginBottom: 24
    }
  }, "\xAB\u041A\u043B\u0456\u0454\u043D\u0442\u0430\u043C \u043B\u0435\u0433\u0448\u0435 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0438 \u0440\u0456\u0448\u0435\u043D\u043D\u044F, \u043A\u043E\u043B\u0438 \u0432\u043E\u043D\u0438 \u0431\u0430\u0447\u0430\u0442\u044C \u0442\u043E\u0447\u043D\u0456 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0438. Autonomy Planner \u0441\u043A\u043E\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u0439 \u043D\u0430 40%.\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u041C\u0430\u0440\u0456\u044F \u0421\u0438\u0434\u043E\u0440\u0435\u043D\u043A\u043E",
    size: 48
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block'
    }
  }, "\u041C\u0430\u0440\u0456\u044F \u0421\u0438\u0434\u043E\u0440\u0435\u043D\u043A\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-teal-200)',
      fontSize: 'var(--fs-small)'
    }
  }, "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457-\u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0430"))))), /*#__PURE__*/React.createElement(CTA, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
Object.assign(window, {
  FeaturesPage,
  HowItWorksPage,
  HomeownersPage,
  InstallersPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PagesProduct.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlannerApp.jsx
try { (() => {
// Autonomy Planner — Website UI kit · interactive Planner app demo

function PlannerApp({
  onNav
}) {
  const {
    Card,
    Button,
    Input,
    Select,
    Stat,
    Badge,
    Tabs
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [area, setArea] = React.useState(120);
  const [consumption, setConsumption] = React.useState(540);
  const [type, setType] = React.useState('Приватний дім');
  const [done, setDone] = React.useState(false);

  // toy "calculation"
  const daily = (consumption / 30).toFixed(1);
  const panels = Math.max(6, Math.round(consumption / 55));
  const battery = Math.round(consumption / 30 * 1.4);
  const cost = (panels * 9000 + battery * 11000 + 45000).toLocaleString('uk-UA');
  const payback = (1 + consumption / 360).toFixed(1);
  const autonomy = Math.min(98, 60 + Math.round(panels * 1.4));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-subtle)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.AP_LOGO || "../../assets/ap-logo.png",
    alt: "",
    style: {
      width: 32,
      height: 32,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 16
    }
  }, "Autonomy\xA0Planner"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    style: {
      marginLeft: 8
    }
  }, "\u0414\u0435\u043C\u043E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 18
  }), " \u041D\u0430 \u0441\u0430\u0439\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--color-teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-teal-800)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "\u0406\u041F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      background: '#fff',
      borderRight: '1px solid var(--border-default)',
      padding: 'var(--space-6)'
    }
  }, [['dashboard', 'Огляд', false], ['calculate', 'Новий розрахунок', true], ['folder', 'Мої проекти', false], ['menu_book', 'База знань', false], ['settings', 'Налаштування', false]].map(([ic, l, active]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 4,
      color: active ? 'var(--text-brand)' : 'var(--text-secondary)',
      background: active ? 'var(--color-teal-50)' : 'transparent',
      fontWeight: active ? 600 : 400,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    fill: active
  }), " ", l))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 'var(--space-12)',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 6
    }
  }, "\u041D\u043E\u0432\u0438\u0439 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 32
    }
  }, "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0432\u0430\u0448 \u0434\u0456\u043C \u2014 \u043C\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u0454\u043C\u043E \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E \u0456 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated"
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 20
    }
  }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043E\u0431'\u0454\u043A\u0442\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u0422\u0438\u043F \u043E\u0431'\u0454\u043A\u0442\u0430",
    options: ['Приватний дім', 'Котедж', 'Дача'],
    value: type,
    onChange: e => setType(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041F\u043B\u043E\u0449\u0430 \u0431\u0443\u0434\u0438\u043D\u043A\u0443",
    type: "number",
    suffix: "\u043C\xB2",
    value: area,
    onChange: e => setArea(+e.target.value || 0)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041C\u0456\u0441\u044F\u0447\u043D\u0435 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    type: "number",
    suffix: "kWh",
    value: consumption,
    onChange: e => setConsumption(+e.target.value || 0),
    hint: "\u0417 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 \u043F\u043B\u0430\u0442\u0456\u0436\u043A\u0438 \u0437\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u0435\u043D\u0435\u0440\u0433\u0456\u044E"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setDone(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "bolt",
      size: 20,
      fill: true
    })
  }, "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"))), /*#__PURE__*/React.createElement(Card, {
    variant: done ? 'elevated' : 'subtle',
    style: {
      opacity: done ? 1 : 0.62,
      transition: 'opacity .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h5", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"), done && /*#__PURE__*/React.createElement(Badge, {
    tone: "eco"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eco",
    size: 14,
    fill: true
  }), " \u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0456\u0441\u0442\u044C ", autonomy, "%")), done ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: daily,
    unit: "kWh",
    label: "\u0414\u043E\u0431\u043E\u0432\u0435 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: panels,
    unit: "\u0448\u0442",
    label: "\u0421\u043E\u043D\u044F\u0447\u043D\u0456 \u043F\u0430\u043D\u0435\u043B\u0456",
    tone: "accent"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: battery,
    unit: "kWh",
    label: "\u0404\u043C\u043D\u0456\u0441\u0442\u044C \u0431\u0430\u0442\u0430\u0440\u0435\u0439",
    tone: "ink"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: payback,
    unit: "\u0440",
    label: "\u041E\u043A\u0443\u043F\u043D\u0456\u0441\u0442\u044C",
    tone: "eco"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: 20,
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "\u041E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: 'var(--text-brand)'
    }
  }, "\u20B4", cost)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    style: {
      marginTop: 24
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "picture_as_pdf",
      size: 20
    })
  }, "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u0432\u0456\u0442 \u0443 PDF")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "insights",
    size: 48,
    color: "var(--color-neutral-300)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0456 \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \xAB\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438\xBB"))))))));
}
Object.assign(window, {
  PlannerApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlannerApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// Autonomy Planner — Website UI kit · CTA + Pricing + Footer

function CTA({
  onNav
}) {
  const {
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-20) var(--space-16)',
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      top: -60,
      width: 260,
      height: 260,
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--color-teal-600), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      position: 'relative'
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u0456 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--color-teal-200)',
      maxWidth: '52ch',
      margin: '16px auto 32px',
      position: 'relative'
    }
  }, "\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 Autonomy Planner \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E. \u0416\u043E\u0434\u043D\u0438\u0445 \u043A\u0430\u0440\u0442\u043E\u043A, \u0436\u043E\u0434\u043D\u0438\u0445 \u0437\u043E\u0431\u043E\u0432'\u044F\u0437\u0430\u043D\u044C."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav && onNav('app')
  }, "\u041F\u043E\u0447\u0430\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'var(--color-teal-500)'
    }
  }, "\u0420\u043E\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0434\u0435\u043C\u043E"))));
}
function Pricing({
  onNav
}) {
  const {
    Card,
    Button,
    Badge
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  // Confirmed four-tier structure — mixed billing (free / one-time / monthly / custom).
  const plans = [{
    name: 'Безкоштовна перевірка',
    sub: 'Для тих, хто хоче швидко оцінити приблизні потреби в автономності.',
    price: '0',
    unit: '₴',
    period: 'назавжди',
    cta: 'Почати безкоштовно',
    nav: 'app',
    featured: false,
    feats: ['Базова оцінка енергетичних потреб', 'Орієнтовний рівень автономності', 'Базовий рекомендований сценарій']
  }, {
    name: 'План для дому',
    sub: 'Для власників будинків, які хочуть зрозумілу рекомендацію перед купівлею обладнання.',
    price: '990',
    unit: '₴',
    period: 'одноразово',
    cta: 'Обрати план',
    nav: 'app',
    featured: true,
    badge: 'Для власників',
    feats: ['Детальна рекомендація щодо конфігурації', 'Базовий, оптимальний і максимальний сценарії', 'Орієнтовний бюджет', 'PDF-звіт', 'Рекомендовані наступні кроки']
  }, {
    name: 'Професійний план',
    sub: 'Для інсталяторів і невеликих команд, яким треба швидше оцінювати запити клієнтів.',
    price: '2 900',
    unit: '₴',
    period: '/ місяць',
    cta: 'Спробувати Pro',
    nav: 'contact',
    featured: false,
    badge: 'Для інсталяторів',
    feats: ['Багаторазові розрахунки для клієнтів', 'Структурований збір даних від лідів', 'Збережені проєкти', 'Брендовані звіти з рекомендаціями', 'Порівняння сценаріїв']
  }, {
    name: 'Бізнес / партнерський',
    sub: 'Для більших інсталяційних компаній та постачальників енергетичних рішень.',
    price: 'Індивідуально',
    unit: '',
    period: 'за запитом',
    cta: 'Зв\u2019язатися',
    nav: 'contact',
    featured: false,
    custom: true,
    feats: ['Командний доступ', 'Індивідуальні робочі процеси', 'Розширена звітність', 'Інтеграція з CRM або процесами', 'Партнерська підтримка']
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0426\u0456\u043D\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "\u041F\u0440\u043E\u0437\u043E\u0440\u0456 \u0442\u0430\u0440\u0438\u0444\u0438 \u043F\u0456\u0434 \u043A\u043E\u0436\u043D\u0443 \u0437\u0430\u0434\u0430\u0447\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u041F\u043E\u0447\u043D\u0456\u0442\u044C \u0456\u0437 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E\u0457 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438. \u041F\u043B\u0430\u0442\u0456\u0442\u044C \u0437\u0430 \u0434\u0456\u043C \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0430\u0431\u043E \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0456\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043D\u0430 Pro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      alignItems: 'stretch',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: p.featured ? 'elevated' : 'outlined',
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...(p.featured ? {
        border: '2px solid var(--brand-primary)'
      } : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 26,
      marginBottom: 10,
      flexShrink: 0
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: p.featured ? 'accent' : 'brand',
    variant: p.featured ? 'solid' : 'soft'
  }, p.badge)), /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      flexShrink: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)',
      margin: '8px 0 0',
      minHeight: 60,
      flexShrink: 0
    }
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      flexWrap: 'wrap',
      margin: '20px 0 4px',
      flexShrink: 0
    }
  }, p.unit && /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, p.unit), /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: p.custom ? 'var(--fs-h4)' : 'var(--fs-h1)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, p.price)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-small)',
      marginBottom: 24,
      flexShrink: 0
    }
  }, p.period), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'primary' : 'secondary',
    fullWidth: true,
    onClick: () => onNav && onNav(p.nav)
  }, p.cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '24px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-small)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--brand-eco)",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), " ", f)))))));
}
function Footer({
  onNav
}) {
  const go = v => e => {
    e.preventDefault();
    onNav && onNav(v);
  };
  const cols = [['Продукт', [['Можливості', 'features'], ['Як це працює', 'how'], ['Ціни', 'pricing'], ['Кейси', 'cases']]], ['Рішення', [['Для власників', 'homeowners'], ['Для інсталяторів', 'installers'], ['База знань', 'blog'], ['Блог', 'blog']]], ['Компанія', [['Про нас', 'about'], ['Контакти', 'contact'], ['Заявка', 'contact'], ['Спробувати', 'app']]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: '#fff',
      padding: 'var(--space-20) var(--container-pad) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.AP_LOGO || "../../assets/ap-logo.png",
    alt: "Autonomy Planner",
    style: {
      width: 40,
      height: 40,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 18,
      color: '#fff'
    }
  }, "Autonomy\xA0Planner")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-teal-200)',
      maxWidth: '32ch',
      fontSize: 'var(--fs-small)'
    }
  }, "\u041F\u043E\u0435\u0442\u0430\u043F\u043D\u0438\u0439, \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u043E \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u043B\u0430\u043D \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456 \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u043C\u0443.")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontSize: 'var(--fs-small)',
      marginBottom: 16,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-teal-300)'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(([l, v], i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go(v),
    style: {
      color: 'var(--color-teal-100)',
      fontSize: 'var(--fs-small)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-teal-900)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--color-teal-300)',
      fontSize: 'var(--fs-small)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Autonomy Planner. \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--color-teal-300)'
    }
  }, "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--color-teal-300)'
    }
  }, "\u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F")))));
}
Object.assign(window, {
  CTA,
  Pricing,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Testimonials + Audience

function Testimonials() {
  const {
    Card,
    Avatar,
    Badge
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const quotes = [{
    q: 'Вперше я зрозумів, скільки коштуватиме моя автономність і як це робити поетапно. Без цього сервісу я б витратив удвічі більше.',
    n: 'Іван Петренко',
    r: 'Власник приватного дому'
  }, {
    q: 'Клієнтам легше прийняти рішення, коли вони бачать точні розрахунки. Autonomy Planner скоротив час консультацій на 40%.',
    n: 'Марія Сидоренко',
    r: 'Директор компанії-інсталятора'
  }, {
    q: 'Як інсталятор, я економлю години на розрахунках. Клієнти отримують точні цифри і довіряють моїм рекомендаціям.',
    n: 'Олег Коваленко',
    r: 'Інженер-інсталятор'
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0412\u0456\u0434\u0433\u0443\u043A\u0438"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u0429\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u043F\u0440\u043E Autonomy Planner \u0442\u0456, \u0445\u0442\u043E \u0432\u0436\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0454\u0442\u044C\u0441\u044F.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, quotes.map(qt => /*#__PURE__*/React.createElement(Card, {
    key: qt.n,
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      marginBottom: 16
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 20,
    color: "var(--brand-accent)",
    fill: true
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-lead)',
      marginBottom: 24
    }
  }, "\xAB", qt.q, "\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: qt.n,
    size: 44
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14
    }
  }, qt.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, qt.r)))))));
}
function Audience() {
  const {
    Card,
    Button,
    Tabs,
    Badge
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const [aud, setAud] = React.useState('b2c');
  const data = {
    b2c: {
      badge: 'Власники',
      h: 'Сплануйте автономність самостійно',
      t: 'Розрахуйте споживання, підберіть обладнання, оцініть вартість і окупність — без технічних знань.',
      icon: 'home',
      points: ['Покроковий майстер розрахунку', 'Зрозумілий звіт без жаргону', 'Оцінка вартості та окупності']
    },
    b2b: {
      badge: 'Інсталятори',
      h: 'Прискорте роботу з клієнтами',
      t: 'Швидкі розрахунки, професійні звіти з вашим брендом та зменшення часу на консультації.',
      icon: 'engineering',
      points: ['Розрахунки за хвилини, не години', 'Брендовані PDF-звіти', 'База проектів і клієнтів']
    }
  }[aud];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 40px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0420\u0456\u0448\u0435\u043D\u043D\u044F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "\u0414\u043B\u044F \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u0456\u0432 \u0456 \u0456\u043D\u0441\u0442\u0430\u043B\u044F\u0442\u043E\u0440\u0456\u0432"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u041E\u0434\u0438\u043D \u0441\u0435\u0440\u0432\u0456\u0441, \u0434\u0432\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    tabs: [{
      value: 'b2c',
      label: 'Для власників'
    }, {
      value: 'b2b',
      label: 'Для інсталяторів'
    }],
    value: aud,
    onChange: setAud
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "solid"
  }, data.badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '20px 0 14px'
    }
  }, data.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 24
    }
  }, data.t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, data.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 20,
    color: "var(--brand-eco)",
    fill: true
  }), " ", p))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435")), /*#__PURE__*/React.createElement(Placeholder, {
    icon: data.icon,
    label: data.badge,
    ratio: "auto",
    style: {
      borderRadius: 0,
      borderTopRightRadius: 'var(--radius-lg)',
      borderBottomRightRadius: 'var(--radius-lg)',
      minHeight: 380
    },
    tone: "teal"
  }))));
}
Object.assign(window, {
  Testimonials,
  Audience
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Autonomy Planner — Website UI kit · shared helpers
// Material Symbols icon + branded image placeholder.

function Icon({
  name,
  size = 24,
  color = 'currentColor',
  fill = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded",
    style: {
      fontSize: size,
      color,
      lineHeight: 1,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      userSelect: 'none',
      ...style
    }
  }, name);
}

// Branded placeholder panel standing in for product screenshots / photography.
function Placeholder({
  icon = 'solar_power',
  label,
  ratio = '4 / 3',
  tone = 'teal',
  style
}) {
  const tones = {
    teal: {
      bg: 'var(--color-teal-50)',
      fg: 'var(--color-teal-300)',
      br: 'var(--color-teal-100)'
    },
    gold: {
      bg: 'var(--color-gold-50)',
      fg: 'var(--color-gold-300)',
      br: 'var(--color-gold-200)'
    },
    eco: {
      bg: 'var(--color-green-100)',
      fg: 'var(--color-green-500)',
      br: 'var(--color-green-200)'
    },
    dark: {
      bg: 'var(--surface-dark)',
      fg: 'var(--color-teal-500)',
      br: 'var(--color-teal-900)'
    }
  }[tone] || {
    bg: 'var(--color-teal-50)',
    fg: 'var(--color-teal-300)',
    br: 'var(--color-teal-100)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      background: tones.bg,
      border: `1px solid ${tones.br}`,
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 56,
    color: tones.fg,
    fill: true
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: tones.fg,
      fontWeight: 500
    }
  }, label));
}

// Section wrapper: vertical rhythm + centered container.
function Section({
  children,
  bg = 'var(--surface-page)',
  pad = 'var(--space-28)',
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: `${pad} var(--container-pad)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}

// Small uppercase eyebrow above section headings.
function Eyebrow({
  children,
  color = 'var(--text-brand)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color
    }
  }, children);
}

// Page banner: eyebrow + big heading + intro, on a tinted band.
function PageHero({
  eyebrow,
  title,
  intro,
  tone = 'subtle',
  actions
}) {
  const bg = tone === 'dark' ? 'var(--surface-dark)' : tone === 'brand' ? 'var(--surface-brand)' : 'var(--surface-subtle)';
  const dark = tone === 'dark' || tone === 'brand';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--space-20) var(--container-pad)',
      borderBottom: dark ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    color: dark ? 'var(--color-gold-400)' : 'var(--text-brand)'
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontSize: 'var(--fs-h1)',
      maxWidth: '18ch',
      color: dark ? '#fff' : 'var(--text-primary)'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 'var(--fs-lead)',
      color: dark ? 'var(--color-teal-200)' : 'var(--text-secondary)',
      maxWidth: '60ch'
    }
  }, intro), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, actions)));
}

// Centered section intro (eyebrow + heading + optional lede).
function SectionIntro({
  eyebrow,
  title,
  lede,
  color,
  align = 'center',
  max = 720
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: max,
      margin: align === 'center' ? '0 auto 56px' : '0 0 48px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    color: color
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, lede));
}

// Small feature with icon chip, used in grids.
function FeatureItem({
  icon,
  h,
  t,
  tone = 'teal'
}) {
  const chip = tone === 'gold' ? ['var(--color-gold-100)', 'var(--brand-accent-hover)'] : tone === 'eco' ? ['var(--color-green-100)', 'var(--brand-eco)'] : ['var(--color-teal-100)', 'var(--brand-primary)'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: chip[0],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: chip[1],
    fill: true
  })), /*#__PURE__*/React.createElement("h5", {
    style: {
      marginBottom: 8
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, t));
}
Object.assign(window, {
  Icon,
  Placeholder,
  Section,
  Eyebrow,
  PageHero,
  SectionIntro,
  FeatureItem
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Value.jsx
try { (() => {
// Autonomy Planner — Website UI kit · Why / Capabilities / How it works

function WhyUs() {
  const {
    Card
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const items = [{
    tag: 'Поетапно',
    icon: 'footprint',
    h: 'Розбиваємо шлях до автономності на реальні етапи',
    t: 'Кожен крок має сенс і фінансове обґрунтування. Жодного «купіть усе одразу».'
  }, {
    tag: 'Прозоро',
    icon: 'visibility',
    h: 'Бачите кожен розрахунок і кожне рішення',
    t: 'Немає прихованих припущень — лише ваші цифри й чіткі формули.'
  }, {
    tag: 'Гнучко',
    icon: 'tune',
    h: 'Адаптується до вашого бюджету і потреб',
    t: 'Сонячні панелі, батареї, інвертори — підбір під ваш дім і фінанси.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-subtle)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0430"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "\u0427\u043E\u043C\u0443 \u0432\u0438\u0431\u0438\u0440\u0430\u044E\u0442\u044C Autonomy Planner"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u041F\u0440\u043E\u0441\u0442\u043E, \u0447\u0435\u0441\u043D\u043E, \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u043E \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u043E \u2014 \u0456 \u0437\u0430\u0432\u0436\u0434\u0438 \u0443 \u0432\u0430\u0448\u043E\u043C\u0443 \u0442\u0435\u043C\u043F\u0456.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.h,
    variant: "elevated",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-teal-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 26,
    color: "var(--brand-primary)",
    fill: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 700,
      color: 'var(--brand-eco)'
    }
  }, it.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '8px 0 12px'
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, it.t)))));
}
function Capabilities() {
  const items = [{
    tag: 'Енергія',
    icon: 'electric_meter',
    h: 'Розрахунок споживання',
    t: 'Аналіз вашого реального та прогнозованого споживання за реальними даними.'
  }, {
    tag: 'Обладнання',
    icon: 'solar_power',
    h: 'Підбір конфігурації',
    t: 'Сонячні панелі, батареї, інвертори, генератори — оптимальний набір під дім.'
  }, {
    tag: 'План',
    icon: 'savings',
    h: 'Фінансовий план автономності',
    t: 'Вартість, окупність, етапи впровадження — усе в одному звіті.'
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u0424\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "\u0429\u043E \u0432\u043C\u0456\u0454 \u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0435\u0440\u0432\u0456\u0441"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-secondary)'
    }
  }, "\u0423\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0435 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443 \u0456 \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u043C\u0443 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.h
  }, /*#__PURE__*/React.createElement(Placeholder, {
    icon: it.icon,
    ratio: "16 / 10",
    tone: "teal"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 20,
      fontSize: 'var(--fs-small)',
      fontWeight: 700,
      color: 'var(--brand-eco)'
    }
  }, it.tag), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '6px 0 10px'
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, it.t)))));
}
function HowItWorks({
  onNav
}) {
  const {
    Button
  } = window.AutonomyPlannerDesignSystem_43f1d6;
  const steps = [{
    icon: 'edit_note',
    h: 'Крок перший — введення даних',
    t: 'Розповідаєте про свій дім, його розташування і бюджет.'
  }, {
    icon: 'bolt',
    h: 'Крок другий — аналіз енергії',
    t: 'Сервіс розраховує ваше енергоспоживання і потенціал відновлюваних джерел.'
  }, {
    icon: 'battery_charging_full',
    h: 'Крок третій — рекомендації обладнання',
    t: 'Отримуєте варіанти конфігурацій сонячних панелей, батарей і генераторів.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface-dark)",
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--color-gold-400)"
  }, "\u041F\u0440\u043E\u0446\u0435\u0441"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      color: '#fff'
    }
  }, "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454 \u0437\u0430 \u0447\u043E\u0442\u0438\u0440\u0438 \u043A\u0440\u043E\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 'var(--fs-lead)',
      color: 'var(--color-teal-200)'
    }
  }, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0430\u043D\u0456 \u043F\u0440\u043E \u0432\u0430\u0448 \u0434\u0456\u043C, \u043E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u043B\u0430\u043D. \u0412\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0456 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u043E.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.h,
    style: {
      borderTop: '2px solid var(--color-teal-700)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 32,
    color: "var(--color-gold-400)",
    fill: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "ap-mono",
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--color-teal-600)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      marginBottom: 10
    }
  }, s.h), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-teal-200)'
    }
  }, s.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav && onNav('app')
  }, "\u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043E\u043A"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'var(--color-teal-600)'
    }
  }, "\u0414\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435")));
}
Object.assign(window, {
  WhyUs,
  Capabilities,
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Value.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/logo-data.js
try { (() => {
// Autonomy Planner — inlined brand mark (data URI) so the marketing kit
// stays self-contained when bundled to a single offline HTML file.
window.AP_LOGO = "data:image/png;base64,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";
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/logo-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
