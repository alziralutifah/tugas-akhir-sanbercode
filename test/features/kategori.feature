@regression @tdd @kategori
Feature: User access kategori page

  @all @positive 
  Scenario Outline: Successfully access the category page
    Given I am logged in to the application
    When I login with <email> and <password>
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I log out of the application

  Examples:
      | email               | password            | 
      | bakery@gmail.com    | qwerty123#          |                     


  @all @positive 
  Scenario: Adding a new category with valid data
    Given I am logged in to the application
    When I login with <email> and <password>
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button
    And I redirected to categori page
    And I should see the new category <nama> in the table
    And I log out of the application

    Examples:
      | email               | password            | nama               | deskripsi            |
      | bakery@gmail.com    | qwerty123#          | Heels              | Sepatu berhak        |                    
 
       

  @all @negative 
  Scenario: Adding a new category with invalid data
    Given I am logged in to the application
    When I login with <email> and <password>
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button
    Then I should see the <error message> 
    And I log out of the application

    Examples:
      | nama               | deskripsi            | error message                                   | email               | password          |   
      |                    | Sepatu berhak        | "name" is not allowed to be empty               | bakery@gmail.com    | qwerty123#        |  

  
