
const admin = require("./dbconfig1");
const bucket = admin.storage().bucket();
const uuid = require("uuid-v4"); // npm install uuid-v4

// ... inside your function:

await bucket.upload("file12.pdf", {
  destination: "uploads/file.pdf",
  metadata: {
    cacheControl: "max-age=31536000",

    // "custom" metadata:
    metadata: {
      firebaseStorageDownloadTokens: uuid(), // Can technically be anything you want
    },
  },
})

const createPersistentDownloadUrl = (bucket, pathToFile, downloadToken) => {
    return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
      pathToFile
    )}?alt=media&token=${downloadToken}`;
  };