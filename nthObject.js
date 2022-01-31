const response_object = {
  result: {
    data_1: {
      data_2: {
        data_3: {
          data_4: "Got it",
        },
      },
    },
  },
  n: 4,
};
let count = 0;
let newResponse = response_object.result;

const iterate = (obj) => {
  count++;
  Object.keys(obj).forEach((key) => {
    if (count == response_object.n)
      console.log(`key: ${key}, value: ${obj[key]}`);

    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]);
    }
  });
};
iterate(newResponse);
