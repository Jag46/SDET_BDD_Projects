$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobBoard.feature");
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
  "line": 21,
  "name": "Testing Alchemy Jobs website",
  "description": "",
  "id": "testing-alchemy-jobs-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@jobBoardActivities"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Visit the site’s backend and create a new user",
  "description": "",
  "id": "testing-alchemy-jobs-website;visit-the-site’s-backend-and-create-a-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@activity1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on Alchemy Jobs Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Locate the \"Add New\" button and click it",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Fill in the necessary details",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click the \"Add New User\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify that the user was created",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobPortalLogin.loginPage()"
});
formatter.result({
  "duration": 7891032900,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.enterCredentials()"
});
formatter.result({
  "duration": 3166297400,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.readTitleAndHeading()"
});
formatter.result({
  "duration": 12896777800,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.fillDetails()"
});
formatter.result({
  "duration": 607911100,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.clickAddButton()"
});
formatter.result({
  "duration": 6425826500,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.verifyDetailsAdded()"
});
formatter.result({
  "duration": 6259502600,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.teardown()"
});
formatter.result({
  "duration": 1610814500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Searching for jobs and applying to them using XPath",
  "description": "",
  "id": "testing-alchemy-jobs-website;searching-for-jobs-and-applying-to-them-using-xpath",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@activity2"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Open browser with ​Alchemy Jobs site and navigate to Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Type in keywords to search for jobs and change the Job type to \"Full Time\" jobs",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Find the title of the job listing using XPath and print it to the console",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Find and Click on the \"Apply for job\" button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobPortalLogin.openJobSite()"
});
formatter.result({
  "duration": 10947906000,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.searchJobKeyword()"
});
formatter.result({
  "duration": 3354249600,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.printJobTitleOnConsle()"
});
formatter.result({
  "duration": 667117200,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.applyForJob()"
});
formatter.result({
  "duration": 235731200,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.teardown()"
});
formatter.result({
  "duration": 1464637900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Post a job using details passed from the Feature file",
  "description": "",
  "id": "testing-alchemy-jobs-website;post-a-job-using-details-passed-from-the-feature-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@activity3"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "Open browser with ​Alchemy Jobs site and navigate to Post Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "fill in the details \"john56@123.com\" and \"Automation Analyst\" and \"Bangalore\" and \"Job is for Automation\" and \"IBM\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "submit the details",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Go to the Jobs page and Confirm job listing is shown on page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobPortalLogin.openJobPostSite()"
});
formatter.result({
  "duration": 13227373100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john56@123.com",
      "offset": 21
    },
    {
      "val": "Automation Analyst",
      "offset": 42
    },
    {
      "val": "Bangalore",
      "offset": 67
    },
    {
      "val": "Job is for Automation",
      "offset": 83
    },
    {
      "val": "IBM",
      "offset": 111
    }
  ],
  "location": "JobPortalLogin.fillInJobDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 2475215100,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.submitDetails()"
});
formatter.result({
  "duration": 2234638300,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.moveToJobPage()"
});
formatter.result({
  "duration": 3802653000,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.teardown()"
});
formatter.result({
  "duration": 1164147400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Scenario Outline and Examples table to post a job",
  "description": "",
  "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@activity4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Open browser with ​Alchemy Jobs site and navigate to Post Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "fill in the details \"\u003cemail\u003e\" and \"\u003cjob_title\u003e\" and \"\u003cjob_location\u003e\" and \"\u003cjob_description\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "submit the details",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Go to the Jobs page and Confirm job \"\u003cjob_title\u003e\" listing is shown on page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;",
  "rows": [
    {
      "cells": [
        "email",
        "job_title",
        "job_location",
        "job_description",
        "company"
      ],
      "line": 59,
      "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;;1"
    },
    {
      "cells": [
        "john46@123.com",
        "Automation Junior",
        "Bangalore",
        "jobs in automation",
        "abc"
      ],
      "line": 60,
      "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;;2"
    },
    {
      "cells": [
        "john@test123.com",
        "Automation SDET",
        "London",
        "jobs in automation",
        "ibm"
      ],
      "line": 61,
      "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Scenario Outline and Examples table to post a job",
  "description": "",
  "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@jobBoardActivities"
    },
    {
      "line": 50,
      "name": "@activity4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Open browser with ​Alchemy Jobs site and navigate to Post Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "fill in the details \"john46@123.com\" and \"Automation Junior\" and \"Bangalore\" and \"jobs in automation\" and \"abc\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "submit the details",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Go to the Jobs page and Confirm job \"Automation Junior\" listing is shown on page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobPortalLogin.openJobPostSite()"
});
formatter.result({
  "duration": 12986760200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john46@123.com",
      "offset": 21
    },
    {
      "val": "Automation Junior",
      "offset": 42
    },
    {
      "val": "Bangalore",
      "offset": 66
    },
    {
      "val": "jobs in automation",
      "offset": 82
    },
    {
      "val": "abc",
      "offset": 107
    }
  ],
  "location": "JobPortalLogin.fillInJobDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 2475124400,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.submitDetails()"
});
formatter.result({
  "duration": 2182492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Junior",
      "offset": 37
    }
  ],
  "location": "JobPortalLogin.moveJobPage(String)"
});
formatter.result({
  "duration": 3632584200,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.teardown()"
});
formatter.result({
  "duration": 1433725500,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Scenario Outline and Examples table to post a job",
  "description": "",
  "id": "testing-alchemy-jobs-website;scenario-outline-and-examples-table-to-post-a-job;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@jobBoardActivities"
    },
    {
      "line": 50,
      "name": "@activity4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "Open browser with ​Alchemy Jobs site and navigate to Post Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "fill in the details \"john@test123.com\" and \"Automation SDET\" and \"London\" and \"jobs in automation\" and \"ibm\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "submit the details",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Go to the Jobs page and Confirm job \"Automation SDET\" listing is shown on page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "JobPortalLogin.openJobPostSite()"
});
formatter.result({
  "duration": 13579384700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john@test123.com",
      "offset": 21
    },
    {
      "val": "Automation SDET",
      "offset": 44
    },
    {
      "val": "London",
      "offset": 66
    },
    {
      "val": "jobs in automation",
      "offset": 79
    },
    {
      "val": "ibm",
      "offset": 104
    }
  ],
  "location": "JobPortalLogin.fillInJobDetails(String,String,String,String,String)"
});
formatter.result({
  "duration": 2435672600,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.submitDetails()"
});
formatter.result({
  "duration": 2416495800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation SDET",
      "offset": 37
    }
  ],
  "location": "JobPortalLogin.moveJobPage(String)"
});
formatter.result({
  "duration": 3693235500,
  "status": "passed"
});
formatter.match({
  "location": "JobPortalLogin.teardown()"
});
formatter.result({
  "duration": 1070812700,
  "status": "passed"
});
});