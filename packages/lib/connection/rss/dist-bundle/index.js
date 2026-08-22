import { BaseConnection } from "org.eclipse.daanse.board.app.lib.connection.base";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var rssParser$1 = { exports: {} };
var lib = {};
var Utility = {};
var hasRequiredUtility;
function requireUtility() {
  if (hasRequiredUtility) return Utility;
  hasRequiredUtility = 1;
  (function() {
    var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
      var i, key, len, source, sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length; i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key)) continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
    isFunction = function(val) {
      return !!val && Object.prototype.toString.call(val) === "[object Function]";
    };
    isObject = function(val) {
      var ref;
      return !!val && ((ref = typeof val) === "function" || ref === "object");
    };
    isArray = function(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === "[object Array]";
      }
    };
    isEmpty = function(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key)) continue;
          return false;
        }
        return true;
      }
    };
    isPlainObject = function(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    getValue = function(obj) {
      if (isFunction(obj.valueOf)) {
        return obj.valueOf();
      } else {
        return obj;
      }
    };
    Utility.assign = assign;
    Utility.isFunction = isFunction;
    Utility.isObject = isObject;
    Utility.isArray = isArray;
    Utility.isEmpty = isEmpty;
    Utility.isPlainObject = isPlainObject;
    Utility.getValue = getValue;
  }).call(Utility);
  return Utility;
}
var XMLDOMImplementation$1 = { exports: {} };
var XMLDOMImplementation = XMLDOMImplementation$1.exports;
var hasRequiredXMLDOMImplementation;
function requireXMLDOMImplementation() {
  if (hasRequiredXMLDOMImplementation) return XMLDOMImplementation$1.exports;
  hasRequiredXMLDOMImplementation = 1;
  (function() {
    XMLDOMImplementation$1.exports = (function() {
      function XMLDOMImplementation2() {
      }
      XMLDOMImplementation2.prototype.hasFeature = function(feature, version) {
        return true;
      };
      XMLDOMImplementation2.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.createHTMLDocument = function(title) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLDOMImplementation2.prototype.getFeature = function(feature, version) {
        throw new Error("This DOM method is not implemented.");
      };
      return XMLDOMImplementation2;
    })();
  }).call(XMLDOMImplementation);
  return XMLDOMImplementation$1.exports;
}
var XMLDocument$1 = { exports: {} };
var XMLDOMConfiguration$1 = { exports: {} };
var XMLDOMErrorHandler$1 = { exports: {} };
var XMLDOMErrorHandler = XMLDOMErrorHandler$1.exports;
var hasRequiredXMLDOMErrorHandler;
function requireXMLDOMErrorHandler() {
  if (hasRequiredXMLDOMErrorHandler) return XMLDOMErrorHandler$1.exports;
  hasRequiredXMLDOMErrorHandler = 1;
  (function() {
    XMLDOMErrorHandler$1.exports = (function() {
      function XMLDOMErrorHandler2() {
      }
      XMLDOMErrorHandler2.prototype.handleError = function(error) {
        throw new Error(error);
      };
      return XMLDOMErrorHandler2;
    })();
  }).call(XMLDOMErrorHandler);
  return XMLDOMErrorHandler$1.exports;
}
var XMLDOMStringList$1 = { exports: {} };
var XMLDOMStringList = XMLDOMStringList$1.exports;
var hasRequiredXMLDOMStringList;
function requireXMLDOMStringList() {
  if (hasRequiredXMLDOMStringList) return XMLDOMStringList$1.exports;
  hasRequiredXMLDOMStringList = 1;
  (function() {
    XMLDOMStringList$1.exports = (function() {
      function XMLDOMStringList2(arr) {
        this.arr = arr || [];
      }
      Object.defineProperty(XMLDOMStringList2.prototype, "length", {
        get: function() {
          return this.arr.length;
        }
      });
      XMLDOMStringList2.prototype.item = function(index) {
        return this.arr[index] || null;
      };
      XMLDOMStringList2.prototype.contains = function(str) {
        return this.arr.indexOf(str) !== -1;
      };
      return XMLDOMStringList2;
    })();
  }).call(XMLDOMStringList);
  return XMLDOMStringList$1.exports;
}
var XMLDOMConfiguration = XMLDOMConfiguration$1.exports;
var hasRequiredXMLDOMConfiguration;
function requireXMLDOMConfiguration() {
  if (hasRequiredXMLDOMConfiguration) return XMLDOMConfiguration$1.exports;
  hasRequiredXMLDOMConfiguration = 1;
  (function() {
    var XMLDOMErrorHandler2, XMLDOMStringList2;
    XMLDOMErrorHandler2 = requireXMLDOMErrorHandler();
    XMLDOMStringList2 = requireXMLDOMStringList();
    XMLDOMConfiguration$1.exports = (function() {
      function XMLDOMConfiguration2() {
        this.defaultParams = {
          "canonical-form": false,
          "cdata-sections": false,
          "comments": false,
          "datatype-normalization": false,
          "element-content-whitespace": true,
          "entities": true,
          "error-handler": new XMLDOMErrorHandler2(),
          "infoset": true,
          "validate-if-schema": false,
          "namespaces": true,
          "namespace-declarations": true,
          "normalize-characters": false,
          "schema-location": "",
          "schema-type": "",
          "split-cdata-sections": true,
          "validate": false,
          "well-formed": true
        };
        this.params = Object.create(this.defaultParams);
      }
      Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
        get: function() {
          return new XMLDOMStringList2(Object.keys(this.defaultParams));
        }
      });
      XMLDOMConfiguration2.prototype.getParameter = function(name) {
        if (this.params.hasOwnProperty(name)) {
          return this.params[name];
        } else {
          return null;
        }
      };
      XMLDOMConfiguration2.prototype.canSetParameter = function(name, value) {
        return true;
      };
      XMLDOMConfiguration2.prototype.setParameter = function(name, value) {
        if (value != null) {
          return this.params[name] = value;
        } else {
          return delete this.params[name];
        }
      };
      return XMLDOMConfiguration2;
    })();
  }).call(XMLDOMConfiguration);
  return XMLDOMConfiguration$1.exports;
}
var XMLNode$1 = { exports: {} };
var XMLElement$1 = { exports: {} };
var NodeType$1 = { exports: {} };
var NodeType = NodeType$1.exports;
var hasRequiredNodeType;
function requireNodeType() {
  if (hasRequiredNodeType) return NodeType$1.exports;
  hasRequiredNodeType = 1;
  (function() {
    NodeType$1.exports = {
      Element: 1,
      Attribute: 2,
      Text: 3,
      CData: 4,
      EntityReference: 5,
      EntityDeclaration: 6,
      ProcessingInstruction: 7,
      Comment: 8,
      Document: 9,
      DocType: 10,
      DocumentFragment: 11,
      NotationDeclaration: 12,
      Declaration: 201,
      Raw: 202,
      AttributeDeclaration: 203,
      ElementDeclaration: 204,
      Dummy: 205
    };
  }).call(NodeType);
  return NodeType$1.exports;
}
var XMLAttribute$1 = { exports: {} };
var XMLAttribute = XMLAttribute$1.exports;
var hasRequiredXMLAttribute;
function requireXMLAttribute() {
  if (hasRequiredXMLAttribute) return XMLAttribute$1.exports;
  hasRequiredXMLAttribute = 1;
  (function() {
    var NodeType2;
    NodeType2 = requireNodeType();
    requireXMLNode();
    XMLAttribute$1.exports = (function() {
      function XMLAttribute2(parent, name, value) {
        this.parent = parent;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo(name));
        }
        this.name = this.stringify.name(name);
        this.value = this.stringify.attValue(value);
        this.type = NodeType2.Attribute;
        this.isId = false;
        this.schemaTypeInfo = null;
      }
      Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLAttribute2.prototype, "specified", {
        get: function() {
          return true;
        }
      });
      XMLAttribute2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLAttribute2.prototype.toString = function(options) {
        return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
      };
      XMLAttribute2.prototype.debugInfo = function(name) {
        name = name || this.name;
        if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else {
          return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
        }
      };
      XMLAttribute2.prototype.isEqualNode = function(node) {
        if (node.namespaceURI !== this.namespaceURI) {
          return false;
        }
        if (node.prefix !== this.prefix) {
          return false;
        }
        if (node.localName !== this.localName) {
          return false;
        }
        if (node.value !== this.value) {
          return false;
        }
        return true;
      };
      return XMLAttribute2;
    })();
  }).call(XMLAttribute);
  return XMLAttribute$1.exports;
}
var XMLNamedNodeMap$1 = { exports: {} };
var XMLNamedNodeMap = XMLNamedNodeMap$1.exports;
var hasRequiredXMLNamedNodeMap;
function requireXMLNamedNodeMap() {
  if (hasRequiredXMLNamedNodeMap) return XMLNamedNodeMap$1.exports;
  hasRequiredXMLNamedNodeMap = 1;
  (function() {
    XMLNamedNodeMap$1.exports = (function() {
      function XMLNamedNodeMap2(nodes) {
        this.nodes = nodes;
      }
      Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
        get: function() {
          return Object.keys(this.nodes).length || 0;
        }
      });
      XMLNamedNodeMap2.prototype.clone = function() {
        return this.nodes = null;
      };
      XMLNamedNodeMap2.prototype.getNamedItem = function(name) {
        return this.nodes[name];
      };
      XMLNamedNodeMap2.prototype.setNamedItem = function(node) {
        var oldNode;
        oldNode = this.nodes[node.nodeName];
        this.nodes[node.nodeName] = node;
        return oldNode || null;
      };
      XMLNamedNodeMap2.prototype.removeNamedItem = function(name) {
        var oldNode;
        oldNode = this.nodes[name];
        delete this.nodes[name];
        return oldNode || null;
      };
      XMLNamedNodeMap2.prototype.item = function(index) {
        return this.nodes[Object.keys(this.nodes)[index]] || null;
      };
      XMLNamedNodeMap2.prototype.getNamedItemNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLNamedNodeMap2.prototype.setNamedItemNS = function(node) {
        throw new Error("This DOM method is not implemented.");
      };
      XMLNamedNodeMap2.prototype.removeNamedItemNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented.");
      };
      return XMLNamedNodeMap2;
    })();
  }).call(XMLNamedNodeMap);
  return XMLNamedNodeMap$1.exports;
}
var XMLElement = XMLElement$1.exports;
var hasRequiredXMLElement;
function requireXMLElement() {
  if (hasRequiredXMLElement) return XMLElement$1.exports;
  hasRequiredXMLElement = 1;
  (function() {
    var NodeType2, XMLAttribute2, XMLNamedNodeMap2, XMLNode2, getValue, isFunction, isObject, ref, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLAttribute2 = requireXMLAttribute();
    XMLNamedNodeMap2 = requireXMLNamedNodeMap();
    XMLElement$1.exports = (function(superClass) {
      extend(XMLElement2, superClass);
      function XMLElement2(parent, name, attributes) {
        var child, j, len, ref1;
        XMLElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing element name. " + this.debugInfo());
        }
        this.name = this.stringify.name(name);
        this.type = NodeType2.Element;
        this.attribs = {};
        this.schemaTypeInfo = null;
        if (attributes != null) {
          this.attribute(attributes);
        }
        if (parent.type === NodeType2.Document) {
          this.isRoot = true;
          this.documentObject = parent;
          parent.rootObject = this;
          if (parent.children) {
            ref1 = parent.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              if (child.type === NodeType2.DocType) {
                child.name = this.name;
                break;
              }
            }
          }
        }
      }
      Object.defineProperty(XMLElement2.prototype, "tagName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "prefix", {
        get: function() {
          return "";
        }
      });
      Object.defineProperty(XMLElement2.prototype, "localName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLElement2.prototype, "id", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "className", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "classList", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLElement2.prototype, "attributes", {
        get: function() {
          if (!this.attributeMap || !this.attributeMap.nodes) {
            this.attributeMap = new XMLNamedNodeMap2(this.attribs);
          }
          return this.attributeMap;
        }
      });
      XMLElement2.prototype.clone = function() {
        var att, attName, clonedSelf, ref1;
        clonedSelf = Object.create(this);
        if (clonedSelf.isRoot) {
          clonedSelf.documentObject = null;
        }
        clonedSelf.attribs = {};
        ref1 = this.attribs;
        for (attName in ref1) {
          if (!hasProp.call(ref1, attName)) continue;
          att = ref1[attName];
          clonedSelf.attribs[attName] = att.clone();
        }
        clonedSelf.children = [];
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone();
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
        return clonedSelf;
      };
      XMLElement2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (this.options.keepNullAttributes && value == null) {
            this.attribs[name] = new XMLAttribute2(this, name, "");
          } else if (value != null) {
            this.attribs[name] = new XMLAttribute2(this, name, value);
          }
        }
        return this;
      };
      XMLElement2.prototype.removeAttribute = function(name) {
        var attName, j, len;
        if (name == null) {
          throw new Error("Missing attribute name. " + this.debugInfo());
        }
        name = getValue(name);
        if (Array.isArray(name)) {
          for (j = 0, len = name.length; j < len; j++) {
            attName = name[j];
            delete this.attribs[attName];
          }
        } else {
          delete this.attribs[name];
        }
        return this;
      };
      XMLElement2.prototype.toString = function(options) {
        return this.options.writer.element(this, this.options.writer.filterOptions(options));
      };
      XMLElement2.prototype.att = function(name, value) {
        return this.attribute(name, value);
      };
      XMLElement2.prototype.a = function(name, value) {
        return this.attribute(name, value);
      };
      XMLElement2.prototype.getAttribute = function(name) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name].value;
        } else {
          return null;
        }
      };
      XMLElement2.prototype.setAttribute = function(name, value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNode = function(name) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name];
        } else {
          return null;
        }
      };
      XMLElement2.prototype.setAttributeNode = function(newAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.removeAttributeNode = function(oldAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagName = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.removeAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setAttributeNodeNS = function(newAttr) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.hasAttribute = function(name) {
        return this.attribs.hasOwnProperty(name);
      };
      XMLElement2.prototype.hasAttributeNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setIdAttribute = function(name, isId) {
        if (this.attribs.hasOwnProperty(name)) {
          return this.attribs[name].isId;
        } else {
          return isId;
        }
      };
      XMLElement2.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.setIdAttributeNode = function(idAttr, isId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagName = function(tagname) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.getElementsByClassName = function(classNames) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLElement2.prototype.isEqualNode = function(node) {
        var i, j, ref1;
        if (!XMLElement2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.namespaceURI !== this.namespaceURI) {
          return false;
        }
        if (node.prefix !== this.prefix) {
          return false;
        }
        if (node.localName !== this.localName) {
          return false;
        }
        if (node.attribs.length !== this.attribs.length) {
          return false;
        }
        for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
          if (!this.attribs[i].isEqualNode(node.attribs[i])) {
            return false;
          }
        }
        return true;
      };
      return XMLElement2;
    })(XMLNode2);
  }).call(XMLElement);
  return XMLElement$1.exports;
}
var XMLCData$1 = { exports: {} };
var XMLCharacterData$1 = { exports: {} };
var XMLCharacterData = XMLCharacterData$1.exports;
var hasRequiredXMLCharacterData;
function requireXMLCharacterData() {
  if (hasRequiredXMLCharacterData) return XMLCharacterData$1.exports;
  hasRequiredXMLCharacterData = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLCharacterData$1.exports = (function(superClass) {
      extend(XMLCharacterData2, superClass);
      function XMLCharacterData2(parent) {
        XMLCharacterData2.__super__.constructor.call(this, parent);
        this.value = "";
      }
      Object.defineProperty(XMLCharacterData2.prototype, "data", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "length", {
        get: function() {
          return this.value.length;
        }
      });
      Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
        get: function() {
          return this.value;
        },
        set: function(value) {
          return this.value = value || "";
        }
      });
      XMLCharacterData2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLCharacterData2.prototype.substringData = function(offset, count) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.appendData = function(arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.insertData = function(offset, arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.deleteData = function(offset, count) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.replaceData = function(offset, count, arg) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLCharacterData2.prototype.isEqualNode = function(node) {
        if (!XMLCharacterData2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.data !== this.data) {
          return false;
        }
        return true;
      };
      return XMLCharacterData2;
    })(XMLNode2);
  }).call(XMLCharacterData);
  return XMLCharacterData$1.exports;
}
var XMLCData = XMLCData$1.exports;
var hasRequiredXMLCData;
function requireXMLCData() {
  if (hasRequiredXMLCData) return XMLCData$1.exports;
  hasRequiredXMLCData = 1;
  (function() {
    var NodeType2, XMLCharacterData2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLCharacterData2 = requireXMLCharacterData();
    XMLCData$1.exports = (function(superClass) {
      extend(XMLCData2, superClass);
      function XMLCData2(parent, text) {
        XMLCData2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing CDATA text. " + this.debugInfo());
        }
        this.name = "#cdata-section";
        this.type = NodeType2.CData;
        this.value = this.stringify.cdata(text);
      }
      XMLCData2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLCData2.prototype.toString = function(options) {
        return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
      };
      return XMLCData2;
    })(XMLCharacterData2);
  }).call(XMLCData);
  return XMLCData$1.exports;
}
var XMLComment$1 = { exports: {} };
var XMLComment = XMLComment$1.exports;
var hasRequiredXMLComment;
function requireXMLComment() {
  if (hasRequiredXMLComment) return XMLComment$1.exports;
  hasRequiredXMLComment = 1;
  (function() {
    var NodeType2, XMLCharacterData2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLCharacterData2 = requireXMLCharacterData();
    XMLComment$1.exports = (function(superClass) {
      extend(XMLComment2, superClass);
      function XMLComment2(parent, text) {
        XMLComment2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing comment text. " + this.debugInfo());
        }
        this.name = "#comment";
        this.type = NodeType2.Comment;
        this.value = this.stringify.comment(text);
      }
      XMLComment2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLComment2.prototype.toString = function(options) {
        return this.options.writer.comment(this, this.options.writer.filterOptions(options));
      };
      return XMLComment2;
    })(XMLCharacterData2);
  }).call(XMLComment);
  return XMLComment$1.exports;
}
var XMLDeclaration$1 = { exports: {} };
var XMLDeclaration = XMLDeclaration$1.exports;
var hasRequiredXMLDeclaration;
function requireXMLDeclaration() {
  if (hasRequiredXMLDeclaration) return XMLDeclaration$1.exports;
  hasRequiredXMLDeclaration = 1;
  (function() {
    var NodeType2, XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDeclaration$1.exports = (function(superClass) {
      extend(XMLDeclaration2, superClass);
      function XMLDeclaration2(parent, version, encoding, standalone) {
        var ref;
        XMLDeclaration2.__super__.constructor.call(this, parent);
        if (isObject(version)) {
          ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
        }
        if (!version) {
          version = "1.0";
        }
        this.type = NodeType2.Declaration;
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }
      XMLDeclaration2.prototype.toString = function(options) {
        return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
      };
      return XMLDeclaration2;
    })(XMLNode2);
  }).call(XMLDeclaration);
  return XMLDeclaration$1.exports;
}
var XMLDocType$1 = { exports: {} };
var XMLDTDAttList$1 = { exports: {} };
var XMLDTDAttList = XMLDTDAttList$1.exports;
var hasRequiredXMLDTDAttList;
function requireXMLDTDAttList() {
  if (hasRequiredXMLDTDAttList) return XMLDTDAttList$1.exports;
  hasRequiredXMLDTDAttList = 1;
  (function() {
    var NodeType2, XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDTDAttList$1.exports = (function(superClass) {
      extend(XMLDTDAttList2, superClass);
      function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        XMLDTDAttList2.__super__.constructor.call(this, parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
        }
        if (defaultValueType.indexOf("#") !== 0) {
          defaultValueType = "#" + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
        }
        this.elementName = this.stringify.name(elementName);
        this.type = NodeType2.AttributeDeclaration;
        this.attributeName = this.stringify.name(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        if (defaultValue) {
          this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        }
        this.defaultValueType = defaultValueType;
      }
      XMLDTDAttList2.prototype.toString = function(options) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDAttList2;
    })(XMLNode2);
  }).call(XMLDTDAttList);
  return XMLDTDAttList$1.exports;
}
var XMLDTDEntity$1 = { exports: {} };
var XMLDTDEntity = XMLDTDEntity$1.exports;
var hasRequiredXMLDTDEntity;
function requireXMLDTDEntity() {
  if (hasRequiredXMLDTDEntity) return XMLDTDEntity$1.exports;
  hasRequiredXMLDTDEntity = 1;
  (function() {
    var NodeType2, XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDTDEntity$1.exports = (function(superClass) {
      extend(XMLDTDEntity2, superClass);
      function XMLDTDEntity2(parent, pe, name, value) {
        XMLDTDEntity2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD entity name. " + this.debugInfo(name));
        }
        if (value == null) {
          throw new Error("Missing DTD entity value. " + this.debugInfo(name));
        }
        this.pe = !!pe;
        this.name = this.stringify.name(name);
        this.type = NodeType2.EntityDeclaration;
        if (!isObject(value)) {
          this.value = this.stringify.dtdEntityValue(value);
          this.internal = true;
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
          }
          this.internal = false;
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
          if (value.nData != null) {
            this.nData = this.stringify.dtdNData(value.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
          }
        }
      }
      Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
        get: function() {
          return this.nData || null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
        get: function() {
          return null;
        }
      });
      XMLDTDEntity2.prototype.toString = function(options) {
        return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDEntity2;
    })(XMLNode2);
  }).call(XMLDTDEntity);
  return XMLDTDEntity$1.exports;
}
var XMLDTDElement$1 = { exports: {} };
var XMLDTDElement = XMLDTDElement$1.exports;
var hasRequiredXMLDTDElement;
function requireXMLDTDElement() {
  if (hasRequiredXMLDTDElement) return XMLDTDElement$1.exports;
  hasRequiredXMLDTDElement = 1;
  (function() {
    var NodeType2, XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDTDElement$1.exports = (function(superClass) {
      extend(XMLDTDElement2, superClass);
      function XMLDTDElement2(parent, name, value) {
        XMLDTDElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD element name. " + this.debugInfo());
        }
        if (!value) {
          value = "(#PCDATA)";
        }
        if (Array.isArray(value)) {
          value = "(" + value.join(",") + ")";
        }
        this.name = this.stringify.name(name);
        this.type = NodeType2.ElementDeclaration;
        this.value = this.stringify.dtdElementValue(value);
      }
      XMLDTDElement2.prototype.toString = function(options) {
        return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDElement2;
    })(XMLNode2);
  }).call(XMLDTDElement);
  return XMLDTDElement$1.exports;
}
var XMLDTDNotation$1 = { exports: {} };
var XMLDTDNotation = XMLDTDNotation$1.exports;
var hasRequiredXMLDTDNotation;
function requireXMLDTDNotation() {
  if (hasRequiredXMLDTDNotation) return XMLDTDNotation$1.exports;
  hasRequiredXMLDTDNotation = 1;
  (function() {
    var NodeType2, XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDTDNotation$1.exports = (function(superClass) {
      extend(XMLDTDNotation2, superClass);
      function XMLDTDNotation2(parent, name, value) {
        XMLDTDNotation2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD notation name. " + this.debugInfo(name));
        }
        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
        }
        this.name = this.stringify.name(name);
        this.type = NodeType2.NotationDeclaration;
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
      }
      Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      XMLDTDNotation2.prototype.toString = function(options) {
        return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
      };
      return XMLDTDNotation2;
    })(XMLNode2);
  }).call(XMLDTDNotation);
  return XMLDTDNotation$1.exports;
}
var XMLDocType = XMLDocType$1.exports;
var hasRequiredXMLDocType;
function requireXMLDocType() {
  if (hasRequiredXMLDocType) return XMLDocType$1.exports;
  hasRequiredXMLDocType = 1;
  (function() {
    var NodeType2, XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLNamedNodeMap2, XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLNamedNodeMap2 = requireXMLNamedNodeMap();
    XMLDocType$1.exports = (function(superClass) {
      extend(XMLDocType2, superClass);
      function XMLDocType2(parent, pubID, sysID) {
        var child, i, len, ref, ref1, ref2;
        XMLDocType2.__super__.constructor.call(this, parent);
        this.type = NodeType2.DocType;
        if (parent.children) {
          ref = parent.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            if (child.type === NodeType2.Element) {
              this.name = child.name;
              break;
            }
          }
        }
        this.documentObject = parent;
        if (isObject(pubID)) {
          ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
        }
        if (sysID == null) {
          ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
        }
        if (pubID != null) {
          this.pubID = this.stringify.dtdPubID(pubID);
        }
        if (sysID != null) {
          this.sysID = this.stringify.dtdSysID(sysID);
        }
      }
      Object.defineProperty(XMLDocType2.prototype, "entities", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            if (child.type === NodeType2.EntityDeclaration && !child.pe) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap2(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "notations", {
        get: function() {
          var child, i, len, nodes, ref;
          nodes = {};
          ref = this.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            if (child.type === NodeType2.NotationDeclaration) {
              nodes[child.name] = child;
            }
          }
          return new XMLNamedNodeMap2(nodes);
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "publicId", {
        get: function() {
          return this.pubID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "systemId", {
        get: function() {
          return this.sysID;
        }
      });
      Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      XMLDocType2.prototype.element = function(name, value) {
        var child;
        child = new XMLDTDElement2(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var child;
        child = new XMLDTDAttList2(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.entity = function(name, value) {
        var child;
        child = new XMLDTDEntity2(this, false, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.pEntity = function(name, value) {
        var child;
        child = new XMLDTDEntity2(this, true, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.notation = function(name, value) {
        var child;
        child = new XMLDTDNotation2(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.toString = function(options) {
        return this.options.writer.docType(this, this.options.writer.filterOptions(options));
      };
      XMLDocType2.prototype.ele = function(name, value) {
        return this.element(name, value);
      };
      XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
      };
      XMLDocType2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocType2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocType2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      XMLDocType2.prototype.up = function() {
        return this.root() || this.documentObject;
      };
      XMLDocType2.prototype.isEqualNode = function(node) {
        if (!XMLDocType2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.name !== this.name) {
          return false;
        }
        if (node.publicId !== this.publicId) {
          return false;
        }
        if (node.systemId !== this.systemId) {
          return false;
        }
        return true;
      };
      return XMLDocType2;
    })(XMLNode2);
  }).call(XMLDocType);
  return XMLDocType$1.exports;
}
var XMLRaw$1 = { exports: {} };
var XMLRaw = XMLRaw$1.exports;
var hasRequiredXMLRaw;
function requireXMLRaw() {
  if (hasRequiredXMLRaw) return XMLRaw$1.exports;
  hasRequiredXMLRaw = 1;
  (function() {
    var NodeType2, XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLNode2 = requireXMLNode();
    XMLRaw$1.exports = (function(superClass) {
      extend(XMLRaw2, superClass);
      function XMLRaw2(parent, text) {
        XMLRaw2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing raw text. " + this.debugInfo());
        }
        this.type = NodeType2.Raw;
        this.value = this.stringify.raw(text);
      }
      XMLRaw2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLRaw2.prototype.toString = function(options) {
        return this.options.writer.raw(this, this.options.writer.filterOptions(options));
      };
      return XMLRaw2;
    })(XMLNode2);
  }).call(XMLRaw);
  return XMLRaw$1.exports;
}
var XMLText$1 = { exports: {} };
var XMLText = XMLText$1.exports;
var hasRequiredXMLText;
function requireXMLText() {
  if (hasRequiredXMLText) return XMLText$1.exports;
  hasRequiredXMLText = 1;
  (function() {
    var NodeType2, XMLCharacterData2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLCharacterData2 = requireXMLCharacterData();
    XMLText$1.exports = (function(superClass) {
      extend(XMLText2, superClass);
      function XMLText2(parent, text) {
        XMLText2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing element text. " + this.debugInfo());
        }
        this.name = "#text";
        this.type = NodeType2.Text;
        this.value = this.stringify.text(text);
      }
      Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
        get: function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      Object.defineProperty(XMLText2.prototype, "wholeText", {
        get: function() {
          var next, prev, str;
          str = "";
          prev = this.previousSibling;
          while (prev) {
            str = prev.data + str;
            prev = prev.previousSibling;
          }
          str += this.data;
          next = this.nextSibling;
          while (next) {
            str = str + next.data;
            next = next.nextSibling;
          }
          return str;
        }
      });
      XMLText2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLText2.prototype.toString = function(options) {
        return this.options.writer.text(this, this.options.writer.filterOptions(options));
      };
      XMLText2.prototype.splitText = function(offset) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLText2.prototype.replaceWholeText = function(content) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return XMLText2;
    })(XMLCharacterData2);
  }).call(XMLText);
  return XMLText$1.exports;
}
var XMLProcessingInstruction$1 = { exports: {} };
var XMLProcessingInstruction = XMLProcessingInstruction$1.exports;
var hasRequiredXMLProcessingInstruction;
function requireXMLProcessingInstruction() {
  if (hasRequiredXMLProcessingInstruction) return XMLProcessingInstruction$1.exports;
  hasRequiredXMLProcessingInstruction = 1;
  (function() {
    var NodeType2, XMLCharacterData2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLCharacterData2 = requireXMLCharacterData();
    XMLProcessingInstruction$1.exports = (function(superClass) {
      extend(XMLProcessingInstruction2, superClass);
      function XMLProcessingInstruction2(parent, target, value) {
        XMLProcessingInstruction2.__super__.constructor.call(this, parent);
        if (target == null) {
          throw new Error("Missing instruction target. " + this.debugInfo());
        }
        this.type = NodeType2.ProcessingInstruction;
        this.target = this.stringify.insTarget(target);
        this.name = this.target;
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }
      XMLProcessingInstruction2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLProcessingInstruction2.prototype.toString = function(options) {
        return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
      };
      XMLProcessingInstruction2.prototype.isEqualNode = function(node) {
        if (!XMLProcessingInstruction2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
          return false;
        }
        if (node.target !== this.target) {
          return false;
        }
        return true;
      };
      return XMLProcessingInstruction2;
    })(XMLCharacterData2);
  }).call(XMLProcessingInstruction);
  return XMLProcessingInstruction$1.exports;
}
var XMLDummy$1 = { exports: {} };
var XMLDummy = XMLDummy$1.exports;
var hasRequiredXMLDummy;
function requireXMLDummy() {
  if (hasRequiredXMLDummy) return XMLDummy$1.exports;
  hasRequiredXMLDummy = 1;
  (function() {
    var NodeType2, XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLDummy$1.exports = (function(superClass) {
      extend(XMLDummy2, superClass);
      function XMLDummy2(parent) {
        XMLDummy2.__super__.constructor.call(this, parent);
        this.type = NodeType2.Dummy;
      }
      XMLDummy2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLDummy2.prototype.toString = function(options) {
        return "";
      };
      return XMLDummy2;
    })(XMLNode2);
  }).call(XMLDummy);
  return XMLDummy$1.exports;
}
var XMLNodeList$1 = { exports: {} };
var XMLNodeList = XMLNodeList$1.exports;
var hasRequiredXMLNodeList;
function requireXMLNodeList() {
  if (hasRequiredXMLNodeList) return XMLNodeList$1.exports;
  hasRequiredXMLNodeList = 1;
  (function() {
    XMLNodeList$1.exports = (function() {
      function XMLNodeList2(nodes) {
        this.nodes = nodes;
      }
      Object.defineProperty(XMLNodeList2.prototype, "length", {
        get: function() {
          return this.nodes.length || 0;
        }
      });
      XMLNodeList2.prototype.clone = function() {
        return this.nodes = null;
      };
      XMLNodeList2.prototype.item = function(index) {
        return this.nodes[index] || null;
      };
      return XMLNodeList2;
    })();
  }).call(XMLNodeList);
  return XMLNodeList$1.exports;
}
var DocumentPosition$1 = { exports: {} };
var DocumentPosition = DocumentPosition$1.exports;
var hasRequiredDocumentPosition;
function requireDocumentPosition() {
  if (hasRequiredDocumentPosition) return DocumentPosition$1.exports;
  hasRequiredDocumentPosition = 1;
  (function() {
    DocumentPosition$1.exports = {
      Disconnected: 1,
      Preceding: 2,
      Following: 4,
      Contains: 8,
      ContainedBy: 16,
      ImplementationSpecific: 32
    };
  }).call(DocumentPosition);
  return DocumentPosition$1.exports;
}
var XMLNode = XMLNode$1.exports;
var hasRequiredXMLNode;
function requireXMLNode() {
  if (hasRequiredXMLNode) return XMLNode$1.exports;
  hasRequiredXMLNode = 1;
  (function() {
    var DocumentPosition2, NodeType2, XMLCData2, XMLComment2, XMLDeclaration2, XMLDocType2, XMLDummy2, XMLElement2, XMLNodeList2, XMLProcessingInstruction2, XMLRaw2, XMLText2, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
    ref1 = requireUtility(), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
    XMLElement2 = null;
    XMLCData2 = null;
    XMLComment2 = null;
    XMLDeclaration2 = null;
    XMLDocType2 = null;
    XMLRaw2 = null;
    XMLText2 = null;
    XMLProcessingInstruction2 = null;
    XMLDummy2 = null;
    NodeType2 = null;
    XMLNodeList2 = null;
    DocumentPosition2 = null;
    XMLNode$1.exports = (function() {
      function XMLNode2(parent1) {
        this.parent = parent1;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.value = null;
        this.children = [];
        this.baseURI = null;
        if (!XMLElement2) {
          XMLElement2 = requireXMLElement();
          XMLCData2 = requireXMLCData();
          XMLComment2 = requireXMLComment();
          XMLDeclaration2 = requireXMLDeclaration();
          XMLDocType2 = requireXMLDocType();
          XMLRaw2 = requireXMLRaw();
          XMLText2 = requireXMLText();
          XMLProcessingInstruction2 = requireXMLProcessingInstruction();
          XMLDummy2 = requireXMLDummy();
          NodeType2 = requireNodeType();
          XMLNodeList2 = requireXMLNodeList();
          requireXMLNamedNodeMap();
          DocumentPosition2 = requireDocumentPosition();
        }
      }
      Object.defineProperty(XMLNode2.prototype, "nodeName", {
        get: function() {
          return this.name;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeType", {
        get: function() {
          return this.type;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nodeValue", {
        get: function() {
          return this.value;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "parentNode", {
        get: function() {
          return this.parent;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "childNodes", {
        get: function() {
          if (!this.childNodeList || !this.childNodeList.nodes) {
            this.childNodeList = new XMLNodeList2(this.children);
          }
          return this.childNodeList;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "firstChild", {
        get: function() {
          return this.children[0] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "lastChild", {
        get: function() {
          return this.children[this.children.length - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "previousSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i - 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "nextSibling", {
        get: function() {
          var i;
          i = this.parent.children.indexOf(this);
          return this.parent.children[i + 1] || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
        get: function() {
          return this.document() || null;
        }
      });
      Object.defineProperty(XMLNode2.prototype, "textContent", {
        get: function() {
          var child, j, len, ref2, str;
          if (this.nodeType === NodeType2.Element || this.nodeType === NodeType2.DocumentFragment) {
            str = "";
            ref2 = this.children;
            for (j = 0, len = ref2.length; j < len; j++) {
              child = ref2[j];
              if (child.textContent) {
                str += child.textContent;
              }
            }
            return str;
          } else {
            return null;
          }
        },
        set: function(value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        }
      });
      XMLNode2.prototype.setParent = function(parent) {
        var child, j, len, ref2, results;
        this.parent = parent;
        if (parent) {
          this.options = parent.options;
          this.stringify = parent.stringify;
        }
        ref2 = this.children;
        results = [];
        for (j = 0, len = ref2.length; j < len; j++) {
          child = ref2[j];
          results.push(child.setParent(this));
        }
        return results;
      };
      XMLNode2.prototype.element = function(name, attributes, text) {
        var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
        lastChild = null;
        if (attributes === null && text == null) {
          ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
        }
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
        }
        if (name != null) {
          name = getValue(name);
        }
        if (Array.isArray(name)) {
          for (j = 0, len = name.length; j < len; j++) {
            item = name[j];
            lastChild = this.element(item);
          }
        } else if (isFunction(name)) {
          lastChild = this.element(name.apply());
        } else if (isObject(name)) {
          for (key in name) {
            if (!hasProp.call(name, key)) continue;
            val = name[key];
            if (isFunction(val)) {
              val = val.apply();
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
              lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
            } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
              lastChild = this.dummy();
            } else if (isObject(val) && isEmpty(val)) {
              lastChild = this.element(key);
            } else if (!this.options.keepNullNodes && val == null) {
              lastChild = this.dummy();
            } else if (!this.options.separateArrayItems && Array.isArray(val)) {
              for (k = 0, len1 = val.length; k < len1; k++) {
                item = val[k];
                childNode = {};
                childNode[key] = item;
                lastChild = this.element(childNode);
              }
            } else if (isObject(val)) {
              if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                lastChild = this.element(val);
              } else {
                lastChild = this.element(key);
                lastChild.element(val);
              }
            } else {
              lastChild = this.element(key, val);
            }
          }
        } else if (!this.options.keepNullNodes && text === null) {
          lastChild = this.dummy();
        } else {
          if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
            lastChild = this.text(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
            lastChild = this.cdata(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
            lastChild = this.comment(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
            lastChild = this.raw(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
          } else {
            lastChild = this.node(name, attributes, text);
          }
        }
        if (lastChild == null) {
          throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
        }
        return lastChild;
      };
      XMLNode2.prototype.insertBefore = function(name, attributes, text) {
        var child, i, newChild, refChild, removed;
        if (name != null ? name.type : void 0) {
          newChild = name;
          refChild = attributes;
          newChild.setParent(this);
          if (refChild) {
            i = children.indexOf(refChild);
            removed = children.splice(i);
            children.push(newChild);
            Array.prototype.push.apply(children, removed);
          } else {
            children.push(newChild);
          }
          return newChild;
        } else {
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        }
      };
      XMLNode2.prototype.insertAfter = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };
      XMLNode2.prototype.remove = function() {
        var i;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element. " + this.debugInfo());
        }
        i = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [i, i - i + 1].concat([]));
        return this.parent;
      };
      XMLNode2.prototype.node = function(name, attributes, text) {
        var child, ref2;
        if (name != null) {
          name = getValue(name);
        }
        attributes || (attributes = {});
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
        }
        child = new XMLElement2(this, name, attributes);
        if (text != null) {
          child.text(text);
        }
        this.children.push(child);
        return child;
      };
      XMLNode2.prototype.text = function(value) {
        var child;
        if (isObject(value)) {
          this.element(value);
        }
        child = new XMLText2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.cdata = function(value) {
        var child;
        child = new XMLCData2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.comment = function(value) {
        var child;
        child = new XMLComment2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.commentBefore = function(value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.commentAfter = function(value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.raw = function(value) {
        var child;
        child = new XMLRaw2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.dummy = function() {
        var child;
        child = new XMLDummy2(this);
        return child;
      };
      XMLNode2.prototype.instruction = function(target, value) {
        var insTarget, insValue, instruction, j, len;
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (j = 0, len = target.length; j < len; j++) {
            insTarget = target[j];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          instruction = new XMLProcessingInstruction2(this, target, value);
          this.children.push(instruction);
        }
        return this;
      };
      XMLNode2.prototype.instructionBefore = function(target, value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.instructionAfter = function(target, value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.declaration = function(version, encoding, standalone) {
        var doc, xmldec;
        doc = this.document();
        xmldec = new XMLDeclaration2(doc, version, encoding, standalone);
        if (doc.children.length === 0) {
          doc.children.unshift(xmldec);
        } else if (doc.children[0].type === NodeType2.Declaration) {
          doc.children[0] = xmldec;
        } else {
          doc.children.unshift(xmldec);
        }
        return doc.root() || doc;
      };
      XMLNode2.prototype.dtd = function(pubID, sysID) {
        var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
        doc = this.document();
        doctype = new XMLDocType2(doc, pubID, sysID);
        ref2 = doc.children;
        for (i = j = 0, len = ref2.length; j < len; i = ++j) {
          child = ref2[i];
          if (child.type === NodeType2.DocType) {
            doc.children[i] = doctype;
            return doctype;
          }
        }
        ref3 = doc.children;
        for (i = k = 0, len1 = ref3.length; k < len1; i = ++k) {
          child = ref3[i];
          if (child.isRoot) {
            doc.children.splice(i, 0, doctype);
            return doctype;
          }
        }
        doc.children.push(doctype);
        return doctype;
      };
      XMLNode2.prototype.up = function() {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };
      XMLNode2.prototype.root = function() {
        var node;
        node = this;
        while (node) {
          if (node.type === NodeType2.Document) {
            return node.rootObject;
          } else if (node.isRoot) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.document = function() {
        var node;
        node = this;
        while (node) {
          if (node.type === NodeType2.Document) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.end = function(options) {
        return this.document().end(options);
      };
      XMLNode2.prototype.prev = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i < 1) {
          throw new Error("Already at the first node. " + this.debugInfo());
        }
        return this.parent.children[i - 1];
      };
      XMLNode2.prototype.next = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i === -1 || i === this.parent.children.length - 1) {
          throw new Error("Already at the last node. " + this.debugInfo());
        }
        return this.parent.children[i + 1];
      };
      XMLNode2.prototype.importDocument = function(doc) {
        var clonedRoot;
        clonedRoot = doc.root().clone();
        clonedRoot.parent = this;
        clonedRoot.isRoot = false;
        this.children.push(clonedRoot);
        return this;
      };
      XMLNode2.prototype.debugInfo = function(name) {
        var ref2, ref3;
        name = name || this.name;
        if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) {
          return "";
        } else if (name == null) {
          return "parent: <" + this.parent.name + ">";
        } else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) {
          return "node: <" + name + ">";
        } else {
          return "node: <" + name + ">, parent: <" + this.parent.name + ">";
        }
      };
      XMLNode2.prototype.ele = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.doc = function() {
        return this.document();
      };
      XMLNode2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLNode2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLNode2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.u = function() {
        return this.up();
      };
      XMLNode2.prototype.importXMLBuilder = function(doc) {
        return this.importDocument(doc);
      };
      XMLNode2.prototype.replaceChild = function(newChild, oldChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.removeChild = function(oldChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.appendChild = function(newChild) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.hasChildNodes = function() {
        return this.children.length !== 0;
      };
      XMLNode2.prototype.cloneNode = function(deep) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.normalize = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isSupported = function(feature, version) {
        return true;
      };
      XMLNode2.prototype.hasAttributes = function() {
        return this.attribs.length !== 0;
      };
      XMLNode2.prototype.compareDocumentPosition = function(other) {
        var ref, res;
        ref = this;
        if (ref === other) {
          return 0;
        } else if (this.document() !== other.document()) {
          res = DocumentPosition2.Disconnected | DocumentPosition2.ImplementationSpecific;
          if (Math.random() < 0.5) {
            res |= DocumentPosition2.Preceding;
          } else {
            res |= DocumentPosition2.Following;
          }
          return res;
        } else if (ref.isAncestor(other)) {
          return DocumentPosition2.Contains | DocumentPosition2.Preceding;
        } else if (ref.isDescendant(other)) {
          return DocumentPosition2.Contains | DocumentPosition2.Following;
        } else if (ref.isPreceding(other)) {
          return DocumentPosition2.Preceding;
        } else {
          return DocumentPosition2.Following;
        }
      };
      XMLNode2.prototype.isSameNode = function(other) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.lookupPrefix = function(namespaceURI) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isDefaultNamespace = function(namespaceURI) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.lookupNamespaceURI = function(prefix) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.isEqualNode = function(node) {
        var i, j, ref2;
        if (node.nodeType !== this.nodeType) {
          return false;
        }
        if (node.children.length !== this.children.length) {
          return false;
        }
        for (i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
          if (!this.children[i].isEqualNode(node.children[i])) {
            return false;
          }
        }
        return true;
      };
      XMLNode2.prototype.getFeature = function(feature, version) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.setUserData = function(key, data, handler) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.getUserData = function(key) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLNode2.prototype.contains = function(other) {
        if (!other) {
          return false;
        }
        return other === this || this.isDescendant(other);
      };
      XMLNode2.prototype.isDescendant = function(node) {
        var child, isDescendantChild, j, len, ref2;
        ref2 = this.children;
        for (j = 0, len = ref2.length; j < len; j++) {
          child = ref2[j];
          if (node === child) {
            return true;
          }
          isDescendantChild = child.isDescendant(node);
          if (isDescendantChild) {
            return true;
          }
        }
        return false;
      };
      XMLNode2.prototype.isAncestor = function(node) {
        return node.isDescendant(this);
      };
      XMLNode2.prototype.isPreceding = function(node) {
        var nodePos, thisPos;
        nodePos = this.treePosition(node);
        thisPos = this.treePosition(this);
        if (nodePos === -1 || thisPos === -1) {
          return false;
        } else {
          return nodePos < thisPos;
        }
      };
      XMLNode2.prototype.isFollowing = function(node) {
        var nodePos, thisPos;
        nodePos = this.treePosition(node);
        thisPos = this.treePosition(this);
        if (nodePos === -1 || thisPos === -1) {
          return false;
        } else {
          return nodePos > thisPos;
        }
      };
      XMLNode2.prototype.treePosition = function(node) {
        var found, pos;
        pos = 0;
        found = false;
        this.foreachTreeNode(this.document(), function(childNode) {
          pos++;
          if (!found && childNode === node) {
            return found = true;
          }
        });
        if (found) {
          return pos;
        } else {
          return -1;
        }
      };
      XMLNode2.prototype.foreachTreeNode = function(node, func) {
        var child, j, len, ref2, res;
        node || (node = this.document());
        ref2 = node.children;
        for (j = 0, len = ref2.length; j < len; j++) {
          child = ref2[j];
          if (res = func(child)) {
            return res;
          } else {
            res = this.foreachTreeNode(child, func);
            if (res) {
              return res;
            }
          }
        }
      };
      return XMLNode2;
    })();
  }).call(XMLNode);
  return XMLNode$1.exports;
}
var XMLStringifier$1 = { exports: {} };
var XMLStringifier = XMLStringifier$1.exports;
var hasRequiredXMLStringifier;
function requireXMLStringifier() {
  if (hasRequiredXMLStringifier) return XMLStringifier$1.exports;
  hasRequiredXMLStringifier = 1;
  (function() {
    var bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    }, hasProp = {}.hasOwnProperty;
    XMLStringifier$1.exports = (function() {
      function XMLStringifier2(options) {
        this.assertLegalName = bind(this.assertLegalName, this);
        this.assertLegalChar = bind(this.assertLegalChar, this);
        var key, ref, value;
        options || (options = {});
        this.options = options;
        if (!this.options.version) {
          this.options.version = "1.0";
        }
        ref = options.stringify || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this[key] = value;
        }
      }
      XMLStringifier2.prototype.name = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalName("" + val || "");
      };
      XMLStringifier2.prototype.text = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar(this.textEscape("" + val || ""));
      };
      XMLStringifier2.prototype.cdata = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        val = val.replace("]]>", "]]]]><![CDATA[>");
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.comment = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (val.match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.raw = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return "" + val || "";
      };
      XMLStringifier2.prototype.attValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar(this.attEscape(val = "" + val || ""));
      };
      XMLStringifier2.prototype.insTarget = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.insValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (val.match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.xmlVersion = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (!val.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + val);
        }
        return val;
      };
      XMLStringifier2.prototype.xmlEncoding = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        val = "" + val || "";
        if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
          throw new Error("Invalid encoding: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.xmlStandalone = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        if (val) {
          return "yes";
        } else {
          return "no";
        }
      };
      XMLStringifier2.prototype.dtdPubID = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdSysID = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdElementValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdAttType = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdAttDefault = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdEntityValue = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.dtdNData = function(val) {
        if (this.options.noValidation) {
          return val;
        }
        return this.assertLegalChar("" + val || "");
      };
      XMLStringifier2.prototype.convertAttKey = "@";
      XMLStringifier2.prototype.convertPIKey = "?";
      XMLStringifier2.prototype.convertTextKey = "#text";
      XMLStringifier2.prototype.convertCDataKey = "#cdata";
      XMLStringifier2.prototype.convertCommentKey = "#comment";
      XMLStringifier2.prototype.convertRawKey = "#raw";
      XMLStringifier2.prototype.assertLegalChar = function(str) {
        var regex, res;
        if (this.options.noValidation) {
          return str;
        }
        regex = "";
        if (this.options.version === "1.0") {
          regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
          if (res = str.match(regex)) {
            throw new Error("Invalid character in string: " + str + " at index " + res.index);
          }
        } else if (this.options.version === "1.1") {
          regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
          if (res = str.match(regex)) {
            throw new Error("Invalid character in string: " + str + " at index " + res.index);
          }
        }
        return str;
      };
      XMLStringifier2.prototype.assertLegalName = function(str) {
        var regex;
        if (this.options.noValidation) {
          return str;
        }
        this.assertLegalChar(str);
        regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
        if (!str.match(regex)) {
          throw new Error("Invalid character in name");
        }
        return str;
      };
      XMLStringifier2.prototype.textEscape = function(str) {
        var ampregex;
        if (this.options.noValidation) {
          return str;
        }
        ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      };
      XMLStringifier2.prototype.attEscape = function(str) {
        var ampregex;
        if (this.options.noValidation) {
          return str;
        }
        ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      };
      return XMLStringifier2;
    })();
  }).call(XMLStringifier);
  return XMLStringifier$1.exports;
}
var XMLStringWriter$1 = { exports: {} };
var XMLWriterBase$1 = { exports: {} };
var WriterState$1 = { exports: {} };
var WriterState = WriterState$1.exports;
var hasRequiredWriterState;
function requireWriterState() {
  if (hasRequiredWriterState) return WriterState$1.exports;
  hasRequiredWriterState = 1;
  (function() {
    WriterState$1.exports = {
      None: 0,
      OpenTag: 1,
      InsideTag: 2,
      CloseTag: 3
    };
  }).call(WriterState);
  return WriterState$1.exports;
}
var XMLWriterBase = XMLWriterBase$1.exports;
var hasRequiredXMLWriterBase;
function requireXMLWriterBase() {
  if (hasRequiredXMLWriterBase) return XMLWriterBase$1.exports;
  hasRequiredXMLWriterBase = 1;
  (function() {
    var NodeType2, WriterState2, assign, hasProp = {}.hasOwnProperty;
    assign = requireUtility().assign;
    NodeType2 = requireNodeType();
    requireXMLDeclaration();
    requireXMLDocType();
    requireXMLCData();
    requireXMLComment();
    requireXMLElement();
    requireXMLRaw();
    requireXMLText();
    requireXMLProcessingInstruction();
    requireXMLDummy();
    requireXMLDTDAttList();
    requireXMLDTDElement();
    requireXMLDTDEntity();
    requireXMLDTDNotation();
    WriterState2 = requireWriterState();
    XMLWriterBase$1.exports = (function() {
      function XMLWriterBase2(options) {
        var key, ref, value;
        options || (options = {});
        this.options = options;
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
          value = ref[key];
          this["_" + key] = this[key];
          this[key] = value;
        }
      }
      XMLWriterBase2.prototype.filterOptions = function(options) {
        var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
        options || (options = {});
        options = assign({}, this.options, options);
        filteredOptions = {
          writer: this
        };
        filteredOptions.pretty = options.pretty || false;
        filteredOptions.allowEmpty = options.allowEmpty || false;
        filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
        filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
        filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
        filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
        filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
        if (filteredOptions.spaceBeforeSlash === true) {
          filteredOptions.spaceBeforeSlash = " ";
        }
        filteredOptions.suppressPrettyCount = 0;
        filteredOptions.user = {};
        filteredOptions.state = WriterState2.None;
        return filteredOptions;
      };
      XMLWriterBase2.prototype.indent = function(node, options, level) {
        var indentLevel;
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else if (options.pretty) {
          indentLevel = (level || 0) + options.offset + 1;
          if (indentLevel > 0) {
            return new Array(indentLevel).join(options.indent);
          }
        }
        return "";
      };
      XMLWriterBase2.prototype.endline = function(node, options, level) {
        if (!options.pretty || options.suppressPrettyCount) {
          return "";
        } else {
          return options.newline;
        }
      };
      XMLWriterBase2.prototype.attribute = function(att, options, level) {
        var r;
        this.openAttribute(att, options, level);
        r = " " + att.name + '="' + att.value + '"';
        this.closeAttribute(att, options, level);
        return r;
      };
      XMLWriterBase2.prototype.cdata = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<![CDATA[";
        options.state = WriterState2.InsideTag;
        r += node.value;
        options.state = WriterState2.CloseTag;
        r += "]]>" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.comment = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<!-- ";
        options.state = WriterState2.InsideTag;
        r += node.value;
        options.state = WriterState2.CloseTag;
        r += " -->" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.declaration = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<?xml";
        options.state = WriterState2.InsideTag;
        r += ' version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.docType = function(node, options, level) {
        var child, i, len, r, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level);
        r += "<!DOCTYPE " + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += " [";
          r += this.endline(node, options, level);
          options.state = WriterState2.InsideTag;
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState2.CloseTag;
          r += "]";
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + ">";
        r += this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.element = function(node, options, level) {
        var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
        level || (level = 0);
        prettySuppressed = false;
        r = "";
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r += this.indent(node, options, level) + "<" + node.name;
        ref = node.attribs;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          r += this.attribute(att, options, level);
        }
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType2.Text || e.type === NodeType2.Raw) && e.value === "";
        })) {
          if (options.allowEmpty) {
            r += ">";
            options.state = WriterState2.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            options.state = WriterState2.CloseTag;
            r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType2.Text || firstChildNode.type === NodeType2.Raw) && firstChildNode.value != null) {
          r += ">";
          options.state = WriterState2.InsideTag;
          options.suppressPrettyCount++;
          prettySuppressed = true;
          r += this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          prettySuppressed = false;
          options.state = WriterState2.CloseTag;
          r += "</" + node.name + ">" + this.endline(node, options, level);
        } else {
          if (options.dontPrettyTextNodes) {
            ref1 = node.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              if ((child.type === NodeType2.Text || child.type === NodeType2.Raw) && child.value != null) {
                options.suppressPrettyCount++;
                prettySuppressed = true;
                break;
              }
            }
          }
          r += ">" + this.endline(node, options, level);
          options.state = WriterState2.InsideTag;
          ref2 = node.children;
          for (j = 0, len1 = ref2.length; j < len1; j++) {
            child = ref2[j];
            r += this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState2.CloseTag;
          r += this.indent(node, options, level) + "</" + node.name + ">";
          if (prettySuppressed) {
            options.suppressPrettyCount--;
          }
          r += this.endline(node, options, level);
          options.state = WriterState2.None;
        }
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.writeChildNode = function(node, options, level) {
        switch (node.type) {
          case NodeType2.CData:
            return this.cdata(node, options, level);
          case NodeType2.Comment:
            return this.comment(node, options, level);
          case NodeType2.Element:
            return this.element(node, options, level);
          case NodeType2.Raw:
            return this.raw(node, options, level);
          case NodeType2.Text:
            return this.text(node, options, level);
          case NodeType2.ProcessingInstruction:
            return this.processingInstruction(node, options, level);
          case NodeType2.Dummy:
            return "";
          case NodeType2.Declaration:
            return this.declaration(node, options, level);
          case NodeType2.DocType:
            return this.docType(node, options, level);
          case NodeType2.AttributeDeclaration:
            return this.dtdAttList(node, options, level);
          case NodeType2.ElementDeclaration:
            return this.dtdElement(node, options, level);
          case NodeType2.EntityDeclaration:
            return this.dtdEntity(node, options, level);
          case NodeType2.NotationDeclaration:
            return this.dtdNotation(node, options, level);
          default:
            throw new Error("Unknown XML node type: " + node.constructor.name);
        }
      };
      XMLWriterBase2.prototype.processingInstruction = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<?";
        options.state = WriterState2.InsideTag;
        r += node.target;
        if (node.value) {
          r += " " + node.value;
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + "?>";
        r += this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.raw = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState2.InsideTag;
        r += node.value;
        options.state = WriterState2.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.text = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level);
        options.state = WriterState2.InsideTag;
        r += node.value;
        options.state = WriterState2.CloseTag;
        r += this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdAttList = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<!ATTLIST";
        options.state = WriterState2.InsideTag;
        r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
        if (node.defaultValueType !== "#DEFAULT") {
          r += " " + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdElement = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<!ELEMENT";
        options.state = WriterState2.InsideTag;
        r += " " + node.name + " " + node.value;
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdEntity = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<!ENTITY";
        options.state = WriterState2.InsideTag;
        if (node.pe) {
          r += " %";
        }
        r += " " + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += " NDATA " + node.nData;
          }
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.dtdNotation = function(node, options, level) {
        var r;
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        r = this.indent(node, options, level) + "<!NOTATION";
        options.state = WriterState2.InsideTag;
        r += " " + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        options.state = WriterState2.CloseTag;
        r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
        options.state = WriterState2.None;
        this.closeNode(node, options, level);
        return r;
      };
      XMLWriterBase2.prototype.openNode = function(node, options, level) {
      };
      XMLWriterBase2.prototype.closeNode = function(node, options, level) {
      };
      XMLWriterBase2.prototype.openAttribute = function(att, options, level) {
      };
      XMLWriterBase2.prototype.closeAttribute = function(att, options, level) {
      };
      return XMLWriterBase2;
    })();
  }).call(XMLWriterBase);
  return XMLWriterBase$1.exports;
}
var XMLStringWriter = XMLStringWriter$1.exports;
var hasRequiredXMLStringWriter;
function requireXMLStringWriter() {
  if (hasRequiredXMLStringWriter) return XMLStringWriter$1.exports;
  hasRequiredXMLStringWriter = 1;
  (function() {
    var XMLWriterBase2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLWriterBase2 = requireXMLWriterBase();
    XMLStringWriter$1.exports = (function(superClass) {
      extend(XMLStringWriter2, superClass);
      function XMLStringWriter2(options) {
        XMLStringWriter2.__super__.constructor.call(this, options);
      }
      XMLStringWriter2.prototype.document = function(doc, options) {
        var child, i, len, r, ref;
        options = this.filterOptions(options);
        r = "";
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += this.writeChildNode(child, options, 0);
        }
        if (options.pretty && r.slice(-options.newline.length) === options.newline) {
          r = r.slice(0, -options.newline.length);
        }
        return r;
      };
      return XMLStringWriter2;
    })(XMLWriterBase2);
  }).call(XMLStringWriter);
  return XMLStringWriter$1.exports;
}
var XMLDocument = XMLDocument$1.exports;
var hasRequiredXMLDocument;
function requireXMLDocument() {
  if (hasRequiredXMLDocument) return XMLDocument$1.exports;
  hasRequiredXMLDocument = 1;
  (function() {
    var NodeType2, XMLDOMConfiguration2, XMLDOMImplementation2, XMLNode2, XMLStringWriter2, XMLStringifier2, isPlainObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = requireUtility().isPlainObject;
    XMLDOMImplementation2 = requireXMLDOMImplementation();
    XMLDOMConfiguration2 = requireXMLDOMConfiguration();
    XMLNode2 = requireXMLNode();
    NodeType2 = requireNodeType();
    XMLStringifier2 = requireXMLStringifier();
    XMLStringWriter2 = requireXMLStringWriter();
    XMLDocument$1.exports = (function(superClass) {
      extend(XMLDocument2, superClass);
      function XMLDocument2(options) {
        XMLDocument2.__super__.constructor.call(this, null);
        this.name = "#document";
        this.type = NodeType2.Document;
        this.documentURI = null;
        this.domConfig = new XMLDOMConfiguration2();
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter2();
        }
        this.options = options;
        this.stringify = new XMLStringifier2(options);
      }
      Object.defineProperty(XMLDocument2.prototype, "implementation", {
        value: new XMLDOMImplementation2()
      });
      Object.defineProperty(XMLDocument2.prototype, "doctype", {
        get: function() {
          var child, i, len, ref;
          ref = this.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            if (child.type === NodeType2.DocType) {
              return child;
            }
          }
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "documentElement", {
        get: function() {
          return this.rootObject || null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
        get: function() {
          return false;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType2.Declaration) {
            return this.children[0].encoding;
          } else {
            return null;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType2.Declaration) {
            return this.children[0].standalone === "yes";
          } else {
            return false;
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
        get: function() {
          if (this.children.length !== 0 && this.children[0].type === NodeType2.Declaration) {
            return this.children[0].version;
          } else {
            return "1.0";
          }
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "URL", {
        get: function() {
          return this.documentURI;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "origin", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "compatMode", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "characterSet", {
        get: function() {
          return null;
        }
      });
      Object.defineProperty(XMLDocument2.prototype, "contentType", {
        get: function() {
          return null;
        }
      });
      XMLDocument2.prototype.end = function(writer) {
        var writerOptions;
        writerOptions = {};
        if (!writer) {
          writer = this.options.writer;
        } else if (isPlainObject(writer)) {
          writerOptions = writer;
          writer = this.options.writer;
        }
        return writer.document(this, writer.filterOptions(writerOptions));
      };
      XMLDocument2.prototype.toString = function(options) {
        return this.options.writer.document(this, this.options.writer.filterOptions(options));
      };
      XMLDocument2.prototype.createElement = function(tagName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createDocumentFragment = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createTextNode = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createComment = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createCDATASection = function(data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createProcessingInstruction = function(target, data) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createAttribute = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createEntityReference = function(name) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByTagName = function(tagname) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.importNode = function(importedNode, deep) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createElementNS = function(namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementById = function(elementId) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.adoptNode = function(source) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.normalizeDocument = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.getElementsByClassName = function(classNames) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createEvent = function(eventInterface) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createRange = function() {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createNodeIterator = function(root, whatToShow, filter) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      XMLDocument2.prototype.createTreeWalker = function(root, whatToShow, filter) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      };
      return XMLDocument2;
    })(XMLNode2);
  }).call(XMLDocument);
  return XMLDocument$1.exports;
}
var XMLDocumentCB$1 = { exports: {} };
var XMLDocumentCB = XMLDocumentCB$1.exports;
var hasRequiredXMLDocumentCB;
function requireXMLDocumentCB() {
  if (hasRequiredXMLDocumentCB) return XMLDocumentCB$1.exports;
  hasRequiredXMLDocumentCB = 1;
  (function() {
    var NodeType2, WriterState2, XMLAttribute2, XMLCData2, XMLComment2, XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLDeclaration2, XMLDocType2, XMLDocument2, XMLElement2, XMLProcessingInstruction2, XMLRaw2, XMLStringWriter2, XMLStringifier2, XMLText2, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
    NodeType2 = requireNodeType();
    XMLDocument2 = requireXMLDocument();
    XMLElement2 = requireXMLElement();
    XMLCData2 = requireXMLCData();
    XMLComment2 = requireXMLComment();
    XMLRaw2 = requireXMLRaw();
    XMLText2 = requireXMLText();
    XMLProcessingInstruction2 = requireXMLProcessingInstruction();
    XMLDeclaration2 = requireXMLDeclaration();
    XMLDocType2 = requireXMLDocType();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLAttribute2 = requireXMLAttribute();
    XMLStringifier2 = requireXMLStringifier();
    XMLStringWriter2 = requireXMLStringWriter();
    WriterState2 = requireWriterState();
    XMLDocumentCB$1.exports = (function() {
      function XMLDocumentCB2(options, onData, onEnd) {
        var writerOptions;
        this.name = "?xml";
        this.type = NodeType2.Document;
        options || (options = {});
        writerOptions = {};
        if (!options.writer) {
          options.writer = new XMLStringWriter2();
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter2();
        }
        this.options = options;
        this.writer = options.writer;
        this.writerOptions = this.writer.filterOptions(writerOptions);
        this.stringify = new XMLStringifier2(options);
        this.onDataCallback = onData || function() {
        };
        this.onEndCallback = onEnd || function() {
        };
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }
      XMLDocumentCB2.prototype.createChildNode = function(node) {
        var att, attName, attributes, child, i, len, ref1, ref2;
        switch (node.type) {
          case NodeType2.CData:
            this.cdata(node.value);
            break;
          case NodeType2.Comment:
            this.comment(node.value);
            break;
          case NodeType2.Element:
            attributes = {};
            ref1 = node.attribs;
            for (attName in ref1) {
              if (!hasProp.call(ref1, attName)) continue;
              att = ref1[attName];
              attributes[attName] = att.value;
            }
            this.node(node.name, attributes);
            break;
          case NodeType2.Dummy:
            this.dummy();
            break;
          case NodeType2.Raw:
            this.raw(node.value);
            break;
          case NodeType2.Text:
            this.text(node.value);
            break;
          case NodeType2.ProcessingInstruction:
            this.instruction(node.target, node.value);
            break;
          default:
            throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
        }
        ref2 = node.children;
        for (i = 0, len = ref2.length; i < len; i++) {
          child = ref2[i];
          this.createChildNode(child);
          if (child.type === NodeType2.Element) {
            this.up();
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.dummy = function() {
        return this;
      };
      XMLDocumentCB2.prototype.node = function(name, attributes, text) {
        var ref1;
        if (name == null) {
          throw new Error("Missing node name.");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node. " + this.debugInfo(name));
        }
        this.openCurrent();
        name = getValue(name);
        if (attributes == null) {
          attributes = {};
        }
        attributes = getValue(attributes);
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        this.currentNode = new XMLElement2(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      };
      XMLDocumentCB2.prototype.element = function(name, attributes, text) {
        var child, i, len, oldValidationFlag, ref1, root;
        if (this.currentNode && this.currentNode.type === NodeType2.DocType) {
          this.dtdElement.apply(this, arguments);
        } else {
          if (Array.isArray(name) || isObject(name) || isFunction(name)) {
            oldValidationFlag = this.options.noValidation;
            this.options.noValidation = true;
            root = new XMLDocument2(this.options).element("TEMP_ROOT");
            root.element(name);
            this.options.noValidation = oldValidationFlag;
            ref1 = root.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              this.createChildNode(child);
              if (child.type === NodeType2.Element) {
                this.up();
              }
            }
          } else {
            this.node(name, attributes, text);
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
        }
        if (name != null) {
          name = getValue(name);
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName)) continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (this.options.keepNullAttributes && value == null) {
            this.currentNode.attribs[name] = new XMLAttribute2(this, name, "");
          } else if (value != null) {
            this.currentNode.attribs[name] = new XMLAttribute2(this, name, value);
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.text = function(value) {
        var node;
        this.openCurrent();
        node = new XMLText2(this, value);
        this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.cdata = function(value) {
        var node;
        this.openCurrent();
        node = new XMLCData2(this, value);
        this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.comment = function(value) {
        var node;
        this.openCurrent();
        node = new XMLComment2(this, value);
        this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.raw = function(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw2(this, value);
        this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.instruction = function(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = getValue(target);
        }
        if (value != null) {
          value = getValue(value);
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length; i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget)) continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction2(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        }
        return this;
      };
      XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node.");
        }
        node = new XMLDeclaration2(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name.");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node.");
        }
        this.currentNode = new XMLDocType2(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };
      XMLDocumentCB2.prototype.dtdElement = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement2(this, name, value);
        this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList2(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.entity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity2(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.pEntity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity2(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.notation = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation2(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
        return this;
      };
      XMLDocumentCB2.prototype.up = function() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent.");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };
      XMLDocumentCB2.prototype.end = function() {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };
      XMLDocumentCB2.prototype.openCurrent = function() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };
      XMLDocumentCB2.prototype.openNode = function(node) {
        var att, chunk, name, ref1;
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node.type === NodeType2.Element) {
            this.root = node;
          }
          chunk = "";
          if (node.type === NodeType2.Element) {
            this.writerOptions.state = WriterState2.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name)) continue;
              att = ref1[name];
              chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
            }
            chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
            this.writerOptions.state = WriterState2.InsideTag;
          } else {
            this.writerOptions.state = WriterState2.OpenTag;
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
            if (node.pubID && node.sysID) {
              chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              chunk += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children) {
              chunk += " [";
              this.writerOptions.state = WriterState2.InsideTag;
            } else {
              this.writerOptions.state = WriterState2.CloseTag;
              chunk += ">";
            }
            chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.onData(chunk, this.currentLevel);
          return node.isOpen = true;
        }
      };
      XMLDocumentCB2.prototype.closeNode = function(node) {
        var chunk;
        if (!node.isClosed) {
          chunk = "";
          this.writerOptions.state = WriterState2.CloseTag;
          if (node.type === NodeType2.Element) {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          } else {
            chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
          }
          this.writerOptions.state = WriterState2.None;
          this.onData(chunk, this.currentLevel);
          return node.isClosed = true;
        }
      };
      XMLDocumentCB2.prototype.onData = function(chunk, level) {
        this.documentStarted = true;
        return this.onDataCallback(chunk, level + 1);
      };
      XMLDocumentCB2.prototype.onEnd = function() {
        this.documentCompleted = true;
        return this.onEndCallback();
      };
      XMLDocumentCB2.prototype.debugInfo = function(name) {
        if (name == null) {
          return "";
        } else {
          return "node: <" + name + ">";
        }
      };
      XMLDocumentCB2.prototype.ele = function() {
        return this.element.apply(this, arguments);
      };
      XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      };
      XMLDocumentCB2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLDocumentCB2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLDocumentCB2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.att = function() {
        if (this.currentNode && this.currentNode.type === NodeType2.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.a = function() {
        if (this.currentNode && this.currentNode.type === NodeType2.DocType) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocumentCB2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocumentCB2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      return XMLDocumentCB2;
    })();
  }).call(XMLDocumentCB);
  return XMLDocumentCB$1.exports;
}
var XMLStreamWriter$1 = { exports: {} };
var XMLStreamWriter = XMLStreamWriter$1.exports;
var hasRequiredXMLStreamWriter;
function requireXMLStreamWriter() {
  if (hasRequiredXMLStreamWriter) return XMLStreamWriter$1.exports;
  hasRequiredXMLStreamWriter = 1;
  (function() {
    var NodeType2, WriterState2, XMLWriterBase2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    NodeType2 = requireNodeType();
    XMLWriterBase2 = requireXMLWriterBase();
    WriterState2 = requireWriterState();
    XMLStreamWriter$1.exports = (function(superClass) {
      extend(XMLStreamWriter2, superClass);
      function XMLStreamWriter2(stream, options) {
        this.stream = stream;
        XMLStreamWriter2.__super__.constructor.call(this, options);
      }
      XMLStreamWriter2.prototype.endline = function(node, options, level) {
        if (node.isLastRootNode && options.state === WriterState2.CloseTag) {
          return "";
        } else {
          return XMLStreamWriter2.__super__.endline.call(this, node, options, level);
        }
      };
      XMLStreamWriter2.prototype.document = function(doc, options) {
        var child, i, j, k, len, len1, ref, ref1, results;
        ref = doc.children;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          child = ref[i];
          child.isLastRootNode = i === doc.children.length - 1;
        }
        options = this.filterOptions(options);
        ref1 = doc.children;
        results = [];
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          child = ref1[k];
          results.push(this.writeChildNode(child, options, 0));
        }
        return results;
      };
      XMLStreamWriter2.prototype.attribute = function(att, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.attribute.call(this, att, options, level));
      };
      XMLStreamWriter2.prototype.cdata = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.cdata.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.comment = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.comment.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.declaration = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.declaration.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.docType = function(node, options, level) {
        var child, j, len, ref;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        this.stream.write(this.indent(node, options, level));
        this.stream.write("<!DOCTYPE " + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(" [");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState2.InsideTag;
          ref = node.children;
          for (j = 0, len = ref.length; j < len; j++) {
            child = ref[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState2.CloseTag;
          this.stream.write("]");
        }
        options.state = WriterState2.CloseTag;
        this.stream.write(options.spaceBeforeSlash + ">");
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState2.None;
        return this.closeNode(node, options, level);
      };
      XMLStreamWriter2.prototype.element = function(node, options, level) {
        var att, child, childNodeCount, firstChildNode, j, len, name, ref, ref1;
        level || (level = 0);
        this.openNode(node, options, level);
        options.state = WriterState2.OpenTag;
        this.stream.write(this.indent(node, options, level) + "<" + node.name);
        ref = node.attribs;
        for (name in ref) {
          if (!hasProp.call(ref, name)) continue;
          att = ref[name];
          this.attribute(att, options, level);
        }
        childNodeCount = node.children.length;
        firstChildNode = childNodeCount === 0 ? null : node.children[0];
        if (childNodeCount === 0 || node.children.every(function(e) {
          return (e.type === NodeType2.Text || e.type === NodeType2.Raw) && e.value === "";
        })) {
          if (options.allowEmpty) {
            this.stream.write(">");
            options.state = WriterState2.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            options.state = WriterState2.CloseTag;
            this.stream.write(options.spaceBeforeSlash + "/>");
          }
        } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType2.Text || firstChildNode.type === NodeType2.Raw) && firstChildNode.value != null) {
          this.stream.write(">");
          options.state = WriterState2.InsideTag;
          options.suppressPrettyCount++;
          this.writeChildNode(firstChildNode, options, level + 1);
          options.suppressPrettyCount--;
          options.state = WriterState2.CloseTag;
          this.stream.write("</" + node.name + ">");
        } else {
          this.stream.write(">" + this.endline(node, options, level));
          options.state = WriterState2.InsideTag;
          ref1 = node.children;
          for (j = 0, len = ref1.length; j < len; j++) {
            child = ref1[j];
            this.writeChildNode(child, options, level + 1);
          }
          options.state = WriterState2.CloseTag;
          this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
        }
        this.stream.write(this.endline(node, options, level));
        options.state = WriterState2.None;
        return this.closeNode(node, options, level);
      };
      XMLStreamWriter2.prototype.processingInstruction = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.processingInstruction.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.raw = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.raw.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.text = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.text.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdAttList = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdAttList.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdElement = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdElement.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdEntity = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdEntity.call(this, node, options, level));
      };
      XMLStreamWriter2.prototype.dtdNotation = function(node, options, level) {
        return this.stream.write(XMLStreamWriter2.__super__.dtdNotation.call(this, node, options, level));
      };
      return XMLStreamWriter2;
    })(XMLWriterBase2);
  }).call(XMLStreamWriter);
  return XMLStreamWriter$1.exports;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function() {
    var NodeType2, WriterState2, XMLDOMImplementation2, XMLDocument2, XMLDocumentCB2, XMLStreamWriter2, XMLStringWriter2, assign, isFunction, ref;
    ref = requireUtility(), assign = ref.assign, isFunction = ref.isFunction;
    XMLDOMImplementation2 = requireXMLDOMImplementation();
    XMLDocument2 = requireXMLDocument();
    XMLDocumentCB2 = requireXMLDocumentCB();
    XMLStringWriter2 = requireXMLStringWriter();
    XMLStreamWriter2 = requireXMLStreamWriter();
    NodeType2 = requireNodeType();
    WriterState2 = requireWriterState();
    lib.create = function(name, xmldec, doctype, options) {
      var doc, root;
      if (name == null) {
        throw new Error("Root element needs a name.");
      }
      options = assign({}, xmldec, doctype, options);
      doc = new XMLDocument2(options);
      root = doc.element(name);
      if (!options.headless) {
        doc.declaration(options);
        if (options.pubID != null || options.sysID != null) {
          doc.dtd(options);
        }
      }
      return root;
    };
    lib.begin = function(options, onData, onEnd) {
      var ref1;
      if (isFunction(options)) {
        ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
        options = {};
      }
      if (onData) {
        return new XMLDocumentCB2(options, onData, onEnd);
      } else {
        return new XMLDocument2(options);
      }
    };
    lib.stringWriter = function(options) {
      return new XMLStringWriter2(options);
    };
    lib.streamWriter = function(stream, options) {
      return new XMLStreamWriter2(stream, options);
    };
    lib.implementation = new XMLDOMImplementation2();
    lib.nodeType = NodeType2;
    lib.writerState = WriterState2;
  }).call(lib);
  return lib;
}
var rssParser = rssParser$1.exports;
var hasRequiredRssParser;
function requireRssParser() {
  if (hasRequiredRssParser) return rssParser$1.exports;
  hasRequiredRssParser = 1;
  (function(module, exports$1) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module.exports = factory(requireLib());
    })(rssParser, function(__WEBPACK_EXTERNAL_MODULE_xmlbuilder__) {
      return (
        /******/
        (function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              (function getDefault() {
                return module2["default"];
              })
            ) : (
              /******/
              (function getModuleExports() {
                return module2;
              })
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./index.js");
        })({
          /***/
          "./index.js": (
            /*!******************!*\
              !*** ./index.js ***!
              \******************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./lib/parser */
                "./lib/parser.js"
              );
            })
          ),
          /***/
          "./lib/fields.js": (
            /*!***********************!*\
              !*** ./lib/fields.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              var fields = module2.exports = {};
              fields.feed = [["author", "creator"], ["dc:publisher", "publisher"], ["dc:creator", "creator"], ["dc:source", "source"], ["dc:title", "title"], ["dc:type", "type"], "title", "description", "author", "pubDate", "webMaster", "managingEditor", "generator", "link", "language", "copyright", "lastBuildDate", "docs", "generator", "ttl", "rating", "skipHours", "skipDays"];
              fields.item = [["author", "creator"], ["dc:creator", "creator"], ["dc:date", "date"], ["dc:language", "language"], ["dc:rights", "rights"], ["dc:source", "source"], ["dc:title", "title"], "title", "link", "pubDate", "author", "summary", ["content:encoded", "content:encoded", {
                includeSnippet: true
              }], "enclosure", "dc:creator", "dc:date", "comments"];
              var mapItunesField = function mapItunesField2(f) {
                return ["itunes:" + f, f];
              };
              fields.podcastFeed = ["author", "subtitle", "summary", "explicit"].map(mapItunesField);
              fields.podcastItem = ["author", "subtitle", "summary", "explicit", "duration", "image", "episode", "image", "season", "keywords", "episodeType"].map(mapItunesField);
            })
          ),
          /***/
          "./lib/parser.js": (
            /*!***********************!*\
              !*** ./lib/parser.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                Object.defineProperty(Constructor, "prototype", { writable: false });
                return Constructor;
              }
              function _toPropertyKey(arg) {
                var key = _toPrimitive(arg, "string");
                return _typeof(key) === "symbol" ? key : String(key);
              }
              function _toPrimitive(input, hint) {
                if (_typeof(input) !== "object" || input === null) return input;
                var prim = input[Symbol.toPrimitive];
                if (prim !== void 0) {
                  var res = prim.call(input, hint);
                  if (_typeof(res) !== "object") return res;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(input);
              }
              var http = __webpack_require__(
                /*! http */
                "./node_modules/stream-http/index.js"
              );
              var https = __webpack_require__(
                /*! https */
                "./node_modules/https-browserify/index.js"
              );
              var xml2js = __webpack_require__(
                /*! xml2js */
                "./node_modules/xml2js/lib/xml2js.js"
              );
              var url = __webpack_require__(
                /*! url */
                "./node_modules/url/url.js"
              );
              var fields = __webpack_require__(
                /*! ./fields */
                "./lib/fields.js"
              );
              var utils = __webpack_require__(
                /*! ./utils */
                "./lib/utils.js"
              );
              var DEFAULT_HEADERS = {
                "User-Agent": "rss-parser",
                "Accept": "application/rss+xml"
              };
              var DEFAULT_MAX_REDIRECTS = 5;
              var DEFAULT_TIMEOUT = 6e4;
              var Parser2 = /* @__PURE__ */ (function() {
                function Parser22() {
                  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  _classCallCheck(this, Parser22);
                  options.headers = options.headers || {};
                  options.xml2js = options.xml2js || {};
                  options.customFields = options.customFields || {};
                  options.customFields.item = options.customFields.item || [];
                  options.customFields.feed = options.customFields.feed || [];
                  options.requestOptions = options.requestOptions || {};
                  if (!options.maxRedirects) options.maxRedirects = DEFAULT_MAX_REDIRECTS;
                  if (!options.timeout) options.timeout = DEFAULT_TIMEOUT;
                  this.options = options;
                  this.xmlParser = new xml2js.Parser(this.options.xml2js);
                }
                _createClass(Parser22, [{
                  key: "parseString",
                  value: function parseString(xml, callback) {
                    var _this = this;
                    var prom = new Promise(function(resolve, reject) {
                      _this.xmlParser.parseString(xml, function(err, result) {
                        if (err) return reject(err);
                        if (!result) {
                          return reject(new Error("Unable to parse XML."));
                        }
                        var feed = null;
                        if (result.feed) {
                          feed = _this.buildAtomFeed(result);
                        } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/^2/)) {
                          feed = _this.buildRSS2(result);
                        } else if (result["rdf:RDF"]) {
                          feed = _this.buildRSS1(result);
                        } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/0\.9/)) {
                          feed = _this.buildRSS0_9(result);
                        } else if (result.rss && _this.options.defaultRSS) {
                          switch (_this.options.defaultRSS) {
                            case 0.9:
                              feed = _this.buildRSS0_9(result);
                              break;
                            case 1:
                              feed = _this.buildRSS1(result);
                              break;
                            case 2:
                              feed = _this.buildRSS2(result);
                              break;
                            default:
                              return reject(new Error("default RSS version not recognized."));
                          }
                        } else {
                          return reject(new Error("Feed not recognized as RSS 1 or 2."));
                        }
                        resolve(feed);
                      });
                    });
                    prom = utils.maybePromisify(callback, prom);
                    return prom;
                  }
                }, {
                  key: "parseURL",
                  value: function parseURL(feedUrl, callback) {
                    var _this2 = this;
                    var redirectCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                    var xml = "";
                    var get = feedUrl.indexOf("https") === 0 ? https.get : http.get;
                    var urlParts = url.parse(feedUrl);
                    var headers = Object.assign({}, DEFAULT_HEADERS, this.options.headers);
                    var timeout = null;
                    var prom = new Promise(function(resolve, reject) {
                      var requestOpts = Object.assign({
                        headers
                      }, urlParts, _this2.options.requestOptions);
                      var req = get(requestOpts, function(res) {
                        if (_this2.options.maxRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers["location"]) {
                          if (redirectCount === _this2.options.maxRedirects) {
                            return reject(new Error("Too many redirects"));
                          } else {
                            var newLocation = url.resolve(feedUrl, res.headers["location"]);
                            return _this2.parseURL(newLocation, null, redirectCount + 1).then(resolve, reject);
                          }
                        } else if (res.statusCode >= 300) {
                          return reject(new Error("Status code " + res.statusCode));
                        }
                        var encoding = utils.getEncodingFromContentType(res.headers["content-type"]);
                        res.setEncoding(encoding);
                        res.on("data", function(chunk) {
                          xml += chunk;
                        });
                        res.on("end", function() {
                          return _this2.parseString(xml).then(resolve, reject);
                        });
                      });
                      req.on("error", reject);
                      timeout = setTimeout(function() {
                        return reject(new Error("Request timed out after " + _this2.options.timeout + "ms"));
                      }, _this2.options.timeout);
                    }).then(function(data) {
                      clearTimeout(timeout);
                      return Promise.resolve(data);
                    }, function(e) {
                      clearTimeout(timeout);
                      return Promise.reject(e);
                    });
                    prom = utils.maybePromisify(callback, prom);
                    return prom;
                  }
                }, {
                  key: "buildAtomFeed",
                  value: function buildAtomFeed(xmlObj) {
                    var _this3 = this;
                    var feed = {
                      items: []
                    };
                    utils.copyFromXML(xmlObj.feed, feed, this.options.customFields.feed);
                    if (xmlObj.feed.link) {
                      feed.link = utils.getLink(xmlObj.feed.link, "alternate", 0);
                      feed.feedUrl = utils.getLink(xmlObj.feed.link, "self", 1);
                    }
                    if (xmlObj.feed.title) {
                      var title = xmlObj.feed.title[0] || "";
                      if (title._) title = title._;
                      if (title) feed.title = title;
                    }
                    if (xmlObj.feed.updated) {
                      feed.lastBuildDate = xmlObj.feed.updated[0];
                    }
                    feed.items = (xmlObj.feed.entry || []).map(function(entry) {
                      return _this3.parseItemAtom(entry);
                    });
                    return feed;
                  }
                }, {
                  key: "parseItemAtom",
                  value: function parseItemAtom(entry) {
                    var item = {};
                    utils.copyFromXML(entry, item, this.options.customFields.item);
                    if (entry.title) {
                      var title = entry.title[0] || "";
                      if (title._) title = title._;
                      if (title) item.title = title;
                    }
                    if (entry.link && entry.link.length) {
                      item.link = utils.getLink(entry.link, "alternate", 0);
                    }
                    if (entry.published && entry.published.length && entry.published[0].length) item.pubDate = new Date(entry.published[0]).toISOString();
                    if (!item.pubDate && entry.updated && entry.updated.length && entry.updated[0].length) item.pubDate = new Date(entry.updated[0]).toISOString();
                    if (entry.author && entry.author.length && entry.author[0].name && entry.author[0].name.length) item.author = entry.author[0].name[0];
                    if (entry.content && entry.content.length) {
                      item.content = utils.getContent(entry.content[0]);
                      item.contentSnippet = utils.getSnippet(item.content);
                    }
                    if (entry.summary && entry.summary.length) {
                      item.summary = utils.getContent(entry.summary[0]);
                    }
                    if (entry.id) {
                      item.id = entry.id[0];
                    }
                    this.setISODate(item);
                    return item;
                  }
                }, {
                  key: "buildRSS0_9",
                  value: function buildRSS0_9(xmlObj) {
                    var channel = xmlObj.rss.channel[0];
                    var items = channel.item;
                    return this.buildRSS(channel, items);
                  }
                }, {
                  key: "buildRSS1",
                  value: function buildRSS1(xmlObj) {
                    xmlObj = xmlObj["rdf:RDF"];
                    var channel = xmlObj.channel[0];
                    var items = xmlObj.item;
                    return this.buildRSS(channel, items);
                  }
                }, {
                  key: "buildRSS2",
                  value: function buildRSS2(xmlObj) {
                    var channel = xmlObj.rss.channel[0];
                    var items = channel.item;
                    var feed = this.buildRSS(channel, items);
                    if (xmlObj.rss.$ && xmlObj.rss.$["xmlns:itunes"]) {
                      this.decorateItunes(feed, channel);
                    }
                    return feed;
                  }
                }, {
                  key: "buildRSS",
                  value: function buildRSS(channel, items) {
                    var _this4 = this;
                    items = items || [];
                    var feed = {
                      items: []
                    };
                    var feedFields = fields.feed.concat(this.options.customFields.feed);
                    var itemFields = fields.item.concat(this.options.customFields.item);
                    if (channel["atom:link"] && channel["atom:link"][0] && channel["atom:link"][0].$) {
                      feed.feedUrl = channel["atom:link"][0].$.href;
                    }
                    if (channel.image && channel.image[0] && channel.image[0].url) {
                      feed.image = {};
                      var image = channel.image[0];
                      if (image.link) feed.image.link = image.link[0];
                      if (image.url) feed.image.url = image.url[0];
                      if (image.title) feed.image.title = image.title[0];
                      if (image.width) feed.image.width = image.width[0];
                      if (image.height) feed.image.height = image.height[0];
                    }
                    var paginationLinks = this.generatePaginationLinks(channel);
                    if (Object.keys(paginationLinks).length) {
                      feed.paginationLinks = paginationLinks;
                    }
                    utils.copyFromXML(channel, feed, feedFields);
                    feed.items = items.map(function(xmlItem) {
                      return _this4.parseItemRss(xmlItem, itemFields);
                    });
                    return feed;
                  }
                }, {
                  key: "parseItemRss",
                  value: function parseItemRss(xmlItem, itemFields) {
                    var item = {};
                    utils.copyFromXML(xmlItem, item, itemFields);
                    if (xmlItem.enclosure) {
                      item.enclosure = xmlItem.enclosure[0].$;
                    }
                    if (xmlItem.description) {
                      item.content = utils.getContent(xmlItem.description[0]);
                      item.contentSnippet = utils.getSnippet(item.content);
                    }
                    if (xmlItem.guid) {
                      item.guid = xmlItem.guid[0];
                      if (item.guid._) item.guid = item.guid._;
                    }
                    if (xmlItem.$ && xmlItem.$["rdf:about"]) {
                      item["rdf:about"] = xmlItem.$["rdf:about"];
                    }
                    if (xmlItem.category) item.categories = xmlItem.category;
                    this.setISODate(item);
                    return item;
                  }
                  /**
                   * Add iTunes specific fields from XML to extracted JSON
                   *
                   * @access public
                   * @param {object} feed extracted
                   * @param {object} channel parsed XML
                   */
                }, {
                  key: "decorateItunes",
                  value: function decorateItunes(feed, channel) {
                    var items = channel.item || [];
                    feed.itunes = {};
                    if (channel["itunes:owner"]) {
                      var owner = {};
                      if (channel["itunes:owner"][0]["itunes:name"]) {
                        owner.name = channel["itunes:owner"][0]["itunes:name"][0];
                      }
                      if (channel["itunes:owner"][0]["itunes:email"]) {
                        owner.email = channel["itunes:owner"][0]["itunes:email"][0];
                      }
                      feed.itunes.owner = owner;
                    }
                    if (channel["itunes:image"]) {
                      var image;
                      var hasImageHref = channel["itunes:image"][0] && channel["itunes:image"][0].$ && channel["itunes:image"][0].$.href;
                      image = hasImageHref ? channel["itunes:image"][0].$.href : null;
                      if (image) {
                        feed.itunes.image = image;
                      }
                    }
                    if (channel["itunes:category"]) {
                      var categoriesWithSubs = channel["itunes:category"].map(function(category) {
                        return {
                          name: category && category.$ && category.$.text,
                          subs: category["itunes:category"] ? category["itunes:category"].map(function(subcategory) {
                            return {
                              name: subcategory && subcategory.$ && subcategory.$.text
                            };
                          }) : null
                        };
                      });
                      feed.itunes.categories = categoriesWithSubs.map(function(category) {
                        return category.name;
                      });
                      feed.itunes.categoriesWithSubs = categoriesWithSubs;
                    }
                    if (channel["itunes:keywords"]) {
                      if (channel["itunes:keywords"].length > 1) {
                        feed.itunes.keywords = channel["itunes:keywords"].map(function(keyword) {
                          return keyword && keyword.$ && keyword.$.text;
                        });
                      } else {
                        var keywords = channel["itunes:keywords"][0];
                        if (keywords && typeof keywords._ === "string") {
                          keywords = keywords._;
                        }
                        if (keywords && keywords.$ && keywords.$.text) {
                          feed.itunes.keywords = keywords.$.text.split(",");
                        } else if (typeof keywords === "string") {
                          feed.itunes.keywords = keywords.split(",");
                        }
                      }
                    }
                    utils.copyFromXML(channel, feed.itunes, fields.podcastFeed);
                    items.forEach(function(item, index) {
                      var entry = feed.items[index];
                      entry.itunes = {};
                      utils.copyFromXML(item, entry.itunes, fields.podcastItem);
                      var image2 = item["itunes:image"];
                      if (image2 && image2[0] && image2[0].$ && image2[0].$.href) {
                        entry.itunes.image = image2[0].$.href;
                      }
                    });
                  }
                }, {
                  key: "setISODate",
                  value: function setISODate(item) {
                    var date = item.pubDate || item.date;
                    if (date) {
                      try {
                        item.isoDate = new Date(date.trim()).toISOString();
                      } catch (e) {
                      }
                    }
                  }
                  /**
                   * Generates a pagination object where the rel attribute is the key and href attribute is the value
                   *  { self: 'self-url', first: 'first-url', ...  }
                   *
                   * @access private
                   * @param {Object} channel parsed XML
                   * @returns {Object}
                   */
                }, {
                  key: "generatePaginationLinks",
                  value: function generatePaginationLinks(channel) {
                    if (!channel["atom:link"]) {
                      return {};
                    }
                    var paginationRelAttributes = ["self", "first", "next", "prev", "last"];
                    return channel["atom:link"].reduce(function(paginationLinks, link) {
                      if (!link.$ || !paginationRelAttributes.includes(link.$.rel)) {
                        return paginationLinks;
                      }
                      paginationLinks[link.$.rel] = link.$.href;
                      return paginationLinks;
                    }, {});
                  }
                }]);
                return Parser22;
              })();
              module2.exports = Parser2;
            })
          ),
          /***/
          "./lib/utils.js": (
            /*!**********************!*\
              !*** ./lib/utils.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              var utils = module2.exports = {};
              var entities = __webpack_require__(
                /*! entities */
                "./node_modules/entities/lib/index.js"
              );
              var xml2js = __webpack_require__(
                /*! xml2js */
                "./node_modules/xml2js/lib/xml2js.js"
              );
              utils.stripHtml = function(str) {
                str = str.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, "$1\n$3");
                str = str.replace(/<(?:.|\n)*?>/gm, "");
                return str;
              };
              utils.getSnippet = function(str) {
                return entities.decodeHTML(utils.stripHtml(str)).trim();
              };
              utils.getLink = function(links, rel, fallbackIdx) {
                if (!links) return;
                for (var i = 0; i < links.length; ++i) {
                  if (links[i].$.rel === rel) return links[i].$.href;
                }
                if (links[fallbackIdx]) return links[fallbackIdx].$.href;
              };
              utils.getContent = function(content) {
                if (typeof content._ === "string") {
                  return content._;
                } else if (_typeof(content) === "object") {
                  var builder = new xml2js.Builder({
                    headless: true,
                    explicitRoot: true,
                    rootName: "div",
                    renderOpts: {
                      pretty: false
                    }
                  });
                  return builder.buildObject(content);
                } else {
                  return content;
                }
              };
              utils.copyFromXML = function(xml, dest, fields) {
                fields.forEach(function(f) {
                  var from = f;
                  var to = f;
                  var options = {};
                  if (Array.isArray(f)) {
                    from = f[0];
                    to = f[1];
                    if (f.length > 2) {
                      options = f[2];
                    }
                  }
                  var _options = options, keepArray = _options.keepArray, includeSnippet = _options.includeSnippet;
                  if (xml[from] !== void 0) {
                    dest[to] = keepArray ? xml[from] : xml[from][0];
                  }
                  if (dest[to] && typeof dest[to]._ === "string") {
                    dest[to] = dest[to]._;
                  }
                  if (includeSnippet && dest[to] && typeof dest[to] === "string") {
                    dest[to + "Snippet"] = utils.getSnippet(dest[to]);
                  }
                });
              };
              utils.maybePromisify = function(callback, promise) {
                if (!callback) return promise;
                return promise.then(function(data) {
                  return setTimeout(function() {
                    return callback(null, data);
                  });
                }, function(err) {
                  return setTimeout(function() {
                    return callback(err);
                  });
                });
              };
              var DEFAULT_ENCODING = "utf8";
              var ENCODING_REGEX = /(encoding|charset)\s*=\s*(\S+)/;
              var SUPPORTED_ENCODINGS = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"];
              var ENCODING_ALIASES = {
                "utf-8": "utf8",
                "iso-8859-1": "latin1"
              };
              utils.getEncodingFromContentType = function(contentType) {
                contentType = contentType || "";
                var match = contentType.match(ENCODING_REGEX);
                var encoding = (match || [])[2] || "";
                encoding = encoding.toLowerCase();
                encoding = ENCODING_ALIASES[encoding] || encoding;
                if (!encoding || SUPPORTED_ENCODINGS.indexOf(encoding) === -1) {
                  encoding = DEFAULT_ENCODING;
                }
                return encoding;
              };
            })
          ),
          /***/
          "./node_modules/base64-js/index.js": (
            /*!*****************************************!*\
              !*** ./node_modules/base64-js/index.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              exports2.byteLength = byteLength;
              exports2.toByteArray = toByteArray;
              exports2.fromByteArray = fromByteArray;
              var lookup = [];
              var revLookup = [];
              var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
              var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
              }
              revLookup["-".charCodeAt(0)] = 62;
              revLookup["_".charCodeAt(0)] = 63;
              function getLens(b64) {
                var len2 = b64.length;
                if (len2 % 4 > 0) {
                  throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var validLen = b64.indexOf("=");
                if (validLen === -1) validLen = len2;
                var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
                return [validLen, placeHoldersLen];
              }
              function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
              }
              function _byteLength(b64, validLen, placeHoldersLen) {
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
              }
              function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
                var i2;
                for (i2 = 0; i2 < len2; i2 += 4) {
                  tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
                  arr[curByte++] = tmp >> 16 & 255;
                  arr[curByte++] = tmp >> 8 & 255;
                  arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                  tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
                  arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                  tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
                  arr[curByte++] = tmp >> 8 & 255;
                  arr[curByte++] = tmp & 255;
                }
                return arr;
              }
              function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
              }
              function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i2 = start; i2 < end; i2 += 3) {
                  tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
                  output.push(tripletToBase64(tmp));
                }
                return output.join("");
              }
              function fromByteArray(uint8) {
                var tmp;
                var len2 = uint8.length;
                var extraBytes = len2 % 3;
                var parts = [];
                var maxChunkLength = 16383;
                for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
                  parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
                }
                if (extraBytes === 1) {
                  tmp = uint8[len2 - 1];
                  parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
                } else if (extraBytes === 2) {
                  tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
                  parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
                }
                return parts.join("");
              }
            })
          ),
          /***/
          "./node_modules/buffer/index.js": (
            /*!**************************************!*\
              !*** ./node_modules/buffer/index.js ***!
              \**************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global) {
                /*!
                * The buffer module from node.js, for the browser.
                *
                * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                * @license  MIT
                */
                var base64 = __webpack_require__(
                  /*! base64-js */
                  "./node_modules/base64-js/index.js"
                );
                var ieee754 = __webpack_require__(
                  /*! ieee754 */
                  "./node_modules/ieee754/index.js"
                );
                var isArray = __webpack_require__(
                  /*! isarray */
                  "./node_modules/isarray/index.js"
                );
                exports2.Buffer = Buffer;
                exports2.SlowBuffer = SlowBuffer;
                exports2.INSPECT_MAX_BYTES = 50;
                Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== void 0 ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
                exports2.kMaxLength = kMaxLength();
                function typedArraySupport() {
                  try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function foo() {
                        return 42;
                      }
                    };
                    return arr.foo() === 42 && // typed array instances can be augmented
                    typeof arr.subarray === "function" && // chrome 9-10 lack `subarray`
                    arr.subarray(1, 1).byteLength === 0;
                  } catch (e) {
                    return false;
                  }
                }
                function kMaxLength() {
                  return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function createBuffer(that, length) {
                  if (kMaxLength() < length) {
                    throw new RangeError("Invalid typed array length");
                  }
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    that = new Uint8Array(length);
                    that.__proto__ = Buffer.prototype;
                  } else {
                    if (that === null) {
                      that = new Buffer(length);
                    }
                    that.length = length;
                  }
                  return that;
                }
                function Buffer(arg, encodingOrOffset, length) {
                  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                    return new Buffer(arg, encodingOrOffset, length);
                  }
                  if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                      throw new Error("If encoding is specified then the first argument must be a string");
                    }
                    return allocUnsafe(this, arg);
                  }
                  return from(this, arg, encodingOrOffset, length);
                }
                Buffer.poolSize = 8192;
                Buffer._augment = function(arr) {
                  arr.__proto__ = Buffer.prototype;
                  return arr;
                };
                function from(that, value, encodingOrOffset, length) {
                  if (typeof value === "number") {
                    throw new TypeError('"value" argument must not be a number');
                  }
                  if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                    return fromArrayBuffer(that, value, encodingOrOffset, length);
                  }
                  if (typeof value === "string") {
                    return fromString(that, value, encodingOrOffset);
                  }
                  return fromObject(that, value);
                }
                Buffer.from = function(value, encodingOrOffset, length) {
                  return from(null, value, encodingOrOffset, length);
                };
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                  Buffer.prototype.__proto__ = Uint8Array.prototype;
                  Buffer.__proto__ = Uint8Array;
                  if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                    Object.defineProperty(Buffer, Symbol.species, {
                      value: null,
                      configurable: true
                    });
                  }
                }
                function assertSize(size) {
                  if (typeof size !== "number") {
                    throw new TypeError('"size" argument must be a number');
                  } else if (size < 0) {
                    throw new RangeError('"size" argument must not be negative');
                  }
                }
                function alloc(that, size, fill, encoding) {
                  assertSize(size);
                  if (size <= 0) {
                    return createBuffer(that, size);
                  }
                  if (fill !== void 0) {
                    return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                  }
                  return createBuffer(that, size);
                }
                Buffer.alloc = function(size, fill, encoding) {
                  return alloc(null, size, fill, encoding);
                };
                function allocUnsafe(that, size) {
                  assertSize(size);
                  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                  if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    for (var i = 0; i < size; ++i) {
                      that[i] = 0;
                    }
                  }
                  return that;
                }
                Buffer.allocUnsafe = function(size) {
                  return allocUnsafe(null, size);
                };
                Buffer.allocUnsafeSlow = function(size) {
                  return allocUnsafe(null, size);
                };
                function fromString(that, string, encoding) {
                  if (typeof encoding !== "string" || encoding === "") {
                    encoding = "utf8";
                  }
                  if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('"encoding" must be a valid string encoding');
                  }
                  var length = byteLength(string, encoding) | 0;
                  that = createBuffer(that, length);
                  var actual = that.write(string, encoding);
                  if (actual !== length) {
                    that = that.slice(0, actual);
                  }
                  return that;
                }
                function fromArrayLike(that, array) {
                  var length = array.length < 0 ? 0 : checked(array.length) | 0;
                  that = createBuffer(that, length);
                  for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255;
                  }
                  return that;
                }
                function fromArrayBuffer(that, array, byteOffset, length) {
                  array.byteLength;
                  if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError("'offset' is out of bounds");
                  }
                  if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError("'length' is out of bounds");
                  }
                  if (byteOffset === void 0 && length === void 0) {
                    array = new Uint8Array(array);
                  } else if (length === void 0) {
                    array = new Uint8Array(array, byteOffset);
                  } else {
                    array = new Uint8Array(array, byteOffset, length);
                  }
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    that = array;
                    that.__proto__ = Buffer.prototype;
                  } else {
                    that = fromArrayLike(that, array);
                  }
                  return that;
                }
                function fromObject(that, obj) {
                  if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    that = createBuffer(that, len);
                    if (that.length === 0) {
                      return that;
                    }
                    obj.copy(that, 0, 0, len);
                    return that;
                  }
                  if (obj) {
                    if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                      if (typeof obj.length !== "number" || isnan(obj.length)) {
                        return createBuffer(that, 0);
                      }
                      return fromArrayLike(that, obj);
                    }
                    if (obj.type === "Buffer" && isArray(obj.data)) {
                      return fromArrayLike(that, obj.data);
                    }
                  }
                  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                }
                function checked(length) {
                  if (length >= kMaxLength()) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
                  }
                  return length | 0;
                }
                function SlowBuffer(length) {
                  if (+length != length) {
                    length = 0;
                  }
                  return Buffer.alloc(+length);
                }
                Buffer.isBuffer = function isBuffer(b) {
                  return !!(b != null && b._isBuffer);
                };
                Buffer.compare = function compare(a, b) {
                  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError("Arguments must be Buffers");
                  }
                  if (a === b) return 0;
                  var x = a.length;
                  var y = b.length;
                  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                      x = a[i];
                      y = b[i];
                      break;
                    }
                  }
                  if (x < y) return -1;
                  if (y < x) return 1;
                  return 0;
                };
                Buffer.isEncoding = function isEncoding(encoding) {
                  switch (String(encoding).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return true;
                    default:
                      return false;
                  }
                };
                Buffer.concat = function concat(list, length) {
                  if (!isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                  }
                  if (list.length === 0) {
                    return Buffer.alloc(0);
                  }
                  var i;
                  if (length === void 0) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                      length += list[i].length;
                    }
                  }
                  var buffer = Buffer.allocUnsafe(length);
                  var pos = 0;
                  for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) {
                      throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    buf.copy(buffer, pos);
                    pos += buf.length;
                  }
                  return buffer;
                };
                function byteLength(string, encoding) {
                  if (Buffer.isBuffer(string)) {
                    return string.length;
                  }
                  if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                    return string.byteLength;
                  }
                  if (typeof string !== "string") {
                    string = "" + string;
                  }
                  var len = string.length;
                  if (len === 0) return 0;
                  var loweredCase = false;
                  for (; ; ) {
                    switch (encoding) {
                      case "ascii":
                      case "latin1":
                      case "binary":
                        return len;
                      case "utf8":
                      case "utf-8":
                      case void 0:
                        return utf8ToBytes(string).length;
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return len * 2;
                      case "hex":
                        return len >>> 1;
                      case "base64":
                        return base64ToBytes(string).length;
                      default:
                        if (loweredCase) return utf8ToBytes(string).length;
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                  }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                  var loweredCase = false;
                  if (start === void 0 || start < 0) {
                    start = 0;
                  }
                  if (start > this.length) {
                    return "";
                  }
                  if (end === void 0 || end > this.length) {
                    end = this.length;
                  }
                  if (end <= 0) {
                    return "";
                  }
                  end >>>= 0;
                  start >>>= 0;
                  if (end <= start) {
                    return "";
                  }
                  if (!encoding) encoding = "utf8";
                  while (true) {
                    switch (encoding) {
                      case "hex":
                        return hexSlice(this, start, end);
                      case "utf8":
                      case "utf-8":
                        return utf8Slice(this, start, end);
                      case "ascii":
                        return asciiSlice(this, start, end);
                      case "latin1":
                      case "binary":
                        return latin1Slice(this, start, end);
                      case "base64":
                        return base64Slice(this, start, end);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return utf16leSlice(this, start, end);
                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = (encoding + "").toLowerCase();
                        loweredCase = true;
                    }
                  }
                }
                Buffer.prototype._isBuffer = true;
                function swap(b, n, m) {
                  var i = b[n];
                  b[n] = b[m];
                  b[m] = i;
                }
                Buffer.prototype.swap16 = function swap16() {
                  var len = this.length;
                  if (len % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                  }
                  for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                  }
                  return this;
                };
                Buffer.prototype.swap32 = function swap32() {
                  var len = this.length;
                  if (len % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                  }
                  for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                  }
                  return this;
                };
                Buffer.prototype.swap64 = function swap64() {
                  var len = this.length;
                  if (len % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                  }
                  for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                  }
                  return this;
                };
                Buffer.prototype.toString = function toString() {
                  var length = this.length | 0;
                  if (length === 0) return "";
                  if (arguments.length === 0) return utf8Slice(this, 0, length);
                  return slowToString.apply(this, arguments);
                };
                Buffer.prototype.equals = function equals(b) {
                  if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                  if (this === b) return true;
                  return Buffer.compare(this, b) === 0;
                };
                Buffer.prototype.inspect = function inspect() {
                  var str = "";
                  var max = exports2.INSPECT_MAX_BYTES;
                  if (this.length > 0) {
                    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                    if (this.length > max) str += " ... ";
                  }
                  return "<Buffer " + str + ">";
                };
                Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                  if (!Buffer.isBuffer(target)) {
                    throw new TypeError("Argument must be a Buffer");
                  }
                  if (start === void 0) {
                    start = 0;
                  }
                  if (end === void 0) {
                    end = target ? target.length : 0;
                  }
                  if (thisStart === void 0) {
                    thisStart = 0;
                  }
                  if (thisEnd === void 0) {
                    thisEnd = this.length;
                  }
                  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError("out of range index");
                  }
                  if (thisStart >= thisEnd && start >= end) {
                    return 0;
                  }
                  if (thisStart >= thisEnd) {
                    return -1;
                  }
                  if (start >= end) {
                    return 1;
                  }
                  start >>>= 0;
                  end >>>= 0;
                  thisStart >>>= 0;
                  thisEnd >>>= 0;
                  if (this === target) return 0;
                  var x = thisEnd - thisStart;
                  var y = end - start;
                  var len = Math.min(x, y);
                  var thisCopy = this.slice(thisStart, thisEnd);
                  var targetCopy = target.slice(start, end);
                  for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                      x = thisCopy[i];
                      y = targetCopy[i];
                      break;
                    }
                  }
                  if (x < y) return -1;
                  if (y < x) return 1;
                  return 0;
                };
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                  if (buffer.length === 0) return -1;
                  if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                  } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                  } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                  }
                  byteOffset = +byteOffset;
                  if (isNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                  }
                  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                  if (byteOffset >= buffer.length) {
                    if (dir) return -1;
                    else byteOffset = buffer.length - 1;
                  } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0;
                    else return -1;
                  }
                  if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                  }
                  if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                      return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                  } else if (typeof val === "number") {
                    val = val & 255;
                    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                      if (dir) {
                        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                      } else {
                        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                      }
                    }
                    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                  }
                  throw new TypeError("val must be string, number or Buffer");
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                  var indexSize = 1;
                  var arrLength = arr.length;
                  var valLength = val.length;
                  if (encoding !== void 0) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                      if (arr.length < 2 || val.length < 2) {
                        return -1;
                      }
                      indexSize = 2;
                      arrLength /= 2;
                      valLength /= 2;
                      byteOffset /= 2;
                    }
                  }
                  function read(buf, i2) {
                    if (indexSize === 1) {
                      return buf[i2];
                    } else {
                      return buf.readUInt16BE(i2 * indexSize);
                    }
                  }
                  var i;
                  if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i;
                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                      } else {
                        if (foundIndex !== -1) i -= i - foundIndex;
                        foundIndex = -1;
                      }
                    }
                  } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                      var found = true;
                      for (var j = 0; j < valLength; j++) {
                        if (read(arr, i + j) !== read(val, j)) {
                          found = false;
                          break;
                        }
                      }
                      if (found) return i;
                    }
                  }
                  return -1;
                }
                Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                  return this.indexOf(val, byteOffset, encoding) !== -1;
                };
                Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                };
                Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                };
                function hexWrite(buf, string, offset, length) {
                  offset = Number(offset) || 0;
                  var remaining = buf.length - offset;
                  if (!length) {
                    length = remaining;
                  } else {
                    length = Number(length);
                    if (length > remaining) {
                      length = remaining;
                    }
                  }
                  var strLen = string.length;
                  if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                  if (length > strLen / 2) {
                    length = strLen / 2;
                  }
                  for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (isNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                  }
                  return i;
                }
                function utf8Write(buf, string, offset, length) {
                  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                }
                function asciiWrite(buf, string, offset, length) {
                  return blitBuffer(asciiToBytes(string), buf, offset, length);
                }
                function latin1Write(buf, string, offset, length) {
                  return asciiWrite(buf, string, offset, length);
                }
                function base64Write(buf, string, offset, length) {
                  return blitBuffer(base64ToBytes(string), buf, offset, length);
                }
                function ucs2Write(buf, string, offset, length) {
                  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                }
                Buffer.prototype.write = function write(string, offset, length, encoding) {
                  if (offset === void 0) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                  } else if (length === void 0 && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                  } else if (isFinite(offset)) {
                    offset = offset | 0;
                    if (isFinite(length)) {
                      length = length | 0;
                      if (encoding === void 0) encoding = "utf8";
                    } else {
                      encoding = length;
                      length = void 0;
                    }
                  } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  }
                  var remaining = this.length - offset;
                  if (length === void 0 || length > remaining) length = remaining;
                  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                  }
                  if (!encoding) encoding = "utf8";
                  var loweredCase = false;
                  for (; ; ) {
                    switch (encoding) {
                      case "hex":
                        return hexWrite(this, string, offset, length);
                      case "utf8":
                      case "utf-8":
                        return utf8Write(this, string, offset, length);
                      case "ascii":
                        return asciiWrite(this, string, offset, length);
                      case "latin1":
                      case "binary":
                        return latin1Write(this, string, offset, length);
                      case "base64":
                        return base64Write(this, string, offset, length);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return ucs2Write(this, string, offset, length);
                      default:
                        if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                        encoding = ("" + encoding).toLowerCase();
                        loweredCase = true;
                    }
                  }
                };
                Buffer.prototype.toJSON = function toJSON() {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                  };
                };
                function base64Slice(buf, start, end) {
                  if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                  } else {
                    return base64.fromByteArray(buf.slice(start, end));
                  }
                }
                function utf8Slice(buf, start, end) {
                  end = Math.min(buf.length, end);
                  var res = [];
                  var i = start;
                  while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                      var secondByte, thirdByte, fourthByte, tempCodePoint;
                      switch (bytesPerSequence) {
                        case 1:
                          if (firstByte < 128) {
                            codePoint = firstByte;
                          }
                          break;
                        case 2:
                          secondByte = buf[i + 1];
                          if ((secondByte & 192) === 128) {
                            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                            if (tempCodePoint > 127) {
                              codePoint = tempCodePoint;
                            }
                          }
                          break;
                        case 3:
                          secondByte = buf[i + 1];
                          thirdByte = buf[i + 2];
                          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                              codePoint = tempCodePoint;
                            }
                          }
                          break;
                        case 4:
                          secondByte = buf[i + 1];
                          thirdByte = buf[i + 2];
                          fourthByte = buf[i + 3];
                          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                              codePoint = tempCodePoint;
                            }
                          }
                      }
                    }
                    if (codePoint === null) {
                      codePoint = 65533;
                      bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                      codePoint -= 65536;
                      res.push(codePoint >>> 10 & 1023 | 55296);
                      codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                  }
                  return decodeCodePointsArray(res);
                }
                var MAX_ARGUMENTS_LENGTH = 4096;
                function decodeCodePointsArray(codePoints) {
                  var len = codePoints.length;
                  if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                  }
                  var res = "";
                  var i = 0;
                  while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                  }
                  return res;
                }
                function asciiSlice(buf, start, end) {
                  var ret = "";
                  end = Math.min(buf.length, end);
                  for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                  }
                  return ret;
                }
                function latin1Slice(buf, start, end) {
                  var ret = "";
                  end = Math.min(buf.length, end);
                  for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                  }
                  return ret;
                }
                function hexSlice(buf, start, end) {
                  var len = buf.length;
                  if (!start || start < 0) start = 0;
                  if (!end || end < 0 || end > len) end = len;
                  var out = "";
                  for (var i = start; i < end; ++i) {
                    out += toHex(buf[i]);
                  }
                  return out;
                }
                function utf16leSlice(buf, start, end) {
                  var bytes = buf.slice(start, end);
                  var res = "";
                  for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                  }
                  return res;
                }
                Buffer.prototype.slice = function slice(start, end) {
                  var len = this.length;
                  start = ~~start;
                  end = end === void 0 ? len : ~~end;
                  if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                  } else if (start > len) {
                    start = len;
                  }
                  if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                  } else if (end > len) {
                    end = len;
                  }
                  if (end < start) end = start;
                  var newBuf;
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = this.subarray(start, end);
                    newBuf.__proto__ = Buffer.prototype;
                  } else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, void 0);
                    for (var i = 0; i < sliceLen; ++i) {
                      newBuf[i] = this[i + start];
                    }
                  }
                  return newBuf;
                };
                function checkOffset(offset, ext, length) {
                  if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                  if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
                }
                Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var val = this[offset];
                  var mul = 1;
                  var i = 0;
                  while (++i < byteLength2 && (mul *= 256)) {
                    val += this[offset + i] * mul;
                  }
                  return val;
                };
                Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) {
                    checkOffset(offset, byteLength2, this.length);
                  }
                  var val = this[offset + --byteLength2];
                  var mul = 1;
                  while (byteLength2 > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength2] * mul;
                  }
                  return val;
                };
                Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 1, this.length);
                  return this[offset];
                };
                Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  return this[offset] | this[offset + 1] << 8;
                };
                Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  return this[offset] << 8 | this[offset + 1];
                };
                Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
                };
                Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
                };
                Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var val = this[offset];
                  var mul = 1;
                  var i = 0;
                  while (++i < byteLength2 && (mul *= 256)) {
                    val += this[offset + i] * mul;
                  }
                  mul *= 128;
                  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
                  return val;
                };
                Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) checkOffset(offset, byteLength2, this.length);
                  var i = byteLength2;
                  var mul = 1;
                  var val = this[offset + --i];
                  while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                  }
                  mul *= 128;
                  if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
                  return val;
                };
                Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 1, this.length);
                  if (!(this[offset] & 128)) return this[offset];
                  return (255 - this[offset] + 1) * -1;
                };
                Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  var val = this[offset] | this[offset + 1] << 8;
                  return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 2, this.length);
                  var val = this[offset + 1] | this[offset] << 8;
                  return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
                };
                Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
                };
                Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return ieee754.read(this, offset, true, 23, 4);
                };
                Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 4, this.length);
                  return ieee754.read(this, offset, false, 23, 4);
                };
                Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 8, this.length);
                  return ieee754.read(this, offset, true, 52, 8);
                };
                Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                  if (!noAssert) checkOffset(offset, 8, this.length);
                  return ieee754.read(this, offset, false, 52, 8);
                };
                function checkInt(buf, value, offset, ext, max, min) {
                  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                  if (offset + ext > buf.length) throw new RangeError("Index out of range");
                }
                Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                    checkInt(this, value, offset, byteLength2, maxBytes, 0);
                  }
                  var mul = 1;
                  var i = 0;
                  this[offset] = value & 255;
                  while (++i < byteLength2 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  byteLength2 = byteLength2 | 0;
                  if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
                    checkInt(this, value, offset, byteLength2, maxBytes, 0);
                  }
                  var i = byteLength2 - 1;
                  var mul = 1;
                  this[offset + i] = value & 255;
                  while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                  this[offset] = value & 255;
                  return offset + 1;
                };
                function objectWriteUInt16(buf, value, offset, littleEndian) {
                  if (value < 0) value = 65535 + value + 1;
                  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                    buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                  }
                }
                Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                  } else {
                    objectWriteUInt16(this, value, offset, true);
                  }
                  return offset + 2;
                };
                Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                  } else {
                    objectWriteUInt16(this, value, offset, false);
                  }
                  return offset + 2;
                };
                function objectWriteUInt32(buf, value, offset, littleEndian) {
                  if (value < 0) value = 4294967295 + value + 1;
                  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                  }
                }
                Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = value & 255;
                  } else {
                    objectWriteUInt32(this, value, offset, true);
                  }
                  return offset + 4;
                };
                Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                  } else {
                    objectWriteUInt32(this, value, offset, false);
                  }
                  return offset + 4;
                };
                Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength2 - 1);
                    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                  }
                  var i = 0;
                  var mul = 1;
                  var sub = 0;
                  this[offset] = value & 255;
                  while (++i < byteLength2 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                      sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength2 - 1);
                    checkInt(this, value, offset, byteLength2, limit - 1, -limit);
                  }
                  var i = byteLength2 - 1;
                  var mul = 1;
                  var sub = 0;
                  this[offset + i] = value & 255;
                  while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                      sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                  }
                  return offset + byteLength2;
                };
                Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                  if (value < 0) value = 255 + value + 1;
                  this[offset] = value & 255;
                  return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                  } else {
                    objectWriteUInt16(this, value, offset, true);
                  }
                  return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                  } else {
                    objectWriteUInt16(this, value, offset, false);
                  }
                  return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                  } else {
                    objectWriteUInt32(this, value, offset, true);
                  }
                  return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                  value = +value;
                  offset = offset | 0;
                  if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                  if (value < 0) value = 4294967295 + value + 1;
                  if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                  } else {
                    objectWriteUInt32(this, value, offset, false);
                  }
                  return offset + 4;
                };
                function checkIEEE754(buf, value, offset, ext, max, min) {
                  if (offset + ext > buf.length) throw new RangeError("Index out of range");
                  if (offset < 0) throw new RangeError("Index out of range");
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                  if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4);
                  }
                  ieee754.write(buf, value, offset, littleEndian, 23, 4);
                  return offset + 4;
                }
                Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                  return writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                  return writeFloat(this, value, offset, false, noAssert);
                };
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                  if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8);
                  }
                  ieee754.write(buf, value, offset, littleEndian, 52, 8);
                  return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                  return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                  return writeDouble(this, value, offset, false, noAssert);
                };
                Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                  if (!start) start = 0;
                  if (!end && end !== 0) end = this.length;
                  if (targetStart >= target.length) targetStart = target.length;
                  if (!targetStart) targetStart = 0;
                  if (end > 0 && end < start) end = start;
                  if (end === start) return 0;
                  if (target.length === 0 || this.length === 0) return 0;
                  if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                  }
                  if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                  if (end < 0) throw new RangeError("sourceEnd out of bounds");
                  if (end > this.length) end = this.length;
                  if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                  }
                  var len = end - start;
                  var i;
                  if (this === target && start < targetStart && targetStart < end) {
                    for (i = len - 1; i >= 0; --i) {
                      target[i + targetStart] = this[i + start];
                    }
                  } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    for (i = 0; i < len; ++i) {
                      target[i + targetStart] = this[i + start];
                    }
                  } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                  }
                  return len;
                };
                Buffer.prototype.fill = function fill(val, start, end, encoding) {
                  if (typeof val === "string") {
                    if (typeof start === "string") {
                      encoding = start;
                      start = 0;
                      end = this.length;
                    } else if (typeof end === "string") {
                      encoding = end;
                      end = this.length;
                    }
                    if (val.length === 1) {
                      var code = val.charCodeAt(0);
                      if (code < 256) {
                        val = code;
                      }
                    }
                    if (encoding !== void 0 && typeof encoding !== "string") {
                      throw new TypeError("encoding must be a string");
                    }
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                      throw new TypeError("Unknown encoding: " + encoding);
                    }
                  } else if (typeof val === "number") {
                    val = val & 255;
                  }
                  if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError("Out of range index");
                  }
                  if (end <= start) {
                    return this;
                  }
                  start = start >>> 0;
                  end = end === void 0 ? this.length : end >>> 0;
                  if (!val) val = 0;
                  var i;
                  if (typeof val === "number") {
                    for (i = start; i < end; ++i) {
                      this[i] = val;
                    }
                  } else {
                    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                    var len = bytes.length;
                    for (i = 0; i < end - start; ++i) {
                      this[i + start] = bytes[i % len];
                    }
                  }
                  return this;
                };
                var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
                function base64clean(str) {
                  str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                  if (str.length < 2) return "";
                  while (str.length % 4 !== 0) {
                    str = str + "=";
                  }
                  return str;
                }
                function stringtrim(str) {
                  if (str.trim) return str.trim();
                  return str.replace(/^\s+|\s+$/g, "");
                }
                function toHex(n) {
                  if (n < 16) return "0" + n.toString(16);
                  return n.toString(16);
                }
                function utf8ToBytes(string, units) {
                  units = units || Infinity;
                  var codePoint;
                  var length = string.length;
                  var leadSurrogate = null;
                  var bytes = [];
                  for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                      if (!leadSurrogate) {
                        if (codePoint > 56319) {
                          if ((units -= 3) > -1) bytes.push(239, 191, 189);
                          continue;
                        } else if (i + 1 === length) {
                          if ((units -= 3) > -1) bytes.push(239, 191, 189);
                          continue;
                        }
                        leadSurrogate = codePoint;
                        continue;
                      }
                      if (codePoint < 56320) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        leadSurrogate = codePoint;
                        continue;
                      }
                      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                      if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                      if ((units -= 1) < 0) break;
                      bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                      if ((units -= 2) < 0) break;
                      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                      if ((units -= 3) < 0) break;
                      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                      if ((units -= 4) < 0) break;
                      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                      throw new Error("Invalid code point");
                    }
                  }
                  return bytes;
                }
                function asciiToBytes(str) {
                  var byteArray = [];
                  for (var i = 0; i < str.length; ++i) {
                    byteArray.push(str.charCodeAt(i) & 255);
                  }
                  return byteArray;
                }
                function utf16leToBytes(str, units) {
                  var c, hi, lo;
                  var byteArray = [];
                  for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                  }
                  return byteArray;
                }
                function base64ToBytes(str) {
                  return base64.toByteArray(base64clean(str));
                }
                function blitBuffer(src, dst, offset, length) {
                  for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                  }
                  return i;
                }
                function isnan(val) {
                  return val !== val;
                }
              }).call(this, __webpack_require__(
                /*! ./../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/builtin-status-codes/browser.js": (
            /*!******************************************************!*\
              !*** ./node_modules/builtin-status-codes/browser.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              module2.exports = {
                "100": "Continue",
                "101": "Switching Protocols",
                "102": "Processing",
                "200": "OK",
                "201": "Created",
                "202": "Accepted",
                "203": "Non-Authoritative Information",
                "204": "No Content",
                "205": "Reset Content",
                "206": "Partial Content",
                "207": "Multi-Status",
                "208": "Already Reported",
                "226": "IM Used",
                "300": "Multiple Choices",
                "301": "Moved Permanently",
                "302": "Found",
                "303": "See Other",
                "304": "Not Modified",
                "305": "Use Proxy",
                "307": "Temporary Redirect",
                "308": "Permanent Redirect",
                "400": "Bad Request",
                "401": "Unauthorized",
                "402": "Payment Required",
                "403": "Forbidden",
                "404": "Not Found",
                "405": "Method Not Allowed",
                "406": "Not Acceptable",
                "407": "Proxy Authentication Required",
                "408": "Request Timeout",
                "409": "Conflict",
                "410": "Gone",
                "411": "Length Required",
                "412": "Precondition Failed",
                "413": "Payload Too Large",
                "414": "URI Too Long",
                "415": "Unsupported Media Type",
                "416": "Range Not Satisfiable",
                "417": "Expectation Failed",
                "418": "I'm a teapot",
                "421": "Misdirected Request",
                "422": "Unprocessable Entity",
                "423": "Locked",
                "424": "Failed Dependency",
                "425": "Unordered Collection",
                "426": "Upgrade Required",
                "428": "Precondition Required",
                "429": "Too Many Requests",
                "431": "Request Header Fields Too Large",
                "451": "Unavailable For Legal Reasons",
                "500": "Internal Server Error",
                "501": "Not Implemented",
                "502": "Bad Gateway",
                "503": "Service Unavailable",
                "504": "Gateway Timeout",
                "505": "HTTP Version Not Supported",
                "506": "Variant Also Negotiates",
                "507": "Insufficient Storage",
                "508": "Loop Detected",
                "509": "Bandwidth Limit Exceeded",
                "510": "Not Extended",
                "511": "Network Authentication Required"
              };
            })
          ),
          /***/
          "./node_modules/core-util-is/lib/util.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-util-is/lib/util.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(Buffer) {
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                    return typeof obj2;
                  } : function(obj2) {
                    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  }, _typeof(obj);
                }
                function isArray(arg) {
                  if (Array.isArray) {
                    return Array.isArray(arg);
                  }
                  return objectToString(arg) === "[object Array]";
                }
                exports2.isArray = isArray;
                function isBoolean(arg) {
                  return typeof arg === "boolean";
                }
                exports2.isBoolean = isBoolean;
                function isNull(arg) {
                  return arg === null;
                }
                exports2.isNull = isNull;
                function isNullOrUndefined(arg) {
                  return arg == null;
                }
                exports2.isNullOrUndefined = isNullOrUndefined;
                function isNumber(arg) {
                  return typeof arg === "number";
                }
                exports2.isNumber = isNumber;
                function isString(arg) {
                  return typeof arg === "string";
                }
                exports2.isString = isString;
                function isSymbol(arg) {
                  return _typeof(arg) === "symbol";
                }
                exports2.isSymbol = isSymbol;
                function isUndefined(arg) {
                  return arg === void 0;
                }
                exports2.isUndefined = isUndefined;
                function isRegExp(re) {
                  return objectToString(re) === "[object RegExp]";
                }
                exports2.isRegExp = isRegExp;
                function isObject(arg) {
                  return _typeof(arg) === "object" && arg !== null;
                }
                exports2.isObject = isObject;
                function isDate(d) {
                  return objectToString(d) === "[object Date]";
                }
                exports2.isDate = isDate;
                function isError(e) {
                  return objectToString(e) === "[object Error]" || e instanceof Error;
                }
                exports2.isError = isError;
                function isFunction(arg) {
                  return typeof arg === "function";
                }
                exports2.isFunction = isFunction;
                function isPrimitive(arg) {
                  return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || _typeof(arg) === "symbol" || // ES6 symbol
                  typeof arg === "undefined";
                }
                exports2.isPrimitive = isPrimitive;
                exports2.isBuffer = Buffer.isBuffer;
                function objectToString(o) {
                  return Object.prototype.toString.call(o);
                }
              }).call(this, __webpack_require__(
                /*! ./../../buffer/index.js */
                "./node_modules/buffer/index.js"
              ).Buffer);
            })
          ),
          /***/
          "./node_modules/entities/lib/decode.js": (
            /*!*********************************************!*\
              !*** ./node_modules/entities/lib/decode.js ***!
              \*********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.decodeHTML = exports2.decodeHTMLStrict = exports2.decodeXML = void 0;
              var entities_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/entities.json */
                "./node_modules/entities/lib/maps/entities.json"
              ));
              var legacy_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/legacy.json */
                "./node_modules/entities/lib/maps/legacy.json"
              ));
              var xml_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/xml.json */
                "./node_modules/entities/lib/maps/xml.json"
              ));
              var decode_codepoint_1 = __importDefault(__webpack_require__(
                /*! ./decode_codepoint */
                "./node_modules/entities/lib/decode_codepoint.js"
              ));
              exports2.decodeXML = getStrictDecoder(xml_json_1["default"]);
              exports2.decodeHTMLStrict = getStrictDecoder(entities_json_1["default"]);
              function getStrictDecoder(map) {
                var keys = Object.keys(map).join("|");
                var replace = getReplacer(map);
                keys += "|#[xX][\\da-fA-F]+|#\\d+";
                var re = new RegExp("&(?:" + keys + ");", "g");
                return function(str) {
                  return String(str).replace(re, replace);
                };
              }
              var sorter = function sorter2(a, b) {
                return a < b ? 1 : -1;
              };
              exports2.decodeHTML = (function() {
                var legacy = Object.keys(legacy_json_1["default"]).sort(sorter);
                var keys = Object.keys(entities_json_1["default"]).sort(sorter);
                for (var i = 0, j = 0; i < keys.length; i++) {
                  if (legacy[j] === keys[i]) {
                    keys[i] += ";?";
                    j++;
                  } else {
                    keys[i] += ";";
                  }
                }
                var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
                var replace = getReplacer(entities_json_1["default"]);
                function replacer(str) {
                  if (str.substr(-1) !== ";") str += ";";
                  return replace(str);
                }
                return function(str) {
                  return String(str).replace(re, replacer);
                };
              })();
              function getReplacer(map) {
                return function replace(str) {
                  if (str.charAt(1) === "#") {
                    var secondChar = str.charAt(2);
                    if (secondChar === "X" || secondChar === "x") {
                      return decode_codepoint_1["default"](parseInt(str.substr(3), 16));
                    }
                    return decode_codepoint_1["default"](parseInt(str.substr(2), 10));
                  }
                  return map[str.slice(1, -1)];
                };
              }
            })
          ),
          /***/
          "./node_modules/entities/lib/decode_codepoint.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/entities/lib/decode_codepoint.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              var decode_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/decode.json */
                "./node_modules/entities/lib/maps/decode.json"
              ));
              function decodeCodePoint(codePoint) {
                if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
                  return "�";
                }
                if (codePoint in decode_json_1["default"]) {
                  codePoint = decode_json_1["default"][codePoint];
                }
                var output = "";
                if (codePoint > 65535) {
                  codePoint -= 65536;
                  output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
                  codePoint = 56320 | codePoint & 1023;
                }
                output += String.fromCharCode(codePoint);
                return output;
              }
              exports2["default"] = decodeCodePoint;
            })
          ),
          /***/
          "./node_modules/entities/lib/encode.js": (
            /*!*********************************************!*\
              !*** ./node_modules/entities/lib/encode.js ***!
              \*********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                  "default": mod
                };
              };
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.escape = exports2.encodeHTML = exports2.encodeXML = void 0;
              var xml_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/xml.json */
                "./node_modules/entities/lib/maps/xml.json"
              ));
              var inverseXML = getInverseObj(xml_json_1["default"]);
              var xmlReplacer = getInverseReplacer(inverseXML);
              exports2.encodeXML = getInverse(inverseXML, xmlReplacer);
              var entities_json_1 = __importDefault(__webpack_require__(
                /*! ./maps/entities.json */
                "./node_modules/entities/lib/maps/entities.json"
              ));
              var inverseHTML = getInverseObj(entities_json_1["default"]);
              var htmlReplacer = getInverseReplacer(inverseHTML);
              exports2.encodeHTML = getInverse(inverseHTML, htmlReplacer);
              function getInverseObj(obj) {
                return Object.keys(obj).sort().reduce(function(inverse, name) {
                  inverse[obj[name]] = "&" + name + ";";
                  return inverse;
                }, {});
              }
              function getInverseReplacer(inverse) {
                var single = [];
                var multiple = [];
                for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
                  var k = _a[_i];
                  if (k.length === 1) {
                    single.push("\\" + k);
                  } else {
                    multiple.push(k);
                  }
                }
                single.sort();
                for (var start = 0; start < single.length - 1; start++) {
                  var end = start;
                  while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
                    end += 1;
                  }
                  var count = 1 + end - start;
                  if (count < 3) continue;
                  single.splice(start, count, single[start] + "-" + single[end]);
                }
                multiple.unshift("[" + single.join("") + "]");
                return new RegExp(multiple.join("|"), "g");
              }
              var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
              function singleCharReplacer(c) {
                return "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
              }
              function getInverse(inverse, re) {
                return function(data) {
                  return data.replace(re, function(name) {
                    return inverse[name];
                  }).replace(reNonASCII, singleCharReplacer);
                };
              }
              var reXmlChars = getInverseReplacer(inverseXML);
              function escape2(data) {
                return data.replace(reXmlChars, singleCharReplacer).replace(reNonASCII, singleCharReplacer);
              }
              exports2.escape = escape2;
            })
          ),
          /***/
          "./node_modules/entities/lib/index.js": (
            /*!********************************************!*\
              !*** ./node_modules/entities/lib/index.js ***!
              \********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.encode = exports2.decodeStrict = exports2.decode = void 0;
              var decode_1 = __webpack_require__(
                /*! ./decode */
                "./node_modules/entities/lib/decode.js"
              );
              var encode_1 = __webpack_require__(
                /*! ./encode */
                "./node_modules/entities/lib/encode.js"
              );
              function decode(data, level) {
                return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
              }
              exports2.decode = decode;
              function decodeStrict(data, level) {
                return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
              }
              exports2.decodeStrict = decodeStrict;
              function encode(data, level) {
                return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
              }
              exports2.encode = encode;
              var encode_2 = __webpack_require__(
                /*! ./encode */
                "./node_modules/entities/lib/encode.js"
              );
              Object.defineProperty(exports2, "encodeXML", {
                enumerable: true,
                get: function get() {
                  return encode_2.encodeXML;
                }
              });
              Object.defineProperty(exports2, "encodeHTML", {
                enumerable: true,
                get: function get() {
                  return encode_2.encodeHTML;
                }
              });
              Object.defineProperty(exports2, "escape", {
                enumerable: true,
                get: function get() {
                  return encode_2.escape;
                }
              });
              Object.defineProperty(exports2, "encodeHTML4", {
                enumerable: true,
                get: function get() {
                  return encode_2.encodeHTML;
                }
              });
              Object.defineProperty(exports2, "encodeHTML5", {
                enumerable: true,
                get: function get() {
                  return encode_2.encodeHTML;
                }
              });
              var decode_2 = __webpack_require__(
                /*! ./decode */
                "./node_modules/entities/lib/decode.js"
              );
              Object.defineProperty(exports2, "decodeXML", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeXML;
                }
              });
              Object.defineProperty(exports2, "decodeHTML", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTML;
                }
              });
              Object.defineProperty(exports2, "decodeHTMLStrict", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTMLStrict;
                }
              });
              Object.defineProperty(exports2, "decodeHTML4", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTML;
                }
              });
              Object.defineProperty(exports2, "decodeHTML5", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTML;
                }
              });
              Object.defineProperty(exports2, "decodeHTML4Strict", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTMLStrict;
                }
              });
              Object.defineProperty(exports2, "decodeHTML5Strict", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeHTMLStrict;
                }
              });
              Object.defineProperty(exports2, "decodeXMLStrict", {
                enumerable: true,
                get: function get() {
                  return decode_2.decodeXML;
                }
              });
            })
          ),
          /***/
          "./node_modules/entities/lib/maps/decode.json": (
            /*!****************************************************!*\
              !*** ./node_modules/entities/lib/maps/decode.json ***!
              \****************************************************/
            /*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
            /***/
            (function(module2) {
              module2.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');
            })
          ),
          /***/
          "./node_modules/entities/lib/maps/entities.json": (
            /*!******************************************************!*\
              !*** ./node_modules/entities/lib/maps/entities.json ***!
              \******************************************************/
            /*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
            /***/
            (function(module2) {
              module2.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');
            })
          ),
          /***/
          "./node_modules/entities/lib/maps/legacy.json": (
            /*!****************************************************!*\
              !*** ./node_modules/entities/lib/maps/legacy.json ***!
              \****************************************************/
            /*! exports provided: Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml, default */
            /***/
            (function(module2) {
              module2.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');
            })
          ),
          /***/
          "./node_modules/entities/lib/maps/xml.json": (
            /*!*************************************************!*\
              !*** ./node_modules/entities/lib/maps/xml.json ***!
              \*************************************************/
            /*! exports provided: amp, apos, gt, lt, quot, default */
            /***/
            (function(module2) {
              module2.exports = JSON.parse(`{"amp":"&","apos":"'","gt":">","lt":"<","quot":"\\""}`);
            })
          ),
          /***/
          "./node_modules/events/events.js": (
            /*!***************************************!*\
              !*** ./node_modules/events/events.js ***!
              \***************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              var R = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" ? Reflect : null;
              var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
                return Function.prototype.apply.call(target, receiver, args);
              };
              var ReflectOwnKeys;
              if (R && typeof R.ownKeys === "function") {
                ReflectOwnKeys = R.ownKeys;
              } else if (Object.getOwnPropertySymbols) {
                ReflectOwnKeys = function ReflectOwnKeys2(target) {
                  return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
                };
              } else {
                ReflectOwnKeys = function ReflectOwnKeys2(target) {
                  return Object.getOwnPropertyNames(target);
                };
              }
              function ProcessEmitWarning(warning) {
                if (console && console.warn) console.warn(warning);
              }
              var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
                return value !== value;
              };
              function EventEmitter() {
                EventEmitter.init.call(this);
              }
              module2.exports = EventEmitter;
              EventEmitter.EventEmitter = EventEmitter;
              EventEmitter.prototype._events = void 0;
              EventEmitter.prototype._eventsCount = 0;
              EventEmitter.prototype._maxListeners = void 0;
              var defaultMaxListeners = 10;
              Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: true,
                get: function get() {
                  return defaultMaxListeners;
                },
                set: function set(arg) {
                  if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
                  }
                  defaultMaxListeners = arg;
                }
              });
              EventEmitter.init = function() {
                if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
                  this._events = /* @__PURE__ */ Object.create(null);
                  this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || void 0;
              };
              EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
                  throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
                }
                this._maxListeners = n;
                return this;
              };
              function $getMaxListeners(that) {
                if (that._maxListeners === void 0) return EventEmitter.defaultMaxListeners;
                return that._maxListeners;
              }
              EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return $getMaxListeners(this);
              };
              EventEmitter.prototype.emit = function emit(type) {
                var args = [];
                for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
                var doError = type === "error";
                var events = this._events;
                if (events !== void 0) doError = doError && events.error === void 0;
                else if (!doError) return false;
                if (doError) {
                  var er;
                  if (args.length > 0) er = args[0];
                  if (er instanceof Error) {
                    throw er;
                  }
                  var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
                  err.context = er;
                  throw err;
                }
                var handler = events[type];
                if (handler === void 0) return false;
                if (typeof handler === "function") {
                  ReflectApply(handler, this, args);
                } else {
                  var len = handler.length;
                  var listeners = arrayClone(handler, len);
                  for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
                }
                return true;
              };
              function _addListener(target, type, listener, prepend) {
                var m;
                var events;
                var existing;
                if (typeof listener !== "function") {
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
                }
                events = target._events;
                if (events === void 0) {
                  events = target._events = /* @__PURE__ */ Object.create(null);
                  target._eventsCount = 0;
                } else {
                  if (events.newListener !== void 0) {
                    target.emit("newListener", type, listener.listener ? listener.listener : listener);
                    events = target._events;
                  }
                  existing = events[type];
                }
                if (existing === void 0) {
                  existing = events[type] = listener;
                  ++target._eventsCount;
                } else {
                  if (typeof existing === "function") {
                    existing = events[type] = prepend ? [listener, existing] : [existing, listener];
                  } else if (prepend) {
                    existing.unshift(listener);
                  } else {
                    existing.push(listener);
                  }
                  m = $getMaxListeners(target);
                  if (m > 0 && existing.length > m && !existing.warned) {
                    existing.warned = true;
                    var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    w.name = "MaxListenersExceededWarning";
                    w.emitter = target;
                    w.type = type;
                    w.count = existing.length;
                    ProcessEmitWarning(w);
                  }
                }
                return target;
              }
              EventEmitter.prototype.addListener = function addListener(type, listener) {
                return _addListener(this, type, listener, false);
              };
              EventEmitter.prototype.on = EventEmitter.prototype.addListener;
              EventEmitter.prototype.prependListener = function prependListener(type, listener) {
                return _addListener(this, type, listener, true);
              };
              function onceWrapper() {
                var args = [];
                for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
                if (!this.fired) {
                  this.target.removeListener(this.type, this.wrapFn);
                  this.fired = true;
                  ReflectApply(this.listener, this.target, args);
                }
              }
              function _onceWrap(target, type, listener) {
                var state = {
                  fired: false,
                  wrapFn: void 0,
                  target,
                  type,
                  listener
                };
                var wrapped = onceWrapper.bind(state);
                wrapped.listener = listener;
                state.wrapFn = wrapped;
                return wrapped;
              }
              EventEmitter.prototype.once = function once(type, listener) {
                if (typeof listener !== "function") {
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
                }
                this.on(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
                if (typeof listener !== "function") {
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
                }
                this.prependListener(type, _onceWrap(this, type, listener));
                return this;
              };
              EventEmitter.prototype.removeListener = function removeListener(type, listener) {
                var list, events, position, i, originalListener;
                if (typeof listener !== "function") {
                  throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(listener));
                }
                events = this._events;
                if (events === void 0) return this;
                list = events[type];
                if (list === void 0) return this;
                if (list === listener || list.listener === listener) {
                  if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
                  else {
                    delete events[type];
                    if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
                  }
                } else if (typeof list !== "function") {
                  position = -1;
                  for (i = list.length - 1; i >= 0; i--) {
                    if (list[i] === listener || list[i].listener === listener) {
                      originalListener = list[i].listener;
                      position = i;
                      break;
                    }
                  }
                  if (position < 0) return this;
                  if (position === 0) list.shift();
                  else {
                    spliceOne(list, position);
                  }
                  if (list.length === 1) events[type] = list[0];
                  if (events.removeListener !== void 0) this.emit("removeListener", type, originalListener || listener);
                }
                return this;
              };
              EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
              EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
                var listeners, events, i;
                events = this._events;
                if (events === void 0) return this;
                if (events.removeListener === void 0) {
                  if (arguments.length === 0) {
                    this._events = /* @__PURE__ */ Object.create(null);
                    this._eventsCount = 0;
                  } else if (events[type] !== void 0) {
                    if (--this._eventsCount === 0) this._events = /* @__PURE__ */ Object.create(null);
                    else delete events[type];
                  }
                  return this;
                }
                if (arguments.length === 0) {
                  var keys = Object.keys(events);
                  var key;
                  for (i = 0; i < keys.length; ++i) {
                    key = keys[i];
                    if (key === "removeListener") continue;
                    this.removeAllListeners(key);
                  }
                  this.removeAllListeners("removeListener");
                  this._events = /* @__PURE__ */ Object.create(null);
                  this._eventsCount = 0;
                  return this;
                }
                listeners = events[type];
                if (typeof listeners === "function") {
                  this.removeListener(type, listeners);
                } else if (listeners !== void 0) {
                  for (i = listeners.length - 1; i >= 0; i--) {
                    this.removeListener(type, listeners[i]);
                  }
                }
                return this;
              };
              function _listeners(target, type, unwrap) {
                var events = target._events;
                if (events === void 0) return [];
                var evlistener = events[type];
                if (evlistener === void 0) return [];
                if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
                return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
              }
              EventEmitter.prototype.listeners = function listeners(type) {
                return _listeners(this, type, true);
              };
              EventEmitter.prototype.rawListeners = function rawListeners(type) {
                return _listeners(this, type, false);
              };
              EventEmitter.listenerCount = function(emitter, type) {
                if (typeof emitter.listenerCount === "function") {
                  return emitter.listenerCount(type);
                } else {
                  return listenerCount.call(emitter, type);
                }
              };
              EventEmitter.prototype.listenerCount = listenerCount;
              function listenerCount(type) {
                var events = this._events;
                if (events !== void 0) {
                  var evlistener = events[type];
                  if (typeof evlistener === "function") {
                    return 1;
                  } else if (evlistener !== void 0) {
                    return evlistener.length;
                  }
                }
                return 0;
              }
              EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
              };
              function arrayClone(arr, n) {
                var copy = new Array(n);
                for (var i = 0; i < n; ++i) copy[i] = arr[i];
                return copy;
              }
              function spliceOne(list, index) {
                for (; index + 1 < list.length; index++) list[index] = list[index + 1];
                list.pop();
              }
              function unwrapListeners(arr) {
                var ret = new Array(arr.length);
                for (var i = 0; i < ret.length; ++i) {
                  ret[i] = arr[i].listener || arr[i];
                }
                return ret;
              }
            })
          ),
          /***/
          "./node_modules/https-browserify/index.js": (
            /*!************************************************!*\
              !*** ./node_modules/https-browserify/index.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var http = __webpack_require__(
                /*! http */
                "./node_modules/stream-http/index.js"
              );
              var url = __webpack_require__(
                /*! url */
                "./node_modules/url/url.js"
              );
              var https = module2.exports;
              for (var key in http) {
                if (http.hasOwnProperty(key)) https[key] = http[key];
              }
              https.request = function(params, cb) {
                params = validateParams(params);
                return http.request.call(this, params, cb);
              };
              https.get = function(params, cb) {
                params = validateParams(params);
                return http.get.call(this, params, cb);
              };
              function validateParams(params) {
                if (typeof params === "string") {
                  params = url.parse(params);
                }
                if (!params.protocol) {
                  params.protocol = "https:";
                }
                if (params.protocol !== "https:") {
                  throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"');
                }
                return params;
              }
            })
          ),
          /***/
          "./node_modules/ieee754/index.js": (
            /*!***************************************!*\
              !*** ./node_modules/ieee754/index.js ***!
              \***************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              exports2.read = function(buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
                }
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
                }
                if (e === 0) {
                  e = 1 - eBias;
                } else if (e === eMax) {
                  return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                  m = m + Math.pow(2, mLen);
                  e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
              };
              exports2.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                  m = isNaN(value) ? 1 : 0;
                  e = eMax;
                } else {
                  e = Math.floor(Math.log(value) / Math.LN2);
                  if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                  }
                  if (e + eBias >= 1) {
                    value += rt / c;
                  } else {
                    value += rt * Math.pow(2, 1 - eBias);
                  }
                  if (value * c >= 2) {
                    e++;
                    c /= 2;
                  }
                  if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                  } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                  } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                  }
                }
                for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
                }
                e = e << mLen | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
                }
                buffer[offset + i - d] |= s * 128;
              };
            })
          ),
          /***/
          "./node_modules/inherits/inherits_browser.js": (
            /*!***************************************************!*\
              !*** ./node_modules/inherits/inherits_browser.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              if (typeof Object.create === "function") {
                module2.exports = function inherits(ctor, superCtor) {
                  ctor.super_ = superCtor;
                  ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                      value: ctor,
                      enumerable: false,
                      writable: true,
                      configurable: true
                    }
                  });
                };
              } else {
                module2.exports = function inherits(ctor, superCtor) {
                  ctor.super_ = superCtor;
                  var TempCtor = function TempCtor2() {
                  };
                  TempCtor.prototype = superCtor.prototype;
                  ctor.prototype = new TempCtor();
                  ctor.prototype.constructor = ctor;
                };
              }
            })
          ),
          /***/
          "./node_modules/isarray/index.js": (
            /*!***************************************!*\
              !*** ./node_modules/isarray/index.js ***!
              \***************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              var toString = {}.toString;
              module2.exports = Array.isArray || function(arr) {
                return toString.call(arr) == "[object Array]";
              };
            })
          ),
          /***/
          "./node_modules/node-libs-browser/node_modules/punycode/punycode.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(module3, global) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                    return typeof obj2;
                  } : function(obj2) {
                    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  }, _typeof(obj);
                }
                (function(root) {
                  var freeExports = _typeof(exports2) == "object" && exports2 && !exports2.nodeType && exports2;
                  var freeModule = _typeof(module3) == "object" && module3 && !module3.nodeType && module3;
                  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global;
                  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
                    root = freeGlobal;
                  }
                  var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
                    "overflow": "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                  }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
                  function error(type) {
                    throw new RangeError(errors[type]);
                  }
                  function map(array, fn) {
                    var length = array.length;
                    var result = [];
                    while (length--) {
                      result[length] = fn(array[length]);
                    }
                    return result;
                  }
                  function mapDomain(string, fn) {
                    var parts = string.split("@");
                    var result = "";
                    if (parts.length > 1) {
                      result = parts[0] + "@";
                      string = parts[1];
                    }
                    string = string.replace(regexSeparators, ".");
                    var labels = string.split(".");
                    var encoded = map(labels, fn).join(".");
                    return result + encoded;
                  }
                  function ucs2decode(string) {
                    var output = [], counter = 0, length = string.length, value, extra;
                    while (counter < length) {
                      value = string.charCodeAt(counter++);
                      if (value >= 55296 && value <= 56319 && counter < length) {
                        extra = string.charCodeAt(counter++);
                        if ((extra & 64512) == 56320) {
                          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                        } else {
                          output.push(value);
                          counter--;
                        }
                      } else {
                        output.push(value);
                      }
                    }
                    return output;
                  }
                  function ucs2encode(array) {
                    return map(array, function(value) {
                      var output = "";
                      if (value > 65535) {
                        value -= 65536;
                        output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                        value = 56320 | value & 1023;
                      }
                      output += stringFromCharCode(value);
                      return output;
                    }).join("");
                  }
                  function basicToDigit(codePoint) {
                    if (codePoint - 48 < 10) {
                      return codePoint - 22;
                    }
                    if (codePoint - 65 < 26) {
                      return codePoint - 65;
                    }
                    if (codePoint - 97 < 26) {
                      return codePoint - 97;
                    }
                    return base;
                  }
                  function digitToBasic(digit, flag) {
                    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
                  }
                  function adapt(delta, numPoints, firstTime) {
                    var k = 0;
                    delta = firstTime ? floor(delta / damp) : delta >> 1;
                    delta += floor(delta / numPoints);
                    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
                      delta = floor(delta / baseMinusTMin);
                    }
                    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
                  }
                  function decode(input) {
                    var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
                    basic = input.lastIndexOf(delimiter);
                    if (basic < 0) {
                      basic = 0;
                    }
                    for (j = 0; j < basic; ++j) {
                      if (input.charCodeAt(j) >= 128) {
                        error("not-basic");
                      }
                      output.push(input.charCodeAt(j));
                    }
                    for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
                      for (oldi = i, w = 1, k = base; ; k += base) {
                        if (index >= inputLength) {
                          error("invalid-input");
                        }
                        digit = basicToDigit(input.charCodeAt(index++));
                        if (digit >= base || digit > floor((maxInt - i) / w)) {
                          error("overflow");
                        }
                        i += digit * w;
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (digit < t) {
                          break;
                        }
                        baseMinusT = base - t;
                        if (w > floor(maxInt / baseMinusT)) {
                          error("overflow");
                        }
                        w *= baseMinusT;
                      }
                      out = output.length + 1;
                      bias = adapt(i - oldi, out, oldi == 0);
                      if (floor(i / out) > maxInt - n) {
                        error("overflow");
                      }
                      n += floor(i / out);
                      i %= out;
                      output.splice(i++, 0, n);
                    }
                    return ucs2encode(output);
                  }
                  function encode(input) {
                    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
                    input = ucs2decode(input);
                    inputLength = input.length;
                    n = initialN;
                    delta = 0;
                    bias = initialBias;
                    for (j = 0; j < inputLength; ++j) {
                      currentValue = input[j];
                      if (currentValue < 128) {
                        output.push(stringFromCharCode(currentValue));
                      }
                    }
                    handledCPCount = basicLength = output.length;
                    if (basicLength) {
                      output.push(delimiter);
                    }
                    while (handledCPCount < inputLength) {
                      for (m = maxInt, j = 0; j < inputLength; ++j) {
                        currentValue = input[j];
                        if (currentValue >= n && currentValue < m) {
                          m = currentValue;
                        }
                      }
                      handledCPCountPlusOne = handledCPCount + 1;
                      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                        error("overflow");
                      }
                      delta += (m - n) * handledCPCountPlusOne;
                      n = m;
                      for (j = 0; j < inputLength; ++j) {
                        currentValue = input[j];
                        if (currentValue < n && ++delta > maxInt) {
                          error("overflow");
                        }
                        if (currentValue == n) {
                          for (q = delta, k = base; ; k += base) {
                            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                            if (q < t) {
                              break;
                            }
                            qMinusT = q - t;
                            baseMinusT = base - t;
                            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                            q = floor(qMinusT / baseMinusT);
                          }
                          output.push(stringFromCharCode(digitToBasic(q, 0)));
                          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                          delta = 0;
                          ++handledCPCount;
                        }
                      }
                      ++delta;
                      ++n;
                    }
                    return output.join("");
                  }
                  function toUnicode(input) {
                    return mapDomain(input, function(string) {
                      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
                    });
                  }
                  function toASCII(input) {
                    return mapDomain(input, function(string) {
                      return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
                    });
                  }
                  punycode = {
                    /**
                     * A string representing the current Punycode.js version number.
                     * @memberOf punycode
                     * @type String
                     */
                    "version": "1.4.1",
                    /**
                     * An object of methods to convert from JavaScript's internal character
                     * representation (UCS-2) to Unicode code points, and back.
                     * @see <https://mathiasbynens.be/notes/javascript-encoding>
                     * @memberOf punycode
                     * @type Object
                     */
                    "ucs2": {
                      "decode": ucs2decode,
                      "encode": ucs2encode
                    },
                    "decode": decode,
                    "encode": encode,
                    "toASCII": toASCII,
                    "toUnicode": toUnicode
                  };
                  if (_typeof(__webpack_require__(
                    /*! !webpack amd options */
                    "./node_modules/webpack/buildin/amd-options.js"
                  )) == "object" && __webpack_require__(
                    /*! !webpack amd options */
                    "./node_modules/webpack/buildin/amd-options.js"
                  )) {
                    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                      return punycode;
                    }).call(exports2, __webpack_require__, exports2, module3), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module3.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                  } else if (freeExports && freeModule) {
                    if (module3.exports == freeExports) {
                      freeModule.exports = punycode;
                    } else {
                      for (key in punycode) {
                        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                      }
                    }
                  } else {
                    root.punycode = punycode;
                  }
                })(this);
              }).call(this, __webpack_require__(
                /*! ./../../../webpack/buildin/module.js */
                "./node_modules/webpack/buildin/module.js"
              )(module2), __webpack_require__(
                /*! ./../../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/process-nextick-args/index.js": (
            /*!****************************************************!*\
              !*** ./node_modules/process-nextick-args/index.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(process) {
                if (!process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
                  module2.exports = {
                    nextTick
                  };
                } else {
                  module2.exports = process;
                }
                function nextTick(fn, arg1, arg2, arg3) {
                  if (typeof fn !== "function") {
                    throw new TypeError('"callback" argument must be a function');
                  }
                  var len = arguments.length;
                  var args, i;
                  switch (len) {
                    case 0:
                    case 1:
                      return process.nextTick(fn);
                    case 2:
                      return process.nextTick(function afterTickOne() {
                        fn.call(null, arg1);
                      });
                    case 3:
                      return process.nextTick(function afterTickTwo() {
                        fn.call(null, arg1, arg2);
                      });
                    case 4:
                      return process.nextTick(function afterTickThree() {
                        fn.call(null, arg1, arg2, arg3);
                      });
                    default:
                      args = new Array(len - 1);
                      i = 0;
                      while (i < args.length) {
                        args[i++] = arguments[i];
                      }
                      return process.nextTick(function afterTick() {
                        fn.apply(null, args);
                      });
                  }
                }
              }).call(this, __webpack_require__(
                /*! ./../process/browser.js */
                "./node_modules/process/browser.js"
              ));
            })
          ),
          /***/
          "./node_modules/process/browser.js": (
            /*!*****************************************!*\
              !*** ./node_modules/process/browser.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              var process = module2.exports = {};
              var cachedSetTimeout;
              var cachedClearTimeout;
              function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
              }
              function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
              }
              (function() {
                try {
                  if (typeof setTimeout === "function") {
                    cachedSetTimeout = setTimeout;
                  } else {
                    cachedSetTimeout = defaultSetTimout;
                  }
                } catch (e) {
                  cachedSetTimeout = defaultSetTimout;
                }
                try {
                  if (typeof clearTimeout === "function") {
                    cachedClearTimeout = clearTimeout;
                  } else {
                    cachedClearTimeout = defaultClearTimeout;
                  }
                } catch (e) {
                  cachedClearTimeout = defaultClearTimeout;
                }
              })();
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                  cachedSetTimeout = setTimeout;
                  return setTimeout(fun, 0);
                }
                try {
                  return cachedSetTimeout(fun, 0);
                } catch (e) {
                  try {
                    return cachedSetTimeout.call(null, fun, 0);
                  } catch (e2) {
                    return cachedSetTimeout.call(this, fun, 0);
                  }
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                  cachedClearTimeout = clearTimeout;
                  return clearTimeout(marker);
                }
                try {
                  return cachedClearTimeout(marker);
                } catch (e) {
                  try {
                    return cachedClearTimeout.call(null, marker);
                  } catch (e2) {
                    return cachedClearTimeout.call(this, marker);
                  }
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;
              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }
              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }
              process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function() {
                this.fun.apply(null, this.array);
              };
              process.title = "browser";
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = "";
              process.versions = {};
              function noop() {
              }
              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;
              process.prependListener = noop;
              process.prependOnceListener = noop;
              process.listeners = function(name) {
                return [];
              };
              process.binding = function(name) {
                throw new Error("process.binding is not supported");
              };
              process.cwd = function() {
                return "/";
              };
              process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
              };
              process.umask = function() {
                return 0;
              };
            })
          ),
          /***/
          "./node_modules/querystring-es3/decode.js": (
            /*!************************************************!*\
              !*** ./node_modules/querystring-es3/decode.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function hasOwnProperty(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              }
              module2.exports = function(qs, sep, eq, options) {
                sep = sep || "&";
                eq = eq || "=";
                var obj = {};
                if (typeof qs !== "string" || qs.length === 0) {
                  return obj;
                }
                var regexp = /\+/g;
                qs = qs.split(sep);
                var maxKeys = 1e3;
                if (options && typeof options.maxKeys === "number") {
                  maxKeys = options.maxKeys;
                }
                var len = qs.length;
                if (maxKeys > 0 && len > maxKeys) {
                  len = maxKeys;
                }
                for (var i = 0; i < len; ++i) {
                  var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
                  if (idx >= 0) {
                    kstr = x.substr(0, idx);
                    vstr = x.substr(idx + 1);
                  } else {
                    kstr = x;
                    vstr = "";
                  }
                  k = decodeURIComponent(kstr);
                  v = decodeURIComponent(vstr);
                  if (!hasOwnProperty(obj, k)) {
                    obj[k] = v;
                  } else if (isArray(obj[k])) {
                    obj[k].push(v);
                  } else {
                    obj[k] = [obj[k], v];
                  }
                }
                return obj;
              };
              var isArray = Array.isArray || function(xs) {
                return Object.prototype.toString.call(xs) === "[object Array]";
              };
            })
          ),
          /***/
          "./node_modules/querystring-es3/encode.js": (
            /*!************************************************!*\
              !*** ./node_modules/querystring-es3/encode.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              var stringifyPrimitive = function stringifyPrimitive2(v) {
                switch (_typeof(v)) {
                  case "string":
                    return v;
                  case "boolean":
                    return v ? "true" : "false";
                  case "number":
                    return isFinite(v) ? v : "";
                  default:
                    return "";
                }
              };
              module2.exports = function(obj, sep, eq, name) {
                sep = sep || "&";
                eq = eq || "=";
                if (obj === null) {
                  obj = void 0;
                }
                if (_typeof(obj) === "object") {
                  return map(objectKeys(obj), function(k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                    if (isArray(obj[k])) {
                      return map(obj[k], function(v) {
                        return ks + encodeURIComponent(stringifyPrimitive(v));
                      }).join(sep);
                    } else {
                      return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
                    }
                  }).join(sep);
                }
                if (!name) return "";
                return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
              };
              var isArray = Array.isArray || function(xs) {
                return Object.prototype.toString.call(xs) === "[object Array]";
              };
              function map(xs, f) {
                if (xs.map) return xs.map(f);
                var res = [];
                for (var i = 0; i < xs.length; i++) {
                  res.push(f(xs[i], i));
                }
                return res;
              }
              var objectKeys = Object.keys || function(obj) {
                var res = [];
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
                }
                return res;
              };
            })
          ),
          /***/
          "./node_modules/querystring-es3/index.js": (
            /*!***********************************************!*\
              !*** ./node_modules/querystring-es3/index.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              exports2.decode = exports2.parse = __webpack_require__(
                /*! ./decode */
                "./node_modules/querystring-es3/decode.js"
              );
              exports2.encode = exports2.stringify = __webpack_require__(
                /*! ./encode */
                "./node_modules/querystring-es3/encode.js"
              );
            })
          ),
          /***/
          "./node_modules/readable-stream/duplex-browser.js": (
            /*!********************************************************!*\
              !*** ./node_modules/readable-stream/duplex-browser.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./lib/_stream_duplex.js */
                "./node_modules/readable-stream/lib/_stream_duplex.js"
              );
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/_stream_duplex.js": (
            /*!************************************************************!*\
              !*** ./node_modules/readable-stream/lib/_stream_duplex.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var pna = __webpack_require__(
                /*! process-nextick-args */
                "./node_modules/process-nextick-args/index.js"
              );
              var objectKeys = Object.keys || function(obj) {
                var keys2 = [];
                for (var key in obj) {
                  keys2.push(key);
                }
                return keys2;
              };
              module2.exports = Duplex;
              var util = __webpack_require__(
                /*! core-util-is */
                "./node_modules/core-util-is/lib/util.js"
              );
              util.inherits = __webpack_require__(
                /*! inherits */
                "./node_modules/inherits/inherits_browser.js"
              );
              var Readable = __webpack_require__(
                /*! ./_stream_readable */
                "./node_modules/readable-stream/lib/_stream_readable.js"
              );
              var Writable = __webpack_require__(
                /*! ./_stream_writable */
                "./node_modules/readable-stream/lib/_stream_writable.js"
              );
              util.inherits(Duplex, Readable);
              {
                var keys = objectKeys(Writable.prototype);
                for (var v = 0; v < keys.length; v++) {
                  var method = keys[v];
                  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
                }
              }
              function Duplex(options) {
                if (!(this instanceof Duplex)) return new Duplex(options);
                Readable.call(this, options);
                Writable.call(this, options);
                if (options && options.readable === false) this.readable = false;
                if (options && options.writable === false) this.writable = false;
                this.allowHalfOpen = true;
                if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
                this.once("end", onend);
              }
              Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
                // making it explicit this property is not enumerable
                // because otherwise some prototype manipulation in
                // userland will fail
                enumerable: false,
                get: function get() {
                  return this._writableState.highWaterMark;
                }
              });
              function onend() {
                if (this.allowHalfOpen || this._writableState.ended) return;
                pna.nextTick(onEndNT, this);
              }
              function onEndNT(self2) {
                self2.end();
              }
              Object.defineProperty(Duplex.prototype, "destroyed", {
                get: function get() {
                  if (this._readableState === void 0 || this._writableState === void 0) {
                    return false;
                  }
                  return this._readableState.destroyed && this._writableState.destroyed;
                },
                set: function set(value) {
                  if (this._readableState === void 0 || this._writableState === void 0) {
                    return;
                  }
                  this._readableState.destroyed = value;
                  this._writableState.destroyed = value;
                }
              });
              Duplex.prototype._destroy = function(err, cb) {
                this.push(null);
                this.end();
                pna.nextTick(cb, err);
              };
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/_stream_passthrough.js": (
            /*!*****************************************************************!*\
              !*** ./node_modules/readable-stream/lib/_stream_passthrough.js ***!
              \*****************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = PassThrough;
              var Transform = __webpack_require__(
                /*! ./_stream_transform */
                "./node_modules/readable-stream/lib/_stream_transform.js"
              );
              var util = __webpack_require__(
                /*! core-util-is */
                "./node_modules/core-util-is/lib/util.js"
              );
              util.inherits = __webpack_require__(
                /*! inherits */
                "./node_modules/inherits/inherits_browser.js"
              );
              util.inherits(PassThrough, Transform);
              function PassThrough(options) {
                if (!(this instanceof PassThrough)) return new PassThrough(options);
                Transform.call(this, options);
              }
              PassThrough.prototype._transform = function(chunk, encoding, cb) {
                cb(null, chunk);
              };
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/_stream_readable.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/readable-stream/lib/_stream_readable.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global, process) {
                var pna = __webpack_require__(
                  /*! process-nextick-args */
                  "./node_modules/process-nextick-args/index.js"
                );
                module2.exports = Readable;
                var isArray = __webpack_require__(
                  /*! isarray */
                  "./node_modules/isarray/index.js"
                );
                var Duplex;
                Readable.ReadableState = ReadableState;
                __webpack_require__(
                  /*! events */
                  "./node_modules/events/events.js"
                ).EventEmitter;
                var EElistenerCount = function EElistenerCount2(emitter, type) {
                  return emitter.listeners(type).length;
                };
                var Stream = __webpack_require__(
                  /*! ./internal/streams/stream */
                  "./node_modules/readable-stream/lib/internal/streams/stream-browser.js"
                );
                var Buffer = __webpack_require__(
                  /*! safe-buffer */
                  "./node_modules/safe-buffer/index.js"
                ).Buffer;
                var OurUint8Array = global.Uint8Array || function() {
                };
                function _uint8ArrayToBuffer(chunk) {
                  return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var util = __webpack_require__(
                  /*! core-util-is */
                  "./node_modules/core-util-is/lib/util.js"
                );
                util.inherits = __webpack_require__(
                  /*! inherits */
                  "./node_modules/inherits/inherits_browser.js"
                );
                var debugUtil = __webpack_require__(
                  /*! util */
                  0
                );
                var debug = void 0;
                if (debugUtil && debugUtil.debuglog) {
                  debug = debugUtil.debuglog("stream");
                } else {
                  debug = function debug2() {
                  };
                }
                var BufferList = __webpack_require__(
                  /*! ./internal/streams/BufferList */
                  "./node_modules/readable-stream/lib/internal/streams/BufferList.js"
                );
                var destroyImpl = __webpack_require__(
                  /*! ./internal/streams/destroy */
                  "./node_modules/readable-stream/lib/internal/streams/destroy.js"
                );
                var StringDecoder;
                util.inherits(Readable, Stream);
                var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
                function prependListener(emitter, event, fn) {
                  if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
                  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
                  else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
                  else emitter._events[event] = [fn, emitter._events[event]];
                }
                function ReadableState(options, stream) {
                  Duplex = Duplex || __webpack_require__(
                    /*! ./_stream_duplex */
                    "./node_modules/readable-stream/lib/_stream_duplex.js"
                  );
                  options = options || {};
                  var isDuplex = stream instanceof Duplex;
                  this.objectMode = !!options.objectMode;
                  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
                  var hwm = options.highWaterMark;
                  var readableHwm = options.readableHighWaterMark;
                  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                  if (hwm || hwm === 0) this.highWaterMark = hwm;
                  else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
                  else this.highWaterMark = defaultHwm;
                  this.highWaterMark = Math.floor(this.highWaterMark);
                  this.buffer = new BufferList();
                  this.length = 0;
                  this.pipes = null;
                  this.pipesCount = 0;
                  this.flowing = null;
                  this.ended = false;
                  this.endEmitted = false;
                  this.reading = false;
                  this.sync = true;
                  this.needReadable = false;
                  this.emittedReadable = false;
                  this.readableListening = false;
                  this.resumeScheduled = false;
                  this.destroyed = false;
                  this.defaultEncoding = options.defaultEncoding || "utf8";
                  this.awaitDrain = 0;
                  this.readingMore = false;
                  this.decoder = null;
                  this.encoding = null;
                  if (options.encoding) {
                    if (!StringDecoder) StringDecoder = __webpack_require__(
                      /*! string_decoder/ */
                      "./node_modules/string_decoder/lib/string_decoder.js"
                    ).StringDecoder;
                    this.decoder = new StringDecoder(options.encoding);
                    this.encoding = options.encoding;
                  }
                }
                function Readable(options) {
                  Duplex = Duplex || __webpack_require__(
                    /*! ./_stream_duplex */
                    "./node_modules/readable-stream/lib/_stream_duplex.js"
                  );
                  if (!(this instanceof Readable)) return new Readable(options);
                  this._readableState = new ReadableState(options, this);
                  this.readable = true;
                  if (options) {
                    if (typeof options.read === "function") this._read = options.read;
                    if (typeof options.destroy === "function") this._destroy = options.destroy;
                  }
                  Stream.call(this);
                }
                Object.defineProperty(Readable.prototype, "destroyed", {
                  get: function get() {
                    if (this._readableState === void 0) {
                      return false;
                    }
                    return this._readableState.destroyed;
                  },
                  set: function set(value) {
                    if (!this._readableState) {
                      return;
                    }
                    this._readableState.destroyed = value;
                  }
                });
                Readable.prototype.destroy = destroyImpl.destroy;
                Readable.prototype._undestroy = destroyImpl.undestroy;
                Readable.prototype._destroy = function(err, cb) {
                  this.push(null);
                  cb(err);
                };
                Readable.prototype.push = function(chunk, encoding) {
                  var state = this._readableState;
                  var skipChunkCheck;
                  if (!state.objectMode) {
                    if (typeof chunk === "string") {
                      encoding = encoding || state.defaultEncoding;
                      if (encoding !== state.encoding) {
                        chunk = Buffer.from(chunk, encoding);
                        encoding = "";
                      }
                      skipChunkCheck = true;
                    }
                  } else {
                    skipChunkCheck = true;
                  }
                  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
                };
                Readable.prototype.unshift = function(chunk) {
                  return readableAddChunk(this, chunk, null, true, false);
                };
                function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
                  var state = stream._readableState;
                  if (chunk === null) {
                    state.reading = false;
                    onEofChunk(stream, state);
                  } else {
                    var er;
                    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                    if (er) {
                      stream.emit("error", er);
                    } else if (state.objectMode || chunk && chunk.length > 0) {
                      if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                        chunk = _uint8ArrayToBuffer(chunk);
                      }
                      if (addToFront) {
                        if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
                        else addChunk(stream, state, chunk, true);
                      } else if (state.ended) {
                        stream.emit("error", new Error("stream.push() after EOF"));
                      } else {
                        state.reading = false;
                        if (state.decoder && !encoding) {
                          chunk = state.decoder.write(chunk);
                          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                          else maybeReadMore(stream, state);
                        } else {
                          addChunk(stream, state, chunk, false);
                        }
                      }
                    } else if (!addToFront) {
                      state.reading = false;
                    }
                  }
                  return needMoreData(state);
                }
                function addChunk(stream, state, chunk, addToFront) {
                  if (state.flowing && state.length === 0 && !state.sync) {
                    stream.emit("data", chunk);
                    stream.read(0);
                  } else {
                    state.length += state.objectMode ? 1 : chunk.length;
                    if (addToFront) state.buffer.unshift(chunk);
                    else state.buffer.push(chunk);
                    if (state.needReadable) emitReadable(stream);
                  }
                  maybeReadMore(stream, state);
                }
                function chunkInvalid(state, chunk) {
                  var er;
                  if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
                    er = new TypeError("Invalid non-string/buffer chunk");
                  }
                  return er;
                }
                function needMoreData(state) {
                  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
                }
                Readable.prototype.isPaused = function() {
                  return this._readableState.flowing === false;
                };
                Readable.prototype.setEncoding = function(enc) {
                  if (!StringDecoder) StringDecoder = __webpack_require__(
                    /*! string_decoder/ */
                    "./node_modules/string_decoder/lib/string_decoder.js"
                  ).StringDecoder;
                  this._readableState.decoder = new StringDecoder(enc);
                  this._readableState.encoding = enc;
                  return this;
                };
                var MAX_HWM = 8388608;
                function computeNewHighWaterMark(n) {
                  if (n >= MAX_HWM) {
                    n = MAX_HWM;
                  } else {
                    n--;
                    n |= n >>> 1;
                    n |= n >>> 2;
                    n |= n >>> 4;
                    n |= n >>> 8;
                    n |= n >>> 16;
                    n++;
                  }
                  return n;
                }
                function howMuchToRead(n, state) {
                  if (n <= 0 || state.length === 0 && state.ended) return 0;
                  if (state.objectMode) return 1;
                  if (n !== n) {
                    if (state.flowing && state.length) return state.buffer.head.data.length;
                    else return state.length;
                  }
                  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
                  if (n <= state.length) return n;
                  if (!state.ended) {
                    state.needReadable = true;
                    return 0;
                  }
                  return state.length;
                }
                Readable.prototype.read = function(n) {
                  debug("read", n);
                  n = parseInt(n, 10);
                  var state = this._readableState;
                  var nOrig = n;
                  if (n !== 0) state.emittedReadable = false;
                  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
                    debug("read: emitReadable", state.length, state.ended);
                    if (state.length === 0 && state.ended) endReadable(this);
                    else emitReadable(this);
                    return null;
                  }
                  n = howMuchToRead(n, state);
                  if (n === 0 && state.ended) {
                    if (state.length === 0) endReadable(this);
                    return null;
                  }
                  var doRead = state.needReadable;
                  debug("need readable", doRead);
                  if (state.length === 0 || state.length - n < state.highWaterMark) {
                    doRead = true;
                    debug("length less than watermark", doRead);
                  }
                  if (state.ended || state.reading) {
                    doRead = false;
                    debug("reading or ended", doRead);
                  } else if (doRead) {
                    debug("do read");
                    state.reading = true;
                    state.sync = true;
                    if (state.length === 0) state.needReadable = true;
                    this._read(state.highWaterMark);
                    state.sync = false;
                    if (!state.reading) n = howMuchToRead(nOrig, state);
                  }
                  var ret;
                  if (n > 0) ret = fromList(n, state);
                  else ret = null;
                  if (ret === null) {
                    state.needReadable = true;
                    n = 0;
                  } else {
                    state.length -= n;
                  }
                  if (state.length === 0) {
                    if (!state.ended) state.needReadable = true;
                    if (nOrig !== n && state.ended) endReadable(this);
                  }
                  if (ret !== null) this.emit("data", ret);
                  return ret;
                };
                function onEofChunk(stream, state) {
                  if (state.ended) return;
                  if (state.decoder) {
                    var chunk = state.decoder.end();
                    if (chunk && chunk.length) {
                      state.buffer.push(chunk);
                      state.length += state.objectMode ? 1 : chunk.length;
                    }
                  }
                  state.ended = true;
                  emitReadable(stream);
                }
                function emitReadable(stream) {
                  var state = stream._readableState;
                  state.needReadable = false;
                  if (!state.emittedReadable) {
                    debug("emitReadable", state.flowing);
                    state.emittedReadable = true;
                    if (state.sync) pna.nextTick(emitReadable_, stream);
                    else emitReadable_(stream);
                  }
                }
                function emitReadable_(stream) {
                  debug("emit readable");
                  stream.emit("readable");
                  flow(stream);
                }
                function maybeReadMore(stream, state) {
                  if (!state.readingMore) {
                    state.readingMore = true;
                    pna.nextTick(maybeReadMore_, stream, state);
                  }
                }
                function maybeReadMore_(stream, state) {
                  var len = state.length;
                  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
                    debug("maybeReadMore read 0");
                    stream.read(0);
                    if (len === state.length)
                      break;
                    else len = state.length;
                  }
                  state.readingMore = false;
                }
                Readable.prototype._read = function(n) {
                  this.emit("error", new Error("_read() is not implemented"));
                };
                Readable.prototype.pipe = function(dest, pipeOpts) {
                  var src = this;
                  var state = this._readableState;
                  switch (state.pipesCount) {
                    case 0:
                      state.pipes = dest;
                      break;
                    case 1:
                      state.pipes = [state.pipes, dest];
                      break;
                    default:
                      state.pipes.push(dest);
                      break;
                  }
                  state.pipesCount += 1;
                  debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
                  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
                  var endFn = doEnd ? onend : unpipe;
                  if (state.endEmitted) pna.nextTick(endFn);
                  else src.once("end", endFn);
                  dest.on("unpipe", onunpipe);
                  function onunpipe(readable, unpipeInfo) {
                    debug("onunpipe");
                    if (readable === src) {
                      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                        unpipeInfo.hasUnpiped = true;
                        cleanup();
                      }
                    }
                  }
                  function onend() {
                    debug("onend");
                    dest.end();
                  }
                  var ondrain = pipeOnDrain(src);
                  dest.on("drain", ondrain);
                  var cleanedUp = false;
                  function cleanup() {
                    debug("cleanup");
                    dest.removeListener("close", onclose);
                    dest.removeListener("finish", onfinish);
                    dest.removeListener("drain", ondrain);
                    dest.removeListener("error", onerror);
                    dest.removeListener("unpipe", onunpipe);
                    src.removeListener("end", onend);
                    src.removeListener("end", unpipe);
                    src.removeListener("data", ondata);
                    cleanedUp = true;
                    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
                  }
                  var increasedAwaitDrain = false;
                  src.on("data", ondata);
                  function ondata(chunk) {
                    debug("ondata");
                    increasedAwaitDrain = false;
                    var ret = dest.write(chunk);
                    if (false === ret && !increasedAwaitDrain) {
                      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                        debug("false write response, pause", src._readableState.awaitDrain);
                        src._readableState.awaitDrain++;
                        increasedAwaitDrain = true;
                      }
                      src.pause();
                    }
                  }
                  function onerror(er) {
                    debug("onerror", er);
                    unpipe();
                    dest.removeListener("error", onerror);
                    if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
                  }
                  prependListener(dest, "error", onerror);
                  function onclose() {
                    dest.removeListener("finish", onfinish);
                    unpipe();
                  }
                  dest.once("close", onclose);
                  function onfinish() {
                    debug("onfinish");
                    dest.removeListener("close", onclose);
                    unpipe();
                  }
                  dest.once("finish", onfinish);
                  function unpipe() {
                    debug("unpipe");
                    src.unpipe(dest);
                  }
                  dest.emit("pipe", src);
                  if (!state.flowing) {
                    debug("pipe resume");
                    src.resume();
                  }
                  return dest;
                };
                function pipeOnDrain(src) {
                  return function() {
                    var state = src._readableState;
                    debug("pipeOnDrain", state.awaitDrain);
                    if (state.awaitDrain) state.awaitDrain--;
                    if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
                      state.flowing = true;
                      flow(src);
                    }
                  };
                }
                Readable.prototype.unpipe = function(dest) {
                  var state = this._readableState;
                  var unpipeInfo = {
                    hasUnpiped: false
                  };
                  if (state.pipesCount === 0) return this;
                  if (state.pipesCount === 1) {
                    if (dest && dest !== state.pipes) return this;
                    if (!dest) dest = state.pipes;
                    state.pipes = null;
                    state.pipesCount = 0;
                    state.flowing = false;
                    if (dest) dest.emit("unpipe", this, unpipeInfo);
                    return this;
                  }
                  if (!dest) {
                    var dests = state.pipes;
                    var len = state.pipesCount;
                    state.pipes = null;
                    state.pipesCount = 0;
                    state.flowing = false;
                    for (var i = 0; i < len; i++) {
                      dests[i].emit("unpipe", this, unpipeInfo);
                    }
                    return this;
                  }
                  var index = indexOf(state.pipes, dest);
                  if (index === -1) return this;
                  state.pipes.splice(index, 1);
                  state.pipesCount -= 1;
                  if (state.pipesCount === 1) state.pipes = state.pipes[0];
                  dest.emit("unpipe", this, unpipeInfo);
                  return this;
                };
                Readable.prototype.on = function(ev, fn) {
                  var res = Stream.prototype.on.call(this, ev, fn);
                  if (ev === "data") {
                    if (this._readableState.flowing !== false) this.resume();
                  } else if (ev === "readable") {
                    var state = this._readableState;
                    if (!state.endEmitted && !state.readableListening) {
                      state.readableListening = state.needReadable = true;
                      state.emittedReadable = false;
                      if (!state.reading) {
                        pna.nextTick(nReadingNextTick, this);
                      } else if (state.length) {
                        emitReadable(this);
                      }
                    }
                  }
                  return res;
                };
                Readable.prototype.addListener = Readable.prototype.on;
                function nReadingNextTick(self2) {
                  debug("readable nexttick read 0");
                  self2.read(0);
                }
                Readable.prototype.resume = function() {
                  var state = this._readableState;
                  if (!state.flowing) {
                    debug("resume");
                    state.flowing = true;
                    resume(this, state);
                  }
                  return this;
                };
                function resume(stream, state) {
                  if (!state.resumeScheduled) {
                    state.resumeScheduled = true;
                    pna.nextTick(resume_, stream, state);
                  }
                }
                function resume_(stream, state) {
                  if (!state.reading) {
                    debug("resume read 0");
                    stream.read(0);
                  }
                  state.resumeScheduled = false;
                  state.awaitDrain = 0;
                  stream.emit("resume");
                  flow(stream);
                  if (state.flowing && !state.reading) stream.read(0);
                }
                Readable.prototype.pause = function() {
                  debug("call pause flowing=%j", this._readableState.flowing);
                  if (false !== this._readableState.flowing) {
                    debug("pause");
                    this._readableState.flowing = false;
                    this.emit("pause");
                  }
                  return this;
                };
                function flow(stream) {
                  var state = stream._readableState;
                  debug("flow", state.flowing);
                  while (state.flowing && stream.read() !== null) {
                  }
                }
                Readable.prototype.wrap = function(stream) {
                  var _this = this;
                  var state = this._readableState;
                  var paused = false;
                  stream.on("end", function() {
                    debug("wrapped end");
                    if (state.decoder && !state.ended) {
                      var chunk = state.decoder.end();
                      if (chunk && chunk.length) _this.push(chunk);
                    }
                    _this.push(null);
                  });
                  stream.on("data", function(chunk) {
                    debug("wrapped data");
                    if (state.decoder) chunk = state.decoder.write(chunk);
                    if (state.objectMode && (chunk === null || chunk === void 0)) return;
                    else if (!state.objectMode && (!chunk || !chunk.length)) return;
                    var ret = _this.push(chunk);
                    if (!ret) {
                      paused = true;
                      stream.pause();
                    }
                  });
                  for (var i in stream) {
                    if (this[i] === void 0 && typeof stream[i] === "function") {
                      this[i] = /* @__PURE__ */ (function(method) {
                        return function() {
                          return stream[method].apply(stream, arguments);
                        };
                      })(i);
                    }
                  }
                  for (var n = 0; n < kProxyEvents.length; n++) {
                    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
                  }
                  this._read = function(n2) {
                    debug("wrapped _read", n2);
                    if (paused) {
                      paused = false;
                      stream.resume();
                    }
                  };
                  return this;
                };
                Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
                  // making it explicit this property is not enumerable
                  // because otherwise some prototype manipulation in
                  // userland will fail
                  enumerable: false,
                  get: function get() {
                    return this._readableState.highWaterMark;
                  }
                });
                Readable._fromList = fromList;
                function fromList(n, state) {
                  if (state.length === 0) return null;
                  var ret;
                  if (state.objectMode) ret = state.buffer.shift();
                  else if (!n || n >= state.length) {
                    if (state.decoder) ret = state.buffer.join("");
                    else if (state.buffer.length === 1) ret = state.buffer.head.data;
                    else ret = state.buffer.concat(state.length);
                    state.buffer.clear();
                  } else {
                    ret = fromListPartial(n, state.buffer, state.decoder);
                  }
                  return ret;
                }
                function fromListPartial(n, list, hasStrings) {
                  var ret;
                  if (n < list.head.data.length) {
                    ret = list.head.data.slice(0, n);
                    list.head.data = list.head.data.slice(n);
                  } else if (n === list.head.data.length) {
                    ret = list.shift();
                  } else {
                    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
                  }
                  return ret;
                }
                function copyFromBufferString(n, list) {
                  var p = list.head;
                  var c = 1;
                  var ret = p.data;
                  n -= ret.length;
                  while (p = p.next) {
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                      if (nb === str.length) {
                        ++c;
                        if (p.next) list.head = p.next;
                        else list.head = list.tail = null;
                      } else {
                        list.head = p;
                        p.data = str.slice(nb);
                      }
                      break;
                    }
                    ++c;
                  }
                  list.length -= c;
                  return ret;
                }
                function copyFromBuffer(n, list) {
                  var ret = Buffer.allocUnsafe(n);
                  var p = list.head;
                  var c = 1;
                  p.data.copy(ret);
                  n -= p.data.length;
                  while (p = p.next) {
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                      if (nb === buf.length) {
                        ++c;
                        if (p.next) list.head = p.next;
                        else list.head = list.tail = null;
                      } else {
                        list.head = p;
                        p.data = buf.slice(nb);
                      }
                      break;
                    }
                    ++c;
                  }
                  list.length -= c;
                  return ret;
                }
                function endReadable(stream) {
                  var state = stream._readableState;
                  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                  if (!state.endEmitted) {
                    state.ended = true;
                    pna.nextTick(endReadableNT, state, stream);
                  }
                }
                function endReadableNT(state, stream) {
                  if (!state.endEmitted && state.length === 0) {
                    state.endEmitted = true;
                    stream.readable = false;
                    stream.emit("end");
                  }
                }
                function indexOf(xs, x) {
                  for (var i = 0, l = xs.length; i < l; i++) {
                    if (xs[i] === x) return i;
                  }
                  return -1;
                }
              }).call(this, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ), __webpack_require__(
                /*! ./../../process/browser.js */
                "./node_modules/process/browser.js"
              ));
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/_stream_transform.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/readable-stream/lib/_stream_transform.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = Transform;
              var Duplex = __webpack_require__(
                /*! ./_stream_duplex */
                "./node_modules/readable-stream/lib/_stream_duplex.js"
              );
              var util = __webpack_require__(
                /*! core-util-is */
                "./node_modules/core-util-is/lib/util.js"
              );
              util.inherits = __webpack_require__(
                /*! inherits */
                "./node_modules/inherits/inherits_browser.js"
              );
              util.inherits(Transform, Duplex);
              function afterTransform(er, data) {
                var ts = this._transformState;
                ts.transforming = false;
                var cb = ts.writecb;
                if (!cb) {
                  return this.emit("error", new Error("write callback called multiple times"));
                }
                ts.writechunk = null;
                ts.writecb = null;
                if (data != null)
                  this.push(data);
                cb(er);
                var rs = this._readableState;
                rs.reading = false;
                if (rs.needReadable || rs.length < rs.highWaterMark) {
                  this._read(rs.highWaterMark);
                }
              }
              function Transform(options) {
                if (!(this instanceof Transform)) return new Transform(options);
                Duplex.call(this, options);
                this._transformState = {
                  afterTransform: afterTransform.bind(this),
                  needTransform: false,
                  transforming: false,
                  writecb: null,
                  writechunk: null,
                  writeencoding: null
                };
                this._readableState.needReadable = true;
                this._readableState.sync = false;
                if (options) {
                  if (typeof options.transform === "function") this._transform = options.transform;
                  if (typeof options.flush === "function") this._flush = options.flush;
                }
                this.on("prefinish", prefinish);
              }
              function prefinish() {
                var _this = this;
                if (typeof this._flush === "function") {
                  this._flush(function(er, data) {
                    done(_this, er, data);
                  });
                } else {
                  done(this, null, null);
                }
              }
              Transform.prototype.push = function(chunk, encoding) {
                this._transformState.needTransform = false;
                return Duplex.prototype.push.call(this, chunk, encoding);
              };
              Transform.prototype._transform = function(chunk, encoding, cb) {
                throw new Error("_transform() is not implemented");
              };
              Transform.prototype._write = function(chunk, encoding, cb) {
                var ts = this._transformState;
                ts.writecb = cb;
                ts.writechunk = chunk;
                ts.writeencoding = encoding;
                if (!ts.transforming) {
                  var rs = this._readableState;
                  if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                }
              };
              Transform.prototype._read = function(n) {
                var ts = this._transformState;
                if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
                  ts.transforming = true;
                  this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
                } else {
                  ts.needTransform = true;
                }
              };
              Transform.prototype._destroy = function(err, cb) {
                var _this2 = this;
                Duplex.prototype._destroy.call(this, err, function(err2) {
                  cb(err2);
                  _this2.emit("close");
                });
              };
              function done(stream, er, data) {
                if (er) return stream.emit("error", er);
                if (data != null)
                  stream.push(data);
                if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
                if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
                return stream.push(null);
              }
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/_stream_writable.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/readable-stream/lib/_stream_writable.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(process, setImmediate, global) {
                var pna = __webpack_require__(
                  /*! process-nextick-args */
                  "./node_modules/process-nextick-args/index.js"
                );
                module2.exports = Writable;
                function CorkedRequest(state) {
                  var _this = this;
                  this.next = null;
                  this.entry = null;
                  this.finish = function() {
                    onCorkedFinish(_this, state);
                  };
                }
                var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
                var Duplex;
                Writable.WritableState = WritableState;
                var util = __webpack_require__(
                  /*! core-util-is */
                  "./node_modules/core-util-is/lib/util.js"
                );
                util.inherits = __webpack_require__(
                  /*! inherits */
                  "./node_modules/inherits/inherits_browser.js"
                );
                var internalUtil = {
                  deprecate: __webpack_require__(
                    /*! util-deprecate */
                    "./node_modules/util-deprecate/browser.js"
                  )
                };
                var Stream = __webpack_require__(
                  /*! ./internal/streams/stream */
                  "./node_modules/readable-stream/lib/internal/streams/stream-browser.js"
                );
                var Buffer = __webpack_require__(
                  /*! safe-buffer */
                  "./node_modules/safe-buffer/index.js"
                ).Buffer;
                var OurUint8Array = global.Uint8Array || function() {
                };
                function _uint8ArrayToBuffer(chunk) {
                  return Buffer.from(chunk);
                }
                function _isUint8Array(obj) {
                  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var destroyImpl = __webpack_require__(
                  /*! ./internal/streams/destroy */
                  "./node_modules/readable-stream/lib/internal/streams/destroy.js"
                );
                util.inherits(Writable, Stream);
                function nop() {
                }
                function WritableState(options, stream) {
                  Duplex = Duplex || __webpack_require__(
                    /*! ./_stream_duplex */
                    "./node_modules/readable-stream/lib/_stream_duplex.js"
                  );
                  options = options || {};
                  var isDuplex = stream instanceof Duplex;
                  this.objectMode = !!options.objectMode;
                  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
                  var hwm = options.highWaterMark;
                  var writableHwm = options.writableHighWaterMark;
                  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                  if (hwm || hwm === 0) this.highWaterMark = hwm;
                  else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
                  else this.highWaterMark = defaultHwm;
                  this.highWaterMark = Math.floor(this.highWaterMark);
                  this.finalCalled = false;
                  this.needDrain = false;
                  this.ending = false;
                  this.ended = false;
                  this.finished = false;
                  this.destroyed = false;
                  var noDecode = options.decodeStrings === false;
                  this.decodeStrings = !noDecode;
                  this.defaultEncoding = options.defaultEncoding || "utf8";
                  this.length = 0;
                  this.writing = false;
                  this.corked = 0;
                  this.sync = true;
                  this.bufferProcessing = false;
                  this.onwrite = function(er) {
                    onwrite(stream, er);
                  };
                  this.writecb = null;
                  this.writelen = 0;
                  this.bufferedRequest = null;
                  this.lastBufferedRequest = null;
                  this.pendingcb = 0;
                  this.prefinished = false;
                  this.errorEmitted = false;
                  this.bufferedRequestCount = 0;
                  this.corkedRequestsFree = new CorkedRequest(this);
                }
                WritableState.prototype.getBuffer = function getBuffer() {
                  var current = this.bufferedRequest;
                  var out = [];
                  while (current) {
                    out.push(current);
                    current = current.next;
                  }
                  return out;
                };
                (function() {
                  try {
                    Object.defineProperty(WritableState.prototype, "buffer", {
                      get: internalUtil.deprecate(function() {
                        return this.getBuffer();
                      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    });
                  } catch (_) {
                  }
                })();
                var realHasInstance;
                if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
                  realHasInstance = Function.prototype[Symbol.hasInstance];
                  Object.defineProperty(Writable, Symbol.hasInstance, {
                    value: function value(object) {
                      if (realHasInstance.call(this, object)) return true;
                      if (this !== Writable) return false;
                      return object && object._writableState instanceof WritableState;
                    }
                  });
                } else {
                  realHasInstance = function realHasInstance2(object) {
                    return object instanceof this;
                  };
                }
                function Writable(options) {
                  Duplex = Duplex || __webpack_require__(
                    /*! ./_stream_duplex */
                    "./node_modules/readable-stream/lib/_stream_duplex.js"
                  );
                  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
                    return new Writable(options);
                  }
                  this._writableState = new WritableState(options, this);
                  this.writable = true;
                  if (options) {
                    if (typeof options.write === "function") this._write = options.write;
                    if (typeof options.writev === "function") this._writev = options.writev;
                    if (typeof options.destroy === "function") this._destroy = options.destroy;
                    if (typeof options["final"] === "function") this._final = options["final"];
                  }
                  Stream.call(this);
                }
                Writable.prototype.pipe = function() {
                  this.emit("error", new Error("Cannot pipe, not readable"));
                };
                function writeAfterEnd(stream, cb) {
                  var er = new Error("write after end");
                  stream.emit("error", er);
                  pna.nextTick(cb, er);
                }
                function validChunk(stream, state, chunk, cb) {
                  var valid = true;
                  var er = false;
                  if (chunk === null) {
                    er = new TypeError("May not write null values to stream");
                  } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
                    er = new TypeError("Invalid non-string/buffer chunk");
                  }
                  if (er) {
                    stream.emit("error", er);
                    pna.nextTick(cb, er);
                    valid = false;
                  }
                  return valid;
                }
                Writable.prototype.write = function(chunk, encoding, cb) {
                  var state = this._writableState;
                  var ret = false;
                  var isBuf = !state.objectMode && _isUint8Array(chunk);
                  if (isBuf && !Buffer.isBuffer(chunk)) {
                    chunk = _uint8ArrayToBuffer(chunk);
                  }
                  if (typeof encoding === "function") {
                    cb = encoding;
                    encoding = null;
                  }
                  if (isBuf) encoding = "buffer";
                  else if (!encoding) encoding = state.defaultEncoding;
                  if (typeof cb !== "function") cb = nop;
                  if (state.ended) writeAfterEnd(this, cb);
                  else if (isBuf || validChunk(this, state, chunk, cb)) {
                    state.pendingcb++;
                    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                  }
                  return ret;
                };
                Writable.prototype.cork = function() {
                  var state = this._writableState;
                  state.corked++;
                };
                Writable.prototype.uncork = function() {
                  var state = this._writableState;
                  if (state.corked) {
                    state.corked--;
                    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
                  }
                };
                Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
                  if (typeof encoding === "string") encoding = encoding.toLowerCase();
                  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
                  this._writableState.defaultEncoding = encoding;
                  return this;
                };
                function decodeChunk(state, chunk, encoding) {
                  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
                    chunk = Buffer.from(chunk, encoding);
                  }
                  return chunk;
                }
                Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
                  // making it explicit this property is not enumerable
                  // because otherwise some prototype manipulation in
                  // userland will fail
                  enumerable: false,
                  get: function get() {
                    return this._writableState.highWaterMark;
                  }
                });
                function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                  if (!isBuf) {
                    var newChunk = decodeChunk(state, chunk, encoding);
                    if (chunk !== newChunk) {
                      isBuf = true;
                      encoding = "buffer";
                      chunk = newChunk;
                    }
                  }
                  var len = state.objectMode ? 1 : chunk.length;
                  state.length += len;
                  var ret = state.length < state.highWaterMark;
                  if (!ret) state.needDrain = true;
                  if (state.writing || state.corked) {
                    var last = state.lastBufferedRequest;
                    state.lastBufferedRequest = {
                      chunk,
                      encoding,
                      isBuf,
                      callback: cb,
                      next: null
                    };
                    if (last) {
                      last.next = state.lastBufferedRequest;
                    } else {
                      state.bufferedRequest = state.lastBufferedRequest;
                    }
                    state.bufferedRequestCount += 1;
                  } else {
                    doWrite(stream, state, false, len, chunk, encoding, cb);
                  }
                  return ret;
                }
                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                  state.writelen = len;
                  state.writecb = cb;
                  state.writing = true;
                  state.sync = true;
                  if (writev) stream._writev(chunk, state.onwrite);
                  else stream._write(chunk, encoding, state.onwrite);
                  state.sync = false;
                }
                function onwriteError(stream, state, sync, er, cb) {
                  --state.pendingcb;
                  if (sync) {
                    pna.nextTick(cb, er);
                    pna.nextTick(finishMaybe, stream, state);
                    stream._writableState.errorEmitted = true;
                    stream.emit("error", er);
                  } else {
                    cb(er);
                    stream._writableState.errorEmitted = true;
                    stream.emit("error", er);
                    finishMaybe(stream, state);
                  }
                }
                function onwriteStateUpdate(state) {
                  state.writing = false;
                  state.writecb = null;
                  state.length -= state.writelen;
                  state.writelen = 0;
                }
                function onwrite(stream, er) {
                  var state = stream._writableState;
                  var sync = state.sync;
                  var cb = state.writecb;
                  onwriteStateUpdate(state);
                  if (er) onwriteError(stream, state, sync, er, cb);
                  else {
                    var finished = needFinish(state);
                    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
                      clearBuffer(stream, state);
                    }
                    if (sync) {
                      asyncWrite(afterWrite, stream, state, finished, cb);
                    } else {
                      afterWrite(stream, state, finished, cb);
                    }
                  }
                }
                function afterWrite(stream, state, finished, cb) {
                  if (!finished) onwriteDrain(stream, state);
                  state.pendingcb--;
                  cb();
                  finishMaybe(stream, state);
                }
                function onwriteDrain(stream, state) {
                  if (state.length === 0 && state.needDrain) {
                    state.needDrain = false;
                    stream.emit("drain");
                  }
                }
                function clearBuffer(stream, state) {
                  state.bufferProcessing = true;
                  var entry = state.bufferedRequest;
                  if (stream._writev && entry && entry.next) {
                    var l = state.bufferedRequestCount;
                    var buffer = new Array(l);
                    var holder = state.corkedRequestsFree;
                    holder.entry = entry;
                    var count = 0;
                    var allBuffers = true;
                    while (entry) {
                      buffer[count] = entry;
                      if (!entry.isBuf) allBuffers = false;
                      entry = entry.next;
                      count += 1;
                    }
                    buffer.allBuffers = allBuffers;
                    doWrite(stream, state, true, state.length, buffer, "", holder.finish);
                    state.pendingcb++;
                    state.lastBufferedRequest = null;
                    if (holder.next) {
                      state.corkedRequestsFree = holder.next;
                      holder.next = null;
                    } else {
                      state.corkedRequestsFree = new CorkedRequest(state);
                    }
                    state.bufferedRequestCount = 0;
                  } else {
                    while (entry) {
                      var chunk = entry.chunk;
                      var encoding = entry.encoding;
                      var cb = entry.callback;
                      var len = state.objectMode ? 1 : chunk.length;
                      doWrite(stream, state, false, len, chunk, encoding, cb);
                      entry = entry.next;
                      state.bufferedRequestCount--;
                      if (state.writing) {
                        break;
                      }
                    }
                    if (entry === null) state.lastBufferedRequest = null;
                  }
                  state.bufferedRequest = entry;
                  state.bufferProcessing = false;
                }
                Writable.prototype._write = function(chunk, encoding, cb) {
                  cb(new Error("_write() is not implemented"));
                };
                Writable.prototype._writev = null;
                Writable.prototype.end = function(chunk, encoding, cb) {
                  var state = this._writableState;
                  if (typeof chunk === "function") {
                    cb = chunk;
                    chunk = null;
                    encoding = null;
                  } else if (typeof encoding === "function") {
                    cb = encoding;
                    encoding = null;
                  }
                  if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
                  if (state.corked) {
                    state.corked = 1;
                    this.uncork();
                  }
                  if (!state.ending && !state.finished) endWritable(this, state, cb);
                };
                function needFinish(state) {
                  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
                }
                function callFinal(stream, state) {
                  stream._final(function(err) {
                    state.pendingcb--;
                    if (err) {
                      stream.emit("error", err);
                    }
                    state.prefinished = true;
                    stream.emit("prefinish");
                    finishMaybe(stream, state);
                  });
                }
                function prefinish(stream, state) {
                  if (!state.prefinished && !state.finalCalled) {
                    if (typeof stream._final === "function") {
                      state.pendingcb++;
                      state.finalCalled = true;
                      pna.nextTick(callFinal, stream, state);
                    } else {
                      state.prefinished = true;
                      stream.emit("prefinish");
                    }
                  }
                }
                function finishMaybe(stream, state) {
                  var need = needFinish(state);
                  if (need) {
                    prefinish(stream, state);
                    if (state.pendingcb === 0) {
                      state.finished = true;
                      stream.emit("finish");
                    }
                  }
                  return need;
                }
                function endWritable(stream, state, cb) {
                  state.ending = true;
                  finishMaybe(stream, state);
                  if (cb) {
                    if (state.finished) pna.nextTick(cb);
                    else stream.once("finish", cb);
                  }
                  state.ended = true;
                  stream.writable = false;
                }
                function onCorkedFinish(corkReq, state, err) {
                  var entry = corkReq.entry;
                  corkReq.entry = null;
                  while (entry) {
                    var cb = entry.callback;
                    state.pendingcb--;
                    cb(err);
                    entry = entry.next;
                  }
                  if (state.corkedRequestsFree) {
                    state.corkedRequestsFree.next = corkReq;
                  } else {
                    state.corkedRequestsFree = corkReq;
                  }
                }
                Object.defineProperty(Writable.prototype, "destroyed", {
                  get: function get() {
                    if (this._writableState === void 0) {
                      return false;
                    }
                    return this._writableState.destroyed;
                  },
                  set: function set(value) {
                    if (!this._writableState) {
                      return;
                    }
                    this._writableState.destroyed = value;
                  }
                });
                Writable.prototype.destroy = destroyImpl.destroy;
                Writable.prototype._undestroy = destroyImpl.undestroy;
                Writable.prototype._destroy = function(err, cb) {
                  this.end();
                  cb(err);
                };
              }).call(this, __webpack_require__(
                /*! ./../../process/browser.js */
                "./node_modules/process/browser.js"
              ), __webpack_require__(
                /*! ./../../timers-browserify/main.js */
                "./node_modules/timers-browserify/main.js"
              ).setImmediate, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/internal/streams/BufferList.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/readable-stream/lib/internal/streams/BufferList.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              var Buffer = __webpack_require__(
                /*! safe-buffer */
                "./node_modules/safe-buffer/index.js"
              ).Buffer;
              var util = __webpack_require__(
                /*! util */
                1
              );
              function copyBuffer(src, target, offset) {
                src.copy(target, offset);
              }
              module2.exports = (function() {
                function BufferList() {
                  _classCallCheck(this, BufferList);
                  this.head = null;
                  this.tail = null;
                  this.length = 0;
                }
                BufferList.prototype.push = function push(v) {
                  var entry = {
                    data: v,
                    next: null
                  };
                  if (this.length > 0) this.tail.next = entry;
                  else this.head = entry;
                  this.tail = entry;
                  ++this.length;
                };
                BufferList.prototype.unshift = function unshift(v) {
                  var entry = {
                    data: v,
                    next: this.head
                  };
                  if (this.length === 0) this.tail = entry;
                  this.head = entry;
                  ++this.length;
                };
                BufferList.prototype.shift = function shift() {
                  if (this.length === 0) return;
                  var ret = this.head.data;
                  if (this.length === 1) this.head = this.tail = null;
                  else this.head = this.head.next;
                  --this.length;
                  return ret;
                };
                BufferList.prototype.clear = function clear() {
                  this.head = this.tail = null;
                  this.length = 0;
                };
                BufferList.prototype.join = function join(s) {
                  if (this.length === 0) return "";
                  var p = this.head;
                  var ret = "" + p.data;
                  while (p = p.next) {
                    ret += s + p.data;
                  }
                  return ret;
                };
                BufferList.prototype.concat = function concat(n) {
                  if (this.length === 0) return Buffer.alloc(0);
                  if (this.length === 1) return this.head.data;
                  var ret = Buffer.allocUnsafe(n >>> 0);
                  var p = this.head;
                  var i = 0;
                  while (p) {
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                  }
                  return ret;
                };
                return BufferList;
              })();
              if (util && util.inspect && util.inspect.custom) {
                module2.exports.prototype[util.inspect.custom] = function() {
                  var obj = util.inspect({
                    length: this.length
                  });
                  return this.constructor.name + " " + obj;
                };
              }
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/internal/streams/destroy.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/readable-stream/lib/internal/streams/destroy.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var pna = __webpack_require__(
                /*! process-nextick-args */
                "./node_modules/process-nextick-args/index.js"
              );
              function destroy(err, cb) {
                var _this = this;
                var readableDestroyed = this._readableState && this._readableState.destroyed;
                var writableDestroyed = this._writableState && this._writableState.destroyed;
                if (readableDestroyed || writableDestroyed) {
                  if (cb) {
                    cb(err);
                  } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
                    pna.nextTick(emitErrorNT, this, err);
                  }
                  return this;
                }
                if (this._readableState) {
                  this._readableState.destroyed = true;
                }
                if (this._writableState) {
                  this._writableState.destroyed = true;
                }
                this._destroy(err || null, function(err2) {
                  if (!cb && err2) {
                    pna.nextTick(emitErrorNT, _this, err2);
                    if (_this._writableState) {
                      _this._writableState.errorEmitted = true;
                    }
                  } else if (cb) {
                    cb(err2);
                  }
                });
                return this;
              }
              function undestroy() {
                if (this._readableState) {
                  this._readableState.destroyed = false;
                  this._readableState.reading = false;
                  this._readableState.ended = false;
                  this._readableState.endEmitted = false;
                }
                if (this._writableState) {
                  this._writableState.destroyed = false;
                  this._writableState.ended = false;
                  this._writableState.ending = false;
                  this._writableState.finished = false;
                  this._writableState.errorEmitted = false;
                }
              }
              function emitErrorNT(self2, err) {
                self2.emit("error", err);
              }
              module2.exports = {
                destroy,
                undestroy
              };
            })
          ),
          /***/
          "./node_modules/readable-stream/lib/internal/streams/stream-browser.js": (
            /*!*****************************************************************************!*\
              !*** ./node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
              \*****************************************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! events */
                "./node_modules/events/events.js"
              ).EventEmitter;
            })
          ),
          /***/
          "./node_modules/readable-stream/passthrough.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/readable-stream/passthrough.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./readable */
                "./node_modules/readable-stream/readable-browser.js"
              ).PassThrough;
            })
          ),
          /***/
          "./node_modules/readable-stream/readable-browser.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/readable-stream/readable-browser.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              exports2 = module2.exports = __webpack_require__(
                /*! ./lib/_stream_readable.js */
                "./node_modules/readable-stream/lib/_stream_readable.js"
              );
              exports2.Stream = exports2;
              exports2.Readable = exports2;
              exports2.Writable = __webpack_require__(
                /*! ./lib/_stream_writable.js */
                "./node_modules/readable-stream/lib/_stream_writable.js"
              );
              exports2.Duplex = __webpack_require__(
                /*! ./lib/_stream_duplex.js */
                "./node_modules/readable-stream/lib/_stream_duplex.js"
              );
              exports2.Transform = __webpack_require__(
                /*! ./lib/_stream_transform.js */
                "./node_modules/readable-stream/lib/_stream_transform.js"
              );
              exports2.PassThrough = __webpack_require__(
                /*! ./lib/_stream_passthrough.js */
                "./node_modules/readable-stream/lib/_stream_passthrough.js"
              );
            })
          ),
          /***/
          "./node_modules/readable-stream/transform.js": (
            /*!***************************************************!*\
              !*** ./node_modules/readable-stream/transform.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./readable */
                "./node_modules/readable-stream/readable-browser.js"
              ).Transform;
            })
          ),
          /***/
          "./node_modules/readable-stream/writable-browser.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/readable-stream/writable-browser.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(
                /*! ./lib/_stream_writable.js */
                "./node_modules/readable-stream/lib/_stream_writable.js"
              );
            })
          ),
          /***/
          "./node_modules/safe-buffer/index.js": (
            /*!*******************************************!*\
              !*** ./node_modules/safe-buffer/index.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var buffer = __webpack_require__(
                /*! buffer */
                "./node_modules/buffer/index.js"
              );
              var Buffer = buffer.Buffer;
              function copyProps(src, dst) {
                for (var key in src) {
                  dst[key] = src[key];
                }
              }
              if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
                module2.exports = buffer;
              } else {
                copyProps(buffer, exports2);
                exports2.Buffer = SafeBuffer;
              }
              function SafeBuffer(arg, encodingOrOffset, length) {
                return Buffer(arg, encodingOrOffset, length);
              }
              copyProps(Buffer, SafeBuffer);
              SafeBuffer.from = function(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                  throw new TypeError("Argument must not be a number");
                }
                return Buffer(arg, encodingOrOffset, length);
              };
              SafeBuffer.alloc = function(size, fill, encoding) {
                if (typeof size !== "number") {
                  throw new TypeError("Argument must be a number");
                }
                var buf = Buffer(size);
                if (fill !== void 0) {
                  if (typeof encoding === "string") {
                    buf.fill(fill, encoding);
                  } else {
                    buf.fill(fill);
                  }
                } else {
                  buf.fill(0);
                }
                return buf;
              };
              SafeBuffer.allocUnsafe = function(size) {
                if (typeof size !== "number") {
                  throw new TypeError("Argument must be a number");
                }
                return Buffer(size);
              };
              SafeBuffer.allocUnsafeSlow = function(size) {
                if (typeof size !== "number") {
                  throw new TypeError("Argument must be a number");
                }
                return buffer.SlowBuffer(size);
              };
            })
          ),
          /***/
          "./node_modules/sax/lib/sax.js": (
            /*!*************************************!*\
              !*** ./node_modules/sax/lib/sax.js ***!
              \*************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(Buffer) {
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                    return typeof obj2;
                  } : function(obj2) {
                    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  }, _typeof(obj);
                }
                (function(sax) {
                  sax.parser = function(strict, opt) {
                    return new SAXParser(strict, opt);
                  };
                  sax.SAXParser = SAXParser;
                  sax.SAXStream = SAXStream;
                  sax.createStream = createStream;
                  sax.MAX_BUFFER_LENGTH = 64 * 1024;
                  var buffers = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
                  sax.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
                  function SAXParser(strict, opt) {
                    if (!(this instanceof SAXParser)) {
                      return new SAXParser(strict, opt);
                    }
                    var parser = this;
                    clearBuffers(parser);
                    parser.q = parser.c = "";
                    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
                    parser.opt = opt || {};
                    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
                    parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
                    parser.tags = [];
                    parser.closed = parser.closedRoot = parser.sawRoot = false;
                    parser.tag = parser.error = null;
                    parser.strict = !!strict;
                    parser.noscript = !!(strict || parser.opt.noscript);
                    parser.state = S.BEGIN;
                    parser.strictEntities = parser.opt.strictEntities;
                    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
                    parser.attribList = [];
                    if (parser.opt.xmlns) {
                      parser.ns = Object.create(rootNS);
                    }
                    parser.trackPosition = parser.opt.position !== false;
                    if (parser.trackPosition) {
                      parser.position = parser.line = parser.column = 0;
                    }
                    emit(parser, "onready");
                  }
                  if (!Object.create) {
                    Object.create = function(o) {
                      function F() {
                      }
                      F.prototype = o;
                      var newf = new F();
                      return newf;
                    };
                  }
                  if (!Object.keys) {
                    Object.keys = function(o) {
                      var a = [];
                      for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
                      return a;
                    };
                  }
                  function checkBufferLength(parser) {
                    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
                    var maxActual = 0;
                    for (var i = 0, l = buffers.length; i < l; i++) {
                      var len = parser[buffers[i]].length;
                      if (len > maxAllowed) {
                        switch (buffers[i]) {
                          case "textNode":
                            closeText(parser);
                            break;
                          case "cdata":
                            emitNode(parser, "oncdata", parser.cdata);
                            parser.cdata = "";
                            break;
                          case "script":
                            emitNode(parser, "onscript", parser.script);
                            parser.script = "";
                            break;
                          default:
                            error(parser, "Max buffer length exceeded: " + buffers[i]);
                        }
                      }
                      maxActual = Math.max(maxActual, len);
                    }
                    var m = sax.MAX_BUFFER_LENGTH - maxActual;
                    parser.bufferCheckPosition = m + parser.position;
                  }
                  function clearBuffers(parser) {
                    for (var i = 0, l = buffers.length; i < l; i++) {
                      parser[buffers[i]] = "";
                    }
                  }
                  function flushBuffers(parser) {
                    closeText(parser);
                    if (parser.cdata !== "") {
                      emitNode(parser, "oncdata", parser.cdata);
                      parser.cdata = "";
                    }
                    if (parser.script !== "") {
                      emitNode(parser, "onscript", parser.script);
                      parser.script = "";
                    }
                  }
                  SAXParser.prototype = {
                    end: function end() {
                      _end(this);
                    },
                    write,
                    resume: function resume() {
                      this.error = null;
                      return this;
                    },
                    close: function close() {
                      return this.write(null);
                    },
                    flush: function flush() {
                      flushBuffers(this);
                    }
                  };
                  var Stream;
                  try {
                    Stream = __webpack_require__(
                      /*! stream */
                      "./node_modules/stream-browserify/index.js"
                    ).Stream;
                  } catch (ex) {
                    Stream = function Stream2() {
                    };
                  }
                  var streamWraps = sax.EVENTS.filter(function(ev) {
                    return ev !== "error" && ev !== "end";
                  });
                  function createStream(strict, opt) {
                    return new SAXStream(strict, opt);
                  }
                  function SAXStream(strict, opt) {
                    if (!(this instanceof SAXStream)) {
                      return new SAXStream(strict, opt);
                    }
                    Stream.apply(this);
                    this._parser = new SAXParser(strict, opt);
                    this.writable = true;
                    this.readable = true;
                    var me = this;
                    this._parser.onend = function() {
                      me.emit("end");
                    };
                    this._parser.onerror = function(er) {
                      me.emit("error", er);
                      me._parser.error = null;
                    };
                    this._decoder = null;
                    streamWraps.forEach(function(ev) {
                      Object.defineProperty(me, "on" + ev, {
                        get: function get() {
                          return me._parser["on" + ev];
                        },
                        set: function set(h) {
                          if (!h) {
                            me.removeAllListeners(ev);
                            me._parser["on" + ev] = h;
                            return h;
                          }
                          me.on(ev, h);
                        },
                        enumerable: true,
                        configurable: false
                      });
                    });
                  }
                  SAXStream.prototype = Object.create(Stream.prototype, {
                    constructor: {
                      value: SAXStream
                    }
                  });
                  SAXStream.prototype.write = function(data) {
                    if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
                      if (!this._decoder) {
                        var SD = __webpack_require__(
                          /*! string_decoder */
                          "./node_modules/string_decoder/lib/string_decoder.js"
                        ).StringDecoder;
                        this._decoder = new SD("utf8");
                      }
                      data = this._decoder.write(data);
                    }
                    this._parser.write(data.toString());
                    this.emit("data", data);
                    return true;
                  };
                  SAXStream.prototype.end = function(chunk) {
                    if (chunk && chunk.length) {
                      this.write(chunk);
                    }
                    this._parser.end();
                    return true;
                  };
                  SAXStream.prototype.on = function(ev, handler) {
                    var me = this;
                    if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
                      me._parser["on" + ev] = function() {
                        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                        args.splice(0, 0, ev);
                        me.emit.apply(me, args);
                      };
                    }
                    return Stream.prototype.on.call(me, ev, handler);
                  };
                  var CDATA = "[CDATA[";
                  var DOCTYPE = "DOCTYPE";
                  var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
                  var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
                  var rootNS = {
                    xml: XML_NAMESPACE,
                    xmlns: XMLNS_NAMESPACE
                  };
                  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
                  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
                  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
                  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
                  function isWhitespace(c) {
                    return c === " " || c === "\n" || c === "\r" || c === "	";
                  }
                  function isQuote(c) {
                    return c === '"' || c === "'";
                  }
                  function isAttribEnd(c) {
                    return c === ">" || isWhitespace(c);
                  }
                  function isMatch(regex, c) {
                    return regex.test(c);
                  }
                  function notMatch(regex, c) {
                    return !isMatch(regex, c);
                  }
                  var S = 0;
                  sax.STATE = {
                    BEGIN: S++,
                    // leading byte order mark or whitespace
                    BEGIN_WHITESPACE: S++,
                    // leading whitespace
                    TEXT: S++,
                    // general stuff
                    TEXT_ENTITY: S++,
                    // &amp and such.
                    OPEN_WAKA: S++,
                    // <
                    SGML_DECL: S++,
                    // <!BLARG
                    SGML_DECL_QUOTED: S++,
                    // <!BLARG foo "bar
                    DOCTYPE: S++,
                    // <!DOCTYPE
                    DOCTYPE_QUOTED: S++,
                    // <!DOCTYPE "//blah
                    DOCTYPE_DTD: S++,
                    // <!DOCTYPE "//blah" [ ...
                    DOCTYPE_DTD_QUOTED: S++,
                    // <!DOCTYPE "//blah" [ "foo
                    COMMENT_STARTING: S++,
                    // <!-
                    COMMENT: S++,
                    // <!--
                    COMMENT_ENDING: S++,
                    // <!-- blah -
                    COMMENT_ENDED: S++,
                    // <!-- blah --
                    CDATA: S++,
                    // <![CDATA[ something
                    CDATA_ENDING: S++,
                    // ]
                    CDATA_ENDING_2: S++,
                    // ]]
                    PROC_INST: S++,
                    // <?hi
                    PROC_INST_BODY: S++,
                    // <?hi there
                    PROC_INST_ENDING: S++,
                    // <?hi "there" ?
                    OPEN_TAG: S++,
                    // <strong
                    OPEN_TAG_SLASH: S++,
                    // <strong /
                    ATTRIB: S++,
                    // <a
                    ATTRIB_NAME: S++,
                    // <a foo
                    ATTRIB_NAME_SAW_WHITE: S++,
                    // <a foo _
                    ATTRIB_VALUE: S++,
                    // <a foo=
                    ATTRIB_VALUE_QUOTED: S++,
                    // <a foo="bar
                    ATTRIB_VALUE_CLOSED: S++,
                    // <a foo="bar"
                    ATTRIB_VALUE_UNQUOTED: S++,
                    // <a foo=bar
                    ATTRIB_VALUE_ENTITY_Q: S++,
                    // <foo bar="&quot;"
                    ATTRIB_VALUE_ENTITY_U: S++,
                    // <foo bar=&quot
                    CLOSE_TAG: S++,
                    // </a
                    CLOSE_TAG_SAW_WHITE: S++,
                    // </a   >
                    SCRIPT: S++,
                    // <script> ...
                    SCRIPT_ENDING: S++
                    // <script> ... <
                  };
                  sax.XML_ENTITIES = {
                    "amp": "&",
                    "gt": ">",
                    "lt": "<",
                    "quot": '"',
                    "apos": "'"
                  };
                  sax.ENTITIES = {
                    "amp": "&",
                    "gt": ">",
                    "lt": "<",
                    "quot": '"',
                    "apos": "'",
                    "AElig": 198,
                    "Aacute": 193,
                    "Acirc": 194,
                    "Agrave": 192,
                    "Aring": 197,
                    "Atilde": 195,
                    "Auml": 196,
                    "Ccedil": 199,
                    "ETH": 208,
                    "Eacute": 201,
                    "Ecirc": 202,
                    "Egrave": 200,
                    "Euml": 203,
                    "Iacute": 205,
                    "Icirc": 206,
                    "Igrave": 204,
                    "Iuml": 207,
                    "Ntilde": 209,
                    "Oacute": 211,
                    "Ocirc": 212,
                    "Ograve": 210,
                    "Oslash": 216,
                    "Otilde": 213,
                    "Ouml": 214,
                    "THORN": 222,
                    "Uacute": 218,
                    "Ucirc": 219,
                    "Ugrave": 217,
                    "Uuml": 220,
                    "Yacute": 221,
                    "aacute": 225,
                    "acirc": 226,
                    "aelig": 230,
                    "agrave": 224,
                    "aring": 229,
                    "atilde": 227,
                    "auml": 228,
                    "ccedil": 231,
                    "eacute": 233,
                    "ecirc": 234,
                    "egrave": 232,
                    "eth": 240,
                    "euml": 235,
                    "iacute": 237,
                    "icirc": 238,
                    "igrave": 236,
                    "iuml": 239,
                    "ntilde": 241,
                    "oacute": 243,
                    "ocirc": 244,
                    "ograve": 242,
                    "oslash": 248,
                    "otilde": 245,
                    "ouml": 246,
                    "szlig": 223,
                    "thorn": 254,
                    "uacute": 250,
                    "ucirc": 251,
                    "ugrave": 249,
                    "uuml": 252,
                    "yacute": 253,
                    "yuml": 255,
                    "copy": 169,
                    "reg": 174,
                    "nbsp": 160,
                    "iexcl": 161,
                    "cent": 162,
                    "pound": 163,
                    "curren": 164,
                    "yen": 165,
                    "brvbar": 166,
                    "sect": 167,
                    "uml": 168,
                    "ordf": 170,
                    "laquo": 171,
                    "not": 172,
                    "shy": 173,
                    "macr": 175,
                    "deg": 176,
                    "plusmn": 177,
                    "sup1": 185,
                    "sup2": 178,
                    "sup3": 179,
                    "acute": 180,
                    "micro": 181,
                    "para": 182,
                    "middot": 183,
                    "cedil": 184,
                    "ordm": 186,
                    "raquo": 187,
                    "frac14": 188,
                    "frac12": 189,
                    "frac34": 190,
                    "iquest": 191,
                    "times": 215,
                    "divide": 247,
                    "OElig": 338,
                    "oelig": 339,
                    "Scaron": 352,
                    "scaron": 353,
                    "Yuml": 376,
                    "fnof": 402,
                    "circ": 710,
                    "tilde": 732,
                    "Alpha": 913,
                    "Beta": 914,
                    "Gamma": 915,
                    "Delta": 916,
                    "Epsilon": 917,
                    "Zeta": 918,
                    "Eta": 919,
                    "Theta": 920,
                    "Iota": 921,
                    "Kappa": 922,
                    "Lambda": 923,
                    "Mu": 924,
                    "Nu": 925,
                    "Xi": 926,
                    "Omicron": 927,
                    "Pi": 928,
                    "Rho": 929,
                    "Sigma": 931,
                    "Tau": 932,
                    "Upsilon": 933,
                    "Phi": 934,
                    "Chi": 935,
                    "Psi": 936,
                    "Omega": 937,
                    "alpha": 945,
                    "beta": 946,
                    "gamma": 947,
                    "delta": 948,
                    "epsilon": 949,
                    "zeta": 950,
                    "eta": 951,
                    "theta": 952,
                    "iota": 953,
                    "kappa": 954,
                    "lambda": 955,
                    "mu": 956,
                    "nu": 957,
                    "xi": 958,
                    "omicron": 959,
                    "pi": 960,
                    "rho": 961,
                    "sigmaf": 962,
                    "sigma": 963,
                    "tau": 964,
                    "upsilon": 965,
                    "phi": 966,
                    "chi": 967,
                    "psi": 968,
                    "omega": 969,
                    "thetasym": 977,
                    "upsih": 978,
                    "piv": 982,
                    "ensp": 8194,
                    "emsp": 8195,
                    "thinsp": 8201,
                    "zwnj": 8204,
                    "zwj": 8205,
                    "lrm": 8206,
                    "rlm": 8207,
                    "ndash": 8211,
                    "mdash": 8212,
                    "lsquo": 8216,
                    "rsquo": 8217,
                    "sbquo": 8218,
                    "ldquo": 8220,
                    "rdquo": 8221,
                    "bdquo": 8222,
                    "dagger": 8224,
                    "Dagger": 8225,
                    "bull": 8226,
                    "hellip": 8230,
                    "permil": 8240,
                    "prime": 8242,
                    "Prime": 8243,
                    "lsaquo": 8249,
                    "rsaquo": 8250,
                    "oline": 8254,
                    "frasl": 8260,
                    "euro": 8364,
                    "image": 8465,
                    "weierp": 8472,
                    "real": 8476,
                    "trade": 8482,
                    "alefsym": 8501,
                    "larr": 8592,
                    "uarr": 8593,
                    "rarr": 8594,
                    "darr": 8595,
                    "harr": 8596,
                    "crarr": 8629,
                    "lArr": 8656,
                    "uArr": 8657,
                    "rArr": 8658,
                    "dArr": 8659,
                    "hArr": 8660,
                    "forall": 8704,
                    "part": 8706,
                    "exist": 8707,
                    "empty": 8709,
                    "nabla": 8711,
                    "isin": 8712,
                    "notin": 8713,
                    "ni": 8715,
                    "prod": 8719,
                    "sum": 8721,
                    "minus": 8722,
                    "lowast": 8727,
                    "radic": 8730,
                    "prop": 8733,
                    "infin": 8734,
                    "ang": 8736,
                    "and": 8743,
                    "or": 8744,
                    "cap": 8745,
                    "cup": 8746,
                    "int": 8747,
                    "there4": 8756,
                    "sim": 8764,
                    "cong": 8773,
                    "asymp": 8776,
                    "ne": 8800,
                    "equiv": 8801,
                    "le": 8804,
                    "ge": 8805,
                    "sub": 8834,
                    "sup": 8835,
                    "nsub": 8836,
                    "sube": 8838,
                    "supe": 8839,
                    "oplus": 8853,
                    "otimes": 8855,
                    "perp": 8869,
                    "sdot": 8901,
                    "lceil": 8968,
                    "rceil": 8969,
                    "lfloor": 8970,
                    "rfloor": 8971,
                    "lang": 9001,
                    "rang": 9002,
                    "loz": 9674,
                    "spades": 9824,
                    "clubs": 9827,
                    "hearts": 9829,
                    "diams": 9830
                  };
                  Object.keys(sax.ENTITIES).forEach(function(key) {
                    var e = sax.ENTITIES[key];
                    var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
                    sax.ENTITIES[key] = s2;
                  });
                  for (var s in sax.STATE) {
                    sax.STATE[sax.STATE[s]] = s;
                  }
                  S = sax.STATE;
                  function emit(parser, event, data) {
                    parser[event] && parser[event](data);
                  }
                  function emitNode(parser, nodeType, data) {
                    if (parser.textNode) closeText(parser);
                    emit(parser, nodeType, data);
                  }
                  function closeText(parser) {
                    parser.textNode = textopts(parser.opt, parser.textNode);
                    if (parser.textNode) emit(parser, "ontext", parser.textNode);
                    parser.textNode = "";
                  }
                  function textopts(opt, text) {
                    if (opt.trim) text = text.trim();
                    if (opt.normalize) text = text.replace(/\s+/g, " ");
                    return text;
                  }
                  function error(parser, er) {
                    closeText(parser);
                    if (parser.trackPosition) {
                      er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
                    }
                    er = new Error(er);
                    parser.error = er;
                    emit(parser, "onerror", er);
                    return parser;
                  }
                  function _end(parser) {
                    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, "Unclosed root tag");
                    if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
                      error(parser, "Unexpected end");
                    }
                    closeText(parser);
                    parser.c = "";
                    parser.closed = true;
                    emit(parser, "onend");
                    SAXParser.call(parser, parser.strict, parser.opt);
                    return parser;
                  }
                  function strictFail(parser, message) {
                    if (_typeof(parser) !== "object" || !(parser instanceof SAXParser)) {
                      throw new Error("bad call to strictFail");
                    }
                    if (parser.strict) {
                      error(parser, message);
                    }
                  }
                  function newTag(parser) {
                    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
                    var parent = parser.tags[parser.tags.length - 1] || parser;
                    var tag = parser.tag = {
                      name: parser.tagName,
                      attributes: {}
                    };
                    if (parser.opt.xmlns) {
                      tag.ns = parent.ns;
                    }
                    parser.attribList.length = 0;
                    emitNode(parser, "onopentagstart", tag);
                  }
                  function qname(name, attribute) {
                    var i = name.indexOf(":");
                    var qualName = i < 0 ? ["", name] : name.split(":");
                    var prefix = qualName[0];
                    var local = qualName[1];
                    if (attribute && name === "xmlns") {
                      prefix = "xmlns";
                      local = "";
                    }
                    return {
                      prefix,
                      local
                    };
                  }
                  function attrib(parser) {
                    if (!parser.strict) {
                      parser.attribName = parser.attribName[parser.looseCase]();
                    }
                    if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
                      parser.attribName = parser.attribValue = "";
                      return;
                    }
                    if (parser.opt.xmlns) {
                      var qn = qname(parser.attribName, true);
                      var prefix = qn.prefix;
                      var local = qn.local;
                      if (prefix === "xmlns") {
                        if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
                          strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue);
                        } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
                          strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue);
                        } else {
                          var tag = parser.tag;
                          var parent = parser.tags[parser.tags.length - 1] || parser;
                          if (tag.ns === parent.ns) {
                            tag.ns = Object.create(parent.ns);
                          }
                          tag.ns[local] = parser.attribValue;
                        }
                      }
                      parser.attribList.push([parser.attribName, parser.attribValue]);
                    } else {
                      parser.tag.attributes[parser.attribName] = parser.attribValue;
                      emitNode(parser, "onattribute", {
                        name: parser.attribName,
                        value: parser.attribValue
                      });
                    }
                    parser.attribName = parser.attribValue = "";
                  }
                  function openTag(parser, selfClosing) {
                    if (parser.opt.xmlns) {
                      var tag = parser.tag;
                      var qn = qname(parser.tagName);
                      tag.prefix = qn.prefix;
                      tag.local = qn.local;
                      tag.uri = tag.ns[qn.prefix] || "";
                      if (tag.prefix && !tag.uri) {
                        strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
                        tag.uri = qn.prefix;
                      }
                      var parent = parser.tags[parser.tags.length - 1] || parser;
                      if (tag.ns && parent.ns !== tag.ns) {
                        Object.keys(tag.ns).forEach(function(p) {
                          emitNode(parser, "onopennamespace", {
                            prefix: p,
                            uri: tag.ns[p]
                          });
                        });
                      }
                      for (var i = 0, l = parser.attribList.length; i < l; i++) {
                        var nv = parser.attribList[i];
                        var name = nv[0];
                        var value = nv[1];
                        var qualName = qname(name, true);
                        var prefix = qualName.prefix;
                        var local = qualName.local;
                        var uri = prefix === "" ? "" : tag.ns[prefix] || "";
                        var a = {
                          name,
                          value,
                          prefix,
                          local,
                          uri
                        };
                        if (prefix && prefix !== "xmlns" && !uri) {
                          strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
                          a.uri = prefix;
                        }
                        parser.tag.attributes[name] = a;
                        emitNode(parser, "onattribute", a);
                      }
                      parser.attribList.length = 0;
                    }
                    parser.tag.isSelfClosing = !!selfClosing;
                    parser.sawRoot = true;
                    parser.tags.push(parser.tag);
                    emitNode(parser, "onopentag", parser.tag);
                    if (!selfClosing) {
                      if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
                        parser.state = S.SCRIPT;
                      } else {
                        parser.state = S.TEXT;
                      }
                      parser.tag = null;
                      parser.tagName = "";
                    }
                    parser.attribName = parser.attribValue = "";
                    parser.attribList.length = 0;
                  }
                  function closeTag(parser) {
                    if (!parser.tagName) {
                      strictFail(parser, "Weird empty close tag.");
                      parser.textNode += "</>";
                      parser.state = S.TEXT;
                      return;
                    }
                    if (parser.script) {
                      if (parser.tagName !== "script") {
                        parser.script += "</" + parser.tagName + ">";
                        parser.tagName = "";
                        parser.state = S.SCRIPT;
                        return;
                      }
                      emitNode(parser, "onscript", parser.script);
                      parser.script = "";
                    }
                    var t = parser.tags.length;
                    var tagName = parser.tagName;
                    if (!parser.strict) {
                      tagName = tagName[parser.looseCase]();
                    }
                    var closeTo = tagName;
                    while (t--) {
                      var close = parser.tags[t];
                      if (close.name !== closeTo) {
                        strictFail(parser, "Unexpected close tag");
                      } else {
                        break;
                      }
                    }
                    if (t < 0) {
                      strictFail(parser, "Unmatched closing tag: " + parser.tagName);
                      parser.textNode += "</" + parser.tagName + ">";
                      parser.state = S.TEXT;
                      return;
                    }
                    parser.tagName = tagName;
                    var s2 = parser.tags.length;
                    while (s2-- > t) {
                      var tag = parser.tag = parser.tags.pop();
                      parser.tagName = parser.tag.name;
                      emitNode(parser, "onclosetag", parser.tagName);
                      var x = {};
                      for (var i in tag.ns) {
                        x[i] = tag.ns[i];
                      }
                      var parent = parser.tags[parser.tags.length - 1] || parser;
                      if (parser.opt.xmlns && tag.ns !== parent.ns) {
                        Object.keys(tag.ns).forEach(function(p) {
                          var n = tag.ns[p];
                          emitNode(parser, "onclosenamespace", {
                            prefix: p,
                            uri: n
                          });
                        });
                      }
                    }
                    if (t === 0) parser.closedRoot = true;
                    parser.tagName = parser.attribValue = parser.attribName = "";
                    parser.attribList.length = 0;
                    parser.state = S.TEXT;
                  }
                  function parseEntity(parser) {
                    var entity = parser.entity;
                    var entityLC = entity.toLowerCase();
                    var num;
                    var numStr = "";
                    if (parser.ENTITIES[entity]) {
                      return parser.ENTITIES[entity];
                    }
                    if (parser.ENTITIES[entityLC]) {
                      return parser.ENTITIES[entityLC];
                    }
                    entity = entityLC;
                    if (entity.charAt(0) === "#") {
                      if (entity.charAt(1) === "x") {
                        entity = entity.slice(2);
                        num = parseInt(entity, 16);
                        numStr = num.toString(16);
                      } else {
                        entity = entity.slice(1);
                        num = parseInt(entity, 10);
                        numStr = num.toString(10);
                      }
                    }
                    entity = entity.replace(/^0+/, "");
                    if (isNaN(num) || numStr.toLowerCase() !== entity) {
                      strictFail(parser, "Invalid character entity");
                      return "&" + parser.entity + ";";
                    }
                    return String.fromCodePoint(num);
                  }
                  function beginWhiteSpace(parser, c) {
                    if (c === "<") {
                      parser.state = S.OPEN_WAKA;
                      parser.startTagPosition = parser.position;
                    } else if (!isWhitespace(c)) {
                      strictFail(parser, "Non-whitespace before first tag.");
                      parser.textNode = c;
                      parser.state = S.TEXT;
                    }
                  }
                  function charAt(chunk, i) {
                    var result = "";
                    if (i < chunk.length) {
                      result = chunk.charAt(i);
                    }
                    return result;
                  }
                  function write(chunk) {
                    var parser = this;
                    if (this.error) {
                      throw this.error;
                    }
                    if (parser.closed) {
                      return error(parser, "Cannot write after close. Assign an onready handler.");
                    }
                    if (chunk === null) {
                      return _end(parser);
                    }
                    if (_typeof(chunk) === "object") {
                      chunk = chunk.toString();
                    }
                    var i = 0;
                    var c = "";
                    while (true) {
                      c = charAt(chunk, i++);
                      parser.c = c;
                      if (!c) {
                        break;
                      }
                      if (parser.trackPosition) {
                        parser.position++;
                        if (c === "\n") {
                          parser.line++;
                          parser.column = 0;
                        } else {
                          parser.column++;
                        }
                      }
                      switch (parser.state) {
                        case S.BEGIN:
                          parser.state = S.BEGIN_WHITESPACE;
                          if (c === "\uFEFF") {
                            continue;
                          }
                          beginWhiteSpace(parser, c);
                          continue;
                        case S.BEGIN_WHITESPACE:
                          beginWhiteSpace(parser, c);
                          continue;
                        case S.TEXT:
                          if (parser.sawRoot && !parser.closedRoot) {
                            var starti = i - 1;
                            while (c && c !== "<" && c !== "&") {
                              c = charAt(chunk, i++);
                              if (c && parser.trackPosition) {
                                parser.position++;
                                if (c === "\n") {
                                  parser.line++;
                                  parser.column = 0;
                                } else {
                                  parser.column++;
                                }
                              }
                            }
                            parser.textNode += chunk.substring(starti, i - 1);
                          }
                          if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                            parser.state = S.OPEN_WAKA;
                            parser.startTagPosition = parser.position;
                          } else {
                            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                              strictFail(parser, "Text data outside of root node.");
                            }
                            if (c === "&") {
                              parser.state = S.TEXT_ENTITY;
                            } else {
                              parser.textNode += c;
                            }
                          }
                          continue;
                        case S.SCRIPT:
                          if (c === "<") {
                            parser.state = S.SCRIPT_ENDING;
                          } else {
                            parser.script += c;
                          }
                          continue;
                        case S.SCRIPT_ENDING:
                          if (c === "/") {
                            parser.state = S.CLOSE_TAG;
                          } else {
                            parser.script += "<" + c;
                            parser.state = S.SCRIPT;
                          }
                          continue;
                        case S.OPEN_WAKA:
                          if (c === "!") {
                            parser.state = S.SGML_DECL;
                            parser.sgmlDecl = "";
                          } else if (isWhitespace(c)) ;
                          else if (isMatch(nameStart, c)) {
                            parser.state = S.OPEN_TAG;
                            parser.tagName = c;
                          } else if (c === "/") {
                            parser.state = S.CLOSE_TAG;
                            parser.tagName = "";
                          } else if (c === "?") {
                            parser.state = S.PROC_INST;
                            parser.procInstName = parser.procInstBody = "";
                          } else {
                            strictFail(parser, "Unencoded <");
                            if (parser.startTagPosition + 1 < parser.position) {
                              var pad = parser.position - parser.startTagPosition;
                              c = new Array(pad).join(" ") + c;
                            }
                            parser.textNode += "<" + c;
                            parser.state = S.TEXT;
                          }
                          continue;
                        case S.SGML_DECL:
                          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                            emitNode(parser, "onopencdata");
                            parser.state = S.CDATA;
                            parser.sgmlDecl = "";
                            parser.cdata = "";
                          } else if (parser.sgmlDecl + c === "--") {
                            parser.state = S.COMMENT;
                            parser.comment = "";
                            parser.sgmlDecl = "";
                          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                            parser.state = S.DOCTYPE;
                            if (parser.doctype || parser.sawRoot) {
                              strictFail(parser, "Inappropriately located doctype declaration");
                            }
                            parser.doctype = "";
                            parser.sgmlDecl = "";
                          } else if (c === ">") {
                            emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                            parser.sgmlDecl = "";
                            parser.state = S.TEXT;
                          } else if (isQuote(c)) {
                            parser.state = S.SGML_DECL_QUOTED;
                            parser.sgmlDecl += c;
                          } else {
                            parser.sgmlDecl += c;
                          }
                          continue;
                        case S.SGML_DECL_QUOTED:
                          if (c === parser.q) {
                            parser.state = S.SGML_DECL;
                            parser.q = "";
                          }
                          parser.sgmlDecl += c;
                          continue;
                        case S.DOCTYPE:
                          if (c === ">") {
                            parser.state = S.TEXT;
                            emitNode(parser, "ondoctype", parser.doctype);
                            parser.doctype = true;
                          } else {
                            parser.doctype += c;
                            if (c === "[") {
                              parser.state = S.DOCTYPE_DTD;
                            } else if (isQuote(c)) {
                              parser.state = S.DOCTYPE_QUOTED;
                              parser.q = c;
                            }
                          }
                          continue;
                        case S.DOCTYPE_QUOTED:
                          parser.doctype += c;
                          if (c === parser.q) {
                            parser.q = "";
                            parser.state = S.DOCTYPE;
                          }
                          continue;
                        case S.DOCTYPE_DTD:
                          parser.doctype += c;
                          if (c === "]") {
                            parser.state = S.DOCTYPE;
                          } else if (isQuote(c)) {
                            parser.state = S.DOCTYPE_DTD_QUOTED;
                            parser.q = c;
                          }
                          continue;
                        case S.DOCTYPE_DTD_QUOTED:
                          parser.doctype += c;
                          if (c === parser.q) {
                            parser.state = S.DOCTYPE_DTD;
                            parser.q = "";
                          }
                          continue;
                        case S.COMMENT:
                          if (c === "-") {
                            parser.state = S.COMMENT_ENDING;
                          } else {
                            parser.comment += c;
                          }
                          continue;
                        case S.COMMENT_ENDING:
                          if (c === "-") {
                            parser.state = S.COMMENT_ENDED;
                            parser.comment = textopts(parser.opt, parser.comment);
                            if (parser.comment) {
                              emitNode(parser, "oncomment", parser.comment);
                            }
                            parser.comment = "";
                          } else {
                            parser.comment += "-" + c;
                            parser.state = S.COMMENT;
                          }
                          continue;
                        case S.COMMENT_ENDED:
                          if (c !== ">") {
                            strictFail(parser, "Malformed comment");
                            parser.comment += "--" + c;
                            parser.state = S.COMMENT;
                          } else {
                            parser.state = S.TEXT;
                          }
                          continue;
                        case S.CDATA:
                          if (c === "]") {
                            parser.state = S.CDATA_ENDING;
                          } else {
                            parser.cdata += c;
                          }
                          continue;
                        case S.CDATA_ENDING:
                          if (c === "]") {
                            parser.state = S.CDATA_ENDING_2;
                          } else {
                            parser.cdata += "]" + c;
                            parser.state = S.CDATA;
                          }
                          continue;
                        case S.CDATA_ENDING_2:
                          if (c === ">") {
                            if (parser.cdata) {
                              emitNode(parser, "oncdata", parser.cdata);
                            }
                            emitNode(parser, "onclosecdata");
                            parser.cdata = "";
                            parser.state = S.TEXT;
                          } else if (c === "]") {
                            parser.cdata += "]";
                          } else {
                            parser.cdata += "]]" + c;
                            parser.state = S.CDATA;
                          }
                          continue;
                        case S.PROC_INST:
                          if (c === "?") {
                            parser.state = S.PROC_INST_ENDING;
                          } else if (isWhitespace(c)) {
                            parser.state = S.PROC_INST_BODY;
                          } else {
                            parser.procInstName += c;
                          }
                          continue;
                        case S.PROC_INST_BODY:
                          if (!parser.procInstBody && isWhitespace(c)) {
                            continue;
                          } else if (c === "?") {
                            parser.state = S.PROC_INST_ENDING;
                          } else {
                            parser.procInstBody += c;
                          }
                          continue;
                        case S.PROC_INST_ENDING:
                          if (c === ">") {
                            emitNode(parser, "onprocessinginstruction", {
                              name: parser.procInstName,
                              body: parser.procInstBody
                            });
                            parser.procInstName = parser.procInstBody = "";
                            parser.state = S.TEXT;
                          } else {
                            parser.procInstBody += "?" + c;
                            parser.state = S.PROC_INST_BODY;
                          }
                          continue;
                        case S.OPEN_TAG:
                          if (isMatch(nameBody, c)) {
                            parser.tagName += c;
                          } else {
                            newTag(parser);
                            if (c === ">") {
                              openTag(parser);
                            } else if (c === "/") {
                              parser.state = S.OPEN_TAG_SLASH;
                            } else {
                              if (!isWhitespace(c)) {
                                strictFail(parser, "Invalid character in tag name");
                              }
                              parser.state = S.ATTRIB;
                            }
                          }
                          continue;
                        case S.OPEN_TAG_SLASH:
                          if (c === ">") {
                            openTag(parser, true);
                            closeTag(parser);
                          } else {
                            strictFail(parser, "Forward-slash in opening tag not followed by >");
                            parser.state = S.ATTRIB;
                          }
                          continue;
                        case S.ATTRIB:
                          if (isWhitespace(c)) {
                            continue;
                          } else if (c === ">") {
                            openTag(parser);
                          } else if (c === "/") {
                            parser.state = S.OPEN_TAG_SLASH;
                          } else if (isMatch(nameStart, c)) {
                            parser.attribName = c;
                            parser.attribValue = "";
                            parser.state = S.ATTRIB_NAME;
                          } else {
                            strictFail(parser, "Invalid attribute name");
                          }
                          continue;
                        case S.ATTRIB_NAME:
                          if (c === "=") {
                            parser.state = S.ATTRIB_VALUE;
                          } else if (c === ">") {
                            strictFail(parser, "Attribute without value");
                            parser.attribValue = parser.attribName;
                            attrib(parser);
                            openTag(parser);
                          } else if (isWhitespace(c)) {
                            parser.state = S.ATTRIB_NAME_SAW_WHITE;
                          } else if (isMatch(nameBody, c)) {
                            parser.attribName += c;
                          } else {
                            strictFail(parser, "Invalid attribute name");
                          }
                          continue;
                        case S.ATTRIB_NAME_SAW_WHITE:
                          if (c === "=") {
                            parser.state = S.ATTRIB_VALUE;
                          } else if (isWhitespace(c)) {
                            continue;
                          } else {
                            strictFail(parser, "Attribute without value");
                            parser.tag.attributes[parser.attribName] = "";
                            parser.attribValue = "";
                            emitNode(parser, "onattribute", {
                              name: parser.attribName,
                              value: ""
                            });
                            parser.attribName = "";
                            if (c === ">") {
                              openTag(parser);
                            } else if (isMatch(nameStart, c)) {
                              parser.attribName = c;
                              parser.state = S.ATTRIB_NAME;
                            } else {
                              strictFail(parser, "Invalid attribute name");
                              parser.state = S.ATTRIB;
                            }
                          }
                          continue;
                        case S.ATTRIB_VALUE:
                          if (isWhitespace(c)) {
                            continue;
                          } else if (isQuote(c)) {
                            parser.q = c;
                            parser.state = S.ATTRIB_VALUE_QUOTED;
                          } else {
                            strictFail(parser, "Unquoted attribute value");
                            parser.state = S.ATTRIB_VALUE_UNQUOTED;
                            parser.attribValue = c;
                          }
                          continue;
                        case S.ATTRIB_VALUE_QUOTED:
                          if (c !== parser.q) {
                            if (c === "&") {
                              parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                            } else {
                              parser.attribValue += c;
                            }
                            continue;
                          }
                          attrib(parser);
                          parser.q = "";
                          parser.state = S.ATTRIB_VALUE_CLOSED;
                          continue;
                        case S.ATTRIB_VALUE_CLOSED:
                          if (isWhitespace(c)) {
                            parser.state = S.ATTRIB;
                          } else if (c === ">") {
                            openTag(parser);
                          } else if (c === "/") {
                            parser.state = S.OPEN_TAG_SLASH;
                          } else if (isMatch(nameStart, c)) {
                            strictFail(parser, "No whitespace between attributes");
                            parser.attribName = c;
                            parser.attribValue = "";
                            parser.state = S.ATTRIB_NAME;
                          } else {
                            strictFail(parser, "Invalid attribute name");
                          }
                          continue;
                        case S.ATTRIB_VALUE_UNQUOTED:
                          if (!isAttribEnd(c)) {
                            if (c === "&") {
                              parser.state = S.ATTRIB_VALUE_ENTITY_U;
                            } else {
                              parser.attribValue += c;
                            }
                            continue;
                          }
                          attrib(parser);
                          if (c === ">") {
                            openTag(parser);
                          } else {
                            parser.state = S.ATTRIB;
                          }
                          continue;
                        case S.CLOSE_TAG:
                          if (!parser.tagName) {
                            if (isWhitespace(c)) {
                              continue;
                            } else if (notMatch(nameStart, c)) {
                              if (parser.script) {
                                parser.script += "</" + c;
                                parser.state = S.SCRIPT;
                              } else {
                                strictFail(parser, "Invalid tagname in closing tag.");
                              }
                            } else {
                              parser.tagName = c;
                            }
                          } else if (c === ">") {
                            closeTag(parser);
                          } else if (isMatch(nameBody, c)) {
                            parser.tagName += c;
                          } else if (parser.script) {
                            parser.script += "</" + parser.tagName;
                            parser.tagName = "";
                            parser.state = S.SCRIPT;
                          } else {
                            if (!isWhitespace(c)) {
                              strictFail(parser, "Invalid tagname in closing tag");
                            }
                            parser.state = S.CLOSE_TAG_SAW_WHITE;
                          }
                          continue;
                        case S.CLOSE_TAG_SAW_WHITE:
                          if (isWhitespace(c)) {
                            continue;
                          }
                          if (c === ">") {
                            closeTag(parser);
                          } else {
                            strictFail(parser, "Invalid characters in closing tag");
                          }
                          continue;
                        case S.TEXT_ENTITY:
                        case S.ATTRIB_VALUE_ENTITY_Q:
                        case S.ATTRIB_VALUE_ENTITY_U:
                          var returnState;
                          var buffer;
                          switch (parser.state) {
                            case S.TEXT_ENTITY:
                              returnState = S.TEXT;
                              buffer = "textNode";
                              break;
                            case S.ATTRIB_VALUE_ENTITY_Q:
                              returnState = S.ATTRIB_VALUE_QUOTED;
                              buffer = "attribValue";
                              break;
                            case S.ATTRIB_VALUE_ENTITY_U:
                              returnState = S.ATTRIB_VALUE_UNQUOTED;
                              buffer = "attribValue";
                              break;
                          }
                          if (c === ";") {
                            parser[buffer] += parseEntity(parser);
                            parser.entity = "";
                            parser.state = returnState;
                          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                            parser.entity += c;
                          } else {
                            strictFail(parser, "Invalid character in entity name");
                            parser[buffer] += "&" + parser.entity + c;
                            parser.entity = "";
                            parser.state = returnState;
                          }
                          continue;
                        default:
                          throw new Error(parser, "Unknown state: " + parser.state);
                      }
                    }
                    if (parser.position >= parser.bufferCheckPosition) {
                      checkBufferLength(parser);
                    }
                    return parser;
                  }
                  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
                  if (!String.fromCodePoint) {
                    (function() {
                      var stringFromCharCode = String.fromCharCode;
                      var floor = Math.floor;
                      var fromCodePoint = function fromCodePoint2() {
                        var MAX_SIZE = 16384;
                        var codeUnits = [];
                        var highSurrogate;
                        var lowSurrogate;
                        var index = -1;
                        var length = arguments.length;
                        if (!length) {
                          return "";
                        }
                        var result = "";
                        while (++index < length) {
                          var codePoint = Number(arguments[index]);
                          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                          codePoint < 0 || // not a valid Unicode code point
                          codePoint > 1114111 || // not a valid Unicode code point
                          floor(codePoint) !== codePoint) {
                            throw RangeError("Invalid code point: " + codePoint);
                          }
                          if (codePoint <= 65535) {
                            codeUnits.push(codePoint);
                          } else {
                            codePoint -= 65536;
                            highSurrogate = (codePoint >> 10) + 55296;
                            lowSurrogate = codePoint % 1024 + 56320;
                            codeUnits.push(highSurrogate, lowSurrogate);
                          }
                          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                            result += stringFromCharCode.apply(null, codeUnits);
                            codeUnits.length = 0;
                          }
                        }
                        return result;
                      };
                      if (Object.defineProperty) {
                        Object.defineProperty(String, "fromCodePoint", {
                          value: fromCodePoint,
                          configurable: true,
                          writable: true
                        });
                      } else {
                        String.fromCodePoint = fromCodePoint;
                      }
                    })();
                  }
                })(exports2);
              }).call(this, __webpack_require__(
                /*! ./../../buffer/index.js */
                "./node_modules/buffer/index.js"
              ).Buffer);
            })
          ),
          /***/
          "./node_modules/setimmediate/setImmediate.js": (
            /*!***************************************************!*\
              !*** ./node_modules/setimmediate/setImmediate.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global, process) {
                (function(global2, undefined2) {
                  if (global2.setImmediate) {
                    return;
                  }
                  var nextHandle = 1;
                  var tasksByHandle = {};
                  var currentlyRunningATask = false;
                  var doc = global2.document;
                  var registerImmediate;
                  function setImmediate(callback) {
                    if (typeof callback !== "function") {
                      callback = new Function("" + callback);
                    }
                    var args = new Array(arguments.length - 1);
                    for (var i = 0; i < args.length; i++) {
                      args[i] = arguments[i + 1];
                    }
                    var task = {
                      callback,
                      args
                    };
                    tasksByHandle[nextHandle] = task;
                    registerImmediate(nextHandle);
                    return nextHandle++;
                  }
                  function clearImmediate(handle) {
                    delete tasksByHandle[handle];
                  }
                  function run(task) {
                    var callback = task.callback;
                    var args = task.args;
                    switch (args.length) {
                      case 0:
                        callback();
                        break;
                      case 1:
                        callback(args[0]);
                        break;
                      case 2:
                        callback(args[0], args[1]);
                        break;
                      case 3:
                        callback(args[0], args[1], args[2]);
                        break;
                      default:
                        callback.apply(undefined2, args);
                        break;
                    }
                  }
                  function runIfPresent(handle) {
                    if (currentlyRunningATask) {
                      setTimeout(runIfPresent, 0, handle);
                    } else {
                      var task = tasksByHandle[handle];
                      if (task) {
                        currentlyRunningATask = true;
                        try {
                          run(task);
                        } finally {
                          clearImmediate(handle);
                          currentlyRunningATask = false;
                        }
                      }
                    }
                  }
                  function installNextTickImplementation() {
                    registerImmediate = function registerImmediate2(handle) {
                      process.nextTick(function() {
                        runIfPresent(handle);
                      });
                    };
                  }
                  function canUsePostMessage() {
                    if (global2.postMessage && !global2.importScripts) {
                      var postMessageIsAsynchronous = true;
                      var oldOnMessage = global2.onmessage;
                      global2.onmessage = function() {
                        postMessageIsAsynchronous = false;
                      };
                      global2.postMessage("", "*");
                      global2.onmessage = oldOnMessage;
                      return postMessageIsAsynchronous;
                    }
                  }
                  function installPostMessageImplementation() {
                    var messagePrefix = "setImmediate$" + Math.random() + "$";
                    var onGlobalMessage = function onGlobalMessage2(event) {
                      if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                        runIfPresent(+event.data.slice(messagePrefix.length));
                      }
                    };
                    if (global2.addEventListener) {
                      global2.addEventListener("message", onGlobalMessage, false);
                    } else {
                      global2.attachEvent("onmessage", onGlobalMessage);
                    }
                    registerImmediate = function registerImmediate2(handle) {
                      global2.postMessage(messagePrefix + handle, "*");
                    };
                  }
                  function installMessageChannelImplementation() {
                    var channel = new MessageChannel();
                    channel.port1.onmessage = function(event) {
                      var handle = event.data;
                      runIfPresent(handle);
                    };
                    registerImmediate = function registerImmediate2(handle) {
                      channel.port2.postMessage(handle);
                    };
                  }
                  function installReadyStateChangeImplementation() {
                    var html = doc.documentElement;
                    registerImmediate = function registerImmediate2(handle) {
                      var script = doc.createElement("script");
                      script.onreadystatechange = function() {
                        runIfPresent(handle);
                        script.onreadystatechange = null;
                        html.removeChild(script);
                        script = null;
                      };
                      html.appendChild(script);
                    };
                  }
                  function installSetTimeoutImplementation() {
                    registerImmediate = function registerImmediate2(handle) {
                      setTimeout(runIfPresent, 0, handle);
                    };
                  }
                  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
                  attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
                  if ({}.toString.call(global2.process) === "[object process]") {
                    installNextTickImplementation();
                  } else if (canUsePostMessage()) {
                    installPostMessageImplementation();
                  } else if (global2.MessageChannel) {
                    installMessageChannelImplementation();
                  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
                    installReadyStateChangeImplementation();
                  } else {
                    installSetTimeoutImplementation();
                  }
                  attachTo.setImmediate = setImmediate;
                  attachTo.clearImmediate = clearImmediate;
                })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
              }).call(this, __webpack_require__(
                /*! ./../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ), __webpack_require__(
                /*! ./../process/browser.js */
                "./node_modules/process/browser.js"
              ));
            })
          ),
          /***/
          "./node_modules/stream-browserify/index.js": (
            /*!*************************************************!*\
              !*** ./node_modules/stream-browserify/index.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              module2.exports = Stream;
              var EE = __webpack_require__(
                /*! events */
                "./node_modules/events/events.js"
              ).EventEmitter;
              var inherits = __webpack_require__(
                /*! inherits */
                "./node_modules/inherits/inherits_browser.js"
              );
              inherits(Stream, EE);
              Stream.Readable = __webpack_require__(
                /*! readable-stream/readable.js */
                "./node_modules/readable-stream/readable-browser.js"
              );
              Stream.Writable = __webpack_require__(
                /*! readable-stream/writable.js */
                "./node_modules/readable-stream/writable-browser.js"
              );
              Stream.Duplex = __webpack_require__(
                /*! readable-stream/duplex.js */
                "./node_modules/readable-stream/duplex-browser.js"
              );
              Stream.Transform = __webpack_require__(
                /*! readable-stream/transform.js */
                "./node_modules/readable-stream/transform.js"
              );
              Stream.PassThrough = __webpack_require__(
                /*! readable-stream/passthrough.js */
                "./node_modules/readable-stream/passthrough.js"
              );
              Stream.Stream = Stream;
              function Stream() {
                EE.call(this);
              }
              Stream.prototype.pipe = function(dest, options) {
                var source = this;
                function ondata(chunk) {
                  if (dest.writable) {
                    if (false === dest.write(chunk) && source.pause) {
                      source.pause();
                    }
                  }
                }
                source.on("data", ondata);
                function ondrain() {
                  if (source.readable && source.resume) {
                    source.resume();
                  }
                }
                dest.on("drain", ondrain);
                if (!dest._isStdio && (!options || options.end !== false)) {
                  source.on("end", onend);
                  source.on("close", onclose);
                }
                var didOnEnd = false;
                function onend() {
                  if (didOnEnd) return;
                  didOnEnd = true;
                  dest.end();
                }
                function onclose() {
                  if (didOnEnd) return;
                  didOnEnd = true;
                  if (typeof dest.destroy === "function") dest.destroy();
                }
                function onerror(er) {
                  cleanup();
                  if (EE.listenerCount(this, "error") === 0) {
                    throw er;
                  }
                }
                source.on("error", onerror);
                dest.on("error", onerror);
                function cleanup() {
                  source.removeListener("data", ondata);
                  dest.removeListener("drain", ondrain);
                  source.removeListener("end", onend);
                  source.removeListener("close", onclose);
                  source.removeListener("error", onerror);
                  dest.removeListener("error", onerror);
                  source.removeListener("end", cleanup);
                  source.removeListener("close", cleanup);
                  dest.removeListener("close", cleanup);
                }
                source.on("end", cleanup);
                source.on("close", cleanup);
                dest.on("close", cleanup);
                dest.emit("pipe", source);
                return dest;
              };
            })
          ),
          /***/
          "./node_modules/stream-http/index.js": (
            /*!*******************************************!*\
              !*** ./node_modules/stream-http/index.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global) {
                var ClientRequest = __webpack_require__(
                  /*! ./lib/request */
                  "./node_modules/stream-http/lib/request.js"
                );
                var response = __webpack_require__(
                  /*! ./lib/response */
                  "./node_modules/stream-http/lib/response.js"
                );
                var extend = __webpack_require__(
                  /*! xtend */
                  "./node_modules/xtend/immutable.js"
                );
                var statusCodes = __webpack_require__(
                  /*! builtin-status-codes */
                  "./node_modules/builtin-status-codes/browser.js"
                );
                var url = __webpack_require__(
                  /*! url */
                  "./node_modules/url/url.js"
                );
                var http = exports2;
                http.request = function(opts, cb) {
                  if (typeof opts === "string") opts = url.parse(opts);
                  else opts = extend(opts);
                  var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
                  var protocol = opts.protocol || defaultProtocol;
                  var host = opts.hostname || opts.host;
                  var port = opts.port;
                  var path = opts.path || "/";
                  if (host && host.indexOf(":") !== -1) host = "[" + host + "]";
                  opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path;
                  opts.method = (opts.method || "GET").toUpperCase();
                  opts.headers = opts.headers || {};
                  var req = new ClientRequest(opts);
                  if (cb) req.on("response", cb);
                  return req;
                };
                http.get = function get(opts, cb) {
                  var req = http.request(opts, cb);
                  req.end();
                  return req;
                };
                http.ClientRequest = ClientRequest;
                http.IncomingMessage = response.IncomingMessage;
                http.Agent = function() {
                };
                http.Agent.defaultMaxSockets = 4;
                http.globalAgent = new http.Agent();
                http.STATUS_CODES = statusCodes;
                http.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
              }).call(this, __webpack_require__(
                /*! ./../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/stream-http/lib/capability.js": (
            /*!****************************************************!*\
              !*** ./node_modules/stream-http/lib/capability.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global) {
                exports2.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream);
                exports2.writableStream = isFunction(global.WritableStream);
                exports2.abortController = isFunction(global.AbortController);
                exports2.blobConstructor = false;
                try {
                  new Blob([new ArrayBuffer(1)]);
                  exports2.blobConstructor = true;
                } catch (e) {
                }
                var xhr;
                function getXHR() {
                  if (xhr !== void 0) return xhr;
                  if (global.XMLHttpRequest) {
                    xhr = new global.XMLHttpRequest();
                    try {
                      xhr.open("GET", global.XDomainRequest ? "/" : "https://example.com");
                    } catch (e) {
                      xhr = null;
                    }
                  } else {
                    xhr = null;
                  }
                  return xhr;
                }
                function checkTypeSupport(type) {
                  var xhr2 = getXHR();
                  if (!xhr2) return false;
                  try {
                    xhr2.responseType = type;
                    return xhr2.responseType === type;
                  } catch (e) {
                  }
                  return false;
                }
                var haveArrayBuffer = typeof global.ArrayBuffer !== "undefined";
                var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice);
                exports2.arraybuffer = exports2.fetch || haveArrayBuffer && checkTypeSupport("arraybuffer");
                exports2.msstream = !exports2.fetch && haveSlice && checkTypeSupport("ms-stream");
                exports2.mozchunkedarraybuffer = !exports2.fetch && haveArrayBuffer && checkTypeSupport("moz-chunked-arraybuffer");
                exports2.overrideMimeType = exports2.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);
                exports2.vbArray = isFunction(global.VBArray);
                function isFunction(value) {
                  return typeof value === "function";
                }
                xhr = null;
              }).call(this, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/stream-http/lib/request.js": (
            /*!*************************************************!*\
              !*** ./node_modules/stream-http/lib/request.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(Buffer, global, process) {
                var capability = __webpack_require__(
                  /*! ./capability */
                  "./node_modules/stream-http/lib/capability.js"
                );
                var inherits = __webpack_require__(
                  /*! inherits */
                  "./node_modules/inherits/inherits_browser.js"
                );
                var response = __webpack_require__(
                  /*! ./response */
                  "./node_modules/stream-http/lib/response.js"
                );
                var stream = __webpack_require__(
                  /*! readable-stream */
                  "./node_modules/readable-stream/readable-browser.js"
                );
                var toArrayBuffer = __webpack_require__(
                  /*! to-arraybuffer */
                  "./node_modules/to-arraybuffer/index.js"
                );
                var IncomingMessage = response.IncomingMessage;
                var rStates = response.readyStates;
                function decideMode(preferBinary, useFetch) {
                  if (capability.fetch && useFetch) {
                    return "fetch";
                  } else if (capability.mozchunkedarraybuffer) {
                    return "moz-chunked-arraybuffer";
                  } else if (capability.msstream) {
                    return "ms-stream";
                  } else if (capability.arraybuffer && preferBinary) {
                    return "arraybuffer";
                  } else if (capability.vbArray && preferBinary) {
                    return "text:vbarray";
                  } else {
                    return "text";
                  }
                }
                var ClientRequest = module2.exports = function(opts) {
                  var self2 = this;
                  stream.Writable.call(self2);
                  self2._opts = opts;
                  self2._body = [];
                  self2._headers = {};
                  if (opts.auth) self2.setHeader("Authorization", "Basic " + new Buffer(opts.auth).toString("base64"));
                  Object.keys(opts.headers).forEach(function(name) {
                    self2.setHeader(name, opts.headers[name]);
                  });
                  var preferBinary;
                  var useFetch = true;
                  if (opts.mode === "disable-fetch" || "requestTimeout" in opts && !capability.abortController) {
                    useFetch = false;
                    preferBinary = true;
                  } else if (opts.mode === "prefer-streaming") {
                    preferBinary = false;
                  } else if (opts.mode === "allow-wrong-content-type") {
                    preferBinary = !capability.overrideMimeType;
                  } else if (!opts.mode || opts.mode === "default" || opts.mode === "prefer-fast") {
                    preferBinary = true;
                  } else {
                    throw new Error("Invalid value for opts.mode");
                  }
                  self2._mode = decideMode(preferBinary, useFetch);
                  self2._fetchTimer = null;
                  self2.on("finish", function() {
                    self2._onFinish();
                  });
                };
                inherits(ClientRequest, stream.Writable);
                ClientRequest.prototype.setHeader = function(name, value) {
                  var self2 = this;
                  var lowerName = name.toLowerCase();
                  if (unsafeHeaders.indexOf(lowerName) !== -1) return;
                  self2._headers[lowerName] = {
                    name,
                    value
                  };
                };
                ClientRequest.prototype.getHeader = function(name) {
                  var header = this._headers[name.toLowerCase()];
                  if (header) return header.value;
                  return null;
                };
                ClientRequest.prototype.removeHeader = function(name) {
                  var self2 = this;
                  delete self2._headers[name.toLowerCase()];
                };
                ClientRequest.prototype._onFinish = function() {
                  var self2 = this;
                  if (self2._destroyed) return;
                  var opts = self2._opts;
                  var headersObj = self2._headers;
                  var body = null;
                  if (opts.method !== "GET" && opts.method !== "HEAD") {
                    if (capability.arraybuffer) {
                      body = toArrayBuffer(Buffer.concat(self2._body));
                    } else if (capability.blobConstructor) {
                      body = new global.Blob(self2._body.map(function(buffer) {
                        return toArrayBuffer(buffer);
                      }), {
                        type: (headersObj["content-type"] || {}).value || ""
                      });
                    } else {
                      body = Buffer.concat(self2._body).toString();
                    }
                  }
                  var headersList = [];
                  Object.keys(headersObj).forEach(function(keyName) {
                    var name = headersObj[keyName].name;
                    var value = headersObj[keyName].value;
                    if (Array.isArray(value)) {
                      value.forEach(function(v) {
                        headersList.push([name, v]);
                      });
                    } else {
                      headersList.push([name, value]);
                    }
                  });
                  if (self2._mode === "fetch") {
                    var signal = null;
                    if (capability.abortController) {
                      var controller = new AbortController();
                      signal = controller.signal;
                      self2._fetchAbortController = controller;
                      if ("requestTimeout" in opts && opts.requestTimeout !== 0) {
                        self2._fetchTimer = global.setTimeout(function() {
                          self2.emit("requestTimeout");
                          if (self2._fetchAbortController) self2._fetchAbortController.abort();
                        }, opts.requestTimeout);
                      }
                    }
                    global.fetch(self2._opts.url, {
                      method: self2._opts.method,
                      headers: headersList,
                      body: body || void 0,
                      mode: "cors",
                      credentials: opts.withCredentials ? "include" : "same-origin",
                      signal
                    }).then(function(response2) {
                      self2._fetchResponse = response2;
                      self2._connect();
                    }, function(reason) {
                      global.clearTimeout(self2._fetchTimer);
                      if (!self2._destroyed) self2.emit("error", reason);
                    });
                  } else {
                    var xhr = self2._xhr = new global.XMLHttpRequest();
                    try {
                      xhr.open(self2._opts.method, self2._opts.url, true);
                    } catch (err) {
                      process.nextTick(function() {
                        self2.emit("error", err);
                      });
                      return;
                    }
                    if ("responseType" in xhr) xhr.responseType = self2._mode.split(":")[0];
                    if ("withCredentials" in xhr) xhr.withCredentials = !!opts.withCredentials;
                    if (self2._mode === "text" && "overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
                    if ("requestTimeout" in opts) {
                      xhr.timeout = opts.requestTimeout;
                      xhr.ontimeout = function() {
                        self2.emit("requestTimeout");
                      };
                    }
                    headersList.forEach(function(header) {
                      xhr.setRequestHeader(header[0], header[1]);
                    });
                    self2._response = null;
                    xhr.onreadystatechange = function() {
                      switch (xhr.readyState) {
                        case rStates.LOADING:
                        case rStates.DONE:
                          self2._onXHRProgress();
                          break;
                      }
                    };
                    if (self2._mode === "moz-chunked-arraybuffer") {
                      xhr.onprogress = function() {
                        self2._onXHRProgress();
                      };
                    }
                    xhr.onerror = function() {
                      if (self2._destroyed) return;
                      self2.emit("error", new Error("XHR error"));
                    };
                    try {
                      xhr.send(body);
                    } catch (err) {
                      process.nextTick(function() {
                        self2.emit("error", err);
                      });
                      return;
                    }
                  }
                };
                function statusValid(xhr) {
                  try {
                    var status = xhr.status;
                    return status !== null && status !== 0;
                  } catch (e) {
                    return false;
                  }
                }
                ClientRequest.prototype._onXHRProgress = function() {
                  var self2 = this;
                  if (!statusValid(self2._xhr) || self2._destroyed) return;
                  if (!self2._response) self2._connect();
                  self2._response._onXHRProgress();
                };
                ClientRequest.prototype._connect = function() {
                  var self2 = this;
                  if (self2._destroyed) return;
                  self2._response = new IncomingMessage(self2._xhr, self2._fetchResponse, self2._mode, self2._fetchTimer);
                  self2._response.on("error", function(err) {
                    self2.emit("error", err);
                  });
                  self2.emit("response", self2._response);
                };
                ClientRequest.prototype._write = function(chunk, encoding, cb) {
                  var self2 = this;
                  self2._body.push(chunk);
                  cb();
                };
                ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function() {
                  var self2 = this;
                  self2._destroyed = true;
                  global.clearTimeout(self2._fetchTimer);
                  if (self2._response) self2._response._destroyed = true;
                  if (self2._xhr) self2._xhr.abort();
                  else if (self2._fetchAbortController) self2._fetchAbortController.abort();
                };
                ClientRequest.prototype.end = function(data, encoding, cb) {
                  var self2 = this;
                  if (typeof data === "function") {
                    cb = data;
                    data = void 0;
                  }
                  stream.Writable.prototype.end.call(self2, data, encoding, cb);
                };
                ClientRequest.prototype.flushHeaders = function() {
                };
                ClientRequest.prototype.setTimeout = function() {
                };
                ClientRequest.prototype.setNoDelay = function() {
                };
                ClientRequest.prototype.setSocketKeepAlive = function() {
                };
                var unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
              }).call(this, __webpack_require__(
                /*! ./../../buffer/index.js */
                "./node_modules/buffer/index.js"
              ).Buffer, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ), __webpack_require__(
                /*! ./../../process/browser.js */
                "./node_modules/process/browser.js"
              ));
            })
          ),
          /***/
          "./node_modules/stream-http/lib/response.js": (
            /*!**************************************************!*\
              !*** ./node_modules/stream-http/lib/response.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(process, global, Buffer) {
                var capability = __webpack_require__(
                  /*! ./capability */
                  "./node_modules/stream-http/lib/capability.js"
                );
                var inherits = __webpack_require__(
                  /*! inherits */
                  "./node_modules/inherits/inherits_browser.js"
                );
                var stream = __webpack_require__(
                  /*! readable-stream */
                  "./node_modules/readable-stream/readable-browser.js"
                );
                var rStates = exports2.readyStates = {
                  UNSENT: 0,
                  OPENED: 1,
                  HEADERS_RECEIVED: 2,
                  LOADING: 3,
                  DONE: 4
                };
                var IncomingMessage = exports2.IncomingMessage = function(xhr, response, mode, fetchTimer) {
                  var self2 = this;
                  stream.Readable.call(self2);
                  self2._mode = mode;
                  self2.headers = {};
                  self2.rawHeaders = [];
                  self2.trailers = {};
                  self2.rawTrailers = [];
                  self2.on("end", function() {
                    process.nextTick(function() {
                      self2.emit("close");
                    });
                  });
                  if (mode === "fetch") {
                    var read = function read2() {
                      reader.read().then(function(result) {
                        if (self2._destroyed) return;
                        if (result.done) {
                          global.clearTimeout(fetchTimer);
                          self2.push(null);
                          return;
                        }
                        self2.push(new Buffer(result.value));
                        read2();
                      })["catch"](function(err) {
                        global.clearTimeout(fetchTimer);
                        if (!self2._destroyed) self2.emit("error", err);
                      });
                    };
                    self2._fetchResponse = response;
                    self2.url = response.url;
                    self2.statusCode = response.status;
                    self2.statusMessage = response.statusText;
                    response.headers.forEach(function(header, key) {
                      self2.headers[key.toLowerCase()] = header;
                      self2.rawHeaders.push(key, header);
                    });
                    if (capability.writableStream) {
                      var writable = new WritableStream({
                        write: function write(chunk) {
                          return new Promise(function(resolve, reject) {
                            if (self2._destroyed) {
                              reject();
                            } else if (self2.push(new Buffer(chunk))) {
                              resolve();
                            } else {
                              self2._resumeFetch = resolve;
                            }
                          });
                        },
                        close: function close() {
                          global.clearTimeout(fetchTimer);
                          if (!self2._destroyed) self2.push(null);
                        },
                        abort: function abort(err) {
                          if (!self2._destroyed) self2.emit("error", err);
                        }
                      });
                      try {
                        response.body.pipeTo(writable)["catch"](function(err) {
                          global.clearTimeout(fetchTimer);
                          if (!self2._destroyed) self2.emit("error", err);
                        });
                        return;
                      } catch (e) {
                      }
                    }
                    var reader = response.body.getReader();
                    read();
                  } else {
                    self2._xhr = xhr;
                    self2._pos = 0;
                    self2.url = xhr.responseURL;
                    self2.statusCode = xhr.status;
                    self2.statusMessage = xhr.statusText;
                    var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
                    headers.forEach(function(header) {
                      var matches = header.match(/^([^:]+):\s*(.*)/);
                      if (matches) {
                        var key = matches[1].toLowerCase();
                        if (key === "set-cookie") {
                          if (self2.headers[key] === void 0) {
                            self2.headers[key] = [];
                          }
                          self2.headers[key].push(matches[2]);
                        } else if (self2.headers[key] !== void 0) {
                          self2.headers[key] += ", " + matches[2];
                        } else {
                          self2.headers[key] = matches[2];
                        }
                        self2.rawHeaders.push(matches[1], matches[2]);
                      }
                    });
                    self2._charset = "x-user-defined";
                    if (!capability.overrideMimeType) {
                      var mimeType = self2.rawHeaders["mime-type"];
                      if (mimeType) {
                        var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
                        if (charsetMatch) {
                          self2._charset = charsetMatch[1].toLowerCase();
                        }
                      }
                      if (!self2._charset) self2._charset = "utf-8";
                    }
                  }
                };
                inherits(IncomingMessage, stream.Readable);
                IncomingMessage.prototype._read = function() {
                  var self2 = this;
                  var resolve = self2._resumeFetch;
                  if (resolve) {
                    self2._resumeFetch = null;
                    resolve();
                  }
                };
                IncomingMessage.prototype._onXHRProgress = function() {
                  var self2 = this;
                  var xhr = self2._xhr;
                  var response = null;
                  switch (self2._mode) {
                    case "text:vbarray":
                      if (xhr.readyState !== rStates.DONE) break;
                      try {
                        response = new global.VBArray(xhr.responseBody).toArray();
                      } catch (e) {
                      }
                      if (response !== null) {
                        self2.push(new Buffer(response));
                        break;
                      }
                    // Falls through in IE8	
                    case "text":
                      try {
                        response = xhr.responseText;
                      } catch (e) {
                        self2._mode = "text:vbarray";
                        break;
                      }
                      if (response.length > self2._pos) {
                        var newData = response.substr(self2._pos);
                        if (self2._charset === "x-user-defined") {
                          var buffer = new Buffer(newData.length);
                          for (var i = 0; i < newData.length; i++) buffer[i] = newData.charCodeAt(i) & 255;
                          self2.push(buffer);
                        } else {
                          self2.push(newData, self2._charset);
                        }
                        self2._pos = response.length;
                      }
                      break;
                    case "arraybuffer":
                      if (xhr.readyState !== rStates.DONE || !xhr.response) break;
                      response = xhr.response;
                      self2.push(new Buffer(new Uint8Array(response)));
                      break;
                    case "moz-chunked-arraybuffer":
                      response = xhr.response;
                      if (xhr.readyState !== rStates.LOADING || !response) break;
                      self2.push(new Buffer(new Uint8Array(response)));
                      break;
                    case "ms-stream":
                      response = xhr.response;
                      if (xhr.readyState !== rStates.LOADING) break;
                      var reader = new global.MSStreamReader();
                      reader.onprogress = function() {
                        if (reader.result.byteLength > self2._pos) {
                          self2.push(new Buffer(new Uint8Array(reader.result.slice(self2._pos))));
                          self2._pos = reader.result.byteLength;
                        }
                      };
                      reader.onload = function() {
                        self2.push(null);
                      };
                      reader.readAsArrayBuffer(response);
                      break;
                  }
                  if (self2._xhr.readyState === rStates.DONE && self2._mode !== "ms-stream") {
                    self2.push(null);
                  }
                };
              }).call(this, __webpack_require__(
                /*! ./../../process/browser.js */
                "./node_modules/process/browser.js"
              ), __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ), __webpack_require__(
                /*! ./../../buffer/index.js */
                "./node_modules/buffer/index.js"
              ).Buffer);
            })
          ),
          /***/
          "./node_modules/string_decoder/lib/string_decoder.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Buffer = __webpack_require__(
                /*! safe-buffer */
                "./node_modules/safe-buffer/index.js"
              ).Buffer;
              var isEncoding = Buffer.isEncoding || function(encoding) {
                encoding = "" + encoding;
                switch (encoding && encoding.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return true;
                  default:
                    return false;
                }
              };
              function _normalizeEncoding(enc) {
                if (!enc) return "utf8";
                var retried;
                while (true) {
                  switch (enc) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return enc;
                    default:
                      if (retried) return;
                      enc = ("" + enc).toLowerCase();
                      retried = true;
                  }
                }
              }
              function normalizeEncoding(enc) {
                var nenc = _normalizeEncoding(enc);
                if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
                return nenc || enc;
              }
              exports2.StringDecoder = StringDecoder;
              function StringDecoder(encoding) {
                this.encoding = normalizeEncoding(encoding);
                var nb;
                switch (this.encoding) {
                  case "utf16le":
                    this.text = utf16Text;
                    this.end = utf16End;
                    nb = 4;
                    break;
                  case "utf8":
                    this.fillLast = utf8FillLast;
                    nb = 4;
                    break;
                  case "base64":
                    this.text = base64Text;
                    this.end = base64End;
                    nb = 3;
                    break;
                  default:
                    this.write = simpleWrite;
                    this.end = simpleEnd;
                    return;
                }
                this.lastNeed = 0;
                this.lastTotal = 0;
                this.lastChar = Buffer.allocUnsafe(nb);
              }
              StringDecoder.prototype.write = function(buf) {
                if (buf.length === 0) return "";
                var r;
                var i;
                if (this.lastNeed) {
                  r = this.fillLast(buf);
                  if (r === void 0) return "";
                  i = this.lastNeed;
                  this.lastNeed = 0;
                } else {
                  i = 0;
                }
                if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
                return r || "";
              };
              StringDecoder.prototype.end = utf8End;
              StringDecoder.prototype.text = utf8Text;
              StringDecoder.prototype.fillLast = function(buf) {
                if (this.lastNeed <= buf.length) {
                  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
                this.lastNeed -= buf.length;
              };
              function utf8CheckByte(_byte) {
                if (_byte <= 127) return 0;
                else if (_byte >> 5 === 6) return 2;
                else if (_byte >> 4 === 14) return 3;
                else if (_byte >> 3 === 30) return 4;
                return _byte >> 6 === 2 ? -1 : -2;
              }
              function utf8CheckIncomplete(self2, buf, i) {
                var j = buf.length - 1;
                if (j < i) return 0;
                var nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) self2.lastNeed = nb - 1;
                  return nb;
                }
                if (--j < i || nb === -2) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) self2.lastNeed = nb - 2;
                  return nb;
                }
                if (--j < i || nb === -2) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                  if (nb > 0) {
                    if (nb === 2) nb = 0;
                    else self2.lastNeed = nb - 3;
                  }
                  return nb;
                }
                return 0;
              }
              function utf8CheckExtraBytes(self2, buf, p) {
                if ((buf[0] & 192) !== 128) {
                  self2.lastNeed = 0;
                  return "�";
                }
                if (self2.lastNeed > 1 && buf.length > 1) {
                  if ((buf[1] & 192) !== 128) {
                    self2.lastNeed = 1;
                    return "�";
                  }
                  if (self2.lastNeed > 2 && buf.length > 2) {
                    if ((buf[2] & 192) !== 128) {
                      self2.lastNeed = 2;
                      return "�";
                    }
                  }
                }
              }
              function utf8FillLast(buf) {
                var p = this.lastTotal - this.lastNeed;
                var r = utf8CheckExtraBytes(this, buf);
                if (r !== void 0) return r;
                if (this.lastNeed <= buf.length) {
                  buf.copy(this.lastChar, p, 0, this.lastNeed);
                  return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, p, 0, buf.length);
                this.lastNeed -= buf.length;
              }
              function utf8Text(buf, i) {
                var total = utf8CheckIncomplete(this, buf, i);
                if (!this.lastNeed) return buf.toString("utf8", i);
                this.lastTotal = total;
                var end = buf.length - (total - this.lastNeed);
                buf.copy(this.lastChar, 0, end);
                return buf.toString("utf8", i, end);
              }
              function utf8End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) return r + "�";
                return r;
              }
              function utf16Text(buf, i) {
                if ((buf.length - i) % 2 === 0) {
                  var r = buf.toString("utf16le", i);
                  if (r) {
                    var c = r.charCodeAt(r.length - 1);
                    if (c >= 55296 && c <= 56319) {
                      this.lastNeed = 2;
                      this.lastTotal = 4;
                      this.lastChar[0] = buf[buf.length - 2];
                      this.lastChar[1] = buf[buf.length - 1];
                      return r.slice(0, -1);
                    }
                  }
                  return r;
                }
                this.lastNeed = 1;
                this.lastTotal = 2;
                this.lastChar[0] = buf[buf.length - 1];
                return buf.toString("utf16le", i, buf.length - 1);
              }
              function utf16End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) {
                  var end = this.lastTotal - this.lastNeed;
                  return r + this.lastChar.toString("utf16le", 0, end);
                }
                return r;
              }
              function base64Text(buf, i) {
                var n = (buf.length - i) % 3;
                if (n === 0) return buf.toString("base64", i);
                this.lastNeed = 3 - n;
                this.lastTotal = 3;
                if (n === 1) {
                  this.lastChar[0] = buf[buf.length - 1];
                } else {
                  this.lastChar[0] = buf[buf.length - 2];
                  this.lastChar[1] = buf[buf.length - 1];
                }
                return buf.toString("base64", i, buf.length - n);
              }
              function base64End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
                return r;
              }
              function simpleWrite(buf) {
                return buf.toString(this.encoding);
              }
              function simpleEnd(buf) {
                return buf && buf.length ? this.write(buf) : "";
              }
            })
          ),
          /***/
          "./node_modules/timers-browserify/main.js": (
            /*!************************************************!*\
              !*** ./node_modules/timers-browserify/main.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global) {
                var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
                var apply = Function.prototype.apply;
                exports2.setTimeout = function() {
                  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
                };
                exports2.setInterval = function() {
                  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
                };
                exports2.clearTimeout = exports2.clearInterval = function(timeout) {
                  if (timeout) {
                    timeout.close();
                  }
                };
                function Timeout(id, clearFn) {
                  this._id = id;
                  this._clearFn = clearFn;
                }
                Timeout.prototype.unref = Timeout.prototype.ref = function() {
                };
                Timeout.prototype.close = function() {
                  this._clearFn.call(scope, this._id);
                };
                exports2.enroll = function(item, msecs) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = msecs;
                };
                exports2.unenroll = function(item) {
                  clearTimeout(item._idleTimeoutId);
                  item._idleTimeout = -1;
                };
                exports2._unrefActive = exports2.active = function(item) {
                  clearTimeout(item._idleTimeoutId);
                  var msecs = item._idleTimeout;
                  if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                      if (item._onTimeout) item._onTimeout();
                    }, msecs);
                  }
                };
                __webpack_require__(
                  /*! setimmediate */
                  "./node_modules/setimmediate/setImmediate.js"
                );
                exports2.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
                exports2.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
              }).call(this, __webpack_require__(
                /*! ./../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/to-arraybuffer/index.js": (
            /*!**********************************************!*\
              !*** ./node_modules/to-arraybuffer/index.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Buffer = __webpack_require__(
                /*! buffer */
                "./node_modules/buffer/index.js"
              ).Buffer;
              module2.exports = function(buf) {
                if (buf instanceof Uint8Array) {
                  if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
                    return buf.buffer;
                  } else if (typeof buf.buffer.slice === "function") {
                    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
                  }
                }
                if (Buffer.isBuffer(buf)) {
                  var arrayCopy = new Uint8Array(buf.length);
                  var len = buf.length;
                  for (var i = 0; i < len; i++) {
                    arrayCopy[i] = buf[i];
                  }
                  return arrayCopy.buffer;
                } else {
                  throw new Error("Argument must be a Buffer");
                }
              };
            })
          ),
          /***/
          "./node_modules/url/url.js": (
            /*!*********************************!*\
              !*** ./node_modules/url/url.js ***!
              \*********************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              var punycode = __webpack_require__(
                /*! punycode */
                "./node_modules/node-libs-browser/node_modules/punycode/punycode.js"
              );
              var util = __webpack_require__(
                /*! ./util */
                "./node_modules/url/util.js"
              );
              exports2.parse = urlParse;
              exports2.resolve = urlResolve;
              exports2.resolveObject = urlResolveObject;
              exports2.format = urlFormat;
              exports2.Url = Url;
              function Url() {
                this.protocol = null;
                this.slashes = null;
                this.auth = null;
                this.host = null;
                this.port = null;
                this.hostname = null;
                this.hash = null;
                this.search = null;
                this.query = null;
                this.pathname = null;
                this.path = null;
                this.href = null;
              }
              var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
                "javascript": true,
                "javascript:": true
              }, hostlessProtocol = {
                "javascript": true,
                "javascript:": true
              }, slashedProtocol = {
                "http": true,
                "https": true,
                "ftp": true,
                "gopher": true,
                "file": true,
                "http:": true,
                "https:": true,
                "ftp:": true,
                "gopher:": true,
                "file:": true
              }, querystring = __webpack_require__(
                /*! querystring */
                "./node_modules/querystring-es3/index.js"
              );
              function urlParse(url, parseQueryString, slashesDenoteHost) {
                if (url && util.isObject(url) && url instanceof Url) return url;
                var u = new Url();
                u.parse(url, parseQueryString, slashesDenoteHost);
                return u;
              }
              Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
                if (!util.isString(url)) {
                  throw new TypeError("Parameter 'url' must be a string, not " + _typeof(url));
                }
                var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
                uSplit[0] = uSplit[0].replace(slashRegex, "/");
                url = uSplit.join(splitter);
                var rest = url;
                rest = rest.trim();
                if (!slashesDenoteHost && url.split("#").length === 1) {
                  var simplePath = simplePathPattern.exec(rest);
                  if (simplePath) {
                    this.path = rest;
                    this.href = rest;
                    this.pathname = simplePath[1];
                    if (simplePath[2]) {
                      this.search = simplePath[2];
                      if (parseQueryString) {
                        this.query = querystring.parse(this.search.substr(1));
                      } else {
                        this.query = this.search.substr(1);
                      }
                    } else if (parseQueryString) {
                      this.search = "";
                      this.query = {};
                    }
                    return this;
                  }
                }
                var proto = protocolPattern.exec(rest);
                if (proto) {
                  proto = proto[0];
                  var lowerProto = proto.toLowerCase();
                  this.protocol = lowerProto;
                  rest = rest.substr(proto.length);
                }
                if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                  var slashes = rest.substr(0, 2) === "//";
                  if (slashes && !(proto && hostlessProtocol[proto])) {
                    rest = rest.substr(2);
                    this.slashes = true;
                  }
                }
                if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
                  var hostEnd = -1;
                  for (var i = 0; i < hostEndingChars.length; i++) {
                    var hec = rest.indexOf(hostEndingChars[i]);
                    if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
                  }
                  var auth, atSign;
                  if (hostEnd === -1) {
                    atSign = rest.lastIndexOf("@");
                  } else {
                    atSign = rest.lastIndexOf("@", hostEnd);
                  }
                  if (atSign !== -1) {
                    auth = rest.slice(0, atSign);
                    rest = rest.slice(atSign + 1);
                    this.auth = decodeURIComponent(auth);
                  }
                  hostEnd = -1;
                  for (var i = 0; i < nonHostChars.length; i++) {
                    var hec = rest.indexOf(nonHostChars[i]);
                    if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
                  }
                  if (hostEnd === -1) hostEnd = rest.length;
                  this.host = rest.slice(0, hostEnd);
                  rest = rest.slice(hostEnd);
                  this.parseHost();
                  this.hostname = this.hostname || "";
                  var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
                  if (!ipv6Hostname) {
                    var hostparts = this.hostname.split(/\./);
                    for (var i = 0, l = hostparts.length; i < l; i++) {
                      var part = hostparts[i];
                      if (!part) continue;
                      if (!part.match(hostnamePartPattern)) {
                        var newpart = "";
                        for (var j = 0, k = part.length; j < k; j++) {
                          if (part.charCodeAt(j) > 127) {
                            newpart += "x";
                          } else {
                            newpart += part[j];
                          }
                        }
                        if (!newpart.match(hostnamePartPattern)) {
                          var validParts = hostparts.slice(0, i);
                          var notHost = hostparts.slice(i + 1);
                          var bit = part.match(hostnamePartStart);
                          if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                          }
                          if (notHost.length) {
                            rest = "/" + notHost.join(".") + rest;
                          }
                          this.hostname = validParts.join(".");
                          break;
                        }
                      }
                    }
                  }
                  if (this.hostname.length > hostnameMaxLen) {
                    this.hostname = "";
                  } else {
                    this.hostname = this.hostname.toLowerCase();
                  }
                  if (!ipv6Hostname) {
                    this.hostname = punycode.toASCII(this.hostname);
                  }
                  var p = this.port ? ":" + this.port : "";
                  var h = this.hostname || "";
                  this.host = h + p;
                  this.href += this.host;
                  if (ipv6Hostname) {
                    this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                    if (rest[0] !== "/") {
                      rest = "/" + rest;
                    }
                  }
                }
                if (!unsafeProtocol[lowerProto]) {
                  for (var i = 0, l = autoEscape.length; i < l; i++) {
                    var ae = autoEscape[i];
                    if (rest.indexOf(ae) === -1) continue;
                    var esc = encodeURIComponent(ae);
                    if (esc === ae) {
                      esc = escape(ae);
                    }
                    rest = rest.split(ae).join(esc);
                  }
                }
                var hash = rest.indexOf("#");
                if (hash !== -1) {
                  this.hash = rest.substr(hash);
                  rest = rest.slice(0, hash);
                }
                var qm = rest.indexOf("?");
                if (qm !== -1) {
                  this.search = rest.substr(qm);
                  this.query = rest.substr(qm + 1);
                  if (parseQueryString) {
                    this.query = querystring.parse(this.query);
                  }
                  rest = rest.slice(0, qm);
                } else if (parseQueryString) {
                  this.search = "";
                  this.query = {};
                }
                if (rest) this.pathname = rest;
                if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
                  this.pathname = "/";
                }
                if (this.pathname || this.search) {
                  var p = this.pathname || "";
                  var s = this.search || "";
                  this.path = p + s;
                }
                this.href = this.format();
                return this;
              };
              function urlFormat(obj) {
                if (util.isString(obj)) obj = urlParse(obj);
                if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
                return obj.format();
              }
              Url.prototype.format = function() {
                var auth = this.auth || "";
                if (auth) {
                  auth = encodeURIComponent(auth);
                  auth = auth.replace(/%3A/i, ":");
                  auth += "@";
                }
                var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
                if (this.host) {
                  host = auth + this.host;
                } else if (this.hostname) {
                  host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
                  if (this.port) {
                    host += ":" + this.port;
                  }
                }
                if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
                  query = querystring.stringify(this.query);
                }
                var search = this.search || query && "?" + query || "";
                if (protocol && protocol.substr(-1) !== ":") protocol += ":";
                if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
                  host = "//" + (host || "");
                  if (pathname && pathname.charAt(0) !== "/") pathname = "/" + pathname;
                } else if (!host) {
                  host = "";
                }
                if (hash && hash.charAt(0) !== "#") hash = "#" + hash;
                if (search && search.charAt(0) !== "?") search = "?" + search;
                pathname = pathname.replace(/[?#]/g, function(match) {
                  return encodeURIComponent(match);
                });
                search = search.replace("#", "%23");
                return protocol + host + pathname + search + hash;
              };
              function urlResolve(source, relative) {
                return urlParse(source, false, true).resolve(relative);
              }
              Url.prototype.resolve = function(relative) {
                return this.resolveObject(urlParse(relative, false, true)).format();
              };
              function urlResolveObject(source, relative) {
                if (!source) return relative;
                return urlParse(source, false, true).resolveObject(relative);
              }
              Url.prototype.resolveObject = function(relative) {
                if (util.isString(relative)) {
                  var rel = new Url();
                  rel.parse(relative, false, true);
                  relative = rel;
                }
                var result = new Url();
                var tkeys = Object.keys(this);
                for (var tk = 0; tk < tkeys.length; tk++) {
                  var tkey = tkeys[tk];
                  result[tkey] = this[tkey];
                }
                result.hash = relative.hash;
                if (relative.href === "") {
                  result.href = result.format();
                  return result;
                }
                if (relative.slashes && !relative.protocol) {
                  var rkeys = Object.keys(relative);
                  for (var rk = 0; rk < rkeys.length; rk++) {
                    var rkey = rkeys[rk];
                    if (rkey !== "protocol") result[rkey] = relative[rkey];
                  }
                  if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
                    result.path = result.pathname = "/";
                  }
                  result.href = result.format();
                  return result;
                }
                if (relative.protocol && relative.protocol !== result.protocol) {
                  if (!slashedProtocol[relative.protocol]) {
                    var keys = Object.keys(relative);
                    for (var v = 0; v < keys.length; v++) {
                      var k = keys[v];
                      result[k] = relative[k];
                    }
                    result.href = result.format();
                    return result;
                  }
                  result.protocol = relative.protocol;
                  if (!relative.host && !hostlessProtocol[relative.protocol]) {
                    var relPath = (relative.pathname || "").split("/");
                    while (relPath.length && !(relative.host = relPath.shift())) ;
                    if (!relative.host) relative.host = "";
                    if (!relative.hostname) relative.hostname = "";
                    if (relPath[0] !== "") relPath.unshift("");
                    if (relPath.length < 2) relPath.unshift("");
                    result.pathname = relPath.join("/");
                  } else {
                    result.pathname = relative.pathname;
                  }
                  result.search = relative.search;
                  result.query = relative.query;
                  result.host = relative.host || "";
                  result.auth = relative.auth;
                  result.hostname = relative.hostname || relative.host;
                  result.port = relative.port;
                  if (result.pathname || result.search) {
                    var p = result.pathname || "";
                    var s = result.search || "";
                    result.path = p + s;
                  }
                  result.slashes = result.slashes || relative.slashes;
                  result.href = result.format();
                  return result;
                }
                var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
                if (psychotic) {
                  result.hostname = "";
                  result.port = null;
                  if (result.host) {
                    if (srcPath[0] === "") srcPath[0] = result.host;
                    else srcPath.unshift(result.host);
                  }
                  result.host = "";
                  if (relative.protocol) {
                    relative.hostname = null;
                    relative.port = null;
                    if (relative.host) {
                      if (relPath[0] === "") relPath[0] = relative.host;
                      else relPath.unshift(relative.host);
                    }
                    relative.host = null;
                  }
                  mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
                }
                if (isRelAbs) {
                  result.host = relative.host || relative.host === "" ? relative.host : result.host;
                  result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
                  result.search = relative.search;
                  result.query = relative.query;
                  srcPath = relPath;
                } else if (relPath.length) {
                  if (!srcPath) srcPath = [];
                  srcPath.pop();
                  srcPath = srcPath.concat(relPath);
                  result.search = relative.search;
                  result.query = relative.query;
                } else if (!util.isNullOrUndefined(relative.search)) {
                  if (psychotic) {
                    result.hostname = result.host = srcPath.shift();
                    var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                    if (authInHost) {
                      result.auth = authInHost.shift();
                      result.host = result.hostname = authInHost.shift();
                    }
                  }
                  result.search = relative.search;
                  result.query = relative.query;
                  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
                    result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
                  }
                  result.href = result.format();
                  return result;
                }
                if (!srcPath.length) {
                  result.pathname = null;
                  if (result.search) {
                    result.path = "/" + result.search;
                  } else {
                    result.path = null;
                  }
                  result.href = result.format();
                  return result;
                }
                var last = srcPath.slice(-1)[0];
                var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
                var up = 0;
                for (var i = srcPath.length; i >= 0; i--) {
                  last = srcPath[i];
                  if (last === ".") {
                    srcPath.splice(i, 1);
                  } else if (last === "..") {
                    srcPath.splice(i, 1);
                    up++;
                  } else if (up) {
                    srcPath.splice(i, 1);
                    up--;
                  }
                }
                if (!mustEndAbs && !removeAllDots) {
                  for (; up--; up) {
                    srcPath.unshift("..");
                  }
                }
                if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
                  srcPath.unshift("");
                }
                if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
                  srcPath.push("");
                }
                var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
                if (psychotic) {
                  result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
                  var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
                  if (authInHost) {
                    result.auth = authInHost.shift();
                    result.host = result.hostname = authInHost.shift();
                  }
                }
                mustEndAbs = mustEndAbs || result.host && srcPath.length;
                if (mustEndAbs && !isAbsolute) {
                  srcPath.unshift("");
                }
                if (!srcPath.length) {
                  result.pathname = null;
                  result.path = null;
                } else {
                  result.pathname = srcPath.join("/");
                }
                if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
                  result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
                }
                result.auth = relative.auth || result.auth;
                result.slashes = result.slashes || relative.slashes;
                result.href = result.format();
                return result;
              };
              Url.prototype.parseHost = function() {
                var host = this.host;
                var port = portPattern.exec(host);
                if (port) {
                  port = port[0];
                  if (port !== ":") {
                    this.port = port.substr(1);
                  }
                  host = host.substr(0, host.length - port.length);
                }
                if (host) this.hostname = host;
              };
            })
          ),
          /***/
          "./node_modules/url/util.js": (
            /*!**********************************!*\
              !*** ./node_modules/url/util.js ***!
              \**********************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              module2.exports = {
                isString: function isString(arg) {
                  return typeof arg === "string";
                },
                isObject: function isObject(arg) {
                  return _typeof(arg) === "object" && arg !== null;
                },
                isNull: function isNull(arg) {
                  return arg === null;
                },
                isNullOrUndefined: function isNullOrUndefined(arg) {
                  return arg == null;
                }
              };
            })
          ),
          /***/
          "./node_modules/util-deprecate/browser.js": (
            /*!************************************************!*\
              !*** ./node_modules/util-deprecate/browser.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function(global) {
                module2.exports = deprecate;
                function deprecate(fn, msg) {
                  if (config("noDeprecation")) {
                    return fn;
                  }
                  var warned = false;
                  function deprecated() {
                    if (!warned) {
                      if (config("throwDeprecation")) {
                        throw new Error(msg);
                      } else if (config("traceDeprecation")) {
                        console.trace(msg);
                      } else {
                        console.warn(msg);
                      }
                      warned = true;
                    }
                    return fn.apply(this, arguments);
                  }
                  return deprecated;
                }
                function config(name) {
                  try {
                    if (!global.localStorage) return false;
                  } catch (_) {
                    return false;
                  }
                  var val = global.localStorage[name];
                  if (null == val) return false;
                  return String(val).toLowerCase() === "true";
                }
              }).call(this, __webpack_require__(
                /*! ./../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            })
          ),
          /***/
          "./node_modules/webpack/buildin/amd-options.js": (
            /*!****************************************!*\
              !*** (webpack)/buildin/amd-options.js ***!
              \****************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              (function(__webpack_amd_options__) {
                module2.exports = __webpack_amd_options__;
              }).call(this, {});
            })
          ),
          /***/
          "./node_modules/webpack/buildin/global.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              var g;
              g = /* @__PURE__ */ (function() {
                return this;
              })();
              try {
                g = g || new Function("return this")();
              } catch (e) {
                if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
              }
              module2.exports = g;
            })
          ),
          /***/
          "./node_modules/webpack/buildin/module.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/module.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              module2.exports = function(module3) {
                if (!module3.webpackPolyfill) {
                  module3.deprecate = function() {
                  };
                  module3.paths = [];
                  if (!module3.children) module3.children = [];
                  Object.defineProperty(module3, "loaded", {
                    enumerable: true,
                    get: function get() {
                      return module3.l;
                    }
                  });
                  Object.defineProperty(module3, "id", {
                    enumerable: true,
                    get: function get() {
                      return module3.i;
                    }
                  });
                  module3.webpackPolyfill = 1;
                }
                return module3;
              };
            })
          ),
          /***/
          "./node_modules/xml2js/lib/bom.js": (
            /*!****************************************!*\
              !*** ./node_modules/xml2js/lib/bom.js ***!
              \****************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              (function() {
                exports2.stripBOM = function(str) {
                  if (str[0] === "\uFEFF") {
                    return str.substring(1);
                  } else {
                    return str;
                  }
                };
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xml2js/lib/builder.js": (
            /*!********************************************!*\
              !*** ./node_modules/xml2js/lib/builder.js ***!
              \********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              (function() {
                var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
                builder = __webpack_require__(
                  /*! xmlbuilder */
                  "xmlbuilder"
                );
                defaults = __webpack_require__(
                  /*! ./defaults */
                  "./node_modules/xml2js/lib/defaults.js"
                ).defaults;
                requiresCDATA = function requiresCDATA2(entry) {
                  return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
                };
                wrapCDATA = function wrapCDATA2(entry) {
                  return "<![CDATA[" + escapeCDATA(entry) + "]]>";
                };
                escapeCDATA = function escapeCDATA2(entry) {
                  return entry.replace("]]>", "]]]]><![CDATA[>");
                };
                exports2.Builder = (function() {
                  function Builder(opts) {
                    var key, ref, value;
                    this.options = {};
                    ref = defaults["0.2"];
                    for (key in ref) {
                      if (!hasProp.call(ref, key)) continue;
                      value = ref[key];
                      this.options[key] = value;
                    }
                    for (key in opts) {
                      if (!hasProp.call(opts, key)) continue;
                      value = opts[key];
                      this.options[key] = value;
                    }
                  }
                  Builder.prototype.buildObject = function(rootObj) {
                    var attrkey, charkey, render, rootElement, rootName;
                    attrkey = this.options.attrkey;
                    charkey = this.options.charkey;
                    if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
                      rootName = Object.keys(rootObj)[0];
                      rootObj = rootObj[rootName];
                    } else {
                      rootName = this.options.rootName;
                    }
                    render = /* @__PURE__ */ (function(_this) {
                      return function(element, obj) {
                        var attr, child, entry, index, key, value;
                        if (_typeof(obj) !== "object") {
                          if (_this.options.cdata && requiresCDATA(obj)) {
                            element.raw(wrapCDATA(obj));
                          } else {
                            element.txt(obj);
                          }
                        } else if (Array.isArray(obj)) {
                          for (index in obj) {
                            if (!hasProp.call(obj, index)) continue;
                            child = obj[index];
                            for (key in child) {
                              entry = child[key];
                              element = render(element.ele(key), entry).up();
                            }
                          }
                        } else {
                          for (key in obj) {
                            if (!hasProp.call(obj, key)) continue;
                            child = obj[key];
                            if (key === attrkey) {
                              if (_typeof(child) === "object") {
                                for (attr in child) {
                                  value = child[attr];
                                  element = element.att(attr, value);
                                }
                              }
                            } else if (key === charkey) {
                              if (_this.options.cdata && requiresCDATA(child)) {
                                element = element.raw(wrapCDATA(child));
                              } else {
                                element = element.txt(child);
                              }
                            } else if (Array.isArray(child)) {
                              for (index in child) {
                                if (!hasProp.call(child, index)) continue;
                                entry = child[index];
                                if (typeof entry === "string") {
                                  if (_this.options.cdata && requiresCDATA(entry)) {
                                    element = element.ele(key).raw(wrapCDATA(entry)).up();
                                  } else {
                                    element = element.ele(key, entry).up();
                                  }
                                } else {
                                  element = render(element.ele(key), entry).up();
                                }
                              }
                            } else if (_typeof(child) === "object") {
                              element = render(element.ele(key), child).up();
                            } else {
                              if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) {
                                element = element.ele(key).raw(wrapCDATA(child)).up();
                              } else {
                                if (child == null) {
                                  child = "";
                                }
                                element = element.ele(key, child.toString()).up();
                              }
                            }
                          }
                        }
                        return element;
                      };
                    })(this);
                    rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
                      headless: this.options.headless,
                      allowSurrogateChars: this.options.allowSurrogateChars
                    });
                    return render(rootElement, rootObj).end(this.options.renderOpts);
                  };
                  return Builder;
                })();
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xml2js/lib/defaults.js": (
            /*!*********************************************!*\
              !*** ./node_modules/xml2js/lib/defaults.js ***!
              \*********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              (function() {
                exports2.defaults = {
                  "0.1": {
                    explicitCharkey: false,
                    trim: true,
                    normalize: true,
                    normalizeTags: false,
                    attrkey: "@",
                    charkey: "#",
                    explicitArray: false,
                    ignoreAttrs: false,
                    mergeAttrs: false,
                    explicitRoot: false,
                    validator: null,
                    xmlns: false,
                    explicitChildren: false,
                    childkey: "@@",
                    charsAsChildren: false,
                    includeWhiteChars: false,
                    async: false,
                    strict: true,
                    attrNameProcessors: null,
                    attrValueProcessors: null,
                    tagNameProcessors: null,
                    valueProcessors: null,
                    emptyTag: ""
                  },
                  "0.2": {
                    explicitCharkey: false,
                    trim: false,
                    normalize: false,
                    normalizeTags: false,
                    attrkey: "$",
                    charkey: "_",
                    explicitArray: true,
                    ignoreAttrs: false,
                    mergeAttrs: false,
                    explicitRoot: true,
                    validator: null,
                    xmlns: false,
                    explicitChildren: false,
                    preserveChildrenOrder: false,
                    childkey: "$$",
                    charsAsChildren: false,
                    includeWhiteChars: false,
                    async: false,
                    strict: true,
                    attrNameProcessors: null,
                    attrValueProcessors: null,
                    tagNameProcessors: null,
                    valueProcessors: null,
                    rootName: "root",
                    xmldec: {
                      "version": "1.0",
                      "encoding": "UTF-8",
                      "standalone": true
                    },
                    doctype: null,
                    renderOpts: {
                      "pretty": true,
                      "indent": "  ",
                      "newline": "\n"
                    },
                    headless: false,
                    chunkSize: 1e4,
                    emptyTag: "",
                    cdata: false
                  }
                };
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xml2js/lib/parser.js": (
            /*!*******************************************!*\
              !*** ./node_modules/xml2js/lib/parser.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                  return typeof obj2;
                } : function(obj2) {
                  return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                }, _typeof(obj);
              }
              (function() {
                var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate, bind = function bind2(fn, me) {
                  return function() {
                    return fn.apply(me, arguments);
                  };
                }, extend = function extend2(child, parent) {
                  for (var key in parent) {
                    if (hasProp.call(parent, key)) child[key] = parent[key];
                  }
                  function ctor() {
                    this.constructor = child;
                  }
                  ctor.prototype = parent.prototype;
                  child.prototype = new ctor();
                  child.__super__ = parent.prototype;
                  return child;
                }, hasProp = {}.hasOwnProperty;
                sax = __webpack_require__(
                  /*! sax */
                  "./node_modules/sax/lib/sax.js"
                );
                events = __webpack_require__(
                  /*! events */
                  "./node_modules/events/events.js"
                );
                bom = __webpack_require__(
                  /*! ./bom */
                  "./node_modules/xml2js/lib/bom.js"
                );
                processors = __webpack_require__(
                  /*! ./processors */
                  "./node_modules/xml2js/lib/processors.js"
                );
                setImmediate = __webpack_require__(
                  /*! timers */
                  "./node_modules/timers-browserify/main.js"
                ).setImmediate;
                defaults = __webpack_require__(
                  /*! ./defaults */
                  "./node_modules/xml2js/lib/defaults.js"
                ).defaults;
                isEmpty = function isEmpty2(thing) {
                  return _typeof(thing) === "object" && thing != null && Object.keys(thing).length === 0;
                };
                processItem = function processItem2(processors2, item, key) {
                  var i, len, process;
                  for (i = 0, len = processors2.length; i < len; i++) {
                    process = processors2[i];
                    item = process(item, key);
                  }
                  return item;
                };
                exports2.Parser = (function(superClass) {
                  extend(Parser2, superClass);
                  function Parser2(opts) {
                    this.parseStringPromise = bind(this.parseStringPromise, this);
                    this.parseString = bind(this.parseString, this);
                    this.reset = bind(this.reset, this);
                    this.assignOrPush = bind(this.assignOrPush, this);
                    this.processAsync = bind(this.processAsync, this);
                    var key, ref, value;
                    if (!(this instanceof exports2.Parser)) {
                      return new exports2.Parser(opts);
                    }
                    this.options = {};
                    ref = defaults["0.2"];
                    for (key in ref) {
                      if (!hasProp.call(ref, key)) continue;
                      value = ref[key];
                      this.options[key] = value;
                    }
                    for (key in opts) {
                      if (!hasProp.call(opts, key)) continue;
                      value = opts[key];
                      this.options[key] = value;
                    }
                    if (this.options.xmlns) {
                      this.options.xmlnskey = this.options.attrkey + "ns";
                    }
                    if (this.options.normalizeTags) {
                      if (!this.options.tagNameProcessors) {
                        this.options.tagNameProcessors = [];
                      }
                      this.options.tagNameProcessors.unshift(processors.normalize);
                    }
                    this.reset();
                  }
                  Parser2.prototype.processAsync = function() {
                    var chunk, err;
                    try {
                      if (this.remaining.length <= this.options.chunkSize) {
                        chunk = this.remaining;
                        this.remaining = "";
                        this.saxParser = this.saxParser.write(chunk);
                        return this.saxParser.close();
                      } else {
                        chunk = this.remaining.substr(0, this.options.chunkSize);
                        this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
                        this.saxParser = this.saxParser.write(chunk);
                        return setImmediate(this.processAsync);
                      }
                    } catch (error1) {
                      err = error1;
                      if (!this.saxParser.errThrown) {
                        this.saxParser.errThrown = true;
                        return this.emit(err);
                      }
                    }
                  };
                  Parser2.prototype.assignOrPush = function(obj, key, newValue) {
                    if (!(key in obj)) {
                      if (!this.options.explicitArray) {
                        return obj[key] = newValue;
                      } else {
                        return obj[key] = [newValue];
                      }
                    } else {
                      if (!(obj[key] instanceof Array)) {
                        obj[key] = [obj[key]];
                      }
                      return obj[key].push(newValue);
                    }
                  };
                  Parser2.prototype.reset = function() {
                    var attrkey, charkey, ontext, stack;
                    this.removeAllListeners();
                    this.saxParser = sax.parser(this.options.strict, {
                      trim: false,
                      normalize: false,
                      xmlns: this.options.xmlns
                    });
                    this.saxParser.errThrown = false;
                    this.saxParser.onerror = /* @__PURE__ */ (function(_this) {
                      return function(error) {
                        _this.saxParser.resume();
                        if (!_this.saxParser.errThrown) {
                          _this.saxParser.errThrown = true;
                          return _this.emit("error", error);
                        }
                      };
                    })(this);
                    this.saxParser.onend = /* @__PURE__ */ (function(_this) {
                      return function() {
                        if (!_this.saxParser.ended) {
                          _this.saxParser.ended = true;
                          return _this.emit("end", _this.resultObject);
                        }
                      };
                    })(this);
                    this.saxParser.ended = false;
                    this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
                    this.resultObject = null;
                    stack = [];
                    attrkey = this.options.attrkey;
                    charkey = this.options.charkey;
                    this.saxParser.onopentag = /* @__PURE__ */ (function(_this) {
                      return function(node) {
                        var key, newValue, obj, processedKey, ref;
                        obj = /* @__PURE__ */ Object.create(null);
                        obj[charkey] = "";
                        if (!_this.options.ignoreAttrs) {
                          ref = node.attributes;
                          for (key in ref) {
                            if (!hasProp.call(ref, key)) continue;
                            if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                              obj[attrkey] = /* @__PURE__ */ Object.create(null);
                            }
                            newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                            processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                            if (_this.options.mergeAttrs) {
                              _this.assignOrPush(obj, processedKey, newValue);
                            } else {
                              obj[attrkey][processedKey] = newValue;
                            }
                          }
                        }
                        obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
                        if (_this.options.xmlns) {
                          obj[_this.options.xmlnskey] = {
                            uri: node.uri,
                            local: node.local
                          };
                        }
                        return stack.push(obj);
                      };
                    })(this);
                    this.saxParser.onclosetag = /* @__PURE__ */ (function(_this) {
                      return function() {
                        var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
                        obj = stack.pop();
                        nodeName = obj["#name"];
                        if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
                          delete obj["#name"];
                        }
                        if (obj.cdata === true) {
                          cdata = obj.cdata;
                          delete obj.cdata;
                        }
                        s = stack[stack.length - 1];
                        if (obj[charkey].match(/^\s*$/) && !cdata) {
                          emptyStr = obj[charkey];
                          delete obj[charkey];
                        } else {
                          if (_this.options.trim) {
                            obj[charkey] = obj[charkey].trim();
                          }
                          if (_this.options.normalize) {
                            obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
                          }
                          obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
                          if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                            obj = obj[charkey];
                          }
                        }
                        if (isEmpty(obj)) {
                          if (typeof _this.options.emptyTag === "function") {
                            obj = _this.options.emptyTag();
                          } else {
                            obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
                          }
                        }
                        if (_this.options.validator != null) {
                          xpath = "/" + (function() {
                            var i, len, results;
                            results = [];
                            for (i = 0, len = stack.length; i < len; i++) {
                              node = stack[i];
                              results.push(node["#name"]);
                            }
                            return results;
                          })().concat(nodeName).join("/");
                          (function() {
                            var err;
                            try {
                              return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                            } catch (error1) {
                              err = error1;
                              return _this.emit("error", err);
                            }
                          })();
                        }
                        if (_this.options.explicitChildren && !_this.options.mergeAttrs && _typeof(obj) === "object") {
                          if (!_this.options.preserveChildrenOrder) {
                            node = /* @__PURE__ */ Object.create(null);
                            if (_this.options.attrkey in obj) {
                              node[_this.options.attrkey] = obj[_this.options.attrkey];
                              delete obj[_this.options.attrkey];
                            }
                            if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                              node[_this.options.charkey] = obj[_this.options.charkey];
                              delete obj[_this.options.charkey];
                            }
                            if (Object.getOwnPropertyNames(obj).length > 0) {
                              node[_this.options.childkey] = obj;
                            }
                            obj = node;
                          } else if (s) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            objClone = /* @__PURE__ */ Object.create(null);
                            for (key in obj) {
                              if (!hasProp.call(obj, key)) continue;
                              objClone[key] = obj[key];
                            }
                            s[_this.options.childkey].push(objClone);
                            delete obj["#name"];
                            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                              obj = obj[charkey];
                            }
                          }
                        }
                        if (stack.length > 0) {
                          return _this.assignOrPush(s, nodeName, obj);
                        } else {
                          if (_this.options.explicitRoot) {
                            old = obj;
                            obj = /* @__PURE__ */ Object.create(null);
                            obj[nodeName] = old;
                          }
                          _this.resultObject = obj;
                          _this.saxParser.ended = true;
                          return _this.emit("end", _this.resultObject);
                        }
                      };
                    })(this);
                    ontext = /* @__PURE__ */ (function(_this) {
                      return function(text) {
                        var charChild, s;
                        s = stack[stack.length - 1];
                        if (s) {
                          s[charkey] += text;
                          if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
                            s[_this.options.childkey] = s[_this.options.childkey] || [];
                            charChild = {
                              "#name": "__text__"
                            };
                            charChild[charkey] = text;
                            if (_this.options.normalize) {
                              charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                            }
                            s[_this.options.childkey].push(charChild);
                          }
                          return s;
                        }
                      };
                    })(this);
                    this.saxParser.ontext = ontext;
                    return this.saxParser.oncdata = /* @__PURE__ */ (function(_this) {
                      return function(text) {
                        var s;
                        s = ontext(text);
                        if (s) {
                          return s.cdata = true;
                        }
                      };
                    })();
                  };
                  Parser2.prototype.parseString = function(str, cb) {
                    var err;
                    if (cb != null && typeof cb === "function") {
                      this.on("end", function(result) {
                        this.reset();
                        return cb(null, result);
                      });
                      this.on("error", function(err2) {
                        this.reset();
                        return cb(err2);
                      });
                    }
                    try {
                      str = str.toString();
                      if (str.trim() === "") {
                        this.emit("end", null);
                        return true;
                      }
                      str = bom.stripBOM(str);
                      if (this.options.async) {
                        this.remaining = str;
                        setImmediate(this.processAsync);
                        return this.saxParser;
                      }
                      return this.saxParser.write(str).close();
                    } catch (error1) {
                      err = error1;
                      if (!(this.saxParser.errThrown || this.saxParser.ended)) {
                        this.emit("error", err);
                        return this.saxParser.errThrown = true;
                      } else if (this.saxParser.ended) {
                        throw err;
                      }
                    }
                  };
                  Parser2.prototype.parseStringPromise = function(str) {
                    return new Promise(/* @__PURE__ */ (function(_this) {
                      return function(resolve, reject) {
                        return _this.parseString(str, function(err, value) {
                          if (err) {
                            return reject(err);
                          } else {
                            return resolve(value);
                          }
                        });
                      };
                    })(this));
                  };
                  return Parser2;
                })(events);
                exports2.parseString = function(str, a, b) {
                  var cb, options, parser;
                  if (b != null) {
                    if (typeof b === "function") {
                      cb = b;
                    }
                    if (_typeof(a) === "object") {
                      options = a;
                    }
                  } else {
                    if (typeof a === "function") {
                      cb = a;
                    }
                    options = {};
                  }
                  parser = new exports2.Parser(options);
                  return parser.parseString(str, cb);
                };
                exports2.parseStringPromise = function(str, a) {
                  var options, parser;
                  if (_typeof(a) === "object") {
                    options = a;
                  }
                  parser = new exports2.Parser(options);
                  return parser.parseStringPromise(str);
                };
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xml2js/lib/processors.js": (
            /*!***********************************************!*\
              !*** ./node_modules/xml2js/lib/processors.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              (function() {
                var prefixMatch;
                prefixMatch = new RegExp(/(?!xmlns)^.*:/);
                exports2.normalize = function(str) {
                  return str.toLowerCase();
                };
                exports2.firstCharLowerCase = function(str) {
                  return str.charAt(0).toLowerCase() + str.slice(1);
                };
                exports2.stripPrefix = function(str) {
                  return str.replace(prefixMatch, "");
                };
                exports2.parseNumbers = function(str) {
                  if (!isNaN(str)) {
                    str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
                  }
                  return str;
                };
                exports2.parseBooleans = function(str) {
                  if (/^(?:true|false)$/i.test(str)) {
                    str = str.toLowerCase() === "true";
                  }
                  return str;
                };
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xml2js/lib/xml2js.js": (
            /*!*******************************************!*\
              !*** ./node_modules/xml2js/lib/xml2js.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2, __webpack_require__) {
              (function() {
                var builder, defaults, parser, processors, extend = function extend2(child, parent) {
                  for (var key in parent) {
                    if (hasProp.call(parent, key)) child[key] = parent[key];
                  }
                  function ctor() {
                    this.constructor = child;
                  }
                  ctor.prototype = parent.prototype;
                  child.prototype = new ctor();
                  child.__super__ = parent.prototype;
                  return child;
                }, hasProp = {}.hasOwnProperty;
                defaults = __webpack_require__(
                  /*! ./defaults */
                  "./node_modules/xml2js/lib/defaults.js"
                );
                builder = __webpack_require__(
                  /*! ./builder */
                  "./node_modules/xml2js/lib/builder.js"
                );
                parser = __webpack_require__(
                  /*! ./parser */
                  "./node_modules/xml2js/lib/parser.js"
                );
                processors = __webpack_require__(
                  /*! ./processors */
                  "./node_modules/xml2js/lib/processors.js"
                );
                exports2.defaults = defaults.defaults;
                exports2.processors = processors;
                exports2.ValidationError = (function(superClass) {
                  extend(ValidationError, superClass);
                  function ValidationError(message) {
                    this.message = message;
                  }
                  return ValidationError;
                })(Error);
                exports2.Builder = builder.Builder;
                exports2.Parser = parser.Parser;
                exports2.parseString = parser.parseString;
                exports2.parseStringPromise = parser.parseStringPromise;
              }).call(this);
            })
          ),
          /***/
          "./node_modules/xtend/immutable.js": (
            /*!*****************************************!*\
              !*** ./node_modules/xtend/immutable.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              module2.exports = extend;
              var hasOwnProperty = Object.prototype.hasOwnProperty;
              function extend() {
                var target = {};
                for (var i = 0; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                    if (hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }
                return target;
              }
            })
          ),
          /***/
          0: (
            /*!**********************!*\
              !*** util (ignored) ***!
              \**********************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
            })
          ),
          /***/
          1: (
            /*!**********************!*\
              !*** util (ignored) ***!
              \**********************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
            })
          ),
          /***/
          "xmlbuilder": (
            /*!*****************************!*\
              !*** external "xmlbuilder" ***!
              \*****************************/
            /*! no static exports found */
            /***/
            (function(module2, exports2) {
              module2.exports = __WEBPACK_EXTERNAL_MODULE_xmlbuilder__;
            })
          )
          /******/
        })
      );
    });
  })(rssParser$1);
  return rssParser$1.exports;
}
var rssParserExports = requireRssParser();
const Parser = /* @__PURE__ */ getDefaultExportFromCjs(rssParserExports);
class RssConnection extends BaseConnection {
  url = "";
  parser = null;
  constructor() {
    super();
  }
  init(configuration) {
    super.init(configuration);
    this.url = configuration.url;
    this.parser = new Parser();
  }
  fetch(config) {
    return this.parser.parseURL(
      "https://cors-anywhere.herokuapp.com/" + this.url
    );
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(configuration) {
    if (!configuration.url) {
      return false;
    }
    return true;
  }
}
const RSS_CONNECTION_FACTORY = serviceId("RssConnectionFactory");
const factorySymbol = Symbol.for(RSS_CONNECTION_FACTORY);
function createRssConnection(config) {
  if (!RssConnection.validateConfiguration(config)) {
    throw new Error(
      "Invalid RssConnection configuration. Please provide a valid configuration."
    );
  }
  const connection = new RssConnection();
  connection.init(config);
  return connection;
}
function activate$1({ services }) {
  services.register(RSS_CONNECTION_FACTORY, createRssConnection);
}
function deactivate$1({ services }) {
  services.unregister(RSS_CONNECTION_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RSS_CONNECTION_FACTORY,
  RssConnection,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.rss";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.rss");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  RSS_CONNECTION_FACTORY,
  RssConnection,
  activate,
  deactivate,
  factorySymbol
};
