var traverseDomAndCollectElements = function (matchFunc, startEl) {
	var resultSet = [];

	if (typeof startEl === "undefined") {
		startEl = document.body;
	}

	// recorre el árbol del DOM y recolecta elementos que matchien en resultSet
	// usa matchFunc para identificar elementos que matchien

	// TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
	// tu código aquí
	var type = null;
	if (selector[0] === "#") {
		type = "id";
	} else if (selector[0] === ".") {
		type = "class";
	} else if (selector[3] === ".") {
		type = "tag.class";
	} else {
		type = "tag";
	}
	return type;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
	var selectorType = selectorTypeMatcher(selector);
	var matchFunction;
	if (selectorType === "id") {
	} else if (selectorType === "class") {
		matchFunction = true;
	} else if (selectorType === "tag.class") {
		matchFunction = true;
	} else if (selectorType === "tag") {
		matchFunction = true;
	}
	return matchFunction;
};

var $ = function (selector) {
	var elements;
	var selectorMatchFunc = matchFunctionMaker(selector);
	elements = traverseDomAndCollectElements(selectorMatchFunc);
	return elements;
};
