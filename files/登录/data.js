﻿$axure.loadCurrentPage({
  "url":"登录.html",
  "generationDate":new Date(1488439924675.98),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"51d4b4eb7f3d431292e5fb2dad8519f5",
    "type":"Axure:Page",
    "name":"登录",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"b7b3a1ae0710413b93a5ca0e52c76625",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":375,
              "height":664}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"14671314e063437f86177bf07ec93724",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":375,
                  "height":664}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/登录/u0.jpg"}},
{
          "id":"2246ff8026804fdbb8ab6c9870c6489f",
          "label":"name",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":88,
              "y":220},
            "size":{
              "width":182,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set text on name equal to &quot;&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetFormText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["2246ff8026804fdbb8ab6c9870c6489f"]},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]}]}}]}]},
            "onLostFocus":{
              "description":"OnLostFocus",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set text on name equal to &quot;请输入用户名/邮箱&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetFormText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["2246ff8026804fdbb8ab6c9870c6489f"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入用户名/邮箱",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"0a3406b6b9c040dc9b6df24dadc56f7e",
          "label":"password",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":85,
              "y":274},
            "size":{
              "width":182,
              "height":25}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onFocus":{
              "description":"OnFocus",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set text on password equal to &quot;&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetFormText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["0a3406b6b9c040dc9b6df24dadc56f7e"]},
{
                                "exprType":"stringLiteral",
                                "value":"",
                                "stos":[]}]}]}}]}]},
            "onLostFocus":{
              "description":"OnLostFocus",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set text on password equal to &quot;请输入密码&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetFormText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["0a3406b6b9c040dc9b6df24dadc56f7e"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入密码",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"0a938ac680ca4cda8ce90ba6fdb01b35",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":30,
              "y":340},
            "size":{
              "width":310,
              "height":40}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open index in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"index.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"18a601d2f4b5418e8ff520738d5a0f12",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":220,
              "y":410},
            "size":{
              "width":60,
              "height":20}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open 注册 in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"注册.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"53332c3e8c9248edbfe7964381b48b21",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":10},
            "size":{
              "width":40,
              "height":40}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open index in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"index.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true}]}},
  "masters":{
},
  "objectPaths":{
    "b7b3a1ae0710413b93a5ca0e52c76625":{
      "scriptId":"u0"},
    "14671314e063437f86177bf07ec93724":{
      "scriptId":"u1"},
    "2246ff8026804fdbb8ab6c9870c6489f":{
      "scriptId":"u2"},
    "0a3406b6b9c040dc9b6df24dadc56f7e":{
      "scriptId":"u3"},
    "0a938ac680ca4cda8ce90ba6fdb01b35":{
      "scriptId":"u4"},
    "18a601d2f4b5418e8ff520738d5a0f12":{
      "scriptId":"u5"},
    "53332c3e8c9248edbfe7964381b48b21":{
      "scriptId":"u6"}}});