"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[8823],{"./src/components/views/location/LocationPicker.tsx":(e,t,o)=>{o.r(t),o.d(t,{default:()=>A});var s=o("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=o("./node_modules/react/index.js"),n=o("./node_modules/maplibre-gl/dist/maplibre-gl.js"),r=o.n(n),a=o("./node_modules/matrix-js-sdk/src/logger.ts"),l=o("./node_modules/matrix-js-sdk/src/matrix.ts"),c=o("./src/languageHandler.tsx"),m=o("./src/contexts/MatrixClientContext.tsx"),d=o("./src/Modal.tsx"),h=o("./src/utils/WellKnownUtils.ts"),p=o("./src/utils/beacon/index.ts"),u=o("./src/utils/location/index.ts"),v=o("./src/components/views/dialogs/ErrorDialog.tsx"),_=o("./src/components/views/elements/AccessibleButton.tsx"),g=o("./src/components/views/location/MapError.tsx"),k=o("./src/DateUtils.ts"),L=o("./src/components/views/elements/Dropdown.tsx");const x={fifteenMins:9e5,oneHour:36e5,eightHours:288e5},y=x.fifteenMins,f=e=>(0,c._t)("location_sharing|live_share_button",{duration:(0,k.a3)(e)}),b=({timeout:e,onChange:t})=>{const o=Object.values(x).map((e=>({key:e.toString(),duration:e,label:f(e)})));Object.values(x).includes(e)||o.push({key:e.toString(),duration:e,label:f(e)});return i.createElement(L.A,{id:"live-duration",label:f(e),value:e.toString(),onOptionChange:e=>{t(+e)},className:"mx_LiveDurationDropdown"},o.map((({key:e,label:t})=>i.createElement("div",{key:e},t))))};var M=o("./src/components/views/location/shareLocation.ts"),C=o("./src/components/views/location/Marker.tsx");const w=e=>e===M.L$.Own||e===M.L$.Live;class E extends i.Component{constructor(e,t){super(e,t),(0,s.A)(this,"map",void 0),(0,s.A)(this,"geolocate",void 0),(0,s.A)(this,"marker",void 0),(0,s.A)(this,"getMarkerId",(()=>"mx_MLocationPicker_marker")),(0,s.A)(this,"addMarkerToMap",(()=>{var e;this.marker=new(r().Marker)({element:null!==(e=document.getElementById(this.getMarkerId()))&&void 0!==e?e:void 0,anchor:"bottom",offset:[0,-1]}).setLngLat(new(r().LngLat)(0,0)).addTo(this.map)})),(0,s.A)(this,"updateStyleUrl",(e=>{var t;const o=null===(t=(0,h.XP)(e))||void 0===t?void 0:t.map_style_url;var s;o&&(null===(s=this.map)||void 0===s||s.setStyle(o))})),(0,s.A)(this,"onGeolocate",(e=>{var t;this.marker||this.addMarkerToMap(),this.setState({position:(0,p.v9)(e)}),null===(t=this.marker)||void 0===t||t.setLngLat(new(r().LngLat)(e.coords.longitude,e.coords.latitude))})),(0,s.A)(this,"onClick",(e=>{var t;this.marker||this.addMarkerToMap(),null===(t=this.marker)||void 0===t||t.setLngLat(e.lngLat),this.setState({position:{timestamp:Date.now(),latitude:e.lngLat.lat,longitude:e.lngLat.lng}})})),(0,s.A)(this,"onGeolocateError",(e=>{var t;(a.v.error("Could not fetch location",e),w(this.props.shareType)&&(this.props.onFinished(),d.Ay.createDialog(v.A,{title:(0,c._t)("location_sharing|error_fetch_location"),description:(0,u.Ff)(e.code)})),this.geolocate)&&(null===(t=this.map)||void 0===t||t.removeControl(this.geolocate))})),(0,s.A)(this,"onTimeoutChange",(e=>{this.setState({timeout:e})})),(0,s.A)(this,"onOk",(()=>{const{timeout:e,position:t}=this.state;this.props.onChoose(t?{uri:(0,p.mt)(t),timestamp:t.timestamp,timeout:e}:{timeout:e}),this.props.onFinished()})),this.state={position:void 0,timeout:y,error:void 0}}componentDidMount(){this.context.on(l.ClientEvent.ClientWellKnown,this.updateStyleUrl);try{if(this.map=new(r().Map)({container:"mx_LocationPicker_map",style:(0,u.M0)(this.context),center:[0,0],zoom:1}),this.geolocate=new(r().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1}),this.map.addControl(this.geolocate),this.map.on("error",(e=>{a.v.error("Failed to load map: check map_style_url in config.json has a valid URL and API key",e.error),this.setState({error:u.$X.MapStyleUrlNotReachable})})),this.map.on("load",(()=>{var e;null===(e=this.geolocate)||void 0===e||e.trigger()})),this.geolocate.on("error",this.onGeolocateError),w(this.props.shareType)&&this.geolocate.on("geolocate",this.onGeolocate),this.props.shareType===M.L$.Pin){const e=new(r().NavigationControl)({showCompass:!1,showZoom:!0});this.map.addControl(e,"bottom-right"),this.map.on("click",this.onClick)}}catch(e){a.v.error("Failed to render map",e);const t=null==e?void 0:e.message;let o;o=t===u.$X.MapStyleUrlNotConfigured?u.$X.MapStyleUrlNotConfigured:t.includes("Failed to initialize WebGL")?u.$X.WebGLNotEnabled:u.$X.Default,this.setState({error:o})}}componentWillUnmount(){var e,t,o;null===(e=this.geolocate)||void 0===e||e.off("error",this.onGeolocateError),null===(t=this.geolocate)||void 0===t||t.off("geolocate",this.onGeolocate),null===(o=this.map)||void 0===o||o.off("click",this.onClick),this.context.off(l.ClientEvent.ClientWellKnown,this.updateStyleUrl)}render(){return this.state.error?i.createElement("div",{className:"mx_LocationPicker mx_LocationPicker_hasError"},i.createElement(g.p,{error:this.state.error,onFinished:this.props.onFinished})):i.createElement("div",{className:"mx_LocationPicker"},i.createElement("div",{id:"mx_LocationPicker_map"}),this.props.shareType===M.L$.Pin&&i.createElement("div",{className:"mx_LocationPicker_pinText"},i.createElement("span",null,this.state.position?(0,c._t)("location_sharing|click_move_pin"):(0,c._t)("location_sharing|click_drop_pin"))),i.createElement("div",{className:"mx_LocationPicker_footer"},i.createElement("form",{onSubmit:this.onOk},this.props.shareType===M.L$.Live&&i.createElement(b,{onChange:this.onTimeoutChange,timeout:this.state.timeout}),i.createElement(_.A,{type:"submit",element:"button",kind:"primary",className:"mx_LocationPicker_submitButton",disabled:!this.state.position,onClick:this.onOk},(0,c._t)("location_sharing|share_button")))),i.createElement("div",{id:this.getMarkerId()},!!this.marker&&i.createElement(C.A,{roomMember:w(this.props.shareType)?this.props.sender:void 0,useMemberColor:this.props.shareType===M.L$.Live})))}}(0,s.A)(E,"contextType",m.Ay);const A=E},"./src/components/views/location/Marker.tsx":(e,t,o)=>{o.d(t,{A:()=>m});var s=o("./node_modules/react/index.js"),i=o("./node_modules/classnames/index.js"),n=o.n(i),r=o("./res/img/element-icons/location.svg"),a=o("./src/utils/FormattingUtils.ts"),l=o("./src/components/views/avatars/MemberAvatar.tsx");const c=({tooltip:e,children:t})=>{const[o,i]=(0,s.useState)(!1);if(!e)return s.createElement(s.Fragment,null,t);return s.createElement("div",{onMouseEnter:()=>i(!0),onClick:e=>{e.stopPropagation(),i(!o)},onMouseLeave:()=>i(!1)},t,o&&e)},m=s.forwardRef((({id:e,roomMember:t,useMemberColor:o,tooltip:i},m)=>{const d=o&&t?(0,a.yJ)(t.userId):"";return s.createElement("div",{ref:m,id:e,className:n()("mx_Marker",d,{mx_Marker_defaultColor:!d})},s.createElement(c,{tooltip:i},s.createElement("div",{className:"mx_Marker_border"},t?s.createElement(l.A,{member:t,size:"36px",viewUserOnClick:!1,hideTitle:!!i}):s.createElement(r.I,{className:"mx_Marker_icon"}))))}))},"./src/components/views/location/shareLocation.ts":(e,t,o)=>{o.d(t,{$e:()=>u,L$:()=>d,tS:()=>p});var s=o("./node_modules/matrix-js-sdk/src/matrix.ts"),i=o("./node_modules/matrix-js-sdk/src/logger.ts"),n=o("./src/languageHandler.tsx"),r=o("./src/Modal.tsx"),a=o("./src/components/views/dialogs/QuestionDialog.tsx"),l=o("./src/SdkConfig.ts"),c=o("./src/stores/OwnBeaconStore.ts"),m=o("./src/utils/local-room.ts");let d=function(e){return e.Own="Own",e.Pin="Pin",e.Live="Live",e}({});const h=(e,t,o)=>{const{modalParams:s,errorMessage:c}="M_FORBIDDEN"===e.errcode?(e=>{const t=e===d.Live?"Insufficient permissions to start sharing your live location":"Insufficient permissions to send your location";return{modalParams:{title:(0,n._t)("location_sharing|error_no_perms_title"),description:(0,n._t)("location_sharing|error_no_perms_description"),button:(0,n._t)("action|ok"),hasCancelButton:!1,onFinished:()=>{}},errorMessage:t}})(o):((e,t)=>{const o=e===d.Live?"We couldn't start sharing your live location":"We couldn't send your location";return{modalParams:{title:(0,n._t)("location_sharing|error_send_title"),description:(0,n._t)("location_sharing|error_send_description",{brand:l.Ay.get().brand}),button:(0,n._t)("action|try_again"),cancelButton:(0,n._t)("action|cancel"),onFinished:e=>{e&&t()}},errorMessage:o}})(o,t);i.v.error(c,e),r.Ay.createDialog(a.A,s)},p=(e,t,o,i)=>async({timeout:e})=>{const r=(0,n._t)("location_sharing|live_description",{displayName:o});try{await c.g.instance.createLiveBeacon(t,s.ContentHelpers.makeBeaconInfoContent(null!=e?e:3e5,!0,r,s.LocationAssetType.Self))}catch(e){h(e,i,d.Live)}},u=(e,t,o,i,n)=>async({uri:r,timestamp:a})=>{if(r)try{const n=(null==i?void 0:i.rel_type)===s.THREAD_RELATION_TYPE.name&&(null==i?void 0:i.event_id)||null,l=o===d.Pin?s.LocationAssetType.Pin:s.LocationAssetType.Self,c=s.ContentHelpers.makeLocationContent(void 0,r,a,void 0,l);await(0,m.Y)(t,(t=>e.sendMessage(t,n,c)),e)}catch(e){h(e,n,o)}}}}]);
//# sourceMappingURL=8823.js.map