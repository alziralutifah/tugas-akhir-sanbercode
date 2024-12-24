@regression @tdd @kategori
Feature: User access category page

  @all @positive 
  Scenario Outline: Successfully access the category page
    Given I am logged in to the application
    When I have success login with valid credentials
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I log out of the application                    

  @all @positive 
  Scenario: Adding a new category with valid data
    Given I am logged in to the application
    When I have success login with valid credentials
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button   
    And I should see the new category <nama> in the table
    And I log out of the application

    Examples:
      | nama               | deskripsi            |
      | Heels              | Sepatu berhak        |                    
 

  @all @negative 
  Scenario: Adding a new category with invalid data
    Given I am logged in to the application
    When I have success login with valid credentials
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And I click the tambah button
    And I fill in <nama> and <deskripsi>
    And I click the simpan button
    Then The system displays an <error message> 
    And I log out of the application

    Examples:
      | nama               | deskripsi            | error message                                   | 
      |                    | Sepatu berhak        | "name" is not allowed to be empty               |  

@all @positive 
  Scenario: Editing a category with valid data
    Given I am logged in to the application
    When I have success login with valid credentials
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And The category <oldCategory> exist in the category table
    And I click the action button 
    And I choose ubah button 
    And I update the category name to <newCategory>
    And I click the simpan button
    And The category has been successfully changed 
    And I log out of the application

   Examples:
      | oldCategory               | newCategory             | 
      | Heels                     | Sneakers                | 

  @all @positive @delete
  Scenario: Deleting a category
    Given I am logged in to the application
    When I have success login with valid credentials
    Then I click on the category menu in the sidebar
    And I should be redirected to the category page
    And The category <oldCategory> exist in the category table
    And I click the action button 
    And I click the delete button
    And I confirm the deletion
    And The category has been successfully deleted 

  Examples:
    | oldCategory            |
    | HeelsSneakers          |

  
  


  
