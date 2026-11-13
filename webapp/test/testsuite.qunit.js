sap.ui.define([], function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Walkthrough",
		defaults: {
			page: "ui5://test-resources/ui5/tutorial/walkthrough/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: { version: 2 },
			sinon: { version: 4 },
			ui5: { language: "en", theme: "sap_horizon" },
			loader: {
				paths: {
					"ui5/tutorial/walkthrough": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "UI5 Walkthrough - Unit Tests"
			},
			"integration/opaTests": {
				title: "UI5 Walkthrough - Integration Tests"
			}
		}
	};
});