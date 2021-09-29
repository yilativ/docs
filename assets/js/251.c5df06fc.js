(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{858:function(t,v,e){"use strict";e.r(v);var _=e(9),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",[e("img",{attrs:{width:"25",src:"data:image/svg+xml;base64,PHN2ZyBpZD0iUHJvZHVjdF9JY29ucyIgZGF0YS1uYW1lPSJQcm9kdWN0IEljb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNhZWNiZmE7fS5jbHMtMntmaWxsOiM2NjlkZjY7fS5jbHMtM3tmaWxsOiM0Mjg1ZjQ7fS5jbHMtNHtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5JY29uXzI0cHhfQ29sb3JfQ2xvdWRTdG9yYWdlPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI3Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIyMCIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIyMiA0IDIwIDQgMjAgMTEgMjIgNCIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMiIgeT0iNCIgd2lkdGg9IjIiIGhlaWdodD0iNyIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iNiIgeT0iNyIgd2lkdGg9IjYiIGhlaWdodD0iMSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iMTUiIHk9IjYiIHdpZHRoPSIzIiBoZWlnaHQ9IjMiIHJ4PSIxLjUiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjIiIHk9IjEzIiB3aWR0aD0iMjAiIGhlaWdodD0iNyIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMjAiIHk9IjEzIiB3aWR0aD0iMiIgaGVpZ2h0PSI3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjIyIDEzIDIwIDEzIDIwIDIwIDIyIDEzIi8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIyIiB5PSIxMyIgd2lkdGg9IjIiIGhlaWdodD0iNyIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgeD0iNiIgeT0iMTYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEiLz48cmVjdCBjbGFzcz0iY2xzLTQiIHg9IjE1IiB5PSIxNSIgd2lkdGg9IjMiIGhlaWdodD0iMyIgcng9IjEuNSIvPjwvc3ZnPg==",alt:"Downloads"}}),t._v(" Downloads\n")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.gcs.Downloads"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Download multiple files from a GCS bucket.")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("blockquote",[e("p",[t._v("Download a list of files and move it to an archive folders")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"downloads"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.gcp.gcs.Downloads"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/files/\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MOVE\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("moveDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/archive/\n")])])]),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("h3",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" "),e("code",[t._v("action")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Possible Values:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MOVE")])]),t._v(" "),e("li",[e("code",[t._v("DELETE")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("The action to do on find files")])]),t._v(" "),e("h3",{attrs:{id:"allversions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allversions"}},[t._v("#")]),t._v(" "),e("code",[t._v("allVersions")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("If set to "),e("code",[t._v("true")]),t._v(", lists all versions of a blob. The default is "),e("code",[t._v("false")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),e("code",[t._v("from")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The directory to list")])]),t._v(" "),e("h3",{attrs:{id:"listingtype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listingtype"}},[t._v("#")]),t._v(" "),e("code",[t._v("listingType")])]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("DIRECTORY")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Possible Values:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("RECURSIVE")])]),t._v(" "),e("li",[e("code",[t._v("DIRECTORY")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("The listing type you want (like directory or recursive)")])]),t._v(" "),e("p",[t._v("if DIRECTORY, will only list objects in the specified directory"),e("br"),t._v("\nif RECURSIVE, will list objects in the specified directory recursively"),e("br"),t._v("\nDefault value is DIRECTORY"),e("br"),t._v("\nWhen using RECURSIVE value, be carefull to move your files to a location not in the "),e("code",[t._v("from")]),t._v(" scope")]),t._v(" "),e("h3",{attrs:{id:"movedirectory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#movedirectory"}},[t._v("#")]),t._v(" "),e("code",[t._v("moveDirectory")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The destination directory in case off "),e("code",[t._v("MOVE")])])]),t._v(" "),e("h3",{attrs:{id:"projectid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),e("code",[t._v("projectId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP project id")])]),t._v(" "),e("h3",{attrs:{id:"regexp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp"}},[t._v("#")]),t._v(" "),e("code",[t._v("regExp")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("A regexp to filter on full path")])]),t._v(" "),e("p",[t._v("ex:"),e("br"),t._v(" "),e("code",[t._v("regExp: .*")]),t._v(" to match all files"),e("br"),t._v(" "),e("code",[t._v("regExp: .*2020-01-0.\\\\.csv")]),t._v(" to match files between 01 and 09 of january ending with "),e("code",[t._v(".csv")])]),t._v(" "),e("h3",{attrs:{id:"scopes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),e("code",[t._v("scopes")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP scopes to used")])]),t._v(" "),e("h3",{attrs:{id:"serviceaccount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),e("code",[t._v("serviceAccount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP service account key")])]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("h3",{attrs:{id:"blobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blobs"}},[t._v("#")]),t._v(" "),e("code",[t._v("blobs")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[e("a",{attrs:{href:"#blob"}},[t._v("Blob")])])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" ====")])]),t._v(" "),e("blockquote",[e("p",[t._v("The bucket of the downloaded file")])]),t._v(" "),e("h2",{attrs:{id:"definitions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),e("h3",{attrs:{id:"blob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blob"}},[t._v("#")]),t._v(" "),e("code",[t._v("Blob")])]),t._v(" "),e("h4",{attrs:{id:"bucket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bucket"}},[t._v("#")]),t._v(" "),e("code",[t._v("bucket")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"cachecontrol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cachecontrol"}},[t._v("#")]),t._v(" "),e("code",[t._v("cacheControl")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"componentcount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentcount"}},[t._v("#")]),t._v(" "),e("code",[t._v("componentCount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"contentdisposition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contentdisposition"}},[t._v("#")]),t._v(" "),e("code",[t._v("contentDisposition")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"contentencoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contentencoding"}},[t._v("#")]),t._v(" "),e("code",[t._v("contentEncoding")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"contentlanguage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contentlanguage"}},[t._v("#")]),t._v(" "),e("code",[t._v("contentLanguage")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"contenttype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contenttype"}},[t._v("#")]),t._v(" "),e("code",[t._v("contentType")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"crc32c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crc32c"}},[t._v("#")]),t._v(" "),e("code",[t._v("crc32c")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"createtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createtime"}},[t._v("#")]),t._v(" "),e("code",[t._v("createTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"customtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customtime"}},[t._v("#")]),t._v(" "),e("code",[t._v("customTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"deletetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deletetime"}},[t._v("#")]),t._v(" "),e("code",[t._v("deleteTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[t._v("#")]),t._v(" "),e("code",[t._v("etag")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"eventbasedhold"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventbasedhold"}},[t._v("#")]),t._v(" "),e("code",[t._v("eventBasedHold")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"generatedid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generatedid"}},[t._v("#")]),t._v(" "),e("code",[t._v("generatedId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"isdirectory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isdirectory"}},[t._v("#")]),t._v(" "),e("code",[t._v("isDirectory")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"kmskeyname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kmskeyname"}},[t._v("#")]),t._v(" "),e("code",[t._v("kmsKeyName")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"md5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#md5"}},[t._v("#")]),t._v(" "),e("code",[t._v("md5")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"medialink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#medialink"}},[t._v("#")]),t._v(" "),e("code",[t._v("mediaLink")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"metageneration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metageneration"}},[t._v("#")]),t._v(" "),e("code",[t._v("metaGeneration")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" "),e("code",[t._v("metadata")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("object")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),e("code",[t._v("name")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"retentionexpirationtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retentionexpirationtime"}},[t._v("#")]),t._v(" "),e("code",[t._v("retentionExpirationTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"selflink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selflink"}},[t._v("#")]),t._v(" "),e("code",[t._v("selfLink")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),e("code",[t._v("size")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("integer")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"temporaryhold"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#temporaryhold"}},[t._v("#")]),t._v(" "),e("code",[t._v("temporaryHold")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"timestorageclassupdated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timestorageclassupdated"}},[t._v("#")]),t._v(" "),e("code",[t._v("timeStorageClassUpdated")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"updatetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updatetime"}},[t._v("#")]),t._v(" "),e("code",[t._v("updateTime")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("h4",{attrs:{id:"uri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),e("code",[t._v("uri")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])])])}),[],!1,null,null,null);v.default=a.exports}}]);