﻿$axure.loadCurrentPage({
  "url":"注册.html",
  "generationDate":new Date(1488439480485.08),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"f4809ca12a3b430a8cc57b3c4d30ec50",
    "type":"Axure:Page",
    "name":"注册",
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
          "id":"883269f218004accade315b8565a3567",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":375,
              "height":667}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"30235876504245719fb3ead78d7fb8aa",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":375,
                  "height":667}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/注册/u0.jpg"}},
{
          "id":"e2a7871182df4b9682b71ee57491bf82",
          "label":"phonenum",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":100,
              "y":10},
            "size":{
              "width":200,
              "height":40}},
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
                      "description":"Set text on phonenum equal to &quot;&quot;",
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
                                "value":["e2a7871182df4b9682b71ee57491bf82"]},
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
                      "description":"Set text on phonenum equal to &quot;请输入手机号&quot;",
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
                                "value":["e2a7871182df4b9682b71ee57491bf82"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入手机号",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"b7d365f4ee0f485aaed8482b672cf2d7",
          "label":"yanzhengma",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":101,
              "y":75},
            "size":{
              "width":169,
              "height":40}},
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
                      "description":"Set text on yanzhengma equal to &quot;&quot;",
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
                                "value":["b7d365f4ee0f485aaed8482b672cf2d7"]},
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
                      "description":"Set text on yanzhengma equal to &quot;请输入验证码&quot;",
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
                                "value":["b7d365f4ee0f485aaed8482b672cf2d7"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入验证码",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"4e33666123c446f4b7418194c5aff85a",
          "label":"passwd",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":102,
              "y":149},
            "size":{
              "width":169,
              "height":40}},
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
                      "description":"Set text on passwd equal to &quot;&quot;",
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
                                "value":["4e33666123c446f4b7418194c5aff85a"]},
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
                      "description":"Set text on passwd equal to &quot;请输入密码&quot;",
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
                                "value":["4e33666123c446f4b7418194c5aff85a"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入密码",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"728f6d40885c434992b965c949a45f15",
          "label":"cfmm",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":103,
              "y":213},
            "size":{
              "width":169,
              "height":40}},
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
                      "description":"Set text on cfmm equal to &quot;&quot;",
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
                                "value":["728f6d40885c434992b965c949a45f15"]},
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
                      "description":"Set text on cfmm equal to &quot;请再次输入密码&quot;",
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
                                "value":["728f6d40885c434992b965c949a45f15"]},
{
                                "exprType":"stringLiteral",
                                "value":"请再次输入密码",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"516c1f4697344c758513f292c595e436",
          "label":"yanzhengyouxiang",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":104,
              "y":288},
            "size":{
              "width":169,
              "height":40}},
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
                      "description":"Set text on yanzhengyouxiang equal to &quot;&quot;",
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
                                "value":["516c1f4697344c758513f292c595e436"]},
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
                      "description":"Set text on yanzhengyouxiang equal to &quot;请输入验证邮箱&quot;",
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
                                "value":["516c1f4697344c758513f292c595e436"]},
{
                                "exprType":"stringLiteral",
                                "value":"请输入验证邮箱",
                                "stos":[]}]}]}}]}]}},
          "tabbable":true},
{
          "id":"31ffbbe450894a5ea930fb0248613d7a",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":377},
            "size":{
              "width":350,
              "height":60}},
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
                      "description":"Open 登录 in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"登录.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"386558daa8da44ffbc46c25d790910e5",
          "label":"",
          "type":"checkbox",
          "styleType":"checkbox",
          "visible":true,
          "style":{
            "fontSize":"28px",
            "location":{
              "x":11,
              "y":464},
            "size":{
              "width":19,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"21707ca60ec04f1b9ae43dada25bf113",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"28px",
                "location":{
                  "x":11,
                  "y":464},
                "size":{
                  "width":19,
                  "height":16}},
              "adaptiveStyles":{
}}]}]}},
  "masters":{
},
  "objectPaths":{
    "883269f218004accade315b8565a3567":{
      "scriptId":"u0"},
    "30235876504245719fb3ead78d7fb8aa":{
      "scriptId":"u1"},
    "e2a7871182df4b9682b71ee57491bf82":{
      "scriptId":"u2"},
    "b7d365f4ee0f485aaed8482b672cf2d7":{
      "scriptId":"u3"},
    "4e33666123c446f4b7418194c5aff85a":{
      "scriptId":"u4"},
    "728f6d40885c434992b965c949a45f15":{
      "scriptId":"u5"},
    "516c1f4697344c758513f292c595e436":{
      "scriptId":"u6"},
    "31ffbbe450894a5ea930fb0248613d7a":{
      "scriptId":"u7"},
    "386558daa8da44ffbc46c25d790910e5":{
      "scriptId":"u8"},
    "21707ca60ec04f1b9ae43dada25bf113":{
      "scriptId":"u9"}}});