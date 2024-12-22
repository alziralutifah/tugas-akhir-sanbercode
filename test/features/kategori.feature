@regression @tdd @kategori
Feature: User access kategori page

  Background:
    Given I am logged in to the application

  @all @positive 
  Scenario Outline: Successfully access the category page
    Given I am on the dashboard page
    When I click on the category menu in the sidebar
    Then I should be redirected to the category page
    And I log out of the application

  @all @positive @tambah
  Scenario: Adding a new category with valid data
    Given I am on the dashboard page
    When I click on the category menu in the sidebar
    Then I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button
    And I redirected to categori page
    And I should see the new category <nama> in the table
    And I log out of the application

    Examples:
      | nama               | deskripsi            | 
      | Heels              | Sepatu berhak        | 

  @all @negative @tambah
  Scenario: Adding a new category with invalid data
    Given I am on the dashboard page
    When I click on the category menu in the sidebar
    Then I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button
    Then I should see the <error message> 
    And I log out of the application

    Examples:
      | nama               | deskripsi            | error message                                   |
      |                    | Sepatu berhak        | "name" is not allowed to be empty               |

  @all @positive @edit
  Scenario: Editing a category with valid data
    Given I am on the dashboard page
    When I click on the category menu in the sidebar
    Then I should be redirected to the category page
    And The category <nama> exist in the category table
    And I click the action button 
    And I choose ubah button 
    And I edit the category name to <ubahNama>
    And I click the simpan button
    And The category name has been successfully changed to <ubahNama>

   Examples:
      | nama               | ubahNama             | 
      | Heels              | Sneakers             | 


  
