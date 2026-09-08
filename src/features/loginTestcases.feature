Feature: Test cases related to Login Page

Scenario Outline: Verify that user is able to enter username and password without any issue
    Given Navigate to the Login page
    When Enter username as "<username>" in username field
    And Enter password as "<password>" in password field

    Examples:
      | username  | password |
      | Something | Password |
      | Here      | There    |


@something
Scenario: Verify that user is able to login sucessfully with valid credentials
    Given Login with username: "doubledouble@gmail.com" and password: "double@1234"