
import React from 'react';
import ReactDOM from 'react-dom';
require('zepto.min');
var r = React;
var a = {
    exports: {},
    id: 1,
    loaded: !1
};
var Search = r.createClass({
    displayName: "SearchBar",
    getStyle: function () {
        return {
            root: {
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                WebkitTransform: "translate3d(0, -3.5rem, 0)",
                transform: "translate3d(0, -3.5rem, 0)",
                WebkitTransition: "-webkit-transform .25s",
                transition: "transform .25s",
                zIndex: "1002"
            },
            form: {
                background: "#fff",
                padding: ".5rem 3.8rem .5rem 1.75rem",
                position: "relative",
                zIndex: "2"
            },
            inputWrap: {
                border: "1px solid #CACACA",
                borderRadius: ".2rem",
                paddingLeft: ".7rem",
                height: "2rem",
                lineHeight: "2rem",
                position: "relative"
            },
            button: {
                right: ".4rem",
                position: "absolute",
                top: ".5rem",
                borderRadius: ".2rem",
                width: "3rem",
                height: "2rem",
                lineHeight: "2rem",
                fontSize: ".75rem",
                cursor: "pointer",
                border: "1px solid #f85f48",
                backgroundColor: "#f85f48",
                color: "#fff",
                opacity: "0",
                boxSizing: "content-box"
            },
            show: {
                opacity: "1"
            },
            formShow: {
                WebkitTransform: "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)"
            },
            input: {
                width: "95%",
                height: "1rem",
                lineHeight: "1rem",
                fontSize: ".8rem",
                outline: "none",
                boxShadow: "none",
                WebkitAppearance: "none",
                border: "none",
                WebkitTransition: "opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                transition: "opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                opacity: "0"
            },
            marker: {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "#f5f5f5",
                zIndex: "1001",
                display: "none"
            },
            markerShow: {
                display: "block",
                WebkitAnimation: "marker-show 200ms both",
                animation: "marker-show 200ms both"
            },
            cancel: {
                position: "absolute",
                left: 0,
                top: 0,
                margin: "0 .5rem",
                width: ".75rem",
                height: "3rem",
                display: "block",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
                backgroundImage: "url(data:image/png;base64,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)",
                backgroundPosition: "center center"
            }
        }
    },
    getInitialState: function () {
        return {
            show: !1
        }
    },
    _handleSubmit: function (e) {
        var t = this.refs.value.value.trim();
        return t || e.preventDefault(), window.zhuge && zhuge.track("分答-发送搜索请求"), !0
    },
    componentDidMount: function () {
        $(this.props.trigger).click(function (e) {
            e.preventDefault(), window.scrollTo(0, 0), $("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), this.setState({
                show: !0
            }), this.refs.value.focus(), window.zhuge && zhuge.track("分答-点击搜索按钮")
        }.bind(this))
    },
    cancel: function (e) {
        e.preventDefault(), this.setState({
            show: !1
        }), $("html, body").css({
            overflow: "visible",
            height: "auto"
        })
    },
    render: function () {
        var e = this.getStyle(),
            t = a.extend;
        return r.createElement("div", null, r.createElement("section", {
            style: this.state.show ? t(e.root, e.formShow) : e.root
        }, r.createElement("form", {
            action: this.props.action || "/search",
            style: e.form,
            onSubmit: this._handleSubmit
        }, r.createElement("a", {
            onClick: this.cancel,
            href: "javascript:;",
            style: e.cancel
        }), r.createElement("div", {
            style: e.inputWrap
        }, r.createElement("input", {
            ref: "value",
            name: "key",
            maxLength: "30",
            style: this.state.show ? t(e.input, e.show) : e.input,
            placeholder: this.props.placeholder || "搜索感兴趣的人和问题",
            autoComplete: "off"
        })), r.createElement("button", {
            type: "submit",
            style: this.state.show ? t(e.button, e.show) : e.button
        }, "搜索"))), r.createElement("div", {
            style: this.state.show ? t(e.marker, e.markerShow) : e.marker
        }))
    }
});

ReactDOM.render(<Search />, document.getElementById('search'));