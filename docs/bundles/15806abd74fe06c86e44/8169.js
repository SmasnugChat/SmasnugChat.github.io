"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[8169,6404],{"./node_modules/matrix-react-sdk/src/components/views/location/LocationButton.tsx":(e,t,o)=>{o.r(t),o.d(t,{LocationButton:()=>B,default:()=>I});var s=o("./node_modules/react/index.js"),n=o("./node_modules/classnames/index.js"),a=o.n(n),r=o("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),i=o("./node_modules/matrix-react-sdk/src/components/views/rooms/CollapsibleButton.tsx"),l=o("./node_modules/matrix-react-sdk/src/components/structures/ContextMenu.tsx"),c=o("./node_modules/matrix-react-sdk/src/components/views/rooms/MessageComposerButtons.tsx"),m=o("./node_modules/@babel/runtime/helpers/esm/extends.js"),d=o("./node_modules/matrix-react-sdk/src/contexts/MatrixClientContext.tsx"),u=o("./node_modules/matrix-react-sdk/src/components/views/location/LocationPicker.tsx"),_=o("./node_modules/matrix-react-sdk/src/components/views/location/shareLocation.ts"),p=o("./node_modules/matrix-react-sdk/src/settings/SettingsStore.ts"),h=o("./node_modules/matrix-react-sdk/src/components/views/elements/AccessibleButton.tsx"),v=o("./node_modules/matrix-react-sdk/res/img/element-icons/caret-left.svg"),x=o("./node_modules/matrix-react-sdk/res/img/element-icons/cancel-rounded.svg");const g=({onBack:e,onCancel:t,displayBack:o})=>s.createElement("div",{className:"mx_ShareDialogButtons"},o&&s.createElement(h.A,{className:"mx_ShareDialogButtons_button left","aria-label":(0,r._t)("action|back"),onClick:e,element:"button"},s.createElement(v.I,{className:"mx_ShareDialogButtons_button-icon"})),s.createElement(h.A,{className:"mx_ShareDialogButtons_button right","aria-label":(0,r._t)("action|close"),onClick:t,element:"button"},s.createElement(x.I,{className:"mx_ShareDialogButtons_button-icon"})));var k=o("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),L=o("./node_modules/matrix-react-sdk/src/stores/OwnProfileStore.ts"),b=o("./node_modules/matrix-react-sdk/src/components/views/avatars/BaseAvatar.tsx"),y=o("./node_modules/matrix-react-sdk/src/components/views/typography/Heading.tsx"),E=o("./node_modules/matrix-react-sdk/res/img/element-icons/location.svg"),C=o("./node_modules/matrix-react-sdk/src/components/views/beacon/StyledLiveBeaconIcon.tsx");const S=["onClick","label","shareType"],w=()=>{var e,t;const o=(0,s.useContext)(d.Ay).getSafeUserId(),n=null!==(e=L.V.instance.displayName)&&void 0!==e?e:void 0,a="36px",r=null!==(t=L.V.instance.getHttpAvatarUrl(parseInt(a,10)))&&void 0!==t?t:void 0;return s.createElement("div",{className:`mx_ShareType_option-icon ${_.L$.Own}`},s.createElement(b.A,{idName:o,name:n,url:r,size:a,className:"mx_UserMenu_userAvatar_BaseAvatar"}))},A=e=>{let{onClick:t,label:o,shareType:n}=e,a=(0,k.A)(e,S);return s.createElement(h.A,(0,m.A)({element:"button",className:"mx_ShareType_option",onClick:null!=t?t:null},a),n===_.L$.Own&&s.createElement(w,null),n===_.L$.Pin&&s.createElement(E.I,{className:`mx_ShareType_option-icon ${_.L$.Pin}`}),n===_.L$.Live&&s.createElement(C.A,{className:`mx_ShareType_option-icon ${_.L$.Live}`}),o)},f=({setShareType:e,enabledShareTypes:t})=>{const o={[_.L$.Own]:(0,r._t)("location_sharing|share_type_own"),[_.L$.Live]:(0,r._t)("location_sharing|share_type_live"),[_.L$.Pin]:(0,r._t)("location_sharing|share_type_pin")};return s.createElement("div",{className:"mx_ShareType"},s.createElement(E.I,{className:"mx_ShareType_badge"}),s.createElement(y.A,{className:"mx_ShareType_heading",size:"3"},(0,r._t)("location_sharing|share_type_prompt")),s.createElement("div",{className:"mx_ShareType_wrapper_options"},t.map((t=>s.createElement(A,{key:t,onClick:()=>e(t),label:o[t],shareType:t})))))};var M=o("./node_modules/matrix-react-sdk/src/components/views/elements/LabelledToggleSwitch.tsx");const N=({onSubmit:e})=>{const[t,o]=(0,s.useState)(!1);return s.createElement("div",{className:"mx_EnableLiveShare"},s.createElement(C.A,{className:"mx_EnableLiveShare_icon"}),s.createElement(y.A,{className:"mx_EnableLiveShare_heading",size:"3"},(0,r._t)("location_sharing|live_enable_heading")),s.createElement("p",{className:"mx_EnableLiveShare_description"},(0,r._t)("location_sharing|live_enable_description")),s.createElement(M.A,{value:t,onChange:o,label:(0,r._t)("location_sharing|live_toggle_label")}),s.createElement(h.A,{className:"mx_EnableLiveShare_button",element:"button",kind:"primary",onClick:e,disabled:!t},(0,r._t)("action|ok")))};var T=o("./node_modules/matrix-react-sdk/src/hooks/useSettings.ts"),P=o("./node_modules/matrix-react-sdk/src/settings/SettingLevel.ts");const $=({menuPosition:e,onFinished:t,sender:o,roomId:n,openMenu:a,relation:r})=>{const i=(0,s.useContext)(d.Ay),c=(e=>{const t=[_.L$.Own];return e||t.push(_.L$.Live),t.push(_.L$.Pin),t})(r),h=(0,T.n)("feature_location_share_live"),v=c.length>1,[x,k]=(0,s.useState)(v?void 0:_.L$.Own),b=L.V.instance.displayName,y=i.getSafeUserId(),E=x===_.L$.Live?(0,_.tS)(i,n,b||y,a):(0,_.$e)(i,n,null!=x?x:_.L$.Own,r,a),C=x===_.L$.Live&&!h;return s.createElement(l.Ay,(0,m.A)({},e,{onFinished:t,managed:!1}),s.createElement("div",{className:"mx_LocationShareMenu"},C&&s.createElement(N,{onSubmit:()=>{p.A.setValue("feature_location_share_live",null,P.p.DEVICE,!0)}}),!C&&!!x&&s.createElement(u.default,{sender:o,shareType:x,onChoose:E,onFinished:t}),!x&&s.createElement(f,{setShareType:k,enabledShareTypes:c}),s.createElement(g,{displayBack:!!x&&v,onBack:()=>k(void 0),onCancel:t})))},B=({roomId:e,sender:t,menuPosition:o,relation:n})=>{const m=(0,s.useContext)(c.ZF),[d,u,_,p]=(0,l.EF)(),h=e=>{p(e),null==m||m()};let v=null;if(d){var x;const a=null!==(x=null!=o?o:u.current&&(0,l.qv)(u.current.getBoundingClientRect()))&&void 0!==x?x:{};v=s.createElement($,{menuPosition:a,onFinished:h,sender:t,roomId:e,openMenu:_,relation:n})}const g=a()("mx_MessageComposer_button",{mx_MessageComposer_button_highlight:d});return s.createElement(s.Fragment,null,s.createElement(i.J,{className:g,iconClassName:"mx_MessageComposer_location",onClick:_,title:(0,r._t)("common|location"),inputRef:u}),v)},I=B},"./node_modules/matrix-react-sdk/src/components/views/location/LocationPicker.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var s=o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/maplibre-gl/dist/maplibre-gl.js"),r=o.n(a),i=o("./node_modules/matrix-js-sdk/src/logger.ts"),l=o("./node_modules/matrix-js-sdk/src/matrix.ts"),c=o("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),m=o("./node_modules/matrix-react-sdk/src/contexts/MatrixClientContext.tsx"),d=o("./node_modules/matrix-react-sdk/src/Modal.tsx"),u=o("./node_modules/matrix-react-sdk/src/utils/WellKnownUtils.ts"),_=o("./node_modules/matrix-react-sdk/src/utils/beacon/index.ts"),p=o("./node_modules/matrix-react-sdk/src/utils/location/index.ts"),h=o("./node_modules/matrix-react-sdk/src/components/views/dialogs/ErrorDialog.tsx"),v=o("./node_modules/matrix-react-sdk/src/components/views/elements/AccessibleButton.tsx"),x=o("./node_modules/matrix-react-sdk/src/components/views/location/MapError.tsx"),g=o("./node_modules/matrix-react-sdk/src/DateUtils.ts"),k=o("./node_modules/matrix-react-sdk/src/components/views/elements/Dropdown.tsx");const L={fifteenMins:9e5,oneHour:36e5,eightHours:288e5},b=L.fifteenMins,y=e=>(0,c._t)("location_sharing|live_share_button",{duration:(0,g.a3)(e)}),E=({timeout:e,onChange:t})=>{const o=Object.values(L).map((e=>({key:e.toString(),duration:e,label:y(e)})));Object.values(L).includes(e)||o.push({key:e.toString(),duration:e,label:y(e)});return n.createElement(k.A,{id:"live-duration",label:y(e),value:e.toString(),onOptionChange:e=>{t(+e)},className:"mx_LiveDurationDropdown"},o.map((({key:e,label:t})=>n.createElement("div",{key:e},t))))};var C=o("./node_modules/matrix-react-sdk/src/components/views/location/shareLocation.ts"),S=o("./node_modules/matrix-react-sdk/src/components/views/location/Marker.tsx");const w=e=>e===C.L$.Own||e===C.L$.Live;class A extends n.Component{constructor(e){super(e),(0,s.A)(this,"context",void 0),(0,s.A)(this,"map",void 0),(0,s.A)(this,"geolocate",void 0),(0,s.A)(this,"marker",void 0),(0,s.A)(this,"getMarkerId",(()=>"mx_MLocationPicker_marker")),(0,s.A)(this,"addMarkerToMap",(()=>{var e;this.marker=new(r().Marker)({element:null!==(e=document.getElementById(this.getMarkerId()))&&void 0!==e?e:void 0,anchor:"bottom",offset:[0,-1]}).setLngLat(new(r().LngLat)(0,0)).addTo(this.map)})),(0,s.A)(this,"updateStyleUrl",(e=>{var t;const o=null===(t=(0,u.XP)(e))||void 0===t?void 0:t.map_style_url;var s;o&&(null===(s=this.map)||void 0===s||s.setStyle(o))})),(0,s.A)(this,"onGeolocate",(e=>{var t;this.marker||this.addMarkerToMap(),this.setState({position:(0,_.v9)(e)}),null===(t=this.marker)||void 0===t||t.setLngLat(new(r().LngLat)(e.coords.longitude,e.coords.latitude))})),(0,s.A)(this,"onClick",(e=>{var t;this.marker||this.addMarkerToMap(),null===(t=this.marker)||void 0===t||t.setLngLat(e.lngLat),this.setState({position:{timestamp:Date.now(),latitude:e.lngLat.lat,longitude:e.lngLat.lng}})})),(0,s.A)(this,"onGeolocateError",(e=>{var t;(i.v.error("Could not fetch location",e),w(this.props.shareType)&&(this.props.onFinished(),d.Ay.createDialog(h.A,{title:(0,c._t)("location_sharing|error_fetch_location"),description:(0,p.Ff)(e.code)})),this.geolocate)&&(null===(t=this.map)||void 0===t||t.removeControl(this.geolocate))})),(0,s.A)(this,"onTimeoutChange",(e=>{this.setState({timeout:e})})),(0,s.A)(this,"onOk",(()=>{const{timeout:e,position:t}=this.state;this.props.onChoose(t?{uri:(0,_.mt)(t),timestamp:t.timestamp,timeout:e}:{timeout:e}),this.props.onFinished()})),this.state={position:void 0,timeout:b,error:void 0}}componentDidMount(){this.context.on(l.ClientEvent.ClientWellKnown,this.updateStyleUrl);try{if(this.map=new(r().Map)({container:"mx_LocationPicker_map",style:(0,p.M0)(this.context),center:[0,0],zoom:1}),this.geolocate=new(r().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1}),this.map.addControl(this.geolocate),this.map.on("error",(e=>{i.v.error("Failed to load map: check map_style_url in config.json has a valid URL and API key",e.error),this.setState({error:p.$X.MapStyleUrlNotReachable})})),this.map.on("load",(()=>{var e;null===(e=this.geolocate)||void 0===e||e.trigger()})),this.geolocate.on("error",this.onGeolocateError),w(this.props.shareType)&&this.geolocate.on("geolocate",this.onGeolocate),this.props.shareType===C.L$.Pin){const e=new(r().NavigationControl)({showCompass:!1,showZoom:!0});this.map.addControl(e,"bottom-right"),this.map.on("click",this.onClick)}}catch(e){i.v.error("Failed to render map",e);const t=null==e?void 0:e.message;let o;o=t===p.$X.MapStyleUrlNotConfigured?p.$X.MapStyleUrlNotConfigured:t.includes("Failed to initialize WebGL")?p.$X.WebGLNotEnabled:p.$X.Default,this.setState({error:o})}}componentWillUnmount(){var e,t,o;null===(e=this.geolocate)||void 0===e||e.off("error",this.onGeolocateError),null===(t=this.geolocate)||void 0===t||t.off("geolocate",this.onGeolocate),null===(o=this.map)||void 0===o||o.off("click",this.onClick),this.context.off(l.ClientEvent.ClientWellKnown,this.updateStyleUrl)}render(){return this.state.error?n.createElement("div",{className:"mx_LocationPicker mx_LocationPicker_hasError"},n.createElement(x.p,{error:this.state.error,onFinished:this.props.onFinished})):n.createElement("div",{className:"mx_LocationPicker"},n.createElement("div",{id:"mx_LocationPicker_map"}),this.props.shareType===C.L$.Pin&&n.createElement("div",{className:"mx_LocationPicker_pinText"},n.createElement("span",null,this.state.position?(0,c._t)("location_sharing|click_move_pin"):(0,c._t)("location_sharing|click_drop_pin"))),n.createElement("div",{className:"mx_LocationPicker_footer"},n.createElement("form",{onSubmit:this.onOk},this.props.shareType===C.L$.Live&&n.createElement(E,{onChange:this.onTimeoutChange,timeout:this.state.timeout}),n.createElement(v.A,{type:"submit",element:"button",kind:"primary",className:"mx_LocationPicker_submitButton",disabled:!this.state.position,onClick:this.onOk},(0,c._t)("location_sharing|share_button")))),n.createElement("div",{id:this.getMarkerId()},!!this.marker&&n.createElement(S.A,{roomMember:w(this.props.shareType)?this.props.sender:void 0,useMemberColor:this.props.shareType===C.L$.Live})))}}(0,s.A)(A,"contextType",m.Ay);const f=A},"./node_modules/matrix-react-sdk/src/components/views/location/Marker.tsx":(e,t,o)=>{o.d(t,{A:()=>m});var s=o("./node_modules/react/index.js"),n=o("./node_modules/classnames/index.js"),a=o.n(n),r=o("./node_modules/matrix-react-sdk/res/img/element-icons/location.svg"),i=o("./node_modules/matrix-react-sdk/src/utils/FormattingUtils.ts"),l=o("./node_modules/matrix-react-sdk/src/components/views/avatars/MemberAvatar.tsx");const c=({tooltip:e,children:t})=>{const[o,n]=(0,s.useState)(!1);if(!e)return s.createElement(s.Fragment,null,t);return s.createElement("div",{onMouseEnter:()=>n(!0),onClick:e=>{e.stopPropagation(),n(!o)},onMouseLeave:()=>n(!1)},t,o&&e)},m=s.forwardRef((({id:e,roomMember:t,useMemberColor:o,tooltip:n},m)=>{const d=o&&t?(0,i.yJ)(t.userId):"";return s.createElement("div",{ref:m,id:e,className:a()("mx_Marker",d,{mx_Marker_defaultColor:!d})},s.createElement(c,{tooltip:n},s.createElement("div",{className:"mx_Marker_border"},t?s.createElement(l.A,{member:t,size:"36px",viewUserOnClick:!1,hideTitle:!!n}):s.createElement(r.I,{className:"mx_Marker_icon"}))))}))},"./node_modules/matrix-react-sdk/src/components/views/location/shareLocation.ts":(e,t,o)=>{o.d(t,{$e:()=>p,L$:()=>d,tS:()=>_});var s=o("./node_modules/matrix-js-sdk/src/matrix.ts"),n=o("./node_modules/matrix-js-sdk/src/logger.ts"),a=o("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),r=o("./node_modules/matrix-react-sdk/src/Modal.tsx"),i=o("./node_modules/matrix-react-sdk/src/components/views/dialogs/QuestionDialog.tsx"),l=o("./node_modules/matrix-react-sdk/src/SdkConfig.ts"),c=o("./node_modules/matrix-react-sdk/src/stores/OwnBeaconStore.ts"),m=o("./node_modules/matrix-react-sdk/src/utils/local-room.ts");let d=function(e){return e.Own="Own",e.Pin="Pin",e.Live="Live",e}({});const u=(e,t,o)=>{const{modalParams:s,errorMessage:c}="M_FORBIDDEN"===e.errcode?(e=>{const t=e===d.Live?"Insufficient permissions to start sharing your live location":"Insufficient permissions to send your location";return{modalParams:{title:(0,a._t)("location_sharing|error_no_perms_title"),description:(0,a._t)("location_sharing|error_no_perms_description"),button:(0,a._t)("action|ok"),hasCancelButton:!1,onFinished:()=>{}},errorMessage:t}})(o):((e,t)=>{const o=e===d.Live?"We couldn't start sharing your live location":"We couldn't send your location";return{modalParams:{title:(0,a._t)("location_sharing|error_send_title"),description:(0,a._t)("location_sharing|error_send_description",{brand:l.Ay.get().brand}),button:(0,a._t)("action|try_again"),cancelButton:(0,a._t)("action|cancel"),onFinished:e=>{e&&t()}},errorMessage:o}})(o,t);n.v.error(c,e),r.Ay.createDialog(i.A,s)},_=(e,t,o,n)=>async({timeout:e})=>{const r=(0,a._t)("location_sharing|live_description",{displayName:o});try{await c.g.instance.createLiveBeacon(t,s.ContentHelpers.makeBeaconInfoContent(null!=e?e:3e5,!0,r,s.LocationAssetType.Self))}catch(e){u(e,n,d.Live)}},p=(e,t,o,n,a)=>async({uri:r,timestamp:i})=>{if(r)try{const a=(null==n?void 0:n.rel_type)===s.THREAD_RELATION_TYPE.name&&(null==n?void 0:n.event_id)||null,l=o===d.Pin?s.LocationAssetType.Pin:s.LocationAssetType.Self,c=s.ContentHelpers.makeLocationContent(void 0,r,i,void 0,l);await(0,m.Y)(t,(t=>e.sendMessage(t,a,c)),e)}catch(e){u(e,a,o)}}}}]);
//# sourceMappingURL=8169.js.map