import EmailEditor from "@editex/react-email-editor";
import { useEffect, useRef, useState } from "react";

function MyEmailEditor() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEmailData([
        {
          "name": "列",
          "key": "column",
          "type": "full",
          "styles": {
            "key": "column",
            "desktop": {
              "backgroundColor": "transparent",
              "paddingTop": 0,
              "paddingLeft": 0,
              "paddingRight": 0,
              "paddingBottom": 0,
              "contentBackground": "#fff"
            },
            "mobile": {}
          },
          "children": [
            {
              "name": "容器",
              "key": "content",
              "width": "100%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "标题",
                  "key": "heading",
                  "text": "<span style=\"text-align: center;\">Your Company Logo</span>",
                  "type": "h1",
                  "styles": {
                    "desktop": {
                      "fontSize": 37,
                      "lineHeight": "140%",
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center",
                      "fontWeight": "bold"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "heading-0",
                    "desktop": "font-size:37px;line-height:140%;font-family:sans-serif;color:#000;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "文本",
                  "key": "text",
                  "text": "NEW COLLECTION",
                  "styles": {
                    "desktop": {
                      "fontSize": 10,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-1",
                    "desktop": "font-size:10px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "图片",
                  "key": "image",
                  "src": "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  "alt": "Coffee Beans",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 0,
                      "paddingBottom": 0,
                      "paddingLeft": 0,
                      "paddingRight": 0,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "image-2",
                    "desktop": "width:auto;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "image-content-2",
                    "desktop": "padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "文本",
                  "key": "text",
                  "text": "<b>You might also like</b>",
                  "styles": {
                    "desktop": {
                      "fontSize": 24,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-3",
                    "desktop": "font-size:24px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "按钮",
                  "key": "button",
                  "text": "Buy now",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "textAlign": "center",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto",
                      "fontSize": 12,
                      "lineHeight": "140%",
                      "borderRadius": 4,
                      "fontFamily": "sans-serif",
                      "paddingTop": 10,
                      "paddingBottom": 10,
                      "paddingLeft": 20,
                      "paddingRight": 20,
                      "backgroundColor": "#865548",
                      "color": "#fff",
                      "display": "inline-block"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "button-4",
                    "desktop": "width:auto;font-size:12px;line-height:140%;border-radius:4px;font-family:sans-serif;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#865548;color:#fff;display:inline-block;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "button-content-4",
                    "desktop": "text-align:center;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;",
                    "mobile": ""
                  }
                },
                {
                  "name": "分割线",
                  "key": "divider",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "100%",
                      "borderTopStyle": "solid",
                      "borderTopColor": "#ccc",
                      "borderTopWidth": 1,
                      "display": "inline-block",
                      "verticalAlign": "middle"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "divider-5",
                    "desktop": "width:100%;border-top-style:solid;border-top-color:#ccc;border-top-width:1px;display:inline-block;vertical-align:middle;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "divider-content-5",
                    "desktop": "padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "content-0",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-0",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            }
          ],
          "styleConfig": {
            "className": "column-0",
            "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
            "mobile": ""
          },
          "contentStyleConfig": {
            "className": "column-content-0",
            "desktop": "background-color:#fff;",
            "mobile": ""
          }
        },
        {
          "name": "行",
          "key": "column",
          "type": "1-1",
          "styles": {
            "key": "column",
            "desktop": {
              "backgroundColor": "transparent",
              "paddingTop": 0,
              "paddingLeft": 0,
              "paddingRight": 0,
              "paddingBottom": 0,
              "contentBackground": "#fff"
            },
            "mobile": {}
          },
          "children": [
            {
              "name": "容器",
              "key": "content",
              "width": "50%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "文本",
                  "key": "text",
                  "text": "Coffee",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-0",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "图片",
                  "key": "image",
                  "src": "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  "alt": "White Ceramic Coffee Cup on White Saucer",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "image-1",
                    "desktop": "width:auto;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "image-content-1",
                    "desktop": "padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "1-content-0",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-0",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            },
            {
              "name": "容器",
              "key": "content",
              "width": "50%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "文本",
                  "key": "text",
                  "text": "Coffee",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "1-text-0",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "图片",
                  "key": "image",
                  "src": "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  "alt": "Person Showing White Mug in Focus Photography",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "1-image-1",
                    "desktop": "width:auto;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "image-content-1",
                    "desktop": "padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "1-content-1",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-1",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            }
          ],
          "styleConfig": {
            "className": "column-1",
            "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
            "mobile": ""
          },
          "contentStyleConfig": {
            "className": "column-content-1",
            "desktop": "background-color:#fff;",
            "mobile": ""
          },
          "columns": 2
        },
        {
          "name": "行",
          "key": "column",
          "type": "1-1",
          "styles": {
            "key": "column",
            "desktop": {
              "backgroundColor": "transparent",
              "paddingTop": 0,
              "paddingLeft": 0,
              "paddingRight": 0,
              "paddingBottom": 0,
              "contentBackground": "#fff"
            },
            "mobile": {}
          },
          "children": [
            {
              "name": "容器",
              "key": "content",
              "width": "50%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "文本",
                  "key": "text",
                  "text": "Coffee",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-0",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "图片",
                  "key": "image",
                  "src": "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  "alt": "White Ceramic Coffee Cup on White Saucer",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "image-1",
                    "desktop": "width:auto;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "image-content-1",
                    "desktop": "padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "2-content-0",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-0",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            },
            {
              "name": "容器",
              "key": "content",
              "width": "50%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "文本",
                  "key": "text",
                  "text": "Coffee",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#000",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "1-text-0",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#000;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "图片",
                  "key": "image",
                  "src": "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                  "alt": "Person Showing White Mug in Focus Photography",
                  "type": "link",
                  "linkURL": "",
                  "contentStyles": {
                    "desktop": {
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styles": {
                    "desktop": {
                      "width": "auto"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "1-image-1",
                    "desktop": "width:auto;",
                    "mobile": ""
                  },
                  "contentStyleConfig": {
                    "className": "image-content-1",
                    "desktop": "padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "2-content-1",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-1",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            }
          ],
          "styleConfig": {
            "className": "column-2",
            "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
            "mobile": ""
          },
          "contentStyleConfig": {
            "className": "column-content-2",
            "desktop": "background-color:#fff;",
            "mobile": ""
          },
          "columns": 2
        },
        {
          "name": "行",
          "key": "column",
          "type": "full",
          "styles": {
            "key": "column",
            "desktop": {
              "backgroundColor": "transparent",
              "paddingTop": 0,
              "paddingLeft": 0,
              "paddingRight": 0,
              "paddingBottom": 0,
              "contentBackground": "#865548"
            },
            "mobile": {}
          },
          "children": [
            {
              "name": "容器",
              "key": "content",
              "width": "100%",
              "styles": {
                "key": "column",
                "desktop": {
                  "backgroundColor": "transparent",
                  "paddingTop": 0,
                  "paddingLeft": 0,
                  "paddingRight": 0,
                  "paddingBottom": 0,
                  "contentBackground": "transparent"
                },
                "mobile": {}
              },
              "children": [
                {
                  "name": "文本",
                  "key": "text",
                  "text": "No langer wants to receive this email?",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#ffffff",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-0",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#ffffff;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "文本",
                  "key": "text",
                  "text": "unsubscribe",
                  "styles": {
                    "desktop": {
                      "fontSize": 12,
                      "fontFamily": "sans-serif",
                      "color": "#ffffff",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-1",
                    "desktop": "font-size:12px;font-family:sans-serif;color:#ffffff;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                },
                {
                  "name": "文本",
                  "key": "text",
                  "text": "@powerd by email editor",
                  "styles": {
                    "desktop": {
                      "fontSize": 14,
                      "fontFamily": "sans-serif",
                      "color": "#ffffff",
                      "lineHeight": "140%",
                      "paddingTop": 12,
                      "paddingBottom": 12,
                      "paddingLeft": 12,
                      "paddingRight": 12,
                      "textAlign": "center"
                    },
                    "mobile": {}
                  },
                  "styleConfig": {
                    "className": "text-2",
                    "desktop": "font-size:14px;font-family:sans-serif;color:#ffffff;line-height:140%;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px;text-align:center;",
                    "mobile": ""
                  }
                }
              ],
              "styleConfig": {
                "className": "3-content-0",
                "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
                "mobile": ""
              },
              "contentStyleConfig": {
                "className": "content-content-0",
                "desktop": "background-color:transparent;",
                "mobile": ""
              }
            }
          ],
          "styleConfig": {
            "className": "column-3",
            "desktop": "background-color:transparent;padding-top:0px;padding-left:0px;padding-right:0px;padding-bottom:0px;",
            "mobile": ""
          },
          "contentStyleConfig": {
            "className": "column-content-3",
            "desktop": "background-color:#865548;",
            "mobile": ""
          }
        }
      ]
      );
    }, 1000);
  }, []);

  const exportHtml = () => {
    emailEditorRef.current.exportHtml();
  };

  const showEmailData = () => {
    console.log(emailEditorRef.current.blockList);
  };

  return (
    <div className="page">
      <div className="page-header">
        <button onClick={exportHtml}>Export HTML</button>
        <button onClick={showEmailData}>Show email data</button>
      </div>
      <div className="page-content">{emailData ? <EmailEditor ref={emailEditorRef} defaultBlockList={emailData} /> : <>Loading....</>}</div>
    </div>
  );
}

export default MyEmailEditor;
