const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8");
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
    await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you");
    await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"));
    const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf-8");
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

fileOps();

// read File
// fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// we can read file like this too (recommended) 👇
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// Write File
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Hello nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Writing to the file is completed");

//     // node.js work asynchronously so it can sometimes append first if we don't want that we can put it inside one block like this example
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nIt's working",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         // Rename File
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("rename complete");
//           }
//         );
//       }
//     );
//   }
// );
// Append File (it will create file if doesn't exist and append to file if file exist)
// fs.appendFile(path.join(__dirname, "files", "test.txt"), 'testing append', (err) => {
//   if (err) throw err;
//   console.log('Append complete')
// })

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
