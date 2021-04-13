const { css } = require('styled-components');

module.exports = css`@charset "UTF-8";*,::after,::before{box-sizing:border-box;scroll-behavior:smooth}@media (prefers-reduced-motion:reduce){*,::after,::before{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;background-attachment:initial;scroll-behavior:auto;transition-delay:0s;transition-duration:0s}}html{font:400 1rem/1.5 system-ui,-apple-system,"Segoe UI",Roboto,Ubuntu,Cantarell,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";background:inherit;vertical-align:baseline;word-break:normal;color:inherit;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}[tabindex="-1"]:focus:not(:focus-visible){outline:0}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25;overflow:visible}hr:not([size]){height:1px}h1,h2,h3,h4,h5,h6{margin:0 initial .5rem;font:inherit inherit 500 unset/1.2 inherit}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){h2{font-size:2rem}}h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){h3{font-size:1.75rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){h4{font-size:1.5rem}}h5{font-size:1.25rem}h6{font-size:1rem}p{margin:0 0 1rem}abbr[data-bs-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font:normal inherit inherit/inherit inherit;margin:0 0 1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin:0 0 1rem}ol ol,ol ul,ul ol,ul ul{margin:0}nav li{list-style:none;padding:0}nav li::before{content:"​"}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:700}small{font-size:.875em}mark{padding:.2em;background-color:currentColor}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{cursor:pointer;color:#3333e1;background-color:transparent;text-decoration:none}a:hover{color:#3434e0;text-decoration:underline}a:focus{outline:thin dotted}a:not([href]):not([class]):hover,a:not([href]):not(class){cursor:default;color:inherit;text-decoration:none}[tabindex],a,area,button,input,label,select,summary,textarea{touch-action:manipulation}code,kbd,pre,samp{font:1.05em "Fira Code","Cascadia Code",Consolas,Inconsolata,Monaco,Menlo,"Noto Mono","Roboto Mono","Droid Sans Mono","Ubuntu Mono","Ubuntu Monospace","Source Code Pro","Oxygen Mono","Liberation Mono","DejaVu Sans Mono","Bitstream Vera Sans Mono",monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:.875em;overflow:auto;-ms-overflow-style:scrollbar}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:inherit;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:inherit;background-color:inherit;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}iframe,img,input,select,textarea{height:auto;max-width:100%}audio,canvas,iframe,img,svg,video{vertical-align:middle}svg:not([fill]){fill:currentColor}svg:not(:root){overflow:hidden}img{border:0;-ms-interpolation-mode:bicubic}table{caption-side:bottom;border-collapse:collapse;text-indent:0;border-color:currentColor}caption{padding-top:.5rem;padding-bottom:.5rem;color:inherit;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0;text-transform:none}button:focus{outline:dotted 1px;outline:-webkit-focus-ring-color auto 5px}button,input{overflow:visible}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input,select,textarea{background-color:transparent;border:1px solid WindowFrame;color:inherit;font:inherit;letter-spacing:inherit;padding:.25em .375em}button,select{text-transform:none}[role=button]{cursor:pointer}select{-moz-appearance:none;-webkit-appearance:none;text-transform:none;word-wrap:normal}select:not([multiple]):not([size]){background-image:"data:image/svg+xmlcharset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E"}::-ms-expand{display:none}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(disabled),[type=reset]:not(disabled),[type=submit]:not(disabled),button:not(disabled){cursor:pointer}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}textarea{overflow:auto;-ms-overflow-style:scrollbar;resize:vertical;vertical-align:top}fieldset{min-width:0;padding:.35em .75em .625em;margin:0;border:1px solid inherit}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit;max-width:100%;white-space:normal}@media (max-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}dialog{background-color:inherit;border:solid;color:inherit;display:block;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:.54}input::-webkit-input-placeholder{opacity:1}input::-moz-placeholder{opacity:1}input:-ms-input-placeholder{opacity:1}input::placeholder{opacity:1}[type=search]{outline-offset:-2px;-webkit-appearance:none;-moz-appearance:none;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}[type=email],[type=number],[type=tel],[type=url]{direction:ltr}::-webkit-color-swatch-wrapper{padding:0}::-moz-focus-inner{padding:0;border-style:none}::-moz-ui-invalid{box-shadow:none}::-moz-focusring{outline:1px dotted ButtonText}output{display:inline-block}iframe{border:none}audio,canvas,video{display:inline;display:inline-block;zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}summary{display:list-item;cursor:pointer}progress{display:inline-block;vertical-align:baseline}template{display:none}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled=true],[disabled]{cursor:not-allowed}[aria-hidden=false][hidden=false]{display:initial}[aria-hidden=false][hidden=false]:not(:focus){clip:rect(0,0,0,0);position:absolute}`