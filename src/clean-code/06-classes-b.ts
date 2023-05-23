// Funcion anonima autoinvocada
(() => {

    // No aplicamos el principio de responsabilidad unicas

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person {

        public birthDate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthDate }: PersonProps) {
            this.birthDate = birthDate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ birthDate, email, gender, name, role }: UserProps) {
            super({ name, gender, birthDate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;

        }

        checkCredentials() {
            return true
        }

    }

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;

    }

    class UserSettings extends User {
        lastOpenFolder: string;
        workingDirectory: string;

        constructor({ workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingProps) {
            super({ email, role, name, gender, birthDate })
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'C:/',
        lastOpenFolder: 'C:/projects',
        email: 'john@',
        role: 'admin',
        name: 'John',
        gender: 'M',
        birthDate: new Date()
    });

    console.log(userSettings);

})();