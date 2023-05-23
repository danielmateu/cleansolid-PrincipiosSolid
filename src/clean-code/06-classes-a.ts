// Funcion anonima autoinvocada
(() => {

    // No aplicamos el principio de responsabilidad unicas

    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,
        ) { }
    }

    // const newPerson = new Person('John', 'M', new Date('1990-01-01'));
    // console.log(newPerson);

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            // private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,

        ) {
            super(name, gender, birthDate);
        }

        checkCredentials() {
            return true
        }
    }

    class UserSettings extends User {

        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,

        ) {
            super(email, role, name, gender, birthDate)
        }
    }

    const userSettings = new UserSettings(
        'C:/',
        'C:/projects',
        'john@',
        'admin',
        'John',
        'M',
        new Date()
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });


})();