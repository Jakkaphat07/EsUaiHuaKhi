let storeList = document.querySelector('#storeList');
let borrowList = document.querySelector('#borrowList');
let borrowForm = document.querySelector('#borrowForm');


// Test database can access
db.collection("store")
    .doc("test")
    .set({
        name: "test",
        item: "1",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

/*
db.collection("store").where("name", "==", "เลื่อยลันดา")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
*/






