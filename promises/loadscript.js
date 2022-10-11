const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve("Script has been loaded...");
    };

    script.onerror = () => {
      reject();
    };
  });
}

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
);

p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("Sorry unable to load Script...");
});
