/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
// Definición de la interfaz NotificationService
class NotificationService {
  // eslint-disable-next-line no-unused-vars
  send(message) {
    throw new Error('This method should be overridden!');
  }
}

// Implementaciones específicas de NotificationService
class EmailNotification extends NotificationService {
  send(message) {
    console.log(`Enviando correo electrónico: ${message}`);
  }
}

class PushNotification extends NotificationService {
  send(message) {
    console.log(`Enviando notificación PUSH: ${message}`);
  }
}

class SMSNotification extends NotificationService {
  send(message) {
    console.log(`Enviando SMS: ${message}`);
  }
}

// Sistema de notificaciones que depende de la abstracción
class NotificationManager {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  notify(message) {
    this.notificationService.send(message);
  }
}

// Crear instancias de los servicios de notificación
const emailService = new EmailNotification();
const pushService = new PushNotification();
const smsService = new SMSNotification();

// Crear instancias de NotificationManager con diferentes servicios
const emailManager = new NotificationManager(emailService);
const pushManager = new NotificationManager(pushService);
const smsManager = new NotificationManager(smsService);

// Usar los managers para enviar notificaciones
emailManager.notify('Tienes un nuevo correo electrónico.');
pushManager.notify('Tienes una nueva notificación PUSH.');
smsManager.notify('Tienes un nuevo SMS.');
