import { BasePage } from "./BasePage";

export class AutomationPracticeFormPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get firstNameField() {
        return cy.get('[id="firstName"]');
    }

    static get lastNameField() {
        return cy.get('[id="lastName"]');
    }

    static get emailField() {
        return cy.get('[id="userEmail"]');
    }

    static get genderWrapper() {
        return cy.get('[id^="gender-radio-"]');
    }

    static get phoneNumberField() {
        return cy.get('[id="userNumber"]');
    }

    static get dateOfBirthField() {
        return cy.get('[id="dateOfBirthInput"]');
    }

    static get monthSelect() {
        return cy.get('.react-datepicker__month-select');
    }

    static get yearSelect() {
        return cy.get('.react-datepicker__year-select');
    }
    static get daySelect() {
        return cy.get('[class*="react-datepicker__day react-datepicker__day--"]:not([class*="outside-month"])');
    }

    static get subjectsField() {
        return cy.get('.subjects-auto-complete__value-container');
    }

    static get hobbiesCheckbox() {
        return cy.get('.custom-control-label');
    }

    static get uploadPictureBtn() {
        return cy.get('[id="uploadPicture"]');
    }

    static get currentAddressField() {
        return cy.get('[id="currentAddress"]');
    }

    static get stateSelect() {
        return cy.get('[id="state"]');
    }

    static get citySelect() {
        return cy.get('[id="city"]');
    }

    static get submitBtn() {
        return cy.get('[id="submit"]');
    }

    static get validationTable() {
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]');
    }
    
}
