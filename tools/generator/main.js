#!/usr/bin/env node
import Z from "fs";
import $e from "id128";
import ye from "path";
const k = -1, Ys = -1;
var p = /* @__PURE__ */ ((n) => (n[n.CREATE = 1] = "CREATE", n[n.SET = 2] = "SET", n[n.UNSET = 3] = "UNSET", n[n.ADD = 4] = "ADD", n[n.REMOVE = 5] = "REMOVE", n[n.ADD_MANY = 6] = "ADD_MANY", n[n.REMOVE_MANY = 7] = "REMOVE_MANY", n[n.MOVE = 8] = "MOVE", n[n.REMOVING_ADAPTER = 9] = "REMOVING_ADAPTER", n[n.RESOLVE = 10] = "RESOLVE", n[n.EVENT_TYPE_COUNT = 11] = "EVENT_TYPE_COUNT", n))(p || {});
function Re(n) {
  return n == null ? void 0 : typeof n.eClass == "function";
}
function B(n) {
  return n == null ? void 0 : Re(n) && typeof n.eStaticClass == "function";
}
function W(n) {
  return "getUnResolvedList" in n;
}
function Ze() {
  return Xt.getInstance();
}
class Ve {
  static {
    this.RESOURCE__RESOURCE_SET = 0;
  }
  static {
    this.RESOURCE__URI = 1;
  }
  static {
    this.RESOURCE__CONTENTS = 2;
  }
  static {
    this.RESOURCE__IS_LOADED = 4;
  }
}
class Rs {
  constructor(e, t, s) {
    this._getChildrenIterator = s, this._root = t, this._obj = e, this._data = null;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (!this._data && (this._data = [this._getChildrenIterator(this._obj)], this._root))
      return { value: this._obj, done: !1 };
    if (this._data.length == 0) return { value: void 0, done: !0 };
    let e = this._data[this._data.length - 1], t = e.next();
    for (; t.done; ) {
      if (this._data.pop(), this._data.length == 0) return { value: void 0, done: !0 };
      e = this._data[this._data.length - 1], t = e.next();
    }
    return e = this._getChildrenIterator(t.value), this._data.push(e), t;
  }
}
class i {
  static {
    this.eNAME = "ecore";
  }
  static {
    this.eNS_URI = "http://www.eclipse.org/emf/2002/Ecore";
  }
  static {
    this.eNS_PREFIX = "ecore";
  }
  static {
    this.EMODEL_ELEMENT = 8;
  }
  static {
    this.EMODEL_ELEMENT__EANNOTATIONS = 0;
  }
  static {
    this.EMODEL_ELEMENT_FEATURE_COUNT = 1;
  }
  static {
    this.EMODEL_ELEMENT__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EMODEL_ELEMENT_OPERATION_COUNT = 1;
  }
  static {
    this.ENAMED_ELEMENT = 9;
  }
  static {
    this.ENAMED_ELEMENT__EANNOTATIONS = 0;
  }
  static {
    this.ENAMED_ELEMENT__NAME = 1;
  }
  static {
    this.ENAMED_ELEMENT_FEATURE_COUNT = 2;
  }
  static {
    this.ENAMED_ELEMENT__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ENAMED_ELEMENT_OPERATION_COUNT = 1;
  }
  static {
    this.ETYPED_ELEMENT = 16;
  }
  static {
    this.ETYPED_ELEMENT__EANNOTATIONS = 0;
  }
  static {
    this.ETYPED_ELEMENT__NAME = 1;
  }
  static {
    this.ETYPED_ELEMENT__ORDERED = 2;
  }
  static {
    this.ETYPED_ELEMENT__UNIQUE = 3;
  }
  static {
    this.ETYPED_ELEMENT__LOWER_BOUND = 4;
  }
  static {
    this.ETYPED_ELEMENT__UPPER_BOUND = 5;
  }
  static {
    this.ETYPED_ELEMENT__MANY = 6;
  }
  static {
    this.ETYPED_ELEMENT__REQUIRED = 7;
  }
  static {
    this.ETYPED_ELEMENT__ETYPE = 8;
  }
  static {
    this.ETYPED_ELEMENT_FEATURE_COUNT = 9;
  }
  static {
    this.ETYPED_ELEMENT__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ETYPED_ELEMENT_OPERATION_COUNT = 1;
  }
  static {
    this.ESTRUCTURAL_FEATURE = 15;
  }
  static {
    this.ESTRUCTURAL_FEATURE__EANNOTATIONS = 0;
  }
  static {
    this.ESTRUCTURAL_FEATURE__NAME = 1;
  }
  static {
    this.ESTRUCTURAL_FEATURE__ORDERED = 2;
  }
  static {
    this.ESTRUCTURAL_FEATURE__UNIQUE = 3;
  }
  static {
    this.ESTRUCTURAL_FEATURE__LOWER_BOUND = 4;
  }
  static {
    this.ESTRUCTURAL_FEATURE__UPPER_BOUND = 5;
  }
  static {
    this.ESTRUCTURAL_FEATURE__MANY = 6;
  }
  static {
    this.ESTRUCTURAL_FEATURE__REQUIRED = 7;
  }
  static {
    this.ESTRUCTURAL_FEATURE__ETYPE = 8;
  }
  static {
    this.ESTRUCTURAL_FEATURE__CHANGEABLE = 9;
  }
  static {
    this.ESTRUCTURAL_FEATURE__VOLATILE = 10;
  }
  static {
    this.ESTRUCTURAL_FEATURE__TRANSIENT = 11;
  }
  static {
    this.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL = 12;
  }
  static {
    this.ESTRUCTURAL_FEATURE__DEFAULT_VALUE = 13;
  }
  static {
    this.ESTRUCTURAL_FEATURE__UNSETTABLE = 14;
  }
  static {
    this.ESTRUCTURAL_FEATURE__DERIVED = 15;
  }
  static {
    this.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS = 16;
  }
  static {
    this.ESTRUCTURAL_FEATURE__FEATURE_ID = 17;
  }
  static {
    this.ESTRUCTURAL_FEATURE_FEATURE_COUNT = 18;
  }
  static {
    this.ESTRUCTURAL_FEATURE__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ESTRUCTURAL_FEATURE__GET_CONTAINER_CLASS = 1;
  }
  static {
    this.ESTRUCTURAL_FEATURE_OPERATION_COUNT = 2;
  }
  static {
    this.EATTRIBUTE = 53;
  }
  static {
    this.EATTRIBUTE__EANNOTATIONS = 0;
  }
  static {
    this.EATTRIBUTE__NAME = 1;
  }
  static {
    this.EATTRIBUTE__ORDERED = 2;
  }
  static {
    this.EATTRIBUTE__UNIQUE = 3;
  }
  static {
    this.EATTRIBUTE__LOWER_BOUND = 4;
  }
  static {
    this.EATTRIBUTE__UPPER_BOUND = 5;
  }
  static {
    this.EATTRIBUTE__MANY = 6;
  }
  static {
    this.EATTRIBUTE__REQUIRED = 7;
  }
  static {
    this.EATTRIBUTE__ETYPE = 8;
  }
  static {
    this.EATTRIBUTE__CHANGEABLE = 9;
  }
  static {
    this.EATTRIBUTE__VOLATILE = 10;
  }
  static {
    this.EATTRIBUTE__TRANSIENT = 11;
  }
  static {
    this.EATTRIBUTE__DEFAULT_VALUE_LITERAL = 12;
  }
  static {
    this.EATTRIBUTE__DEFAULT_VALUE = 13;
  }
  static {
    this.EATTRIBUTE__UNSETTABLE = 14;
  }
  static {
    this.EATTRIBUTE__DERIVED = 15;
  }
  static {
    this.EATTRIBUTE__ECONTAINING_CLASS = 16;
  }
  static {
    this.EATTRIBUTE__FEATURE_ID = 17;
  }
  static {
    this.EATTRIBUTE__ID = 18;
  }
  static {
    this.EATTRIBUTE__EATTRIBUTE_TYPE = 19;
  }
  static {
    this.EATTRIBUTE_FEATURE_COUNT = 20;
  }
  static {
    this.EATTRIBUTE__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EATTRIBUTE__GET_CONTAINER_CLASS = 1;
  }
  static {
    this.EATTRIBUTE_OPERATION_COUNT = 2;
  }
  static {
    this.EANNOTATION = 1;
  }
  static {
    this.EANNOTATION__EANNOTATIONS = 0;
  }
  static {
    this.EANNOTATION__SOURCE = 1;
  }
  static {
    this.EANNOTATION__DETAILS = 2;
  }
  static {
    this.EANNOTATION__EMODEL_ELEMENT = 3;
  }
  static {
    this.EANNOTATION__CONTENTS = 4;
  }
  static {
    this.EANNOTATION__REFERENCES = 5;
  }
  static {
    this.EANNOTATION_FEATURE_COUNT = 6;
  }
  static {
    this.EANNOTATION__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EANNOTATION_OPERATION_COUNT = 1;
  }
  static {
    this.ECLASSIFIER = 3;
  }
  static {
    this.ECLASSIFIER__EANNOTATIONS = 0;
  }
  static {
    this.ECLASSIFIER__NAME = 1;
  }
  static {
    this.ECLASSIFIER__INSTANCE_CLASS_NAME = 2;
  }
  static {
    this.ECLASSIFIER__INSTANCE_CLASS = 3;
  }
  static {
    this.ECLASSIFIER__INSTANCE_TYPE_NAME = 4;
  }
  static {
    this.ECLASSIFIER__DEFAULT_VALUE = 5;
  }
  static {
    this.ECLASSIFIER__EPACKAGE = 6;
  }
  static {
    this.ECLASSIFIER__CLASSIFIER_ID = 7;
  }
  static {
    this.ECLASSIFIER_FEATURE_COUNT = 8;
  }
  static {
    this.ECLASSIFIER__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ECLASSIFIER__IS_INSTANCE_EJAVAOBJECT = 1;
  }
  static {
    this.ECLASSIFIER_OPERATION_COUNT = 2;
  }
  static {
    this.ECLASS = 2;
  }
  static {
    this.ECLASS__EANNOTATIONS = 0;
  }
  static {
    this.ECLASS__NAME = 1;
  }
  static {
    this.ECLASS__INSTANCE_CLASS_NAME = 2;
  }
  static {
    this.ECLASS__INSTANCE_CLASS = 3;
  }
  static {
    this.ECLASS__INSTANCE_TYPE_NAME = 4;
  }
  static {
    this.ECLASS__DEFAULT_VALUE = 5;
  }
  static {
    this.ECLASS__EPACKAGE = 6;
  }
  static {
    this.ECLASS__CLASSIFIER_ID = 7;
  }
  static {
    this.ECLASS__ABSTRACT = 8;
  }
  static {
    this.ECLASS__INTERFACE = 9;
  }
  static {
    this.ECLASS__ESTRUCTURAL_FEATURES = 10;
  }
  static {
    this.ECLASS__EATTRIBUTES = 11;
  }
  static {
    this.ECLASS__EREFERENCES = 12;
  }
  static {
    this.ECLASS__ESUPER_TYPES = 13;
  }
  static {
    this.ECLASS__EOPERATIONS = 14;
  }
  static {
    this.ECLASS__ECONTAINMENT_FEATURES = 15;
  }
  static {
    this.ECLASS__ECROSS_REFERENCE_FEATURES = 16;
  }
  static {
    this.ECLASS__EALL_ATTRIBUTES = 17;
  }
  static {
    this.ECLASS__EALL_REFERENCES = 18;
  }
  static {
    this.ECLASS__EALL_CONTAINMENTS = 19;
  }
  static {
    this.ECLASS__EALL_CROSS_REFERENCES = 20;
  }
  static {
    this.ECLASS__EALL_OPERATIONS = 21;
  }
  static {
    this.ECLASS__EALL_STRUCTURAL_FEATURES = 22;
  }
  static {
    this.ECLASS__EALL_SUPER_TYPES = 23;
  }
  static {
    this.ECLASS__EID_ATTRIBUTE = 24;
  }
  static {
    this.ECLASS_FEATURE_COUNT = 25;
  }
  static {
    this.ECLASS__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ECLASS__IS_INSTANCE_EJAVAOBJECT = 1;
  }
  static {
    this.ECLASS__IS_SUPER_TYPE_OF_ECLASS = 2;
  }
  static {
    this.ECLASS__GET_FEATURE_COUNT = 3;
  }
  static {
    this.ECLASS__GET_ESTRUCTURAL_FEATURE_EINT = 4;
  }
  static {
    this.ECLASS__GET_ESTRUCTURAL_FEATURE_ESTRING = 5;
  }
  static {
    this.ECLASS__GET_FEATURE_ID_ESTRUCTURALFEATURE = 6;
  }
  static {
    this.ECLASS__GET_OPERATION_COUNT = 7;
  }
  static {
    this.ECLASS__GET_EOPERATION_EINT = 8;
  }
  static {
    this.ECLASS__GET_OPERATION_ID_EOPERATION = 9;
  }
  static {
    this.ECLASS__GET_OVERRIDE_EOPERATION = 10;
  }
  static {
    this.ECLASS__GET_FEATURE_TYPE_ESTRUCTURALFEATURE = 11;
  }
  static {
    this.ECLASS_OPERATION_COUNT = 12;
  }
  static {
    this.EDATA_TYPE = 4;
  }
  static {
    this.EDATA_TYPE__EANNOTATIONS = 0;
  }
  static {
    this.EDATA_TYPE__NAME = 1;
  }
  static {
    this.EDATA_TYPE__INSTANCE_CLASS_NAME = 2;
  }
  static {
    this.EDATA_TYPE__INSTANCE_CLASS = 3;
  }
  static {
    this.EDATA_TYPE__INSTANCE_TYPE_NAME = 4;
  }
  static {
    this.EDATA_TYPE__DEFAULT_VALUE = 5;
  }
  static {
    this.EDATA_TYPE__EPACKAGE = 6;
  }
  static {
    this.EDATA_TYPE__CLASSIFIER_ID = 7;
  }
  static {
    this.EDATA_TYPE__SERIALIZABLE = 8;
  }
  static {
    this.EDATA_TYPE_FEATURE_COUNT = 9;
  }
  static {
    this.EDATA_TYPE__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EDATA_TYPE__IS_INSTANCE_EJAVAOBJECT = 1;
  }
  static {
    this.EDATA_TYPE_OPERATION_COUNT = 2;
  }
  static {
    this.EENUM = 5;
  }
  static {
    this.EENUM__EANNOTATIONS = 0;
  }
  static {
    this.EENUM__NAME = 1;
  }
  static {
    this.EENUM__INSTANCE_CLASS_NAME = 2;
  }
  static {
    this.EENUM__INSTANCE_CLASS = 3;
  }
  static {
    this.EENUM__INSTANCE_TYPE_NAME = 4;
  }
  static {
    this.EENUM__DEFAULT_VALUE = 5;
  }
  static {
    this.EENUM__EPACKAGE = 6;
  }
  static {
    this.EENUM__CLASSIFIER_ID = 7;
  }
  static {
    this.EENUM__SERIALIZABLE = 8;
  }
  static {
    this.EENUM__ELITERALS = 9;
  }
  static {
    this.EENUM_FEATURE_COUNT = 10;
  }
  static {
    this.EENUM__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EENUM__IS_INSTANCE_EJAVAOBJECT = 1;
  }
  static {
    this.EENUM__GET_EENUM_LITERAL_ESTRING = 2;
  }
  static {
    this.EENUM__GET_EENUM_LITERAL_EINT = 3;
  }
  static {
    this.EENUM__GET_EENUM_LITERAL_BY_LITERAL_ESTRING = 4;
  }
  static {
    this.EENUM_OPERATION_COUNT = 5;
  }
  static {
    this.EENUM_LITERAL = 6;
  }
  static {
    this.EENUM_LITERAL__EANNOTATIONS = 0;
  }
  static {
    this.EENUM_LITERAL__NAME = 1;
  }
  static {
    this.EENUM_LITERAL__VALUE = 2;
  }
  static {
    this.EENUM_LITERAL__INSTANCE = 3;
  }
  static {
    this.EENUM_LITERAL__LITERAL = 4;
  }
  static {
    this.EENUM_LITERAL__EENUM = 5;
  }
  static {
    this.EENUM_LITERAL_FEATURE_COUNT = 6;
  }
  static {
    this.EENUM_LITERAL__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EENUM_LITERAL_OPERATION_COUNT = 1;
  }
  static {
    this.EFACTORY = 7;
  }
  static {
    this.EFACTORY__EANNOTATIONS = 0;
  }
  static {
    this.EFACTORY__EPACKAGE = 1;
  }
  static {
    this.EFACTORY_FEATURE_COUNT = 2;
  }
  static {
    this.EFACTORY__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EFACTORY__CREATE_ECLASS = 1;
  }
  static {
    this.EFACTORY__CREATE_FROM_STRING_EDATATYPE_ESTRING = 2;
  }
  static {
    this.EFACTORY__CONVERT_TO_STRING_EDATATYPE_EJAVAOBJECT = 3;
  }
  static {
    this.EFACTORY_OPERATION_COUNT = 4;
  }
  static {
    this.EOBJECT = 10;
  }
  static {
    this.EOBJECT_FEATURE_COUNT = 0;
  }
  static {
    this.EOBJECT__ECLASS = 0;
  }
  static {
    this.EOBJECT__EIS_PROXY = 1;
  }
  static {
    this.EOBJECT__ERESOURCE = 2;
  }
  static {
    this.EOBJECT__ECONTAINER = 3;
  }
  static {
    this.EOBJECT__ECONTAINING_FEATURE = 4;
  }
  static {
    this.EOBJECT__ECONTAINMENT_FEATURE = 5;
  }
  static {
    this.EOBJECT__ECONTENTS = 6;
  }
  static {
    this.EOBJECT__EALL_CONTENTS = 7;
  }
  static {
    this.EOBJECT__ECROSS_REFERENCES = 8;
  }
  static {
    this.EOBJECT__EGET_ESTRUCTURALFEATURE = 9;
  }
  static {
    this.EOBJECT__EGET_ESTRUCTURALFEATURE_EBOOLEAN = 10;
  }
  static {
    this.EOBJECT__ESET_ESTRUCTURALFEATURE_EJAVAOBJECT = 11;
  }
  static {
    this.EOBJECT__EIS_SET_ESTRUCTURALFEATURE = 12;
  }
  static {
    this.EOBJECT__EUNSET_ESTRUCTURALFEATURE = 13;
  }
  static {
    this.EOBJECT__EINVOKE_EOPERATION_EELIST = 14;
  }
  static {
    this.EOBJECT_OPERATION_COUNT = 15;
  }
  static {
    this.EOPERATION = 11;
  }
  static {
    this.EOPERATION__EANNOTATIONS = 0;
  }
  static {
    this.EOPERATION__NAME = 1;
  }
  static {
    this.EOPERATION__ORDERED = 2;
  }
  static {
    this.EOPERATION__UNIQUE = 3;
  }
  static {
    this.EOPERATION__LOWER_BOUND = 4;
  }
  static {
    this.EOPERATION__UPPER_BOUND = 5;
  }
  static {
    this.EOPERATION__MANY = 6;
  }
  static {
    this.EOPERATION__REQUIRED = 7;
  }
  static {
    this.EOPERATION__ETYPE = 8;
  }
  static {
    this.EOPERATION__ECONTAINING_CLASS = 9;
  }
  static {
    this.EOPERATION__EPARAMETERS = 10;
  }
  static {
    this.EOPERATION__EEXCEPTIONS = 11;
  }
  static {
    this.EOPERATION__OPERATION_ID = 12;
  }
  static {
    this.EOPERATION_FEATURE_COUNT = 13;
  }
  static {
    this.EOPERATION__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EOPERATION__IS_OVERRIDE_OF_EOPERATION = 1;
  }
  static {
    this.EOPERATION_OPERATION_COUNT = 2;
  }
  static {
    this.EPACKAGE = 12;
  }
  static {
    this.EPACKAGE__EANNOTATIONS = 0;
  }
  static {
    this.EPACKAGE__NAME = 1;
  }
  static {
    this.EPACKAGE__NS_URI = 2;
  }
  static {
    this.EPACKAGE__NS_PREFIX = 3;
  }
  static {
    this.EPACKAGE__EFACTORY_INSTANCE = 4;
  }
  static {
    this.EPACKAGE__ECLASSIFIERS = 5;
  }
  static {
    this.EPACKAGE__ESUB_PACKAGES = 6;
  }
  static {
    this.EPACKAGE__ESUPER_PACKAGE = 7;
  }
  static {
    this.EPACKAGE_FEATURE_COUNT = 8;
  }
  static {
    this.EPACKAGE__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EPACKAGE__GET_ECLASSIFIER_ESTRING = 1;
  }
  static {
    this.EPACKAGE_OPERATION_COUNT = 2;
  }
  static {
    this.EPARAMETER = 13;
  }
  static {
    this.EPARAMETER__EANNOTATIONS = 0;
  }
  static {
    this.EPARAMETER__NAME = 1;
  }
  static {
    this.EPARAMETER__ORDERED = 2;
  }
  static {
    this.EPARAMETER__UNIQUE = 3;
  }
  static {
    this.EPARAMETER__LOWER_BOUND = 4;
  }
  static {
    this.EPARAMETER__UPPER_BOUND = 5;
  }
  static {
    this.EPARAMETER__MANY = 6;
  }
  static {
    this.EPARAMETER__REQUIRED = 7;
  }
  static {
    this.EPARAMETER__ETYPE = 8;
  }
  static {
    this.EPARAMETER__EOPERATION = 9;
  }
  static {
    this.EPARAMETER_FEATURE_COUNT = 10;
  }
  static {
    this.EPARAMETER__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EPARAMETER_OPERATION_COUNT = 1;
  }
  static {
    this.EREFERENCE = 14;
  }
  static {
    this.EREFERENCE__EANNOTATIONS = 0;
  }
  static {
    this.EREFERENCE__NAME = 1;
  }
  static {
    this.EREFERENCE__ORDERED = 2;
  }
  static {
    this.EREFERENCE__UNIQUE = 3;
  }
  static {
    this.EREFERENCE__LOWER_BOUND = 4;
  }
  static {
    this.EREFERENCE__UPPER_BOUND = 5;
  }
  static {
    this.EREFERENCE__MANY = 6;
  }
  static {
    this.EREFERENCE__REQUIRED = 7;
  }
  static {
    this.EREFERENCE__ETYPE = 8;
  }
  static {
    this.EREFERENCE__CHANGEABLE = 9;
  }
  static {
    this.EREFERENCE__VOLATILE = 10;
  }
  static {
    this.EREFERENCE__TRANSIENT = 11;
  }
  static {
    this.EREFERENCE__DEFAULT_VALUE_LITERAL = 12;
  }
  static {
    this.EREFERENCE__DEFAULT_VALUE = 13;
  }
  static {
    this.EREFERENCE__UNSETTABLE = 14;
  }
  static {
    this.EREFERENCE__DERIVED = 15;
  }
  static {
    this.EREFERENCE__ECONTAINING_CLASS = 16;
  }
  static {
    this.EREFERENCE__FEATURE_ID = 17;
  }
  static {
    this.EREFERENCE__CONTAINMENT = 18;
  }
  static {
    this.EREFERENCE__CONTAINER = 19;
  }
  static {
    this.EREFERENCE__RESOLVE_PROXIES = 20;
  }
  static {
    this.EREFERENCE__EOPPOSITE = 21;
  }
  static {
    this.EREFERENCE__EREFERENCE_TYPE = 22;
  }
  static {
    this.EREFERENCE__EKEYS = 23;
  }
  static {
    this.EREFERENCE_FEATURE_COUNT = 24;
  }
  static {
    this.EREFERENCE__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.EREFERENCE__GET_CONTAINER_CLASS = 1;
  }
  static {
    this.EREFERENCE_OPERATION_COUNT = 2;
  }
  static {
    this.ESTRING_TO_STRING_MAP_ENTRY = 48;
  }
  static {
    this.ESTRING_TO_STRING_MAP_ENTRY__KEY = 0;
  }
  static {
    this.ESTRING_TO_STRING_MAP_ENTRY__VALUE = 1;
  }
  static {
    this.ESTRING_TO_STRING_MAP_ENTRY_FEATURE_COUNT = 2;
  }
  static {
    this.ESTRING_TO_STRING_MAP_ENTRY_OPERATION_COUNT = 0;
  }
  static {
    this.EGENERIC_TYPE = 50;
  }
  static {
    this.EGENERIC_TYPE__EUPPER_BOUND = 0;
  }
  static {
    this.EGENERIC_TYPE__ETYPE_ARGUMENTS = 1;
  }
  static {
    this.EGENERIC_TYPE__ERAW_TYPE = 2;
  }
  static {
    this.EGENERIC_TYPE__ELOWER_BOUND = 3;
  }
  static {
    this.EGENERIC_TYPE__ETYPE_PARAMETER = 4;
  }
  static {
    this.EGENERIC_TYPE__ECLASSIFIER = 5;
  }
  static {
    this.EGENERIC_TYPE_FEATURE_COUNT = 6;
  }
  static {
    this.EGENERIC_TYPE__IS_INSTANCE_EJAVAOBJECT = 0;
  }
  static {
    this.EGENERIC_TYPE_OPERATION_COUNT = 1;
  }
  static {
    this.ETYPE_PARAMETER = 51;
  }
  static {
    this.ETYPE_PARAMETER__EANNOTATIONS = 0;
  }
  static {
    this.ETYPE_PARAMETER__NAME = 1;
  }
  static {
    this.ETYPE_PARAMETER__EBOUNDS = 2;
  }
  static {
    this.ETYPE_PARAMETER_FEATURE_COUNT = 3;
  }
  static {
    this.ETYPE_PARAMETER__GET_EANNOTATION_ESTRING = 0;
  }
  static {
    this.ETYPE_PARAMETER_OPERATION_COUNT = 1;
  }
  static {
    this.EBIG_DECIMAL = 17;
  }
  static {
    this.EBIG_INTEGER = 18;
  }
  static {
    this.EBOOLEAN = 19;
  }
  static {
    this.EBOOLEAN_OBJECT = 20;
  }
  static {
    this.EBYTE = 21;
  }
  static {
    this.EBYTE_ARRAY = 22;
  }
  static {
    this.EBYTE_OBJECT = 23;
  }
  static {
    this.ECHAR = 24;
  }
  static {
    this.ECHARACTER_OBJECT = 25;
  }
  static {
    this.EDATE = 26;
  }
  static {
    this.EDIAGNOSTIC_CHAIN = 27;
  }
  static {
    this.EDOUBLE = 28;
  }
  static {
    this.EDOUBLE_OBJECT = 29;
  }
  static {
    this.EE_LIST = 30;
  }
  static {
    this.EENUMERATOR = 31;
  }
  static {
    this.EFEATURE_MAP = 32;
  }
  static {
    this.EFEATURE_MAP_ENTRY = 33;
  }
  static {
    this.EFLOAT = 34;
  }
  static {
    this.EFLOAT_OBJECT = 35;
  }
  static {
    this.EINT = 36;
  }
  static {
    this.EINTEGER_OBJECT = 37;
  }
  static {
    this.EINVOCATION_TARGET_EXCEPTION = 52;
  }
  static {
    this.EJAVA_CLASS = 38;
  }
  static {
    this.EJAVA_OBJECT = 39;
  }
  static {
    this.ELONG = 40;
  }
  static {
    this.ELONG_OBJECT = 41;
  }
  static {
    this.EMAP = 42;
  }
  static {
    this.ERESOURCE = 43;
  }
  static {
    this.ERESOURCE_SET = 44;
  }
  static {
    this.ESHORT = 45;
  }
  static {
    this.ESHORT_OBJECT = 46;
  }
  static {
    this.ESTRING = 47;
  }
  static {
    this.ETREE_ITERATOR = 49;
  }
}
function L() {
  return Yt.getInstance();
}
function Xe() {
  return Vt.getInstance();
}
class js {
  constructor(e) {
    this._isUnique = e;
  }
  add(e) {
    return this._isUnique && this.contains(e) ? !1 : (this.doAdd(e), !0);
  }
  addAll(e) {
    return this._isUnique && (e = $t(this, e), e.isEmpty()) ? !1 : (this.doAddAll(e), !0);
  }
  insert(e, t) {
    if (e < 0 || e > this.size())
      throw new RangeError("Index out of bounds: index=" + e + " size=" + this.size());
    return this._isUnique && this.contains(t) ? !1 : (this.doInsert(e, t), !0);
  }
  insertAll(e, t) {
    if (e < 0 || e > this.size())
      throw new RangeError("Index out of bounds: index=" + e + " size=" + this.size());
    return this._isUnique && (t = $t(this, t), t.isEmpty()) ? !1 : (this.doInsertAll(e, t), !0);
  }
  remove(e) {
    let t = this.indexOf(e);
    return t == -1 ? !1 : (this.removeAt(t), !0);
  }
  removeAll(e) {
    let t = !1;
    for (let s = this.size(); --s >= 0; )
      e.contains(this.doGet(s)) && (this.removeAt(s), t = !0);
    return t;
  }
  retainAll(e) {
    let t = !1;
    for (let s = this.size(); --s >= 0; )
      e.contains(this.doGet(s)) || (this.removeAt(s), t = !0);
    return t;
  }
  get(e) {
    if (e < 0 || e >= this.size())
      throw new RangeError("Index out of bounds: index=" + e + " size=" + this.size());
    return this.doGet(e);
  }
  set(e, t) {
    if (e < 0 || e >= this.size())
      throw new RangeError("Index out of bounds: index=" + e + " size=" + this.size());
    if (this._isUnique) {
      let s = this.indexOf(t);
      if (s >= 0 && s != e)
        throw new Error("element already in list : uniqueness constraint is not respected");
    }
    return this.doSet(e, t);
  }
  indexOf(e) {
    let t = 0;
    for (const s of this) {
      if (s == e) return t;
      t++;
    }
    return -1;
  }
  move(e, t) {
    let s = this.indexOf(t);
    if (s == -1) throw new Error("Object not found");
    this.moveTo(s, e);
  }
  clear() {
    for (let e = this.size() - 1; e >= 0; e--)
      this.removeAt(e);
  }
  contains(e) {
    return this.indexOf(e) != -1;
  }
  isEmpty() {
    return this.size() == 0;
  }
  [Symbol.iterator]() {
    return new class {
      constructor(e) {
        this._cursor = 0, this._list = e;
      }
      next(e) {
        return this._cursor++ < this._list.size() ? { value: this._list.get(this._cursor - 1), done: !1 } : { value: void 0, done: !0 };
      }
    }(this);
  }
  didAdd(e, t) {
  }
  didRemove(e, t) {
  }
  didClear(e) {
    for (let t = 0; t < e.length; ++t)
      this.didRemove(t, e[t]);
  }
  didMove(e, t, s) {
  }
  didSet(e, t, s) {
  }
  didChange() {
  }
}
class Ie extends js {
  constructor(e = [], t = !1) {
    super(t), this._v = Array.from(e);
  }
  clear() {
    this.doClear();
  }
  removeAt(e) {
    if (e < 0 || e >= this._v.length)
      throw new RangeError("Index out of bounds: index=" + e + " size=" + this._v.length);
    let t = this._v[e];
    return this._v.splice(e, 1), this.didRemove(e, t), this.didChange(), t;
  }
  moveTo(e, t) {
    return this.doMove(e, t);
  }
  size() {
    return this._v.length;
  }
  toArray() {
    return this._v;
  }
  doGet(e) {
    return this._v[e];
  }
  doSet(e, t) {
    let s = this._v[e];
    return this._v[e] = t, this.didSet(e, t, s), this.didChange(), s;
  }
  doClear() {
    let e = this._v;
    return this._v = [], this.didClear(e), e;
  }
  doAdd(e) {
    let t = this._v.length;
    this._v.push(e), this.didAdd(t, e), this.didChange();
  }
  doAddAll(e) {
    let t = this._v.length;
    this._v.push(...e.toArray());
    for (let s = t; s < this._v.length; s++)
      this.didAdd(s, this._v[s]), this.didChange();
    return !e.isEmpty();
  }
  doInsert(e, t) {
    this._v.splice(e, 0, t), this.didAdd(e, t), this.didChange();
  }
  doInsertAll(e, t) {
    this._v.splice(e, 0, ...t.toArray());
    for (let s = e; s < e + t.size(); s++)
      this.didAdd(s, this._v[s]), this.didChange();
    return !t.isEmpty();
  }
  doMove(e, t) {
    if (e < 0 || e >= this.size() || t < 0 || t > this.size())
      throw new RangeError("Index out of bounds: from=" + e + " to=" + t + " size=" + this.size());
    let s = this._v[e];
    return e != t && (this._v.splice(e, 1), this._v.splice(t, 0, s), this.didMove(e, t, s), this.didChange()), s;
  }
}
class Vs {
  constructor(e, t) {
    this._key = e, this._value = t;
  }
  get key() {
    return this._key;
  }
  set key(e) {
    this._key = e;
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e;
  }
}
class zs extends Ie {
  constructor() {
    super([], !0), this._mapData = /* @__PURE__ */ new Map();
  }
  put(e, t) {
    this._mapData.set(e, t), this.add(this.newEntry(e, t));
  }
  getValue(e) {
    return this._mapData.get(e);
  }
  removeKey(e) {
    this._mapData.delete(e);
    let t = this.getEntry(e);
    if (t)
      return this.remove(t), t.value;
  }
  containsKey(e) {
    return this._mapData.get(e) != null;
  }
  containsValue(e) {
    for (let [t, s] of this._mapData)
      if (s == e)
        return !0;
    return !1;
  }
  toMap() {
    return this._mapData;
  }
  getEntry(e) {
    for (const t of this)
      if (t.key == e)
        return t;
  }
  newEntry(e, t) {
    return new Vs(e, t);
  }
  didAdd(e, t) {
    this._mapData.set(t.key, t.value);
  }
  didRemove(e, t) {
    this._mapData.delete(t.key);
  }
  didClear(e) {
    this._mapData.clear();
  }
  didSet(e, t, s) {
    this._mapData.delete(s.key), this._mapData.set(t.key, t.value);
  }
}
class Gt {
  constructor() {
    this._target = null;
  }
  get target() {
    return this._target;
  }
  set target(e) {
    this._target = e;
  }
  unsetTarget(e) {
    this._target == e && (this._target = null);
  }
}
class me {
  constructor(e, t, s, r) {
    this.eventType = e, this.oldValue = t, this.newValue = s, this.position = r, this._next = null;
  }
  merge(e) {
    switch (this.eventType) {
      case p.SET:
      case p.UNSET: {
        switch (e.eventType) {
          case p.SET:
          case p.UNSET: {
            if (this.notifier == e.notifier && this.featureID == e.featureID)
              return this.newValue = e.newValue, e.eventType == p.SET && (this.eventType = p.SET), !0;
            break;
          }
        }
        break;
      }
      case p.REMOVE: {
        switch (e.eventType) {
          case p.REMOVE: {
            if (this.notifier == e.notifier && this.featureID == e.featureID) {
              this.eventType = p.REMOVE_MANY;
              let t = this.position, s = e.position, r = [];
              return t <= s ? (r = [this.oldValue, e.oldValue], this.position = t, this.newValue = [t, s + 1]) : (r = [e.oldValue, this.oldValue], this.position = s, this.newValue = [s, t]), this.oldValue = r, !0;
            }
            break;
          }
        }
        break;
      }
      case p.REMOVE_MANY: {
        switch (e.eventType) {
          case p.REMOVE: {
            if (this.notifier == e.notifier && this.featureID == e.featureID) {
              let t = e.position, s = this.newValue || [], r = new Array(s.length + 1), a = 0;
              for (const u of s)
                if (u <= t)
                  r[a++] = u, ++t;
                else break;
              let o = this.oldValue || [];
              for (o.splice(a, 0, e.oldValue), r[a] = t; ++a < s.length + 1; ) r[a] = s[a - 1];
              return this.oldValue = o, this.newValue = r, !0;
            }
            break;
          }
        }
        break;
      }
    }
    return !1;
  }
  add(e) {
    return !e || this.merge(e) ? !1 : this._next ? this._next.add(e) : e instanceof me ? (this._next = e, !0) : (this._next = new He(), this._next.add(e));
  }
  dispatch() {
    this.notifier && this.notifier.eNotify(this), this._next && this._next.dispatch();
  }
}
class Js extends me {
  constructor(e, t, s, r, a) {
    super(t, s, r, a), this._notifier = e;
  }
  get feature() {
    return null;
  }
  get featureID() {
    return -1;
  }
  get notifier() {
    return this._notifier;
  }
}
class gs extends Ie {
  constructor(e) {
    super([], !0), this._notifier = e;
  }
  didAdd(e, t) {
    t.target = this._notifier;
  }
  didRemove(e, t) {
    this._notifier.eDeliver && t.notifyChanged(
      new Js(this._notifier, p.REMOVING_ADAPTER, t, null, e)
    ), t.unsetTarget(this._notifier);
  }
  toJSON() {
    return {};
  }
}
class Is {
  eBasicAdapters() {
    return null;
  }
  eBasicHasAdapters() {
    let e = this.eBasicAdapters();
    return e && !e.isEmpty();
  }
  get eAdapters() {
    return new w();
  }
  get eDeliver() {
    return !1;
  }
  set eDeliver(e) {
    throw new Error("Unsupported operation.");
  }
  get eNotificationRequired() {
    return this.eBasicHasAdapters() && this.eDeliver;
  }
  eNotify(e) {
    if (this.eNotificationRequired)
      for (const t of this.eBasicAdapters())
        t.notifyChanged(e);
  }
}
function qs(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
class Ks extends Is {
  eDynamicProperties() {
    return null;
  }
  eClass() {
    return this.eStaticClass();
  }
  eStaticClass() {
    return null;
  }
  eStaticFeatureCount() {
    return this.eStaticClass().getFeatureCount();
  }
  eResolveProxy(e) {
    return se.resolveInObject(e, this);
  }
  eContainer() {
    let e = this.eInternalContainer();
    if (e && e.eIsProxy()) {
      let t = this.eResolveProxy(e);
      if (t != e) {
        let s = this.eBasicRemoveFromContainer(null), r = this.eInternalContainerFeatureID();
        this.eSetInternalContainer(t, r), s && s.dispatch(), this.eNotificationRequired && r >= k && this.eNotify(new R(this, p.RESOLVE, r, e, t));
      }
      return t;
    }
    return e;
  }
  eContainerFeatureID() {
    return this.eInternalContainerFeatureID();
  }
  eResource() {
    let e = this.eInternalResource();
    if (!e) {
      let t = this.eInternalContainer();
      t && (e = t.eResource());
    }
    return e;
  }
  eSetResource(e, t) {
    let s = t, r = this.eInternalResource();
    r && e && (s = r.eContents().removeWithNotification(this, s), r.detached(this));
    let a = this.eInternalContainer();
    if (a)
      if (this.eContainmentFeature().isResolveProxies) {
        let o = a.eResource();
        o && (e ? r || o.detached(this) : o.attached(this));
      } else
        s = this.eBasicRemoveFromContainer(s), s = this.eBasicSetContainer(null, -1, s);
    return this.eSetInternalResource(e), s;
  }
  eContainingFeature() {
    let e = this.eInternalContainer();
    if (e) {
      let t = this.eInternalContainerFeatureID();
      return t <= k ? e.eClass().getEStructuralFeature(k - t) : this.eClass().getEStructuralFeature(t).eOpposite;
    }
    return null;
  }
  eContainmentFeature() {
    return this.eObjectContainmentFeature(this, this.eInternalContainer(), this.eInternalContainerFeatureID());
  }
  eObjectContainmentFeature(e, t, s) {
    if (t) {
      if (s <= k) {
        let r = t.eClass().getEStructuralFeature(k - s);
        if (H(r))
          return r;
      } else {
        let r = this.eClass().getEStructuralFeature(s);
        if (H(r))
          return r;
      }
      throw new Error("The containment feature could not be located");
    }
    return null;
  }
  eAllContents() {
    return new Rs(this, !1, function(e) {
      return e.eContents()[Symbol.iterator]();
    });
  }
  eFeatureID(e) {
    if (!this.eClass().eAllStructuralFeatures.contains(e))
      throw new Error("The feature '" + e.name + "' is not a valid feature");
    return this.eDerivedFeatureID(e.eContainer(), e.featureID);
  }
  eDerivedFeatureID(e, t) {
    return t;
  }
  eOperationID(e) {
    if (!this.eClass().eAllOperations.contains(e))
      throw new Error("The operation '" + e.name + "' is not a valid feature");
    return this.eDerivedOperationID(e.eContainer(), e.operationID);
  }
  eDerivedOperationID(e, t) {
    return t;
  }
  eGet(e) {
    return this.eGetFromFeature(e, !0);
  }
  eGetResolve(e, t) {
    return this.eGetFromFeature(e, t);
  }
  eGetFromFeature(e, t) {
    let s = this.eFeatureID(e);
    if (s >= 0)
      return this.eGetFromID(s, t);
    throw new Error("The feature '" + e.name + "' is not a valid feature");
  }
  eGetFromID(e, t) {
    let s = this.eClass().getEStructuralFeature(e);
    if (!s)
      throw new Error("Invalid featureID: " + e);
    let r = e - this.eStaticFeatureCount();
    if (r < 0)
      return this.eGetResolve(s, t);
    {
      let a = this.eDynamicProperties();
      if (a)
        return this.eDynamicPropertiesGet(a, s, r, t);
      throw new Error("EObject doesn't define any dynamic properties");
    }
  }
  eDynamicPropertiesGet(e, t, s, r) {
    if (Se(t)) {
      let a = this.eClass().getFeatureID(t);
      if (this.eInternalContainerFeatureID() == a)
        return r ? this.eContainer() : this.eInternalContainer();
    } else {
      let a = e.eDynamicGet(s);
      if (!a)
        t.isMany ? (rr(t) ? a = this.eDynamicPropertiesCreateMap(t) : a = this.eDynamicPropertiesCreateList(t), e.eDynamicSet(s, a)) : t.defaultValue && (a = t.defaultValue);
      else if (r && Ar(t) && Re(a)) {
        let o = a, u = this.eResolveProxy(o);
        if (a = u, o != u) {
          if (e.eDynamicSet(s, u), we(t)) {
            let _ = null;
            if (pe(t)) {
              let d = t.eOpposite;
              if (o) {
                let S = o, O = S.eClass().getFeatureID(d);
                _ = S.eInverseRemove(this, O, _);
              }
              if (u) {
                let S = u, O = S.eClass().getFeatureID(d);
                _ = S.eInverseAdd(this, O, _);
              }
            } else {
              let h = this.eClass().getFeatureID(t);
              o && (_ = o.eInverseRemove(
                this,
                k - h,
                _
              )), u && (_ = u.eInverseAdd(
                this,
                k - h,
                _
              ));
            }
            _ && _.dispatch();
          }
          this.eNotificationRequired && this.eNotify(new R(this, p.RESOLVE, t, o, u));
        }
      }
      return a;
    }
    return null;
  }
  eDynamicPropertiesCreateMap(e) {
    let t = e.eType;
    return new Ns(t);
  }
  eDynamicPropertiesCreateList(e) {
    if (de(e))
      return new Ie([], e.isUnique);
    if (H(e)) {
      let t = !1, s = !1, r = -1, a = e.eOpposite;
      return a ? (r = a.featureID, t = !0, s = !0) : e.isContainment && (t = !0, s = !1), new b(
        this,
        e.featureID,
        r,
        e.isContainment,
        t,
        s,
        e.isResolveProxies,
        e.isUnsettable
      );
    }
    return null;
  }
  eSet(e, t) {
    let s = this.eFeatureID(e);
    if (s >= 0)
      this.eSetFromID(s, t);
    else
      throw new Error("The feature '" + e.name + "' is not a valid feature");
  }
  eSetFromID(e, t) {
    let s = this.eClass().getEStructuralFeature(e);
    if (!s)
      throw new Error("Invalid featureID: " + e);
    let r = e - this.eStaticFeatureCount();
    if (r < 0)
      return this.eSet(s, t);
    {
      let a = this.eDynamicProperties();
      if (a)
        return this.eDynamicPropertiesSet(a, s, r, t);
      throw new Error("EObject doesn't define any dynamic properties");
    }
  }
  eDynamicPropertiesSet(e, t, s, r) {
    if (Se(t)) {
      let a = this.eClass().getFeatureID(t), o = this.eInternalContainer(), u = B(r) ? r : null;
      if (u != o || u && this.eInternalContainerFeatureID() != a) {
        let _;
        if (o && (_ = this.eBasicRemoveFromContainer(_)), u) {
          let h = t.eOpposite, d = u.eClass().getFeatureID(h);
          _ = u.eInverseAdd(this, d, _);
        }
        _ = this.eBasicSetContainer(u, a, _), _ && _.dispatch();
      } else this.eNotificationRequired && this.eNotify(new R(this, p.SET, t, r, r));
    } else if (pe(t) || we(t)) {
      let a = e.eDynamicGet(s);
      if (a != r) {
        let o = null, u = B(a) ? a : null, _ = B(r) ? r : null;
        if (pe(t)) {
          let d = t.eOpposite;
          if (u) {
            let S = u.eClass().getFeatureID(d);
            o = u.eInverseRemove(this, S, o);
          }
          if (_) {
            let S = _.eClass().getFeatureID(d);
            o = _.eInverseAdd(this, S, o);
          }
        } else {
          let h = this.eClass().getFeatureID(t);
          u && (o = u.eInverseRemove(
            this,
            k - h,
            o
          )), _ && (o = _.eInverseAdd(this, k - h, o));
        }
        if (e.eDynamicSet(s, r), this.eNotificationRequired) {
          let h = new R(this, p.SET, t, a, r);
          o ? o.add(h) : o = h;
        }
        o && o.dispatch();
      }
    } else {
      let a = e.eDynamicGet(s);
      e.eDynamicSet(s, r), this.eNotificationRequired && this.eNotify(new R(this, p.SET, t, a, r));
    }
  }
  eIsSet(e) {
    let t = this.eFeatureID(e);
    if (t >= 0)
      return this.eIsSetFromID(t);
    throw new Error("The feature '" + e.name + "' is not a valid feature");
  }
  eIsSetFromID(e) {
    let t = this.eClass().getEStructuralFeature(e);
    if (!t)
      throw new Error("Invalid featureID: " + e);
    let s = e - this.eStaticFeatureCount();
    if (s < 0)
      return this.eIsSet(t);
    {
      let r = this.eDynamicProperties();
      if (r)
        return this.eDynamicPropertiesIsSet(r, t, s);
      throw new Error("EObject doesn't define any dynamic properties");
    }
  }
  eDynamicPropertiesIsSet(e, t, s) {
    if (Se(t)) {
      let r = this.eClass().getFeatureID(t);
      return this.eInternalContainerFeatureID() == r && this.eInternalContainer() != null;
    } else
      return e.eDynamicGet(s) != null;
  }
  eUnset(e) {
    let t = this.eFeatureID(e);
    if (t >= 0)
      this.eUnsetFromID(t);
    else
      throw new Error("The feature '" + e.name + "' is not a valid feature");
  }
  eUnsetFromID(e) {
    let t = this.eClass().getEStructuralFeature(e);
    if (!t)
      throw new Error("Invalid featureID: " + e);
    let s = e - this.eStaticFeatureCount();
    if (s < 0)
      this.eUnset(t);
    else {
      let r = this.eDynamicProperties();
      if (r)
        this.eDynamicPropertiesUnset(r, t, s);
      else
        throw new Error("EObject doesn't define any dynamic properties");
    }
  }
  eDynamicPropertiesUnset(e, t, s) {
    if (Se(t))
      if (this.eInternalContainer()) {
        let r = this.eClass().getFeatureID(t), a = this.eBasicRemoveFromContainer(null);
        a = this.eBasicSetContainer(null, r, a), a && a.dispatch();
      } else this.eNotificationRequired && this.eNotify(new R(this, p.SET, t, null, null));
    else if (pe(t) || we(t)) {
      let r = e.eDynamicGet(s);
      if (r) {
        let a = null, o = B(r) ? r : null;
        if (pe(t)) {
          let _ = t.eOpposite;
          if (o) {
            let h = o.eClass().getFeatureID(_);
            a = o.eInverseRemove(this, h, a);
          }
        } else if (o) {
          let u = this.eClass().getFeatureID(t);
          a = o.eInverseRemove(
            this,
            k - u,
            a
          );
        }
        if (e.eDynamicUnset(s), this.eNotificationRequired) {
          let u = t.isUnsettable ? p.UNSET : p.SET, _ = new R(this, u, t, r, null);
          a ? a.add(_) : a = _;
        }
        a && a.dispatch();
      }
    } else {
      let r = e.eDynamicGet(s);
      e.eDynamicUnset(s), this.eNotificationRequired && this.eNotify(new R(this, p.UNSET, t, r, null));
    }
  }
  eInvoke(e, t) {
    let s = this.eOperationID(e);
    if (s >= 0)
      return this.eInvokeFromID(s, t);
    throw new Error("The operation '" + e.name + "' is not a valid operation");
  }
  eInvokeFromID(e, t) {
    if (!this.eClass().getEOperation(e))
      throw new Error("Invalid operationID: " + e);
  }
  eInverseAdd(e, t, s) {
    let r = s;
    if (t >= 0)
      this.eBasicInverseAdd(e, t, r);
    else
      return r = this.eBasicRemoveFromContainer(r), this.eBasicSetContainer(e, t, r);
  }
  eBasicInverseAdd(e, t, s) {
    let r = this.eClass().getEStructuralFeature(t), a = t - this.eStaticFeatureCount();
    if (a >= 0) {
      let o = this.eDynamicProperties();
      if (o)
        return this.eDynamicPropertiesInverseAdd(o, e, r, a, s);
      throw new Error("EObject doesn't define any dynamic properties");
    }
    return s;
  }
  eDynamicPropertiesInverseAdd(e, t, s, r, a) {
    if (s.isMany) {
      let o = e.eDynamicGet(r);
      return o || (o = this.eDynamicPropertiesCreateList(s), e.eDynamicSet(r, o)), o.addWithNotification(t, a);
    } else if (Se(s)) {
      let o = a;
      this.eInternalContainer() && (o = this.eBasicRemoveFromContainer(o));
      let u = this.eClass().getFeatureID(s);
      return this.eBasicSetContainer(t, u, o);
    } else {
      let o = e.eDynamicGet(r), u = B(o) ? o : null;
      if (u) {
        if (we(s)) {
          let _ = this.eClass().getFeatureID(s);
          a = u.eInverseRemove(this, k - _, a);
        } else if (pe(s)) {
          let h = s.eOpposite, d = u.eClass().getFeatureID(h);
          a = u.eInverseRemove(this, d, a);
        }
      }
      if (e.eDynamicSet(r, t), this.eNotificationRequired) {
        let _ = new R(this, p.SET, s, o, t);
        a ? a.add(_) : a = _;
      }
    }
    return a;
  }
  eInverseRemove(e, t, s) {
    return t >= 0 ? this.eBasicInverseRemove(e, t, s) : this.eBasicSetContainer(null, t, s);
  }
  eBasicInverseRemove(e, t, s) {
    let r = this.eClass().getEStructuralFeature(t), a = t - this.eStaticFeatureCount();
    if (a >= 0) {
      let o = this.eDynamicProperties();
      if (o)
        return this.eDynamicPropertiesInverseRemove(
          o,
          e,
          r,
          a,
          s
        );
      throw new Error("EObject doesn't define any dynamic properties");
    }
    return s;
  }
  eDynamicPropertiesInverseRemove(e, t, s, r, a) {
    if (s.isMany) {
      let o = e.eDynamicGet(r);
      if (o)
        return o.removeWithNotification(t, a);
    } else if (Se(s)) {
      let o = this.eClass().getFeatureID(s);
      return this.eBasicSetContainer(null, o, a);
    } else {
      let o = e.eDynamicGet(r);
      if (e.eDynamicUnset(r), this.eNotificationRequired) {
        let u = new R(this, p.SET, s, o, null);
        a ? a.add(u) : a = u;
      }
    }
    return a;
  }
  eBasicSetContainer(e, t, s) {
    let r = s, a = this.eInternalResource(), o = this.eInternalContainer(), u = this.eInternalContainerFeatureID(), _ = null;
    if (a ? e && !this.eObjectContainmentFeature(this, e, t).isResolveProxies ? (r = a.eContents().removeWithNotification(this, r), this.eSetInternalResource(null), _ = e.eResource()) : a = null : (o && (a = o.eResource()), e && (_ = e.eResource())), a && a != _ && a.detached(this), _ && _ != a && _.attached(this), this.eSetInternalContainer(e, t), this.eNotificationRequired) {
      if (o != null && u >= 0 && u != t) {
        let h = new R(this, p.SET, u, o, null);
        r != null ? r.add(h) : r = h;
      }
      if (t >= 0) {
        let h = new R(
          this,
          p.SET,
          t,
          u == t ? o : null,
          e
        );
        r != null ? r.add(h) : r = h;
      }
    }
    return r;
  }
  eBasicRemoveFromContainer(e) {
    if (this.eInternalContainerFeatureID() >= 0) return this.eBasicRemoveFromContainerFeature(e);
    {
      let t = this.eInternalContainer();
      if (B(t))
        return t.eInverseRemove(
          this,
          k - this.eInternalContainerFeatureID(),
          e
        );
    }
    return e;
  }
  eBasicRemoveFromContainerFeature(e) {
    let t = this.eClass().getEStructuralFeature(this.eInternalContainerFeatureID());
    if (H(t)) {
      let s = t.eOpposite;
      if (s) {
        let r = this.eInternalContainer();
        if (B(r))
          return r.eInverseRemove(this, s.featureID, e);
      }
    }
    return e;
  }
  eObjectForFragmentSegment(e) {
    if (e.length - 1 == -1 || e[0] != "@")
      throw new Error("Expecting @ at index 0 of '" + e + "'");
    let s = -1;
    if (e && e.length > 0 && qs(e.charAt(e.length - 1)) && (s = e.lastIndexOf("."), s != -1)) {
      let r = parseInt(e.slice(s + 1)), a = e.slice(1, s), o = this.getStructuralFeatureFromName(a), u = this.eGetResolve(o, !1);
      if (r < u.size())
        return u.get(r);
    }
    if (s == -1) {
      let r = this.getStructuralFeatureFromName(e.slice(1));
      return this.eGetResolve(r, !1);
    }
    return null;
  }
  eURIFragmentSegment(e, t) {
    let s = "@";
    if (s += e.name, e.isMany) {
      let a = this.eGetResolve(e, !1).indexOf(t);
      s += "." + a.toString();
    }
    return s;
  }
  getStructuralFeatureFromName(e) {
    let t = this.eClass().getEStructuralFeatureFromName(e);
    if (!t)
      throw new Error("The feature " + e + " is not a valid feature");
    return t;
  }
}
class R extends me {
  constructor(e, t, s, r, a, o = -1) {
    super(t, r, a, o), this._object = e, typeof s == "number" ? (this._featureID = s, this._feature = null) : (this._featureID = -1, this._feature = s);
  }
  get feature() {
    return this._feature != null ? this._feature : this._object.eClass().getEStructuralFeature(this._featureID);
  }
  get featureID() {
    return this._featureID != -1 ? this._featureID : this._feature != null ? this._feature.featureID : -1;
  }
  get notifier() {
    return this._object;
  }
}
class He {
  constructor() {
    this._notifications = [];
  }
  add(e) {
    if (!e) return !1;
    for (const t of this._notifications)
      if (t.merge(e)) return !1;
    return this._notifications.push(e), !0;
  }
  dispatch() {
    for (const e of this._notifications)
      e.notifier && e.notifier.eNotify(e);
  }
}
class w {
  constructor(e = []) {
    this._v = e;
  }
  get(e) {
    return this._v[e];
  }
  contains(e) {
    return this._v.indexOf(e) != -1;
  }
  indexOf(e) {
    return this._v.indexOf(e);
  }
  isEmpty() {
    return this._v.length == 0;
  }
  size() {
    return this._v.length;
  }
  toArray() {
    return this._v;
  }
  [Symbol.iterator]() {
    return this._v[Symbol.iterator]();
  }
  insert(e, t) {
    throw new Error("Immutable list can't be modified");
  }
  insertAll(e, t) {
    throw new Error("Immutable list can't be modified");
  }
  removeAt(e) {
    throw new Error("Immutable list can't be modified");
  }
  set(e, t) {
    throw new Error("Immutable list can't be modified");
  }
  add(e) {
    throw new Error("Immutable list can't be modified");
  }
  addAll(e) {
    throw new Error("Immutable list can't be modified");
  }
  clear() {
    throw new Error("Immutable list can't be modified");
  }
  remove(e) {
    throw new Error("Immutable list can't be modified");
  }
  removeAll(e) {
    throw new Error("Immutable list can't be modified");
  }
  retainAll(e) {
    throw new Error("Immutable list can't be modified");
  }
  move(e, t) {
    throw new Error("Immutable list can't be modified");
  }
  moveTo(e, t) {
    throw new Error("Immutable list can't be modified");
  }
}
function $t(n, e) {
  let t = new Set(e);
  for (const s of n)
    t.delete(s);
  return new w([...t]);
}
class At extends Ie {
  constructor(e = []) {
    super(e, !0);
  }
  get isNotificationRequired() {
    return this.notifier != null && this.notifier.eDeliver && !this.notifier.eAdapters.isEmpty();
  }
  addWithNotification(e, t) {
    let s = this.size();
    return this.doAdd(e), this.createAndAddNotification(t, p.ADD, null, e, s);
  }
  removeWithNotification(e, t) {
    let s = this.indexOf(e);
    if (s != -1) {
      let r = this.removeAt(s);
      return this.createAndAddNotification(t, p.REMOVE, r, null, s);
    }
    return t;
  }
  setWithNotification(e, t, s) {
    let r = this.doSet(e, t);
    return this.createAndAddNotification(s, p.SET, r, t, e);
  }
  removeAt(e) {
    let t = super.removeAt(e), s = null;
    return s = this.inverseRemove(t, s), this.createAndDispatchNotification(s, p.REMOVE, t, null, e), t;
  }
  inverseAdd(e, t) {
    return t;
  }
  inverseRemove(e, t) {
    return t;
  }
  doAdd(e) {
    let t = this.size();
    super.doAdd(e);
    let s = this.inverseAdd(e, null);
    this.createAndDispatchNotification(s, p.ADD, null, e, t);
  }
  doAddAll(e) {
    return this.doInsertAll(this.size(), e);
  }
  doInsert(e, t) {
    super.doInsert(e, t);
    let s = this.inverseAdd(t, null);
    this.createAndDispatchNotification(s, p.ADD, null, t, e);
  }
  doInsertAll(e, t) {
    if (t.isEmpty())
      return !1;
    let s = super.doInsertAll(e, t), r = new He();
    for (const a of t)
      r = this.inverseAdd(a, r);
    return this.createAndDispatchNotificationFn(r, () => t.size() == 1 ? this.createNotification(p.ADD, null, t[Symbol.iterator]().next().value, e) : this.createNotification(p.ADD_MANY, null, t.toArray(), e)), s;
  }
  doSet(e, t) {
    let s = super.doSet(e, t);
    if (t != s) {
      let r = null;
      r = this.inverseRemove(s, r), r = this.inverseAdd(t, r), this.createAndDispatchNotification(r, p.SET, s, t, e);
    }
    return s;
  }
  createNotification(e, t, s, r = -1) {
    return new class extends me {
      constructor(a) {
        super(e, t, s, r), this.list = a;
      }
      get feature() {
        return this.list.feature;
      }
      get featureID() {
        return this.list.featureID;
      }
      get notifier() {
        return this.list.notifier;
      }
    }(this);
  }
  createAndAddNotification(e, t, s, r, a = -1) {
    let o = e;
    if (this.isNotificationRequired) {
      let u = this.createNotification(t, s, r, a);
      o != null ? o.add(u) : o = u;
    }
    return o;
  }
  createAndDispatchNotification(e, t, s, r, a = -1) {
    this.createAndDispatchNotificationFn(e, () => this.createNotification(t, s, r, a));
  }
  createAndDispatchNotificationFn(e, t) {
    if (this.isNotificationRequired) {
      let s = t();
      if (e != null)
        e.add(s), e.dispatch();
      else {
        let r = this.notifier;
        r?.eNotify(s);
      }
    } else
      e?.dispatch();
  }
}
class ms extends w {
  constructor(e, t, s) {
    super(), this._initialized = !1, this._resolve = !1, this._obj = e, this._getFeatureFn = t, this._resolve = s;
  }
  get(e) {
    return this.initialize(), super.get(e);
  }
  contains(e) {
    return this.initialize(), super.indexOf(e) != -1;
  }
  indexOf(e) {
    return this.initialize(), super.indexOf(e);
  }
  isEmpty() {
    return this.initialize(), super.isEmpty();
  }
  size() {
    return this.initialize(), super.size();
  }
  toArray() {
    return this.initialize(), super.toArray();
  }
  [Symbol.iterator]() {
    return this.initialize(), super[Symbol.iterator]();
  }
  initialize() {
    if (this._initialized) return;
    this._initialized = !0;
    let e = this._getFeatureFn(this._obj.eClass());
    for (const t of e)
      if (this._obj.eIsSet(t)) {
        let s = this._obj.eGetResolve(t, this._resolve);
        if (t.isMany) {
          let r = s;
          this._v.push(...r.toArray());
        } else s != null && this._v.push(s);
      }
  }
}
class Ws extends ms {
  constructor(e, t) {
    super(e, t, !0);
  }
  getUnResolvedList() {
    return new Xs(this._obj, this._getFeatureFn);
  }
}
class Xs extends ms {
  constructor(e, t) {
    super(e, t, !1);
  }
  getUnResolvedList() {
    return this;
  }
}
class Zt extends Gt {
  constructor(e, t) {
    super(), this._obj = e, this._getFeatureFn = t, e.eAdapters.add(this);
  }
  notifyChanged(e) {
    this._list && this._getFeatureFn(this._obj.eClass()).contains(e.feature) && delete this._list;
  }
  getList() {
    return this._list || (this._list = new Ws(this._obj, this._getFeatureFn)), this._list;
  }
}
class Hs extends Ks {
  constructor() {
    super(...arguments), this._eResource = null, this._eContainer = null, this._eContainerFeatureID = -1, this._eProxyURI = null, this._contentsListAdapter = null, this._crossReferencesListAdapter = null, this._adapters = null, this._deliver = !0;
  }
  get eAdapters() {
    return this._adapters || (this._adapters = new gs(this)), this._adapters;
  }
  get eDeliver() {
    return this._deliver;
  }
  set eDeliver(e) {
    this._deliver = e;
  }
  eBasicAdapters() {
    return this._adapters;
  }
  eInternalContainer() {
    return this._eContainer;
  }
  eInternalContainerFeatureID() {
    return this._eContainerFeatureID;
  }
  eInternalResource() {
    return this._eResource;
  }
  eSetInternalResource(e) {
    this._eResource = e;
  }
  eSetInternalContainer(e, t) {
    this._eContainer = e, this._eContainerFeatureID = t;
  }
  eContents() {
    return this._contentsListAdapter || (this._contentsListAdapter = new Zt(this, function(e) {
      return e.eContainmentFeatures;
    })), this._contentsListAdapter.getList();
  }
  eCrossReferences() {
    return this._crossReferencesListAdapter || (this._crossReferencesListAdapter = new Zt(this, function(e) {
      return e.eCrossReferenceFeatures;
    })), this._crossReferencesListAdapter.getList();
  }
  eIsProxy() {
    return this._eProxyURI != null;
  }
  eProxyURI() {
    return this._eProxyURI;
  }
  eSetProxyURI(e) {
    this._eProxyURI = e;
  }
}
class b extends At {
  constructor(e, t, s, r, a, o, u, _) {
    super(), this._owner = e, this._featureID = t, this._inverseFeatureID = s, this._containment = r, this._inverse = a, this._opposite = o, this._proxies = u, this._unset = _;
  }
  get notifier() {
    return this._owner;
  }
  get feature() {
    return this._owner != null ? this._owner.eClass().getEStructuralFeature(this._featureID) : null;
  }
  get featureID() {
    return this._featureID;
  }
  getUnResolvedList() {
    return this._proxies ? new class extends At {
      constructor(e) {
        super([]), this._delegate = e, this._v = e.toArray();
      }
      get notifier() {
        return this._delegate.notifier;
      }
      get feature() {
        return this._delegate.feature;
      }
      get featureID() {
        return this._delegate.featureID;
      }
      getUnResolvedList() {
        return this;
      }
      inverseAdd(e, t) {
        return this._delegate.inverseAdd(e, t);
      }
      inverseRemove(e, t) {
        return this._delegate.inverseRemove(e, t);
      }
    }(this) : this;
  }
  indexOf(e) {
    if (this._proxies) {
      for (var [t, s] of this._v.entries())
        if (s == e || this.resolve(t, s) == e) return t;
      return -1;
    }
    return super.indexOf(e);
  }
  doGet(e) {
    return this.resolve(e, super.doGet(e));
  }
  inverseAdd(e, t) {
    const s = this.forceCast(e);
    return s != null && this._inverse ? this._opposite ? s.eInverseAdd(this._owner, this._inverseFeatureID, t) : s.eInverseAdd(this._owner, k - this._featureID, t) : t;
  }
  inverseRemove(e, t) {
    const s = this.forceCast(e);
    return s != null && this._inverse ? this._opposite ? s.eInverseRemove(this._owner, this._inverseFeatureID, t) : s.eInverseRemove(this._owner, k - this._featureID, t) : t;
  }
  forceCast(e) {
    return e;
  }
  resolve(e, t) {
    let s = this.resolveProxy(t);
    if (s != t) {
      this.doSet(e, s);
      let r = null;
      this._containment && (r = this.inverseRemove(t, r), this.forceCast(s) != null && (r = this.inverseAdd(s, r))), this.createAndDispatchNotification(r, p.RESOLVE, t, s, e);
    }
    return s;
  }
  resolveProxy(e) {
    return this._proxies && e.eIsProxy() ? this._owner.eResolveProxy(e) : e;
  }
  toJSON() {
    return {
      _featureID: this._featureID,
      _inverseFeatureID: this._inverseFeatureID,
      _containment: this._containment,
      _inverse: this._inverse,
      _opposite: this._opposite,
      _proxies: this._proxies,
      _unset: this._unset
    };
  }
}
class Ns extends zs {
  constructor(e) {
    super(), this._entryClass = e;
  }
  newEntry(e, t) {
    let r = this._entryClass.ePackage.eFactoryInstance.create(this._entryClass);
    return r.key = e, r.value = t, r;
  }
}
class Qs extends Is {
  constructor() {
    super(...arguments), this._adapters = null, this._deliver = !0;
  }
  get eAdapters() {
    return this._adapters || (this._adapters = new gs(this)), this._adapters;
  }
  eBasicAdapters() {
    return this._adapters;
  }
  get eDeliver() {
    return this._deliver;
  }
  set eDeliver(e) {
    this._deliver = e;
  }
}
class Le extends Hs {
  constructor() {
    super();
  }
  eStaticClass() {
    return L().getEObject();
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EOBJECT__EALL_CONTENTS:
        return this.eAllContents();
      case i.EOBJECT__ECLASS:
        return this.eClass();
      case i.EOBJECT__ECONTAINER:
        return this.eContainer();
      case i.EOBJECT__ECONTAINING_FEATURE:
        return this.eContainingFeature();
      case i.EOBJECT__ECONTAINMENT_FEATURE:
        return this.eContainmentFeature();
      case i.EOBJECT__ECONTENTS:
        return this.eContents();
      case i.EOBJECT__ECROSS_REFERENCES:
        return this.eCrossReferences();
      case i.EOBJECT__EGET_ESTRUCTURALFEATURE:
        return this.eGet(t.get(0));
      case i.EOBJECT__EGET_ESTRUCTURALFEATURE_EBOOLEAN:
        return this.eGetResolve(t.get(0), t.get(1));
      case i.EOBJECT__EINVOKE_EOPERATION_EELIST:
        return this.eInvoke(t.get(0), t.get(1));
      case i.EOBJECT__EIS_PROXY:
        return this.eIsProxy();
      case i.EOBJECT__EIS_SET_ESTRUCTURALFEATURE:
        return this.eIsSet(t.get(0));
      case i.EOBJECT__ERESOURCE:
        return this.eResource();
      case i.EOBJECT__ESET_ESTRUCTURALFEATURE_EJAVAOBJECT:
        return this.eSet(t.get(0), t.get(1)), null;
      case i.EOBJECT__EUNSET_ESTRUCTURALFEATURE:
        return this.eUnset(t.get(0)), null;
      default:
        return super.eInvokeFromID(e, t);
    }
  }
}
function $s(n, e, t) {
  for (; e > n.length; ) n.push(t);
  n.length = e;
}
class Zs extends Le {
  constructor() {
    super(), this._clz = null, this._properties = [], this.resizeProperties();
  }
  eStaticClass() {
    return L().getEObject();
  }
  eStaticFeatureCount() {
    return 0;
  }
  eClass() {
    return this._clz ? this._clz : this.eStaticClass();
  }
  setEClass(e) {
    this._clz !== e && (this._clz = e, this.resizeProperties());
  }
  eDynamicProperties() {
    return this;
  }
  eDynamicGet(e) {
    return this._properties[e];
  }
  eDynamicSet(e, t) {
    this._properties[e] = t;
  }
  eDynamicUnset(e) {
    this._properties[e] = null;
  }
  eFeatureID(e) {
    return this._clz.getFeatureID(e);
  }
  eOperationID(e) {
    return this._clz.getOperationID(e);
  }
  resizeProperties() {
    $s(this._properties, this.eClass().getFeatureCount() - this.eStaticClass().getFeatureCount(), null);
  }
}
class er extends Le {
  constructor() {
    super(), this._eAnnotations = null;
  }
  eStaticClass() {
    return L().getEModelElement();
  }
  // get the value of eAnnotations
  get eAnnotations() {
    return this._eAnnotations == null && (this._eAnnotations = this.initEAnnotations()), this._eAnnotations;
  }
  // getEAnnotation default implementation
  getEAnnotation(e) {
    throw new Error("getEAnnotation not implemented");
  }
  initEAnnotations() {
    return new b(
      this,
      i.EMODEL_ELEMENT__EANNOTATIONS,
      i.EANNOTATION__EMODEL_ELEMENT,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EMODEL_ELEMENT__EANNOTATIONS:
        return this.eAnnotations;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EMODEL_ELEMENT__EANNOTATIONS: {
        this.eAnnotations.clear(), this.eAnnotations.addAll(t);
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EMODEL_ELEMENT__EANNOTATIONS: {
        this.eAnnotations.clear();
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EMODEL_ELEMENT__EANNOTATIONS:
        return this.eAnnotations != null && this.eAnnotations.size() != 0;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EMODEL_ELEMENT__GET_EANNOTATION_ESTRING:
        return this.getEAnnotation(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EMODEL_ELEMENT__EANNOTATIONS: {
        let r = this.eAnnotations, a = e;
        return r.addWithNotification(a, s);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EMODEL_ELEMENT__EANNOTATIONS: {
        let r = this.eAnnotations, a = e;
        return r.removeWithNotification(a, s);
      }
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
function at(n) {
  return "details" in n;
}
function lt(n) {
  return "name" in n;
}
class xt extends er {
  constructor() {
    super();
  }
  getEAnnotation(e) {
    if (this._eAnnotations) {
      for (const t of this._eAnnotations)
        if (t.source == e)
          return t;
    }
    return null;
  }
  eObjectForFragmentSegment(e) {
    if (e && e.length > 0) {
      let t = e.charAt(0);
      if (t != "@") {
        if (t == "%") {
          let o = e.lastIndexOf("%"), u = !1;
          if (o != 0 && (u = e[o + 1] == ".", o == e.length - 1 || u)) {
            let _ = "", h = e.slice(1, o);
            h != "%" && (_ = decodeURI(h));
            let d = 0;
            if (u) {
              let S = parseInt(e.slice(o + 2));
              isNaN(S) || (d = S);
            }
            for (const S of this.eContents())
              if (at(S) && (S.source, S.source == _)) {
                if (d == 0)
                  return S;
                d--;
              }
            return null;
          }
        }
        let s = e.lastIndexOf("."), r = s != -1 ? e.slice(0, s) : e, a = 0;
        if (s != -1) {
          let o = parseInt(e.slice(s + 1));
          isNaN(o) ? r = e : a = o;
        }
        r == "%" ? r = "" : r = encodeURI(r);
        for (const o of this.eContents())
          if (lt(o) && o.name == r) {
            if (a == 0)
              return o;
            a--;
          }
        return null;
      }
    }
    return super.eObjectForFragmentSegment(e);
  }
  eURIFragmentSegment(e, t) {
    if (lt(t)) {
      let s = 0, r = t.name;
      for (const a of this.eContents().getUnResolvedList()) {
        if (a == t)
          break;
        lt(a) && a.name == r && s++;
      }
      return r.length == 0 ? r = "%" : r = encodeURI(r), s > 0 ? r + "." + s.toString() : r;
    }
    if (at(t)) {
      let s = 0;
      for (const a of this.eContents()) {
        if (a == t)
          break;
        at(a) && a.source == t.source && s++;
      }
      let r = "%";
      return !t.source || t.source.length == 0 ? r += "%" : r += encodeURI(t.source), r += "%", s > 0 && (r += "." + s.toString()), r;
    }
    return super.eURIFragmentSegment(e, t);
  }
}
class Ue extends xt {
  constructor() {
    super(), this._name = "";
  }
  eStaticClass() {
    return L().getENamedElement();
  }
  // get the value of name
  get name() {
    return this._name;
  }
  // set the value of name
  set name(e) {
    let t = this._name;
    this._name = e, this.eNotificationRequired && this.eNotify(new R(this, p.SET, i.ENAMED_ELEMENT__NAME, t, e));
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ENAMED_ELEMENT__NAME:
        return this.name;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ENAMED_ELEMENT__NAME: {
        this.name = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ENAMED_ELEMENT__NAME: {
        this.name = "";
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ENAMED_ELEMENT__NAME:
        return this._name != "";
      default:
        return super.eIsSetFromID(e);
    }
  }
}
class tr extends Ue {
  constructor() {
    super(), this._eType = null, this._isOrdered = !0, this._isUnique = !0, this._lowerBound = 0, this._upperBound = 1;
  }
  eStaticClass() {
    return L().getETypedElement();
  }
  // get the value of eType
  get eType() {
    if (this._eType != null && this._eType.eIsProxy()) {
      let e = this._eType, t = this.eResolveProxy(e);
      this._eType = t, t != e && this.eNotificationRequired && this.eNotify(
        new R(
          this,
          p.RESOLVE,
          i.ETYPED_ELEMENT__ETYPE,
          e,
          t
        )
      );
    }
    return this._eType;
  }
  // set the value of eType
  set eType(e) {
    let t = this._eType;
    this._eType = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.ETYPED_ELEMENT__ETYPE, t, e)
    );
  }
  // get the basic value of eType with no proxy resolution
  basicGetEType() {
    return this._eType;
  }
  // unSetEType unset the value of _eType
  unSetEType() {
    this.eNotificationRequired && this.eNotify(new R(this, p.UNSET, i.ETYPED_ELEMENT__ETYPE, null, null));
  }
  // get the value of isMany
  get isMany() {
    throw new Error("get isMany not implemented");
  }
  // get the value of isOrdered
  get isOrdered() {
    return this._isOrdered;
  }
  // set the value of isOrdered
  set isOrdered(e) {
    let t = this._isOrdered;
    this._isOrdered = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ETYPED_ELEMENT__ORDERED,
        t,
        e
      )
    );
  }
  // get the value of isRequired
  get isRequired() {
    throw new Error("get isRequired not implemented");
  }
  // get the value of isUnique
  get isUnique() {
    return this._isUnique;
  }
  // set the value of isUnique
  set isUnique(e) {
    let t = this._isUnique;
    this._isUnique = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.ETYPED_ELEMENT__UNIQUE, t, e)
    );
  }
  // get the value of lowerBound
  get lowerBound() {
    return this._lowerBound;
  }
  // set the value of lowerBound
  set lowerBound(e) {
    let t = this._lowerBound;
    this._lowerBound = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ETYPED_ELEMENT__LOWER_BOUND,
        t,
        e
      )
    );
  }
  // get the value of upperBound
  get upperBound() {
    return this._upperBound;
  }
  // set the value of upperBound
  set upperBound(e) {
    let t = this._upperBound;
    this._upperBound = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ETYPED_ELEMENT__UPPER_BOUND,
        t,
        e
      )
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ETYPED_ELEMENT__ETYPE:
        return t ? this.eType : this.basicGetEType();
      case i.ETYPED_ELEMENT__LOWER_BOUND:
        return this.lowerBound;
      case i.ETYPED_ELEMENT__MANY:
        return this.isMany;
      case i.ETYPED_ELEMENT__ORDERED:
        return this.isOrdered;
      case i.ETYPED_ELEMENT__REQUIRED:
        return this.isRequired;
      case i.ETYPED_ELEMENT__UNIQUE:
        return this.isUnique;
      case i.ETYPED_ELEMENT__UPPER_BOUND:
        return this.upperBound;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ETYPED_ELEMENT__ETYPE: {
        this.eType = t;
        break;
      }
      case i.ETYPED_ELEMENT__LOWER_BOUND: {
        this.lowerBound = t;
        break;
      }
      case i.ETYPED_ELEMENT__ORDERED: {
        this.isOrdered = t;
        break;
      }
      case i.ETYPED_ELEMENT__UNIQUE: {
        this.isUnique = t;
        break;
      }
      case i.ETYPED_ELEMENT__UPPER_BOUND: {
        this.upperBound = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ETYPED_ELEMENT__ETYPE: {
        this.unSetEType();
        break;
      }
      case i.ETYPED_ELEMENT__LOWER_BOUND: {
        this.lowerBound = 0;
        break;
      }
      case i.ETYPED_ELEMENT__ORDERED: {
        this.isOrdered = !0;
        break;
      }
      case i.ETYPED_ELEMENT__UNIQUE: {
        this.isUnique = !0;
        break;
      }
      case i.ETYPED_ELEMENT__UPPER_BOUND: {
        this.upperBound = 1;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ETYPED_ELEMENT__ETYPE:
        return this._eType != null;
      case i.ETYPED_ELEMENT__LOWER_BOUND:
        return this._lowerBound != 0;
      case i.ETYPED_ELEMENT__MANY:
        return this.isMany != !1;
      case i.ETYPED_ELEMENT__ORDERED:
        return this._isOrdered != !0;
      case i.ETYPED_ELEMENT__REQUIRED:
        return this.isRequired != !1;
      case i.ETYPED_ELEMENT__UNIQUE:
        return this._isUnique != !0;
      case i.ETYPED_ELEMENT__UPPER_BOUND:
        return this._upperBound != 1;
      default:
        return super.eIsSetFromID(e);
    }
  }
}
class kt extends tr {
  constructor() {
    super();
  }
  get isMany() {
    return this.upperBound > 1 || this.upperBound == Ys;
  }
  get isRequired() {
    return this.lowerBound >= 1;
  }
}
class sr extends kt {
  constructor() {
    super(), this._defaultValueLiteral = "", this._featureID = -1, this._isChangeable = !0, this._isDerived = !1, this._isTransient = !1, this._isUnsettable = !1, this._isVolatile = !1;
  }
  eStaticClass() {
    return L().getEStructuralFeature();
  }
  // get the value of defaultValue
  get defaultValue() {
    throw new Error("get defaultValue not implemented");
  }
  // set the value of defaultValue
  set defaultValue(e) {
    throw new Error("set defaultValue not implemented");
  }
  // get the value of defaultValueLiteral
  get defaultValueLiteral() {
    return this._defaultValueLiteral;
  }
  // set the value of defaultValueLiteral
  set defaultValueLiteral(e) {
    let t = this._defaultValueLiteral;
    this._defaultValueLiteral = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL,
        t,
        e
      )
    );
  }
  // get the value of eContainingClass
  get eContainingClass() {
    return this.eContainerFeatureID() == i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS ? this.eContainer() : null;
  }
  // get the value of featureID
  get featureID() {
    return this._featureID;
  }
  // set the value of featureID
  set featureID(e) {
    let t = this._featureID;
    this._featureID = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__FEATURE_ID,
        t,
        e
      )
    );
  }
  // get the value of isChangeable
  get isChangeable() {
    return this._isChangeable;
  }
  // set the value of isChangeable
  set isChangeable(e) {
    let t = this._isChangeable;
    this._isChangeable = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__CHANGEABLE,
        t,
        e
      )
    );
  }
  // get the value of isDerived
  get isDerived() {
    return this._isDerived;
  }
  // set the value of isDerived
  set isDerived(e) {
    let t = this._isDerived;
    this._isDerived = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__DERIVED,
        t,
        e
      )
    );
  }
  // get the value of isTransient
  get isTransient() {
    return this._isTransient;
  }
  // set the value of isTransient
  set isTransient(e) {
    let t = this._isTransient;
    this._isTransient = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__TRANSIENT,
        t,
        e
      )
    );
  }
  // get the value of isUnsettable
  get isUnsettable() {
    return this._isUnsettable;
  }
  // set the value of isUnsettable
  set isUnsettable(e) {
    let t = this._isUnsettable;
    this._isUnsettable = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__UNSETTABLE,
        t,
        e
      )
    );
  }
  // get the value of isVolatile
  get isVolatile() {
    return this._isVolatile;
  }
  // set the value of isVolatile
  set isVolatile(e) {
    let t = this._isVolatile;
    this._isVolatile = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRUCTURAL_FEATURE__VOLATILE,
        t,
        e
      )
    );
  }
  // getContainerClass default implementation
  getContainerClass() {
    throw new Error("getContainerClass not implemented");
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ESTRUCTURAL_FEATURE__CHANGEABLE:
        return this.isChangeable;
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE:
        return this.defaultValue;
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL:
        return this.defaultValueLiteral;
      case i.ESTRUCTURAL_FEATURE__DERIVED:
        return this.isDerived;
      case i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS:
        return this.eContainingClass;
      case i.ESTRUCTURAL_FEATURE__FEATURE_ID:
        return this.featureID;
      case i.ESTRUCTURAL_FEATURE__TRANSIENT:
        return this.isTransient;
      case i.ESTRUCTURAL_FEATURE__UNSETTABLE:
        return this.isUnsettable;
      case i.ESTRUCTURAL_FEATURE__VOLATILE:
        return this.isVolatile;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ESTRUCTURAL_FEATURE__CHANGEABLE: {
        this.isChangeable = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
        this.defaultValue = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
        this.defaultValueLiteral = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DERIVED: {
        this.isDerived = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__FEATURE_ID: {
        this.featureID = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__TRANSIENT: {
        this.isTransient = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__UNSETTABLE: {
        this.isUnsettable = t;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__VOLATILE: {
        this.isVolatile = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ESTRUCTURAL_FEATURE__CHANGEABLE: {
        this.isChangeable = !0;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE: {
        this.defaultValue = null;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL: {
        this.defaultValueLiteral = "";
        break;
      }
      case i.ESTRUCTURAL_FEATURE__DERIVED: {
        this.isDerived = !1;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__FEATURE_ID: {
        this.featureID = -1;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__TRANSIENT: {
        this.isTransient = !1;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__UNSETTABLE: {
        this.isUnsettable = !1;
        break;
      }
      case i.ESTRUCTURAL_FEATURE__VOLATILE: {
        this.isVolatile = !1;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ESTRUCTURAL_FEATURE__CHANGEABLE:
        return this._isChangeable != !0;
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE:
        return this.defaultValue != null;
      case i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL:
        return this._defaultValueLiteral != "";
      case i.ESTRUCTURAL_FEATURE__DERIVED:
        return this._isDerived != !1;
      case i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS:
        return this.eContainingClass != null;
      case i.ESTRUCTURAL_FEATURE__FEATURE_ID:
        return this._featureID != -1;
      case i.ESTRUCTURAL_FEATURE__TRANSIENT:
        return this._isTransient != !1;
      case i.ESTRUCTURAL_FEATURE__UNSETTABLE:
        return this._isUnsettable != !1;
      case i.ESTRUCTURAL_FEATURE__VOLATILE:
        return this._isVolatile != !1;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.ESTRUCTURAL_FEATURE__GET_CONTAINER_CLASS:
        return this.getContainerClass();
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS:
        return this.eBasicSetContainer(
          null,
          i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS,
          s
        );
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class Os extends sr {
  constructor() {
    super();
  }
  // get the value of defaultValue
  get defaultValue() {
    let e = this.eType, t = this.defaultValueLiteral;
    if (e && t.length == 0)
      return this.isMany ? null : e.defaultValue;
    if (Qe(e)) {
      let s = e.ePackage?.eFactoryInstance;
      return s && s != this._defaultValueFactory && (e.isSerializable && (this._defaultValue = s.createFromString(e, t)), this._defaultValueFactory = s), this._defaultValue;
    }
    return null;
  }
  // set the value of defaultValue
  set defaultValue(e) {
    let t = this.eType;
    if (Qe(t)) {
      let r = t.ePackage.eFactoryInstance.convertToString(t, e);
      super.defaultValueLiteral = r, this._defaultValueFactory = null;
    } else
      throw new Error("Cannot serialize value to object without an EDataType eType");
  }
  get defaultValueLiteral() {
    return super.defaultValueLiteral;
  }
  // set the value of defaultValueLiteral
  set defaultValueLiteral(e) {
    this._defaultValueFactory = null, super.defaultValueLiteral = e;
  }
  get featureID() {
    return this._featureID;
  }
  // set the value of featureID
  set featureID(e) {
    this._featureID = e;
  }
}
function rr(n) {
  return n.eType && n.eType.instanceTypeName == "@masagroup/ecore/EMapEntry";
}
function ir(n) {
  return n == null ? void 0 : "featureID" in n;
}
class nr extends Os {
  constructor() {
    super(), this._isID = !1;
  }
  eStaticClass() {
    return L().getEAttribute();
  }
  // get the value of eAttributeType
  get eAttributeType() {
    throw new Error("get eAttributeType not implemented");
  }
  // get the basic value of eAttributeType with no proxy resolution
  basicGetEAttributeType() {
    throw new Error("basicGetEAttributeType not implemented");
  }
  // get the value of isID
  get isID() {
    return this._isID;
  }
  // set the value of isID
  set isID(e) {
    let t = this._isID;
    this._isID = e, this.eNotificationRequired && this.eNotify(new R(this, p.SET, i.EATTRIBUTE__ID, t, e));
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EATTRIBUTE__EATTRIBUTE_TYPE:
        return t ? this.eAttributeType : this.basicGetEAttributeType();
      case i.EATTRIBUTE__ID:
        return this.isID;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EATTRIBUTE__ID: {
        this.isID = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EATTRIBUTE__ID: {
        this.isID = !1;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EATTRIBUTE__EATTRIBUTE_TYPE:
        return this.eAttributeType != null;
      case i.EATTRIBUTE__ID:
        return this._isID != !1;
      default:
        return super.eIsSetFromID(e);
    }
  }
}
function de(n) {
  return "eAttributeType" in n;
}
class ot extends nr {
  constructor() {
    super();
  }
  get eAttributeType() {
    return this.eType;
  }
  basicGetEAttributeType() {
    return this.basicGetEType();
  }
  get isID() {
    return super.isID;
  }
  set isID(e) {
    super.isID = e;
    let t = this.eContainingClass;
    t?.setModified(i.ECLASS__EATTRIBUTES);
  }
}
class es extends xt {
  constructor() {
    super(), this._contents = null, this._details = null, this._references = null, this._source = "";
  }
  eStaticClass() {
    return L().getEAnnotationClass();
  }
  // get the value of contents
  get contents() {
    return this._contents == null && (this._contents = this.initContents()), this._contents;
  }
  // get the value of details
  get details() {
    return this._details == null && (this._details = this.initDetails()), this._details;
  }
  // get the value of eModelElement
  get eModelElement() {
    return this.eContainerFeatureID() == i.EANNOTATION__EMODEL_ELEMENT ? this.eContainer() : null;
  }
  // set the value of eModelElement
  set eModelElement(e) {
    if (e != this.eInternalContainer() || e != null && this.eContainerFeatureID() != i.EANNOTATION__EMODEL_ELEMENT) {
      let t = null;
      this.eInternalContainer() != null && (t = this.eBasicRemoveFromContainer(t)), B(e) && (t = e.eInverseAdd(
        this,
        i.EMODEL_ELEMENT__EANNOTATIONS,
        t
      )), t = this.basicSetEModelElement(e, t), t?.dispatch();
    } else this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EANNOTATION__EMODEL_ELEMENT,
        e,
        e
      )
    );
  }
  basicSetEModelElement(e, t) {
    return this.eBasicSetContainer(e, i.EANNOTATION__EMODEL_ELEMENT, t);
  }
  // get the value of references
  get references() {
    return this._references == null && (this._references = this.initReferences()), this._references;
  }
  // get the value of source
  get source() {
    return this._source;
  }
  // set the value of source
  set source(e) {
    let t = this._source;
    this._source = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EANNOTATION__SOURCE, t, e)
    );
  }
  initContents() {
    return new b(
      this,
      i.EANNOTATION__CONTENTS,
      -1,
      !0,
      !0,
      !1,
      !1,
      !1
    );
  }
  initDetails() {
    return new Ns(L().getEStringToStringMapEntry());
  }
  initReferences() {
    return new b(
      this,
      i.EANNOTATION__REFERENCES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EANNOTATION__CONTENTS:
        return this.contents;
      case i.EANNOTATION__DETAILS:
        return this.details;
      case i.EANNOTATION__EMODEL_ELEMENT:
        return this.eModelElement;
      case i.EANNOTATION__REFERENCES:
        return !t && W(this.references) ? this.references.getUnResolvedList() : this.references;
      case i.EANNOTATION__SOURCE:
        return this.source;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EANNOTATION__CONTENTS: {
        this.contents.clear(), this.contents.addAll(t);
        break;
      }
      case i.EANNOTATION__DETAILS: {
        this.details.clear(), this.details.addAll(t);
        break;
      }
      case i.EANNOTATION__EMODEL_ELEMENT: {
        this.eModelElement = t;
        break;
      }
      case i.EANNOTATION__REFERENCES: {
        this.references.clear(), this.references.addAll(t);
        break;
      }
      case i.EANNOTATION__SOURCE: {
        this.source = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EANNOTATION__CONTENTS: {
        this.contents.clear();
        break;
      }
      case i.EANNOTATION__DETAILS: {
        this.details.clear();
        break;
      }
      case i.EANNOTATION__EMODEL_ELEMENT: {
        this.eModelElement = null;
        break;
      }
      case i.EANNOTATION__REFERENCES: {
        this.references.clear();
        break;
      }
      case i.EANNOTATION__SOURCE: {
        this.source = "";
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EANNOTATION__CONTENTS:
        return this.contents != null && this.contents.size() != 0;
      case i.EANNOTATION__DETAILS:
        return this.details != null && this.details.size() != 0;
      case i.EANNOTATION__EMODEL_ELEMENT:
        return this.eModelElement != null;
      case i.EANNOTATION__REFERENCES:
        return this.references != null && this.references.size() != 0;
      case i.EANNOTATION__SOURCE:
        return this._source != "";
      default:
        return super.eIsSetFromID(e);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EANNOTATION__EMODEL_ELEMENT: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.basicSetEModelElement(e, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EANNOTATION__CONTENTS: {
        let r = this.contents, a = e;
        return r.removeWithNotification(a, s);
      }
      case i.EANNOTATION__DETAILS:
        return s;
      case i.EANNOTATION__EMODEL_ELEMENT:
        return this.basicSetEModelElement(null, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class ar extends Ue {
  constructor() {
    super(), this._classifierID = -1, this._instanceClass = null, this._instanceClassName = "";
  }
  eStaticClass() {
    return L().getEClassifierClass();
  }
  // get the value of classifierID
  get classifierID() {
    return this._classifierID == -1 && (this._classifierID = this.initClassifierID()), this._classifierID;
  }
  // set the value of classifierID
  set classifierID(e) {
    let t = this._classifierID;
    this._classifierID = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ECLASSIFIER__CLASSIFIER_ID,
        t,
        e
      )
    );
  }
  // get the value of defaultValue
  get defaultValue() {
    throw new Error("get defaultValue not implemented");
  }
  // get the value of ePackage
  get ePackage() {
    return this.eContainerFeatureID() == i.ECLASSIFIER__EPACKAGE ? this.eContainer() : null;
  }
  // get the value of instanceClass
  get instanceClass() {
    return this._instanceClass;
  }
  // set the value of instanceClass
  set instanceClass(e) {
    let t = this._instanceClass;
    this._instanceClass = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ECLASSIFIER__INSTANCE_CLASS,
        t,
        e
      )
    );
  }
  // get the value of instanceClassName
  get instanceClassName() {
    return this._instanceClassName;
  }
  // set the value of instanceClassName
  set instanceClassName(e) {
    let t = this._instanceClassName;
    this._instanceClassName = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ECLASSIFIER__INSTANCE_CLASS_NAME,
        t,
        e
      )
    );
  }
  // get the value of instanceTypeName
  get instanceTypeName() {
    throw new Error("get instanceTypeName not implemented");
  }
  // set the value of instanceTypeName
  set instanceTypeName(e) {
    throw new Error("set instanceTypeName not implemented");
  }
  // isInstance default implementation
  isInstance(e) {
    throw new Error("isInstance not implemented");
  }
  initClassifierID() {
    return -1;
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ECLASSIFIER__CLASSIFIER_ID:
        return this.classifierID;
      case i.ECLASSIFIER__DEFAULT_VALUE:
        return this.defaultValue;
      case i.ECLASSIFIER__EPACKAGE:
        return this.ePackage;
      case i.ECLASSIFIER__INSTANCE_CLASS:
        return this.instanceClass;
      case i.ECLASSIFIER__INSTANCE_CLASS_NAME:
        return this.instanceClassName;
      case i.ECLASSIFIER__INSTANCE_TYPE_NAME:
        return this.instanceTypeName;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ECLASSIFIER__CLASSIFIER_ID: {
        this.classifierID = t;
        break;
      }
      case i.ECLASSIFIER__INSTANCE_CLASS: {
        this.instanceClass = t;
        break;
      }
      case i.ECLASSIFIER__INSTANCE_CLASS_NAME: {
        this.instanceClassName = t;
        break;
      }
      case i.ECLASSIFIER__INSTANCE_TYPE_NAME: {
        this.instanceTypeName = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ECLASSIFIER__CLASSIFIER_ID: {
        this.classifierID = -1;
        break;
      }
      case i.ECLASSIFIER__INSTANCE_CLASS: {
        this.instanceClass = null;
        break;
      }
      case i.ECLASSIFIER__INSTANCE_CLASS_NAME: {
        this.instanceClassName = "";
        break;
      }
      case i.ECLASSIFIER__INSTANCE_TYPE_NAME: {
        this.instanceTypeName = "";
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ECLASSIFIER__CLASSIFIER_ID:
        return this._classifierID != -1;
      case i.ECLASSIFIER__DEFAULT_VALUE:
        return this.defaultValue != null;
      case i.ECLASSIFIER__EPACKAGE:
        return this.ePackage != null;
      case i.ECLASSIFIER__INSTANCE_CLASS:
        return this._instanceClass != null;
      case i.ECLASSIFIER__INSTANCE_CLASS_NAME:
        return this._instanceClassName != "";
      case i.ECLASSIFIER__INSTANCE_TYPE_NAME:
        return this.instanceTypeName != "";
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.ECLASSIFIER__IS_INSTANCE_EJAVAOBJECT:
        return this.isInstance(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.ECLASSIFIER__EPACKAGE: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.ECLASSIFIER__EPACKAGE, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.ECLASSIFIER__EPACKAGE:
        return this.eBasicSetContainer(null, i.ECLASSIFIER__EPACKAGE, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class Fs extends ar {
  constructor() {
    super();
  }
  initClassifierID() {
    return this.ePackage != null ? this.ePackage.eClassifiers.indexOf(this) : -1;
  }
  get defaultValue() {
    return null;
  }
  get instanceTypeName() {
    return this.instanceClassName;
  }
  set instanceTypeName(e) {
    this.instanceClassName = e;
  }
}
class lr extends Fs {
  constructor() {
    super(), this._eAllAttributes = null, this._eAllContainments = null, this._eAllCrossReferences = null, this._eAllOperations = null, this._eAllReferences = null, this._eAllStructuralFeatures = null, this._eAllSuperTypes = null, this._eAttributes = null, this._eContainmentFeatures = null, this._eCrossReferenceFeatures = null, this._eIDAttribute = null, this._eOperations = null, this._eReferences = null, this._eStructuralFeatures = null, this._eSuperTypes = null, this._isAbstract = !1, this._isInterface = !1;
  }
  eStaticClass() {
    return L().getEClass();
  }
  // get the value of eAllAttributes
  get eAllAttributes() {
    return this.initEAllAttributes(), this._eAllAttributes;
  }
  // get the value of eAllContainments
  get eAllContainments() {
    return this.initEAllContainments(), this._eAllContainments;
  }
  // get the value of eAllCrossReferences
  get eAllCrossReferences() {
    return this.initEAllCrossReferences(), this._eAllCrossReferences;
  }
  // get the value of eAllOperations
  get eAllOperations() {
    return this.initEAllOperations(), this._eAllOperations;
  }
  // get the value of eAllReferences
  get eAllReferences() {
    return this.initEAllReferences(), this._eAllReferences;
  }
  // get the value of eAllStructuralFeatures
  get eAllStructuralFeatures() {
    return this.initEAllStructuralFeatures(), this._eAllStructuralFeatures;
  }
  // get the value of eAllSuperTypes
  get eAllSuperTypes() {
    return this.initEAllSuperTypes(), this._eAllSuperTypes;
  }
  // get the value of eAttributes
  get eAttributes() {
    return this.initEAttributes(), this._eAttributes;
  }
  // get the value of eContainmentFeatures
  get eContainmentFeatures() {
    return this.initEContainmentFeatures(), this._eContainmentFeatures;
  }
  // get the value of eCrossReferenceFeatures
  get eCrossReferenceFeatures() {
    return this.initECrossReferenceFeatures(), this._eCrossReferenceFeatures;
  }
  // get the value of eIDAttribute
  get eIDAttribute() {
    return this.initEIDAttribute(), this._eIDAttribute;
  }
  /** @internal */
  set eIDAttribute(e) {
    this._eIDAttribute = e;
  }
  // get the value of eOperations
  get eOperations() {
    return this._eOperations == null && (this._eOperations = this.initEOperations()), this._eOperations;
  }
  // get the value of eReferences
  get eReferences() {
    return this.initEReferences(), this._eReferences;
  }
  // get the value of eStructuralFeatures
  get eStructuralFeatures() {
    return this._eStructuralFeatures == null && (this._eStructuralFeatures = this.initEStructuralFeatures()), this._eStructuralFeatures;
  }
  // get the value of eSuperTypes
  get eSuperTypes() {
    return this._eSuperTypes == null && (this._eSuperTypes = this.initESuperTypes()), this._eSuperTypes;
  }
  // get the value of isAbstract
  get isAbstract() {
    return this._isAbstract;
  }
  // set the value of isAbstract
  set isAbstract(e) {
    let t = this._isAbstract;
    this._isAbstract = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.ECLASS__ABSTRACT, t, e)
    );
  }
  // get the value of isInterface
  get isInterface() {
    return this._isInterface;
  }
  // set the value of isInterface
  set isInterface(e) {
    let t = this._isInterface;
    this._isInterface = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.ECLASS__INTERFACE, t, e)
    );
  }
  // getEOperation default implementation
  getEOperation(e) {
    throw new Error("getEOperation not implemented");
  }
  // getEStructuralFeature default implementation
  getEStructuralFeature(e) {
    throw new Error("getEStructuralFeature not implemented");
  }
  // getEStructuralFeatureFromName default implementation
  getEStructuralFeatureFromName(e) {
    throw new Error("getEStructuralFeatureFromName not implemented");
  }
  // getFeatureCount default implementation
  getFeatureCount() {
    throw new Error("getFeatureCount not implemented");
  }
  // getFeatureID default implementation
  getFeatureID(e) {
    throw new Error("getFeatureID not implemented");
  }
  // getFeatureType default implementation
  getFeatureType(e) {
    throw new Error("getFeatureType not implemented");
  }
  // getOperationCount default implementation
  getOperationCount() {
    throw new Error("getOperationCount not implemented");
  }
  // getOperationID default implementation
  getOperationID(e) {
    throw new Error("getOperationID not implemented");
  }
  // getOverride default implementation
  getOverride(e) {
    throw new Error("getOverride not implemented");
  }
  // isSuperTypeOf default implementation
  isSuperTypeOf(e) {
    throw new Error("isSuperTypeOf not implemented");
  }
  initEAllAttributes() {
    this._eAllAttributes = new b(
      this,
      i.ECLASS__EALL_ATTRIBUTES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllContainments() {
    this._eAllContainments = new b(
      this,
      i.ECLASS__EALL_CONTAINMENTS,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllCrossReferences() {
    this._eAllCrossReferences = new b(
      this,
      i.ECLASS__EALL_CROSS_REFERENCES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllOperations() {
    this._eAllOperations = new b(
      this,
      i.ECLASS__EALL_OPERATIONS,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllReferences() {
    this._eAllReferences = new b(
      this,
      i.ECLASS__EALL_REFERENCES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllStructuralFeatures() {
    this._eAllStructuralFeatures = new b(
      this,
      i.ECLASS__EALL_STRUCTURAL_FEATURES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAllSuperTypes() {
    this._eAllSuperTypes = new b(
      this,
      i.ECLASS__EALL_SUPER_TYPES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEAttributes() {
    this._eAttributes = new b(
      this,
      i.ECLASS__EATTRIBUTES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEContainmentFeatures() {
    this._eContainmentFeatures = new b(
      this,
      i.ECLASS__ECONTAINMENT_FEATURES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initECrossReferenceFeatures() {
    this._eCrossReferenceFeatures = new b(
      this,
      i.ECLASS__ECROSS_REFERENCE_FEATURES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEIDAttribute() {
    throw new Error("initEIDAttribute not implemented");
  }
  initEOperations() {
    return new b(
      this,
      i.ECLASS__EOPERATIONS,
      i.EOPERATION__ECONTAINING_CLASS,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  initEReferences() {
    this._eReferences = new b(
      this,
      i.ECLASS__EREFERENCES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  initEStructuralFeatures() {
    return new b(
      this,
      i.ECLASS__ESTRUCTURAL_FEATURES,
      i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  initESuperTypes() {
    return new b(
      this,
      i.ECLASS__ESUPER_TYPES,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ECLASS__ABSTRACT:
        return this.isAbstract;
      case i.ECLASS__EALL_ATTRIBUTES:
        return !t && W(this.eAllAttributes) ? this.eAllAttributes.getUnResolvedList() : this.eAllAttributes;
      case i.ECLASS__EALL_CONTAINMENTS:
        return !t && W(this.eAllContainments) ? this.eAllContainments.getUnResolvedList() : this.eAllContainments;
      case i.ECLASS__EALL_CROSS_REFERENCES:
        return !t && W(this.eAllCrossReferences) ? this.eAllCrossReferences.getUnResolvedList() : this.eAllCrossReferences;
      case i.ECLASS__EALL_OPERATIONS:
        return !t && W(this.eAllOperations) ? this.eAllOperations.getUnResolvedList() : this.eAllOperations;
      case i.ECLASS__EALL_REFERENCES:
        return !t && W(this.eAllReferences) ? this.eAllReferences.getUnResolvedList() : this.eAllReferences;
      case i.ECLASS__EALL_STRUCTURAL_FEATURES:
        return !t && W(this.eAllStructuralFeatures) ? this.eAllStructuralFeatures.getUnResolvedList() : this.eAllStructuralFeatures;
      case i.ECLASS__EALL_SUPER_TYPES:
        return !t && W(this.eAllSuperTypes) ? this.eAllSuperTypes.getUnResolvedList() : this.eAllSuperTypes;
      case i.ECLASS__EATTRIBUTES:
        return !t && W(this.eAttributes) ? this.eAttributes.getUnResolvedList() : this.eAttributes;
      case i.ECLASS__ECONTAINMENT_FEATURES:
        return !t && W(this.eContainmentFeatures) ? this.eContainmentFeatures.getUnResolvedList() : this.eContainmentFeatures;
      case i.ECLASS__ECROSS_REFERENCE_FEATURES:
        return !t && W(this.eCrossReferenceFeatures) ? this.eCrossReferenceFeatures.getUnResolvedList() : this.eCrossReferenceFeatures;
      case i.ECLASS__EID_ATTRIBUTE:
        return this.eIDAttribute;
      case i.ECLASS__EOPERATIONS:
        return this.eOperations;
      case i.ECLASS__EREFERENCES:
        return !t && W(this.eReferences) ? this.eReferences.getUnResolvedList() : this.eReferences;
      case i.ECLASS__ESTRUCTURAL_FEATURES:
        return this.eStructuralFeatures;
      case i.ECLASS__ESUPER_TYPES:
        return !t && W(this.eSuperTypes) ? this.eSuperTypes.getUnResolvedList() : this.eSuperTypes;
      case i.ECLASS__INTERFACE:
        return this.isInterface;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ECLASS__ABSTRACT: {
        this.isAbstract = t;
        break;
      }
      case i.ECLASS__EOPERATIONS: {
        this.eOperations.clear(), this.eOperations.addAll(t);
        break;
      }
      case i.ECLASS__ESTRUCTURAL_FEATURES: {
        this.eStructuralFeatures.clear(), this.eStructuralFeatures.addAll(t);
        break;
      }
      case i.ECLASS__ESUPER_TYPES: {
        this.eSuperTypes.clear(), this.eSuperTypes.addAll(t);
        break;
      }
      case i.ECLASS__INTERFACE: {
        this.isInterface = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ECLASS__ABSTRACT: {
        this.isAbstract = !1;
        break;
      }
      case i.ECLASS__EOPERATIONS: {
        this.eOperations.clear();
        break;
      }
      case i.ECLASS__ESTRUCTURAL_FEATURES: {
        this.eStructuralFeatures.clear();
        break;
      }
      case i.ECLASS__ESUPER_TYPES: {
        this.eSuperTypes.clear();
        break;
      }
      case i.ECLASS__INTERFACE: {
        this.isInterface = !1;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ECLASS__ABSTRACT:
        return this._isAbstract != !1;
      case i.ECLASS__EALL_ATTRIBUTES:
        return this.eAllAttributes != null && this.eAllAttributes.size() != 0;
      case i.ECLASS__EALL_CONTAINMENTS:
        return this.eAllContainments != null && this.eAllContainments.size() != 0;
      case i.ECLASS__EALL_CROSS_REFERENCES:
        return this.eAllCrossReferences != null && this.eAllCrossReferences.size() != 0;
      case i.ECLASS__EALL_OPERATIONS:
        return this.eAllOperations != null && this.eAllOperations.size() != 0;
      case i.ECLASS__EALL_REFERENCES:
        return this.eAllReferences != null && this.eAllReferences.size() != 0;
      case i.ECLASS__EALL_STRUCTURAL_FEATURES:
        return this.eAllStructuralFeatures != null && this.eAllStructuralFeatures.size() != 0;
      case i.ECLASS__EALL_SUPER_TYPES:
        return this.eAllSuperTypes != null && this.eAllSuperTypes.size() != 0;
      case i.ECLASS__EATTRIBUTES:
        return this.eAttributes != null && this.eAttributes.size() != 0;
      case i.ECLASS__ECONTAINMENT_FEATURES:
        return this.eContainmentFeatures != null && this.eContainmentFeatures.size() != 0;
      case i.ECLASS__ECROSS_REFERENCE_FEATURES:
        return this.eCrossReferenceFeatures != null && this.eCrossReferenceFeatures.size() != 0;
      case i.ECLASS__EID_ATTRIBUTE:
        return this._eIDAttribute != null;
      case i.ECLASS__EOPERATIONS:
        return this.eOperations != null && this.eOperations.size() != 0;
      case i.ECLASS__EREFERENCES:
        return this.eReferences != null && this.eReferences.size() != 0;
      case i.ECLASS__ESTRUCTURAL_FEATURES:
        return this.eStructuralFeatures != null && this.eStructuralFeatures.size() != 0;
      case i.ECLASS__ESUPER_TYPES:
        return this.eSuperTypes != null && this.eSuperTypes.size() != 0;
      case i.ECLASS__INTERFACE:
        return this._isInterface != !1;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.ECLASS__GET_EOPERATION_EINT:
        return this.getEOperation(t.get(0));
      case i.ECLASS__GET_ESTRUCTURAL_FEATURE_EINT:
        return this.getEStructuralFeature(t.get(0));
      case i.ECLASS__GET_ESTRUCTURAL_FEATURE_ESTRING:
        return this.getEStructuralFeatureFromName(t.get(0));
      case i.ECLASS__GET_FEATURE_COUNT:
        return this.getFeatureCount();
      case i.ECLASS__GET_FEATURE_ID_ESTRUCTURALFEATURE:
        return this.getFeatureID(t.get(0));
      case i.ECLASS__GET_FEATURE_TYPE_ESTRUCTURALFEATURE:
        return this.getFeatureType(t.get(0));
      case i.ECLASS__GET_OPERATION_COUNT:
        return this.getOperationCount();
      case i.ECLASS__GET_OPERATION_ID_EOPERATION:
        return this.getOperationID(t.get(0));
      case i.ECLASS__GET_OVERRIDE_EOPERATION:
        return this.getOverride(t.get(0));
      case i.ECLASS__IS_SUPER_TYPE_OF_ECLASS:
        return this.isSuperTypeOf(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.ECLASS__EOPERATIONS: {
        let r = this.eOperations, a = e;
        return r.addWithNotification(a, s);
      }
      case i.ECLASS__ESTRUCTURAL_FEATURES: {
        let r = this.eStructuralFeatures, a = e;
        return r.addWithNotification(a, s);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.ECLASS__EOPERATIONS: {
        let r = this.eOperations, a = e;
        return r.removeWithNotification(a, s);
      }
      case i.ECLASS__ESTRUCTURAL_FEATURES: {
        let r = this.eStructuralFeatures, a = e;
        return r.removeWithNotification(a, s);
      }
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
function Ee(n) {
  return "isAbstract" in n;
}
class or extends Gt {
  constructor(e) {
    super(), this._eClass = e;
  }
  notifyChanged(e) {
    let t = e.eventType, s = e.notifier;
    if (t != p.REMOVING_ADAPTER) {
      if (e.featureID == i.ECLASS__ESUPER_TYPES)
        switch (t) {
          case p.SET:
          case p.RESOLVE: {
            if (e.oldValue != null) {
              let r = e.oldValue, a = r._subClasses.findIndex((o) => o == s);
              a != -1 && r._subClasses.splice(a, 1);
            }
            e.newValue != null && e.newValue._subClasses.push(s);
            break;
          }
          case p.ADD: {
            e.newValue != null && e.newValue._subClasses.push(s);
            break;
          }
          case p.ADD_MANY: {
            if (e.newValue != null) {
              let r = e.newValue;
              for (const a of r)
                a._subClasses.push(s);
            }
            break;
          }
          case p.REMOVE: {
            if (e.oldValue != null) {
              let r = e.oldValue;
              for (const [a, o] of r._subClasses.entries())
                if (o == s) {
                  r._subClasses.splice(a, 1);
                  break;
                }
            }
            break;
          }
          case p.REMOVE_MANY: {
            if (e.oldValue != null) {
              let r = e.oldValue;
              for (const a of r)
                for (const [o, u] of a._subClasses.entries())
                  if (u == s) {
                    a._subClasses.splice(o, 1);
                    break;
                  }
            }
            break;
          }
        }
      this._eClass.setModified(e.featureID);
    }
  }
}
class Et extends lr {
  constructor() {
    super(), this._subClasses = [], this._adapter = new or(this), this.eAdapters.add(this._adapter);
  }
  isSuperTypeOf(e) {
    return e == this || e != null && e.eAllSuperTypes.contains(this);
  }
  getFeatureCount() {
    return this.eAllStructuralFeatures.size();
  }
  getEStructuralFeature(e) {
    return e >= 0 && e < this.eAllStructuralFeatures.size() ? this.eAllStructuralFeatures.get(e) : null;
  }
  getEStructuralFeatureFromName(e) {
    return this.initNameToFeatureMap(), this._nameToFeatureMap.get(e);
  }
  getFeatureID(e) {
    let t = this.eAllStructuralFeatures, s = e.featureID;
    if (s != -1) {
      for (; s < t.size(); s++)
        if (t.get(s) == e) return s;
    }
    return -1;
  }
  getOperationCount() {
    return this.eAllOperations.size();
  }
  getEOperation(e) {
    return e >= 0 && e < this.eAllOperations.size() ? this.eAllOperations.get(e) : null;
  }
  getOperationID(e) {
    let t = e.operationID;
    if (t != -1) {
      for (; t < this.eAllOperations.size(); t++)
        if (this.eAllOperations.get(t) == e) return t;
    }
    return -1;
  }
  getOverride(e) {
    return this.initOperationToOverrideMap(), this._operationToOverrideMap.get(e);
  }
  initEAttributes() {
    this.initEAllAttributes();
  }
  initEReferences() {
    this.initEAllReferences();
  }
  initEContainmentFeatures() {
    this.initFeatureSubSet();
  }
  initECrossReferenceFeatures() {
    this.initFeatureSubSet();
  }
  initNameToFeatureMap() {
    if (this._nameToFeatureMap == null) {
      this.initEAllStructuralFeatures(), this._nameToFeatureMap = /* @__PURE__ */ new Map();
      for (const e of this.eAllStructuralFeatures)
        this._nameToFeatureMap.set(e.name, e);
    }
  }
  initOperationToOverrideMap() {
    if (this._operationToOverrideMap != null)
      return;
    this.initEAllOperations();
    let e = this.eAllOperations.size();
    this._operationToOverrideMap = /* @__PURE__ */ new Map();
    for (let t = 0; t < e; t++)
      for (let s = e - 1; s > t; s--) {
        let r = this.eAllOperations.get(t), a = this.eAllOperations.get(s);
        a.isOverrideOf(r) && this._operationToOverrideMap.set(r, a);
      }
  }
  initFeatureSubSet() {
    if (this._eContainmentFeatures != null)
      return;
    this.initEAllStructuralFeatures();
    let e = [], t = [];
    for (const s of this.eStructuralFeatures)
      H(s) && (s.isContainment ? s.isDerived || e.push(s) : s.isContainer || s.isDerived || t.push(s));
    this._eContainmentFeatures = new w(e), this._eCrossReferenceFeatures = new w(t);
  }
  initEAllAttributes() {
    if (this._eAllAttributes != null)
      return;
    let e = [], t = [], s = null;
    for (const r of this.eSuperTypes)
      for (const a of r.eAllAttributes)
        t.push(a), a.isID && !s && (s = a);
    for (const r of this.eStructuralFeatures)
      de(r) && (e.push(r), t.push(r), r.isID && !s && (s = r));
    this._eIDAttribute = s, this._eAttributes = new w(e), this._eAllAttributes = new w(t);
  }
  initEAllReferences() {
    if (this._eAllReferences != null)
      return;
    let e = [], t = [];
    for (const s of this.eSuperTypes)
      t.push(...s.eAllReferences.toArray());
    for (const s of this.eStructuralFeatures)
      H(s) && (e.push(s), t.push(s));
    this._eReferences = new w(e), this._eAllReferences = new w(t);
  }
  initEAllContainments() {
    if (this._eAllContainments != null)
      return;
    let e = [];
    for (const t of this.eAllReferences)
      t.isContainment && e.push(t);
    this._eAllContainments = new w(e);
  }
  initEAllOperations() {
    if (this._eAllOperations != null)
      return;
    this._operationToOverrideMap = null;
    let e = [];
    for (const s of this.eSuperTypes)
      e.push(...s.eAllOperations.toArray());
    let t = e.length;
    for (const s of this.eOperations)
      s.operationID = t++, e.push(s);
    this._eAllOperations = new w(e);
  }
  initEAllStructuralFeatures() {
    if (this._eAllStructuralFeatures != null)
      return;
    this._eCrossReferenceFeatures = null, this._eContainmentFeatures = null, this._nameToFeatureMap = null;
    let e = [];
    for (const s of this.eSuperTypes)
      e.push(...s.eAllStructuralFeatures.toArray());
    let t = e.length;
    for (const s of this.eStructuralFeatures)
      s.featureID = t++, e.push(s);
    this._eAllStructuralFeatures = new w(e);
  }
  initEAllSuperTypes() {
    if (this._eAllSuperTypes != null)
      return;
    let e = [];
    for (const t of this.eSuperTypes)
      e.push(...t.eAllSuperTypes.toArray()), e.push(t);
    this._eAllSuperTypes = new w(e);
  }
  initEIDAttribute() {
    this.initEAllAttributes();
  }
  setModified(e) {
    switch (e) {
      case i.ECLASS__ESTRUCTURAL_FEATURES: {
        this._eAllAttributes = null, this._eAllStructuralFeatures = null, this._eAllReferences = null, this._eAllContainments = null;
        break;
      }
      case i.ECLASS__EATTRIBUTES: {
        this._eAllAttributes = null, this._eAllStructuralFeatures = null, this._eAllContainments = null;
        break;
      }
      case i.ECLASS__EREFERENCES: {
        this._eAllStructuralFeatures = null, this._eAllReferences = null, this._eAllContainments = null;
        break;
      }
      case i.ECLASS__EOPERATIONS: {
        this._eAllOperations = null, this._eAllContainments = null;
        break;
      }
      case i.ECLASS__ESUPER_TYPES: {
        this._eAllSuperTypes = null, this._eAllAttributes = null, this._eAllOperations = null, this._eAllStructuralFeatures = null, this._eAllReferences = null, this._eAllContainments = null;
        break;
      }
    }
    for (const t of this._subClasses)
      t.setModified(e);
  }
}
class Er extends Fs {
  constructor() {
    super(), this._isSerializable = !0;
  }
  eStaticClass() {
    return L().getEDataType();
  }
  // get the value of isSerializable
  get isSerializable() {
    return this._isSerializable;
  }
  // set the value of isSerializable
  set isSerializable(e) {
    let t = this._isSerializable;
    this._isSerializable = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EDATA_TYPE__SERIALIZABLE,
        t,
        e
      )
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EDATA_TYPE__SERIALIZABLE:
        return this.isSerializable;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EDATA_TYPE__SERIALIZABLE: {
        this.isSerializable = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EDATA_TYPE__SERIALIZABLE: {
        this.isSerializable = !0;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EDATA_TYPE__SERIALIZABLE:
        return this._isSerializable != !0;
      default:
        return super.eIsSetFromID(e);
    }
  }
}
function Qe(n) {
  return n == null ? void 0 : "isSerializable" in n;
}
class ze extends Er {
  get defaultValue() {
    return this._defaultValue;
  }
  set defaultValue(e) {
    let t = this._defaultValue;
    this._defaultValue = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EDATA_TYPE__DEFAULT_VALUE,
        t,
        e
      )
    );
  }
}
class ur extends ze {
  constructor() {
    super(), this._eLiterals = null;
  }
  eStaticClass() {
    return L().getEEnum();
  }
  // get the value of eLiterals
  get eLiterals() {
    return this._eLiterals == null && (this._eLiterals = this.initELiterals()), this._eLiterals;
  }
  // getEEnumLiteralByLiteral default implementation
  getEEnumLiteralByLiteral(e) {
    throw new Error("getEEnumLiteralByLiteral not implemented");
  }
  // getEEnumLiteralByName default implementation
  getEEnumLiteralByName(e) {
    throw new Error("getEEnumLiteralByName not implemented");
  }
  // getEEnumLiteralByValue default implementation
  getEEnumLiteralByValue(e) {
    throw new Error("getEEnumLiteralByValue not implemented");
  }
  initELiterals() {
    return new b(
      this,
      i.EENUM__ELITERALS,
      i.EENUM_LITERAL__EENUM,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EENUM__ELITERALS:
        return this.eLiterals;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EENUM__ELITERALS: {
        this.eLiterals.clear(), this.eLiterals.addAll(t);
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EENUM__ELITERALS: {
        this.eLiterals.clear();
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EENUM__ELITERALS:
        return this.eLiterals != null && this.eLiterals.size() != 0;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EENUM__GET_EENUM_LITERAL_BY_LITERAL_ESTRING:
        return this.getEEnumLiteralByLiteral(t.get(0));
      case i.EENUM__GET_EENUM_LITERAL_ESTRING:
        return this.getEEnumLiteralByName(t.get(0));
      case i.EENUM__GET_EENUM_LITERAL_EINT:
        return this.getEEnumLiteralByValue(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EENUM__ELITERALS: {
        let r = this.eLiterals, a = e;
        return r.addWithNotification(a, s);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EENUM__ELITERALS: {
        let r = this.eLiterals, a = e;
        return r.removeWithNotification(a, s);
      }
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
function fe(n) {
  return n == null ? void 0 : "eLiterals" in n;
}
class ut extends ur {
  get defaultValue() {
    return this.eLiterals.isEmpty() ? null : this.eLiterals.get(0).value;
  }
  // getEEnumLiteralByLiteral default implementation
  getEEnumLiteralByLiteral(e) {
    for (const t of this.eLiterals)
      if (t.literal == e)
        return t;
    return null;
  }
  // getEEnumLiteralByName default implementation
  getEEnumLiteralByName(e) {
    for (const t of this.eLiterals)
      if (t.name == e)
        return t;
    return null;
  }
  // getEEnumLiteralByValue default implementation
  getEEnumLiteralByValue(e) {
    for (const t of this.eLiterals)
      if (t.value == e)
        return t;
    return null;
  }
}
class cr extends Ue {
  constructor() {
    super(), this._instance = null, this._literal = "", this._value = 0;
  }
  eStaticClass() {
    return L().getEEnumLiteral();
  }
  // get the value of eEnum
  get eEnum() {
    return this.eContainerFeatureID() == i.EENUM_LITERAL__EENUM ? this.eContainer() : null;
  }
  // get the value of instance
  get instance() {
    return this._instance;
  }
  // set the value of instance
  set instance(e) {
    let t = this._instance;
    this._instance = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EENUM_LITERAL__INSTANCE, t, e)
    );
  }
  // get the value of literal
  get literal() {
    return this._literal;
  }
  // set the value of literal
  set literal(e) {
    let t = this._literal;
    this._literal = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EENUM_LITERAL__LITERAL, t, e)
    );
  }
  // get the value of value
  get value() {
    return this._value;
  }
  // set the value of value
  set value(e) {
    let t = this._value;
    this._value = e, this.eNotificationRequired && this.eNotify(new R(this, p.SET, i.EENUM_LITERAL__VALUE, t, e));
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EENUM_LITERAL__EENUM:
        return this.eEnum;
      case i.EENUM_LITERAL__INSTANCE:
        return this.instance;
      case i.EENUM_LITERAL__LITERAL:
        return this.literal;
      case i.EENUM_LITERAL__VALUE:
        return this.value;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EENUM_LITERAL__INSTANCE: {
        this.instance = t;
        break;
      }
      case i.EENUM_LITERAL__LITERAL: {
        this.literal = t;
        break;
      }
      case i.EENUM_LITERAL__VALUE: {
        this.value = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EENUM_LITERAL__INSTANCE: {
        this.instance = null;
        break;
      }
      case i.EENUM_LITERAL__LITERAL: {
        this.literal = "";
        break;
      }
      case i.EENUM_LITERAL__VALUE: {
        this.value = 0;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EENUM_LITERAL__EENUM:
        return this.eEnum != null;
      case i.EENUM_LITERAL__INSTANCE:
        return this.instance != null;
      case i.EENUM_LITERAL__LITERAL:
        return this._literal != "";
      case i.EENUM_LITERAL__VALUE:
        return this._value != 0;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EENUM_LITERAL__EENUM: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.EENUM_LITERAL__EENUM, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EENUM_LITERAL__EENUM:
        return this.eBasicSetContainer(null, i.EENUM_LITERAL__EENUM, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class ts extends cr {
  get literal() {
    let e = super.literal;
    return e.length == 0 ? this.name : e;
  }
  set literal(e) {
    super.literal = e;
  }
}
class hr extends xt {
  constructor() {
    super();
  }
  eStaticClass() {
    return L().getEFactory();
  }
  // get the value of ePackage
  get ePackage() {
    return this.eContainerFeatureID() == i.EFACTORY__EPACKAGE ? this.eContainer() : null;
  }
  // set the value of ePackage
  set ePackage(e) {
    if (e != this.eInternalContainer() || e != null && this.eContainerFeatureID() != i.EFACTORY__EPACKAGE) {
      let t = null;
      this.eInternalContainer() != null && (t = this.eBasicRemoveFromContainer(t)), B(e) && (t = e.eInverseAdd(this, i.EPACKAGE__EFACTORY_INSTANCE, t)), t = this.basicSetEPackage(e, t), t?.dispatch();
    } else this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EFACTORY__EPACKAGE, e, e)
    );
  }
  basicSetEPackage(e, t) {
    return this.eBasicSetContainer(e, i.EFACTORY__EPACKAGE, t);
  }
  // convertToString default implementation
  convertToString(e, t) {
    throw new Error("convertToString not implemented");
  }
  // create default implementation
  create(e) {
    throw new Error("create not implemented");
  }
  // createFromString default implementation
  createFromString(e, t) {
    throw new Error("createFromString not implemented");
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EFACTORY__EPACKAGE:
        return this.ePackage;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EFACTORY__EPACKAGE: {
        this.ePackage = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EFACTORY__EPACKAGE: {
        this.ePackage = null;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EFACTORY__EPACKAGE:
        return this.ePackage != null;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EFACTORY__CONVERT_TO_STRING_EDATATYPE_EJAVAOBJECT:
        return this.convertToString(t.get(0), t.get(1));
      case i.EFACTORY__CREATE_ECLASS:
        return this.create(t.get(0));
      case i.EFACTORY__CREATE_FROM_STRING_EDATATYPE_ESTRING:
        return this.createFromString(t.get(0), t.get(1));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EFACTORY__EPACKAGE: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.basicSetEPackage(e, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EFACTORY__EPACKAGE:
        return this.basicSetEPackage(null, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class Je extends hr {
  constructor() {
    super();
  }
  create(e) {
    if (this.ePackage != e.ePackage || e.isAbstract)
      throw new Error("The class '" + e.name + "' is not a valid classifier");
    let t = new Zs();
    return t.setEClass(e), t;
  }
  // CreateFromString default implementation
  createFromString(e, t) {
    if (this.ePackage != e.ePackage)
      throw new Error("The datatype '" + e.name + "' is not a valid classifier");
    if (fe(e)) {
      let s = e.getEEnumLiteralByLiteral(t);
      if (!s)
        throw new Error(
          "The value '" + t + "' is not a valid enumerator of '" + e.name + "'"
        );
      return s.value;
    }
    switch (e.instanceTypeName) {
      case "number":
        return Number(t);
      case "boolean":
        return !!t;
      case "string":
        return t;
    }
    throw new Error("createFromString not implemented for '" + e.name + "'");
  }
  convertToString(e, t) {
    if (this.ePackage != e.ePackage)
      throw new Error("The datatype '" + e.name + "' is not a valid classifier");
    if (fe(e)) {
      let s = e.getEEnumLiteralByValue(t);
      if (!s)
        throw new Error(
          "The value '" + t + "' is not a valid enumerator of '" + e.name + "'"
        );
      return s.literal;
    }
    return t.toString();
  }
}
class _r extends kt {
  constructor() {
    super(), this._eExceptions = null, this._eParameters = null, this._operationID = -1;
  }
  eStaticClass() {
    return L().getEOperation();
  }
  // get the value of eContainingClass
  get eContainingClass() {
    return this.eContainerFeatureID() == i.EOPERATION__ECONTAINING_CLASS ? this.eContainer() : null;
  }
  // get the value of eExceptions
  get eExceptions() {
    return this._eExceptions == null && (this._eExceptions = this.initEExceptions()), this._eExceptions;
  }
  // unSetEExceptions unset the value of _eExceptions
  unSetEExceptions() {
    this._eExceptions != null && this._eExceptions.clear();
  }
  // get the value of eParameters
  get eParameters() {
    return this._eParameters == null && (this._eParameters = this.initEParameters()), this._eParameters;
  }
  // get the value of operationID
  get operationID() {
    return this._operationID;
  }
  // set the value of operationID
  set operationID(e) {
    let t = this._operationID;
    this._operationID = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EOPERATION__OPERATION_ID,
        t,
        e
      )
    );
  }
  // isOverrideOf default implementation
  isOverrideOf(e) {
    throw new Error("isOverrideOf not implemented");
  }
  initEExceptions() {
    return new b(
      this,
      i.EOPERATION__EEXCEPTIONS,
      -1,
      !1,
      !1,
      !1,
      !0,
      !0
    );
  }
  initEParameters() {
    return new b(
      this,
      i.EOPERATION__EPARAMETERS,
      i.EPARAMETER__EOPERATION,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EOPERATION__ECONTAINING_CLASS:
        return this.eContainingClass;
      case i.EOPERATION__EEXCEPTIONS:
        return !t && W(this.eExceptions) ? this.eExceptions.getUnResolvedList() : this.eExceptions;
      case i.EOPERATION__EPARAMETERS:
        return this.eParameters;
      case i.EOPERATION__OPERATION_ID:
        return this.operationID;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EOPERATION__EEXCEPTIONS: {
        this.eExceptions.clear(), this.eExceptions.addAll(t);
        break;
      }
      case i.EOPERATION__EPARAMETERS: {
        this.eParameters.clear(), this.eParameters.addAll(t);
        break;
      }
      case i.EOPERATION__OPERATION_ID: {
        this.operationID = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EOPERATION__EEXCEPTIONS: {
        this.unSetEExceptions();
        break;
      }
      case i.EOPERATION__EPARAMETERS: {
        this.eParameters.clear();
        break;
      }
      case i.EOPERATION__OPERATION_ID: {
        this.operationID = -1;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EOPERATION__ECONTAINING_CLASS:
        return this.eContainingClass != null;
      case i.EOPERATION__EEXCEPTIONS:
        return this.eExceptions != null && this.eExceptions.size() != 0;
      case i.EOPERATION__EPARAMETERS:
        return this.eParameters != null && this.eParameters.size() != 0;
      case i.EOPERATION__OPERATION_ID:
        return this._operationID != -1;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EOPERATION__IS_OVERRIDE_OF_EOPERATION:
        return this.isOverrideOf(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EOPERATION__ECONTAINING_CLASS: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.EOPERATION__ECONTAINING_CLASS, r);
      }
      case i.EOPERATION__EPARAMETERS: {
        let r = this.eParameters, a = e;
        return r.addWithNotification(a, s);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EOPERATION__ECONTAINING_CLASS:
        return this.eBasicSetContainer(null, i.EOPERATION__ECONTAINING_CLASS, s);
      case i.EOPERATION__EPARAMETERS: {
        let r = this.eParameters, a = e;
        return r.removeWithNotification(a, s);
      }
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class ct extends _r {
  constructor() {
    super();
  }
}
class fr extends Ue {
  constructor() {
    super(), this._eClassifiers = null, this._eFactoryInstance = null, this._eSubPackages = null, this._nsPrefix = "", this._nsURI = "";
  }
  eStaticClass() {
    return L().getEPackage();
  }
  // get the value of eClassifiers
  get eClassifiers() {
    return this._eClassifiers == null && (this._eClassifiers = this.initEClassifiers()), this._eClassifiers;
  }
  // get the value of eFactoryInstance
  get eFactoryInstance() {
    return this._eFactoryInstance;
  }
  // set the value of eFactoryInstance
  set eFactoryInstance(e) {
    let t = this._eFactoryInstance;
    if (e != t) {
      let s = null;
      B(t) && (s = t.eInverseRemove(
        this,
        i.EFACTORY__EPACKAGE,
        s
      )), B(e) && (s = e.eInverseAdd(this, i.EFACTORY__EPACKAGE, s)), s = this.basicSetEFactoryInstance(e, s), s?.dispatch();
    }
  }
  basicSetEFactoryInstance(e, t) {
    let s = this._eFactoryInstance;
    this._eFactoryInstance = e;
    let r = t;
    if (this.eNotificationRequired) {
      let a = new R(
        this,
        p.SET,
        i.EPACKAGE__EFACTORY_INSTANCE,
        s,
        e
      );
      r != null ? r.add(a) : r = a;
    }
    return r;
  }
  // get the value of eSubPackages
  get eSubPackages() {
    return this._eSubPackages == null && (this._eSubPackages = this.initESubPackages()), this._eSubPackages;
  }
  // get the value of eSuperPackage
  get eSuperPackage() {
    return this.eContainerFeatureID() == i.EPACKAGE__ESUPER_PACKAGE ? this.eContainer() : null;
  }
  // get the value of nsPrefix
  get nsPrefix() {
    return this._nsPrefix;
  }
  // set the value of nsPrefix
  set nsPrefix(e) {
    let t = this._nsPrefix;
    this._nsPrefix = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EPACKAGE__NS_PREFIX, t, e)
    );
  }
  // get the value of nsURI
  get nsURI() {
    return this._nsURI;
  }
  // set the value of nsURI
  set nsURI(e) {
    let t = this._nsURI;
    this._nsURI = e, this.eNotificationRequired && this.eNotify(new R(this, p.SET, i.EPACKAGE__NS_URI, t, e));
  }
  // getEClassifier default implementation
  getEClassifier(e) {
    throw new Error("getEClassifier not implemented");
  }
  initEClassifiers() {
    return new b(
      this,
      i.EPACKAGE__ECLASSIFIERS,
      i.ECLASSIFIER__EPACKAGE,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  initESubPackages() {
    return new b(
      this,
      i.EPACKAGE__ESUB_PACKAGES,
      i.EPACKAGE__ESUPER_PACKAGE,
      !0,
      !0,
      !0,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EPACKAGE__ECLASSIFIERS:
        return this.eClassifiers;
      case i.EPACKAGE__EFACTORY_INSTANCE:
        return this.eFactoryInstance;
      case i.EPACKAGE__ESUB_PACKAGES:
        return this.eSubPackages;
      case i.EPACKAGE__ESUPER_PACKAGE:
        return this.eSuperPackage;
      case i.EPACKAGE__NS_PREFIX:
        return this.nsPrefix;
      case i.EPACKAGE__NS_URI:
        return this.nsURI;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EPACKAGE__ECLASSIFIERS: {
        this.eClassifiers.clear(), this.eClassifiers.addAll(t);
        break;
      }
      case i.EPACKAGE__EFACTORY_INSTANCE: {
        this.eFactoryInstance = t;
        break;
      }
      case i.EPACKAGE__ESUB_PACKAGES: {
        this.eSubPackages.clear(), this.eSubPackages.addAll(t);
        break;
      }
      case i.EPACKAGE__NS_PREFIX: {
        this.nsPrefix = t;
        break;
      }
      case i.EPACKAGE__NS_URI: {
        this.nsURI = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EPACKAGE__ECLASSIFIERS: {
        this.eClassifiers.clear();
        break;
      }
      case i.EPACKAGE__EFACTORY_INSTANCE: {
        this.eFactoryInstance = null;
        break;
      }
      case i.EPACKAGE__ESUB_PACKAGES: {
        this.eSubPackages.clear();
        break;
      }
      case i.EPACKAGE__NS_PREFIX: {
        this.nsPrefix = "";
        break;
      }
      case i.EPACKAGE__NS_URI: {
        this.nsURI = "";
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EPACKAGE__ECLASSIFIERS:
        return this.eClassifiers != null && this.eClassifiers.size() != 0;
      case i.EPACKAGE__EFACTORY_INSTANCE:
        return this._eFactoryInstance != null;
      case i.EPACKAGE__ESUB_PACKAGES:
        return this.eSubPackages != null && this.eSubPackages.size() != 0;
      case i.EPACKAGE__ESUPER_PACKAGE:
        return this.eSuperPackage != null;
      case i.EPACKAGE__NS_PREFIX:
        return this._nsPrefix != "";
      case i.EPACKAGE__NS_URI:
        return this._nsURI != "";
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EPACKAGE__GET_ECLASSIFIER_ESTRING:
        return this.getEClassifier(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EPACKAGE__ECLASSIFIERS: {
        let r = this.eClassifiers, a = e;
        return r.addWithNotification(a, s);
      }
      case i.EPACKAGE__EFACTORY_INSTANCE: {
        let r = s;
        return B(this.eFactoryInstance) && (r = this.eFactoryInstance.eInverseRemove(
          this,
          k - i.EPACKAGE__EFACTORY_INSTANCE,
          r
        )), this.basicSetEFactoryInstance(e, r);
      }
      case i.EPACKAGE__ESUB_PACKAGES: {
        let r = this.eSubPackages, a = e;
        return r.addWithNotification(a, s);
      }
      case i.EPACKAGE__ESUPER_PACKAGE: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.EPACKAGE__ESUPER_PACKAGE, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EPACKAGE__ECLASSIFIERS: {
        let r = this.eClassifiers, a = e;
        return r.removeWithNotification(a, s);
      }
      case i.EPACKAGE__EFACTORY_INSTANCE:
        return this.basicSetEFactoryInstance(null, s);
      case i.EPACKAGE__ESUB_PACKAGES: {
        let r = this.eSubPackages, a = e;
        return r.removeWithNotification(a, s);
      }
      case i.EPACKAGE__ESUPER_PACKAGE:
        return this.eBasicSetContainer(null, i.EPACKAGE__ESUPER_PACKAGE, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
function qe(n) {
  return n == null ? void 0 : "nsURI" in n;
}
class Tr extends Gt {
  constructor(e) {
    super(), this._pack = e;
  }
  notifyChanged(e) {
    e.eventType != p.REMOVING_ADAPTER && e.featureID == i.EPACKAGE__ECLASSIFIERS && (this._pack._nameToClassifier = null);
  }
}
class Ct extends fr {
  constructor() {
    super(), this._nameToClassifier = null, this._adapter = null, this.eFactoryInstance = new Je(), this._adapter = new Tr(this), this.eAdapters.add(this._adapter);
  }
  getEClassifier(e) {
    if (!this._nameToClassifier) {
      this._nameToClassifier = /* @__PURE__ */ new Map();
      for (const t of this.eClassifiers)
        this._nameToClassifier.set(t.name, t);
    }
    return this._nameToClassifier.get(e);
  }
  createResource() {
    let e = this.eResource();
    if (!e) {
      let t = new M(this.nsURI);
      e = new et(), e.eURI = t, e.eContents().add(this);
    }
    return e;
  }
  initEClass(e, t, s, r, a) {
    e.name = t, e.isAbstract = r, e.isInterface = a, e.instanceTypeName = s;
  }
  initEStructuralFeature(e, t, s, r, a, o, u, _, h, d, S, O, F) {
    e.name = s, e.eType = t, e.defaultValueLiteral = r, e.lowerBound = a, e.upperBound = o, e.isTransient = u, e.isVolatile = _, e.isChangeable = h, e.isUnsettable = d, e.isUnique = S, e.isDerived = O, e.isOrdered = F;
  }
  initEAttribute(e, t, s, r, a, o, u, _, h, d, S, O, F, q) {
    this.initEStructuralFeature(
      e,
      t,
      s,
      r,
      a,
      o,
      u,
      _,
      h,
      d,
      S,
      O,
      F
    ), e.isID = q;
  }
  initEReference(e, t, s, r, a, o, u, _, h, d, S, O, F, q, he, ne) {
    this.initEStructuralFeature(
      e,
      t,
      r,
      a,
      o,
      u,
      _,
      h,
      d,
      F,
      q,
      he,
      ne
    ), e.isContainment = S, e.isResolveProxies = O, e.eOpposite = s;
  }
  initEOperation(e, t, s, r, a, o, u) {
    e.name = s, e.eType = t, e.lowerBound = r, e.upperBound = a, e.isUnique = o, e.isOrdered = u;
  }
  addEParameter(e, t, s, r, a, o, u) {
    let _ = Xe().createEParameterFromContainer(e);
    _.name = s, _.eType = t, _.lowerBound = r, _.upperBound = a, _.isUnique = o, _.isOrdered = u;
  }
  initEClassifier(e, t, s) {
    e.name = t, e.instanceTypeName = s;
  }
  initEDataType(e, t, s, r, a) {
    if (this.initEClassifier(e, t, s), e.isSerializable = a, r.length > 0) {
      let o = e;
      o.defaultValue = this.eFactoryInstance.createFromString(e, r);
    }
  }
  initEEnum(e, t, s) {
    this.initEClassifier(e, t, s);
  }
  addEEnumLiteral(e, t, s, r) {
    let a = Xe().createEEnumLiteralFromContainer(e);
    a.name = t, a.literal = s, a.value = r;
  }
}
class ss extends kt {
  constructor() {
    super();
  }
  eStaticClass() {
    return L().getEParameter();
  }
  // get the value of eOperation
  get eOperation() {
    return this.eContainerFeatureID() == i.EPARAMETER__EOPERATION ? this.eContainer() : null;
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EPARAMETER__EOPERATION:
        return this.eOperation;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EPARAMETER__EOPERATION:
        return this.eOperation != null;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eBasicInverseAdd(e, t, s) {
    switch (t) {
      case i.EPARAMETER__EOPERATION: {
        let r = s;
        return this.eContainer() != null && (r = this.eBasicRemoveFromContainer(r)), this.eBasicSetContainer(e, i.EPARAMETER__EOPERATION, r);
      }
      default:
        return super.eBasicInverseAdd(e, t, s);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EPARAMETER__EOPERATION:
        return this.eBasicSetContainer(null, i.EPARAMETER__EOPERATION, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class dr extends Os {
  constructor() {
    super(), this._eKeys = null, this._eOpposite = null, this._isContainment = !1, this._isResolveProxies = !0;
  }
  eStaticClass() {
    return L().getEReference();
  }
  // get the value of eKeys
  get eKeys() {
    return this._eKeys == null && (this._eKeys = this.initEKeys()), this._eKeys;
  }
  // get the value of eOpposite
  get eOpposite() {
    if (this._eOpposite != null && this._eOpposite.eIsProxy()) {
      let e = this._eOpposite, t = this.eResolveProxy(e);
      this._eOpposite = t, t != e && this.eNotificationRequired && this.eNotify(
        new R(
          this,
          p.RESOLVE,
          i.EREFERENCE__EOPPOSITE,
          e,
          t
        )
      );
    }
    return this._eOpposite;
  }
  // set the value of eOpposite
  set eOpposite(e) {
    let t = this._eOpposite;
    this._eOpposite = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.EREFERENCE__EOPPOSITE, t, e)
    );
  }
  // get the basic value of eOpposite with no proxy resolution
  basicGetEOpposite() {
    return this._eOpposite;
  }
  // get the value of eReferenceType
  get eReferenceType() {
    throw new Error("get eReferenceType not implemented");
  }
  // get the basic value of eReferenceType with no proxy resolution
  basicGetEReferenceType() {
    throw new Error("basicGetEReferenceType not implemented");
  }
  // get the value of isContainer
  get isContainer() {
    throw new Error("get isContainer not implemented");
  }
  // get the value of isContainment
  get isContainment() {
    return this._isContainment;
  }
  // set the value of isContainment
  set isContainment(e) {
    let t = this._isContainment;
    this._isContainment = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EREFERENCE__CONTAINMENT,
        t,
        e
      )
    );
  }
  // get the value of isResolveProxies
  get isResolveProxies() {
    return this._isResolveProxies;
  }
  // set the value of isResolveProxies
  set isResolveProxies(e) {
    let t = this._isResolveProxies;
    this._isResolveProxies = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EREFERENCE__RESOLVE_PROXIES,
        t,
        e
      )
    );
  }
  initEKeys() {
    return new b(
      this,
      i.EREFERENCE__EKEYS,
      -1,
      !1,
      !1,
      !1,
      !0,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EREFERENCE__CONTAINER:
        return this.isContainer;
      case i.EREFERENCE__CONTAINMENT:
        return this.isContainment;
      case i.EREFERENCE__EKEYS:
        return !t && W(this.eKeys) ? this.eKeys.getUnResolvedList() : this.eKeys;
      case i.EREFERENCE__EOPPOSITE:
        return t ? this.eOpposite : this.basicGetEOpposite();
      case i.EREFERENCE__EREFERENCE_TYPE:
        return t ? this.eReferenceType : this.basicGetEReferenceType();
      case i.EREFERENCE__RESOLVE_PROXIES:
        return this.isResolveProxies;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EREFERENCE__CONTAINMENT: {
        this.isContainment = t;
        break;
      }
      case i.EREFERENCE__EKEYS: {
        this.eKeys.clear(), this.eKeys.addAll(t);
        break;
      }
      case i.EREFERENCE__EOPPOSITE: {
        this.eOpposite = t;
        break;
      }
      case i.EREFERENCE__RESOLVE_PROXIES: {
        this.isResolveProxies = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EREFERENCE__CONTAINMENT: {
        this.isContainment = !1;
        break;
      }
      case i.EREFERENCE__EKEYS: {
        this.eKeys.clear();
        break;
      }
      case i.EREFERENCE__EOPPOSITE: {
        this.eOpposite = null;
        break;
      }
      case i.EREFERENCE__RESOLVE_PROXIES: {
        this.isResolveProxies = !0;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EREFERENCE__CONTAINER:
        return this.isContainer != !1;
      case i.EREFERENCE__CONTAINMENT:
        return this._isContainment != !1;
      case i.EREFERENCE__EKEYS:
        return this.eKeys != null && this.eKeys.size() != 0;
      case i.EREFERENCE__EOPPOSITE:
        return this._eOpposite != null;
      case i.EREFERENCE__EREFERENCE_TYPE:
        return this.eReferenceType != null;
      case i.EREFERENCE__RESOLVE_PROXIES:
        return this._isResolveProxies != !0;
      default:
        return super.eIsSetFromID(e);
    }
  }
}
function H(n) {
  return "eReferenceType" in n;
}
function Se(n) {
  return H(n) && n.eOpposite && n.eOpposite.isContainment;
}
function pe(n) {
  return H(n) && n.eOpposite != null;
}
function we(n) {
  return H(n) && n.isContainment;
}
function Ar(n) {
  return H(n) ? n.isResolveProxies : !1;
}
class ht extends dr {
  constructor() {
    super();
  }
  get isContainer() {
    return this.eOpposite && this.eOpposite.isContainment;
  }
  // get the value of eReferenceType
  get eReferenceType() {
    if (!this._referenceType || this._referenceType.eIsProxy()) {
      let e = this.eType;
      Ee(e) && (this._referenceType = e);
    }
    return this._referenceType;
  }
  // get the basic value of eReferenceType with no proxy resolution
  basicGetEReferenceType() {
    if (!this._referenceType) {
      let e = this.basicGetEType();
      Ee(e) && (this._referenceType = e);
    }
    return this._referenceType;
  }
}
class Cr extends Le {
  constructor() {
    super(), this._key = "", this._value = "";
  }
  eStaticClass() {
    return L().getEStringToStringMapEntry();
  }
  // get the value of key
  get key() {
    return this._key;
  }
  // set the value of key
  set key(e) {
    let t = this._key;
    this._key = e, this.eNotificationRequired && this.eNotify(
      new R(this, p.SET, i.ESTRING_TO_STRING_MAP_ENTRY__KEY, t, e)
    );
  }
  // get the value of value
  get value() {
    return this._value;
  }
  // set the value of value
  set value(e) {
    let t = this._value;
    this._value = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.ESTRING_TO_STRING_MAP_ENTRY__VALUE,
        t,
        e
      )
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ESTRING_TO_STRING_MAP_ENTRY__KEY:
        return this.key;
      case i.ESTRING_TO_STRING_MAP_ENTRY__VALUE:
        return this.value;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ESTRING_TO_STRING_MAP_ENTRY__KEY: {
        this.key = t;
        break;
      }
      case i.ESTRING_TO_STRING_MAP_ENTRY__VALUE: {
        this.value = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ESTRING_TO_STRING_MAP_ENTRY__KEY: {
        this.key = "";
        break;
      }
      case i.ESTRING_TO_STRING_MAP_ENTRY__VALUE: {
        this.value = "";
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ESTRING_TO_STRING_MAP_ENTRY__KEY:
        return this._key != "";
      case i.ESTRING_TO_STRING_MAP_ENTRY__VALUE:
        return this._value != "";
      default:
        return super.eIsSetFromID(e);
    }
  }
}
class Sr extends Le {
  constructor() {
    super(), this._eClassifier = null, this._eLowerBound = null, this._eRawType = null, this._eTypeArguments = null, this._eTypeParameter = null, this._eUpperBound = null;
  }
  eStaticClass() {
    return L().getEGenericType();
  }
  // get the value of eClassifier
  get eClassifier() {
    if (this._eClassifier != null && this._eClassifier.eIsProxy()) {
      let e = this._eClassifier, t = this.eResolveProxy(e);
      this._eClassifier = t, t != e && this.eNotificationRequired && this.eNotify(
        new R(
          this,
          p.RESOLVE,
          i.EGENERIC_TYPE__ECLASSIFIER,
          e,
          t
        )
      );
    }
    return this._eClassifier;
  }
  // set the value of eClassifier
  set eClassifier(e) {
    let t = this._eClassifier;
    this._eClassifier = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EGENERIC_TYPE__ECLASSIFIER,
        t,
        e
      )
    );
  }
  // get the basic value of eClassifier with no proxy resolution
  basicGetEClassifier() {
    return this._eClassifier;
  }
  // get the value of eLowerBound
  get eLowerBound() {
    return this._eLowerBound;
  }
  // set the value of eLowerBound
  set eLowerBound(e) {
    let t = this._eLowerBound;
    if (e != t) {
      let s = null;
      B(t) && (s = t.eInverseRemove(
        this,
        k - i.EGENERIC_TYPE__ELOWER_BOUND,
        s
      )), B(e) && (s = e.eInverseAdd(
        this,
        k - i.EGENERIC_TYPE__ELOWER_BOUND,
        s
      )), s = this.basicSetELowerBound(e, s), s?.dispatch();
    }
  }
  basicSetELowerBound(e, t) {
    let s = this._eLowerBound;
    this._eLowerBound = e;
    let r = t;
    if (this.eNotificationRequired) {
      let a = new R(
        this,
        p.SET,
        i.EGENERIC_TYPE__ELOWER_BOUND,
        s,
        e
      );
      r != null ? r.add(a) : r = a;
    }
    return r;
  }
  // get the value of eRawType
  get eRawType() {
    if (this._eRawType != null && this._eRawType.eIsProxy()) {
      let e = this._eRawType, t = this.eResolveProxy(e);
      this._eRawType = t, t != e && this.eNotificationRequired && this.eNotify(
        new R(
          this,
          p.RESOLVE,
          i.EGENERIC_TYPE__ERAW_TYPE,
          e,
          t
        )
      );
    }
    return this._eRawType;
  }
  /** @internal */
  set eRawType(e) {
    this._eRawType = e;
  }
  // get the basic value of eRawType with no proxy resolution
  basicGetERawType() {
    return this._eRawType;
  }
  // get the value of eTypeArguments
  get eTypeArguments() {
    return this._eTypeArguments == null && (this._eTypeArguments = this.initETypeArguments()), this._eTypeArguments;
  }
  // get the value of eTypeParameter
  get eTypeParameter() {
    return this._eTypeParameter;
  }
  // set the value of eTypeParameter
  set eTypeParameter(e) {
    let t = this._eTypeParameter;
    this._eTypeParameter = e, this.eNotificationRequired && this.eNotify(
      new R(
        this,
        p.SET,
        i.EGENERIC_TYPE__ETYPE_PARAMETER,
        t,
        e
      )
    );
  }
  // get the value of eUpperBound
  get eUpperBound() {
    return this._eUpperBound;
  }
  // set the value of eUpperBound
  set eUpperBound(e) {
    let t = this._eUpperBound;
    if (e != t) {
      let s = null;
      B(t) && (s = t.eInverseRemove(
        this,
        k - i.EGENERIC_TYPE__EUPPER_BOUND,
        s
      )), B(e) && (s = e.eInverseAdd(
        this,
        k - i.EGENERIC_TYPE__EUPPER_BOUND,
        s
      )), s = this.basicSetEUpperBound(e, s), s?.dispatch();
    }
  }
  basicSetEUpperBound(e, t) {
    let s = this._eUpperBound;
    this._eUpperBound = e;
    let r = t;
    if (this.eNotificationRequired) {
      let a = new R(
        this,
        p.SET,
        i.EGENERIC_TYPE__EUPPER_BOUND,
        s,
        e
      );
      r != null ? r.add(a) : r = a;
    }
    return r;
  }
  // isInstance default implementation
  isInstance(e) {
    throw new Error("isInstance not implemented");
  }
  initETypeArguments() {
    return new b(
      this,
      i.EGENERIC_TYPE__ETYPE_ARGUMENTS,
      -1,
      !0,
      !0,
      !1,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.EGENERIC_TYPE__ECLASSIFIER:
        return t ? this.eClassifier : this.basicGetEClassifier();
      case i.EGENERIC_TYPE__ELOWER_BOUND:
        return this.eLowerBound;
      case i.EGENERIC_TYPE__ERAW_TYPE:
        return t ? this.eRawType : this.basicGetERawType();
      case i.EGENERIC_TYPE__ETYPE_ARGUMENTS:
        return this.eTypeArguments;
      case i.EGENERIC_TYPE__ETYPE_PARAMETER:
        return this.eTypeParameter;
      case i.EGENERIC_TYPE__EUPPER_BOUND:
        return this.eUpperBound;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.EGENERIC_TYPE__ECLASSIFIER: {
        this.eClassifier = t;
        break;
      }
      case i.EGENERIC_TYPE__ELOWER_BOUND: {
        this.eLowerBound = t;
        break;
      }
      case i.EGENERIC_TYPE__ETYPE_ARGUMENTS: {
        this.eTypeArguments.clear(), this.eTypeArguments.addAll(t);
        break;
      }
      case i.EGENERIC_TYPE__ETYPE_PARAMETER: {
        this.eTypeParameter = t;
        break;
      }
      case i.EGENERIC_TYPE__EUPPER_BOUND: {
        this.eUpperBound = t;
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.EGENERIC_TYPE__ECLASSIFIER: {
        this.eClassifier = null;
        break;
      }
      case i.EGENERIC_TYPE__ELOWER_BOUND: {
        this.eLowerBound = null;
        break;
      }
      case i.EGENERIC_TYPE__ETYPE_ARGUMENTS: {
        this.eTypeArguments.clear();
        break;
      }
      case i.EGENERIC_TYPE__ETYPE_PARAMETER: {
        this.eTypeParameter = null;
        break;
      }
      case i.EGENERIC_TYPE__EUPPER_BOUND: {
        this.eUpperBound = null;
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.EGENERIC_TYPE__ECLASSIFIER:
        return this._eClassifier != null;
      case i.EGENERIC_TYPE__ELOWER_BOUND:
        return this._eLowerBound != null;
      case i.EGENERIC_TYPE__ERAW_TYPE:
        return this._eRawType != null;
      case i.EGENERIC_TYPE__ETYPE_ARGUMENTS:
        return this.eTypeArguments != null && this.eTypeArguments.size() != 0;
      case i.EGENERIC_TYPE__ETYPE_PARAMETER:
        return this._eTypeParameter != null;
      case i.EGENERIC_TYPE__EUPPER_BOUND:
        return this._eUpperBound != null;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eInvokeFromID(e, t) {
    switch (e) {
      case i.EGENERIC_TYPE__IS_INSTANCE_EJAVAOBJECT:
        return this.isInstance(t.get(0));
      default:
        return super.eInvokeFromID(e, t);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.EGENERIC_TYPE__ELOWER_BOUND:
        return this.basicSetELowerBound(null, s);
      case i.EGENERIC_TYPE__ETYPE_ARGUMENTS: {
        let r = this.eTypeArguments, a = e;
        return r.removeWithNotification(a, s);
      }
      case i.EGENERIC_TYPE__EUPPER_BOUND:
        return this.basicSetEUpperBound(null, s);
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class pr extends Ue {
  constructor() {
    super(), this._eBounds = null;
  }
  eStaticClass() {
    return L().getETypeParameter();
  }
  // get the value of eBounds
  get eBounds() {
    return this._eBounds == null && (this._eBounds = this.initEBounds()), this._eBounds;
  }
  initEBounds() {
    return new b(
      this,
      i.ETYPE_PARAMETER__EBOUNDS,
      -1,
      !0,
      !0,
      !1,
      !1,
      !1
    );
  }
  eGetFromID(e, t) {
    switch (e) {
      case i.ETYPE_PARAMETER__EBOUNDS:
        return this.eBounds;
      default:
        return super.eGetFromID(e, t);
    }
  }
  eSetFromID(e, t) {
    switch (e) {
      case i.ETYPE_PARAMETER__EBOUNDS: {
        this.eBounds.clear(), this.eBounds.addAll(t);
        break;
      }
      default:
        super.eSetFromID(e, t);
    }
  }
  eUnsetFromID(e) {
    switch (e) {
      case i.ETYPE_PARAMETER__EBOUNDS: {
        this.eBounds.clear();
        break;
      }
      default:
        super.eUnsetFromID(e);
    }
  }
  eIsSetFromID(e) {
    switch (e) {
      case i.ETYPE_PARAMETER__EBOUNDS:
        return this.eBounds != null && this.eBounds.size() != 0;
      default:
        return super.eIsSetFromID(e);
    }
  }
  eBasicInverseRemove(e, t, s) {
    switch (t) {
      case i.ETYPE_PARAMETER__EBOUNDS: {
        let r = this.eBounds, a = e;
        return r.removeWithNotification(a, s);
      }
      default:
        return super.eBasicInverseRemove(e, t, s);
    }
  }
}
class Yt extends Ct {
  static {
    this._instance = null;
  }
  static getInstance() {
    return this._instance || (this._instance = new Yt()), this._instance;
  }
  constructor() {
    super(), this.name = i.eNAME, this.nsPrefix = i.eNS_PREFIX, this.nsURI = i.eNS_URI, this.eFactoryInstance = Xe(), this.createPackageContents(), this.initializePackageContents(), this.createResource();
  }
  getEAnnotationClass() {
    return this._eAnnotationClass;
  }
  getEAnnotation_Source() {
    return this._eAnnotationClass.eStructuralFeatures.get(0);
  }
  getEAnnotation_Contents() {
    return this._eAnnotationClass.eStructuralFeatures.get(3);
  }
  getEAnnotation_Details() {
    return this._eAnnotationClass.eStructuralFeatures.get(1);
  }
  getEAnnotation_EModelElement() {
    return this._eAnnotationClass.eStructuralFeatures.get(2);
  }
  getEAnnotation_References() {
    return this._eAnnotationClass.eStructuralFeatures.get(4);
  }
  getEAttribute() {
    return this._eAttributeClass;
  }
  getEAttribute_ID() {
    return this._eAttributeClass.eStructuralFeatures.get(0);
  }
  getEAttribute_EAttributeType() {
    return this._eAttributeClass.eStructuralFeatures.get(1);
  }
  getEClass() {
    return this._eClassClass;
  }
  getEClass_Abstract() {
    return this._eClassClass.eStructuralFeatures.get(0);
  }
  getEClass_Interface() {
    return this._eClassClass.eStructuralFeatures.get(1);
  }
  getEClass_EAllAttributes() {
    return this._eClassClass.eStructuralFeatures.get(9);
  }
  getEClass_EAllContainments() {
    return this._eClassClass.eStructuralFeatures.get(11);
  }
  getEClass_EAllCrossReferences() {
    return this._eClassClass.eStructuralFeatures.get(12);
  }
  getEClass_EAllOperations() {
    return this._eClassClass.eStructuralFeatures.get(13);
  }
  getEClass_EAllReferences() {
    return this._eClassClass.eStructuralFeatures.get(10);
  }
  getEClass_EAllStructuralFeatures() {
    return this._eClassClass.eStructuralFeatures.get(14);
  }
  getEClass_EAllSuperTypes() {
    return this._eClassClass.eStructuralFeatures.get(15);
  }
  getEClass_EAttributes() {
    return this._eClassClass.eStructuralFeatures.get(3);
  }
  getEClass_EContainmentFeatures() {
    return this._eClassClass.eStructuralFeatures.get(7);
  }
  getEClass_ECrossReferenceFeatures() {
    return this._eClassClass.eStructuralFeatures.get(8);
  }
  getEClass_EIDAttribute() {
    return this._eClassClass.eStructuralFeatures.get(16);
  }
  getEClass_EOperations() {
    return this._eClassClass.eStructuralFeatures.get(6);
  }
  getEClass_EReferences() {
    return this._eClassClass.eStructuralFeatures.get(4);
  }
  getEClass_EStructuralFeatures() {
    return this._eClassClass.eStructuralFeatures.get(2);
  }
  getEClass_ESuperTypes() {
    return this._eClassClass.eStructuralFeatures.get(5);
  }
  getEClass_GetEOperation_EInt() {
    return this._eClassClass.eOperations.get(6);
  }
  getEClass_GetEStructuralFeature_EInt() {
    return this._eClassClass.eOperations.get(2);
  }
  getEClass_GetEStructuralFeature_EString() {
    return this._eClassClass.eOperations.get(3);
  }
  getEClass_GetFeatureCount() {
    return this._eClassClass.eOperations.get(1);
  }
  getEClass_GetFeatureID_EStructuralFeature() {
    return this._eClassClass.eOperations.get(4);
  }
  getEClass_GetFeatureType_EStructuralFeature() {
    return this._eClassClass.eOperations.get(9);
  }
  getEClass_GetOperationCount() {
    return this._eClassClass.eOperations.get(5);
  }
  getEClass_GetOperationID_EOperation() {
    return this._eClassClass.eOperations.get(7);
  }
  getEClass_GetOverride_EOperation() {
    return this._eClassClass.eOperations.get(8);
  }
  getEClass_IsSuperTypeOf_EClass() {
    return this._eClassClass.eOperations.get(0);
  }
  getEClassifierClass() {
    return this._eClassifierClass;
  }
  getEClassifier_ClassifierID() {
    return this._eClassifierClass.eStructuralFeatures.get(5);
  }
  getEClassifier_DefaultValue() {
    return this._eClassifierClass.eStructuralFeatures.get(3);
  }
  getEClassifier_InstanceClass() {
    return this._eClassifierClass.eStructuralFeatures.get(1);
  }
  getEClassifier_InstanceClassName() {
    return this._eClassifierClass.eStructuralFeatures.get(0);
  }
  getEClassifier_InstanceTypeName() {
    return this._eClassifierClass.eStructuralFeatures.get(2);
  }
  getEClassifier_EPackage() {
    return this._eClassifierClass.eStructuralFeatures.get(4);
  }
  getEClassifier_IsInstance_EJavaObject() {
    return this._eClassifierClass.eOperations.get(0);
  }
  getEDataType() {
    return this._eDataTypeClass;
  }
  getEDataType_Serializable() {
    return this._eDataTypeClass.eStructuralFeatures.get(0);
  }
  getEEnum() {
    return this._eEnumClass;
  }
  getEEnum_ELiterals() {
    return this._eEnumClass.eStructuralFeatures.get(0);
  }
  getEEnum_GetEEnumLiteral_EString() {
    return this._eEnumClass.eOperations.get(0);
  }
  getEEnum_GetEEnumLiteral_EInt() {
    return this._eEnumClass.eOperations.get(1);
  }
  getEEnum_GetEEnumLiteralByLiteral_EString() {
    return this._eEnumClass.eOperations.get(2);
  }
  getEEnumLiteral() {
    return this._eEnumLiteralClass;
  }
  getEEnumLiteral_Instance() {
    return this._eEnumLiteralClass.eStructuralFeatures.get(1);
  }
  getEEnumLiteral_Literal() {
    return this._eEnumLiteralClass.eStructuralFeatures.get(2);
  }
  getEEnumLiteral_Value() {
    return this._eEnumLiteralClass.eStructuralFeatures.get(0);
  }
  getEEnumLiteral_EEnum() {
    return this._eEnumLiteralClass.eStructuralFeatures.get(3);
  }
  getEFactory() {
    return this._eFactoryClass;
  }
  getEFactory_EPackage() {
    return this._eFactoryClass.eStructuralFeatures.get(0);
  }
  getEFactory_ConvertToString_EDataType_EJavaObject() {
    return this._eFactoryClass.eOperations.get(2);
  }
  getEFactory_Create_EClass() {
    return this._eFactoryClass.eOperations.get(0);
  }
  getEFactory_CreateFromString_EDataType_EString() {
    return this._eFactoryClass.eOperations.get(1);
  }
  getEGenericType() {
    return this._eGenericTypeClass;
  }
  getEGenericType_EClassifier() {
    return this._eGenericTypeClass.eStructuralFeatures.get(5);
  }
  getEGenericType_ELowerBound() {
    return this._eGenericTypeClass.eStructuralFeatures.get(3);
  }
  getEGenericType_ERawType() {
    return this._eGenericTypeClass.eStructuralFeatures.get(2);
  }
  getEGenericType_ETypeArguments() {
    return this._eGenericTypeClass.eStructuralFeatures.get(1);
  }
  getEGenericType_ETypeParameter() {
    return this._eGenericTypeClass.eStructuralFeatures.get(4);
  }
  getEGenericType_EUpperBound() {
    return this._eGenericTypeClass.eStructuralFeatures.get(0);
  }
  getEGenericType_IsInstance_EJavaObject() {
    return this._eGenericTypeClass.eOperations.get(0);
  }
  getEModelElement() {
    return this._eModelElementClass;
  }
  getEModelElement_EAnnotations() {
    return this._eModelElementClass.eStructuralFeatures.get(0);
  }
  getEModelElement_GetEAnnotation_EString() {
    return this._eModelElementClass.eOperations.get(0);
  }
  getENamedElement() {
    return this._eNamedElementClass;
  }
  getENamedElement_Name() {
    return this._eNamedElementClass.eStructuralFeatures.get(0);
  }
  getEObject() {
    return this._eObjectClass;
  }
  getEObject_EAllContents() {
    return this._eObjectClass.eOperations.get(7);
  }
  getEObject_EClass() {
    return this._eObjectClass.eOperations.get(0);
  }
  getEObject_EContainer() {
    return this._eObjectClass.eOperations.get(3);
  }
  getEObject_EContainingFeature() {
    return this._eObjectClass.eOperations.get(4);
  }
  getEObject_EContainmentFeature() {
    return this._eObjectClass.eOperations.get(5);
  }
  getEObject_EContents() {
    return this._eObjectClass.eOperations.get(6);
  }
  getEObject_ECrossReferences() {
    return this._eObjectClass.eOperations.get(8);
  }
  getEObject_EGet_EStructuralFeature() {
    return this._eObjectClass.eOperations.get(9);
  }
  getEObject_EGet_EStructuralFeature_EBoolean() {
    return this._eObjectClass.eOperations.get(10);
  }
  getEObject_EInvoke_EOperation_EEList() {
    return this._eObjectClass.eOperations.get(14);
  }
  getEObject_EIsProxy() {
    return this._eObjectClass.eOperations.get(1);
  }
  getEObject_EIsSet_EStructuralFeature() {
    return this._eObjectClass.eOperations.get(12);
  }
  getEObject_EResource() {
    return this._eObjectClass.eOperations.get(2);
  }
  getEObject_ESet_EStructuralFeature_EJavaObject() {
    return this._eObjectClass.eOperations.get(11);
  }
  getEObject_EUnset_EStructuralFeature() {
    return this._eObjectClass.eOperations.get(13);
  }
  getEOperation() {
    return this._eOperationClass;
  }
  getEOperation_OperationID() {
    return this._eOperationClass.eStructuralFeatures.get(3);
  }
  getEOperation_EContainingClass() {
    return this._eOperationClass.eStructuralFeatures.get(0);
  }
  getEOperation_EExceptions() {
    return this._eOperationClass.eStructuralFeatures.get(2);
  }
  getEOperation_EParameters() {
    return this._eOperationClass.eStructuralFeatures.get(1);
  }
  getEOperation_IsOverrideOf_EOperation() {
    return this._eOperationClass.eOperations.get(0);
  }
  getEPackage() {
    return this._ePackageClass;
  }
  getEPackage_NsPrefix() {
    return this._ePackageClass.eStructuralFeatures.get(1);
  }
  getEPackage_NsURI() {
    return this._ePackageClass.eStructuralFeatures.get(0);
  }
  getEPackage_EClassifiers() {
    return this._ePackageClass.eStructuralFeatures.get(3);
  }
  getEPackage_EFactoryInstance() {
    return this._ePackageClass.eStructuralFeatures.get(2);
  }
  getEPackage_ESubPackages() {
    return this._ePackageClass.eStructuralFeatures.get(4);
  }
  getEPackage_ESuperPackage() {
    return this._ePackageClass.eStructuralFeatures.get(5);
  }
  getEPackage_GetEClassifier_EString() {
    return this._ePackageClass.eOperations.get(0);
  }
  getEParameter() {
    return this._eParameterClass;
  }
  getEParameter_EOperation() {
    return this._eParameterClass.eStructuralFeatures.get(0);
  }
  getEReference() {
    return this._eReferenceClass;
  }
  getEReference_Container() {
    return this._eReferenceClass.eStructuralFeatures.get(1);
  }
  getEReference_Containment() {
    return this._eReferenceClass.eStructuralFeatures.get(0);
  }
  getEReference_ResolveProxies() {
    return this._eReferenceClass.eStructuralFeatures.get(2);
  }
  getEReference_EKeys() {
    return this._eReferenceClass.eStructuralFeatures.get(5);
  }
  getEReference_EOpposite() {
    return this._eReferenceClass.eStructuralFeatures.get(3);
  }
  getEReference_EReferenceType() {
    return this._eReferenceClass.eStructuralFeatures.get(4);
  }
  getEStringToStringMapEntry() {
    return this._eStringToStringMapEntryClass;
  }
  getEStringToStringMapEntry_Key() {
    return this._eStringToStringMapEntryClass.eStructuralFeatures.get(0);
  }
  getEStringToStringMapEntry_Value() {
    return this._eStringToStringMapEntryClass.eStructuralFeatures.get(1);
  }
  getEStructuralFeature() {
    return this._eStructuralFeatureClass;
  }
  getEStructuralFeature_Changeable() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(0);
  }
  getEStructuralFeature_DefaultValue() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(4);
  }
  getEStructuralFeature_DefaultValueLiteral() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(3);
  }
  getEStructuralFeature_Derived() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(6);
  }
  getEStructuralFeature_FeatureID() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(8);
  }
  getEStructuralFeature_Transient() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(2);
  }
  getEStructuralFeature_Unsettable() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(5);
  }
  getEStructuralFeature_Volatile() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(1);
  }
  getEStructuralFeature_EContainingClass() {
    return this._eStructuralFeatureClass.eStructuralFeatures.get(7);
  }
  getEStructuralFeature_GetContainerClass() {
    return this._eStructuralFeatureClass.eOperations.get(0);
  }
  getETypeParameter() {
    return this._eTypeParameterClass;
  }
  getETypeParameter_EBounds() {
    return this._eTypeParameterClass.eStructuralFeatures.get(0);
  }
  getETypedElement() {
    return this._eTypedElementClass;
  }
  getETypedElement_LowerBound() {
    return this._eTypedElementClass.eStructuralFeatures.get(2);
  }
  getETypedElement_Many() {
    return this._eTypedElementClass.eStructuralFeatures.get(4);
  }
  getETypedElement_Ordered() {
    return this._eTypedElementClass.eStructuralFeatures.get(0);
  }
  getETypedElement_Required() {
    return this._eTypedElementClass.eStructuralFeatures.get(5);
  }
  getETypedElement_Unique() {
    return this._eTypedElementClass.eStructuralFeatures.get(1);
  }
  getETypedElement_UpperBound() {
    return this._eTypedElementClass.eStructuralFeatures.get(3);
  }
  getETypedElement_EType() {
    return this._eTypedElementClass.eStructuralFeatures.get(6);
  }
  getEBigDecimal() {
    return this._eBigDecimalType;
  }
  getEBigInteger() {
    return this._eBigIntegerType;
  }
  getEBoolean() {
    return this._eBooleanType;
  }
  getEBooleanObject() {
    return this._eBooleanObjectType;
  }
  getEByte() {
    return this._eByteType;
  }
  getEByteArray() {
    return this._eByteArrayType;
  }
  getEByteObject() {
    return this._eByteObjectType;
  }
  getEChar() {
    return this._eCharType;
  }
  getECharacterObject() {
    return this._eCharacterObjectType;
  }
  getEDate() {
    return this._eDateType;
  }
  getEDiagnosticChain() {
    return this._eDiagnosticChainType;
  }
  getEDouble() {
    return this._eDoubleType;
  }
  getEDoubleObject() {
    return this._eDoubleObjectType;
  }
  getEEList() {
    return this._eEListType;
  }
  getEEnumerator() {
    return this._eEnumeratorType;
  }
  getEFeatureMap() {
    return this._eFeatureMapType;
  }
  getEFeatureMapEntry() {
    return this._eFeatureMapEntryType;
  }
  getEFloat() {
    return this._eFloatType;
  }
  getEFloatObject() {
    return this._eFloatObjectType;
  }
  getEInt() {
    return this._eIntType;
  }
  getEIntegerObject() {
    return this._eIntegerObjectType;
  }
  getEInvocationTargetException() {
    return this._eInvocationTargetExceptionType;
  }
  getEJavaClass() {
    return this._eJavaClassType;
  }
  getEJavaObject() {
    return this._eJavaObjectType;
  }
  getELong() {
    return this._eLongType;
  }
  getELongObject() {
    return this._eLongObjectType;
  }
  getEMap() {
    return this._eMapType;
  }
  getEResource() {
    return this._eResourceType;
  }
  getEResourceSet() {
    return this._eResourceSetType;
  }
  getEShort() {
    return this._eShortType;
  }
  getEShortObject() {
    return this._eShortObjectType;
  }
  getEString() {
    return this._eStringType;
  }
  getETreeIterator() {
    return this._eTreeIteratorType;
  }
  createPackageContents() {
    let e = Xe();
    this._eAnnotationClass = e.createEClassFromContainerAndClassID(this, i.EANNOTATION), e.createEAttributeFromContainerAndClassID(this._eAnnotationClass, i.EANNOTATION__SOURCE), e.createEReferenceFromContainerAndClassID(this._eAnnotationClass, i.EANNOTATION__DETAILS), e.createEReferenceFromContainerAndClassID(
      this._eAnnotationClass,
      i.EANNOTATION__EMODEL_ELEMENT
    ), e.createEReferenceFromContainerAndClassID(this._eAnnotationClass, i.EANNOTATION__CONTENTS), e.createEReferenceFromContainerAndClassID(this._eAnnotationClass, i.EANNOTATION__REFERENCES), this._eAttributeClass = e.createEClassFromContainerAndClassID(this, i.EATTRIBUTE), e.createEAttributeFromContainerAndClassID(this._eAttributeClass, i.EATTRIBUTE__ID), e.createEReferenceFromContainerAndClassID(
      this._eAttributeClass,
      i.EATTRIBUTE__EATTRIBUTE_TYPE
    ), this._eClassClass = e.createEClassFromContainerAndClassID(this, i.ECLASS), e.createEAttributeFromContainerAndClassID(this._eClassClass, i.ECLASS__ABSTRACT), e.createEAttributeFromContainerAndClassID(this._eClassClass, i.ECLASS__INTERFACE), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__ESTRUCTURAL_FEATURES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EATTRIBUTES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EREFERENCES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__ESUPER_TYPES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EOPERATIONS), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__ECONTAINMENT_FEATURES), e.createEReferenceFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__ECROSS_REFERENCE_FEATURES
    ), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_ATTRIBUTES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_REFERENCES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_CONTAINMENTS), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_CROSS_REFERENCES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_OPERATIONS), e.createEReferenceFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__EALL_STRUCTURAL_FEATURES
    ), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EALL_SUPER_TYPES), e.createEReferenceFromContainerAndClassID(this._eClassClass, i.ECLASS__EID_ATTRIBUTE), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__IS_SUPER_TYPE_OF_ECLASS
    ), e.createEOperationFromContainerAndClassID(this._eClassClass, i.ECLASS__GET_FEATURE_COUNT), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_ESTRUCTURAL_FEATURE_EINT
    ), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_ESTRUCTURAL_FEATURE_ESTRING
    ), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_FEATURE_ID_ESTRUCTURALFEATURE
    ), e.createEOperationFromContainerAndClassID(this._eClassClass, i.ECLASS__GET_OPERATION_COUNT), e.createEOperationFromContainerAndClassID(this._eClassClass, i.ECLASS__GET_EOPERATION_EINT), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_OPERATION_ID_EOPERATION
    ), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_OVERRIDE_EOPERATION
    ), e.createEOperationFromContainerAndClassID(
      this._eClassClass,
      i.ECLASS__GET_FEATURE_TYPE_ESTRUCTURALFEATURE
    ), this._eClassifierClass = e.createEClassFromContainerAndClassID(this, i.ECLASSIFIER), e.createEAttributeFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__INSTANCE_CLASS_NAME
    ), e.createEAttributeFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__INSTANCE_CLASS
    ), e.createEAttributeFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__INSTANCE_TYPE_NAME
    ), e.createEAttributeFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__DEFAULT_VALUE
    ), e.createEReferenceFromContainerAndClassID(this._eClassifierClass, i.ECLASSIFIER__EPACKAGE), e.createEAttributeFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__CLASSIFIER_ID
    ), e.createEOperationFromContainerAndClassID(
      this._eClassifierClass,
      i.ECLASSIFIER__IS_INSTANCE_EJAVAOBJECT
    ), this._eDataTypeClass = e.createEClassFromContainerAndClassID(this, i.EDATA_TYPE), e.createEAttributeFromContainerAndClassID(this._eDataTypeClass, i.EDATA_TYPE__SERIALIZABLE), this._eEnumClass = e.createEClassFromContainerAndClassID(this, i.EENUM), e.createEReferenceFromContainerAndClassID(this._eEnumClass, i.EENUM__ELITERALS), e.createEOperationFromContainerAndClassID(
      this._eEnumClass,
      i.EENUM__GET_EENUM_LITERAL_ESTRING
    ), e.createEOperationFromContainerAndClassID(this._eEnumClass, i.EENUM__GET_EENUM_LITERAL_EINT), e.createEOperationFromContainerAndClassID(
      this._eEnumClass,
      i.EENUM__GET_EENUM_LITERAL_BY_LITERAL_ESTRING
    ), this._eEnumLiteralClass = e.createEClassFromContainerAndClassID(this, i.EENUM_LITERAL), e.createEAttributeFromContainerAndClassID(this._eEnumLiteralClass, i.EENUM_LITERAL__VALUE), e.createEAttributeFromContainerAndClassID(this._eEnumLiteralClass, i.EENUM_LITERAL__INSTANCE), e.createEAttributeFromContainerAndClassID(this._eEnumLiteralClass, i.EENUM_LITERAL__LITERAL), e.createEReferenceFromContainerAndClassID(this._eEnumLiteralClass, i.EENUM_LITERAL__EENUM), this._eFactoryClass = e.createEClassFromContainerAndClassID(this, i.EFACTORY), e.createEReferenceFromContainerAndClassID(this._eFactoryClass, i.EFACTORY__EPACKAGE), e.createEOperationFromContainerAndClassID(this._eFactoryClass, i.EFACTORY__CREATE_ECLASS), e.createEOperationFromContainerAndClassID(
      this._eFactoryClass,
      i.EFACTORY__CREATE_FROM_STRING_EDATATYPE_ESTRING
    ), e.createEOperationFromContainerAndClassID(
      this._eFactoryClass,
      i.EFACTORY__CONVERT_TO_STRING_EDATATYPE_EJAVAOBJECT
    ), this._eGenericTypeClass = e.createEClassFromContainerAndClassID(this, i.EGENERIC_TYPE), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__EUPPER_BOUND
    ), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__ETYPE_ARGUMENTS
    ), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__ERAW_TYPE
    ), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__ELOWER_BOUND
    ), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__ETYPE_PARAMETER
    ), e.createEReferenceFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__ECLASSIFIER
    ), e.createEOperationFromContainerAndClassID(
      this._eGenericTypeClass,
      i.EGENERIC_TYPE__IS_INSTANCE_EJAVAOBJECT
    ), this._eModelElementClass = e.createEClassFromContainerAndClassID(this, i.EMODEL_ELEMENT), e.createEReferenceFromContainerAndClassID(
      this._eModelElementClass,
      i.EMODEL_ELEMENT__EANNOTATIONS
    ), e.createEOperationFromContainerAndClassID(
      this._eModelElementClass,
      i.EMODEL_ELEMENT__GET_EANNOTATION_ESTRING
    ), this._eNamedElementClass = e.createEClassFromContainerAndClassID(this, i.ENAMED_ELEMENT), e.createEAttributeFromContainerAndClassID(this._eNamedElementClass, i.ENAMED_ELEMENT__NAME), this._eObjectClass = e.createEClassFromContainerAndClassID(this, i.EOBJECT), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ECLASS), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__EIS_PROXY), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ERESOURCE), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ECONTAINER), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ECONTAINING_FEATURE), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__ECONTAINMENT_FEATURE
    ), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ECONTENTS), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__EALL_CONTENTS), e.createEOperationFromContainerAndClassID(this._eObjectClass, i.EOBJECT__ECROSS_REFERENCES), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__EGET_ESTRUCTURALFEATURE
    ), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__EGET_ESTRUCTURALFEATURE_EBOOLEAN
    ), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__ESET_ESTRUCTURALFEATURE_EJAVAOBJECT
    ), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__EIS_SET_ESTRUCTURALFEATURE
    ), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__EUNSET_ESTRUCTURALFEATURE
    ), e.createEOperationFromContainerAndClassID(
      this._eObjectClass,
      i.EOBJECT__EINVOKE_EOPERATION_EELIST
    ), this._eOperationClass = e.createEClassFromContainerAndClassID(this, i.EOPERATION), e.createEReferenceFromContainerAndClassID(
      this._eOperationClass,
      i.EOPERATION__ECONTAINING_CLASS
    ), e.createEReferenceFromContainerAndClassID(this._eOperationClass, i.EOPERATION__EPARAMETERS), e.createEReferenceFromContainerAndClassID(this._eOperationClass, i.EOPERATION__EEXCEPTIONS), e.createEAttributeFromContainerAndClassID(this._eOperationClass, i.EOPERATION__OPERATION_ID), e.createEOperationFromContainerAndClassID(
      this._eOperationClass,
      i.EOPERATION__IS_OVERRIDE_OF_EOPERATION
    ), this._ePackageClass = e.createEClassFromContainerAndClassID(this, i.EPACKAGE), e.createEAttributeFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__NS_URI), e.createEAttributeFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__NS_PREFIX), e.createEReferenceFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__EFACTORY_INSTANCE), e.createEReferenceFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__ECLASSIFIERS), e.createEReferenceFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__ESUB_PACKAGES), e.createEReferenceFromContainerAndClassID(this._ePackageClass, i.EPACKAGE__ESUPER_PACKAGE), e.createEOperationFromContainerAndClassID(
      this._ePackageClass,
      i.EPACKAGE__GET_ECLASSIFIER_ESTRING
    ), this._eParameterClass = e.createEClassFromContainerAndClassID(this, i.EPARAMETER), e.createEReferenceFromContainerAndClassID(this._eParameterClass, i.EPARAMETER__EOPERATION), this._eReferenceClass = e.createEClassFromContainerAndClassID(this, i.EREFERENCE), e.createEAttributeFromContainerAndClassID(this._eReferenceClass, i.EREFERENCE__CONTAINMENT), e.createEAttributeFromContainerAndClassID(this._eReferenceClass, i.EREFERENCE__CONTAINER), e.createEAttributeFromContainerAndClassID(
      this._eReferenceClass,
      i.EREFERENCE__RESOLVE_PROXIES
    ), e.createEReferenceFromContainerAndClassID(this._eReferenceClass, i.EREFERENCE__EOPPOSITE), e.createEReferenceFromContainerAndClassID(
      this._eReferenceClass,
      i.EREFERENCE__EREFERENCE_TYPE
    ), e.createEReferenceFromContainerAndClassID(this._eReferenceClass, i.EREFERENCE__EKEYS), this._eStringToStringMapEntryClass = e.createEClassFromContainerAndClassID(
      this,
      i.ESTRING_TO_STRING_MAP_ENTRY
    ), e.createEAttributeFromContainerAndClassID(
      this._eStringToStringMapEntryClass,
      i.ESTRING_TO_STRING_MAP_ENTRY__KEY
    ), e.createEAttributeFromContainerAndClassID(
      this._eStringToStringMapEntryClass,
      i.ESTRING_TO_STRING_MAP_ENTRY__VALUE
    ), this._eStructuralFeatureClass = e.createEClassFromContainerAndClassID(
      this,
      i.ESTRUCTURAL_FEATURE
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__CHANGEABLE
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__VOLATILE
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__TRANSIENT
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE_LITERAL
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__DEFAULT_VALUE
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__UNSETTABLE
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__DERIVED
    ), e.createEReferenceFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__ECONTAINING_CLASS
    ), e.createEAttributeFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__FEATURE_ID
    ), e.createEOperationFromContainerAndClassID(
      this._eStructuralFeatureClass,
      i.ESTRUCTURAL_FEATURE__GET_CONTAINER_CLASS
    ), this._eTypeParameterClass = e.createEClassFromContainerAndClassID(this, i.ETYPE_PARAMETER), e.createEReferenceFromContainerAndClassID(
      this._eTypeParameterClass,
      i.ETYPE_PARAMETER__EBOUNDS
    ), this._eTypedElementClass = e.createEClassFromContainerAndClassID(this, i.ETYPED_ELEMENT), e.createEAttributeFromContainerAndClassID(
      this._eTypedElementClass,
      i.ETYPED_ELEMENT__ORDERED
    ), e.createEAttributeFromContainerAndClassID(this._eTypedElementClass, i.ETYPED_ELEMENT__UNIQUE), e.createEAttributeFromContainerAndClassID(
      this._eTypedElementClass,
      i.ETYPED_ELEMENT__LOWER_BOUND
    ), e.createEAttributeFromContainerAndClassID(
      this._eTypedElementClass,
      i.ETYPED_ELEMENT__UPPER_BOUND
    ), e.createEAttributeFromContainerAndClassID(this._eTypedElementClass, i.ETYPED_ELEMENT__MANY), e.createEAttributeFromContainerAndClassID(
      this._eTypedElementClass,
      i.ETYPED_ELEMENT__REQUIRED
    ), e.createEReferenceFromContainerAndClassID(this._eTypedElementClass, i.ETYPED_ELEMENT__ETYPE), this._eBigDecimalType = e.createEDataTypeFromContainerAndClassID(this, i.EBIG_DECIMAL), this._eBigIntegerType = e.createEDataTypeFromContainerAndClassID(this, i.EBIG_INTEGER), this._eBooleanType = e.createEDataTypeFromContainerAndClassID(this, i.EBOOLEAN), this._eBooleanObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EBOOLEAN_OBJECT), this._eByteType = e.createEDataTypeFromContainerAndClassID(this, i.EBYTE), this._eByteArrayType = e.createEDataTypeFromContainerAndClassID(this, i.EBYTE_ARRAY), this._eByteObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EBYTE_OBJECT), this._eCharType = e.createEDataTypeFromContainerAndClassID(this, i.ECHAR), this._eCharacterObjectType = e.createEDataTypeFromContainerAndClassID(
      this,
      i.ECHARACTER_OBJECT
    ), this._eDateType = e.createEDataTypeFromContainerAndClassID(this, i.EDATE), this._eDiagnosticChainType = e.createEDataTypeFromContainerAndClassID(
      this,
      i.EDIAGNOSTIC_CHAIN
    ), this._eDoubleType = e.createEDataTypeFromContainerAndClassID(this, i.EDOUBLE), this._eDoubleObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EDOUBLE_OBJECT), this._eEListType = e.createEDataTypeFromContainerAndClassID(this, i.EE_LIST), this._eEnumeratorType = e.createEDataTypeFromContainerAndClassID(this, i.EENUMERATOR), this._eFeatureMapType = e.createEDataTypeFromContainerAndClassID(this, i.EFEATURE_MAP), this._eFeatureMapEntryType = e.createEDataTypeFromContainerAndClassID(
      this,
      i.EFEATURE_MAP_ENTRY
    ), this._eFloatType = e.createEDataTypeFromContainerAndClassID(this, i.EFLOAT), this._eFloatObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EFLOAT_OBJECT), this._eIntType = e.createEDataTypeFromContainerAndClassID(this, i.EINT), this._eIntegerObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EINTEGER_OBJECT), this._eInvocationTargetExceptionType = e.createEDataTypeFromContainerAndClassID(
      this,
      i.EINVOCATION_TARGET_EXCEPTION
    ), this._eJavaClassType = e.createEDataTypeFromContainerAndClassID(this, i.EJAVA_CLASS), this._eJavaObjectType = e.createEDataTypeFromContainerAndClassID(this, i.EJAVA_OBJECT), this._eLongType = e.createEDataTypeFromContainerAndClassID(this, i.ELONG), this._eLongObjectType = e.createEDataTypeFromContainerAndClassID(this, i.ELONG_OBJECT), this._eMapType = e.createEDataTypeFromContainerAndClassID(this, i.EMAP), this._eResourceType = e.createEDataTypeFromContainerAndClassID(this, i.ERESOURCE), this._eResourceSetType = e.createEDataTypeFromContainerAndClassID(this, i.ERESOURCE_SET), this._eShortType = e.createEDataTypeFromContainerAndClassID(this, i.ESHORT), this._eShortObjectType = e.createEDataTypeFromContainerAndClassID(this, i.ESHORT_OBJECT), this._eStringType = e.createEDataTypeFromContainerAndClassID(this, i.ESTRING), this._eTreeIteratorType = e.createEDataTypeFromContainerAndClassID(this, i.ETREE_ITERATOR);
  }
  initializePackageContents() {
    this._eAnnotationClass.eSuperTypes.add(this._eModelElementClass), this._eAttributeClass.eSuperTypes.add(this._eStructuralFeatureClass), this._eClassClass.eSuperTypes.add(this._eClassifierClass), this._eClassifierClass.eSuperTypes.add(this._eNamedElementClass), this._eDataTypeClass.eSuperTypes.add(this._eClassifierClass), this._eEnumClass.eSuperTypes.add(this._eDataTypeClass), this._eEnumLiteralClass.eSuperTypes.add(this._eNamedElementClass), this._eFactoryClass.eSuperTypes.add(this._eModelElementClass), this._eNamedElementClass.eSuperTypes.add(this._eModelElementClass), this._eOperationClass.eSuperTypes.add(this._eTypedElementClass), this._ePackageClass.eSuperTypes.add(this._eNamedElementClass), this._eParameterClass.eSuperTypes.add(this._eTypedElementClass), this._eReferenceClass.eSuperTypes.add(this._eStructuralFeatureClass), this._eStructuralFeatureClass.eSuperTypes.add(this._eTypedElementClass), this._eTypeParameterClass.eSuperTypes.add(this._eNamedElementClass), this._eTypedElementClass.eSuperTypes.add(this._eNamedElementClass), this.initEClass(this._eAnnotationClass, "EAnnotation", "@masagroup/ecore/EAnnotation", !1, !1), this.initEAttribute(
      this.getEAnnotation_Source(),
      this.getEString(),
      "source",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEAnnotation_Details(),
      this.getEStringToStringMapEntry(),
      null,
      "details",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEAnnotation_EModelElement(),
      this.getEModelElement(),
      this.getEModelElement_EAnnotations(),
      "eModelElement",
      "",
      0,
      1,
      !0,
      !1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEAnnotation_Contents(),
      this.getEObject(),
      null,
      "contents",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEAnnotation_References(),
      this.getEObject(),
      null,
      "references",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEClass(this._eAttributeClass, "EAttribute", "@masagroup/ecore/EAttribute", !1, !1), this.initEAttribute(
      this.getEAttribute_ID(),
      this.getEBoolean(),
      "iD",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEAttribute_EAttributeType(),
      this.getEDataType(),
      null,
      "eAttributeType",
      "",
      1,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEClass(this._eClassClass, "EClass", "@masagroup/ecore/EClass", !1, !1), this.initEAttribute(
      this.getEClass_Abstract(),
      this.getEBoolean(),
      "abstract",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEClass_Interface(),
      this.getEBoolean(),
      "interface",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEClass_EStructuralFeatures(),
      this.getEStructuralFeature(),
      this.getEStructuralFeature_EContainingClass(),
      "eStructuralFeatures",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEClass_EAttributes(),
      this.getEAttribute(),
      null,
      "eAttributes",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EReferences(),
      this.getEReference(),
      null,
      "eReferences",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_ESuperTypes(),
      this.getEClass(),
      null,
      "eSuperTypes",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEClass_EOperations(),
      this.getEOperation(),
      this.getEOperation_EContainingClass(),
      "eOperations",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEClass_EContainmentFeatures(),
      this.getEStructuralFeature(),
      null,
      "eContainmentFeatures",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_ECrossReferenceFeatures(),
      this.getEStructuralFeature(),
      null,
      "eCrossReferenceFeatures",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllAttributes(),
      this.getEAttribute(),
      null,
      "eAllAttributes",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllReferences(),
      this.getEReference(),
      null,
      "eAllReferences",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllContainments(),
      this.getEReference(),
      null,
      "eAllContainments",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllCrossReferences(),
      this.getEReference(),
      null,
      "eAllCrossReferences",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllOperations(),
      this.getEOperation(),
      null,
      "eAllOperations",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllStructuralFeatures(),
      this.getEStructuralFeature(),
      null,
      "eAllStructuralFeatures",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EAllSuperTypes(),
      this.getEClass(),
      null,
      "eAllSuperTypes",
      "",
      0,
      -1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEClass_EIDAttribute(),
      this.getEAttribute(),
      null,
      "eIDAttribute",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !1,
      !1,
      !0,
      !0,
      !0
    );
    {
      let e = this.getEClass_IsSuperTypeOf_EClass();
      this.initEOperation(e, this.getEBoolean(), "isSuperTypeOf", 0, 1, !0, !0), this.addEParameter(e, this.getEClass(), "someClass", 0, 1, !0, !0);
    }
    this.initEOperation(this.getEClass_GetFeatureCount(), this.getEInt(), "getFeatureCount", 0, 1, !0, !0);
    {
      let e = this.getEClass_GetEStructuralFeature_EInt();
      this.initEOperation(e, this.getEStructuralFeature(), "getEStructuralFeature", 0, 1, !0, !0), this.addEParameter(e, this.getEInt(), "featureID", 0, 1, !0, !0);
    }
    {
      let e = this.getEClass_GetEStructuralFeature_EString();
      this.initEOperation(e, this.getEStructuralFeature(), "getEStructuralFeature", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "featureName", 0, 1, !0, !0);
    }
    {
      let e = this.getEClass_GetFeatureID_EStructuralFeature();
      this.initEOperation(e, this.getEInt(), "getFeatureID", 0, 1, !0, !0), this.addEParameter(e, this.getEStructuralFeature(), "feature", 0, 1, !0, !0);
    }
    this.initEOperation(this.getEClass_GetOperationCount(), this.getEInt(), "getOperationCount", 0, 1, !0, !0);
    {
      let e = this.getEClass_GetEOperation_EInt();
      this.initEOperation(e, this.getEOperation(), "getEOperation", 0, 1, !0, !0), this.addEParameter(e, this.getEInt(), "operationID", 0, 1, !0, !0);
    }
    {
      let e = this.getEClass_GetOperationID_EOperation();
      this.initEOperation(e, this.getEInt(), "getOperationID", 0, 1, !0, !0), this.addEParameter(e, this.getEOperation(), "operation", 0, 1, !0, !0);
    }
    {
      let e = this.getEClass_GetOverride_EOperation();
      this.initEOperation(e, this.getEOperation(), "getOverride", 0, 1, !0, !0), this.addEParameter(e, this.getEOperation(), "operation", 0, 1, !0, !0);
    }
    {
      let e = this.getEClass_GetFeatureType_EStructuralFeature();
      this.initEOperation(e, this.getEClassifierClass(), "getFeatureType", 0, 1, !0, !0), this.addEParameter(e, this.getEStructuralFeature(), "feature", 0, 1, !0, !0);
    }
    this.initEClass(this._eClassifierClass, "EClassifier", "@masagroup/ecore/EClassifier", !0, !1), this.initEAttribute(
      this.getEClassifier_InstanceClassName(),
      this.getEString(),
      "instanceClassName",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEClassifier_InstanceClass(),
      this.getEJavaClass(),
      "instanceClass",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEClassifier_InstanceTypeName(),
      this.getEString(),
      "instanceTypeName",
      "",
      0,
      1,
      !1,
      !0,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEClassifier_DefaultValue(),
      this.getEJavaObject(),
      "defaultValue",
      "",
      0,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1
    ), this.initEAttribute(
      this.getEClassifier_ClassifierID(),
      this.getEInt(),
      "classifierID",
      "-1",
      0,
      1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEClassifier_EPackage(),
      this.getEPackage(),
      this.getEPackage_EClassifiers(),
      "ePackage",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEClassifier_IsInstance_EJavaObject();
      this.initEOperation(e, this.getEBoolean(), "isInstance", 0, 1, !0, !0), this.addEParameter(e, this.getEJavaObject(), "object", 0, 1, !0, !0);
    }
    this.initEClass(this._eDataTypeClass, "EDataType", "@masagroup/ecore/EDataType", !1, !1), this.initEAttribute(
      this.getEDataType_Serializable(),
      this.getEBoolean(),
      "serializable",
      "true",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEClass(this._eEnumClass, "EEnum", "@masagroup/ecore/EEnum", !1, !1), this.initEReference(
      this.getEEnum_ELiterals(),
      this.getEEnumLiteral(),
      this.getEEnumLiteral_EEnum(),
      "eLiterals",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEEnum_GetEEnumLiteral_EString();
      this.initEOperation(e, this.getEEnumLiteral(), "getEEnumLiteral", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "name", 0, 1, !0, !0);
    }
    {
      let e = this.getEEnum_GetEEnumLiteral_EInt();
      this.initEOperation(e, this.getEEnumLiteral(), "getEEnumLiteral", 0, 1, !0, !0), this.addEParameter(e, this.getEInt(), "value", 0, 1, !0, !0);
    }
    {
      let e = this.getEEnum_GetEEnumLiteralByLiteral_EString();
      this.initEOperation(e, this.getEEnumLiteral(), "getEEnumLiteralByLiteral", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "literal", 0, 1, !0, !0);
    }
    this.initEClass(this._eEnumLiteralClass, "EEnumLiteral", "@masagroup/ecore/EEnumLiteral", !1, !1), this.initEAttribute(
      this.getEEnumLiteral_Value(),
      this.getEInt(),
      "value",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEEnumLiteral_Instance(),
      this.getEEnumerator(),
      "instance",
      "",
      0,
      1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEEnumLiteral_Literal(),
      this.getEString(),
      "literal",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEEnumLiteral_EEnum(),
      this.getEEnum(),
      this.getEEnum_ELiterals(),
      "eEnum",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEClass(this._eFactoryClass, "EFactory", "@masagroup/ecore/EFactory", !1, !1), this.initEReference(
      this.getEFactory_EPackage(),
      this.getEPackage(),
      this.getEPackage_EFactoryInstance(),
      "ePackage",
      "",
      1,
      1,
      !0,
      !1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEFactory_Create_EClass();
      this.initEOperation(e, this.getEObject(), "create", 0, 1, !0, !0), this.addEParameter(e, this.getEClass(), "eClass", 0, 1, !0, !0);
    }
    {
      let e = this.getEFactory_CreateFromString_EDataType_EString();
      this.initEOperation(e, this.getEJavaObject(), "createFromString", 0, 1, !0, !0), this.addEParameter(e, this.getEDataType(), "eDataType", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "literalValue", 0, 1, !0, !0);
    }
    {
      let e = this.getEFactory_ConvertToString_EDataType_EJavaObject();
      this.initEOperation(e, this.getEString(), "convertToString", 0, 1, !0, !0), this.addEParameter(e, this.getEDataType(), "eDataType", 0, 1, !0, !0), this.addEParameter(e, this.getEJavaObject(), "instanceValue", 0, 1, !0, !0);
    }
    this.initEClass(this._eGenericTypeClass, "EGenericType", "@masagroup/ecore/EGenericType", !1, !1), this.initEReference(
      this.getEGenericType_EUpperBound(),
      this.getEGenericType(),
      null,
      "eUpperBound",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEGenericType_ETypeArguments(),
      this.getEGenericType(),
      null,
      "eTypeArguments",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEGenericType_ERawType(),
      this.getEClassifierClass(),
      null,
      "eRawType",
      "",
      1,
      1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEGenericType_ELowerBound(),
      this.getEGenericType(),
      null,
      "eLowerBound",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEGenericType_ETypeParameter(),
      this.getETypeParameter(),
      null,
      "eTypeParameter",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEGenericType_EClassifier(),
      this.getEClassifierClass(),
      null,
      "eClassifier",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEGenericType_IsInstance_EJavaObject();
      this.initEOperation(e, this.getEBoolean(), "isInstance", 0, 1, !0, !0), this.addEParameter(e, this.getEJavaObject(), "object", 0, 1, !0, !0);
    }
    this.initEClass(this._eModelElementClass, "EModelElement", "@masagroup/ecore/EModelElement", !0, !1), this.initEReference(
      this.getEModelElement_EAnnotations(),
      this.getEAnnotationClass(),
      this.getEAnnotation_EModelElement(),
      "eAnnotations",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEModelElement_GetEAnnotation_EString();
      this.initEOperation(e, this.getEAnnotationClass(), "getEAnnotation", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "source", 0, 1, !0, !0);
    }
    this.initEClass(this._eNamedElementClass, "ENamedElement", "@masagroup/ecore/ENamedElement", !0, !1), this.initEAttribute(
      this.getENamedElement_Name(),
      this.getEString(),
      "name",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEClass(this._eObjectClass, "EObject", "@masagroup/ecore/EObject", !1, !1), this.initEOperation(this.getEObject_EClass(), this.getEClass(), "eClass", 0, 1, !0, !0), this.initEOperation(this.getEObject_EIsProxy(), this.getEBoolean(), "eIsProxy", 0, 1, !0, !0), this.initEOperation(this.getEObject_EResource(), this.getEResource(), "eResource", 0, 1, !0, !0), this.initEOperation(this.getEObject_EContainer(), this.getEObject(), "eContainer", 0, 1, !0, !0), this.initEOperation(
      this.getEObject_EContainingFeature(),
      this.getEStructuralFeature(),
      "eContainingFeature",
      0,
      1,
      !0,
      !0
    ), this.initEOperation(
      this.getEObject_EContainmentFeature(),
      this.getEReference(),
      "eContainmentFeature",
      0,
      1,
      !0,
      !0
    ), this.initEOperation(this.getEObject_EContents(), this.getEEList(), "eContents", 0, 1, !0, !0), this.initEOperation(this.getEObject_EAllContents(), this.getETreeIterator(), "eAllContents", 0, 1, !0, !0), this.initEOperation(this.getEObject_ECrossReferences(), this.getEEList(), "eCrossReferences", 0, 1, !0, !0);
    {
      let e = this.getEObject_EGet_EStructuralFeature();
      this.initEOperation(e, this.getEJavaObject(), "eGet", 0, 1, !0, !0), this.addEParameter(e, this.getEStructuralFeature(), "feature", 0, 1, !0, !0);
    }
    {
      let e = this.getEObject_EGet_EStructuralFeature_EBoolean();
      this.initEOperation(e, this.getEJavaObject(), "eGet", 0, 1, !0, !0), this.addEParameter(e, this.getEStructuralFeature(), "feature", 0, 1, !0, !0), this.addEParameter(e, this.getEBoolean(), "resolve", 0, 1, !0, !0);
    }
    {
      let e = this.getEObject_ESet_EStructuralFeature_EJavaObject();
      this.initEOperation(e, null, "eSet", 0, 1, !0, !0), this.addEParameter(e, null, "feature", 0, 1, !0, !0), this.addEParameter(e, null, "newValue", 0, 1, !0, !0);
    }
    {
      let e = this.getEObject_EIsSet_EStructuralFeature();
      this.initEOperation(e, this.getEBoolean(), "eIsSet", 0, 1, !0, !0), this.addEParameter(e, this.getEStructuralFeature(), "feature", 0, 1, !0, !0);
    }
    {
      let e = this.getEObject_EUnset_EStructuralFeature();
      this.initEOperation(e, null, "eUnset", 0, 1, !0, !0), this.addEParameter(e, null, "feature", 0, 1, !0, !0);
    }
    {
      let e = this.getEObject_EInvoke_EOperation_EEList();
      this.initEOperation(e, this.getEJavaObject(), "eInvoke", 0, 1, !0, !0), this.addEParameter(e, this.getEOperation(), "operation", 0, 1, !0, !0), this.addEParameter(e, this.getEEList(), "arguments", 0, 1, !0, !0);
    }
    this.initEClass(this._eOperationClass, "EOperation", "@masagroup/ecore/EOperation", !1, !1), this.initEAttribute(
      this.getEOperation_OperationID(),
      this.getEInt(),
      "operationID",
      "-1",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEOperation_EContainingClass(),
      this.getEClass(),
      this.getEClass_EOperations(),
      "eContainingClass",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEOperation_EParameters(),
      this.getEParameter(),
      this.getEParameter_EOperation(),
      "eParameters",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEOperation_EExceptions(),
      this.getEClassifierClass(),
      null,
      "eExceptions",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEOperation_IsOverrideOf_EOperation();
      this.initEOperation(e, this.getEBoolean(), "isOverrideOf", 0, 1, !0, !0), this.addEParameter(e, this.getEOperation(), "someOperation", 0, 1, !0, !0);
    }
    this.initEClass(this._ePackageClass, "EPackage", "@masagroup/ecore/EPackage", !1, !1), this.initEAttribute(
      this.getEPackage_NsURI(),
      this.getEString(),
      "nsURI",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEPackage_NsPrefix(),
      this.getEString(),
      "nsPrefix",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEPackage_EFactoryInstance(),
      this.getEFactory(),
      this.getEFactory_EPackage(),
      "eFactoryInstance",
      "",
      1,
      1,
      !0,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEPackage_EClassifiers(),
      this.getEClassifierClass(),
      this.getEClassifier_EPackage(),
      "eClassifiers",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEPackage_ESubPackages(),
      this.getEPackage(),
      this.getEPackage_ESuperPackage(),
      "eSubPackages",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEPackage_ESuperPackage(),
      this.getEPackage(),
      this.getEPackage_ESubPackages(),
      "eSuperPackage",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    );
    {
      let e = this.getEPackage_GetEClassifier_EString();
      this.initEOperation(e, this.getEClassifierClass(), "getEClassifier", 0, 1, !0, !0), this.addEParameter(e, this.getEString(), "name", 0, 1, !0, !0);
    }
    this.initEClass(this._eParameterClass, "EParameter", "@masagroup/ecore/EParameter", !1, !1), this.initEReference(
      this.getEParameter_EOperation(),
      this.getEOperation(),
      this.getEOperation_EParameters(),
      "eOperation",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEClass(this._eReferenceClass, "EReference", "@masagroup/ecore/EReference", !1, !1), this.initEAttribute(
      this.getEReference_Containment(),
      this.getEBoolean(),
      "containment",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEReference_Container(),
      this.getEBoolean(),
      "container",
      "",
      0,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1
    ), this.initEAttribute(
      this.getEReference_ResolveProxies(),
      this.getEBoolean(),
      "resolveProxies",
      "true",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEReference_EOpposite(),
      this.getEReference(),
      null,
      "eOpposite",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEReference(
      this.getEReference_EReferenceType(),
      this.getEClass(),
      null,
      "eReferenceType",
      "",
      1,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0
    ), this.initEReference(
      this.getEReference_EKeys(),
      this.getEAttribute(),
      null,
      "eKeys",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0
    ), this.initEClass(
      this._eStringToStringMapEntryClass,
      "EStringToStringMapEntry",
      "@masagroup/ecore/EMapEntry",
      !1,
      !1
    ), this.initEAttribute(
      this.getEStringToStringMapEntry_Key(),
      this.getEString(),
      "key",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStringToStringMapEntry_Value(),
      this.getEString(),
      "value",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEClass(
      this._eStructuralFeatureClass,
      "EStructuralFeature",
      "@masagroup/ecore/EStructuralFeature",
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_Changeable(),
      this.getEBoolean(),
      "changeable",
      "true",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_Volatile(),
      this.getEBoolean(),
      "volatile",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_Transient(),
      this.getEBoolean(),
      "transient",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_DefaultValueLiteral(),
      this.getEString(),
      "defaultValueLiteral",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_DefaultValue(),
      this.getEJavaObject(),
      "defaultValue",
      "",
      0,
      1,
      !0,
      !0,
      !0,
      !1,
      !0,
      !0,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_Unsettable(),
      this.getEBoolean(),
      "unsettable",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_Derived(),
      this.getEBoolean(),
      "derived",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getEStructuralFeature_FeatureID(),
      this.getEInt(),
      "featureID",
      "-1",
      0,
      1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEReference(
      this.getEStructuralFeature_EContainingClass(),
      this.getEClass(),
      this.getEClass_EStructuralFeatures(),
      "eContainingClass",
      "",
      0,
      1,
      !0,
      !1,
      !1,
      !1,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEOperation(
      this.getEStructuralFeature_GetContainerClass(),
      this.getEJavaClass(),
      "getContainerClass",
      0,
      1,
      !0,
      !0
    ), this.initEClass(this._eTypeParameterClass, "ETypeParameter", "@masagroup/ecore/ETypeParameter", !1, !1), this.initEReference(
      this.getETypeParameter_EBounds(),
      this.getEGenericType(),
      null,
      "eBounds",
      "",
      0,
      -1,
      !1,
      !1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !1,
      !0
    ), this.initEClass(this._eTypedElementClass, "ETypedElement", "@masagroup/ecore/ETypedElement", !0, !1), this.initEAttribute(
      this.getETypedElement_Ordered(),
      this.getEBoolean(),
      "ordered",
      "true",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getETypedElement_Unique(),
      this.getEBoolean(),
      "unique",
      "true",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getETypedElement_LowerBound(),
      this.getEInt(),
      "lowerBound",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getETypedElement_UpperBound(),
      this.getEInt(),
      "upperBound",
      "1",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !1,
      !0,
      !1
    ), this.initEAttribute(
      this.getETypedElement_Many(),
      this.getEBoolean(),
      "many",
      "",
      0,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1
    ), this.initEAttribute(
      this.getETypedElement_Required(),
      this.getEBoolean(),
      "required",
      "",
      0,
      1,
      !0,
      !0,
      !1,
      !1,
      !0,
      !0,
      !0,
      !1
    ), this.initEReference(
      this.getETypedElement_EType(),
      this.getEClassifierClass(),
      null,
      "eType",
      "",
      0,
      1,
      !1,
      !1,
      !0,
      !1,
      !0,
      !0,
      !0,
      !1,
      !0
    ), this.initEDataType(this.getEBigDecimal(), "EBigDecimal", "number", "0", !0), this.initEDataType(this.getEBigInteger(), "EBigInteger", "number", "0", !0), this.initEDataType(this.getEBoolean(), "EBoolean", "boolean", "false", !0), this.initEDataType(this.getEBooleanObject(), "EBooleanObject", "boolean", "false", !0), this.initEDataType(this.getEByte(), "EByte", "byte", "0", !0), this.initEDataType(this.getEByteArray(), "EByteArray", "Uint8Array", "", !0), this.initEDataType(this.getEByteObject(), "EByteObject", "number", "0", !0), this.initEDataType(this.getEChar(), "EChar", "number", "0", !0), this.initEDataType(this.getECharacterObject(), "ECharacterObject", "number", "0", !0), this.initEDataType(this.getEDate(), "EDate", "Date", "", !0), this.initEDataType(
      this.getEDiagnosticChain(),
      "EDiagnosticChain",
      "@masagroup/ecore/EDiagnosticChain",
      "",
      !1
    ), this.initEDataType(this.getEDouble(), "EDouble", "number", "0.0", !0), this.initEDataType(this.getEDoubleObject(), "EDoubleObject", "number", "0", !0), this.initEDataType(this.getEEList(), "EEList", "@masagroup/ecore/EList", "", !1), this.initEDataType(this.getEEnumerator(), "EEnumerator", "any", "", !1), this.initEDataType(this.getEFeatureMap(), "EFeatureMap", "any", "", !1), this.initEDataType(this.getEFeatureMapEntry(), "EFeatureMapEntry", "any", "", !1), this.initEDataType(this.getEFloat(), "EFloat", "number", "0.0", !0), this.initEDataType(this.getEFloatObject(), "EFloatObject", "number", "0", !0), this.initEDataType(this.getEInt(), "EInt", "number", "0", !0), this.initEDataType(this.getEIntegerObject(), "EIntegerObject", "number", "0", !0), this.initEDataType(
      this.getEInvocationTargetException(),
      "EInvocationTargetException",
      "java.lang.reflect.InvocationTargetException",
      "",
      !1
    ), this.initEDataType(this.getEJavaClass(), "EJavaClass", "any", "", !0), this.initEDataType(this.getEJavaObject(), "EJavaObject", "any", "", !0), this.initEDataType(this.getELong(), "ELong", "number", "0", !0), this.initEDataType(this.getELongObject(), "ELongObject", "number", "0", !0), this.initEDataType(this.getEMap(), "EMap", "@masagroup/ecore/EMap", "", !1), this.initEDataType(this.getEResource(), "EResource", "@masagroup/ecore/EResource", "", !1), this.initEDataType(this.getEResourceSet(), "EResourceSet", "@masagroup/ecore/EResourceSet", "", !1), this.initEDataType(this.getEShort(), "EShort", "number", "0", !0), this.initEDataType(this.getEShortObject(), "EShortObject", "number", "0", !0), this.initEDataType(this.getEString(), "EString", "string", "", !0), this.initEDataType(this.getETreeIterator(), "ETreeIterator", "IterableIterator", "", !1);
  }
}
class jt extends Je {
  static {
    this._instance = null;
  }
  static getInstance() {
    return this._instance || (this._instance = new jt()), this._instance;
  }
  constructor() {
    super();
  }
  create(e) {
    switch (e.classifierID) {
      case i.EATTRIBUTE:
        return this.createEAttribute();
      case i.EANNOTATION:
        return this.createEAnnotation();
      case i.ECLASS:
        return this.createEClass();
      case i.EDATA_TYPE:
        return this.createEDataType();
      case i.EENUM:
        return this.createEEnum();
      case i.EENUM_LITERAL:
        return this.createEEnumLiteral();
      case i.EFACTORY:
        return this.createEFactory();
      case i.EOBJECT:
        return this.createEObject();
      case i.EOPERATION:
        return this.createEOperation();
      case i.EPACKAGE:
        return this.createEPackage();
      case i.EPARAMETER:
        return this.createEParameter();
      case i.EREFERENCE:
        return this.createEReference();
      case i.ESTRING_TO_STRING_MAP_ENTRY:
        return this.createEStringToStringMapEntry();
      case i.EGENERIC_TYPE:
        return this.createEGenericType();
      case i.ETYPE_PARAMETER:
        return this.createETypeParameter();
      default:
        throw new Error("create: " + e.classifierID + " not found");
    }
  }
  createEAttribute() {
    return new ot();
  }
  createEAttributeFromContainer(e) {
    let t = new ot();
    return e?.eStructuralFeatures.add(t), t;
  }
  createEAttributeFromContainerAndClassID(e, t) {
    let s = new ot();
    return s.featureID = t, e?.eStructuralFeatures.add(s), s;
  }
  createEAnnotation() {
    return new es();
  }
  createEAnnotationFromContainer(e) {
    let t = new es();
    return e?.eAnnotations.add(t), t;
  }
  createEClass() {
    return new Et();
  }
  createEClassFromContainer(e) {
    let t = new Et();
    return e?.eClassifiers.add(t), t;
  }
  createEClassFromContainerAndClassID(e, t) {
    let s = new Et();
    return s.classifierID = t, e?.eClassifiers.add(s), s;
  }
  createEDataType() {
    return new ze();
  }
  createEDataTypeFromContainer(e) {
    let t = new ze();
    return e?.eClassifiers.add(t), t;
  }
  createEDataTypeFromContainerAndClassID(e, t) {
    let s = new ze();
    return s.classifierID = t, e?.eClassifiers.add(s), s;
  }
  createEEnum() {
    return new ut();
  }
  createEEnumFromContainer(e) {
    let t = new ut();
    return e?.eClassifiers.add(t), t;
  }
  createEEnumFromContainerAndClassID(e, t) {
    let s = new ut();
    return s.classifierID = t, e?.eClassifiers.add(s), s;
  }
  createEEnumLiteral() {
    return new ts();
  }
  createEEnumLiteralFromContainer(e) {
    let t = new ts();
    return e?.eLiterals.add(t), t;
  }
  createEFactory() {
    return new Je();
  }
  createEFactoryFromContainer(e) {
    let t = new Je();
    return e != null && (e.eFactoryInstance = t), t;
  }
  createEObject() {
    return new Le();
  }
  createEOperation() {
    return new ct();
  }
  createEOperationFromContainer(e) {
    let t = new ct();
    return e?.eOperations.add(t), t;
  }
  createEOperationFromContainerAndClassID(e, t) {
    let s = new ct();
    return s.operationID = t, e?.eOperations.add(s), s;
  }
  createEPackage() {
    return new Ct();
  }
  createEPackageFromContainer(e) {
    let t = new Ct();
    return e?.eSubPackages.add(t), t;
  }
  createEParameter() {
    return new ss();
  }
  createEParameterFromContainer(e) {
    let t = new ss();
    return e?.eParameters.add(t), t;
  }
  createEReference() {
    return new ht();
  }
  createEReferenceFromContainer(e) {
    let t = new ht();
    return e?.eStructuralFeatures.add(t), t;
  }
  createEReferenceFromContainerAndClassID(e, t) {
    let s = new ht();
    return s.featureID = t, e?.eStructuralFeatures.add(s), s;
  }
  createEStringToStringMapEntry() {
    return new Cr();
  }
  createEGenericType() {
    return new Sr();
  }
  createETypeParameter() {
    return new pr();
  }
  createFromString(e, t) {
    switch (e.classifierID) {
      case i.EBIG_DECIMAL:
        return this.createEBigDecimalFromString(e, t);
      case i.EBIG_INTEGER:
        return this.createEBigIntegerFromString(e, t);
      case i.EBOOLEAN:
        return this.createEBooleanFromString(e, t);
      case i.EBOOLEAN_OBJECT:
        return this.createEBooleanObjectFromString(e, t);
      case i.EBYTE:
        return this.createEByteFromString(e, t);
      case i.EBYTE_ARRAY:
        return this.createEByteArrayFromString(e, t);
      case i.EBYTE_OBJECT:
        return this.createEByteObjectFromString(e, t);
      case i.ECHAR:
        return this.createECharFromString(e, t);
      case i.ECHARACTER_OBJECT:
        return this.createECharacterObjectFromString(e, t);
      case i.EDATE:
        return this.createEDateFromString(e, t);
      case i.EDOUBLE:
        return this.createEDoubleFromString(e, t);
      case i.EDOUBLE_OBJECT:
        return this.createEDoubleObjectFromString(e, t);
      case i.EFLOAT:
        return this.createEFloatFromString(e, t);
      case i.EFLOAT_OBJECT:
        return this.createEFloatObjectFromString(e, t);
      case i.EINT:
        return this.createEIntFromString(e, t);
      case i.EINTEGER_OBJECT:
        return this.createEIntegerObjectFromString(e, t);
      case i.EJAVA_CLASS:
        return this.createEJavaClassFromString(e, t);
      case i.EJAVA_OBJECT:
        return this.createEJavaObjectFromString(e, t);
      case i.ELONG:
        return this.createELongFromString(e, t);
      case i.ELONG_OBJECT:
        return this.createELongObjectFromString(e, t);
      case i.ESHORT:
        return this.createEShortFromString(e, t);
      case i.ESHORT_OBJECT:
        return this.createEShortObjectFromString(e, t);
      case i.ESTRING:
        return this.createEStringFromString(e, t);
      default:
        throw new Error("The datatype '" + e.name + "' is not a valid classifier");
    }
  }
  convertToString(e, t) {
    switch (e.classifierID) {
      case i.EBIG_DECIMAL:
        return this.convertEBigDecimalToString(e, t);
      case i.EBIG_INTEGER:
        return this.convertEBigIntegerToString(e, t);
      case i.EBOOLEAN:
        return this.convertEBooleanToString(e, t);
      case i.EBOOLEAN_OBJECT:
        return this.convertEBooleanObjectToString(e, t);
      case i.EBYTE:
        return this.convertEByteToString(e, t);
      case i.EBYTE_ARRAY:
        return this.convertEByteArrayToString(e, t);
      case i.EBYTE_OBJECT:
        return this.convertEByteObjectToString(e, t);
      case i.ECHAR:
        return this.convertECharToString(e, t);
      case i.ECHARACTER_OBJECT:
        return this.convertECharacterObjectToString(e, t);
      case i.EDATE:
        return this.convertEDateToString(e, t);
      case i.EDOUBLE:
        return this.convertEDoubleToString(e, t);
      case i.EDOUBLE_OBJECT:
        return this.convertEDoubleObjectToString(e, t);
      case i.EFLOAT:
        return this.convertEFloatToString(e, t);
      case i.EFLOAT_OBJECT:
        return this.convertEFloatObjectToString(e, t);
      case i.EINT:
        return this.convertEIntToString(e, t);
      case i.EINTEGER_OBJECT:
        return this.convertEIntegerObjectToString(e, t);
      case i.EJAVA_CLASS:
        return this.convertEJavaClassToString(e, t);
      case i.EJAVA_OBJECT:
        return this.convertEJavaObjectToString(e, t);
      case i.ELONG:
        return this.convertELongToString(e, t);
      case i.ELONG_OBJECT:
        return this.convertELongObjectToString(e, t);
      case i.ESHORT:
        return this.convertEShortToString(e, t);
      case i.ESHORT_OBJECT:
        return this.convertEShortObjectToString(e, t);
      case i.ESTRING:
        return this.convertEStringToString(e, t);
      default:
        throw new Error("The datatype '" + e.name + "' is not a valid classifier");
    }
  }
  createEBigDecimalFromString(e, t) {
    return Number(t);
  }
  convertEBigDecimalToString(e, t) {
    return t.toString();
  }
  createEBigIntegerFromString(e, t) {
    return Number(t);
  }
  convertEBigIntegerToString(e, t) {
    return t.toString();
  }
  createEBooleanFromString(e, t) {
    return t.toLowerCase() === "true";
  }
  convertEBooleanToString(e, t) {
    return t.toString();
  }
  createEBooleanObjectFromString(e, t) {
    return t.toLowerCase() === "true";
  }
  convertEBooleanObjectToString(e, t) {
    return t.toString();
  }
  createEByteFromString(e, t) {
    return t.length == 0 ? 0 : t.charCodeAt(0);
  }
  convertEByteToString(e, t) {
    return String.fromCharCode(t);
  }
  createEByteArrayFromString(e, t) {
    return new TextEncoder().encode(t);
  }
  convertEByteArrayToString(e, t) {
    return new TextDecoder().decode(t);
  }
  createEByteObjectFromString(e, t) {
    return Number(t);
  }
  convertEByteObjectToString(e, t) {
    return t.toString();
  }
  createECharFromString(e, t) {
    return Number(t);
  }
  convertECharToString(e, t) {
    return t.toString();
  }
  createECharacterObjectFromString(e, t) {
    return Number(t);
  }
  convertECharacterObjectToString(e, t) {
    return t.toString();
  }
  createEDateFromString(e, t) {
    return new Date(t);
  }
  convertEDateToString(e, t) {
    return t.toISOString();
  }
  createEDoubleFromString(e, t) {
    return Number(t);
  }
  convertEDoubleToString(e, t) {
    return t.toString();
  }
  createEDoubleObjectFromString(e, t) {
    return Number(t);
  }
  convertEDoubleObjectToString(e, t) {
    return t.toString();
  }
  createEFloatFromString(e, t) {
    return Number(t);
  }
  convertEFloatToString(e, t) {
    return t.toString();
  }
  createEFloatObjectFromString(e, t) {
    return Number(t);
  }
  convertEFloatObjectToString(e, t) {
    return t.toString();
  }
  createEIntFromString(e, t) {
    return Number(t);
  }
  convertEIntToString(e, t) {
    return t.toString();
  }
  createEIntegerObjectFromString(e, t) {
    return Number(t);
  }
  convertEIntegerObjectToString(e, t) {
    return t.toString();
  }
  createEJavaClassFromString(e, t) {
    throw new Error("NotImplementedException");
  }
  convertEJavaClassToString(e, t) {
    throw new Error("NotImplementedException");
  }
  createEJavaObjectFromString(e, t) {
    throw new Error("NotImplementedException");
  }
  convertEJavaObjectToString(e, t) {
    throw new Error("NotImplementedException");
  }
  createELongFromString(e, t) {
    return Number(t);
  }
  convertELongToString(e, t) {
    return t.toString();
  }
  createELongObjectFromString(e, t) {
    return Number(t);
  }
  convertELongObjectToString(e, t) {
    return t.toString();
  }
  createEShortFromString(e, t) {
    return Number(t);
  }
  convertEShortToString(e, t) {
    return t.toString();
  }
  createEShortObjectFromString(e, t) {
    return Number(t);
  }
  convertEShortObjectToString(e, t) {
    return t.toString();
  }
  createEStringFromString(e, t) {
    return t;
  }
  convertEStringToString(e, t) {
    return t;
  }
}
class Vt extends jt {
  static {
    this._instanceExt = null;
  }
  static getInstance() {
    return this._instanceExt || (this._instanceExt = new Vt()), this._instanceExt;
  }
  constructor() {
    super();
  }
}
const rs = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData";
class ys {
  constructor() {
    this._metaData = /* @__PURE__ */ new Map();
  }
  getENamedElementExtendedMetaData(e) {
    let t = this._metaData.get(e);
    return t || (ir(e) ? t = new is(this, e) : t = new Ds(this, e), this._metaData.set(e, t)), t;
  }
  getEStructuralFeatureExtentedMetaData(e) {
    let t = this._metaData.get(e);
    return t || (t = new is(this, e), this._metaData.set(e, t)), t;
  }
  getEPackageExtentedMetaData(e) {
    let t = this._metaData.get(e);
    return t || (t = new Rr(this, e), this._metaData.set(e, t)), t;
  }
  getType(e, t) {
    return this.getEPackageExtentedMetaData(e).getType(t);
  }
  getName(e) {
    return this.getENamedElementExtendedMetaData(e).getName();
  }
  getNamespace(e) {
    return this.getEStructuralFeatureExtentedMetaData(e).getNamespace();
  }
  getDocumentRoot(e) {
    let t = this.getType(e, "");
    return t || null;
  }
  getXMLNSPrefixMapFeature(e) {
    for (const t of e.eAllReferences)
      if (this.getName(t) == "xmlns:prefix")
        return t;
    return null;
  }
  getXSISchemaLocationMapFeature(e) {
    for (const t of e.eAllReferences)
      if (this.getName(t) == "xsi:schemaLocation")
        return t;
    return null;
  }
  basicGetName(e) {
    let t = e.getEAnnotation(rs);
    if (t) {
      let s = t.details.getValue("name");
      if (s !== void 0)
        return s;
    }
    return e.name;
  }
  basicGetNamespace(e) {
    let t = e.getEAnnotation(rs);
    if (t) {
      let s = t.details.getValue("namespace");
      if (s !== void 0)
        if (s === "##targetNamespace") {
          let r = e.eContainingClass?.ePackage?.nsURI;
          if (r !== void 0)
            return r;
        } else
          return s;
    }
    return "";
  }
}
class Ds {
  constructor(e, t) {
    this._emd = e, this._eElement = t;
  }
  getName() {
    return this._name || (this._name = this._emd.basicGetName(this._eElement)), this._name;
  }
}
class Rr {
  constructor(e, t) {
    this._emd = e, this._ePackage = t;
  }
  getType(e) {
    let t = this._nameToClassifierMap?.get(e);
    if (!t) {
      let s = this._ePackage.eClassifiers;
      if (!this._nameToClassifierMap || this._nameToClassifierMap.size != s.size()) {
        this._nameToClassifierMap = /* @__PURE__ */ new Map();
        for (const r of s) {
          let a = this._emd.getName(r);
          if (this._nameToClassifierMap.set(a, r), a == e) {
            t = r;
            break;
          }
        }
      }
    }
    return t;
  }
}
class is extends Ds {
  constructor(e, t) {
    super(e, t);
  }
  getNamespace() {
    return this._namespace || (this._namespace = this._emd.basicGetNamespace(this._eElement)), this._namespace;
  }
}
class gr {
  canHandle(e) {
    return e.scheme == "file" || !e.scheme && !e.host && !e.query;
  }
  createReadStream(e) {
    let t = Ye(e);
    return Z.existsSync(t) ? Z.createReadStream(t) : null;
  }
  createWriteStream(e) {
    let t = Ye(e);
    return Z.createWriteStream(t);
  }
  readSync(e) {
    let t = Ye(e);
    return Z.existsSync(t) ? Z.readFileSync(t) : null;
  }
  writeSync(e, t) {
    let s = Ye(e);
    Z.writeFileSync(s, t);
  }
}
class V {
  constructor(e, t, s, r) {
    this._message = e, this._location = t, this._line = s, this._column = r;
  }
  get name() {
    return "EDiagnostic";
  }
  get message() {
    return this._message;
  }
  get location() {
    return this._location;
  }
  get line() {
    return this._line;
  }
  get column() {
    return this._column;
  }
}
class Ir {
  constructor() {
    this._uriHandlers = new w([new gr()]), this._uriMap = /* @__PURE__ */ new Map();
  }
  getURIMap() {
    return this._uriMap;
  }
  createReadStream(e) {
    let t = this.normalize(e), s = this.getURIHandler(t);
    return s ? s.createReadStream(t) : null;
  }
  createWriteStream(e) {
    let t = this.normalize(e), s = this.getURIHandler(t);
    return s ? s.createWriteStream(t) : null;
  }
  readSync(e) {
    let t = this.normalize(e), s = this.getURIHandler(t);
    return s ? s.readSync(t) : null;
  }
  writeSync(e, t) {
    let s = this.normalize(e), r = this.getURIHandler(s);
    r && r.writeSync(s, t);
  }
  getURIHandler(e) {
    for (const t of this._uriHandlers)
      if (t.canHandle(e))
        return t;
    return null;
  }
  getURIHandlers() {
    return this._uriHandlers;
  }
  normalize(e) {
    let t = this.getURIFromMap(e);
    return e == t ? t : this.normalize(t);
  }
  getURIFromMap(e) {
    for (let [t, s] of this._uriMap) {
      let r = e.replacePrefix(t, s);
      if (r)
        return r;
    }
    return e;
  }
}
function mr() {
  return Wt.getInstance();
}
class _t extends me {
  constructor(e, t, s, r, a, o = -1) {
    super(s, r, a, o), this._notifier = e, this._featureID = t;
  }
  get notifier() {
    return this._notifier;
  }
  get feature() {
    return null;
  }
  get featureID() {
    return this._featureID;
  }
}
class Nr extends At {
  constructor(e) {
    super(), this._resource = e;
  }
  get notifier() {
    return this._resource;
  }
  get feature() {
    return null;
  }
  get featureID() {
    return Ve.RESOURCE__CONTENTS;
  }
  getUnResolvedList() {
    return this;
  }
  inverseAdd(e, t) {
    let s = e.eSetResource(this._resource, t);
    return this._resource.attached(e), s;
  }
  inverseRemove(e, t) {
    return this._resource.detached(e), e.eSetResource(null, t);
  }
  didAdd(e, t) {
    super.didAdd(e, t), e == this.size() - 1 && this.loaded();
  }
  didRemove(e, t) {
    super.didRemove(e, t), this.size() == 0 && this.unloaded();
  }
  didClear(e) {
    super.didClear(e), this.unloaded();
  }
  loaded() {
    if (!this._resource.isLoaded) {
      let e = this._resource.basicSetLoaded(!0, null);
      e && e.dispatch();
    }
  }
  unloaded() {
    if (this._resource.isLoaded) {
      let e = this._resource.basicSetLoaded(!1, null);
      e && e.dispatch();
    }
  }
}
class et extends Qs {
  constructor() {
    super(...arguments), this._uri = null, this._objectIDManager = null, this._isLoaded = !1, this._isLoading = !1, this._resourceSet = null, this._contents = null, this._errors = null, this._warnings = null;
  }
  static {
    this._defaultURIConverter = new Ir();
  }
  get eURI() {
    return this._uri;
  }
  set eURI(e) {
    let t = this._uri;
    this._uri = e, this.eNotificationRequired && this.eNotify(
      new _t(this, Ve.RESOURCE__URI, p.SET, t, e, -1)
    );
  }
  get eObjectIDManager() {
    return this._objectIDManager;
  }
  set eObjectIDManager(e) {
    this._objectIDManager = e;
  }
  get isLoaded() {
    return this._isLoaded;
  }
  get isLoading() {
    return this._isLoading;
  }
  eResourceSet() {
    return this._resourceSet;
  }
  eContents() {
    return this._contents || (this._contents = new Nr(this)), this._contents;
  }
  eAllContents() {
    return this.eAllContentsResolve(this, !0);
  }
  getEObject(e) {
    let t = e;
    if (e.length > 0) {
      if (e.charAt(0) == "/") {
        let s = e.split("/");
        return s = s.splice(1), this.getObjectByPath(s);
      } else if (e.charAt(e.length - 1) == "?") {
        let s = e.slice(0, -2).lastIndexOf("?");
        s != -1 && (t = e.slice(0, s));
      }
    }
    return this.getObjectByID(t);
  }
  getURIFragment(e) {
    let t = se.getEObjectID(e);
    if (t.length > 0)
      return t;
    {
      let s = e;
      if (s.eInternalResource() == this)
        return t = this.getIDForObject(e), t.length > 0 ? t : "/" + this.getURIFragmentRootSegment(e);
      {
        let r = [], a = !1;
        for (let o = s.eInternalContainer(); o != null; o = s.eInternalContainer())
          if (t = this.getIDForObject(e), t.length == 0 && r.unshift(
            o.eURIFragmentSegment(s.eContainingFeature(), s)
          ), s = o, o.eInternalResource() == this) {
            a = !0;
            break;
          }
        return a ? (t.length == 0 ? r.unshift(this.getURIFragmentRootSegment(s)) : r.unshift("?" + t), r.unshift(""), r.join("/")) : "/-1";
      }
    }
  }
  getErrors() {
    return this._errors || (this._errors = new Ie()), this._errors;
  }
  getWarnings() {
    return this._warnings || (this._warnings = new Ie()), this._warnings;
  }
  load(e) {
    if (!this._isLoaded) {
      let t = this.getURIConverter();
      if (t) {
        let s = t.createReadStream(this._uri);
        if (s)
          return this.loadFromStream(s, e);
      }
    }
    return Promise.resolve();
  }
  loadFromStream(e, t) {
    if (!this._isLoaded) {
      let r = this.getCodecRegistry().getCodec(this._uri);
      if (r) {
        let a = r.newDecoder(this, t);
        if (a) {
          this._isLoading = !0;
          let o = this.basicSetLoaded(!0, null);
          return this.doLoadFromStream(a, e).then(() => {
            o && o.dispatch(), this._isLoading = !1;
          });
        } else {
          let o = this.getErrors();
          return o.clear(), o.add(
            new V(
              "Unable to create decoder for '" + this._uri.toString() + "'",
              this._uri.toString(),
              0,
              0
            )
          ), Promise.resolve();
        }
      } else {
        let a = this.getErrors();
        return a.clear(), a.add(
          new V(
            "Unable to find codec for '" + this._uri.toString() + "'",
            this._uri.toString(),
            0,
            0
          )
        ), Promise.resolve();
      }
    }
    return Promise.resolve();
  }
  doLoadFromStream(e, t) {
    return new Promise((s, r) => {
      e.decodeAsync(t).then(() => s()).catch((a) => r(a));
    });
  }
  loadSync(e) {
    if (!this._isLoaded) {
      let t = this.getURIConverter();
      if (t) {
        let s = t.readSync(this._uri);
        s && this.loadFromBuffer(s, e);
      }
    }
  }
  loadFromString(e, t) {
    this.loadFromBuffer(Buffer.from(e), t);
  }
  loadFromBuffer(e, t) {
    if (!this._isLoaded) {
      let r = this.getCodecRegistry().getCodec(this._uri);
      if (r) {
        let a = r.newDecoder(this, t);
        if (a) {
          this._isLoading = !0;
          let o = this.basicSetLoaded(!0, null);
          this.doLoadFromBuffer(a, e), o && o.dispatch(), this._isLoading = !1;
        } else {
          let o = this.getErrors();
          o.clear(), o.add(
            new V(
              "Unable to create decoder for '" + this._uri.toString() + "'",
              this._uri.toString(),
              0,
              0
            )
          );
        }
      } else {
        let a = this.getErrors();
        a.clear(), a.add(
          new V(
            "Unable to find codec for '" + this._uri.toString() + "'",
            this._uri.toString(),
            0,
            0
          )
        );
      }
    }
  }
  doLoadFromBuffer(e, t) {
    e.decode(t);
  }
  unload() {
    if (this._isLoaded) {
      let e = this.basicSetLoaded(!1, null);
      this.doUnload(), e && e.dispatch();
    }
  }
  doUnload() {
    this._contents = null, this._errors = null, this._warnings = null, this._objectIDManager?.clear();
  }
  save(e) {
    let t = this.getURIConverter();
    if (t) {
      let s = t.createWriteStream(this._uri);
      if (s)
        return new Promise((r, a) => {
          this.saveToStream(s, e).then(() => r()).catch((o) => a(o)).finally(() => s.end());
        });
    }
    return Promise.reject();
  }
  saveToStream(e, t) {
    let r = this.getCodecRegistry().getCodec(this._uri);
    if (r) {
      let a = r.newEncoder(this, t);
      if (a)
        return this.doSaveToStream(a, e);
      {
        let o = this.getErrors();
        o.clear(), o.add(
          new V(
            "Unable to create decoder for '" + this._uri.toString() + "'",
            this._uri.toString(),
            0,
            0
          )
        );
      }
    } else {
      let a = this.getErrors();
      a.clear(), a.add(
        new V(
          "Unable to find codec for '" + this._uri.toString() + "'",
          this._uri.toString(),
          0,
          0
        )
      );
    }
    return Promise.reject();
  }
  saveSync(e) {
    let t = this.getURIConverter();
    t && t.writeSync(this._uri, this.saveToBuffer(e));
  }
  saveToString(e) {
    let t = this.saveToBuffer();
    return t ? t.toString() : "";
  }
  saveToBuffer(e) {
    let s = this.getCodecRegistry().getCodec(this._uri);
    if (s) {
      let r = s.newEncoder(this, e);
      if (r)
        return this.doSaveToBuffer(r);
      {
        let a = this.getErrors();
        a.clear(), a.add(
          new V(
            "Unable to create decoder for '" + this._uri.toString() + "'",
            this._uri.toString(),
            0,
            0
          )
        );
      }
    } else {
      let r = this.getErrors();
      r.clear(), r.add(
        new V(
          "Unable to find codec for '" + this._uri.toString() + "'",
          this._uri.toString(),
          0,
          0
        )
      );
    }
    return null;
  }
  doSaveToStream(e, t) {
    return new Promise((s, r) => {
      e.encodeAsync(this, t).then((a) => {
        s();
      }).catch((a) => r(a)).finally(() => t.end());
    });
  }
  doSaveToBuffer(e) {
    let t = e.encode(this);
    return t.isOk() ? Buffer.from(t.value) : null;
  }
  isAttachedDetachedRequired() {
    return this._objectIDManager != null;
  }
  attached(e) {
    if (this.isAttachedDetachedRequired()) {
      this.doAttached(e);
      for (const t of this.eAllContentsResolve(e, !1))
        this.doAttached(t);
    }
  }
  doAttached(e) {
    this._objectIDManager && this._objectIDManager.register(e);
  }
  detached(e) {
    if (this.isAttachedDetachedRequired()) {
      this.doDetached(e);
      for (const t of this.eAllContentsResolve(e, !1))
        this.doDetached(t);
    }
  }
  doDetached(e) {
    this._objectIDManager && this._objectIDManager.unRegister(e);
  }
  basicSetLoaded(e, t) {
    let s = t, r = this._isLoaded;
    return this._isLoaded = e, this.eNotificationRequired && (s || (s = new He()), s.add(
      new _t(
        this,
        Ve.RESOURCE__IS_LOADED,
        p.SET,
        r,
        this._isLoaded
      )
    )), s;
  }
  basicSetResourceSet(e, t) {
    let s = t, r = this._resourceSet;
    return r && (s = r.getResources().removeWithNotification(this, s)), this._resourceSet = e, this.eNotificationRequired && (s || (s = new He()), s.add(
      new _t(
        this,
        Ve.RESOURCE__RESOURCE_SET,
        p.SET,
        r,
        this._resourceSet
      )
    )), s;
  }
  eAllContentsResolve(e, t) {
    return new Rs(e, !1, function(s) {
      let r = s.eContents();
      return t || (r = r.getUnResolvedList()), r[Symbol.iterator]();
    });
  }
  getObjectByID(e) {
    if (this._objectIDManager) return this._objectIDManager.getEObject(e);
    for (const t of this.eAllContentsResolve(this, !1)) {
      let s = se.getEObjectID(t);
      if (e == s) return t;
    }
    return null;
  }
  getIDForObject(e) {
    let t = this._objectIDManager?.getID(e);
    return t != null ? String(t) : se.getEObjectID(e);
  }
  getObjectByPath(e) {
    let t = null;
    !e || e.length == 0 ? t = this.getObjectForRootSegment("") : t = this.getObjectForRootSegment(e[0]);
    for (let s = 1; s < e.length && t != null; s++)
      t = t.eObjectForFragmentSegment(e[s]);
    return t;
  }
  getObjectForRootSegment(e) {
    let t = 0;
    if (e.length > 0) {
      if (e.charAt(0) == "?") return this.getObjectByID(e.slice(1));
      t = parseInt(e);
    }
    return t >= 0 && t < this.eContents().size() ? this.eContents().get(t) : null;
  }
  getURIFragmentRootSegment(e) {
    let t = this.eContents();
    return t.size() > 1 ? t.indexOf(e).toString() : "";
  }
  getURIConverter() {
    return this._resourceSet ? this._resourceSet.getURIConverter() : et._defaultURIConverter;
  }
  getCodecRegistry() {
    return this._resourceSet ? this._resourceSet.getCodecRegistry() : mr();
  }
}
function ge(n) {
  var e = String(n);
  if (e === "[object Object]")
    try {
      e = JSON.stringify(n);
    } catch {
    }
  return e;
}
var Or = (
  /** @class */
  function() {
    function n() {
    }
    return n.prototype.isSome = function() {
      return !1;
    }, n.prototype.isNone = function() {
      return !0;
    }, n.prototype[Symbol.iterator] = function() {
      return {
        next: function() {
          return { done: !0, value: void 0 };
        }
      };
    }, n.prototype.unwrapOr = function(e) {
      return e;
    }, n.prototype.unwrapOrElse = function(e) {
      return e();
    }, n.prototype.expect = function(e) {
      throw new Error("".concat(e));
    }, n.prototype.unwrap = function() {
      throw new Error("Tried to unwrap None");
    }, n.prototype.map = function(e) {
      return this;
    }, n.prototype.mapOr = function(e, t) {
      return e;
    }, n.prototype.mapOrElse = function(e, t) {
      return e();
    }, n.prototype.or = function(e) {
      return e;
    }, n.prototype.orElse = function(e) {
      return e();
    }, n.prototype.andThen = function(e) {
      return this;
    }, n.prototype.toResult = function(e) {
      return z(e);
    }, n.prototype.toString = function() {
      return "None";
    }, n.prototype.toAsyncOption = function() {
      return new Jt(De);
    }, n;
  }()
), De = new Or();
Object.freeze(De);
var Fr = (
  /** @class */
  function() {
    function n(e) {
      if (!(this instanceof n))
        return new n(e);
      this.value = e;
    }
    return n.prototype.isSome = function() {
      return !0;
    }, n.prototype.isNone = function() {
      return !1;
    }, n.prototype[Symbol.iterator] = function() {
      return [this.value][Symbol.iterator]();
    }, n.prototype.unwrapOr = function(e) {
      return this.value;
    }, n.prototype.unwrapOrElse = function(e) {
      return this.value;
    }, n.prototype.expect = function(e) {
      return this.value;
    }, n.prototype.unwrap = function() {
      return this.value;
    }, n.prototype.map = function(e) {
      return be(e(this.value));
    }, n.prototype.mapOr = function(e, t) {
      return t(this.value);
    }, n.prototype.mapOrElse = function(e, t) {
      return t(this.value);
    }, n.prototype.or = function(e) {
      return this;
    }, n.prototype.orElse = function(e) {
      return this;
    }, n.prototype.andThen = function(e) {
      return e(this.value);
    }, n.prototype.toResult = function(e) {
      return J(this.value);
    }, n.prototype.toAsyncOption = function() {
      return new Jt(this);
    }, n.prototype.safeUnwrap = function() {
      return this.value;
    }, n.prototype.toString = function() {
      return "Some(".concat(ge(this.value), ")");
    }, n.EMPTY = new n(void 0), n;
  }()
), be = Fr, ns;
(function(n) {
  function e() {
    for (var r = [], a = 0; a < arguments.length; a++)
      r[a] = arguments[a];
    for (var o = [], u = 0, _ = r; u < _.length; u++) {
      var h = _[u];
      if (h.isSome())
        o.push(h.value);
      else
        return h;
    }
    return be(o);
  }
  n.all = e;
  function t() {
    for (var r = [], a = 0; a < arguments.length; a++)
      r[a] = arguments[a];
    for (var o = 0, u = r; o < u.length; o++) {
      var _ = u[o];
      if (_.isSome())
        return _;
    }
    return De;
  }
  n.any = t;
  function s(r) {
    return r instanceof be || r === De;
  }
  n.isOption = s;
})(ns || (ns = {}));
var Me = function(n, e, t) {
  if (t || arguments.length === 2) for (var s = 0, r = e.length, a; s < r; s++)
    (a || !(s in e)) && (a || (a = Array.prototype.slice.call(e, 0, s)), a[s] = e[s]);
  return n.concat(a || Array.prototype.slice.call(e));
}, yr = (
  /** @class */
  function() {
    function n(e) {
      if (!(this instanceof n))
        return new n(e);
      this.error = e;
      var t = new Error().stack.split(`
`).slice(2);
      t && t.length > 0 && t[0].includes("ErrImpl") && t.shift(), this._stack = t.join(`
`);
    }
    return n.prototype.isOk = function() {
      return !1;
    }, n.prototype.isErr = function() {
      return !0;
    }, n.prototype[Symbol.iterator] = function() {
      return {
        next: function() {
          return { done: !0, value: void 0 };
        }
      };
    }, n.prototype.else = function(e) {
      return e;
    }, n.prototype.unwrapOr = function(e) {
      return e;
    }, n.prototype.unwrapOrElse = function(e) {
      return e(this.error);
    }, n.prototype.expect = function(e) {
      throw new Error("".concat(e, " - Error: ").concat(ge(this.error), `
`).concat(this._stack), { cause: this.error });
    }, n.prototype.expectErr = function(e) {
      return this.error;
    }, n.prototype.unwrap = function() {
      throw new Error("Tried to unwrap Error: ".concat(ge(this.error), `
`).concat(this._stack), { cause: this.error });
    }, n.prototype.unwrapErr = function() {
      return this.error;
    }, n.prototype.map = function(e) {
      return this;
    }, n.prototype.andThen = function(e) {
      return this;
    }, n.prototype.mapErr = function(e) {
      return new z(e(this.error));
    }, n.prototype.mapOr = function(e, t) {
      return e;
    }, n.prototype.mapOrElse = function(e, t) {
      return e(this.error);
    }, n.prototype.or = function(e) {
      return e;
    }, n.prototype.orElse = function(e) {
      return e(this.error);
    }, n.prototype.toOption = function() {
      return De;
    }, n.prototype.toString = function() {
      return "Err(".concat(ge(this.error), ")");
    }, Object.defineProperty(n.prototype, "stack", {
      get: function() {
        return "".concat(this, `
`).concat(this._stack);
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.toAsyncResult = function() {
      return new zt(this);
    }, n.EMPTY = new n(void 0), n;
  }()
), z = yr, Dr = (
  /** @class */
  function() {
    function n(e) {
      if (!(this instanceof n))
        return new n(e);
      this.value = e;
    }
    return n.prototype.isOk = function() {
      return !0;
    }, n.prototype.isErr = function() {
      return !1;
    }, n.prototype[Symbol.iterator] = function() {
      return [this.value][Symbol.iterator]();
    }, n.prototype.else = function(e) {
      return this.value;
    }, n.prototype.unwrapOr = function(e) {
      return this.value;
    }, n.prototype.unwrapOrElse = function(e) {
      return this.value;
    }, n.prototype.expect = function(e) {
      return this.value;
    }, n.prototype.expectErr = function(e) {
      throw new Error(e);
    }, n.prototype.unwrap = function() {
      return this.value;
    }, n.prototype.unwrapErr = function() {
      throw new Error("Tried to unwrap Ok: ".concat(ge(this.value)), { cause: this.value });
    }, n.prototype.map = function(e) {
      return new J(e(this.value));
    }, n.prototype.andThen = function(e) {
      return e(this.value);
    }, n.prototype.mapErr = function(e) {
      return this;
    }, n.prototype.mapOr = function(e, t) {
      return t(this.value);
    }, n.prototype.mapOrElse = function(e, t) {
      return t(this.value);
    }, n.prototype.or = function(e) {
      return this;
    }, n.prototype.orElse = function(e) {
      return this;
    }, n.prototype.toOption = function() {
      return be(this.value);
    }, n.prototype.safeUnwrap = function() {
      return this.value;
    }, n.prototype.toString = function() {
      return "Ok(".concat(ge(this.value), ")");
    }, n.prototype.toAsyncResult = function() {
      return new zt(this);
    }, n.EMPTY = new n(void 0), n;
  }()
), J = Dr, as;
(function(n) {
  function e(u) {
    for (var _ = [], h = 0, d = u; h < d.length; h++) {
      var S = d[h];
      if (S.isOk())
        _.push(S.value);
      else
        return S;
    }
    return new J(_);
  }
  n.all = e;
  function t(u) {
    for (var _ = [], h = 0, d = u; h < d.length; h++) {
      var S = d[h];
      if (S.isOk())
        return S;
      _.push(S.error);
    }
    return new z(_);
  }
  n.any = t;
  function s(u) {
    try {
      return new J(u());
    } catch (_) {
      return new z(_);
    }
  }
  n.wrap = s;
  function r(u) {
    try {
      return u().then(function(_) {
        return new J(_);
      }).catch(function(_) {
        return new z(_);
      });
    } catch (_) {
      return Promise.resolve(new z(_));
    }
  }
  n.wrapAsync = r;
  function a(u) {
    return u.reduce(function(_, h) {
      var d = _[0], S = _[1];
      return h.isOk() ? [Me(Me([], d, !0), [h.value], !1), S] : [d, Me(Me([], S, !0), [h.error], !1)];
    }, [[], []]);
  }
  n.partition = a;
  function o(u) {
    return u instanceof z || u instanceof J;
  }
  n.isResult = o;
})(as || (as = {}));
var Be = function(n, e, t, s) {
  function r(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function u(d) {
      try {
        h(s.next(d));
      } catch (S) {
        o(S);
      }
    }
    function _(d) {
      try {
        h(s.throw(d));
      } catch (S) {
        o(S);
      }
    }
    function h(d) {
      d.done ? a(d.value) : r(d.value).then(u, _);
    }
    h((s = s.apply(n, e || [])).next());
  });
}, Ge = function(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, s, r, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(h) {
    return function(d) {
      return _([h, d]);
    };
  }
  function _(h) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, h[0] && (t = 0)), t; ) try {
      if (s = 1, r && (a = h[0] & 2 ? r.return : h[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, h[1])).done) return a;
      switch (r = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
        case 0:
        case 1:
          a = h;
          break;
        case 4:
          return t.label++, { value: h[1], done: !1 };
        case 5:
          t.label++, r = h[1], h = [0];
          continue;
        case 7:
          h = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            t = 0;
            continue;
          }
          if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
            t.label = h[1];
            break;
          }
          if (h[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = h;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(h);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      h = e.call(n, t);
    } catch (d) {
      h = [6, d], r = 0;
    } finally {
      s = a = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}, zt = (
  /** @class */
  function() {
    function n(e) {
      this.promise = Promise.resolve(e);
    }
    return n.prototype.andThen = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return Be(t, void 0, void 0, function() {
          var r;
          return Ge(this, function(a) {
            return s.isErr() ? [2, s] : (r = e(s.value), [2, r instanceof n ? r.promise : r]);
          });
        });
      });
    }, n.prototype.map = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return Be(t, void 0, void 0, function() {
          var r;
          return Ge(this, function(a) {
            switch (a.label) {
              case 0:
                return s.isErr() ? [2, s] : (r = J, [4, e(s.value)]);
              case 1:
                return [2, r.apply(void 0, [a.sent()])];
            }
          });
        });
      });
    }, n.prototype.mapErr = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return Be(t, void 0, void 0, function() {
          var r;
          return Ge(this, function(a) {
            switch (a.label) {
              case 0:
                return s.isOk() ? [2, s] : (r = z, [4, e(s.error)]);
              case 1:
                return [2, r.apply(void 0, [a.sent()])];
            }
          });
        });
      });
    }, n.prototype.or = function(e) {
      return this.orElse(function() {
        return e;
      });
    }, n.prototype.orElse = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return Be(t, void 0, void 0, function() {
          var r;
          return Ge(this, function(a) {
            return s.isOk() ? [2, s] : (r = e(s.error), [2, r instanceof n ? r.promise : r]);
          });
        });
      });
    }, n.prototype.toOption = function() {
      return new Jt(this.promise.then(function(e) {
        return e.toOption();
      }));
    }, n.prototype.then = function(e, t) {
      return this.promise.then(e, t);
    }, n.prototype.thenInternal = function(e) {
      return new n(this.promise.then(e));
    }, n;
  }()
), ft = function(n, e, t, s) {
  function r(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function u(d) {
      try {
        h(s.next(d));
      } catch (S) {
        o(S);
      }
    }
    function _(d) {
      try {
        h(s.throw(d));
      } catch (S) {
        o(S);
      }
    }
    function h(d) {
      d.done ? a(d.value) : r(d.value).then(u, _);
    }
    h((s = s.apply(n, e || [])).next());
  });
}, Tt = function(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, s, r, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(h) {
    return function(d) {
      return _([h, d]);
    };
  }
  function _(h) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, h[0] && (t = 0)), t; ) try {
      if (s = 1, r && (a = h[0] & 2 ? r.return : h[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, h[1])).done) return a;
      switch (r = 0, a && (h = [h[0] & 2, a.value]), h[0]) {
        case 0:
        case 1:
          a = h;
          break;
        case 4:
          return t.label++, { value: h[1], done: !1 };
        case 5:
          t.label++, r = h[1], h = [0];
          continue;
        case 7:
          h = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            t = 0;
            continue;
          }
          if (h[0] === 3 && (!a || h[1] > a[0] && h[1] < a[3])) {
            t.label = h[1];
            break;
          }
          if (h[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = h;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(h);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      h = e.call(n, t);
    } catch (d) {
      h = [6, d], r = 0;
    } finally {
      s = a = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}, Jt = (
  /** @class */
  function() {
    function n(e) {
      this.promise = Promise.resolve(e);
    }
    return n.prototype.andThen = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return ft(t, void 0, void 0, function() {
          var r;
          return Tt(this, function(a) {
            return s.isNone() ? [2, s] : (r = e(s.value), [2, r instanceof n ? r.promise : r]);
          });
        });
      });
    }, n.prototype.map = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return ft(t, void 0, void 0, function() {
          var r;
          return Tt(this, function(a) {
            switch (a.label) {
              case 0:
                return s.isNone() ? [2, s] : (r = be, [4, e(s.value)]);
              case 1:
                return [2, r.apply(void 0, [a.sent()])];
            }
          });
        });
      });
    }, n.prototype.or = function(e) {
      return this.orElse(function() {
        return e;
      });
    }, n.prototype.orElse = function(e) {
      var t = this;
      return this.thenInternal(function(s) {
        return ft(t, void 0, void 0, function() {
          var r;
          return Tt(this, function(a) {
            return s.isSome() ? [2, s] : (r = e(), [2, r instanceof n ? r.promise : r]);
          });
        });
      });
    }, n.prototype.toResult = function(e) {
      return new zt(this.promise.then(function(t) {
        return t.toResult(e);
      }));
    }, n.prototype.then = function(e, t) {
      return this.promise.then(e, t);
    }, n.prototype.thenInternal = function(e) {
      return new n(this.promise.then(e));
    }, n;
  }()
), N = /* @__PURE__ */ ((n) => (n[n.bfkObjectContainer = 0] = "bfkObjectContainer", n[n.bfkObjectContainerProxy = 1] = "bfkObjectContainerProxy", n[n.bfkObject = 2] = "bfkObject", n[n.bfkObjectProxy = 3] = "bfkObjectProxy", n[n.bfkObjectList = 4] = "bfkObjectList", n[n.bfkObjectListProxy = 5] = "bfkObjectListProxy", n[n.bfkObjectContainment = 6] = "bfkObjectContainment", n[n.bfkObjectContainmentProxy = 7] = "bfkObjectContainmentProxy", n[n.bfkObjectContainmentList = 8] = "bfkObjectContainmentList", n[n.bfkObjectContainmentListProxy = 9] = "bfkObjectContainmentListProxy", n[n.bfkNumber = 10] = "bfkNumber", n[n.bfkBool = 11] = "bfkBool", n[n.bfkString = 12] = "bfkString", n[n.bfkByteArray = 13] = "bfkByteArray", n[n.bfkData = 14] = "bfkData", n[n.bfkDataList = 15] = "bfkDataList", n[n.bfkEnum = 16] = "bfkEnum", n[n.bfkDate = 17] = "bfkDate", n))(N || {});
function bs(n) {
  if (H(n))
    return n.isContainment ? n.isResolveProxies ? n.isMany ? 9 : 7 : n.isMany ? 8 : 6 : n.isContainer ? n.isResolveProxies ? 1 : 0 : n.isResolveProxies ? n.isMany ? 5 : 3 : n.isMany ? 4 : 2;
  if (de(n)) {
    if (n.isMany)
      return 15;
    {
      let e = n.eAttributeType;
      if (fe(e)) return 16;
      switch (e.instanceTypeName) {
        case "number":
        case "java.lang.Double":
        case "java.lang.Float":
        case "java.lang.Integer":
        case "java.lang.Long":
        case "java.lang.Short":
        case "java.math.BigInteger":
        case "double":
        case "float":
        case "int":
        case "int64":
        case "int32":
        case "int16":
        case "short":
        case "long":
          return 10;
        case "bool":
        case "boolean":
        case "java.lang.Boolean":
          return 11;
        case "string":
        case "java.lang.String":
          return 12;
        case "Uint8Array":
        case "java.util.ByteArray":
          return 13;
        case "Date":
        case "java.util.Date":
          return 17;
      }
      return 14;
    }
  }
  return null;
}
function br(n, e, t) {
  const s = t / 4294967296, r = t;
  n.setUint32(e, s), n.setUint32(e + 4, r);
}
function Ls(n, e, t) {
  const s = Math.floor(t / 4294967296), r = t;
  n.setUint32(e, s), n.setUint32(e + 4, r);
}
function Lr(n, e) {
  const t = n.getInt32(e), s = n.getUint32(e + 4);
  return t * 4294967296 + s;
}
const Ur = -1, vr = 4294967296 - 1, Pr = 17179869184 - 1;
function wr({ sec: n, nsec: e }) {
  if (n >= 0 && e >= 0 && n <= Pr)
    if (e === 0 && n <= vr) {
      const t = new Uint8Array(4);
      return new DataView(t.buffer).setUint32(0, n), t;
    } else {
      const t = n / 4294967296, s = n & 4294967295, r = new Uint8Array(8), a = new DataView(r.buffer);
      return a.setUint32(0, e << 2 | t & 3), a.setUint32(4, s), r;
    }
  else {
    const t = new Uint8Array(12), s = new DataView(t.buffer);
    return s.setUint32(0, e), Ls(s, 4, n), t;
  }
}
function Mr(n) {
  const e = n.getTime(), t = Math.floor(e / 1e3), s = (e - t * 1e3) * 1e6, r = Math.floor(s / 1e9);
  return {
    sec: t + r,
    nsec: s - r * 1e9
  };
}
function Br(n) {
  if (n instanceof Date) {
    const e = Mr(n);
    return wr(e);
  } else
    return null;
}
function Gr(n) {
  const e = new DataView(n.buffer, n.byteOffset, n.byteLength);
  switch (n.byteLength) {
    case 4:
      return { sec: e.getUint32(0), nsec: 0 };
    case 8: {
      const t = e.getUint32(0), s = e.getUint32(4), r = (t & 3) * 4294967296 + s, a = t >>> 2;
      return { sec: r, nsec: a };
    }
    case 12: {
      const t = Lr(e, 4), s = e.getUint32(0);
      return { sec: t, nsec: s };
    }
    default:
      throw new Error(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${n.length}`);
  }
}
function xr(n) {
  const e = Gr(n);
  return new Date(e.sec * 1e3 + e.nsec / 1e6);
}
const kr = {
  type: Ur,
  encode: Br,
  decode: xr
}, Yr = 1, jr = {
  type: Yr,
  encode: Vr,
  decode: zr
};
function Vr(n) {
  return n instanceof $e.Ulid.type ? n.bytes : null;
}
function zr(n) {
  return $e.Ulid.construct(n);
}
const Jr = 2, qr = {
  type: Jr,
  encode: Kr,
  decode: Wr
};
function Kr(n) {
  return n instanceof $e.Uuid4.type ? n.bytes : null;
}
function Wr(n) {
  return $e.Uuid4.construct(n);
}
class xe {
  constructor(e, t) {
    this.type = e, this.data = t;
  }
}
class tt {
  constructor() {
    this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(kr), this.register(jr), this.register(qr);
  }
  static {
    this.defaultCodec = new tt();
  }
  register({
    type: e,
    encode: t,
    decode: s
  }) {
    if (e >= 0)
      this.encoders[e] = t, this.decoders[e] = s;
    else {
      const r = 1 + e;
      this.builtInEncoders[r] = t, this.builtInDecoders[r] = s;
    }
  }
  tryToEncode(e) {
    for (let t = 0; t < this.builtInEncoders.length; t++) {
      const s = this.builtInEncoders[t];
      if (s != null) {
        const r = s(e);
        if (r != null) {
          const a = -1 - t;
          return new xe(a, r);
        }
      }
    }
    for (let t = 0; t < this.encoders.length; t++) {
      const s = this.encoders[t];
      if (s != null) {
        const r = s(e);
        if (r != null) {
          const a = t;
          return new xe(a, r);
        }
      }
    }
    return e instanceof xe ? e : null;
  }
  decode(e, t) {
    const s = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
    return s ? s(e, t) : new xe(t, e);
  }
}
function qt(n) {
  return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n instanceof ArrayBuffer ? new Uint8Array(n) : Uint8Array.from(n);
}
function Xr(n) {
  if (n instanceof ArrayBuffer)
    return new DataView(n);
  const e = qt(n);
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
const Hr = 127, Us = 224, Ke = 192, St = 194, pt = 195, ls = 202, Rt = 203, gt = 204, It = 205, mt = 206, Nt = 207, Ot = 208, Ft = 209, yt = 210, Dt = 211, Qr = 160, $r = 191, Zr = 31, os = 217, Es = 218, us = 219, cs = 196, hs = 197, _s = 198, bt = 212, Lt = 213, Ut = 214, vt = 215, Pt = 216, wt = 199, Mt = 200, Bt = 201;
function fs(n) {
  return n <= Hr || n >= Us;
}
function Ts(n) {
  return n >= Qr && n <= $r;
}
const vs = 4294967295, st = (typeof process > "u" || process?.env?.TEXT_ENCODING !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
function ei(n) {
  const e = n.length;
  let t = 0, s = 0;
  for (; s < e; ) {
    let r = n.charCodeAt(s++);
    if (r & 4294967168)
      if (!(r & 4294965248))
        t += 2;
      else {
        if (r >= 55296 && r <= 56319 && s < e) {
          const a = n.charCodeAt(s);
          (a & 64512) === 56320 && (++s, r = ((r & 1023) << 10) + (a & 1023) + 65536);
        }
        r & 4294901760 ? t += 4 : t += 3;
      }
    else {
      t++;
      continue;
    }
  }
  return t;
}
function ti(n, e, t) {
  const s = n.length;
  let r = t, a = 0;
  for (; a < s; ) {
    let o = n.charCodeAt(a++);
    if (o & 4294967168)
      if (!(o & 4294965248))
        e[r++] = o >> 6 & 31 | 192;
      else {
        if (o >= 55296 && o <= 56319 && a < s) {
          const u = n.charCodeAt(a);
          (u & 64512) === 56320 && (++a, o = ((o & 1023) << 10) + (u & 1023) + 65536);
        }
        o & 4294901760 ? (e[r++] = o >> 18 & 7 | 240, e[r++] = o >> 12 & 63 | 128, e[r++] = o >> 6 & 63 | 128) : (e[r++] = o >> 12 & 15 | 224, e[r++] = o >> 6 & 63 | 128);
      }
    else {
      e[r++] = o;
      continue;
    }
    e[r++] = o & 63 | 128;
  }
}
const Kt = st ? new TextEncoder() : void 0, si = st ? typeof process < "u" && process?.env?.TEXT_ENCODING !== "force" ? 200 : 0 : vs;
function ri(n, e, t) {
  e.set(Kt.encode(n), t);
}
function ii(n, e, t) {
  Kt.encodeInto(n, e.subarray(t));
}
const ni = Kt?.encodeInto ? ii : ri, ai = 4096;
function li(n, e, t) {
  let s = e;
  const r = s + t, a = [];
  let o = "";
  for (; s < r; ) {
    const u = n[s++];
    if (!(u & 128))
      a.push(u);
    else if ((u & 224) === 192) {
      const _ = n[s++] & 63;
      a.push((u & 31) << 6 | _);
    } else if ((u & 240) === 224) {
      const _ = n[s++] & 63, h = n[s++] & 63;
      a.push((u & 31) << 12 | _ << 6 | h);
    } else if ((u & 248) === 240) {
      const _ = n[s++] & 63, h = n[s++] & 63, d = n[s++] & 63;
      let S = (u & 7) << 18 | _ << 12 | h << 6 | d;
      S > 65535 && (S -= 65536, a.push(S >>> 10 & 1023 | 55296), S = 56320 | S & 1023), a.push(S);
    } else
      a.push(u);
    a.length >= ai && (o += String.fromCharCode(...a), a.length = 0);
  }
  return a.length > 0 && (o += String.fromCharCode(...a)), o;
}
const oi = st ? new TextDecoder() : null, Ei = st ? typeof process < "u" && process?.env?.TEXT_DECODER !== "force" ? 200 : 0 : vs;
function ui(n, e, t) {
  const s = n.subarray(e, e + t);
  return oi.decode(s);
}
function ci(n, e, t) {
  return t > Ei ? ui(n, e, t) : li(n, e, t);
}
function hi(n, e, t) {
  n.length > si ? ni(n, e, t) : ti(n, e, t);
}
function ke(n) {
  return `${n < 0 ? "-" : ""}0x${Math.abs(n).toString(16).padStart(2, "0")}`;
}
function _i(n, e) {
  var t = n & 1 << e - 1, s = 1 << e, r = -s, a = s - 1;
  return t ? r + (n & a) : n;
}
class fi {
  constructor(e, t) {
    this._extensionCodec = t?.extensionCodec ?? tt.defaultCodec, this._bytes = qt(e), this._view = Xr(this._bytes), this._pos = 0;
  }
  decode() {
    let e = this.readU8();
    if (fs(e))
      return e;
    if (Ts(e))
      return this.string(e);
    switch (e) {
      case Ke:
        return null;
      case St:
      case pt:
        return this.bool(e);
      case ls:
      case Rt:
      case gt:
      case It:
      case mt:
      case Nt:
      case Ot:
      case Ft:
      case yt:
      case Dt:
        return this.number(e);
      case cs:
      case hs:
      case _s:
        return this.bytes(e);
      case os:
      case Es:
      case us:
        return this.string(e);
      case bt:
      case Lt:
      case Ut:
      case vt:
      case Pt:
      case wt:
      case Mt:
      case Bt:
        return this.decodeExt(e);
    }
    throw new Error(`Unrecognized type byte: ${ke(e)} decoding any`);
  }
  decodeBoolean() {
    let e = this.readU8();
    return this.bool(e);
  }
  bool(e) {
    switch (e) {
      case pt:
        return !0;
      case St:
        return !1;
    }
    throw new Error(`Unrecognized type byte: ${ke(e)}`);
  }
  decodeNumber() {
    let e = this.readU8();
    return this.number(e);
  }
  number(e) {
    if (e === Ke)
      return 0;
    if (fs(e))
      return _i(e, 8);
    switch (e) {
      case gt:
        return this.readU8();
      case Ot:
        return this.readI8();
      case It:
        return this.readU16();
      case Ft:
        return this.readI16();
      case mt:
        return this.readU32();
      case yt:
        return this.readI32();
      case Nt:
        return this.readU64();
      case Dt:
        return this.readI64();
      case ls:
        return this.readF32();
      case Rt:
        return this.readF64();
    }
    throw new Error(`Unrecognized type byte: ${ke(e)}`);
  }
  decodeString() {
    let e = this.readU8();
    return this.string(e);
  }
  string(e) {
    let t = this.bytesLen(e), s = "";
    return t > 0 && (s = ci(this._bytes, this._pos, t)), this._pos += t, s;
  }
  decodeBinary() {
    let e = this.readU8();
    return this.bytes(e);
  }
  bytes(e) {
    let t = this.bytesLen(e), s = this._bytes.subarray(this._pos, this._pos + t);
    return this._pos += t, s;
  }
  bytesLen(e) {
    if (e == Ke)
      return -1;
    if (Ts(e))
      return e & Zr;
    switch (e) {
      case os:
      case cs:
        return this.readU8();
      case Es:
      case hs:
        return this.readU16();
      case us:
      case _s:
        return this.readU32();
    }
    throw new Error(`invalid code type byte: ${ke(e)} decoding string/bytes length`);
  }
  decodeExt(e) {
    let t = this.parseExtLen(e), s = this.readI8();
    const r = this._bytes.subarray(this._pos, this._pos + t);
    return this._pos += t, this._extensionCodec.decode(r, s);
  }
  parseExtLen(e) {
    switch (e) {
      case bt:
        return 1;
      case Lt:
        return 2;
      case Ut:
        return 4;
      case vt:
        return 8;
      case Pt:
        return 16;
      case wt:
        return this.readU8();
      case Mt:
        return this.readU16();
      case Bt:
        return this.readU32();
      default:
        return 0;
    }
  }
  readU8() {
    const e = this._view.getUint8(this._pos);
    return this._pos++, e;
  }
  readI8() {
    const e = this._view.getInt8(this._pos);
    return this._pos++, e;
  }
  readU16() {
    const e = this._view.getUint16(this._pos);
    return this._pos += 2, e;
  }
  readI16() {
    const e = this._view.getInt16(this._pos);
    return this._pos += 2, e;
  }
  readU32() {
    const e = this._view.getUint32(this._pos);
    return this._pos += 4, e;
  }
  readI32() {
    const e = this._view.getInt32(this._pos);
    return this._pos += 4, e;
  }
  readU64() {
    const e = this._view.getUint32(this._pos), t = this._view.getUint32(this._pos + 4), s = e * 4294967296 + t;
    return this._pos += 8, s;
  }
  readI64() {
    const e = this._view.getInt32(this._pos), t = this._view.getUint32(this._pos + 4), s = e * 4294967296 + t;
    return this._pos += 8, s;
  }
  readF32() {
    const e = this._view.getFloat32(this._pos);
    return this._pos += 4, e;
  }
  readF64() {
    const e = this._view.getFloat64(this._pos);
    return this._pos += 8, e;
  }
}
function Ti(n, e) {
  return n.byteLength !== e.byteLength ? !1 : n.every((t, s) => t === e[s]);
}
const di = 0, Ai = Uint8Array.from([137, 101, 109, 102, 10, 13, 26, 10]);
let Ci = class {
}, Si = class {
}, pi = class {
};
class Ri {
  constructor(e, t) {
    this._objects = [], this._isResolveProxies = !1, this._packageData = [], this._uris = [], this._enumLiterals = [], this._resource = e, this._baseURI = this._resource.eURI;
  }
  decode(e) {
    try {
      this.setBuffer(e), this.decodeSignature(), this.decodeVersion();
      let t = this._decoder.decodeNumber(), s = [];
      for (let r = 0; r < t; r++)
        s.push(this.decodeEObject());
      return this._resource.eContents().addAll(new w(s)), J(this._resource);
    } catch (t) {
      switch (t.constructor) {
        case Error: {
          let s = t;
          this._resource.getErrors().add(new V(s.message, this._resource.eURI.toString(), -1, -1));
        }
      }
      return z(t);
    }
  }
  decodeObject(e) {
    try {
      return this.setBuffer(e), this.decodeSignature(), this.decodeVersion(), J(this.decodeEObject());
    } catch (t) {
      return z(t);
    }
  }
  decodeAsync(e) {
    let t = this, s = this._resource;
    return e.toArray().then(function(r) {
      t.setBuffer(Buffer.concat(r)), t.decodeSignature(), t.decodeVersion();
      let a = t.decodeNumber(), o = [];
      for (let u = 0; u < a; u++)
        o.push(t.decodeEObject());
      return s.eContents().addAll(new w(o)), s;
    });
  }
  decodeObjectAsync(e) {
    let t = this;
    return e.toArray().then(function(s) {
      return t.setBuffer(Buffer.concat(s)), t.decodeSignature(), t.decodeVersion(), t.decodeEObject();
    });
  }
  setBuffer(e) {
    this._decoder = new fi(e);
  }
  decodeSignature() {
    let e = this.decodeBytes();
    if (!Ti(e, Ai))
      throw Error("Invalid signature for a binary EMF serialization");
  }
  decodeVersion() {
    if (this.decodeNumber() != di)
      throw Error("Invalid version for a binary EMF serialization");
  }
  decodeEObject() {
    let e = this.decodeNumber();
    if (e == -1)
      return null;
    if (this._objects.length <= e) {
      var t;
      let s = this.decodeClass(), r = s.eFactory.create(s.eClass);
      t = r;
      let a = this.decodeNumber() - 1;
      if (a == -3) {
        let o = this.decodeURI();
        r.eSetProxyURI(o), this._isResolveProxies ? (t = se.resolveInResource(r, this._resource), this._objects.push(t)) : this._objects.push(r), a = this.decodeNumber() - 1;
      } else
        this._objects.push(r);
      if (a == -2) {
        let o = this.decodeAny(), u = this._resource.eObjectIDManager;
        u && u.setID(r, o), a = this.decodeNumber() - 1;
      }
      for (; a != -1; a = this.decodeNumber() - 1) {
        let o = s.featureData[a];
        o || (o = this.newFeatureData(s, a), s.featureData[a] = o), this.decodeFeatureValue(r, o);
      }
      return t;
    } else
      return this._objects[e];
  }
  decodeEObjects(e) {
    let t = this.decodeNumber(), s = [];
    for (let a = 0; a < t; a++)
      s.push(this.decodeEObject());
    let r = e.size();
    if (r == 0)
      e.addAll(new w(s));
    else {
      let a = new Array(r), o = 0, u = [...e.toArray()];
      e: for (let _ = 0; _ < t; _++) {
        let h = s[_], d = o;
        for (let S = 0; S < r; S++) {
          let O = u[S];
          if (O == h) {
            o != d && e.moveTo(d, o), a[o] = _, o++, u[S] = null;
            continue e;
          } else O && d++;
        }
        s[_ - o] = h;
      }
      t -= r, e.addAll(new w(s));
      for (let _ = 0; _ < r; _++) {
        let h = a[_], d = t + _;
        h != d && e.moveTo(d, h);
      }
    }
  }
  decodeClass() {
    let e = this.decodePackage(), t = this.decodeNumber(), s = e.eClassData[t];
    return s || (s = this.newClassData(e), e.eClassData[t] = s), s;
  }
  decodePackage() {
    let e = this.decodeNumber();
    if (this._packageData.length <= e) {
      let t = this.decodeString(), s = this.decodeURI(), r = this._resource.eResourceSet(), o = (r ? r.getPackageRegistry() : Ze()).getPackage(t);
      if (!o) {
        let _ = r.getEObject(s, !0);
        qe(_) && (o = _);
      }
      let u = this.newPackageData(o);
      return this._packageData.push(u), u;
    } else
      return this._packageData[e];
  }
  decodeFeatureValue(e, t) {
    switch (t.featureKind) {
      case N.bfkObjectContainer:
      case N.bfkObjectContainerProxy:
      case N.bfkObject:
      case N.bfkObjectProxy:
      case N.bfkObjectContainment:
      case N.bfkObjectContainmentProxy:
        e.eSetFromID(t.featureID, this.decodeEObject());
        break;
      case N.bfkObjectList:
      case N.bfkObjectListProxy:
      case N.bfkObjectContainmentList:
      case N.bfkObjectContainmentListProxy: {
        let r = e.eGetFromID(t.featureID, !1, !1);
        this.decodeEObjects(r);
        break;
      }
      case N.bfkData: {
        let r = this.decodeString(), a = t.eFactory.createFromString(t.eDataType, r);
        e.eSetFromID(t.featureID, a);
        break;
      }
      case N.bfkDataList: {
        let r = this.decodeNumber(), a = [];
        for (let u = 0; u < r; u++) {
          let _ = this.decodeString(), h = t.eFactory.createFromString(t.eDataType, _);
          a.push(h);
        }
        e.eGetResolve(t.eFeature, !1).addAll(new w(a));
        break;
      }
      case N.bfkEnum: {
        var s;
        let r = this.decodeNumber();
        this._enumLiterals.length <= r ? (s = this.decodeString(), this._enumLiterals.push(s)) : s = this._enumLiterals[r];
        let a = t.eFactory.createFromString(t.eDataType, s);
        e.eSetFromID(t.featureID, a);
        break;
      }
      case N.bfkDate:
        e.eSetFromID(t.featureID, this.decodeDate());
        break;
      case N.bfkNumber:
        e.eSetFromID(t.featureID, this.decodeNumber());
        break;
      case N.bfkBool:
        e.eSetFromID(t.featureID, this.decodeBoolean());
        break;
      case N.bfkString:
        e.eSetFromID(t.featureID, this.decodeString());
        break;
      case N.bfkByteArray:
        e.eSetFromID(t.featureID, this.decodeBytes());
        break;
    }
  }
  newClassData(e) {
    let t = this.decodeString(), s = e.ePackage, r = s.getEClassifier(t);
    if (Ee(r)) {
      let a = new Si();
      return a.eClass = r, a.eFactory = s.eFactoryInstance, a.featureData = new Array(r.getFeatureCount()), a;
    }
    throw new Error(`Unable to find class ${t} in package  ${s.nsURI}`);
  }
  newPackageData(e) {
    let t = new Ci();
    return t.ePackage = e, t.eClassData = new Array(e.eClassifiers.size()), t;
  }
  newFeatureData(e, t) {
    let s = this.decodeString(), r = e.eClass.getEStructuralFeatureFromName(s);
    if (!r) throw new Error(`Unable to find feature ${s} in ${e.eClass.name} EClass`);
    let a = new pi();
    return a.eFeature = r, a.featureID = t, a.featureKind = bs(r), de(r) && (a.eDataType = r.eAttributeType, a.eFactory = a.eDataType.ePackage.eFactoryInstance), a;
  }
  decodeURI() {
    let e = this.decodeNumber();
    if (e == -1) return null;
    var t;
    if (this._uris.length <= e) {
      let s = this.decodeString();
      s == "" ? t = this._baseURI : t = this.resolveURI(new M(s)), this._uris.push(t);
    } else
      t = this._uris[e];
    return new M(t.toString() + "#" + this.decodeString());
  }
  resolveURI(e) {
    return this._baseURI ? this._baseURI.resolve(e) : e;
  }
  decodeAny() {
    return this._decoder.decode();
  }
  decodeBoolean() {
    return this._decoder.decodeBoolean();
  }
  decodeNumber() {
    return this._decoder.decodeNumber();
  }
  decodeString() {
    return this._decoder.decodeString();
  }
  decodeBytes() {
    return this._decoder.decodeBinary();
  }
  decodeDate() {
    return this._decoder.decode();
  }
}
const gi = 2048;
class Ii {
  constructor(e) {
    this._extensionCodec = e?.extensionCodec ?? tt.defaultCodec, this._initialBufferSize = e?.initialBufferSize ?? gi, this._pos = 0, this._view = new DataView(new ArrayBuffer(this._initialBufferSize)), this._bytes = new Uint8Array(this._view.buffer);
  }
  bytes() {
    return this._bytes.subarray(0, this._pos);
  }
  encode(e) {
    e == null ? this.encodeNil() : typeof e == "boolean" ? this.encodeBoolean(e) : typeof e == "number" ? this.encodeNumber(e) : typeof e == "string" ? this.encodeString(e) : this.encodeObject(e);
  }
  encodeNil() {
    this.writeU8(Ke);
  }
  encodeBoolean(e) {
    e === !1 ? this.writeU8(St) : this.writeU8(pt);
  }
  encodeNumber(e) {
    Number.isSafeInteger(e) ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(gt), this.writeU8(e)) : e < 65536 ? (this.writeU8(It), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(mt), this.writeU32(e)) : (this.writeU8(Nt), this.writeU64(e)) : e >= -32 ? this.writeU8(Us | e + 32) : e >= -128 ? (this.writeU8(Ot), this.writeI8(e)) : e >= -32768 ? (this.writeU8(Ft), this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(yt), this.writeI32(e)) : (this.writeU8(Dt), this.writeI64(e)) : (this.writeU8(Rt), this.writeF64(e));
  }
  encodeBinary(e) {
    const t = e.byteLength;
    if (t < 256)
      this.writeU8(196), this.writeU8(t);
    else if (t < 65536)
      this.writeU8(197), this.writeU16(t);
    else if (t < 4294967296)
      this.writeU8(198), this.writeU32(t);
    else
      throw new Error(`Too large binary: ${t}`);
    const s = qt(e);
    this.writeU8a(s);
  }
  encodeString(e) {
    const s = ei(e);
    this.ensureBufferSizeToWrite(5 + s), this.writeStringHeader(s), hi(e, this._bytes, this._pos), this._pos += s;
  }
  encodeObject(e) {
    const t = this._extensionCodec.tryToEncode(e);
    if (t != null)
      this.encodeExtension(t);
    else if (ArrayBuffer.isView(e))
      this.encodeBinary(e);
    else
      throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
  }
  encodeExtension(e) {
    let t = e.data.length;
    switch (t) {
      case 1:
        this.writeU8(bt);
        break;
      case 2:
        this.writeU8(Lt);
        break;
      case 4:
        this.writeU8(Ut);
        break;
      case 8:
        this.writeU8(vt);
        break;
      case 16:
        this.writeU8(Pt);
        break;
      default:
        if (t < 256)
          this.writeU8(wt), this.writeU8(t);
        else if (t < 65536)
          this.writeU8(Mt), this.writeU16(t);
        else if (t < 4294967296)
          this.writeU8(Bt), this.writeU32(t);
        else throw new Error(`ext (${e.type}) data too large to encode (length > 2^32 - 1)`);
    }
    this.writeI8(e.type), this.writeU8a(e.data);
  }
  writeU8(e) {
    this.ensureBufferSizeToWrite(1), this._view.setUint8(this._pos, e), this._pos++;
  }
  writeU8a(e) {
    const t = e.length;
    this.ensureBufferSizeToWrite(t), this._bytes.set(e, this._pos), this._pos += t;
  }
  writeI8(e) {
    this.ensureBufferSizeToWrite(1), this._view.setInt8(this._pos, e), this._pos++;
  }
  writeU16(e) {
    this.ensureBufferSizeToWrite(2), this._view.setUint16(this._pos, e), this._pos += 2;
  }
  writeI16(e) {
    this.ensureBufferSizeToWrite(2), this._view.setInt16(this._pos, e), this._pos += 2;
  }
  writeU32(e) {
    this.ensureBufferSizeToWrite(4), this._view.setUint32(this._pos, e), this._pos += 4;
  }
  writeI32(e) {
    this.ensureBufferSizeToWrite(4), this._view.setInt32(this._pos, e), this._pos += 4;
  }
  writeF64(e) {
    this.ensureBufferSizeToWrite(8), this._view.setFloat64(this._pos, e), this._pos += 8;
  }
  writeU64(e) {
    this.ensureBufferSizeToWrite(8), br(this._view, this._pos, e), this._pos += 8;
  }
  writeI64(e) {
    this.ensureBufferSizeToWrite(8), Ls(this._view, this._pos, e), this._pos += 8;
  }
  writeStringHeader(e) {
    if (e < 32)
      this.writeU8(160 + e);
    else if (e < 256)
      this.writeU8(217), this.writeU8(e);
    else if (e < 65536)
      this.writeU8(218), this.writeU16(e);
    else if (e < 4294967296)
      this.writeU8(219), this.writeU32(e);
    else
      throw new Error(`Too long string: ${e} bytes in UTF-8`);
  }
  ensureBufferSizeToWrite(e) {
    const t = this._pos + e;
    this._view.byteLength < t && this.resizeBuffer(t * 2);
  }
  resizeBuffer(e) {
    const t = new ArrayBuffer(e), s = new Uint8Array(t), r = new DataView(t);
    s.set(this._bytes), this._view = r, this._bytes = s;
  }
}
const mi = 0, Ni = Uint8Array.from([137, 101, 109, 102, 10, 13, 26, 10]);
class Oi {
  constructor() {
    this.classData = [];
  }
}
class Fi {
  constructor(e, t) {
    this.featureData = [], this.id = e, this.packageID = t;
  }
}
class yi {
}
class Di {
  constructor(e, t) {
    this._objectToID = /* @__PURE__ */ new Map(), this._classDataMap = /* @__PURE__ */ new Map(), this._packageDataMap = /* @__PURE__ */ new Map(), this._uriToIDMap = /* @__PURE__ */ new Map(), this._enumLiteralToIDMap = /* @__PURE__ */ new Map(), this._version = mi, this._isIDAttributeEncoded = !1, this._resource = e, this._baseURI = this._resource?.eURI, this._isIDAttributeEncoded = t?.get(bi.BINARY_OPTION_ID_ATTRIBUTE) ?? !1;
  }
  encodeBoolean(e) {
    this._encoder.encodeBoolean(e);
  }
  encodeNumber(e) {
    this._encoder.encodeNumber(e);
  }
  encodeBytes(e) {
    this._encoder.encodeBinary(e);
  }
  encodeString(e) {
    this._encoder.encodeString(e);
  }
  encodeDate(e) {
    this._encoder.encode(e);
  }
  encodeAny(e) {
    this._encoder.encode(e);
  }
  encodeSignature() {
    this.encodeBytes(Ni);
  }
  encodeVersion() {
    this.encodeNumber(this._version);
  }
  encodeEObjects(e, t) {
    this.encodeNumber(e.size());
    for (const s of e)
      this.encodeEObject(s, t);
  }
  encodeEObject(e, t) {
    if (e == null)
      this.encodeNumber(-1);
    else if (this._objectToID.has(e))
      this.encodeNumber(this._objectToID.get(e));
    else {
      let s = e, r = this._objectToID.size;
      this._objectToID.set(e, r), this.encodeNumber(r);
      let a = e.eClass(), o = this.encodeClass(a), u = !0;
      switch (t) {
        case 1:
          if (s.eIsProxy())
            this.encodeNumber(-2), this.encodeURI(s.eProxyURI()), u = !1;
          else {
            let _ = s.eInternalResource();
            _ && (this.encodeNumber(-2), this.encodeURIWithFragment(_.eURI, _.getURIFragment(s)), u = !1);
          }
          break;
        case 2:
          if (s.eIsProxy())
            this.encodeNumber(-2), this.encodeURI(s.eProxyURI()), u = !1;
          else {
            let _ = s.eInternalResource();
            _ != null && (_ != this._resource || this._objectRoot != null && !se.isAncestor(this._objectRoot, s)) && (this.encodeNumber(-2), this.encodeURIWithFragment(_.eURI, _.getURIFragment(s)), u = !1);
          }
          break;
      }
      if (u) {
        let _ = this._resource.eObjectIDManager;
        if (this._isIDAttributeEncoded && _) {
          let h = _.getID(e);
          h && (this.encodeNumber(-1), this.encodeAny(h));
        }
        for (let h = 0; h < o.featureData.length; h++) {
          let d = o.featureData[h];
          !d.isTransient && (t == 3 || d.featureKind != N.bfkObjectContainerProxy) && this.encodeFeatureValue(s, h, d);
        }
      }
      this.encodeNumber(0);
    }
  }
  encodePackage(e) {
    let t = this._packageDataMap.get(e);
    return t ? this.encodeNumber(t.id) : (t = new Oi(), t.id = this._packageDataMap.size, t.classData = new Array(e.eClassifiers.size()), this.encodeNumber(t.id), this.encodeString(e.nsURI), this.encodeURI(se.getURI(e)), this._packageDataMap.set(e, t)), t;
  }
  encodeClass(e) {
    let t = this._classDataMap.get(e);
    return t ? (this.encodeNumber(t.packageID), this.encodeNumber(t.id)) : (t = this.newClassData(e), this.encodeNumber(t.id), this.encodeString(e.name), this._classDataMap.set(e, t)), t;
  }
  encodeURI(e) {
    e == null ? this.encodeNumber(-1) : this.encodeURIWithFragment(e.trimFragment(), e.fragment);
  }
  encodeURIWithFragment(e, t) {
    if (e == null)
      this.encodeNumber(-1);
    else {
      let s = e.toString();
      if (this._uriToIDMap.has(s))
        this.encodeNumber(this._uriToIDMap.get(s));
      else {
        let r = this._uriToIDMap.size;
        this._uriToIDMap.set(s, r), this.encodeNumber(r), this.encodeString(this.relativizeURI(e).toString());
      }
      this.encodeString(t);
    }
  }
  relativizeURI(e) {
    return this._baseURI ? this._baseURI.relativize(e) : e;
  }
  encodeFeatureValue(e, t, s) {
    if (e.eIsSetFromID(t)) {
      this.encodeNumber(t + 1), s.name.length > 0 && (this.encodeString(s.name), s.name = "");
      let r = e.eGetFromID(t, !1, !1);
      switch (s.featureKind) {
        case N.bfkObject:
        case N.bfkObjectContainment:
          this.encodeEObject(
            r,
            0
            /* CheckNothing */
          );
          break;
        case N.bfkObjectContainerProxy:
          this.encodeEObject(
            r,
            2
            /* CheckResource */
          );
          break;
        case N.bfkObjectContainmentProxy:
          this.encodeEObject(
            r,
            1
            /* CheckDirectResource */
          );
          break;
        case N.bfkObjectProxy:
          this.encodeEObject(
            r,
            2
            /* CheckResource */
          );
          break;
        case N.bfkObjectList:
        case N.bfkObjectContainmentList:
          this.encodeEObjects(
            r,
            0
            /* CheckNothing */
          );
          break;
        case N.bfkObjectContainmentListProxy:
          this.encodeEObjects(
            r,
            1
            /* CheckDirectResource */
          );
          break;
        case N.bfkObjectListProxy:
          this.encodeEObjects(
            r,
            2
            /* CheckResource */
          );
          break;
        case N.bfkData:
          let a = s.factory.convertToString(s.dataType, r);
          this.encodeString(a);
          break;
        case N.bfkDataList:
          let o = r;
          this.encodeNumber(o.size());
          for (const _ of o) {
            let h = s.factory.convertToString(s.dataType, _);
            this.encodeString(h);
          }
          break;
        case N.bfkEnum:
          let u = s.factory.convertToString(s.dataType, r);
          if (this._enumLiteralToIDMap.has(u)) {
            let _ = this._enumLiteralToIDMap.get(u);
            this.encodeNumber(_);
          } else {
            let _ = this._enumLiteralToIDMap.size;
            this._enumLiteralToIDMap.set(u, _), this.encodeNumber(_), this.encodeString(u);
          }
          break;
        case N.bfkDate:
          this.encodeDate(r);
          break;
        case N.bfkNumber:
          this.encodeNumber(r);
          break;
        case N.bfkBool:
          this.encodeBoolean(r);
          break;
        case N.bfkString:
          this.encodeString(r);
          break;
        case N.bfkByteArray:
          this.encodeBytes(r);
          break;
        default:
          throw new Error(`feature with feature kind '${s.featureKind}' is not supported`);
      }
    }
  }
  newClassData(e) {
    let t = e.eAllStructuralFeatures, s = this.encodePackage(e.ePackage), r = new Fi(this.newClassID(s), s.id);
    s.classData[r.id] = r;
    for (const a of t)
      r.featureData.push(this.newFeatureData(a));
    return r;
  }
  newFeatureData(e) {
    let t = new yi();
    if (t.name = e.name, t.featureKind = bs(e), H(e)) {
      let s = e;
      t.isTransient = s.isTransient || s.isContainer && !s.isResolveProxies;
    } else if (de(e)) {
      let s = e, r = s.eAttributeType;
      t.isTransient = s.isTransient, t.dataType = r, t.factory = r.ePackage.eFactoryInstance;
    }
    return t;
  }
  newClassID(e) {
    for (let t = 0; t < e.classData.length; t++)
      if (e.classData[t] == null)
        return t;
    return -1;
  }
  reinitializeState() {
    this._encoder = new Ii();
  }
  encode(e) {
    try {
      return this.reinitializeState(), this.encodeSignature(), this.encodeVersion(), this.encodeEObjects(
        e.eContents(),
        3
        /* CheckContainer */
      ), J(this._encoder.bytes());
    } catch (t) {
      return z(t);
    }
  }
  encodeObject(e) {
    try {
      return this.reinitializeState(), this.encodeSignature(), this.encodeVersion(), this.encodeEObject(
        e,
        3
        /* CheckContainer */
      ), J(this._encoder.bytes());
    } catch (t) {
      return z(t);
    }
  }
  encodeAsync(e, t) {
    return new Promise((s, r) => {
      let a = this.encode(e);
      a.isOk() ? (t.write(a.value), s(a.value)) : r(a.error);
    });
  }
  encodeObjectAsync(e, t) {
    return new Promise((s, r) => {
      let a = this.encodeObject(e);
      a.isOk() ? (t.write(a.value), s(a.value)) : r(a.error);
    });
  }
}
class bi {
  static {
    this.BINARY_OPTION_ID_ATTRIBUTE = "ID_ATTRIBUTE";
  }
  // if true, save id attribute of the object
}
class Li {
  newEncoder(e, t) {
    return new Di(e, t);
  }
  newDecoder(e, t) {
    return new Ri(e, t);
  }
}
class Ui {
  newEncoder(e, t) {
    return null;
  }
  newDecoder(e, t) {
    return null;
  }
}
class X {
  static {
    this.xmiURI = "http://www.omg.org/XMI";
  }
  static {
    this.xmiNS = "xmi";
  }
  static {
    this.versionAttrib = "version";
  }
  static {
    this.uuidAttrib = "uuid";
  }
  static {
    this.typeAttrib = "type";
  }
  static {
    this.xmlNS = "xmlns";
  }
}
function Ps(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function vi(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(n, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return n[s];
      }
    });
  }), t;
}
var ws = {};
const Pi = {}, wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), Mi = /* @__PURE__ */ vi(wi);
(function(n) {
  (function(e) {
    e.parser = function(E, l) {
      return new s(E, l);
    }, e.SAXParser = s, e.SAXStream = d, e.createStream = h, e.MAX_BUFFER_LENGTH = 64 * 1024;
    var t = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    e.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function s(E, l) {
      if (!(this instanceof s))
        return new s(E, l);
      var C = this;
      a(C), C.q = C.c = "", C.bufferCheckPosition = e.MAX_BUFFER_LENGTH, C.opt = l || {}, C.opt.lowercase = C.opt.lowercase || C.opt.lowercasetags, C.looseCase = C.opt.lowercase ? "toLowerCase" : "toUpperCase", C.tags = [], C.closed = C.closedRoot = C.sawRoot = !1, C.tag = C.error = null, C.strict = !!E, C.noscript = !!(E || C.opt.noscript), C.state = c.BEGIN, C.strictEntities = C.opt.strictEntities, C.ENTITIES = C.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), C.attribList = [], C.opt.xmlns && (C.ns = Object.create(he)), C.opt.unquotedAttributeValues === void 0 && (C.opt.unquotedAttributeValues = !E), C.trackPosition = C.opt.position !== !1, C.trackPosition && (C.position = C.line = C.column = 0), T(C, "onready");
    }
    Object.create || (Object.create = function(E) {
      function l() {
      }
      l.prototype = E;
      var C = new l();
      return C;
    }), Object.keys || (Object.keys = function(E) {
      var l = [];
      for (var C in E) E.hasOwnProperty(C) && l.push(C);
      return l;
    });
    function r(E) {
      for (var l = Math.max(e.MAX_BUFFER_LENGTH, 10), C = 0, f = 0, y = t.length; f < y; f++) {
        var G = E[t[f]].length;
        if (G > l)
          switch (t[f]) {
            case "textNode":
              I(E);
              break;
            case "cdata":
              A(E, "oncdata", E.cdata), E.cdata = "";
              break;
            case "script":
              A(E, "onscript", E.script), E.script = "";
              break;
            default:
              v(E, "Max buffer length exceeded: " + t[f]);
          }
        C = Math.max(C, G);
      }
      var x = e.MAX_BUFFER_LENGTH - C;
      E.bufferCheckPosition = x + E.position;
    }
    function a(E) {
      for (var l = 0, C = t.length; l < C; l++)
        E[t[l]] = "";
    }
    function o(E) {
      I(E), E.cdata !== "" && (A(E, "oncdata", E.cdata), E.cdata = ""), E.script !== "" && (A(E, "onscript", E.script), E.script = "");
    }
    s.prototype = {
      end: function() {
        re(this);
      },
      write: it,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        o(this);
      }
    };
    var u;
    try {
      u = require("stream").Stream;
    } catch {
      u = function() {
      };
    }
    u || (u = function() {
    });
    var _ = e.EVENTS.filter(function(E) {
      return E !== "error" && E !== "end";
    });
    function h(E, l) {
      return new d(E, l);
    }
    function d(E, l) {
      if (!(this instanceof d))
        return new d(E, l);
      u.apply(this), this._parser = new s(E, l), this.writable = !0, this.readable = !0;
      var C = this;
      this._parser.onend = function() {
        C.emit("end");
      }, this._parser.onerror = function(f) {
        C.emit("error", f), C._parser.error = null;
      }, this._decoder = null, _.forEach(function(f) {
        Object.defineProperty(C, "on" + f, {
          get: function() {
            return C._parser["on" + f];
          },
          set: function(y) {
            if (!y)
              return C.removeAllListeners(f), C._parser["on" + f] = y, y;
            C.on(f, y);
          },
          enumerable: !0,
          configurable: !1
        });
      });
    }
    d.prototype = Object.create(u.prototype, {
      constructor: {
        value: d
      }
    }), d.prototype.write = function(E) {
      if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(E)) {
        if (!this._decoder) {
          var l = Mi.StringDecoder;
          this._decoder = new l("utf8");
        }
        E = this._decoder.write(E);
      }
      return this._parser.write(E.toString()), this.emit("data", E), !0;
    }, d.prototype.end = function(E) {
      return E && E.length && this.write(E), this._parser.end(), !0;
    }, d.prototype.on = function(E, l) {
      var C = this;
      return !C._parser["on" + E] && _.indexOf(E) !== -1 && (C._parser["on" + E] = function() {
        var f = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        f.splice(0, 0, E), C.emit.apply(C, f);
      }), u.prototype.on.call(C, E, l);
    };
    var S = "[CDATA[", O = "DOCTYPE", F = "http://www.w3.org/XML/1998/namespace", q = "http://www.w3.org/2000/xmlns/", he = { xml: F, xmlns: q }, ne = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ne = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, _e = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, rt = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function Y(E) {
      return E === " " || E === `
` || E === "\r" || E === "	";
    }
    function Ae(E) {
      return E === '"' || E === "'";
    }
    function ve(E) {
      return E === ">" || Y(E);
    }
    function te(E, l) {
      return E.test(l);
    }
    function P(E, l) {
      return !te(E, l);
    }
    var c = 0;
    e.STATE = {
      BEGIN: c++,
      // leading byte order mark or whitespace
      BEGIN_WHITESPACE: c++,
      // leading whitespace
      TEXT: c++,
      // general stuff
      TEXT_ENTITY: c++,
      // &amp and such.
      OPEN_WAKA: c++,
      // <
      SGML_DECL: c++,
      // <!BLARG
      SGML_DECL_QUOTED: c++,
      // <!BLARG foo "bar
      DOCTYPE: c++,
      // <!DOCTYPE
      DOCTYPE_QUOTED: c++,
      // <!DOCTYPE "//blah
      DOCTYPE_DTD: c++,
      // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: c++,
      // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: c++,
      // <!-
      COMMENT: c++,
      // <!--
      COMMENT_ENDING: c++,
      // <!-- blah -
      COMMENT_ENDED: c++,
      // <!-- blah --
      CDATA: c++,
      // <![CDATA[ something
      CDATA_ENDING: c++,
      // ]
      CDATA_ENDING_2: c++,
      // ]]
      PROC_INST: c++,
      // <?hi
      PROC_INST_BODY: c++,
      // <?hi there
      PROC_INST_ENDING: c++,
      // <?hi "there" ?
      OPEN_TAG: c++,
      // <strong
      OPEN_TAG_SLASH: c++,
      // <strong /
      ATTRIB: c++,
      // <a
      ATTRIB_NAME: c++,
      // <a foo
      ATTRIB_NAME_SAW_WHITE: c++,
      // <a foo _
      ATTRIB_VALUE: c++,
      // <a foo=
      ATTRIB_VALUE_QUOTED: c++,
      // <a foo="bar
      ATTRIB_VALUE_CLOSED: c++,
      // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: c++,
      // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: c++,
      // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: c++,
      // <foo bar=&quot
      CLOSE_TAG: c++,
      // </a
      CLOSE_TAG_SAW_WHITE: c++,
      // </a   >
      SCRIPT: c++,
      // <script> ...
      SCRIPT_ENDING: c++
      // <script> ... <
    }, e.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, e.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(e.ENTITIES).forEach(function(E) {
      var l = e.ENTITIES[E], C = typeof l == "number" ? String.fromCharCode(l) : l;
      e.ENTITIES[E] = C;
    });
    for (var g in e.STATE)
      e.STATE[e.STATE[g]] = g;
    c = e.STATE;
    function T(E, l, C) {
      E[l] && E[l](C);
    }
    function A(E, l, C) {
      E.textNode && I(E), T(E, l, C);
    }
    function I(E) {
      E.textNode = D(E.opt, E.textNode), E.textNode && T(E, "ontext", E.textNode), E.textNode = "";
    }
    function D(E, l) {
      return E.trim && (l = l.trim()), E.normalize && (l = l.replace(/\s+/g, " ")), l;
    }
    function v(E, l) {
      return I(E), E.trackPosition && (l += `
Line: ` + E.line + `
Column: ` + E.column + `
Char: ` + E.c), l = new Error(l), E.error = l, T(E, "onerror", l), E;
    }
    function re(E) {
      return E.sawRoot && !E.closedRoot && m(E, "Unclosed root tag"), E.state !== c.BEGIN && E.state !== c.BEGIN_WHITESPACE && E.state !== c.TEXT && v(E, "Unexpected end"), I(E), E.c = "", E.closed = !0, T(E, "onend"), s.call(E, E.strict, E.opt), E;
    }
    function m(E, l) {
      if (typeof E != "object" || !(E instanceof s))
        throw new Error("bad call to strictFail");
      E.strict && v(E, l);
    }
    function ae(E) {
      E.strict || (E.tagName = E.tagName[E.looseCase]());
      var l = E.tags[E.tags.length - 1] || E, C = E.tag = { name: E.tagName, attributes: {} };
      E.opt.xmlns && (C.ns = l.ns), E.attribList.length = 0, A(E, "onopentagstart", C);
    }
    function le(E, l) {
      var C = E.indexOf(":"), f = C < 0 ? ["", E] : E.split(":"), y = f[0], G = f[1];
      return l && E === "xmlns" && (y = "xmlns", G = ""), { prefix: y, local: G };
    }
    function ue(E) {
      if (E.strict || (E.attribName = E.attribName[E.looseCase]()), E.attribList.indexOf(E.attribName) !== -1 || E.tag.attributes.hasOwnProperty(E.attribName)) {
        E.attribName = E.attribValue = "";
        return;
      }
      if (E.opt.xmlns) {
        var l = le(E.attribName, !0), C = l.prefix, f = l.local;
        if (C === "xmlns")
          if (f === "xml" && E.attribValue !== F)
            m(
              E,
              "xml: prefix must be bound to " + F + `
Actual: ` + E.attribValue
            );
          else if (f === "xmlns" && E.attribValue !== q)
            m(
              E,
              "xmlns: prefix must be bound to " + q + `
Actual: ` + E.attribValue
            );
          else {
            var y = E.tag, G = E.tags[E.tags.length - 1] || E;
            y.ns === G.ns && (y.ns = Object.create(G.ns)), y.ns[f] = E.attribValue;
          }
        E.attribList.push([E.attribName, E.attribValue]);
      } else
        E.tag.attributes[E.attribName] = E.attribValue, A(E, "onattribute", {
          name: E.attribName,
          value: E.attribValue
        });
      E.attribName = E.attribValue = "";
    }
    function ee(E, l) {
      if (E.opt.xmlns) {
        var C = E.tag, f = le(E.tagName);
        C.prefix = f.prefix, C.local = f.local, C.uri = C.ns[f.prefix] || "", C.prefix && !C.uri && (m(E, "Unbound namespace prefix: " + JSON.stringify(E.tagName)), C.uri = f.prefix);
        var y = E.tags[E.tags.length - 1] || E;
        C.ns && y.ns !== C.ns && Object.keys(C.ns).forEach(function(Qt) {
          A(E, "onopennamespace", {
            prefix: Qt,
            uri: C.ns[Qt]
          });
        });
        for (var G = 0, x = E.attribList.length; G < x; G++) {
          var Q = E.attribList[G], $ = Q[0], Ce = Q[1], j = le($, !0), oe = j.prefix, ks = j.local, Ht = oe === "" ? "" : C.ns[oe] || "", nt = {
            name: $,
            value: Ce,
            prefix: oe,
            local: ks,
            uri: Ht
          };
          oe && oe !== "xmlns" && !Ht && (m(E, "Unbound namespace prefix: " + JSON.stringify(oe)), nt.uri = oe), E.tag.attributes[$] = nt, A(E, "onattribute", nt);
        }
        E.attribList.length = 0;
      }
      E.tag.isSelfClosing = !!l, E.sawRoot = !0, E.tags.push(E.tag), A(E, "onopentag", E.tag), l || (!E.noscript && E.tagName.toLowerCase() === "script" ? E.state = c.SCRIPT : E.state = c.TEXT, E.tag = null, E.tagName = ""), E.attribName = E.attribValue = "", E.attribList.length = 0;
    }
    function Oe(E) {
      if (!E.tagName) {
        m(E, "Weird empty close tag."), E.textNode += "</>", E.state = c.TEXT;
        return;
      }
      if (E.script) {
        if (E.tagName !== "script") {
          E.script += "</" + E.tagName + ">", E.tagName = "", E.state = c.SCRIPT;
          return;
        }
        A(E, "onscript", E.script), E.script = "";
      }
      var l = E.tags.length, C = E.tagName;
      E.strict || (C = C[E.looseCase]());
      for (var f = C; l--; ) {
        var y = E.tags[l];
        if (y.name !== f)
          m(E, "Unexpected close tag");
        else
          break;
      }
      if (l < 0) {
        m(E, "Unmatched closing tag: " + E.tagName), E.textNode += "</" + E.tagName + ">", E.state = c.TEXT;
        return;
      }
      E.tagName = C;
      for (var G = E.tags.length; G-- > l; ) {
        var x = E.tag = E.tags.pop();
        E.tagName = E.tag.name, A(E, "onclosetag", E.tagName);
        var Q = {};
        for (var $ in x.ns)
          Q[$] = x.ns[$];
        var Ce = E.tags[E.tags.length - 1] || E;
        E.opt.xmlns && x.ns !== Ce.ns && Object.keys(x.ns).forEach(function(j) {
          var oe = x.ns[j];
          A(E, "onclosenamespace", { prefix: j, uri: oe });
        });
      }
      l === 0 && (E.closedRoot = !0), E.tagName = E.attribValue = E.attribName = "", E.attribList.length = 0, E.state = c.TEXT;
    }
    function K(E) {
      var l = E.entity, C = l.toLowerCase(), f, y = "";
      return E.ENTITIES[l] ? E.ENTITIES[l] : E.ENTITIES[C] ? E.ENTITIES[C] : (l = C, l.charAt(0) === "#" && (l.charAt(1) === "x" ? (l = l.slice(2), f = parseInt(l, 16), y = f.toString(16)) : (l = l.slice(1), f = parseInt(l, 10), y = f.toString(10))), l = l.replace(/^0+/, ""), isNaN(f) || y.toLowerCase() !== l ? (m(E, "Invalid character entity"), "&" + E.entity + ";") : String.fromCodePoint(f));
    }
    function Fe(E, l) {
      l === "<" ? (E.state = c.OPEN_WAKA, E.startTagPosition = E.position) : Y(l) || (m(E, "Non-whitespace before first tag."), E.textNode = l, E.state = c.TEXT);
    }
    function Pe(E, l) {
      var C = "";
      return l < E.length && (C = E.charAt(l)), C;
    }
    function it(E) {
      var l = this;
      if (this.error)
        throw this.error;
      if (l.closed)
        return v(
          l,
          "Cannot write after close. Assign an onready handler."
        );
      if (E === null)
        return re(l);
      typeof E == "object" && (E = E.toString());
      for (var C = 0, f = ""; f = Pe(E, C++), l.c = f, !!f; )
        switch (l.trackPosition && (l.position++, f === `
` ? (l.line++, l.column = 0) : l.column++), l.state) {
          case c.BEGIN:
            if (l.state = c.BEGIN_WHITESPACE, f === "\uFEFF")
              continue;
            Fe(l, f);
            continue;
          case c.BEGIN_WHITESPACE:
            Fe(l, f);
            continue;
          case c.TEXT:
            if (l.sawRoot && !l.closedRoot) {
              for (var y = C - 1; f && f !== "<" && f !== "&"; )
                f = Pe(E, C++), f && l.trackPosition && (l.position++, f === `
` ? (l.line++, l.column = 0) : l.column++);
              l.textNode += E.substring(y, C - 1);
            }
            f === "<" && !(l.sawRoot && l.closedRoot && !l.strict) ? (l.state = c.OPEN_WAKA, l.startTagPosition = l.position) : (!Y(f) && (!l.sawRoot || l.closedRoot) && m(l, "Text data outside of root node."), f === "&" ? l.state = c.TEXT_ENTITY : l.textNode += f);
            continue;
          case c.SCRIPT:
            f === "<" ? l.state = c.SCRIPT_ENDING : l.script += f;
            continue;
          case c.SCRIPT_ENDING:
            f === "/" ? l.state = c.CLOSE_TAG : (l.script += "<" + f, l.state = c.SCRIPT);
            continue;
          case c.OPEN_WAKA:
            if (f === "!")
              l.state = c.SGML_DECL, l.sgmlDecl = "";
            else if (!Y(f)) if (te(ne, f))
              l.state = c.OPEN_TAG, l.tagName = f;
            else if (f === "/")
              l.state = c.CLOSE_TAG, l.tagName = "";
            else if (f === "?")
              l.state = c.PROC_INST, l.procInstName = l.procInstBody = "";
            else {
              if (m(l, "Unencoded <"), l.startTagPosition + 1 < l.position) {
                var G = l.position - l.startTagPosition;
                f = new Array(G).join(" ") + f;
              }
              l.textNode += "<" + f, l.state = c.TEXT;
            }
            continue;
          case c.SGML_DECL:
            if (l.sgmlDecl + f === "--") {
              l.state = c.COMMENT, l.comment = "", l.sgmlDecl = "";
              continue;
            }
            l.doctype && l.doctype !== !0 && l.sgmlDecl ? (l.state = c.DOCTYPE_DTD, l.doctype += "<!" + l.sgmlDecl + f, l.sgmlDecl = "") : (l.sgmlDecl + f).toUpperCase() === S ? (A(l, "onopencdata"), l.state = c.CDATA, l.sgmlDecl = "", l.cdata = "") : (l.sgmlDecl + f).toUpperCase() === O ? (l.state = c.DOCTYPE, (l.doctype || l.sawRoot) && m(
              l,
              "Inappropriately located doctype declaration"
            ), l.doctype = "", l.sgmlDecl = "") : f === ">" ? (A(l, "onsgmldeclaration", l.sgmlDecl), l.sgmlDecl = "", l.state = c.TEXT) : (Ae(f) && (l.state = c.SGML_DECL_QUOTED), l.sgmlDecl += f);
            continue;
          case c.SGML_DECL_QUOTED:
            f === l.q && (l.state = c.SGML_DECL, l.q = ""), l.sgmlDecl += f;
            continue;
          case c.DOCTYPE:
            f === ">" ? (l.state = c.TEXT, A(l, "ondoctype", l.doctype), l.doctype = !0) : (l.doctype += f, f === "[" ? l.state = c.DOCTYPE_DTD : Ae(f) && (l.state = c.DOCTYPE_QUOTED, l.q = f));
            continue;
          case c.DOCTYPE_QUOTED:
            l.doctype += f, f === l.q && (l.q = "", l.state = c.DOCTYPE);
            continue;
          case c.DOCTYPE_DTD:
            f === "]" ? (l.doctype += f, l.state = c.DOCTYPE) : f === "<" ? (l.state = c.OPEN_WAKA, l.startTagPosition = l.position) : Ae(f) ? (l.doctype += f, l.state = c.DOCTYPE_DTD_QUOTED, l.q = f) : l.doctype += f;
            continue;
          case c.DOCTYPE_DTD_QUOTED:
            l.doctype += f, f === l.q && (l.state = c.DOCTYPE_DTD, l.q = "");
            continue;
          case c.COMMENT:
            f === "-" ? l.state = c.COMMENT_ENDING : l.comment += f;
            continue;
          case c.COMMENT_ENDING:
            f === "-" ? (l.state = c.COMMENT_ENDED, l.comment = D(l.opt, l.comment), l.comment && A(l, "oncomment", l.comment), l.comment = "") : (l.comment += "-" + f, l.state = c.COMMENT);
            continue;
          case c.COMMENT_ENDED:
            f !== ">" ? (m(l, "Malformed comment"), l.comment += "--" + f, l.state = c.COMMENT) : l.doctype && l.doctype !== !0 ? l.state = c.DOCTYPE_DTD : l.state = c.TEXT;
            continue;
          case c.CDATA:
            f === "]" ? l.state = c.CDATA_ENDING : l.cdata += f;
            continue;
          case c.CDATA_ENDING:
            f === "]" ? l.state = c.CDATA_ENDING_2 : (l.cdata += "]" + f, l.state = c.CDATA);
            continue;
          case c.CDATA_ENDING_2:
            f === ">" ? (l.cdata && A(l, "oncdata", l.cdata), A(l, "onclosecdata"), l.cdata = "", l.state = c.TEXT) : f === "]" ? l.cdata += "]" : (l.cdata += "]]" + f, l.state = c.CDATA);
            continue;
          case c.PROC_INST:
            f === "?" ? l.state = c.PROC_INST_ENDING : Y(f) ? l.state = c.PROC_INST_BODY : l.procInstName += f;
            continue;
          case c.PROC_INST_BODY:
            if (!l.procInstBody && Y(f))
              continue;
            f === "?" ? l.state = c.PROC_INST_ENDING : l.procInstBody += f;
            continue;
          case c.PROC_INST_ENDING:
            f === ">" ? (A(l, "onprocessinginstruction", {
              name: l.procInstName,
              body: l.procInstBody
            }), l.procInstName = l.procInstBody = "", l.state = c.TEXT) : (l.procInstBody += "?" + f, l.state = c.PROC_INST_BODY);
            continue;
          case c.OPEN_TAG:
            te(Ne, f) ? l.tagName += f : (ae(l), f === ">" ? ee(l) : f === "/" ? l.state = c.OPEN_TAG_SLASH : (Y(f) || m(l, "Invalid character in tag name"), l.state = c.ATTRIB));
            continue;
          case c.OPEN_TAG_SLASH:
            f === ">" ? (ee(l, !0), Oe(l)) : (m(l, "Forward-slash in opening tag not followed by >"), l.state = c.ATTRIB);
            continue;
          case c.ATTRIB:
            if (Y(f))
              continue;
            f === ">" ? ee(l) : f === "/" ? l.state = c.OPEN_TAG_SLASH : te(ne, f) ? (l.attribName = f, l.attribValue = "", l.state = c.ATTRIB_NAME) : m(l, "Invalid attribute name");
            continue;
          case c.ATTRIB_NAME:
            f === "=" ? l.state = c.ATTRIB_VALUE : f === ">" ? (m(l, "Attribute without value"), l.attribValue = l.attribName, ue(l), ee(l)) : Y(f) ? l.state = c.ATTRIB_NAME_SAW_WHITE : te(Ne, f) ? l.attribName += f : m(l, "Invalid attribute name");
            continue;
          case c.ATTRIB_NAME_SAW_WHITE:
            if (f === "=")
              l.state = c.ATTRIB_VALUE;
            else {
              if (Y(f))
                continue;
              m(l, "Attribute without value"), l.tag.attributes[l.attribName] = "", l.attribValue = "", A(l, "onattribute", {
                name: l.attribName,
                value: ""
              }), l.attribName = "", f === ">" ? ee(l) : te(ne, f) ? (l.attribName = f, l.state = c.ATTRIB_NAME) : (m(l, "Invalid attribute name"), l.state = c.ATTRIB);
            }
            continue;
          case c.ATTRIB_VALUE:
            if (Y(f))
              continue;
            Ae(f) ? (l.q = f, l.state = c.ATTRIB_VALUE_QUOTED) : (l.opt.unquotedAttributeValues || v(l, "Unquoted attribute value"), l.state = c.ATTRIB_VALUE_UNQUOTED, l.attribValue = f);
            continue;
          case c.ATTRIB_VALUE_QUOTED:
            if (f !== l.q) {
              f === "&" ? l.state = c.ATTRIB_VALUE_ENTITY_Q : l.attribValue += f;
              continue;
            }
            ue(l), l.q = "", l.state = c.ATTRIB_VALUE_CLOSED;
            continue;
          case c.ATTRIB_VALUE_CLOSED:
            Y(f) ? l.state = c.ATTRIB : f === ">" ? ee(l) : f === "/" ? l.state = c.OPEN_TAG_SLASH : te(ne, f) ? (m(l, "No whitespace between attributes"), l.attribName = f, l.attribValue = "", l.state = c.ATTRIB_NAME) : m(l, "Invalid attribute name");
            continue;
          case c.ATTRIB_VALUE_UNQUOTED:
            if (!ve(f)) {
              f === "&" ? l.state = c.ATTRIB_VALUE_ENTITY_U : l.attribValue += f;
              continue;
            }
            ue(l), f === ">" ? ee(l) : l.state = c.ATTRIB;
            continue;
          case c.CLOSE_TAG:
            if (l.tagName)
              f === ">" ? Oe(l) : te(Ne, f) ? l.tagName += f : l.script ? (l.script += "</" + l.tagName, l.tagName = "", l.state = c.SCRIPT) : (Y(f) || m(l, "Invalid tagname in closing tag"), l.state = c.CLOSE_TAG_SAW_WHITE);
            else {
              if (Y(f))
                continue;
              P(ne, f) ? l.script ? (l.script += "</" + f, l.state = c.SCRIPT) : m(l, "Invalid tagname in closing tag.") : l.tagName = f;
            }
            continue;
          case c.CLOSE_TAG_SAW_WHITE:
            if (Y(f))
              continue;
            f === ">" ? Oe(l) : m(l, "Invalid characters in closing tag");
            continue;
          case c.TEXT_ENTITY:
          case c.ATTRIB_VALUE_ENTITY_Q:
          case c.ATTRIB_VALUE_ENTITY_U:
            var x, Q;
            switch (l.state) {
              case c.TEXT_ENTITY:
                x = c.TEXT, Q = "textNode";
                break;
              case c.ATTRIB_VALUE_ENTITY_Q:
                x = c.ATTRIB_VALUE_QUOTED, Q = "attribValue";
                break;
              case c.ATTRIB_VALUE_ENTITY_U:
                x = c.ATTRIB_VALUE_UNQUOTED, Q = "attribValue";
                break;
            }
            if (f === ";") {
              var $ = K(l);
              l.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes($) ? (l.entity = "", l.state = x, l.write($)) : (l[Q] += $, l.entity = "", l.state = x);
            } else te(l.entity.length ? rt : _e, f) ? l.entity += f : (m(l, "Invalid character in entity name"), l[Q] += "&" + l.entity + f, l.entity = "", l.state = x);
            continue;
          default:
            throw new Error(l, "Unknown state: " + l.state);
        }
      return l.position >= l.bufferCheckPosition && r(l), l;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    String.fromCodePoint || function() {
      var E = String.fromCharCode, l = Math.floor, C = function() {
        var f = 16384, y = [], G, x, Q = -1, $ = arguments.length;
        if (!$)
          return "";
        for (var Ce = ""; ++Q < $; ) {
          var j = Number(arguments[Q]);
          if (!isFinite(j) || // `NaN`, `+Infinity`, or `-Infinity`
          j < 0 || // not a valid Unicode code point
          j > 1114111 || // not a valid Unicode code point
          l(j) !== j)
            throw RangeError("Invalid code point: " + j);
          j <= 65535 ? y.push(j) : (j -= 65536, G = (j >> 10) + 55296, x = j % 1024 + 56320, y.push(G, x)), (Q + 1 === $ || y.length > f) && (Ce += E.apply(null, y), y.length = 0);
        }
        return Ce;
      };
      Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
        value: C,
        configurable: !0,
        writable: !0
      }) : String.fromCodePoint = C;
    }();
  })(n);
})(ws);
const ds = /* @__PURE__ */ Ps(ws);
class U {
  static {
    this.href = "href";
  }
  static {
    this.typeAttrib = "type";
  }
  static {
    this.schemaLocationAttrib = "schemaLocation";
  }
  static {
    this.noNamespaceSchemaLocationAttrib = "noNamespaceSchemaLocation";
  }
  static {
    this.xsiURI = "http://www.w3.org/2001/XMLSchema-instance";
  }
  static {
    this.xsiNS = "xsi";
  }
  static {
    this.xmlNS = "xmlns";
  }
}
const As = "object", dt = "error";
class Ms {
  constructor(e, t) {
    this._attributes = null, this._namespaces = new Vi(), this._uriToFactories = /* @__PURE__ */ new Map(), this._prefixesToURI = /* @__PURE__ */ new Map(), this._elements = [], this._objects = [], this._types = [], this._sameDocumentProxies = [], this._notFeatures = [
      { uri: U.xsiURI, local: U.typeAttrib },
      { uri: U.xsiURI, local: U.schemaLocationAttrib },
      {
        uri: U.xsiURI,
        local: U.noNamespaceSchemaLocationAttrib
      }
    ], this._isResolveDeferred = !1, this._isSuppressDocumentRoot = !1, this._references = [], this._resource = e, this._packageRegistry = this._resource.eResourceSet() ? this._resource.eResourceSet().getPackageRegistry() : Ze(), t && (this._idAttributeName = t.get(ce.ID_ATTRIBUTE_NAME), this._isSuppressDocumentRoot = t.get(ce.SUPPRESS_DOCUMENT_ROOT), this._isResolveDeferred = t.get(ce.DEFERRED_REFERENCE_RESOLUTION) === !0, this._extendedMetaData = t.get(ce.EXTENDED_META_DATA), t.get(ce.DEFERRED_ROOT_ATTACHMENT) === !0 && (this._deferred = [])), this._extendedMetaData || (this._extendedMetaData = new ys());
  }
  setXMLVersion(e) {
    this._xmlVersion = e;
  }
  setEncoding(e) {
    this._encoding = e;
  }
  getXMLVersion() {
    return this._xmlVersion;
  }
  getEncoding() {
    return this._encoding;
  }
  decode(e) {
    this._parser = this.createSAXParser(), this._attachFn = function(s) {
      this._resource.eContents().add(s);
    }, this._errorFn = function(s) {
      this._resource.getErrors().add(s);
    }, this._parser.write(e.toString()).close();
    let t = this._resource.getErrors();
    return t.isEmpty() ? J(this._resource) : z(t.get(0));
  }
  decodeObject(e) {
    this._parser = this.createSAXParser();
    var t, s;
    return this._attachFn = function(r) {
      s || (s = r);
    }, this._errorFn = function(r) {
      t || (t = r);
    }, this._parser.write(e.toString()).close(), t ? z(t) : J(s);
  }
  createSAXParser() {
    let e = new ds.SAXParser(!0, {
      trim: !0,
      lowercase: !0,
      xmlns: !0,
      position: !0
    });
    return e.onopentag = (t) => this.onStartTag(t), e.onclosetag = (t) => this.onEndTag(t), e.ontext = (t) => this.onText(t), e.onerror = (t) => this.onError(t), e.onprocessinginstruction = (t) => this.onProcessingInstruction(t), e;
  }
  decodeAsync(e) {
    return new Promise((t, s) => {
      this._attachFn = function(a) {
        this._resource.eContents().add(a);
      }, this._errorFn = function(a) {
        this._resource.getErrors().add(a);
      };
      let r = this.createSAXStream(() => {
        let a = this._resource.getErrors();
        a.isEmpty() ? t(this._resource) : s(a.get(0));
      });
      this._parser = r._parser, e.pipe(r);
    });
  }
  decodeObjectAsync(e) {
    return new Promise((t, s) => {
      var r, a;
      this._attachFn = function(u) {
        a || (a = u);
      }, this._errorFn = function(u) {
        r || (r = u);
      };
      let o = this.createSAXStream(() => {
        r ? s(r) : t(a);
      });
      this._parser = o._parser, e.pipe(o);
    });
  }
  createSAXStream(e) {
    let t = new ds.SAXStream(!0, {
      trim: !0,
      lowercase: !0,
      xmlns: !0,
      position: !0
    });
    return t.on("processinginstruction", (s) => this.onProcessingInstruction(s)), t.on("opentag", (s) => this.onStartTag(s)), t.on("closetag", (s) => this.onEndTag(s)), t.on("text", (s) => this.onText(s)), t.on("error", (s) => this.onError(s)), t.on("end", e), t;
  }
  onProcessingInstruction(e) {
    if (e.name == "xml") {
      let t = this.procInst("version", e.body);
      t != "" && (this._xmlVersion = t);
      let s = this.procInst("encoding", e.body);
      s != "" && (this._encoding = s);
    }
  }
  procInst(e, t) {
    let r = new RegExp(e + '="([^"]*)"', "g").exec(t);
    return r.length == 0 ? "" : r[1];
  }
  onStartTag(e) {
    this._elements.push(e.local), this.setAttributes(e.attributes), this._namespaces.pushContext(), this.handlePrefixMapping(), this._objects.length == 0 && this.handleSchemaLocation(), this.processElement(e.uri, e.local);
  }
  onEndTag(e) {
    this._elements.pop();
    let t = null, s = null;
    this._objects.length > 0 && (t = this._objects[0], s = this._objects.pop());
    let r = this._types.pop();
    this._text && (r === As ? this._text.length > 0 && this.handleProxy(s, this._text) : r !== dt && (s == null && this._objects.length > 0 && (s = this._objects[this._objects.length - 1]), this.setFeatureValue(s, r, this._text, -1))), delete this._text, this._elements.length == 0 && (this._deferred && this._deferred.forEach((o) => {
      this._resource.eContents().add(o);
    }), this.handleReferences(), this.recordSchemaLocations(t)), this._namespaces.popContext().forEach((o) => {
      this._uriToFactories.delete(o.uri);
    });
  }
  onText(e) {
    this._text && (this._text += e);
  }
  onError(e) {
    this.error(
      new V(e.message, this._resource.eURI.toString(), this._parser.line, this._parser.column)
    );
  }
  setAttributes(e) {
    let t = this._attributes;
    return this._attributes = e, t;
  }
  getAttributeValue(e, t) {
    if (this._attributes)
      for (let s in this._attributes) {
        let r = this._attributes[s];
        if (r.uri == e && r.local == t)
          return r.value;
      }
    return null;
  }
  handlePrefixMapping() {
    if (this._attributes)
      for (let e in this._attributes) {
        let t = this._attributes[e];
        t.prefix == U.xmlNS && this.startPrefixMapping(t.local, t.value);
      }
  }
  startPrefixMapping(e, t) {
    if (this._namespaces.declarePrefix(e, t), this._prefixesToURI.has(e)) {
      let s = 1;
      for (; this._prefixesToURI.has(e + "_" + s); )
        s++;
      e += "_" + s;
    }
    this._prefixesToURI.set(e, t), this._uriToFactories.delete(t);
  }
  recordSchemaLocations(e) {
    if (this._extendedMetaData && e) {
      let t = this._extendedMetaData.getXMLNSPrefixMapFeature(e.eClass());
      if (t) {
        let s = e.eGet(t);
        for (let [r, a] of this._prefixesToURI)
          s.put(r, a);
      }
    }
  }
  handleSchemaLocation() {
    let e = this.getAttributeValue(U.xsiURI, U.schemaLocationAttrib);
    e && this.handleXSISchemaLocation(e), this.getAttributeValue(
      U.xsiURI,
      U.noNamespaceSchemaLocationAttrib
    ) && this.handleXSINoNamespaceSchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
  }
  handleXSINoNamespaceSchemaLocation(e) {
  }
  getXSIType() {
    return this.getAttributeValue(U.xsiURI, U.typeAttrib);
  }
  processElement(e, t) {
    if (this._objects.length == 0) {
      let s = this.createTopObject(e, t);
      s && (this._deferred ? this._deferred.push(s) : this._attachFn(s));
    } else
      this.handleFeature(e, t);
  }
  validateObject(e, t, s) {
    e || this.error(
      new V(
        "Class {'" + t + NaN + s + "}' not found",
        this._resource.eURI.toString(),
        this._parser.line,
        this._parser.column
      )
    );
  }
  processObject(e) {
    e ? (this._objects.push(e), this._types.push(As)) : this._types.push(dt);
  }
  createTopObject(e, t) {
    let s = this.getFactoryForURI(e);
    if (s) {
      let r = s.ePackage;
      if (this._extendedMetaData && this._extendedMetaData.getDocumentRoot(r)) {
        let a = this._extendedMetaData.getDocumentRoot(r), o = this.createObjectWithFactory(s, a, !1);
        return this.processObject(o), this.handleFeature(e, t), this._isSuppressDocumentRoot && (this._objects.splice(0, 1), this._types.splice(0, 1), this._objects.length > 0 && (o = this._objects[0], se.remove(o))), o;
      } else {
        let a = this.getType(r, t), o = this.createObjectWithFactory(s, a);
        return this.validateObject(o, e, t), this.processObject(o), o;
      }
    } else {
      let r = this._namespaces.getPrefix(e);
      return r ? this.handleUnknownPackage(r) : this.handleUnknownURI(e), null;
    }
  }
  createObjectWithFactory(e, t, s = !0) {
    if (e && Ee(t) && !t.isAbstract) {
      let r = e.create(t);
      return r && s && this.handleAttributes(r), r;
    }
    return null;
  }
  createObjectFromFeatureType(e, t) {
    let s = null;
    if (t?.eType) {
      let r = t.eType, a = r.ePackage.eFactoryInstance;
      s = this.createObjectWithFactory(a, r);
    }
    return s && this.setFeatureValue(e, t, s, -1), this.processObject(s), s;
  }
  createObjectFromTypeName(e, t, s) {
    let r = "", a = t, o = t.indexOf(":");
    o != -1 && (r = t.slice(0, o), a = t.slice(o + 1));
    let u = this._namespaces.getURI(r), _ = this.getFactoryForURI(u);
    if (!_)
      return this.handleUnknownPackage(r), null;
    let h = this.getType(_.ePackage, a), d = this.createObjectWithFactory(_, h);
    return this.validateObject(d, u, a), d && this.setFeatureValue(e, s, d, -1), this.processObject(d), d;
  }
  getFactoryForURI(e) {
    let t = this._uriToFactories.get(e);
    return t == null && (t = this._packageRegistry.getFactory(e), t && this._uriToFactories.set(e, t)), t;
  }
  handleFeature(e, t) {
    let s = null;
    if (this._objects.length > 0 && (s = this._objects[this._objects.length - 1]), s) {
      let r = this.getFeature(s, t);
      if (r) {
        let a = this.getLoadFeatureKind(r);
        if (a == 0 || a == 1)
          this._text = "", this._types.push(r), this._objects.push(null);
        else {
          let o = this.getXSIType();
          o ? this.createObjectFromTypeName(s, o, r) : this.createObjectFromFeatureType(s, r);
        }
      } else
        this.handleUnknownFeature(t);
    } else
      this._types.push(dt), this.handleUnknownFeature(t);
  }
  handleReferences() {
    for (const e of this._sameDocumentProxies)
      for (const t of e.eClass().eAllReferences) {
        let s = t.eOpposite;
        if (s && s.isChangeable && e.eIsSet(t)) {
          let r = this._resource.getEObject(e.eProxyURI().fragment);
          if (r) {
            let a = null;
            if (t.isMany ? a = e.eGet(t).get(0) : a = e.eGet(t), s.isMany) {
              let _ = a.eGetResolve(s, !1), h = _.indexOf(r);
              if (h != -1) {
                let d = _.indexOf(e);
                _.moveTo(d, h), d > h ? _.removeAt(d - 1) : _.removeAt(d + 1);
                break;
              }
            }
            let o = !1;
            if (t.isMany ? o = !r.eGet(t).contains(a) : o = r.eGet(t) != a, o)
              if (s.isMany) {
                let _ = a.eGetResolve(s, !1), h = _.indexOf(e);
                _.set(h, r);
              } else
                a.eSet(s, r);
            break;
          }
        }
      }
    for (const e of this._references) {
      let t = this._resource.getEObject(e.id);
      t ? this.setFeatureValue(e.object, e.feature, t, e.pos) : this.error(
        new V(
          "Unresolved reference '" + e.id + "'",
          this._resource.eURI.toString(),
          this._parser.line,
          this._parser.column
        )
      );
    }
  }
  handleAttributes(e) {
    if (this._attributes)
      for (let t in this._attributes) {
        let s = this._attributes[t];
        if (s.local == this._idAttributeName) {
          let r = this._resource.eObjectIDManager;
          r && r.setID(e, s.value);
        } else s.local == U.href ? this.handleProxy(e, s.value) : s.prefix != U.xmlNS && this.isUserAttribute(s) && this.setAttributeValue(e, s);
      }
  }
  isUserAttribute(e) {
    for (const t in this._notFeatures) {
      let s = this._notFeatures[t];
      if (s.uri == e.uri && s.local == e.local)
        return !1;
    }
    return !0;
  }
  handleProxy(e, t) {
    let s = this._resource.eURI;
    if (!s)
      return;
    let r = null;
    try {
      r = new M(t);
    } catch {
      return;
    }
    r.isAbsolute() || (r = s.resolve(r)), e.eSetProxyURI(r);
    let o = t.indexOf("#"), u = o != -1 ? o > 0 ? t.slice(0, o - 1) : "" : t;
    this._resource.eURI?.toString() == u && this._sameDocumentProxies.push(e);
  }
  setAttributeValue(e, t) {
    let s = this.getFeature(e, t.local);
    if (s) {
      let r = this.getLoadFeatureKind(s);
      r == 0 || r == 1 ? this.setFeatureValue(e, s, t.value, -2) : this.setValueFromId(e, s, t.value);
    } else
      this.handleUnknownFeature(t.local);
  }
  setFeatureValue(e, t, s, r) {
    let a = this.getLoadFeatureKind(t);
    switch (a) {
      case 0: {
        let _ = t.eType, h = _.ePackage.eFactoryInstance;
        s ? e.eSet(t, h.createFromString(_, s)) : e.eSet(t, null);
        break;
      }
      case 1: {
        let _ = t.eType, h = _.ePackage.eFactoryInstance, d = e.eGetResolve(t, !1);
        r == -2 || (s ? d.add(h.createFromString(_, s)) : d.add(null));
        break;
      }
      case 2:
      case 3:
        let o = e.eGetResolve(t, !1);
        if (r == -1)
          o.add(s);
        else if (r == -2)
          o.clear();
        else if (e == s) {
          let u = o.indexOf(s);
          u == -1 ? o.insert(r, s) : o.moveTo(r, u);
        } else a == 2 ? o.add(s) : o.move(r, s);
        break;
      default:
        e.eSet(t, s);
    }
  }
  setValueFromId(e, t, s) {
    let r = this._isResolveDeferred, a = !1, o = !0, u = 0, _ = [], h = s.split(" "), d = "";
    for (let S of h) {
      let O = S.indexOf("#");
      if (O != -1)
        if (O == 0)
          S = S.slice(1);
        else {
          let F = this.setAttributes(null), q;
          d.length == 0 ? q = this.createObjectFromFeatureType(e, t) : q = this.createObjectFromTypeName(e, d, t), this.setAttributes(F), q && this.handleProxy(q, S), this._objects.pop(), d = "", u++;
          continue;
        }
      else if (S.indexOf(":") != -1) {
        d = S;
        continue;
      }
      if (!this._isResolveDeferred) {
        if (o) {
          let F = t.eOpposite;
          F ? (r = F.isTransient || t.isMany, a = r || !F.isMany) : (r = !0, a = !0), o = !1;
        }
        if (a) {
          let F = this._resource.getEObject(S);
          if (F) {
            this.setFeatureValue(e, t, F, -1), d = "", u++;
            continue;
          }
        }
      }
      r && _.push({
        object: e,
        feature: t,
        id: S,
        pos: u
      }), d = "", u++;
    }
    u == 0 ? this.setFeatureValue(e, t, null, -2) : this._references.push(..._);
  }
  getFeature(e, t) {
    let s = e.eClass(), r = s.getEStructuralFeatureFromName(t);
    if (!r && this._extendedMetaData) {
      for (const a of s.eAllStructuralFeatures)
        if (t === this._extendedMetaData.getName(a)) return a;
    }
    return r;
  }
  getType(e, t) {
    return this._extendedMetaData ? this._extendedMetaData.getType(e, t) : e.getEClassifier(t);
  }
  getLoadFeatureKind(e) {
    let t = e.eType;
    if (t && Qe(t))
      return e.isMany ? 1 : 0;
    if (e.isMany) {
      let r = e.eOpposite;
      return !r || r.isTransient || !r.isMany ? 2 : 3;
    }
    return 4;
  }
  handleUnknownFeature(e) {
    this.error(
      new V(
        "Feature " + e + " not found",
        this._resource.eURI?.toString(),
        this._parser.column,
        this._parser.line
      )
    );
  }
  handleUnknownPackage(e) {
    this.error(
      new V(
        "Package " + e + " not found",
        this._resource.eURI?.toString(),
        this._parser.column,
        this._parser.line
      )
    );
  }
  handleUnknownURI(e) {
    this.error(
      new V(
        "URI " + e + " not found",
        this._resource.eURI?.toString(),
        this._parser.column,
        this._parser.line
      )
    );
  }
  error(e) {
    this._errorFn(e);
  }
}
class Bi extends Ms {
  constructor(e, t) {
    super(e, t), this._xmiVersion = "2.0", this._notFeatures.push(
      { uri: X.xmiURI, local: X.typeAttrib },
      { uri: X.xmiURI, local: X.versionAttrib },
      { uri: X.xmiURI, local: X.uuidAttrib }
    );
  }
  getXMIVersion() {
    return this._xmiVersion;
  }
  getXSIType() {
    let e = super.getXSIType();
    return (e == null || e.length == 0) && this._attributes ? this.getAttributeValue(X.xmiURI, X.typeAttrib) : e;
  }
  handleAttributes(e) {
    let t = this.getAttributeValue(X.xmiURI, X.versionAttrib);
    t && t.length > 0 && (this._xmiVersion = t), super.handleAttributes(e);
  }
}
class Cs {
  constructor() {
    this.buffer = "", this.lineWidth = 0;
  }
}
class Gi {
  constructor() {
    this.currentSegment = null, this.firstElementMark = null, this.lineWidth = Number.MAX_SAFE_INTEGER, this.depth = 0, this.indentation = "    ", this.indents = [""], this.lastElementIsStart = !1, this.elementNames = [], this.currentSegment = new Cs(), this.segments = [this.currentSegment];
  }
  toString() {
    let e = "";
    for (const t of this.segments)
      e += t.buffer;
    return e;
  }
  write(e) {
    for (const t of this.segments)
      e.write(t.buffer);
  }
  add(e) {
    this.lineWidth != Number.MAX_SAFE_INTEGER && (this.currentSegment.lineWidth += e.length), this.currentSegment.buffer += e;
  }
  addLine() {
    this.add(`
`), this.currentSegment.lineWidth = 0;
  }
  startElement(e) {
    this.lastElementIsStart && this.closeStartElement(), this.elementNames.push(e), e.length > 0 && (this.depth++, this.add(this.getElementIndent()), this.add("<"), this.add(e), this.lastElementIsStart = !0, this.firstElementMark == null && (this.firstElementMark = this.mark()));
  }
  closeStartElement() {
    this.add(">"), this.addLine(), this.lastElementIsStart = !1;
  }
  endElement() {
    if (this.lastElementIsStart)
      this.endEmptyElement();
    else {
      let e = this.removeLast();
      e != "" && (this.add(this.getElementIndentWithExtra(1)), this.add("</"), this.add(e), this.add(">"), this.addLine());
    }
  }
  endEmptyElement() {
    this.removeLast(), this.add("/>"), this.addLine(), this.lastElementIsStart = !1;
  }
  removeLast() {
    let e = this.elementNames.pop();
    return e != "" && this.depth--, e;
  }
  addAttribute(e, t) {
    this.startAttribute(e), this.addAttributeContent(t), this.endAttribute();
  }
  startAttribute(e) {
    this.currentSegment.lineWidth > this.lineWidth ? (this.addLine(), this.add(this.getAttributeIndent())) : this.add(" "), this.add(e), this.add('="');
  }
  addAttributeContent(e) {
    this.add(e);
  }
  endAttribute() {
    this.add('"');
  }
  addNil(e) {
    this.lastElementIsStart && this.closeStartElement(), this.depth++, this.add(this.getElementIndent()), this.add("<"), this.add(e), this.currentSegment.lineWidth > this.lineWidth ? (this.addLine(), this.add(this.getAttributeIndent())) : this.add(" "), this.add('xsi:nil="true"/>'), this.depth--, this.addLine(), this.lastElementIsStart = !1;
  }
  addContent(e, t) {
    this.lastElementIsStart && this.closeStartElement(), this.depth++, this.add(this.getElementIndent()), this.add("<"), this.add(e), this.add(">"), this.add(t), this.add("</"), this.depth--, this.add(e), this.add(">"), this.addLine(), this.lastElementIsStart = !1;
  }
  getElementIndent() {
    return this.getElementIndentWithExtra(0);
  }
  getElementIndentWithExtra(e) {
    let t = this.depth + e - 1;
    for (let s = this.indents.length - 1; s < t; s++)
      this.indents.push(this.indents[s] + "  ");
    return this.indents[t];
  }
  getAttributeIndent() {
    let e = this.depth + 1;
    for (let t = this.indents.length - 1; t < e; t++)
      this.indents.push(this.indents[t] + "  ");
    return this.indents[e];
  }
  mark() {
    let e = this.currentSegment;
    return this.currentSegment = new Cs(), this.segments.push(this.currentSegment), e;
  }
  resetToFirstElementMark() {
    this.resetToMark(this.firstElementMark);
  }
  resetToMark(e) {
    e && (this.currentSegment = e);
  }
}
function xi(n, ...e) {
  return n.replace(/{(\d+)}/g, function(t, s) {
    return typeof e[s] < "u" ? e[s] : t;
  });
}
class Bs {
  constructor(e, t) {
    this._str = new Gi(), this._packages = /* @__PURE__ */ new Map(), this._uriToPrefixes = /* @__PURE__ */ new Map(), this._prefixesToURI = /* @__PURE__ */ new Map(), this._featureKinds = /* @__PURE__ */ new Map(), this._keepDefaults = !1, this._resource = e, this._encoding = "UTF-8", this._xmlVersion = "1.0", t && (this._idAttributeName = t.get(ce.ID_ATTRIBUTE_NAME), this._roots = t.get(ce.ROOT_OBJECTS), this._extendedMetaData = t.get(ce.EXTENDED_META_DATA)), this._extendedMetaData || (this._extendedMetaData = new ys());
  }
  setXMLVersion(e) {
    this._xmlVersion = e;
  }
  getXMLVersion() {
    return this._xmlVersion;
  }
  setEncoding(e) {
    this._encoding = e;
  }
  getEncoding() {
    return this._encoding;
  }
  encode(e) {
    this._errorFn = (r) => {
      this._resource.getErrors().add(r);
    };
    let t = this._roots;
    if (t || (t = this._resource.eContents()), t.isEmpty())
      return J(new Uint8Array());
    this.encodeTopObject(t.get(0));
    let s = this._resource.getErrors();
    if (s.isEmpty()) {
      let r = this._str.toString(), a = new TextEncoder().encode(r);
      return J(a);
    } else
      return z(s.get(0));
  }
  encodeObject(e) {
    var t;
    if (this._errorFn = (s) => {
      t = s;
    }, this.encodeTopObject(e), t)
      return z(t);
    {
      let s = this._str.toString(), r = new TextEncoder().encode(s);
      return J(r);
    }
  }
  encodeAsync(e, t) {
    return new Promise((s, r) => {
      let a = this.encode(e);
      a.isOk() ? (t.write(a.value), s(a.value)) : r(a.error);
    });
  }
  encodeObjectAsync(e, t) {
    return new Promise((s, r) => {
      let a = this.encodeObject(e);
      a.isOk() ? (t.write(a.value), s(a.value)) : r(a.error);
    });
  }
  encodeTopObject(e) {
    if (this.saveHeader(), this._extendedMetaData) {
      let t = e.eClass(), s = this._extendedMetaData.getXMLNSPrefixMapFeature(t);
      if (s) {
        let r = e.eGet(s);
        this.setPrefixToNamespace(r);
      }
    }
    this.saveTopObject(e), this._str.resetToFirstElementMark(), this.saveNamespaces();
  }
  saveHeader() {
    this._str.add(xi('<?xml version="{0}" encoding="{1}"?>', this._xmlVersion, this._encoding)), this._str.addLine();
  }
  saveTopObject(e) {
    let t = e.eClass();
    if (!this._extendedMetaData || this._extendedMetaData.getDocumentRoot(t.ePackage) != t) {
      let s = this.getRootFeature(t), r = s ? this.getFeatureQName(s) : this.getClassQName(t);
      this._str.startElement(r);
    } else
      this._str.startElement("");
    this.saveElementID(e), this.saveFeatures(e, !1);
  }
  getRootFeature(e) {
    if (this._extendedMetaData)
      for (; e; ) {
        let t = this._extendedMetaData.getDocumentRoot(e.ePackage);
        if (t) {
          for (const s of t.eStructuralFeatures)
            if (s.eType == e && s.isChangeable) return s;
        }
        if (Ee(e)) {
          let s = e.eSuperTypes;
          s.isEmpty() ? e = null : e = s.get(0);
        } else
          e = null;
      }
    return null;
  }
  saveElementID(e) {
    if (this._idAttributeName && this._resource.eObjectIDManager) {
      let t = this._resource.eObjectIDManager.getID(e);
      t && this._str.addAttribute(this._idAttributeName, String(t));
    }
  }
  saveFeatures(e, t) {
    let s = e.eClass().eAllStructuralFeatures, r, a = 0;
    e: for (let o = 0; o < s.size(); o++) {
      let u = s.get(o), _ = this._featureKinds.get(u);
      if (_ === void 0 && (_ = this.getSaveFeatureKind(u), this._featureKinds.set(u, _)), _ != 0 && this.shouldSaveFeature(e, u)) {
        switch (_) {
          case 1: {
            this.saveDataTypeSingle(e, u);
            continue e;
          }
          case 4: {
            if (!this.isNil(e, u)) {
              this.saveDataTypeSingle(e, u);
              continue e;
            }
            break;
          }
          case 11:
          case 5: {
            if (this.isEmpty(e, u)) {
              this.saveManyEmpty(e, u);
              continue e;
            }
            break;
          }
          case 10:
          case 6:
          case 7:
            break;
          case 12: {
            if (!this.isNil(e, u))
              switch (this.getSaveResourceKindSingle(e, u)) {
                case 2: {
                  const h = e.eGet(u), d = h.eClass().ePackage.name, S = h.eClass().name, O = d + ":" + S + " " + se.getURI(h);
                  this._str.addAttribute(this.getFeatureQName(u), O);
                  continue e;
                }
                case 1: {
                  this.saveIDRefSingle(e, u);
                  continue e;
                }
                default:
                  continue e;
              }
            break;
          }
          case 8: {
            switch (this.getSaveResourceKindSingle(e, u)) {
              case 2:
                break;
              case 1: {
                this.saveIDRefSingle(e, u);
                continue e;
              }
              default:
                continue e;
            }
            break;
          }
          case 13: {
            if (this.isEmpty(e, u)) {
              this.saveManyEmpty(e, u);
              continue e;
            } else
              switch (this.getSaveResourceKindMany(e, u)) {
                case 2: {
                  this.saveIDRefMany(e, u);
                  break;
                }
                case 1: {
                  this.saveIDRefMany(e, u);
                  continue e;
                }
                default:
                  continue e;
              }
            break;
          }
          case 9:
            switch (this.getSaveResourceKindMany(e, u)) {
              case 2: {
                this.saveIDRefMany(e, u);
                continue e;
              }
              case 1: {
                this.saveIDRefMany(e, u);
                continue e;
              }
              default:
                continue e;
            }
          default:
            continue e;
        }
        if (t)
          continue e;
        r || (r = new Array(s.size())), r[a] = o, a++;
      }
    }
    if (!r)
      return this._str.endEmptyElement(), !1;
    for (let o = 0; o < a; o++) {
      let u = s.get(r[o]);
      switch (this._featureKinds.get(u)) {
        case 4: {
          this.saveNil(e, u);
          break;
        }
        case 5: {
          this.saveDataTypeMany(e, u);
          break;
        }
        case 10: {
          this.isNil(e, u) ? this.saveNil(e, u) : this.saveContainedSingle(e, u);
          break;
        }
        case 6: {
          this.saveContainedSingle(e, u);
          break;
        }
        case 11:
        case 7: {
          this.saveContainedMany(e, u);
          break;
        }
        case 12: {
          this.isNil(e, u) ? this.saveNil(e, u) : this.saveHRefSingle(e, u);
          break;
        }
        case 8: {
          this.saveHRefSingle(e, u);
          break;
        }
        case 13:
        case 9: {
          this.saveHRefMany(e, u);
          break;
        }
      }
    }
    return this._str.endElement(), !0;
  }
  saveNamespaces() {
    let e = [...this._prefixesToURI.keys()].sort();
    for (const t of e) {
      let s = "xmlns";
      t.length > 0 && (s += ":" + t), this._str.addAttribute(s, this._prefixesToURI.get(t));
    }
  }
  saveDataTypeSingle(e, t) {
    let s = e.eGetResolve(t, !1), r = this.getDataType(s, t, !0);
    r && this._str.addAttribute(this.getFeatureQName(t), r);
  }
  saveDataTypeMany(e, t) {
    let s = e.eGetResolve(t, !1), r = t.eType, o = r.ePackage.eFactoryInstance, u = this.getFeatureQName(t);
    for (const _ of s)
      if (!_)
        this._str.startElement(u), this._str.addAttribute("xsi:nil", "true"), this._str.endEmptyElement(), this._uriToPrefixes.set(U.xsiURI, [U.xsiNS]), this._prefixesToURI.set(U.xsiNS, U.xsiURI);
      else {
        let h = o.convertToString(r, _);
        this._str.addContent(u, h);
      }
  }
  saveManyEmpty(e, t) {
    this._str.addAttribute(this.getFeatureQName(t), "");
  }
  saveEObjectSingle(e, t) {
    let s = e.eGetResolve(t, !1);
    if (s && Re(s)) {
      let r = this.getHRef(s);
      this._str.addAttribute(this.getFeatureQName(t), r);
    }
  }
  saveEObjectMany(e, t) {
    let s = e.eGetResolve(t, !1), r = !1, a = !0, o = "";
    for (const u of s)
      if (u) {
        let _ = this.getHRef(u);
        _ == "" ? r = !0 : (a || (o += " "), o += _, a = !1);
      }
    !r && o.length > 0 && this._str.addAttribute(this.getFeatureQName(t), o);
  }
  saveNil(e, t) {
    this._str.addNil(this.getFeatureQName(t));
  }
  saveContainedSingle(e, t) {
    let s = e.eGetResolve(t, !1);
    s && B(s) && this.saveEObjectInternal(s, t);
  }
  saveContainedMany(e, t) {
    let s = e.eGetResolve(t, !1);
    for (const r of s)
      B(r) && this.saveEObjectInternal(r, t);
  }
  saveEObjectInternal(e, t) {
    e.eInternalResource() || e.eIsProxy() ? this.saveHRef(e, t) : this.saveEObject(e, t);
  }
  saveEObject(e, t) {
    this._str.startElement(this.getFeatureQName(t));
    let s = e.eClass(), r = t.eType;
    r != s && r != L().getEObject() && this.saveTypeAttribute(s), this.saveElementID(e), this.saveFeatures(e, !1);
  }
  saveTypeAttribute(e) {
    this._str.addAttribute("xsi:type", this.getClassQName(e)), this._uriToPrefixes.set(U.xsiURI, [U.xsiNS]), this._prefixesToURI.set(U.xsiNS, U.xsiURI);
  }
  saveHRefSingle(e, t) {
    let s = e.eGetResolve(t, !1);
    s && Re(s) && this.saveHRef(s, t);
  }
  saveHRefMany(e, t) {
    let s = e.eGetResolve(t, !1);
    for (const r of s)
      this.saveHRef(r, t);
  }
  saveHRef(e, t) {
    let s = this.getHRef(e);
    if (s != "") {
      this._str.startElement(this.getFeatureQName(t));
      let r = e.eClass(), a = t.eType;
      a && Ee(a) && a != r && a.isAbstract && this.saveTypeAttribute(r), this._str.addAttribute("href", s), this._str.endEmptyElement();
    }
  }
  saveIDRefSingle(e, t) {
    let s = e.eGetResolve(t, !1);
    if (s && Re(s)) {
      let r = this.getIDRef(s);
      r != "" && this._str.addAttribute(this.getFeatureQName(t), r);
    }
  }
  saveIDRefMany(e, t) {
    let s = e.eGetResolve(t, !1), r = !1, a = "", o = !0;
    for (const u of s)
      if (u) {
        let _ = this.getIDRef(u);
        _ == "" ? r = !0 : (o || (a += " "), a += _, o = !1);
      }
    !r && a.length > 0 && this._str.addAttribute(this.getFeatureQName(t), a);
  }
  getSaveResourceKindSingle(e, t) {
    let s = e.eGetResolve(t, !1);
    if (s) {
      if (s.eIsProxy())
        return 2;
      {
        let r = s.eResource();
        return r == this._resource || !r ? 1 : 2;
      }
    } else return 0;
  }
  getSaveResourceKindMany(e, t) {
    let s = e.eGetResolve(t, !1);
    if (!s || s.isEmpty())
      return 0;
    for (const r of s) {
      let a = r;
      if (a) {
        if (a.eIsProxy())
          return 2;
        {
          let o = a.eResource();
          if (o && o != this._resource)
            return 2;
        }
      } else return 0;
    }
    return 1;
  }
  getDataType(e, t, s) {
    if (e == null)
      return null;
    {
      let r = t.eType;
      return r.ePackage.eFactoryInstance.convertToString(r, e);
    }
  }
  getHRef(e) {
    if (B(e)) {
      let t = e.eProxyURI();
      if (!t && !e.eResource())
        if (this._resource && this._resource.eObjectIDManager)
          t = this.getResourceHRef(this._resource, e);
        else
          return this.handleDanglingHREF(e), "";
      try {
        return t = this._resource.eURI.relativize(t), t.toString();
      } catch {
        return "";
      }
    }
    return "";
  }
  handleDanglingHREF(e) {
    this.error(new V("Object is not contained in a resource.", this._resource.eURI.toString(), 0, 0));
  }
  error(e) {
    this._errorFn(e);
  }
  getResourceHRef(e, t) {
    let s = e.eURI;
    return new M({
      scheme: s.scheme,
      user: s.user,
      host: s.host,
      port: s.port,
      path: s.path,
      query: s.query,
      fragment: e.getURIFragment(t)
    });
  }
  getIDRef(e) {
    return this._resource ? "#" + this._resource.getURIFragment(e) : "";
  }
  getClassQName(e) {
    return this.getElementQName(e.ePackage, this.getXmlName(e), !1);
  }
  getFeatureQName(e) {
    if (this._extendedMetaData) {
      let t = this._extendedMetaData.getName(e), s = this._extendedMetaData.getNamespace(e), r = this.getPackageForSpace(s);
      return r ? this.getElementQName(r, t, !1) : t;
    } else
      return e.name;
  }
  getElementQName(e, t, s) {
    let r = this.getPrefix(e, s);
    return r == "" ? t : t.length == 0 ? r : r + ":" + t;
  }
  getXmlName(e) {
    return this._extendedMetaData ? this._extendedMetaData.getName(e) : e.name;
  }
  getPrefix(e, t) {
    let s = this._packages.get(e.nsURI);
    if (s === void 0) {
      e.nsURI;
      let r = !1, a = this._uriToPrefixes.get(e.nsURI);
      if (a) {
        for (const o of a)
          if (s = o, !t || s.length > 0) {
            r = !0;
            break;
          }
      }
      if (!r) {
        if (s = e.nsPrefix, s.length == 0 && t && (s = "_"), this._prefixesToURI.has(s)) {
          let o = this._prefixesToURI.get(s);
          if (o ? o != e.nsURI : e.nsURI) {
            let u = 1;
            for (; this._prefixesToURI.has(s + "_" + u.toString()); )
              u++;
            s += "_" + u.toString();
          }
        }
        this._prefixesToURI.set(s, e.nsURI);
      }
      this._packages.set(e.nsURI, s);
    }
    return s;
  }
  setPrefixToNamespace(e) {
    for (const t of e) {
      let s = t.key, r = t.value, a = this.getPackageForSpace(r);
      if (a && this._packages.set(a.nsURI, s), this._prefixesToURI.set(s, r), this._uriToPrefixes.has(r)) {
        let o = this._uriToPrefixes.get(r);
        o.push(s), this._uriToPrefixes.set(r, o);
      } else
        this._uriToPrefixes.set(r, []);
    }
  }
  getPackageForSpace(e) {
    let t = Ze();
    return this._resource.eResourceSet() && (t = this._resource.eResourceSet().getPackageRegistry()), t.getPackage(e);
  }
  shouldSaveFeature(e, t) {
    return e.eIsSet(t) || this._keepDefaults && t.defaultValueLiteral != "";
  }
  isNil(e, t) {
    return e.eGetResolve(t, !1) == null;
  }
  isEmpty(e, t) {
    return e.eGetResolve(t, !1).isEmpty();
  }
  getSaveFeatureKind(e) {
    if (e.isTransient)
      return 0;
    if (H(e))
      return e.isContainment ? e.isMany ? e.isUnsettable ? 11 : 7 : e.isUnsettable ? 10 : 6 : e.eOpposite && e.eOpposite.isContainment ? 0 : e.isMany ? e.isUnsettable ? 13 : 9 : e.isUnsettable ? 12 : 8;
    {
      let t = e.eType;
      return Qe(t) && !t.isSerializable ? 0 : e.isMany ? 5 : e.isUnsettable ? 4 : 1;
    }
  }
}
class ki extends Bs {
  constructor(e, t) {
    super(e, t), this._xmiVersion = "2.0";
  }
  getXMIVersion() {
    return this._xmiVersion;
  }
  setXMIVersion(e) {
    this._xmiVersion = e;
  }
  saveNamespaces() {
    this._str.addAttribute(X.xmiNS + ":" + X.versionAttrib, this._xmiVersion), this._str.addAttribute(X.xmlNS + ":" + X.xmiNS, X.xmiURI), super.saveNamespaces();
  }
}
class Yi {
  newEncoder(e, t) {
    return new ki(e, t);
  }
  newDecoder(e, t) {
    return new Bi(e, t);
  }
}
class ce {
  static {
    this.EXTENDED_META_DATA = "EXTENDED_META_DATA";
  }
  static {
    this.SUPPRESS_DOCUMENT_ROOT = "SUPPRESS_DOCUMENT_ROOT";
  }
  static {
    this.DEFERRED_REFERENCE_RESOLUTION = "DEFERRED_REFERENCE_RESOLUTION";
  }
  static {
    this.DEFERRED_ROOT_ATTACHMENT = "DEFERRED_ROOT_ATTACHMENT";
  }
  static {
    this.ID_ATTRIBUTE_NAME = "ID_ATTRIBUTE_NAME";
  }
  static {
    this.ROOT_OBJECTS = "ROOT_OBJECTS";
  }
}
class ji {
  newEncoder(e, t) {
    return new Bs(e, t);
  }
  newDecoder(e, t) {
    return new Ms(e, t);
  }
}
class Wt {
  static {
    this._instance = null;
  }
  static getInstance() {
    return this._instance || (this._instance = new Wt(), this._instance._extensionToCodec.set("ecore", new Yi()), this._instance._extensionToCodec.set("xml", new ji()), this._instance._extensionToCodec.set("bin", new Li()), this._instance._protocolToCodec.set("memory", new Ui())), this._instance;
  }
  constructor(e) {
    this._protocolToCodec = /* @__PURE__ */ new Map(), this._extensionToCodec = /* @__PURE__ */ new Map(), this._delegate = e;
  }
  getCodec(e) {
    let t = this._protocolToCodec.get(e.scheme);
    if (t)
      return t;
    let s = e.path.lastIndexOf(".");
    if (s != -1) {
      let r = e.path.slice(s + 1);
      if (t = this._extensionToCodec.get(r), t)
        return t;
    }
    return t = this._extensionToCodec.get("*"), t || (this._delegate ? this._delegate.getCodec(e) : null);
  }
  getProtocolToCodecMap() {
    return this._protocolToCodec;
  }
  getExtensionToCodecMap() {
    return this._extensionToCodec;
  }
}
class Vi {
  constructor() {
    this._namespaces = [], this._namespacesSize = 0, this._currentContext = -1, this._contexts = [];
  }
  pushContext() {
    this._currentContext++, this._currentContext >= this._contexts.length ? this._contexts.push(this._namespacesSize) : this._contexts[this._currentContext] = this._namespacesSize;
  }
  popContext() {
    let e = this._namespacesSize;
    return this._namespacesSize = this._contexts[this._currentContext], this._currentContext--, this._namespaces.slice(this._namespacesSize, e);
  }
  declarePrefix(e, t) {
    for (let s = this._namespacesSize; s > this._contexts[this._currentContext]; s--) {
      let r = this._namespaces[s - 1];
      if (r.prefix == e)
        return r.uri = t, !0;
    }
    return this._namespacesSize++, this._namespacesSize > this._namespaces.length ? this._namespaces.push({ prefix: e, uri: t }) : this._namespaces[this._namespacesSize] = {
      prefix: e,
      uri: t
    }, !1;
  }
  getPrefix(e) {
    for (let t = this._namespacesSize; t > 0; t--) {
      let s = this._namespaces[t - 1];
      if (s.uri == e)
        return s.prefix;
    }
    return null;
  }
  getURI(e) {
    for (let t = this._namespacesSize; t > 0; t--) {
      let s = this._namespaces[t - 1];
      if (s.prefix == e)
        return s.uri;
    }
    return null;
  }
}
class Xt {
  static {
    this._instance = null;
  }
  static getInstance() {
    return this._instance || (this._instance = new Xt(), this._instance.registerPackage(L())), this._instance;
  }
  constructor(e = null) {
    this._packages = /* @__PURE__ */ new Map(), this._delegate = e;
  }
  registerPackage(e) {
    this._packages.set(e.nsURI, e);
  }
  unregisterPackage(e) {
    this._packages.delete(e.nsURI);
  }
  getPackage(e) {
    let t = this._packages.get(e);
    return t || (this._delegate ? this._delegate.getPackage(e) : null);
  }
  getFactory(e) {
    let t = this._packages.get(e);
    return t ? t.eFactoryInstance : this._delegate ? this._delegate.getFactory(e) : null;
  }
}
class Ss {
  constructor(e, t) {
    this._objects = /* @__PURE__ */ new Map(), this._resolve = !1, this._originalReferences = !1, this._resolve = e, this._originalReferences = t;
  }
  copy(e) {
    if (e) {
      let t = this.createCopy(e);
      if (t) {
        this._objects.set(e, t);
        let s = e.eClass();
        for (const r of s.eAttributes)
          r.isChangeable && !r.isDerived && this.copyAttribute(r, e, t);
        for (const r of s.eReferences)
          r.isChangeable && !r.isDerived && r.isContainment && this.copyContainment(r, e, t);
        this.copyProxyURI(e, t);
      }
      return t;
    }
    return null;
  }
  copyAll(e) {
    let t = [];
    for (const s of e)
      t.push(this.copy(s));
    return new w(t);
  }
  createCopy(e) {
    let t = e.eClass();
    return t.ePackage.eFactoryInstance.create(t);
  }
  copyProxyURI(e, t) {
    if (e.eIsProxy()) {
      let s = e;
      t.eSetProxyURI(s.eProxyURI());
    }
  }
  copyAttribute(e, t, s) {
    t.eIsSet(e) && s.eSet(e, t.eGet(e));
  }
  copyContainment(e, t, s) {
    if (t.eIsSet(e)) {
      let r = t.eGetResolve(e, this._resolve);
      if (e.isMany) {
        let a = r;
        s.eSet(e, this.copyAll(a));
      } else {
        let a = r;
        s.eSet(e, this.copy(a));
      }
    }
  }
  copyReferences() {
    for (let [e, t] of this._objects)
      for (const s of e.eClass().eReferences)
        s.isChangeable && !s.isDerived && !s.isContainment && !s.isContainer && this.copyReference(s, e, t);
  }
  copyReference(e, t, s) {
    if (t.eIsSet(e)) {
      let r = t.eGetResolve(e, this._resolve);
      if (e.isMany) {
        let a = r, o = s.eGetResolve(e, !1), u = a;
        this._resolve || (u = a.getUnResolvedList());
        let _ = o.getUnResolvedList();
        if (u.isEmpty())
          _.clear();
        else {
          let h = e.eOpposite != null, d = 0;
          for (const S of u) {
            let O = this._objects.get(S);
            if (O) {
              if (h) {
                let F = _.indexOf(O);
                F == -1 ? _.insert(d, O) : d != F && _.move(d, O);
              } else
                _.insert(d, O);
              d++;
            } else
              this._originalReferences && !h && (_.insert(d, S), d++);
          }
        }
      } else if (Re(r)) {
        let a = this._objects.get(r);
        a ? s.eSet(e, a) : this._originalReferences && e.eOpposite == null && s.eSet(e, r);
      } else
        s.eSet(e, r);
    }
  }
}
class ps {
  constructor() {
    this._objects = /* @__PURE__ */ new Map();
  }
  equals(e, t) {
    if (e == null)
      return t == null;
    if (t == null)
      return !1;
    let s = this._objects.get(e);
    if (s)
      return s == t;
    let r = this._objects.get(t);
    if (r)
      return r == e;
    if (e == t)
      return this._objects.set(e, t), this._objects.set(t, e), !0;
    if (e.eIsProxy()) {
      let o = e.eProxyURI(), u = t.eProxyURI();
      return o == null && u == null || o && u && o.toString() == u.toString() ? (this._objects.set(e, t), this._objects.set(t, e), !0) : !1;
    } else if (t.eIsProxy())
      return !1;
    let a = e.eClass();
    if (a != t.eClass())
      return !1;
    this._objects.set(e, t), this._objects.set(t, e);
    for (const o of a.eAttributes)
      if (!o.isDerived && !this.equalsAttribute(e, t, o))
        return this._objects.delete(e), this._objects.delete(t), !1;
    for (const o of a.eReferences)
      if (!o.isDerived && !this.equalsReference(e, t, o))
        return this._objects.delete(e), this._objects.delete(t), !1;
    return !0;
  }
  equalsAll(e, t) {
    let s = e.size();
    if (s != t.size())
      return !1;
    for (let r = 0; r < s; r++) {
      let a = e.get(r), o = t.get(r);
      if (!this.equals(a, o))
        return !1;
    }
    return !0;
  }
  equalsAttribute(e, t, s) {
    let r = e.eIsSet(s), a = t.eIsSet(s);
    if (r && a) {
      let o = e.eGet(s), u = t.eGet(s);
      return o == u;
    }
    return r == a;
  }
  equalsReference(e, t, s) {
    let r = e.eIsSet(s), a = t.eIsSet(s);
    if (r && a) {
      let o = e.eGet(s), u = t.eGet(s);
      return s.isMany ? this.equalsAll(o, u) : this.equals(o, u);
    }
    return r == a;
  }
}
class se {
  static getEObjectID(e) {
    let s = e.eClass().eIDAttribute;
    return !s || !e.eIsSet(s) ? "" : this.convertToString(s.eAttributeType, e.eGet(s));
  }
  static setEObjectID(e, t) {
    let r = e.eClass().eIDAttribute;
    if (r = null) throw new Error("The object doesn't have an ID feature.");
    t.length == 0 ? e.eUnset(r) : e.eSet(r, this.createFromString(r.eAttributeType, t));
  }
  static convertToString(e, t) {
    return e.ePackage.eFactoryInstance.convertToString(e, t);
  }
  static createFromString(e, t) {
    return e.ePackage.eFactoryInstance.createFromString(e, t);
  }
  static resolveInObject(e, t) {
    return this.resolveInResourceSet(e, t?.eResource()?.eResourceSet());
  }
  static resolveInResource(e, t) {
    return this.resolveInResourceSet(e, t?.eResourceSet());
  }
  static resolveInResourceSet(e, t) {
    let s = e.eProxyURI();
    if (s) {
      let r;
      if (t)
        r = t.getEObject(s, !0);
      else {
        let a = s.toString(), o = a.lastIndexOf("#"), u = Ze().getPackage(
          o != -1 ? a.slice(0, o) : a
        );
        if (u) {
          let _ = u.eResource();
          _ && (r = _.getEObject(o != -1 ? a.slice(o + 1) : ""));
        }
      }
      if (r && r != e)
        return this.resolveInResourceSet(r, t);
    }
    return e;
  }
  static copy(e) {
    let t = new Ss(!0, !0), s = t.copy(e);
    return t.copyReferences(), s;
  }
  static copyAll(e) {
    let t = new Ss(!0, !0), s = t.copyAll(e);
    return t.copyReferences(), s;
  }
  static equals(e, t) {
    return new ps().equals(e, t);
  }
  static equalsAll(e, t) {
    return new ps().equalsAll(e, t);
  }
  static remove(e) {
    if (B(e)) {
      let t = e.eInternalContainer(), s = e.eContainmentFeature();
      t && s && (s.isMany ? t.eGet(s).remove(e) : t.eUnset(s));
      let r = e.eInternalResource();
      r && r.eContents().remove(e);
    }
  }
  static getAncestor(e, t) {
    let s = e;
    for (; s != null && s.eClass() != t; )
      s = s.eContainer();
    return s;
  }
  static isAncestor(e, t) {
    let s = t;
    for (; s != null && s != e; )
      s = s.eContainer();
    return s == e;
  }
  static getURI(e) {
    if (e.eIsProxy())
      return e.eProxyURI();
    {
      let t = e.eResource();
      if (t) {
        let s = t.eURI;
        return new M({
          scheme: s.scheme,
          host: s.host,
          port: s.port,
          user: s.user,
          path: s.path,
          query: s.query,
          fragment: t.getURIFragment(e)
        });
      } else {
        let s = se.getEObjectID(e);
        return s.length == 0 ? new M({ fragment: "//" + se.getRelativeURIFragmentPath(null, e, !1) }) : new M({ fragment: s });
      }
    }
  }
  static getRelativeURIFragmentPath(e, t, s) {
    if (e == t)
      return "";
    let r = t, a = r.eContainer(), o = /* @__PURE__ */ new Set(), u = [];
    for (; a != null && !o.has(r) && (o.add(r), a.eURIFragmentSegment(r.eContainingFeature(), r), r = a, a != e); )
      a = r.eContainer();
    if (r != e && e != null)
      throw Error("The ancestor not found");
    return u.join("/");
  }
}
var zi = new RegExp(
  "(([a-zA-Z][a-zA-Z0-9+.-]*):)?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?"
), Ji = new RegExp("^//([^/]*)(/.*)?$"), qi = new RegExp(
  "(?:([^@:]*)(?::([^@]*))?@)?(\\[[^\\]]*\\]|[^\\[:]*)(?::(\\d*))?"
);
function Ye(n) {
  let e = n.normalize().path;
  return process.platform == "win32" && e[0] == "/" && (e = e.slice(1)), e;
}
function Ki(n) {
  let e = n.replace(/\\/g, "/"), t = zi.exec(e);
  if (!t)
    throw new Error(`invalid uri: ${e}`);
  let s = t[2] ?? "", r = "", a = "", o = "", u = "", _ = t[3] ?? "", h = Ji.exec(_);
  if (!h)
    r = _;
  else {
    let d = h[1], S = qi.exec(d);
    if (!S)
      throw new Error(`invalid authority: ${d}`);
    S[1] && (u = S[1], S[2] && (u += S[2])), a = S[3] ?? "", o = S[4] ?? "", r = h[2] ?? "";
  }
  return {
    scheme: s,
    user: u,
    host: a,
    port: o,
    path: r,
    query: t[4] ?? "",
    fragment: t[5] ?? ""
  };
}
function Wi(n) {
  if (!n)
    return "";
  let e = "";
  if (n.scheme && (e += n.scheme + "://"), n.user || n.host || n.port) {
    if (n.user && (e += n.user + "@"), n.host)
      e += n.host;
    else
      throw new Error("host must be defined");
    n.port && (e += ":" + n.port);
  }
  if (n.path) {
    let t = n.path;
    n.host && n.path && n.path.charAt(0) != "/" && (e += "/"), e += t;
  }
  return n.query && (e += "?" + n.query), n.fragment && (e += "#" + n.fragment), e;
}
class M {
  static {
    this.emptyURI = new M();
  }
  constructor(e) {
    var t;
    typeof e == "string" ? t = Ki(e) : t = e, this.scheme = t?.scheme ?? "", this.user = t?.user ?? "", this.host = t?.host ?? "", this.port = t?.port ?? "", this.path = t?.path ?? "", this.query = t?.query ?? "", this.fragment = t?.fragment ?? "", this.rawURI = Wi(t);
  }
  toString() {
    return this.rawURI;
  }
  isOpaque() {
    return this.path == "";
  }
  isAbsolute() {
    return this.scheme != "";
  }
  isEmpty() {
    return this == M.emptyURI;
  }
  authority() {
    if (!this.host)
      return "";
    let e = "";
    return this.user && (e = this.user + "@"), e += this.host, this.port && (e += ":" + this.port), e;
  }
  normalize() {
    if (this.isOpaque())
      return this;
    let e = We(this.path);
    return e == this.path ? this : new M({
      scheme: this.scheme,
      user: this.user,
      host: this.host,
      port: this.port,
      path: e,
      query: this.query,
      fragment: this.fragment
    });
  }
  resolve(e) {
    if (e.isOpaque() || this.isOpaque())
      return e;
    let t = e.authority();
    if (!e.scheme && !t && !e.path && !e.fragment && !e.query)
      return !this.fragment || e.fragment == this.fragment ? this : new M({ fragment: e.fragment });
    if (e.scheme)
      return e;
    if (t)
      return new M({
        scheme: this.scheme,
        user: e.user,
        host: e.host,
        port: e.port,
        path: e.path,
        query: e.query,
        fragment: e.fragment
      });
    {
      let s = e.path;
      return (!s || s[0] != "/") && (s = tn(this.path, e.path, this.isAbsolute())), new M({
        scheme: this.scheme,
        user: this.user,
        host: this.host,
        port: this.port,
        path: s,
        query: e.query,
        fragment: e.fragment
      });
    }
  }
  relativize(e) {
    if (e.isOpaque() || this.isOpaque() || this.scheme != this.scheme || this.authority() != e.authority())
      return e;
    let t = We(this.path), s = We(e.path);
    if (t != s) {
      let r = t.lastIndexOf("/");
      if (r != -1 && (t = t.substring(0, r + 1)), !s.startsWith(t))
        return e;
    }
    return new M({ path: s.substring(t.length), query: e.query, fragment: e.fragment });
  }
  replacePrefix(e, t) {
    if (this.scheme != e.scheme || this.user != e.user || this.host != e.host || this.port != e.port)
      return null;
    let s = e.path.length;
    return this.path.length >= s && this.path.slice(0, s) == e.path ? new M({
      scheme: t.scheme,
      user: t.user,
      host: t.host,
      port: t.port,
      path: t.path + this.path.slice(s),
      query: this.query,
      fragment: this.fragment
    }) : null;
  }
  trimFragment() {
    return new M({
      scheme: this.scheme,
      user: this.user,
      host: this.host,
      port: this.port,
      path: this.path,
      query: this.query
    });
  }
  trimQuery() {
    return new M({
      scheme: this.scheme,
      user: this.user,
      host: this.host,
      port: this.port,
      path: this.path,
      fragment: this.fragment
    });
  }
}
function We(n) {
  let e = Buffer.from(n), t = Hi(e);
  if (t < 0)
    return n;
  let s = new Array(t);
  Qi(e, s), $i(e, s), Zi(e, s);
  let r = en(e, s);
  return e.subarray(0, r).toString();
}
const ie = 47, Te = 46, Xi = 58;
function Hi(n) {
  let e = !0, t = 0, s = n.length - 1, r = 0;
  for (; r <= s && n[r] == ie; )
    r++;
  for (r > 1 && (e = !1); r <= s; )
    for (n[r] == Te && (r == s || n[r + 1] == ie || n[r + 1] == Te && (r + 1 == s || n[r + 2] == ie)) && (e = !1), t++; r <= s; ) {
      let a = n[r];
      if (r++, a == ie) {
        for (; r <= s && n[r] == ie; )
          e = !1, r++;
        break;
      }
    }
  return e ? -1 : t;
}
function Qi(n, e) {
  let t = n.length - 1, s = 0, r = 0;
  for (; s <= t && n[s] == ie; )
    n[s] = 0, s++;
  for (; s <= t; )
    for (e[r] = s, s++, r++; s <= t; ) {
      let a = n[s];
      if (s++, a == ie) {
        for (n[s - 1] = 0; s <= t && n[s] == ie; )
          n[s] = 0, s++;
        break;
      }
    }
}
function $i(n, e) {
  let t = e.length, s = n.length - 1;
  for (let a = 0; a < t; a++) {
    let o = 0;
    for (let u = !0; u; u = a < t) {
      let _ = e[a];
      if (n[_] == Te) {
        if (_ == s) {
          o = 1;
          break;
        } else if (n[_ + 1] == 0) {
          o = 1;
          break;
        } else if (n[_ + 1] == Te && (_ + 1 == s || n[_ + 2] == 0)) {
          o = 2;
          break;
        }
      }
      a++;
    }
    if (a > t || o == 0)
      break;
    if (o == 1)
      e[a] = -1;
    else {
      var r;
      for (r = a - 1; r >= 0 && e[r] == -1; r--)
        ;
      if (r >= 0) {
        let u = e[r];
        n[u] == Te && n[u + 1] == Te && n[u + 2] == 0 || (e[a] = -1, e[r] = -1);
      }
    }
  }
}
function Zi(n, e) {
  if (n[0] == 0)
    return;
  let t = e.length, s = 0;
  for (; s < t && !(e[s] >= 0); )
    s++;
  if (s >= t || s == 0)
    return;
  let r = e[s];
  for (; r < n.length && n[r] != Xi && n[r] != 0; )
    r++;
  r >= n.length || n[r] == 0 || (n[0] = Te, n[1] = 0, e[0] = 0);
}
function en(n, e) {
  let t = e.length, s = n.length - 1, r = 0;
  n[r] == 0 && (n[r] = ie, r++);
  for (let a = 0; a < t; a++) {
    let o = e[a];
    if (o != -1) {
      if (r == o) {
        for (; r <= s && n[r] != 0; )
          r++;
        r <= s && (n[r] = ie, r++);
      } else if (r < o) {
        for (; o <= s && n[o] != 0; )
          n[r] = n[o], r++, o++;
        o <= s && (n[r] = ie, r++);
      }
    }
  }
  return r;
}
function tn(n, e, t) {
  let s = n.lastIndexOf("/"), r = e.length, a = "";
  return r == 0 ? s >= 0 && (a = n.substring(0, s + 1)) : (s >= 0 && (a = a + n.substring(0, s + 1)), a = a + e), We(a);
}
var Gs = {}, xs = {};
(function(n) {
  var e = /[|\\{}()[\]^$+*?.]/g, t = Object.prototype.hasOwnProperty, s = function(h, d) {
    return t.apply(h, [d]);
  };
  n.escapeRegExpChars = function(h) {
    return h ? String(h).replace(e, "\\$&") : "";
  };
  var r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&#34;",
    "'": "&#39;"
  }, a = /[&<>'"]/g;
  function o(h) {
    return r[h] || h;
  }
  var u = `var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;
  n.escapeXML = function(h) {
    return h == null ? "" : String(h).replace(a, o);
  };
  function _() {
    return Function.prototype.toString.call(this) + `;
` + u;
  }
  try {
    typeof Object.defineProperty == "function" ? Object.defineProperty(n.escapeXML, "toString", { value: _ }) : n.escapeXML.toString = _;
  } catch {
    console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)");
  }
  n.shallowCopy = function(h, d) {
    if (d = d || {}, h != null)
      for (var S in d)
        s(d, S) && (S === "__proto__" || S === "constructor" || (h[S] = d[S]));
    return h;
  }, n.shallowCopyFromList = function(h, d, S) {
    if (S = S || [], d = d || {}, h != null)
      for (var O = 0; O < S.length; O++) {
        var F = S[O];
        if (typeof d[F] < "u") {
          if (!s(d, F) || F === "__proto__" || F === "constructor")
            continue;
          h[F] = d[F];
        }
      }
    return h;
  }, n.cache = {
    _data: {},
    set: function(h, d) {
      this._data[h] = d;
    },
    get: function(h) {
      return this._data[h];
    },
    remove: function(h) {
      delete this._data[h];
    },
    reset: function() {
      this._data = {};
    }
  }, n.hyphenToCamel = function(h) {
    return h.replace(/-[a-z]/g, function(d) {
      return d[1].toUpperCase();
    });
  }, n.createNullProtoObjWherePossible = function() {
    return typeof Object.create == "function" ? function() {
      return /* @__PURE__ */ Object.create(null);
    } : { __proto__: null } instanceof Object ? function() {
      return {};
    } : function() {
      return { __proto__: null };
    };
  }(), n.hasOwnOnlyObject = function(h) {
    var d = n.createNullProtoObjWherePossible();
    for (var S in h)
      s(h, S) && (d[S] = h[S]);
    return d;
  };
})(xs);
const sn = "3.1.10", rn = {
  version: sn
};
(function(n) {
  /**
   * @file Embedded JavaScript templating engine. {@link http://ejs.co}
   * @author Matthew Eernisse <mde@fleegix.org>
   * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
   * @project EJS
   * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
   */
  var e = Z, t = ye, s = xs, r = !1, a = rn.version, o = "<", u = ">", _ = "%", h = "locals", d = "ejs", S = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", O = [
    "delimiter",
    "scope",
    "context",
    "debug",
    "compileDebug",
    "client",
    "_with",
    "rmWhitespace",
    "strict",
    "filename",
    "async"
  ], F = O.concat("cache"), q = /^\uFEFF/, he = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;
  n.cache = s.cache, n.fileLoader = e.readFileSync, n.localsName = h, n.promiseImpl = new Function("return this;")().Promise, n.resolveInclude = function(c, g, T) {
    var A = t.dirname, I = t.extname, D = t.resolve, v = D(T ? g : A(g), c), re = I(c);
    return re || (v += ".ejs"), v;
  };
  function ne(c, g) {
    var T;
    if (g.some(function(A) {
      return T = n.resolveInclude(c, A, !0), e.existsSync(T);
    }))
      return T;
  }
  function Ne(c, g) {
    var T, A, I = g.views, D = /^[A-Za-z]+:\\|^\//.exec(c);
    if (D && D.length)
      c = c.replace(/^\/*/, ""), Array.isArray(g.root) ? T = ne(c, g.root) : T = n.resolveInclude(c, g.root || "/", !0);
    else if (g.filename && (A = n.resolveInclude(c, g.filename), e.existsSync(A) && (T = A)), !T && Array.isArray(I) && (T = ne(c, I)), !T && typeof g.includer != "function")
      throw new Error('Could not find the include file "' + g.escapeFunction(c) + '"');
    return T;
  }
  function _e(c, g) {
    var T, A = c.filename, I = arguments.length > 1;
    if (c.cache) {
      if (!A)
        throw new Error("cache option requires a filename");
      if (T = n.cache.get(A), T)
        return T;
      I || (g = Y(A).toString().replace(q, ""));
    } else if (!I) {
      if (!A)
        throw new Error("Internal EJS error: no file name or template provided");
      g = Y(A).toString().replace(q, "");
    }
    return T = n.compile(g, c), c.cache && n.cache.set(A, T), T;
  }
  function rt(c, g, T) {
    var A;
    if (T) {
      try {
        A = _e(c)(g);
      } catch (I) {
        return T(I);
      }
      T(null, A);
    } else {
      if (typeof n.promiseImpl == "function")
        return new n.promiseImpl(function(I, D) {
          try {
            A = _e(c)(g), I(A);
          } catch (v) {
            D(v);
          }
        });
      throw new Error("Please provide a callback function");
    }
  }
  function Y(c) {
    return n.fileLoader(c);
  }
  function Ae(c, g) {
    var T = s.shallowCopy(s.createNullProtoObjWherePossible(), g);
    if (T.filename = Ne(c, T), typeof g.includer == "function") {
      var A = g.includer(c, T.filename);
      if (A && (A.filename && (T.filename = A.filename), A.template))
        return _e(T, A.template);
    }
    return _e(T);
  }
  function ve(c, g, T, A, I) {
    var D = g.split(`
`), v = Math.max(A - 3, 0), re = Math.min(D.length, A + 3), m = I(T), ae = D.slice(v, re).map(function(le, ue) {
      var ee = ue + v + 1;
      return (ee == A ? " >> " : "    ") + ee + "| " + le;
    }).join(`
`);
    throw c.path = m, c.message = (m || "ejs") + ":" + A + `
` + ae + `

` + c.message, c;
  }
  function te(c) {
    return c.replace(/;(\s*$)/, "$1");
  }
  n.compile = function(g, T) {
    var A;
    return T && T.scope && (r || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), r = !0), T.context || (T.context = T.scope), delete T.scope), A = new P(g, T), A.compile();
  }, n.render = function(c, g, T) {
    var A = g || s.createNullProtoObjWherePossible(), I = T || s.createNullProtoObjWherePossible();
    return arguments.length == 2 && s.shallowCopyFromList(I, A, O), _e(I, c)(A);
  }, n.renderFile = function() {
    var c = Array.prototype.slice.call(arguments), g = c.shift(), T, A = { filename: g }, I, D;
    return typeof arguments[arguments.length - 1] == "function" && (T = c.pop()), c.length ? (I = c.shift(), c.length ? s.shallowCopy(A, c.pop()) : (I.settings && (I.settings.views && (A.views = I.settings.views), I.settings["view cache"] && (A.cache = !0), D = I.settings["view options"], D && s.shallowCopy(A, D)), s.shallowCopyFromList(A, I, F)), A.filename = g) : I = s.createNullProtoObjWherePossible(), rt(A, I, T);
  }, n.Template = P, n.clearCache = function() {
    n.cache.reset();
  };
  function P(c, g) {
    var T = s.hasOwnOnlyObject(g), A = s.createNullProtoObjWherePossible();
    this.templateText = c, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", A.client = T.client || !1, A.escapeFunction = T.escape || T.escapeFunction || s.escapeXML, A.compileDebug = T.compileDebug !== !1, A.debug = !!T.debug, A.filename = T.filename, A.openDelimiter = T.openDelimiter || n.openDelimiter || o, A.closeDelimiter = T.closeDelimiter || n.closeDelimiter || u, A.delimiter = T.delimiter || n.delimiter || _, A.strict = T.strict || !1, A.context = T.context, A.cache = T.cache || !1, A.rmWhitespace = T.rmWhitespace, A.root = T.root, A.includer = T.includer, A.outputFunctionName = T.outputFunctionName, A.localsName = T.localsName || n.localsName || h, A.views = T.views, A.async = T.async, A.destructuredLocals = T.destructuredLocals, A.legacyInclude = typeof T.legacyInclude < "u" ? !!T.legacyInclude : !0, A.strict ? A._with = !1 : A._with = typeof T._with < "u" ? T._with : !0, this.opts = A, this.regex = this.createRegex();
  }
  P.modes = {
    EVAL: "eval",
    ESCAPED: "escaped",
    RAW: "raw",
    COMMENT: "comment",
    LITERAL: "literal"
  }, P.prototype = {
    createRegex: function() {
      var c = S, g = s.escapeRegExpChars(this.opts.delimiter), T = s.escapeRegExpChars(this.opts.openDelimiter), A = s.escapeRegExpChars(this.opts.closeDelimiter);
      return c = c.replace(/%/g, g).replace(/</g, T).replace(/>/g, A), new RegExp(c);
    },
    compile: function() {
      var c, g, T = this.opts, A = "", I = "", D = T.escapeFunction, v, re = T.filename ? JSON.stringify(T.filename) : "undefined";
      if (!this.source) {
        if (this.generateSource(), A += `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`, T.outputFunctionName) {
          if (!he.test(T.outputFunctionName))
            throw new Error("outputFunctionName is not a valid JS identifier.");
          A += "  var " + T.outputFunctionName + ` = __append;
`;
        }
        if (T.localsName && !he.test(T.localsName))
          throw new Error("localsName is not a valid JS identifier.");
        if (T.destructuredLocals && T.destructuredLocals.length) {
          for (var m = "  var __locals = (" + T.localsName + ` || {}),
`, ae = 0; ae < T.destructuredLocals.length; ae++) {
            var le = T.destructuredLocals[ae];
            if (!he.test(le))
              throw new Error("destructuredLocals[" + ae + "] is not a valid JS identifier.");
            ae > 0 && (m += `,
  `), m += le + " = __locals." + le;
          }
          A += m + `;
`;
        }
        T._with !== !1 && (A += "  with (" + T.localsName + ` || {}) {
`, I += `  }
`), I += `  return __output;
`, this.source = A + this.source + I;
      }
      T.compileDebug ? c = `var __line = 1
  , __lines = ` + JSON.stringify(this.templateText) + `
  , __filename = ` + re + `;
try {
` + this.source + `} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
` : c = this.source, T.client && (c = "escapeFn = escapeFn || " + D.toString() + `;
` + c, T.compileDebug && (c = "rethrow = rethrow || " + ve.toString() + `;
` + c)), T.strict && (c = `"use strict";
` + c), T.debug && console.log(c), T.compileDebug && T.filename && (c = c + `
//# sourceURL=` + re + `
`);
      try {
        if (T.async)
          try {
            v = new Function("return (async function(){}).constructor;")();
          } catch (K) {
            throw K instanceof SyntaxError ? new Error("This environment does not support async/await") : K;
          }
        else
          v = Function;
        g = new v(T.localsName + ", escapeFn, include, rethrow", c);
      } catch (K) {
        throw K instanceof SyntaxError && (T.filename && (K.message += " in " + T.filename), K.message += ` while compiling ejs

`, K.message += `If the above error is not helpful, you may want to try EJS-Lint:
`, K.message += "https://github.com/RyanZim/EJS-Lint", T.async || (K.message += `
`, K.message += "Or, if you meant to create an async function, pass `async: true` as an option.")), K;
      }
      var ue = T.client ? g : function(Fe) {
        var Pe = function(it, E) {
          var l = s.shallowCopy(s.createNullProtoObjWherePossible(), Fe);
          return E && (l = s.shallowCopy(l, E)), Ae(it, T)(l);
        };
        return g.apply(
          T.context,
          [Fe || s.createNullProtoObjWherePossible(), D, Pe, ve]
        );
      };
      if (T.filename && typeof Object.defineProperty == "function") {
        var ee = T.filename, Oe = t.basename(ee, t.extname(ee));
        try {
          Object.defineProperty(ue, "name", {
            value: Oe,
            writable: !1,
            enumerable: !1,
            configurable: !0
          });
        } catch {
        }
      }
      return ue;
    },
    generateSource: function() {
      var c = this.opts;
      c.rmWhitespace && (this.templateText = this.templateText.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
      var g = this, T = this.parseTemplateText(), A = this.opts.delimiter, I = this.opts.openDelimiter, D = this.opts.closeDelimiter;
      T && T.length && T.forEach(function(v, re) {
        var m;
        if (v.indexOf(I + A) === 0 && v.indexOf(I + A + A) !== 0 && (m = T[re + 2], !(m == A + D || m == "-" + A + D || m == "_" + A + D)))
          throw new Error('Could not find matching close tag for "' + v + '".');
        g.scanLine(v);
      });
    },
    parseTemplateText: function() {
      for (var c = this.templateText, g = this.regex, T = g.exec(c), A = [], I; T; )
        I = T.index, I !== 0 && (A.push(c.substring(0, I)), c = c.slice(I)), A.push(T[0]), c = c.slice(T[0].length), T = g.exec(c);
      return c && A.push(c), A;
    },
    _addOutput: function(c) {
      if (this.truncate && (c = c.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = !1), !c)
        return c;
      c = c.replace(/\\/g, "\\\\"), c = c.replace(/\n/g, "\\n"), c = c.replace(/\r/g, "\\r"), c = c.replace(/"/g, '\\"'), this.source += '    ; __append("' + c + `")
`;
    },
    scanLine: function(c) {
      var g = this, T = this.opts.delimiter, A = this.opts.openDelimiter, I = this.opts.closeDelimiter, D = 0;
      switch (D = c.split(`
`).length - 1, c) {
        case A + T:
        case A + T + "_":
          this.mode = P.modes.EVAL;
          break;
        case A + T + "=":
          this.mode = P.modes.ESCAPED;
          break;
        case A + T + "-":
          this.mode = P.modes.RAW;
          break;
        case A + T + "#":
          this.mode = P.modes.COMMENT;
          break;
        case A + T + T:
          this.mode = P.modes.LITERAL, this.source += '    ; __append("' + c.replace(A + T + T, A + T) + `")
`;
          break;
        case T + T + I:
          this.mode = P.modes.LITERAL, this.source += '    ; __append("' + c.replace(T + T + I, T + I) + `")
`;
          break;
        case T + I:
        case "-" + T + I:
        case "_" + T + I:
          this.mode == P.modes.LITERAL && this._addOutput(c), this.mode = null, this.truncate = c.indexOf("-") === 0 || c.indexOf("_") === 0;
          break;
        default:
          if (this.mode) {
            switch (this.mode) {
              case P.modes.EVAL:
              case P.modes.ESCAPED:
              case P.modes.RAW:
                c.lastIndexOf("//") > c.lastIndexOf(`
`) && (c += `
`);
            }
            switch (this.mode) {
              case P.modes.EVAL:
                this.source += "    ; " + c + `
`;
                break;
              case P.modes.ESCAPED:
                this.source += "    ; __append(escapeFn(" + te(c) + `))
`;
                break;
              case P.modes.RAW:
                this.source += "    ; __append(" + te(c) + `)
`;
                break;
              case P.modes.COMMENT:
                break;
              case P.modes.LITERAL:
                this._addOutput(c);
                break;
            }
          } else
            this._addOutput(c);
      }
      g.opts.compileDebug && D && (this.currentLine += D, this.source += "    ; __line = " + this.currentLine + `
`);
    }
  }, n.escapeXML = s.escapeXML, n.__express = n.renderFile, n.VERSION = a, n.name = d, typeof window < "u" && (window.ejs = n);
})(Gs);
const je = /* @__PURE__ */ Ps(Gs);
function nn() {
  const n = process.argv.slice(2), e = {
    modelPath: "./model/model.ecore",
    genPath: "./output",
    factories: !0,
    anopak: null
  };
  for (let t = 0; t < n.length; t++)
    switch (n[t]) {
      case "--model-path":
      case "-m":
        e.modelPath = n[++t];
        break;
      case "--gen-path":
      case "-g":
        e.genPath = n[++t];
        break;
      case "--ano-pak":
      case "-a":
        e.anopak = n[++t];
        break;
      case "--no_factories":
        e.factories = !1;
        break;
      case "--help":
      case "-h":
        console.log(`
TypeScript Model Generator

Usage: npm run dev [options]

Options:
  -m, --model-path <path>    Path to the Ecore model file (default: ./model/model.ecore)
  -g, --gen-path <path>      Path to the output directory (default: ./output)
  -- no_factories            Dont generate Factories   
  -a, --ano-pak<package>     import anaotations from seperate package
  -h, --help                 Show this help message

Examples:
  npm run dev -- --model-path ./my-model.ecore --gen-path ./generated
  npm run dev -- -m ./models/example.ecore -g ./src/generated
                `), process.exit(0);
        break;
      default:
        console.error(`Unknown option: ${n[t]}`), process.exit(1);
    }
  return e;
}
async function an() {
  const n = nn();
  console.log(`Model Path: ${n.modelPath}`), console.log(`Generation Path: ${n.genPath}`), Z.existsSync(n.genPath) || Z.mkdirSync(n.genPath, { recursive: !0 });
  let e = new et();
  e.eURI = new M(n.modelPath);
  const t = Z.readFileSync(n.modelPath);
  e.loadFromString(t.toString());
  for (const s of e.eContents())
    if (qe(s)) {
      const r = Array.from(s.eClassifiers);
      for (const a of r)
        if (Ee(a)) {
          const o = await je.renderFile("./templates/partials/class-file.ejs", {
            ePackage: s,
            eClass: a,
            anopak: n.anopak,
            isEPackage: qe,
            isEClass: Ee,
            isEEnum: fe,
            isEReference: H,
            isEAttribute: de
          });
          Z.writeFileSync(ye.join(n.genPath, `${a.name}.ts`), o), console.log(`Generated: ${a.name}.ts`);
        } else if (fe(a)) {
          const o = await je.renderFile("./templates/partials/enum-file.ejs", {
            eEnum: a,
            isEEnum: fe
          });
          Z.writeFileSync(ye.join(n.genPath, `${a.name}.ts`), o), console.log(`Generated: ${a.name}.ts`);
        }
      if (n.factories) {
        const a = await je.renderFile("./templates/partials/package-file.ejs", {
          ePackage: s,
          isEPackage: qe,
          isEClass: Ee,
          isEEnum: fe,
          isEReference: H,
          isEAttribute: de
        });
        Z.writeFileSync(ye.join(n.genPath, `${s.name}.pak.ts`), a), console.log(`Generated: ${s.name}.pak.ts`);
      }
      if (!n.anopak) {
        const a = await je.renderFile("./templates/partials/model-annotations.ejs", {});
        Z.writeFileSync(ye.join(n.genPath, "ModelAnnotations.ts"), a), console.log("Generated: ModelAnnotations.ts");
      }
    }
  console.log("Generation completed successfully!");
}
an().catch(console.error);
