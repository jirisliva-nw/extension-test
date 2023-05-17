(function(){
/*

 Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';
var module$src$Externs = {};
/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var CustomElementState$$module$src$CustomElementState = {custom:1, failed:2, };
var $jscompDefaultExport$$module$src$CustomElementState = CustomElementState$$module$src$CustomElementState;
var module$src$CustomElementState = {};
module$src$CustomElementState.CustomElementState = CustomElementState$$module$src$CustomElementState;
module$src$CustomElementState.default = $jscompDefaultExport$$module$src$CustomElementState;
var Document_createElement$$module$src$Patch$Native = window.Document.prototype.createElement;
var Document_createElementNS$$module$src$Patch$Native = window.Document.prototype.createElementNS;
var Document_importNode$$module$src$Patch$Native = window.Document.prototype.importNode;
var Document_prepend$$module$src$Patch$Native = window.Document.prototype["prepend"];
var Document_append$$module$src$Patch$Native = window.Document.prototype["append"];
var DocumentFragment_prepend$$module$src$Patch$Native = window.DocumentFragment.prototype["prepend"];
var DocumentFragment_append$$module$src$Patch$Native = window.DocumentFragment.prototype["append"];
var Node_cloneNode$$module$src$Patch$Native = window.Node.prototype.cloneNode;
var Node_appendChild$$module$src$Patch$Native = window.Node.prototype.appendChild;
var Node_insertBefore$$module$src$Patch$Native = window.Node.prototype.insertBefore;
var Node_removeChild$$module$src$Patch$Native = window.Node.prototype.removeChild;
var Node_replaceChild$$module$src$Patch$Native = window.Node.prototype.replaceChild;
var Node_textContent$$module$src$Patch$Native = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent");
var Element_attachShadow$$module$src$Patch$Native = window.Element.prototype["attachShadow"];
var Element_innerHTML$$module$src$Patch$Native = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML");
var Element_getAttribute$$module$src$Patch$Native = window.Element.prototype.getAttribute;
var Element_setAttribute$$module$src$Patch$Native = window.Element.prototype.setAttribute;
var Element_removeAttribute$$module$src$Patch$Native = window.Element.prototype.removeAttribute;
var Element_getAttributeNS$$module$src$Patch$Native = window.Element.prototype.getAttributeNS;
var Element_setAttributeNS$$module$src$Patch$Native = window.Element.prototype.setAttributeNS;
var Element_removeAttributeNS$$module$src$Patch$Native = window.Element.prototype.removeAttributeNS;
var Element_insertAdjacentElement$$module$src$Patch$Native = window.Element.prototype["insertAdjacentElement"];
var Element_insertAdjacentHTML$$module$src$Patch$Native = window.Element.prototype["insertAdjacentHTML"];
var Element_prepend$$module$src$Patch$Native = window.Element.prototype["prepend"];
var Element_append$$module$src$Patch$Native = window.Element.prototype["append"];
var Element_before$$module$src$Patch$Native = window.Element.prototype["before"];
var Element_after$$module$src$Patch$Native = window.Element.prototype["after"];
var Element_replaceWith$$module$src$Patch$Native = window.Element.prototype["replaceWith"];
var Element_remove$$module$src$Patch$Native = window.Element.prototype["remove"];
var HTMLElement$$module$src$Patch$Native = window.HTMLElement;
var HTMLElement_innerHTML$$module$src$Patch$Native = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML");
var HTMLElement_insertAdjacentElement$$module$src$Patch$Native = window.HTMLElement.prototype["insertAdjacentElement"];
var HTMLElement_insertAdjacentHTML$$module$src$Patch$Native = window.HTMLElement.prototype["insertAdjacentHTML"];
var module$src$Patch$Native = {};
module$src$Patch$Native.DocumentFragment_append = DocumentFragment_append$$module$src$Patch$Native;
module$src$Patch$Native.DocumentFragment_prepend = DocumentFragment_prepend$$module$src$Patch$Native;
module$src$Patch$Native.Document_append = Document_append$$module$src$Patch$Native;
module$src$Patch$Native.Document_createElement = Document_createElement$$module$src$Patch$Native;
module$src$Patch$Native.Document_createElementNS = Document_createElementNS$$module$src$Patch$Native;
module$src$Patch$Native.Document_importNode = Document_importNode$$module$src$Patch$Native;
module$src$Patch$Native.Document_prepend = Document_prepend$$module$src$Patch$Native;
module$src$Patch$Native.Element_after = Element_after$$module$src$Patch$Native;
module$src$Patch$Native.Element_append = Element_append$$module$src$Patch$Native;
module$src$Patch$Native.Element_attachShadow = Element_attachShadow$$module$src$Patch$Native;
module$src$Patch$Native.Element_before = Element_before$$module$src$Patch$Native;
module$src$Patch$Native.Element_getAttribute = Element_getAttribute$$module$src$Patch$Native;
module$src$Patch$Native.Element_getAttributeNS = Element_getAttributeNS$$module$src$Patch$Native;
module$src$Patch$Native.Element_innerHTML = Element_innerHTML$$module$src$Patch$Native;
module$src$Patch$Native.Element_insertAdjacentElement = Element_insertAdjacentElement$$module$src$Patch$Native;
module$src$Patch$Native.Element_insertAdjacentHTML = Element_insertAdjacentHTML$$module$src$Patch$Native;
module$src$Patch$Native.Element_prepend = Element_prepend$$module$src$Patch$Native;
module$src$Patch$Native.Element_remove = Element_remove$$module$src$Patch$Native;
module$src$Patch$Native.Element_removeAttribute = Element_removeAttribute$$module$src$Patch$Native;
module$src$Patch$Native.Element_removeAttributeNS = Element_removeAttributeNS$$module$src$Patch$Native;
module$src$Patch$Native.Element_replaceWith = Element_replaceWith$$module$src$Patch$Native;
module$src$Patch$Native.Element_setAttribute = Element_setAttribute$$module$src$Patch$Native;
module$src$Patch$Native.Element_setAttributeNS = Element_setAttributeNS$$module$src$Patch$Native;
module$src$Patch$Native.HTMLElement = HTMLElement$$module$src$Patch$Native;
module$src$Patch$Native.HTMLElement_innerHTML = HTMLElement_innerHTML$$module$src$Patch$Native;
module$src$Patch$Native.HTMLElement_insertAdjacentElement = HTMLElement_insertAdjacentElement$$module$src$Patch$Native;
module$src$Patch$Native.HTMLElement_insertAdjacentHTML = HTMLElement_insertAdjacentHTML$$module$src$Patch$Native;
module$src$Patch$Native.Node_appendChild = Node_appendChild$$module$src$Patch$Native;
module$src$Patch$Native.Node_cloneNode = Node_cloneNode$$module$src$Patch$Native;
module$src$Patch$Native.Node_insertBefore = Node_insertBefore$$module$src$Patch$Native;
module$src$Patch$Native.Node_removeChild = Node_removeChild$$module$src$Patch$Native;
module$src$Patch$Native.Node_replaceChild = Node_replaceChild$$module$src$Patch$Native;
module$src$Patch$Native.Node_textContent = Node_textContent$$module$src$Patch$Native;
var reservedElementNameSet$$module$src$Utilities = new Set;
["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph", ].forEach(function(item) {
  return reservedElementNameSet$$module$src$Utilities.add(item);
});
function isValidCustomElementName$$module$src$Utilities(localName) {
  var reserved = reservedElementNameSet$$module$src$Utilities.has(localName);
  var validForm = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(localName);
  return !reserved && validForm;
}
var nativeContains$$module$src$Utilities = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
function isConnected$$module$src$Utilities(node) {
  var nativeValue = node.isConnected;
  if (nativeValue !== undefined) {
    return nativeValue;
  }
  if (nativeContains$$module$src$Utilities(node)) {
    return true;
  }
  var current = node;
  while (current && !(current.__CE_isImportDocument || current instanceof Document)) {
    current = current.parentNode || (window.ShadowRoot && current instanceof ShadowRoot ? current.host : undefined);
  }
  return !!(current && (current.__CE_isImportDocument || current instanceof Document));
}
function childrenFromFragment$$module$src$Utilities(fragment) {
  var nativeChildren = fragment.children;
  if (nativeChildren) {
    return Array.prototype.slice.call(nativeChildren);
  }
  var children = [];
  for (var n = fragment.firstChild; n; n = n.nextSibling) {
    if (n.nodeType === Node.ELEMENT_NODE) {
      children.push(n);
    }
  }
  return children;
}
function nextSiblingOrAncestorSibling$$module$src$Utilities(root, start) {
  var node = start;
  while (node && node !== root && !node.nextSibling) {
    node = node.parentNode;
  }
  return !node || node === root ? null : node.nextSibling;
}
function nextNode$$module$src$Utilities(root, start) {
  return start.firstChild ? start.firstChild : nextSiblingOrAncestorSibling$$module$src$Utilities(root, start);
}
function walkDeepDescendantElements$$module$src$Utilities(root, callback, visitedImports) {
  var node = root;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      var element = node;
      callback(element);
      var localName = element.localName;
      if (localName === "link" && element.getAttribute("rel") === "import") {
        var importNode = element.import;
        if (visitedImports === undefined) {
          visitedImports = new Set;
        }
        if (importNode instanceof Node && !visitedImports.has(importNode)) {
          visitedImports.add(importNode);
          for (var child = importNode.firstChild; child; child = child.nextSibling) {
            walkDeepDescendantElements$$module$src$Utilities(child, callback, visitedImports);
          }
        }
        node = nextSiblingOrAncestorSibling$$module$src$Utilities(root, element);
        continue;
      } else {
        if (localName === "template") {
          node = nextSiblingOrAncestorSibling$$module$src$Utilities(root, element);
          continue;
        }
      }
      var shadowRoot = element.__CE_shadowRoot;
      if (shadowRoot) {
        for (var child$0 = shadowRoot.firstChild; child$0; child$0 = child$0.nextSibling) {
          walkDeepDescendantElements$$module$src$Utilities(child$0, callback, visitedImports);
        }
      }
    }
    node = nextNode$$module$src$Utilities(root, node);
  }
}
var module$src$Utilities = {};
module$src$Utilities.childrenFromFragment = childrenFromFragment$$module$src$Utilities;
module$src$Utilities.isConnected = isConnected$$module$src$Utilities;
module$src$Utilities.isValidCustomElementName = isValidCustomElementName$$module$src$Utilities;
module$src$Utilities.walkDeepDescendantElements = walkDeepDescendantElements$$module$src$Utilities;
var NS_HTML$$module$src$CustomElementInternals = "http://www.w3.org/1999/xhtml";
var CustomElementInternals$$module$src$CustomElementInternals = function(options) {
  this._patchesNode = [];
  this._patchesElement = [];
  this._hasPatches = false;
  this.shadyDomFastWalk = options.shadyDomFastWalk;
  this.useDocumentConstructionObserver = !options.noDocumentConstructionObserver;
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.forEachElement = function(node, callback, visitedImports) {
  var sd = window["ShadyDom"];
  if (this.shadyDomFastWalk && sd && sd["inUse"]) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      var element = node;
      callback(element);
    }
    if (node.querySelectorAll) {
      var elements = sd["nativeMethods"].querySelectorAll.call(node, "*");
      for (var i = 0; i < elements.length; i++) {
        callback(elements[i]);
      }
    }
  } else {
    walkDeepDescendantElements$$module$src$Utilities(node, callback, visitedImports);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.addNodePatch = function(patch) {
  this._hasPatches = true;
  this._patchesNode.push(patch);
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.addElementPatch = function(patch) {
  this._hasPatches = true;
  this._patchesElement.push(patch);
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.patchTree = function(node) {
  var $jscomp$this = this;
  if (!this._hasPatches) {
    return;
  }
  this.forEachElement(node, function(element) {
    return $jscomp$this.patchElement(element);
  });
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.patchNode = function(node) {
  if (!this._hasPatches) {
    return;
  }
  if (node.__CE_patched) {
    return;
  }
  node.__CE_patched = true;
  for (var i = 0; i < this._patchesNode.length; i++) {
    this._patchesNode[i](node);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.patchElement = function(element) {
  if (!this._hasPatches) {
    return;
  }
  if (element.__CE_patched) {
    return;
  }
  element.__CE_patched = true;
  for (var i = 0; i < this._patchesNode.length; i++) {
    this._patchesNode[i](element);
  }
  for (var i$1 = 0; i$1 < this._patchesElement.length; i$1++) {
    this._patchesElement[i$1](element);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.connectTree = function(root) {
  var elements = [];
  this.forEachElement(root, function(element) {
    return elements.push(element);
  });
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.__CE_state === CustomElementState$$module$src$CustomElementState.custom) {
      this.connectedCallback(element);
    } else {
      this.upgradeReaction(element);
    }
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.disconnectTree = function(root) {
  var elements = [];
  this.forEachElement(root, function(element) {
    return elements.push(element);
  });
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.__CE_state === CustomElementState$$module$src$CustomElementState.custom) {
      this.disconnectedCallback(element);
    }
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.patchAndUpgradeTree = function(root, options) {
  var $jscomp$this = this;
  options = options === undefined ? {} : options;
  var visitedImports = options.visitedImports;
  var upgrade = options.upgrade || function(element) {
    return $jscomp$this.upgradeReaction(element);
  };
  var elements = [];
  var gatherElements = function(element) {
    if ($jscomp$this._hasPatches) {
      $jscomp$this.patchElement(element);
    }
    if (element.localName === "link" && element.getAttribute("rel") === "import") {
      var importElem = element;
      var importNode = importElem.import;
      if (importNode instanceof Node) {
        importNode.__CE_isImportDocument = true;
        importNode.__CE_registry = document.__CE_registry;
      }
      if (importNode && importNode.readyState === "complete") {
        importNode.__CE_documentLoadHandled = true;
      } else {
        element.addEventListener("load", function() {
          var importNode = importElem.import;
          if (importNode.__CE_documentLoadHandled) {
            return;
          }
          importNode.__CE_documentLoadHandled = true;
          var clonedVisitedImports = new Set;
          if (visitedImports) {
            visitedImports.forEach(function(item) {
              return clonedVisitedImports.add(item);
            });
            clonedVisitedImports.delete(importNode);
          }
          $jscomp$this.patchAndUpgradeTree(importNode, {visitedImports:clonedVisitedImports, upgrade:upgrade, });
        });
      }
    } else {
      elements.push(element);
    }
  };
  this.forEachElement(root, gatherElements, visitedImports);
  for (var i = 0; i < elements.length; i++) {
    upgrade(elements[i]);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.upgradeReaction = function(element) {
  try {
    var definition = this._lookupACustomElementDefinition(element.ownerDocument, element.localName);
    if (definition) {
      this._upgradeAnElement(element, definition);
    }
  } catch (e) {
    this.reportTheException(e);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype._upgradeAnElement = function(element, definition) {
  var currentState = element.__CE_state;
  if (currentState !== undefined) {
    return;
  }
  definition.constructionStack.push(element);
  try {
    try {
      var result = new definition.constructorFunction;
      if (result !== element) {
        throw new Error("The custom element constructor did not produce the element being upgraded.");
      }
    } finally {
      definition.constructionStack.pop();
    }
  } catch (e) {
    element.__CE_state = CustomElementState$$module$src$CustomElementState.failed;
    throw e;
  }
  element.__CE_state = CustomElementState$$module$src$CustomElementState.custom;
  element.__CE_definition = definition;
  if (definition.attributeChangedCallback && element.hasAttributes()) {
    var observedAttributes = definition.observedAttributes;
    for (var i = 0; i < observedAttributes.length; i++) {
      var name = observedAttributes[i];
      var value = element.getAttribute(name);
      if (value !== null) {
        this.attributeChangedCallback(element, name, null, value, null);
      }
    }
  }
  if (isConnected$$module$src$Utilities(element)) {
    this.connectedCallback(element);
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.connectedCallback = function(element) {
  var definition = element.__CE_definition;
  if (definition.connectedCallback) {
    try {
      definition.connectedCallback.call(element);
    } catch (e) {
      this.reportTheException(e);
    }
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.disconnectedCallback = function(element) {
  var definition = element.__CE_definition;
  if (definition.disconnectedCallback) {
    try {
      definition.disconnectedCallback.call(element);
    } catch (e) {
      this.reportTheException(e);
    }
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.attributeChangedCallback = function(element, name, oldValue, newValue, namespace) {
  var definition = element.__CE_definition;
  if (definition.attributeChangedCallback && definition.observedAttributes.indexOf(name) > -1) {
    try {
      definition.attributeChangedCallback.call(element, name, oldValue, newValue, namespace);
    } catch (e) {
      this.reportTheException(e);
    }
  }
};
CustomElementInternals$$module$src$CustomElementInternals.prototype._lookupACustomElementDefinition = function(doc, localName) {
  var registry = doc.__CE_registry;
  if (!registry) {
    return;
  }
  if (!doc.defaultView && !doc.__CE_isImportDocument) {
    return;
  }
  return registry.internal_localNameToDefinition(localName);
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.createAnElement = function(doc, localName, namespace) {
  var registry = doc.__CE_registry;
  if (registry && (namespace === null || namespace === NS_HTML$$module$src$CustomElementInternals)) {
    var definition = registry.internal_localNameToDefinition(localName);
    if (definition) {
      try {
        var result$2 = new definition.constructorFunction;
        if (result$2.__CE_state === undefined || result$2.__CE_definition === undefined) {
          throw new Error("Failed to construct '" + localName + "': " + "The returned value was not constructed with the HTMLElement " + "constructor.");
        }
        if (result$2.namespaceURI !== NS_HTML$$module$src$CustomElementInternals) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element's namespace must be the HTML " + "namespace.");
        }
        if (result$2.hasAttributes()) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element must not have any attributes.");
        }
        if (result$2.firstChild !== null) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element must not have any children.");
        }
        if (result$2.parentNode !== null) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element must not have a parent node.");
        }
        if (result$2.ownerDocument !== doc) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element's owner document is incorrect.");
        }
        if (result$2.localName !== localName) {
          throw new Error("Failed to construct '" + localName + "': " + "The constructed element's local name is incorrect.");
        }
        return result$2;
      } catch (e) {
        this.reportTheException(e);
        var result$3 = namespace === null ? Document_createElement$$module$src$Patch$Native.call(doc, localName) : Document_createElementNS$$module$src$Patch$Native.call(doc, namespace, localName);
        Object.setPrototypeOf(result$3, HTMLUnknownElement.prototype);
        result$3.__CE_state = CustomElementState$$module$src$CustomElementState.failed;
        result$3.__CE_definition = undefined;
        this.patchElement(result$3);
        return result$3;
      }
    }
  }
  var result = namespace === null ? Document_createElement$$module$src$Patch$Native.call(doc, localName) : Document_createElementNS$$module$src$Patch$Native.call(doc, namespace, localName);
  this.patchElement(result);
  return result;
};
CustomElementInternals$$module$src$CustomElementInternals.prototype.reportTheException = function(error) {
  var message = error.message;
  var filename = error.sourceURL || error.fileName || "";
  var lineno = error.line || error.lineNumber || 0;
  var colno = error.column || error.columnNumber || 0;
  var event = undefined;
  if (ErrorEvent.prototype.initErrorEvent === undefined) {
    event = new ErrorEvent("error", {cancelable:true, message:message, filename:filename, lineno:lineno, colno:colno, error:error, });
  } else {
    event = document.createEvent("ErrorEvent");
    event.initErrorEvent("error", false, true, message, filename, lineno);
    event.preventDefault = function() {
      Object.defineProperty(this, "defaultPrevented", {configurable:true, get:function() {
        return true;
      }, });
    };
  }
  if (event.error === undefined) {
    Object.defineProperty(event, "error", {configurable:true, enumerable:true, get:function() {
      return error;
    }, });
  }
  window.dispatchEvent(event);
  if (!event.defaultPrevented) {
    console.error(error);
  }
};
var module$src$CustomElementInternals = {};
module$src$CustomElementInternals.default = CustomElementInternals$$module$src$CustomElementInternals;
var Deferred$$module$src$Deferred = function() {
  var $jscomp$this = this;
  this._value = undefined;
  this._promise = new Promise(function(resolve) {
    $jscomp$this._resolve = resolve;
  });
};
Deferred$$module$src$Deferred.prototype.resolve = function(value) {
  if (this._value) {
    throw new Error("Already resolved.");
  }
  this._value = value;
  this._resolve(value);
};
Deferred$$module$src$Deferred.prototype.toPromise = function() {
  return this._promise;
};
var module$src$Deferred = {};
module$src$Deferred.default = Deferred$$module$src$Deferred;
var DocumentConstructionObserver$$module$src$DocumentConstructionObserver = function(internals, doc) {
  this._observer = undefined;
  this._internals = internals;
  this._document = doc;
  this._internals.patchAndUpgradeTree(this._document);
  if (this._document.readyState === "loading") {
    this._observer = new MutationObserver(this._handleMutations.bind(this));
    this._observer.observe(this._document, {childList:true, subtree:true, });
  }
};
DocumentConstructionObserver$$module$src$DocumentConstructionObserver.prototype.disconnect = function() {
  if (this._observer) {
    this._observer.disconnect();
  }
};
DocumentConstructionObserver$$module$src$DocumentConstructionObserver.prototype._handleMutations = function(mutations) {
  var readyState = this._document.readyState;
  if (readyState === "interactive" || readyState === "complete") {
    this.disconnect();
  }
  for (var i = 0; i < mutations.length; i++) {
    var addedNodes = mutations[i].addedNodes;
    for (var j = 0; j < addedNodes.length; j++) {
      var node = addedNodes[j];
      this._internals.patchAndUpgradeTree(node);
    }
  }
};
var module$src$DocumentConstructionObserver = {};
module$src$DocumentConstructionObserver.default = DocumentConstructionObserver$$module$src$DocumentConstructionObserver;
var CustomElementRegistry$$module$src$CustomElementRegistry = function(internals) {
  this._localNameToConstructorGetter = new Map;
  this._localNameToDefinition = new Map;
  this._constructorToDefinition = new Map;
  this._elementDefinitionIsRunning = false;
  this._whenDefinedDeferred = new Map;
  this._flushCallback = function(fn) {
    return fn();
  };
  this._flushPending = false;
  this._unflushedLocalNames = [];
  this._internals = internals;
  this._documentConstructionObserver = internals.useDocumentConstructionObserver ? new DocumentConstructionObserver$$module$src$DocumentConstructionObserver(internals, document) : undefined;
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.polyfillDefineLazy = function(localName, constructorGetter) {
  var $jscomp$this = this;
  if (!(constructorGetter instanceof Function)) {
    throw new TypeError("Custom element constructor getters must be functions.");
  }
  this.internal_assertCanDefineLocalName(localName);
  this._localNameToConstructorGetter.set(localName, constructorGetter);
  this._unflushedLocalNames.push(localName);
  if (!this._flushPending) {
    this._flushPending = true;
    this._flushCallback(function() {
      return $jscomp$this._flush();
    });
  }
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.define = function(localName, constructor) {
  var $jscomp$this = this;
  if (!(constructor instanceof Function)) {
    throw new TypeError("Custom element constructors must be functions.");
  }
  this.internal_assertCanDefineLocalName(localName);
  this.internal_reifyDefinition(localName, constructor);
  this._unflushedLocalNames.push(localName);
  if (!this._flushPending) {
    this._flushPending = true;
    this._flushCallback(function() {
      return $jscomp$this._flush();
    });
  }
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.internal_assertCanDefineLocalName = function(localName) {
  if (!isValidCustomElementName$$module$src$Utilities(localName)) {
    throw new SyntaxError("The element name '" + localName + "' is not valid.");
  }
  if (this.internal_localNameToDefinition(localName)) {
    throw new Error("A custom element with name " + ("'" + localName + "' has already been defined."));
  }
  if (this._elementDefinitionIsRunning) {
    throw new Error("A custom element is already being defined.");
  }
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.internal_reifyDefinition = function(localName, constructor) {
  this._elementDefinitionIsRunning = true;
  var connectedCallback;
  var disconnectedCallback;
  var adoptedCallback;
  var attributeChangedCallback;
  var observedAttributes;
  try {
    var prototype = constructor.prototype;
    if (!(prototype instanceof Object)) {
      throw new TypeError("The custom element constructor's prototype is not an object.");
    }
    var getCallback = function getCallback(name) {
      var callbackValue = prototype[name];
      if (callbackValue !== undefined && !(callbackValue instanceof Function)) {
        throw new Error("The '" + name + "' callback must be a function.");
      }
      return callbackValue;
    };
    connectedCallback = getCallback("connectedCallback");
    disconnectedCallback = getCallback("disconnectedCallback");
    adoptedCallback = getCallback("adoptedCallback");
    attributeChangedCallback = getCallback("attributeChangedCallback");
    observedAttributes = attributeChangedCallback && constructor["observedAttributes"] || [];
  } finally {
    this._elementDefinitionIsRunning = false;
  }
  var definition = {localName:localName, constructorFunction:constructor, connectedCallback:connectedCallback, disconnectedCallback:disconnectedCallback, adoptedCallback:adoptedCallback, attributeChangedCallback:attributeChangedCallback, observedAttributes:observedAttributes, constructionStack:[], };
  this._localNameToDefinition.set(localName, definition);
  this._constructorToDefinition.set(definition.constructorFunction, definition);
  return definition;
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.upgrade = function(node) {
  this._internals.patchAndUpgradeTree(node);
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype._flush = function() {
  var $jscomp$this = this;
  if (this._flushPending === false) {
    return;
  }
  this._flushPending = false;
  var elementsWithStableDefinitions = [];
  var unflushedLocalNames = this._unflushedLocalNames;
  var elementsWithPendingDefinitions = new Map;
  for (var i = 0; i < unflushedLocalNames.length; i++) {
    elementsWithPendingDefinitions.set(unflushedLocalNames[i], []);
  }
  this._internals.patchAndUpgradeTree(document, {upgrade:function(element) {
    if (element.__CE_state !== undefined) {
      return;
    }
    var localName = element.localName;
    var pendingElements = elementsWithPendingDefinitions.get(localName);
    if (pendingElements) {
      pendingElements.push(element);
    } else {
      if ($jscomp$this._localNameToDefinition.has(localName)) {
        elementsWithStableDefinitions.push(element);
      }
    }
  }, });
  for (var i$4 = 0; i$4 < elementsWithStableDefinitions.length; i$4++) {
    this._internals.upgradeReaction(elementsWithStableDefinitions[i$4]);
  }
  for (var i$5 = 0; i$5 < unflushedLocalNames.length; i$5++) {
    var localName = unflushedLocalNames[i$5];
    var pendingUpgradableElements = elementsWithPendingDefinitions.get(localName);
    for (var i$6 = 0; i$6 < pendingUpgradableElements.length; i$6++) {
      this._internals.upgradeReaction(pendingUpgradableElements[i$6]);
    }
    var deferred = this._whenDefinedDeferred.get(localName);
    if (deferred) {
      deferred.resolve(undefined);
    }
  }
  unflushedLocalNames.length = 0;
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.get = function(localName) {
  var definition = this.internal_localNameToDefinition(localName);
  if (definition) {
    return definition.constructorFunction;
  }
  return undefined;
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.whenDefined = function(localName) {
  if (!isValidCustomElementName$$module$src$Utilities(localName)) {
    return Promise.reject(new SyntaxError("'" + localName + "' is not a valid custom element name."));
  }
  var prior = this._whenDefinedDeferred.get(localName);
  if (prior) {
    return prior.toPromise();
  }
  var deferred = new Deferred$$module$src$Deferred;
  this._whenDefinedDeferred.set(localName, deferred);
  var anyDefinitionExists = this._localNameToDefinition.has(localName) || this._localNameToConstructorGetter.has(localName);
  var definitionHasFlushed = this._unflushedLocalNames.indexOf(localName) === -1;
  if (anyDefinitionExists && definitionHasFlushed) {
    deferred.resolve(undefined);
  }
  return deferred.toPromise();
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.polyfillWrapFlushCallback = function(outer) {
  if (this._documentConstructionObserver) {
    this._documentConstructionObserver.disconnect();
  }
  var inner = this._flushCallback;
  this._flushCallback = function(flush) {
    return outer(function() {
      return inner(flush);
    });
  };
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.internal_localNameToDefinition = function(localName) {
  var existingDefinition = this._localNameToDefinition.get(localName);
  if (existingDefinition) {
    return existingDefinition;
  }
  var constructorGetter = this._localNameToConstructorGetter.get(localName);
  if (constructorGetter) {
    this._localNameToConstructorGetter.delete(localName);
    try {
      return this.internal_reifyDefinition(localName, constructorGetter());
    } catch (e) {
      this._internals.reportTheException(e);
    }
  }
  return undefined;
};
CustomElementRegistry$$module$src$CustomElementRegistry.prototype.internal_constructorToDefinition = function(constructor) {
  return this._constructorToDefinition.get(constructor);
};
window["CustomElementRegistry"] = CustomElementRegistry$$module$src$CustomElementRegistry;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["define"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.define;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["upgrade"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.upgrade;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["get"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.get;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["whenDefined"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.whenDefined;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["polyfillDefineLazy"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.polyfillDefineLazy;
CustomElementRegistry$$module$src$CustomElementRegistry.prototype["polyfillWrapFlushCallback"] = CustomElementRegistry$$module$src$CustomElementRegistry.prototype.polyfillWrapFlushCallback;
var module$src$CustomElementRegistry = {};
module$src$CustomElementRegistry.default = CustomElementRegistry$$module$src$CustomElementRegistry;
var $jscompDefaultExport$$module$src$Patch$Interface$ParentNode = function(internals, destination, builtIn) {
  function appendPrependPatch(builtInMethod) {
    return function(nodes) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var nodes$7 = $jscomp$restParams;
        var flattenedNodes = [];
        var connectedElements = [];
        for (var i = 0; i < nodes$7.length; i++) {
          var node = nodes$7[i];
          if (node instanceof Element && isConnected$$module$src$Utilities(node)) {
            connectedElements.push(node);
          }
          if (node instanceof DocumentFragment) {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              flattenedNodes.push(child);
            }
          } else {
            flattenedNodes.push(node);
          }
        }
        builtInMethod.apply(this, nodes$7);
        for (var i$8 = 0; i$8 < connectedElements.length; i$8++) {
          internals.disconnectTree(connectedElements[i$8]);
        }
        if (isConnected$$module$src$Utilities(this)) {
          for (var i$9 = 0; i$9 < flattenedNodes.length; i$9++) {
            var node$10 = flattenedNodes[i$9];
            if (node$10 instanceof Element) {
              internals.connectTree(node$10);
            }
          }
        }
      }
    };
  }
  if (builtIn.prepend !== undefined) {
    destination.prepend = appendPrependPatch(builtIn.prepend);
  }
  if (builtIn.append !== undefined) {
    destination.append = appendPrependPatch(builtIn.append);
  }
};
var module$src$Patch$Interface$ParentNode = {};
module$src$Patch$Interface$ParentNode.default = $jscompDefaultExport$$module$src$Patch$Interface$ParentNode;
var $jscompDefaultExport$$module$src$Patch$Document = function(internals) {
  Document.prototype.createElement = function(localName) {
    return internals.createAnElement(this, localName, null);
  };
  Document.prototype.importNode = function(node, deep) {
    var clone = Document_importNode$$module$src$Patch$Native.call(this, node, !!deep);
    if (!this.__CE_registry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  };
  Document.prototype.createElementNS = function(namespace, localName) {
    return internals.createAnElement(this, localName, namespace);
  };
  $jscompDefaultExport$$module$src$Patch$Interface$ParentNode(internals, Document.prototype, {prepend:Document_prepend$$module$src$Patch$Native, append:Document_append$$module$src$Patch$Native, });
};
var module$src$Patch$Document = {};
module$src$Patch$Document.default = $jscompDefaultExport$$module$src$Patch$Document;
var $jscompDefaultExport$$module$src$Patch$DocumentFragment = function(internals) {
  $jscompDefaultExport$$module$src$Patch$Interface$ParentNode(internals, DocumentFragment.prototype, {prepend:DocumentFragment_prepend$$module$src$Patch$Native, append:DocumentFragment_append$$module$src$Patch$Native, });
};
var module$src$Patch$DocumentFragment = {};
module$src$Patch$DocumentFragment.default = $jscompDefaultExport$$module$src$Patch$DocumentFragment;
var $jscompDefaultExport$$module$src$Patch$Interface$ChildNode = function(internals, destination, builtIn) {
  function beforeAfterPatch(builtInMethod) {
    return function(nodes) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var nodes$11 = $jscomp$restParams;
        var flattenedNodes = [];
        var connectedElements = [];
        for (var i = 0; i < nodes$11.length; i++) {
          var node = nodes$11[i];
          if (node instanceof Element && isConnected$$module$src$Utilities(node)) {
            connectedElements.push(node);
          }
          if (node instanceof DocumentFragment) {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              flattenedNodes.push(child);
            }
          } else {
            flattenedNodes.push(node);
          }
        }
        builtInMethod.apply(this, nodes$11);
        for (var i$12 = 0; i$12 < connectedElements.length; i$12++) {
          internals.disconnectTree(connectedElements[i$12]);
        }
        if (isConnected$$module$src$Utilities(this)) {
          for (var i$13 = 0; i$13 < flattenedNodes.length; i$13++) {
            var node$14 = flattenedNodes[i$13];
            if (node$14 instanceof Element) {
              internals.connectTree(node$14);
            }
          }
        }
      }
    };
  }
  if (builtIn.before !== undefined) {
    destination.before = beforeAfterPatch(builtIn.before);
  }
  if (builtIn.after !== undefined) {
    destination.after = beforeAfterPatch(builtIn.after);
  }
  if (builtIn.replaceWith !== undefined) {
    destination.replaceWith = function(nodes) {
      var $jscomp$restParams = [];
      for (var $jscomp$restIndex = 0; $jscomp$restIndex < arguments.length; ++$jscomp$restIndex) {
        $jscomp$restParams[$jscomp$restIndex - 0] = arguments[$jscomp$restIndex];
      }
      {
        var nodes$15 = $jscomp$restParams;
        var flattenedNodes = [];
        var connectedElements = [];
        for (var i = 0; i < nodes$15.length; i++) {
          var node = nodes$15[i];
          if (node instanceof Element && isConnected$$module$src$Utilities(node)) {
            connectedElements.push(node);
          }
          if (node instanceof DocumentFragment) {
            for (var child = node.firstChild; child; child = child.nextSibling) {
              flattenedNodes.push(child);
            }
          } else {
            flattenedNodes.push(node);
          }
        }
        var wasConnected = isConnected$$module$src$Utilities(this);
        builtIn.replaceWith.apply(this, nodes$15);
        for (var i$16 = 0; i$16 < connectedElements.length; i$16++) {
          internals.disconnectTree(connectedElements[i$16]);
        }
        if (wasConnected) {
          internals.disconnectTree(this);
          for (var i$17 = 0; i$17 < flattenedNodes.length; i$17++) {
            var node$18 = flattenedNodes[i$17];
            if (node$18 instanceof Element) {
              internals.connectTree(node$18);
            }
          }
        }
      }
    };
  }
  if (builtIn.remove !== undefined) {
    destination.remove = function() {
      var wasConnected = isConnected$$module$src$Utilities(this);
      builtIn.remove.call(this);
      if (wasConnected) {
        internals.disconnectTree(this);
      }
    };
  }
};
var module$src$Patch$Interface$ChildNode = {};
module$src$Patch$Interface$ChildNode.default = $jscompDefaultExport$$module$src$Patch$Interface$ChildNode;
var $jscompDefaultExport$$module$src$Patch$Element = function(internals) {
  if (Element_attachShadow$$module$src$Patch$Native) {
    Element.prototype.attachShadow = function(init) {
      var shadowRoot = Element_attachShadow$$module$src$Patch$Native.call(this, init);
      internals.patchNode(shadowRoot);
      this.__CE_shadowRoot = shadowRoot;
      return shadowRoot;
    };
  }
  function patch_innerHTML(destination, baseDescriptor) {
    Object.defineProperty(destination, "innerHTML", {enumerable:baseDescriptor.enumerable, configurable:true, get:baseDescriptor.get, set:function(htmlString) {
      var $jscomp$this = this;
      var isConnected = isConnected$$module$src$Utilities(this);
      var removedElements = undefined;
      if (isConnected) {
        removedElements = [];
        internals.forEachElement(this, function(element) {
          if (element !== $jscomp$this) {
            removedElements.push(element);
          }
        });
      }
      baseDescriptor.set.call(this, htmlString);
      if (removedElements) {
        for (var i = 0; i < removedElements.length; i++) {
          var element = removedElements[i];
          if (element.__CE_state === $jscompDefaultExport$$module$src$CustomElementState.custom) {
            internals.disconnectedCallback(element);
          }
        }
      }
      if (!this.ownerDocument.__CE_registry) {
        internals.patchTree(this);
      } else {
        internals.patchAndUpgradeTree(this);
      }
      return htmlString;
    }, });
  }
  if (Element_innerHTML$$module$src$Patch$Native && Element_innerHTML$$module$src$Patch$Native.get) {
    patch_innerHTML(Element.prototype, Element_innerHTML$$module$src$Patch$Native);
  } else {
    if (HTMLElement_innerHTML$$module$src$Patch$Native && HTMLElement_innerHTML$$module$src$Patch$Native.get) {
      patch_innerHTML(HTMLElement.prototype, HTMLElement_innerHTML$$module$src$Patch$Native);
    } else {
      internals.addElementPatch(function(element) {
        patch_innerHTML(element, {enumerable:true, configurable:true, get:function() {
          return Node_cloneNode$$module$src$Patch$Native.call(this, true).innerHTML;
        }, set:function(assignedValue) {
          var isTemplate = this.localName === "template";
          var content = isTemplate ? this.content : this;
          var rawElement = Document_createElementNS$$module$src$Patch$Native.call(document, this.namespaceURI, this.localName);
          rawElement.innerHTML = assignedValue;
          while (content.childNodes.length > 0) {
            Node_removeChild$$module$src$Patch$Native.call(content, content.childNodes[0]);
          }
          var container = isTemplate ? rawElement.content : rawElement;
          while (container.childNodes.length > 0) {
            Node_appendChild$$module$src$Patch$Native.call(content, container.childNodes[0]);
          }
        }, });
      });
    }
  }
  Element.prototype.setAttribute = function(name, newValue) {
    if (this.__CE_state !== $jscompDefaultExport$$module$src$CustomElementState.custom) {
      return Element_setAttribute$$module$src$Patch$Native.call(this, name, newValue);
    }
    var oldValue = Element_getAttribute$$module$src$Patch$Native.call(this, name);
    Element_setAttribute$$module$src$Patch$Native.call(this, name, newValue);
    newValue = Element_getAttribute$$module$src$Patch$Native.call(this, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, null);
  };
  Element.prototype.setAttributeNS = function(namespace, name, newValue) {
    if (this.__CE_state !== $jscompDefaultExport$$module$src$CustomElementState.custom) {
      return Element_setAttributeNS$$module$src$Patch$Native.call(this, namespace, name, newValue);
    }
    var oldValue = Element_getAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    Element_setAttributeNS$$module$src$Patch$Native.call(this, namespace, name, newValue);
    newValue = Element_getAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
  };
  Element.prototype.removeAttribute = function(name) {
    if (this.__CE_state !== $jscompDefaultExport$$module$src$CustomElementState.custom) {
      return Element_removeAttribute$$module$src$Patch$Native.call(this, name);
    }
    var oldValue = Element_getAttribute$$module$src$Patch$Native.call(this, name);
    Element_removeAttribute$$module$src$Patch$Native.call(this, name);
    if (oldValue !== null) {
      internals.attributeChangedCallback(this, name, oldValue, null, null);
    }
  };
  Element.prototype.removeAttributeNS = function(namespace, name) {
    if (this.__CE_state !== $jscompDefaultExport$$module$src$CustomElementState.custom) {
      return Element_removeAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    }
    var oldValue = Element_getAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    Element_removeAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    var newValue = Element_getAttributeNS$$module$src$Patch$Native.call(this, namespace, name);
    if (oldValue !== newValue) {
      internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
    }
  };
  function patch_insertAdjacentElement(destination, baseMethod) {
    destination.insertAdjacentElement = function(position, element) {
      var wasConnected = isConnected$$module$src$Utilities(element);
      var insertedElement = baseMethod.call(this, position, element);
      if (wasConnected) {
        internals.disconnectTree(element);
      }
      if (isConnected$$module$src$Utilities(insertedElement)) {
        internals.connectTree(element);
      }
      return insertedElement;
    };
  }
  if (HTMLElement_insertAdjacentElement$$module$src$Patch$Native) {
    patch_insertAdjacentElement(HTMLElement.prototype, HTMLElement_insertAdjacentElement$$module$src$Patch$Native);
  } else {
    if (Element_insertAdjacentElement$$module$src$Patch$Native) {
      patch_insertAdjacentElement(Element.prototype, Element_insertAdjacentElement$$module$src$Patch$Native);
    }
  }
  function patch_insertAdjacentHTML(destination, baseMethod) {
    function upgradeNodesInRange(start, end) {
      var nodes = [];
      for (var node = start; node !== end; node = node.nextSibling) {
        nodes.push(node);
      }
      for (var i = 0; i < nodes.length; i++) {
        internals.patchAndUpgradeTree(nodes[i]);
      }
    }
    destination.insertAdjacentHTML = function(position, text) {
      var strPosition = position.toLowerCase();
      if (strPosition === "beforebegin") {
        var marker = this.previousSibling;
        baseMethod.call(this, strPosition, text);
        upgradeNodesInRange(marker || this.parentNode.firstChild, this);
      } else {
        if (strPosition === "afterbegin") {
          var marker$19 = this.firstChild;
          baseMethod.call(this, strPosition, text);
          upgradeNodesInRange(this.firstChild, marker$19);
        } else {
          if (strPosition === "beforeend") {
            var marker$20 = this.lastChild;
            baseMethod.call(this, strPosition, text);
            upgradeNodesInRange(marker$20 || this.firstChild, null);
          } else {
            if (strPosition === "afterend") {
              var marker$21 = this.nextSibling;
              baseMethod.call(this, strPosition, text);
              upgradeNodesInRange(this.nextSibling, marker$21);
            } else {
              throw new SyntaxError("The value provided (" + String(strPosition) + ") is " + "not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            }
          }
        }
      }
    };
  }
  if (HTMLElement_insertAdjacentHTML$$module$src$Patch$Native) {
    patch_insertAdjacentHTML(HTMLElement.prototype, HTMLElement_insertAdjacentHTML$$module$src$Patch$Native);
  } else {
    if (Element_insertAdjacentHTML$$module$src$Patch$Native) {
      patch_insertAdjacentHTML(Element.prototype, Element_insertAdjacentHTML$$module$src$Patch$Native);
    }
  }
  $jscompDefaultExport$$module$src$Patch$Interface$ParentNode(internals, Element.prototype, {prepend:Element_prepend$$module$src$Patch$Native, append:Element_append$$module$src$Patch$Native, });
  $jscompDefaultExport$$module$src$Patch$Interface$ChildNode(internals, Element.prototype, {before:Element_before$$module$src$Patch$Native, after:Element_after$$module$src$Patch$Native, replaceWith:Element_replaceWith$$module$src$Patch$Native, remove:Element_remove$$module$src$Patch$Native, });
};
var module$src$Patch$Element = {};
module$src$Patch$Element.default = $jscompDefaultExport$$module$src$Patch$Element;
var alreadyConstructedMarker$$module$src$AlreadyConstructedMarker = {};
var $jscompDefaultExport$$module$src$AlreadyConstructedMarker = alreadyConstructedMarker$$module$src$AlreadyConstructedMarker;
var module$src$AlreadyConstructedMarker = {};
module$src$AlreadyConstructedMarker.default = $jscompDefaultExport$$module$src$AlreadyConstructedMarker;
var $jscompDefaultExport$$module$src$Patch$HTMLElement = function(internals) {
  var PatchedHTMLElement = function HTMLElement() {
    var constructor = this.constructor;
    var registry = document.__CE_registry;
    var definition = registry.internal_constructorToDefinition(constructor);
    if (!definition) {
      throw new Error("Failed to construct a custom element: " + "The constructor was not registered with `customElements`.");
    }
    var constructionStack = definition.constructionStack;
    if (constructionStack.length === 0) {
      var element$22 = Document_createElement$$module$src$Patch$Native.call(document, definition.localName);
      Object.setPrototypeOf(element$22, constructor.prototype);
      element$22.__CE_state = $jscompDefaultExport$$module$src$CustomElementState.custom;
      element$22.__CE_definition = definition;
      internals.patchElement(element$22);
      return element$22;
    }
    var lastIndex = constructionStack.length - 1;
    var element = constructionStack[lastIndex];
    if (element === $jscompDefaultExport$$module$src$AlreadyConstructedMarker) {
      var localName = definition.localName;
      throw new Error("Failed to construct '" + localName + "': " + "This element was already constructed.");
    }
    var toConstructElement = element;
    constructionStack[lastIndex] = $jscompDefaultExport$$module$src$AlreadyConstructedMarker;
    Object.setPrototypeOf(toConstructElement, constructor.prototype);
    internals.patchElement(toConstructElement);
    return toConstructElement;
  };
  PatchedHTMLElement.prototype = HTMLElement$$module$src$Patch$Native.prototype;
  Object.defineProperty(HTMLElement.prototype, "constructor", {writable:true, configurable:true, enumerable:false, value:PatchedHTMLElement, });
  window["HTMLElement"] = PatchedHTMLElement;
};
var module$src$Patch$HTMLElement = {};
module$src$Patch$HTMLElement.default = $jscompDefaultExport$$module$src$Patch$HTMLElement;
var $jscompDefaultExport$$module$src$Patch$Node = function(internals) {
  Node.prototype.insertBefore = function(node, refNode) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = childrenFromFragment$$module$src$Utilities(node);
      var nativeResult$23 = Node_insertBefore$$module$src$Patch$Native.call(this, node, refNode);
      if (isConnected$$module$src$Utilities(this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }
      return nativeResult$23;
    }
    var nodeWasConnectedElement = node instanceof Element && isConnected$$module$src$Utilities(node);
    var nativeResult = Node_insertBefore$$module$src$Patch$Native.call(this, node, refNode);
    if (nodeWasConnectedElement) {
      internals.disconnectTree(node);
    }
    if (isConnected$$module$src$Utilities(this)) {
      internals.connectTree(node);
    }
    return nativeResult;
  };
  Node.prototype.appendChild = function(node) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = childrenFromFragment$$module$src$Utilities(node);
      var nativeResult$24 = Node_appendChild$$module$src$Patch$Native.call(this, node);
      if (isConnected$$module$src$Utilities(this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }
      return nativeResult$24;
    }
    var nodeWasConnectedElement = node instanceof Element && isConnected$$module$src$Utilities(node);
    var nativeResult = Node_appendChild$$module$src$Patch$Native.call(this, node);
    if (nodeWasConnectedElement) {
      internals.disconnectTree(node);
    }
    if (isConnected$$module$src$Utilities(this)) {
      internals.connectTree(node);
    }
    return nativeResult;
  };
  Node.prototype.cloneNode = function(deep) {
    var clone = Node_cloneNode$$module$src$Patch$Native.call(this, !!deep);
    if (!this.ownerDocument.__CE_registry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  };
  Node.prototype.removeChild = function(node) {
    var nodeWasConnectedElement = node instanceof Element && isConnected$$module$src$Utilities(node);
    var nativeResult = Node_removeChild$$module$src$Patch$Native.call(this, node);
    if (nodeWasConnectedElement) {
      internals.disconnectTree(node);
    }
    return nativeResult;
  };
  Node.prototype.replaceChild = function(nodeToInsert, nodeToRemove) {
    if (nodeToInsert instanceof DocumentFragment) {
      var insertedNodes = childrenFromFragment$$module$src$Utilities(nodeToInsert);
      var nativeResult$25 = Node_replaceChild$$module$src$Patch$Native.call(this, nodeToInsert, nodeToRemove);
      if (isConnected$$module$src$Utilities(this)) {
        internals.disconnectTree(nodeToRemove);
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }
      return nativeResult$25;
    }
    var nodeToInsertWasConnectedElement = nodeToInsert instanceof Element && isConnected$$module$src$Utilities(nodeToInsert);
    var nativeResult = Node_replaceChild$$module$src$Patch$Native.call(this, nodeToInsert, nodeToRemove);
    var thisIsConnected = isConnected$$module$src$Utilities(this);
    if (thisIsConnected) {
      internals.disconnectTree(nodeToRemove);
    }
    if (nodeToInsertWasConnectedElement) {
      internals.disconnectTree(nodeToInsert);
    }
    if (thisIsConnected) {
      internals.connectTree(nodeToInsert);
    }
    return nativeResult;
  };
  function patch_textContent(destination, baseDescriptor) {
    Object.defineProperty(destination, "textContent", {enumerable:baseDescriptor.enumerable, configurable:true, get:baseDescriptor.get, set:function(assignedValue) {
      if (this.nodeType === Node.TEXT_NODE) {
        baseDescriptor.set.call(this, assignedValue);
        return;
      }
      var removedNodes = undefined;
      if (this.firstChild) {
        var childNodes = this.childNodes;
        var childNodesLength = childNodes.length;
        if (childNodesLength > 0 && isConnected$$module$src$Utilities(this)) {
          removedNodes = new Array(childNodesLength);
          for (var i = 0; i < childNodesLength; i++) {
            removedNodes[i] = childNodes[i];
          }
        }
      }
      baseDescriptor.set.call(this, assignedValue);
      if (removedNodes) {
        for (var i$26 = 0; i$26 < removedNodes.length; i$26++) {
          internals.disconnectTree(removedNodes[i$26]);
        }
      }
    }, });
  }
  if (Node_textContent$$module$src$Patch$Native && Node_textContent$$module$src$Patch$Native.get) {
    patch_textContent(Node.prototype, Node_textContent$$module$src$Patch$Native);
  } else {
    internals.addNodePatch(function(element) {
      patch_textContent(element, {enumerable:true, configurable:true, get:function() {
        var parts = [];
        for (var n = this.firstChild; n; n = n.nextSibling) {
          if (n.nodeType === Node.COMMENT_NODE) {
            continue;
          }
          parts.push(n.textContent);
        }
        return parts.join("");
      }, set:function(assignedValue) {
        while (this.firstChild) {
          Node_removeChild$$module$src$Patch$Native.call(this, this.firstChild);
        }
        if (assignedValue != null && assignedValue !== "") {
          Node_appendChild$$module$src$Patch$Native.call(this, document.createTextNode(assignedValue));
        }
      }, });
    });
  }
};
var module$src$Patch$Node = {};
module$src$Patch$Node.default = $jscompDefaultExport$$module$src$Patch$Node;
var priorCustomElements$$module$src$custom_elements = window["customElements"];
function installPolyfill$$module$src$custom_elements() {
  var noDocumentConstructionObserver = !!(priorCustomElements$$module$src$custom_elements === null || priorCustomElements$$module$src$custom_elements === void 0 ? void 0 : priorCustomElements$$module$src$custom_elements["noDocumentConstructionObserver"]);
  var shadyDomFastWalk = !!(priorCustomElements$$module$src$custom_elements === null || priorCustomElements$$module$src$custom_elements === void 0 ? void 0 : priorCustomElements$$module$src$custom_elements["shadyDomFastWalk"]);
  var internals = new CustomElementInternals$$module$src$CustomElementInternals({noDocumentConstructionObserver:noDocumentConstructionObserver, shadyDomFastWalk:shadyDomFastWalk, });
  $jscompDefaultExport$$module$src$Patch$HTMLElement(internals);
  $jscompDefaultExport$$module$src$Patch$Document(internals);
  $jscompDefaultExport$$module$src$Patch$DocumentFragment(internals);
  $jscompDefaultExport$$module$src$Patch$Node(internals);
  $jscompDefaultExport$$module$src$Patch$Element(internals);
  var customElements = new CustomElementRegistry$$module$src$CustomElementRegistry(internals);
  document.__CE_registry = customElements;
  Object.defineProperty(window, "customElements", {configurable:true, enumerable:true, value:customElements, });
}
if (!priorCustomElements$$module$src$custom_elements || priorCustomElements$$module$src$custom_elements["forcePolyfill"] || typeof priorCustomElements$$module$src$custom_elements["define"] != "function" || typeof priorCustomElements$$module$src$custom_elements["get"] != "function") {
  installPolyfill$$module$src$custom_elements();
}
window["__CE_installPolyfill"] = installPolyfill$$module$src$custom_elements;
var module$src$custom_elements = {};

}).call(self);
