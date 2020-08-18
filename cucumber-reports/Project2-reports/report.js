$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRMfeatures.feature");
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
  "name": "Application testing OrangeHRM",
  "description": "",
  "id": "application-testing-orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    }
  ]
});
formatter.before({
  "duration": 16366596700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To create a job vacancy for \"DevOps Engineer\"",
  "description": "",
  "id": "application-testing-orangehrm;to-create-a-job-vacancy-for-\"devops-engineer\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@activity2_1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Click on the \"Vacancies\" menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on the \"Add\" button to navigate to the \"Add Job Vacancy\" form",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Fill out the necessary details and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 3993637100,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.navigatetoVacancyPage()"
});
formatter.result({
  "duration": 3579310200,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addJobVacancy()"
});
formatter.result({
  "duration": 974484400,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.saveJobVacancy()"
});
formatter.result({
  "duration": 3653336700,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.verifyJobDetails()"
});
formatter.result({
  "duration": 3664664300,
  "status": "passed"
});
formatter.after({
  "duration": 1104734400,
  "status": "passed"
});
formatter.before({
  "duration": 12088301600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Add information about a candidate for recruitment",
  "description": "",
  "id": "application-testing-orangehrm;add-information-about-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@activity2_2"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Click on the \"Add\" button to navigate to the candidate information form",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Fill out the necessary details and Upload a resume to the form",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill out the necessary details and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Navigate back to the Recruitments page to confirm candidate entry",
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 3682834300,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addCandidateInfo()"
});
formatter.result({
  "duration": 2425878800,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addDetailsOfCandidate()"
});
formatter.result({
  "duration": 3515653500,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.saveJobVacancy()"
});
formatter.result({
  "duration": 3721093800,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.verifyCandidateAdd()"
});
formatter.result({
  "duration": 3604353900,
  "status": "passed"
});
formatter.after({
  "duration": 874544800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@activity2_3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Navigate to the PIM page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Click on the \"Add\" button to navigate to the employee information form",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Fill out \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cusername\u003e\" and Create Login Details checkbox is checked",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Fill out the necessary details and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Navigate back to the employee page to confirm employee \"\u003cfirstName\u003e\" entry",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "username"
      ],
      "line": 48,
      "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "john",
        "Automation",
        "John406"
      ],
      "line": 49,
      "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;;2"
    },
    {
      "cells": [
        "jagadish",
        "Automation",
        "Jags406"
      ],
      "line": 50,
      "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11962919400,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    },
    {
      "line": 39,
      "name": "@activity2_3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Navigate to the PIM page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Click on the \"Add\" button to navigate to the employee information form",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Fill out \"john\" and \"Automation\" and \"John406\" and Create Login Details checkbox is checked",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Fill out the necessary details and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Navigate back to the employee page to confirm employee \"john\" entry",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openPIMPage()"
});
formatter.result({
  "duration": 3835692100,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addEmployeeInfoPage()"
});
formatter.result({
  "duration": 501270200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 10
    },
    {
      "val": "Automation",
      "offset": 21
    },
    {
      "val": "John406",
      "offset": 38
    }
  ],
  "location": "HRMPortalLogin.enterEmployeeInfo(String,String,String)"
});
formatter.result({
  "duration": 659615800,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.saveJobVacancy()"
});
formatter.result({
  "duration": 5615032100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 56
    }
  ],
  "location": "HRMPortalLogin.verifyTheemployeeId(String)"
});
formatter.result({
  "duration": 11258875500,
  "status": "passed"
});
formatter.after({
  "duration": 1499638000,
  "status": "passed"
});
formatter.before({
  "duration": 11811546600,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "application-testing-orangehrm;add-multiple-employees-using-an-the-examples-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    },
    {
      "line": 39,
      "name": "@activity2_3"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Navigate to the PIM page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Click on the \"Add\" button to navigate to the employee information form",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Fill out \"jagadish\" and \"Automation\" and \"Jags406\" and Create Login Details checkbox is checked",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Fill out the necessary details and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Navigate back to the employee page to confirm employee \"jagadish\" entry",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openPIMPage()"
});
formatter.result({
  "duration": 3976328800,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addEmployeeInfoPage()"
});
formatter.result({
  "duration": 396979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jagadish",
      "offset": 10
    },
    {
      "val": "Automation",
      "offset": 25
    },
    {
      "val": "Jags406",
      "offset": 42
    }
  ],
  "location": "HRMPortalLogin.enterEmployeeInfo(String,String,String)"
});
formatter.result({
  "duration": 621424400,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.saveJobVacancy()"
});
formatter.result({
  "duration": 4740921800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jagadish",
      "offset": 56
    }
  ],
  "location": "HRMPortalLogin.verifyTheemployeeId(String)"
});
formatter.result({
  "duration": 10957814400,
  "status": "passed"
});
formatter.after({
  "duration": 2162233200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Creating multiple vacancies using data the Examples tables",
  "description": "",
  "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@activity2_4"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Click on the \"Vacancies\" menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on the \"Add\" button to navigate to Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Fill out \"\u003cJob_Title\u003e\" and \"\u003cJobVacancy_name\u003e\" and \"\u003chiringManager\u003e\" and \"\u003cnoOfPositions\u003e\" and Click the \"Save\" button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify that the vacancy \"\u003cJobVacancy_name\u003e\" was created",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;",
  "rows": [
    {
      "cells": [
        "Job_Title",
        "JobVacancy_name",
        "hiringManager",
        "noOfPositions"
      ],
      "line": 62,
      "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;1"
    },
    {
      "cells": [
        "1",
        "SDET1 Automation",
        "Test Tester",
        "1"
      ],
      "line": 63,
      "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;2"
    },
    {
      "cells": [
        "2",
        "SDET2 Automation",
        "Test Tester",
        "1"
      ],
      "line": 64,
      "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;3"
    },
    {
      "cells": [
        "3",
        "SDET3 Automation",
        "Test Tester",
        "1"
      ],
      "line": 65,
      "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13468352200,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Creating multiple vacancies using data the Examples tables",
  "description": "",
  "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@activity2_4"
    },
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Click on the \"Vacancies\" menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on the \"Add\" button to navigate to Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Fill out \"1\" and \"SDET1 Automation\" and \"Test Tester\" and \"1\" and Click the \"Save\" button",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify that the vacancy \"SDET1 Automation\" was created",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 4049279200,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.navigatetoVacancyPage()"
});
formatter.result({
  "duration": 3359433200,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addJobVacancies()"
});
formatter.result({
  "duration": 3388951800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    },
    {
      "val": "SDET1 Automation",
      "offset": 18
    },
    {
      "val": "Test Tester",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "HRMPortalLogin.fillJobVancancyDetails(int,String,String,String)"
});
formatter.result({
  "duration": 3880697600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SDET1 Automation",
      "offset": 25
    }
  ],
  "location": "HRMPortalLogin.verifyJobVacancyCreated(String)"
});
formatter.result({
  "duration": 8716017400,
  "status": "passed"
});
formatter.after({
  "duration": 1005457600,
  "status": "passed"
});
formatter.before({
  "duration": 11675994000,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Creating multiple vacancies using data the Examples tables",
  "description": "",
  "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@activity2_4"
    },
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Click on the \"Vacancies\" menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on the \"Add\" button to navigate to Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Fill out \"2\" and \"SDET2 Automation\" and \"Test Tester\" and \"1\" and Click the \"Save\" button",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify that the vacancy \"SDET2 Automation\" was created",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 3862861000,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.navigatetoVacancyPage()"
});
formatter.result({
  "duration": 3491827300,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addJobVacancies()"
});
formatter.result({
  "duration": 3370602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    },
    {
      "val": "SDET2 Automation",
      "offset": 18
    },
    {
      "val": "Test Tester",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "HRMPortalLogin.fillJobVancancyDetails(int,String,String,String)"
});
formatter.result({
  "duration": 4053222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SDET2 Automation",
      "offset": 25
    }
  ],
  "location": "HRMPortalLogin.verifyJobVacancyCreated(String)"
});
formatter.result({
  "duration": 8864803000,
  "status": "passed"
});
formatter.after({
  "duration": 1054619300,
  "status": "passed"
});
formatter.before({
  "duration": 13104844300,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Creating multiple vacancies using data the Examples tables",
  "description": "",
  "id": "application-testing-orangehrm;creating-multiple-vacancies-using-data-the-examples-tables;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 53,
      "name": "@activity2_4"
    },
    {
      "line": 19,
      "name": "@OrangeHRMActivities"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Navigate to the \"Recruitment\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Click on the \"Vacancies\" menu item to navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on the \"Add\" button to navigate to Add Job Vacancy form",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Fill out \"3\" and \"SDET3 Automation\" and \"Test Tester\" and \"1\" and Click the \"Save\" button",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Verify that the vacancy \"SDET3 Automation\" was created",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HRMPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 4271236900,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.navigatetoVacancyPage()"
});
formatter.result({
  "duration": 3495947400,
  "status": "passed"
});
formatter.match({
  "location": "HRMPortalLogin.addJobVacancies()"
});
formatter.result({
  "duration": 3629485100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    },
    {
      "val": "SDET3 Automation",
      "offset": 18
    },
    {
      "val": "Test Tester",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "HRMPortalLogin.fillJobVancancyDetails(int,String,String,String)"
});
formatter.result({
  "duration": 3949610600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SDET3 Automation",
      "offset": 25
    }
  ],
  "location": "HRMPortalLogin.verifyJobVacancyCreated(String)"
});
formatter.result({
  "duration": 8328243000,
  "status": "passed"
});
formatter.after({
  "duration": 1091639400,
  "status": "passed"
});
});