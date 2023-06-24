importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyC3G2ka8lCyoUk4LtKPM4je0cZJpJXtcco",
  authDomain: "playground-project-5d0b5.firebaseapp.com",
  projectId: "playground-project-5d0b5",
  storageBucket: "playground-project-5d0b5.appspot.com",
  messagingSenderId: "948687891983",
  appId: "1:948687891983:web:e95eff07a66820155abd7a",
  measurementId: "G-Q0D4H72X2F"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});