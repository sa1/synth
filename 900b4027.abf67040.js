(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,t,n){"use strict";var a=n(0),r=n(101);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return f})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return j}));var a=n(3),r=n(7),l=n(0),o=n.n(l),c=n(92),i=n(100),s=n(94),u=n(82),p=n.n(u),b=37,d=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,c=e.groupId,u=e.className,m=Object(i.a)(),h=m.tabGroupChoices,y=m.setTabGroupChoices,f=Object(l.useState)(a),O=f[0],g=f[1],j=l.Children.toArray(e.children);if(null!=c){var v=h[c];null!=v&&v!==O&&r.some((function(e){return e.value===v}))&&g(v)}var N=function(e){g(e),null!=c&&y(c,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},r.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(l.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},y={id:"hello-world",title:"Hello World"},f={unversionedId:"hello-world",id:"hello-world",isDocsHomePage:!1,title:"Hello World",description:"Installation",source:"@site/docs/hello-world.md",slug:"/hello-world",permalink:"/synth/hello-world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hello-world.md",version:"current",sidebar:"docsSidebar",previous:{title:"Synth",permalink:"/synth/"},next:{title:"Core Concepts",permalink:"/synth/core-concepts"}},O=[{value:"Installation",id:"installation",children:[{value:"Runtime Dependencies",id:"runtime-dependencies",children:[]}]},{value:"Hello World",id:"hello-world",children:[]},{value:"Running Synth in Daemon mode",id:"running-synth-in-daemon-mode",children:[]},{value:"Examples",id:"examples",children:[]}],g={toc:O};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)(m,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Compile from source",value:"source"},{label:"Run in the Cloud Shell",value:"gcp_shell"}],mdxType:"Tabs"},Object(c.b)(h,{value:"linux",mdxType:"TabItem"},"Run the following command to install the `synth` binary:",Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n"))),Object(c.b)(h,{value:"mac",mdxType:"TabItem"},"Run the following command to install the `synth` binary:",Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://sh.getsynth.com | sh\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"You'll need ",Object(c.b)("inlineCode",{parentName:"p"},"python3")," - if you don't have it already you can ",Object(c.b)("inlineCode",{parentName:"p"},"brew install python3"),".")))),Object(c.b)(h,{value:"source",mdxType:"TabItem"},"To get started you need the Rust package manager `cargo`. If you don't have it, you can install Rust and Cargo using (this will also make nightly the default toolchain):",Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && rustup default nightly\n")),Object(c.b)("p",null,"Next, install Synth using ",Object(c.b)("inlineCode",{parentName:"p"},"cargo"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cargo install --locked --git https://github.com/openquery-io/synth.git synth\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If compilation fails, there are some dependencies required at compile time which you may not have installed: ",Object(c.b)("inlineCode",{parentName:"p"},"sudo apt-get install libssl-dev libsqlite3-dev libpython3-dev"))))),Object(c.b)(h,{value:"gcp_shell",mdxType:"TabItem"},Object(c.b)("div",{align:"center"},Object(c.b)("a",{href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https://github.com/openquery-io/synth.git&cloudshell_print=tools/README-cloud-shell"},Object(c.b)("img",{alt:"Run in Cloud Shell",src:"https://storage.googleapis.com/gweb-cloudblog-publish/images/run_on_google_cloud.max-300x300.png"}))),Object(c.b)("p",null,"The run the following to install ",Object(c.b)("inlineCode",{parentName:"p"},"synth")," on the Cloud Shell:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"./tools/init-cloud-shell && export PATH=$HOME/.local/bin:$PATH\n")))),Object(c.b)("p",null,"You can run ",Object(c.b)("inlineCode",{parentName:"p"},"synth --version")," to make sure the CLI installed correctly."),Object(c.b)("h3",{id:"runtime-dependencies"},"Runtime Dependencies"),Object(c.b)("p",null,"Synth uses the Python ",Object(c.b)("a",{parentName:"p",href:"https://pypi.org/project/Faker/"},"Faker")," library to generate different flavours of dummy data. To install Faker, run:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"pip3 install Faker\n")),Object(c.b)("h2",{id:"hello-world"},"Hello World"),Object(c.b)("p",null,"After install the Synth cli, the next step is to create a ",Object(c.b)("inlineCode",{parentName:"p"},"workspace"),". To do this create a directory and run ",Object(c.b)("inlineCode",{parentName:"p"},"synth init"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"mkdir my_synth_workspace && cd my_synth_workspace && synth init\n")),Object(c.b)("p",null,"This will create a ",Object(c.b)("inlineCode",{parentName:"p"},".synth")," subdirectory in ",Object(c.b)("inlineCode",{parentName:"p"},"my_synth_workspace"),". Currently, this directory acts as simply an anchor to tell Synth that this is a workspace."),Object(c.b)("p",null,"Next we create a namespace with a dummy collection:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"mkdir my_app \n")),Object(c.b)("p",null,"And then a file, ",Object(c.b)("inlineCode",{parentName:"p"},"my_app/dummy.json")," with the following content:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "constant": 1\n    },\n   "content": {\n        "type": "string",\n        "pattern": "Hello world!"\n    }\n}\n')),Object(c.b)("p",null,"Finally, run ",Object(c.b)("inlineCode",{parentName:"p"},"synth generate my_app/")," to get a bunch of hello worlds!"),Object(c.b)("h2",{id:"running-synth-in-daemon-mode"},"Running Synth in Daemon mode"),Object(c.b)("p",null,"Synth comes can be run in Daemon mode using the subcommand ",Object(c.b)("inlineCode",{parentName:"p"},"synth-serve"),". "),Object(c.b)("p",null,"Synth exposes an HTTP RESTful API on port ",Object(c.b)("inlineCode",{parentName:"p"},"8182")," and create an internal state which is managed by a vesion controlled index."),Object(c.b)("p",null,"It is preferable to use Daemon mode in the context of a collaborating team and comes with this handy ",Object(c.b)("a",{parentName:"p",href:"https://openquery-io.github.io/synthpy/"},"Python client")),Object(c.b)("p",null,"More information on Daemon mode can be found ",Object(c.b)("a",{parentName:"p",href:"/synth/command-line"},"here"),". "),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"For more complex examples, see the ",Object(c.b)("a",{parentName:"p",href:"/synth/examples/bank"},"examples section"),"."))}j.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}}}]);