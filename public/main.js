// main.mjs

import path from "path";
import fs from "fs";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, "../humanitarian");
let humanitarianList = [];

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const formatDate = (date) => {
  const datetimeArray = date?.split("T");
  const dateArray = datetimeArray[0]?.split("-");
  const timeArray = datetimeArray[1]?.split(":");
  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[0];
  const time = timeArray && `${timeArray[0]}:${timeArray[1]}`;

  return { month, monthName, day, year, time };
};

const getHumanitarianList = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices?.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            const images = [];
            console.log({metadata});
            metadata?.forEach((line) => {
              const [key, value] = line.split(": ");
              if (key === "  - image") {
                console.log({ key, value });

                images.push({ image: value });
              } else {
                obj[key] = value;
              }
            });
            obj['humaitarian_images'] = images;

            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices?.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines?.join("\n");
        };
        const lines = contents?.split("\n");
        const metadataIndices = lines?.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata?.date
          ? formatDate(metadata?.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata?.title ? metadata?.title : "No title given",
          date: metadata?.date ? metadata?.date : "No date given",
          description: metadata?.description
            ? metadata?.description
            : "No description given",
          humaitarian_images: metadata?.humaitarian_images
            ? metadata?.humaitarian_images
            : [],
        };
        humanitarianList.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = humanitarianList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/humanitarian.json", data);
        }
      });
    });
  });
  return;
};


// main.mjs

const dirPathStaking = path.join(__dirname, "../staking");
let stakingList = [];

const getPosts = () => {
  fs.readdir(dirPathStaking, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPathStaking}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices?.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata?.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices?.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines?.join("\n");
        };
        const lines = contents?.split("\n");
        const metadataIndices = lines?.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata?.date
          ? formatDate(metadata?.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata?.title ? metadata?.title : "No title given",
          description: metadata?.description
            ? metadata?.description
            : "No description given",
          locked_period: metadata?.locked_period
            ? metadata?.locked_period
            : "No locket period given",
          reward_rate: metadata?.reward_rate
            ? metadata?.reward_rate
            : "No reward rate given",
          early_exit_reward_fee: metadata?.early_exit_reward_fee
            ? metadata?.early_exit_reward_fee
            : "No early exit reward fee given",
          early_exit_fee: metadata?.early_exit_fee
            ? metadata?.early_exit_fee
            : "No early exit fee given",
        };
        stakingList.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = stakingList.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/stake.json", data);
        }
      });
    });
  });
  return;
};

// const getPages = () => {
//   fs.readdir(dirPathPages, (err, files) => {
//     if (err) {
//       return console.log("Failed to list contents of directory: " + err);
//     }
//     files.forEach((file, i) => {
//       let page;
//       fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
//         page = {
//           content: contents,
//         };
//         pagelist.push(page);
//         let data = JSON.stringify(pagelist);
//         fs.writeFileSync("src/pages.json", data);
//       });
//     });
//   });
//   return;
// };

getPosts();
getHumanitarianList();

// getPages();
