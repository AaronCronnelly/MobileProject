import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Filesystem } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor() {}

  async saveData() {
    // Retrieve input values
    const firstName = (<HTMLInputElement>document.getElementById('firstNameInput')).value;
    const lastName = (<HTMLInputElement>document.getElementById('lastNameInput')).value;
    const email = (<HTMLInputElement>document.getElementById('emailInput')).value;
    const age = (<HTMLInputElement>document.getElementById('ageInput')).value;

    // Create an object to store the data
    const profileData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age
    };

    // Convert the object to JSON string
    const jsonData = JSON.stringify(profileData);

    // Save the data to the filesystem
    try {
      await Filesystem['writeFile']({
        path: 'profile_data.txt',
        data: jsonData,
        directory: 'DATA',
        encoding: 'utf-8'
      });

      // Optionally, you can provide feedback to the user that the data has been saved
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error
    }
  }
}


