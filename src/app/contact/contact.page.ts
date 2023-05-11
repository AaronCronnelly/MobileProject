import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  name: string='';
  email: string='';
  message: string='';

  constructor(private toastController: ToastController) {}

  async sendMessage() {
    // Perform any necessary logic for sending the message
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

    // Display a toast notification
    const toast = await this.toastController.create({
      message: 'Message sent!',
      duration: 2000, // Notification duration in milliseconds
      position: 'bottom' // Position of the notification on the screen
    });
    toast.present();
  }
}
