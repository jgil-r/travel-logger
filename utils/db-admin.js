import firebase from './firebase-admin';

export async function getAllTravelLogs() {
  try {
    const snapshot = await firebase.collection('logs').get();
    const logs = [];

    snapshot.forEach(doc => {
      logs.push({ id: doc.id, ...doc.data() });
    });

    return { logs };
  } catch (error) {
    return { error };
  }
}
