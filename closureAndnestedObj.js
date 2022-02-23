var dwayne = {},
  daniel = { firstName: "Daniel" },
  jason = { key: "jason" };

dwayne[daniel] = 123; //dwayne["object object"]
dwayne[jason] = 456;

console.log(dwayne);

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
