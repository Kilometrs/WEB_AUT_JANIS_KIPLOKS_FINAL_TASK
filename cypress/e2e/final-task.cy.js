import { AutomationPracticeFormPage } from "../pageObjects/AutomationPracticeFormPage";
describe("Demoqa Final task", () => {
    context("FINAL TASK I GUESS", () => {
        it("The only scenraio", () => {
            AutomationPracticeFormPage.visit();
            AutomationPracticeFormPage.firstNameField.type('Jānis');
            AutomationPracticeFormPage.lastNameField.type('Naudasvīrs');
            AutomationPracticeFormPage.emailField.type('janis.naudasvirs@nauda.xd')
            AutomationPracticeFormPage.genderWrapper.filter('[value="Other"]').next('label').click();
            AutomationPracticeFormPage.phoneNumberField.type('1234567890');
            AutomationPracticeFormPage.dateOfBirthField.click()
            AutomationPracticeFormPage.monthSelect.select('February');
            AutomationPracticeFormPage.yearSelect.select('1930');
            AutomationPracticeFormPage.daySelect.contains('28').click();
            AutomationPracticeFormPage.subjectsField.type('Economics{enter}');
            AutomationPracticeFormPage.hobbiesCheckbox.contains('Music').click();
            AutomationPracticeFormPage.uploadPictureBtn.selectFile('files/image.jpg');
            AutomationPracticeFormPage.currentAddressField.type('Tvaika iela 420');
            AutomationPracticeFormPage.stateSelect.click().type('NCR{enter}');
            AutomationPracticeFormPage.citySelect.click().type('Delhi{enter}');
            AutomationPracticeFormPage.submitBtn.click();

            const data = [
                { label: 'Student Name', value: 'Jānis Naudasvīrs' },
                { label: 'Student Email', value: 'janis.naudasvirs@nauda.xd' },
                { label: 'Gender', value: 'Other' },
                { label: 'Mobile', value: '1234567890' },
                { label: 'Date of Birth', value: '28 February,1930' },
                { label: 'Subjects', value: 'Economics' },
                { label: 'Hobbies', value: 'Music' },
                { label: 'Picture', value: 'image.jpg' },
                { label: 'Address', value: 'Tvaika iela 420' },
                { label: 'State and City', value: 'NCR Delhi' },
            ];
            
            data.forEach(item => {
                AutomationPracticeFormPage.validationTable.contains('td', item.label).next().should('contain', item.value);
            });
        });
    });
});