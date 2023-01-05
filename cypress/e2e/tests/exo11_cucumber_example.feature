Feature: Login

  Scenario Outline: Login to Orange CRM Website
    Given User is at the login page
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button
    Then User is able to successfully login to the Website

    Examples: 
      | username | password |
      | Admin    | admin123 |

  Scenario Outline: Try to log in to Orange CRM Website with wrong password
    Given User is at the login page
    When User enters username as '<username>' and password as '<password>'
    And User clicks on login button
    Then User is unable to successfully login to the Website

    Examples: 
      | username | password |
      | Admin    | admin124 |
