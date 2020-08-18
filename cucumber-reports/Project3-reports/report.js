$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SuiteCRM.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Application testing on SuiteCRM Site",
  "description": "",
  "id": "application-testing-on-suitecrm-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@SuiteCRMActivities"
    }
  ]
});
formatter.background({
  "line": 23,
  "name": "User is Logged In CMR Site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLoginPage()"
});
formatter.result({
  "duration": 7934546900,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.submitLogin()"
});
formatter.result({
  "duration": 7741563800,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.i_should_be_logged_in()"
});
formatter.result({
  "duration": 154099,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Open the homepage and count the number of the dashlets on the page",
  "description": "",
  "id": "application-testing-on-suitecrm-site;open-the-homepage-and-count-the-number-of-the-dashlets-on-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@activity3_1"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Login to CRM Site",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "main page is displayed",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Count the number of Dashlets on the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Print the number and title of each Dashlet into the console",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMPortalLogin.loggedInCRM()"
});
formatter.result({
  "duration": 151500,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.onTheMainPage()"
});
formatter.result({
  "duration": 177400,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.countNumberOfDashlets()"
});
formatter.result({
  "duration": 172027200,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.getDashlet()"
});
formatter.result({
  "duration": 86576100,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.afterall()"
});
formatter.result({
  "duration": 814809100,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "User is Logged In CMR Site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLoginPage()"
});
formatter.result({
  "duration": 7515432701,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.submitLogin()"
});
formatter.result({
  "duration": 6848237200,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.i_should_be_logged_in()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Open the Leads page and add multiple lead accounts using values passed from  Feature file",
  "description": "",
  "id": "application-testing-on-suitecrm-site;open-the-leads-page-and-add-multiple-lead-accounts-using-values-passed-from -feature-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@activity3_2"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Navigate to Create Lead page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Fill in the necessary details \"Mr.\" and \"Jags\" and \"BR\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Click Save to finish",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Navigate to the View Leads page to see \"Mr. Jags BR\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLeadPage()"
});
formatter.result({
  "duration": 8419469201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 31
    },
    {
      "val": "Jags",
      "offset": 41
    },
    {
      "val": "BR",
      "offset": 52
    }
  ],
  "location": "CRMPortalLogin.fillDetailsOfLead(String,String,String)"
});
formatter.result({
  "duration": 2407859399,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.saveLeadDetails()"
});
formatter.result({
  "duration": 4469249799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr. Jags BR",
      "offset": 40
    }
  ],
  "location": "CRMPortalLogin.verifyLeadName(String)"
});
formatter.result({
  "duration": 3778852900,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.afterall()"
});
formatter.result({
  "duration": 877410400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "To schedule a meeting and include at least 3 invitees",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-schedule-a-meeting-and-include-at-least-3-invitees",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 45,
      "name": "@activity3_3"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Navigate to Meeting setup page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Enter the details of the meeting",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The names \"\u003cInvitee1\u003e\" and \"\u003cInvitee2\u003e\" and \"\u003cInvitee3\u003e\" and Click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Navigate to View Meetings page and confirm creation of the meeting",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-schedule-a-meeting-and-include-at-least-3-invitees;",
  "rows": [
    {
      "cells": [
        "Invitee1",
        "Invitee2",
        "Invitee3"
      ],
      "line": 54,
      "id": "application-testing-on-suitecrm-site;to-schedule-a-meeting-and-include-at-least-3-invitees;;1"
    },
    {
      "cells": [
        "Test",
        "Inchar",
        "Jag"
      ],
      "line": 55,
      "id": "application-testing-on-suitecrm-site;to-schedule-a-meeting-and-include-at-least-3-invitees;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 23,
  "name": "User is Logged In CMR Site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLoginPage()"
});
formatter.result({
  "duration": 6322076999,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.submitLogin()"
});
formatter.result({
  "duration": 6974726600,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.i_should_be_logged_in()"
});
formatter.result({
  "duration": 121700,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "To schedule a meeting and include at least 3 invitees",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-schedule-a-meeting-and-include-at-least-3-invitees;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SuiteCRMActivities"
    },
    {
      "line": 45,
      "name": "@activity3_3"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Navigate to Meeting setup page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Enter the details of the meeting",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The names \"Test\" and \"Inchar\" and \"Jag\" and Click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Navigate to View Meetings page and confirm creation of the meeting",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToMeetingPage()"
});
formatter.result({
  "duration": 8436246199,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.enterMeetingDetails()"
});
formatter.result({
  "duration": 3144924299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 11
    },
    {
      "val": "Inchar",
      "offset": 22
    },
    {
      "val": "Jag",
      "offset": 35
    }
  ],
  "location": "CRMPortalLogin.addingInvitees(String,String,String)"
});
formatter.result({
  "duration": 15316478800,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.verifytheMeeting()"
});
formatter.result({
  "duration": 3594116700,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.afterall()"
});
formatter.result({
  "duration": 1042981800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "To use an external Excel to add products",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@activity3_4"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Navigate to Create product page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Enter the details of the product \"\u003cname\u003e\" and \"\u003cprice\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Go to the \"View Products\" page to see product \"\u003cname\u003e\" listed",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;",
  "rows": [
    {
      "cells": [
        "name",
        "price"
      ],
      "line": 67,
      "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;;1"
    },
    {
      "cells": [
        "Ball",
        "2"
      ],
      "line": 68,
      "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;;2"
    },
    {
      "cells": [
        "Chocolate",
        "3"
      ],
      "line": 69,
      "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 23,
  "name": "User is Logged In CMR Site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLoginPage()"
});
formatter.result({
  "duration": 6016591601,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.submitLogin()"
});
formatter.result({
  "duration": 7186512200,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.i_should_be_logged_in()"
});
formatter.result({
  "duration": 66101,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "To use an external Excel to add products",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SuiteCRMActivities"
    },
    {
      "line": 58,
      "name": "@activity3_4"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Navigate to Create product page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Enter the details of the product \"Ball\" and \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Go to the \"View Products\" page to see product \"Ball\" listed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToProductPage()"
});
formatter.result({
  "duration": 5191591899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ball",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "CRMPortalLogin.enterProductDetails(String,String)"
});
formatter.result({
  "duration": 3159185199,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.clickSave()"
});
formatter.result({
  "duration": 4514707700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ball",
      "offset": 47
    }
  ],
  "location": "CRMPortalLogin.viewProductsPage(String)"
});
formatter.result({
  "duration": 3760491700,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.afterall()"
});
formatter.result({
  "duration": 868375400,
  "status": "passed"
});
formatter.background({
  "line": 23,
  "name": "User is Logged In CMR Site",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 24,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I submit username and password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToLoginPage()"
});
formatter.result({
  "duration": 6058635199,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.submitLogin()"
});
formatter.result({
  "duration": 7582197699,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.i_should_be_logged_in()"
});
formatter.result({
  "duration": 122999,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "To use an external Excel to add products",
  "description": "",
  "id": "application-testing-on-suitecrm-site;to-use-an-external-excel-to-add-products;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SuiteCRMActivities"
    },
    {
      "line": 58,
      "name": "@activity3_4"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Navigate to Create product page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Enter the details of the product \"Chocolate\" and \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Go to the \"View Products\" page to see product \"Chocolate\" listed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMPortalLogin.navigateToProductPage()"
});
formatter.result({
  "duration": 5188165799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chocolate",
      "offset": 34
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "CRMPortalLogin.enterProductDetails(String,String)"
});
formatter.result({
  "duration": 3154943800,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.clickSave()"
});
formatter.result({
  "duration": 4357861299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chocolate",
      "offset": 47
    }
  ],
  "location": "CRMPortalLogin.viewProductsPage(String)"
});
formatter.result({
  "duration": 3733130800,
  "status": "passed"
});
formatter.match({
  "location": "CRMPortalLogin.afterall()"
});
formatter.result({
  "duration": 981764400,
  "status": "passed"
});
});