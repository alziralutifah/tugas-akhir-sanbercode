@regression @tdd @registration
Feature: Registration on Kasiraja Web Application

  @all @positive @smoke
  Scenario Outline: Successful registration
    Given I open Kasiraja website and click the Daftar link
    When Input data <nama toko> and <email> and <password>
    And I click daftar button
    Then The system be redirected to login page

    Examples:
      | nama toko           | email                | password             | 
      | Bakeryalz           | random_email         | qwerty123#           |           

  @all @negative 
  Scenario Outline: Failed registration with invalid credentials
    Given I open Kasiraja website and click the Daftar link
    When Input data <nama toko> and <email> and <password>
    And I click daftar button
    Then The system displays a validation <error message>

    Examples:
      | nama toko                                                                                                                                                                                                                                                                           | email                 | password      | error message                                                                  |   
      | Bakeryalz                                                                                                                                                                                                                                                                           | bakery1@gmail.com     | qwerty123#    | Email sudah digunakan                                                          | 
      |                                                                                                                                                                                                                                                                                     | bakery1@gmail.com     | qwerty123#    | "name" is not allowed to be empty                                              |                
      | Bakeryalz                                                                                                                                                                                                                                                                           |                       | qwerty123#    | "email" is not allowed to be empty                                             | 
      | Bakeryalz                                                                                                                                                                                                                                                                           | bakery1@gmail.com     |               | "password" is not allowed to be empty                                          | 
      | Bakeryalz                                                                                                                                                                                                                                                                           | invalidemail          | qwerty123#    | "email" must be a valid email                                                  |
      | testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt | random_email          | qwerty123#    | Gagal melakukan registrasi: value too long for type character varying(255)     |
 