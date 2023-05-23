// Funcion anonima autoinvocada
(() => {

    // aplicamos el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthDate: Date;
        gender: Gender;
        name: string;
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
    }
    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true
        }
    }

    interface SettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }
    class Settings {
        lastOpenFolder: string;
        workingDirectory: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthDate: Date;

    }

    class UserSettings {

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, birthDate, gender, email, role, workingDirectory, lastOpenFolder }: UserSettingProps) {
            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
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

    console.log({ userSettings });

    userSettings.user.checkCredentials();
})();