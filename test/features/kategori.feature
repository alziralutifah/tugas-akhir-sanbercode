@regression @tdd @kategori
Feature: User access kategori page

  @all @positive @smoke
  Scenario Outline: Successful access kategori page
    Given I open KasirAja website
    When I login with <email> and <password>
    Then I should be redirected to the dashboard page

    Examples:
      | email               | password            | 
      | bakery@gmail.com    | qwerty123#          |                     
