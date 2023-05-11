import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(private toastController: ToastController, private file: File) {}

  async saveData() {
    // Retrieve input values
    const airline = (document.getElementById('airlineInput') as HTMLInputElement).value;
    const tailNumber = (document.getElementById('tailNumberInput') as HTMLInputElement).value;
    const type = (document.getElementById('typeSelect') as HTMLSelectElement).value;
    const livery = (document.getElementById('liverySelect') as HTMLSelectElement).value;

    // Create an object to store the data
    const profileData = {
      airline: airline,
      tailNumber: tailNumber,
      type: type,
      livery: livery
    };

    // Convert the object to JSON string
    const jsonData = JSON.stringify(profileData);

    // Save the data to the filesystem
    try {
      const result = await this.file.writeFile(this.file.dataDirectory, 'profile_data.txt', jsonData, { replace: true });

      if (result.isFile) {
        // Show the toast message
        const toast = await this.toastController.create({
          message: 'Data saved successfully',
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error
    }
  }
}
