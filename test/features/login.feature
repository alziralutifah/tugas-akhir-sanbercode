@regression @tdd @login
Feature: Login to KasirAja Web Application

  @all @positive @smoke
  Scenario Outline: Successful login with valid credentials
    Given I open KasirAja website
    When I login with <email> and <password>
    Then I should be redirected to the dashboard page

    Examples:
      | email               | password            | 
      | bakery@gmail.com    | qwerty123#          |                     



  @all @negative 
  Scenario Outline: Failed login with invalid credentials
    Given I open KasirAja website
    When I login with <email> and <password>
    Then I should see an <error message>

    Examples:
      | email                 | password            | error message                                 |
      | invalid@gmail.com     | qwerty123#          | Kredensial yang Anda berikan salah            |
      | bakery@gmail.com      | invalidpass         | Kredensial yang Anda berikan salah            |
      | invalidemail          | qwerty123#          | "email" must be a valid email                 |
      | bakery@gmail.com      | invalidpass         | Kredensial yang Anda berikan salah            |
      |                       | qwerty123#          | "email" is not allowed to be empty            |
      | invalid@gmail.com     |                     | "password" is not allowed to be empty         |
      |                       |                     | "email" is not allowed to be empty            |
      